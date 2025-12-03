import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Progress } from '@/components/ui/progress';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface ImportProgress {
  total: number;
  imported: number;
  failed: number;
  currentPost: string;
  imagesFound: number;
  imagesImported: number;
  imagesFailed: number;
}

const WordPressImportContent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState<ImportProgress | null>(null);
  const [completed, setCompleted] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setProgress(null);
      setCompleted(false);
    }
  };

  const parseXML = (xmlText: string): Document => {
    const parser = new DOMParser();
    return parser.parseFromString(xmlText, 'text/xml');
  };

  const getTextContent = (element: Element | null): string => {
    return element?.textContent?.trim() || '';
  };

  const getPostMeta = (item: Element, metaKey: string): string => {
    const metaElements = item.getElementsByTagName('wp:postmeta');
    for (let i = 0; i < metaElements.length; i++) {
      const keyElement = metaElements[i].getElementsByTagName('wp:meta_key')[0];
      if (getTextContent(keyElement) === metaKey) {
        const valueElement = metaElements[i].getElementsByTagName('wp:meta_value')[0];
        return getTextContent(valueElement);
      }
    }
    return '';
  };

  const handleDeleteAll = async () => {
    setDeleting(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');
      
      if (error) throw error;
      
      toast({
        title: 'Posts excluídos com sucesso',
        description: 'Todos os posts foram removidos do banco de dados.',
      });
      
      setShowDeleteDialog(false);
    } catch (error: any) {
      toast({
        title: 'Erro ao excluir posts',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setDeleting(false);
    }
  };

  const downloadImage = async (url: string, fileName: string, retries = 3): Promise<string | null> => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const { data, error } = await supabase.functions.invoke('download-image', {
          body: { imageUrl: url, fileName }
        });
        
        if (error) throw error;
        
        if (data?.publicUrl) {
          return data.publicUrl;
        }
        
        if (data?.error) {
          throw new Error(data.error);
        }
        
        throw new Error('Resposta inválida da Edge Function');
        
      } catch (error: any) {
        if (attempt === retries) {
          return null;
        }
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
    
    return null;
  };

  const handleImport = async () => {
    if (!file) return;
    
    setImporting(true);
    setProgress({ 
      total: 0, 
      imported: 0, 
      failed: 0, 
      currentPost: '',
      imagesFound: 0,
      imagesImported: 0,
      imagesFailed: 0
    });

    try {
      const xmlText = await file.text();
      const xmlDoc = parseXML(xmlText);

      const parserError = xmlDoc.querySelector('parsererror');
      if (parserError) {
        throw new Error('Erro ao processar o arquivo XML');
      }

      const items = xmlDoc.getElementsByTagName('item');
      const attachmentMap = new Map<string, string>();
      
      Array.from(items).forEach(item => {
        const postType = getTextContent(item.getElementsByTagName('wp:post_type')[0]);
        if (postType === 'attachment') {
          const attachmentId = getTextContent(item.getElementsByTagName('wp:post_id')[0]);
          const attachmentUrl = getTextContent(item.getElementsByTagName('wp:attachment_url')[0]);
          if (attachmentId && attachmentUrl) {
            attachmentMap.set(attachmentId, attachmentUrl);
          }
        }
      });

      const posts = Array.from(items).filter(item => {
        const postType = getTextContent(item.getElementsByTagName('wp:post_type')[0]);
        const status = getTextContent(item.getElementsByTagName('wp:status')[0]);
        return postType === 'post' && status === 'publish';
      });

      setProgress(prev => prev ? { ...prev, total: posts.length } : null);

      const { data: importRecord, error: importError } = await supabase
        .from('wordpress_imports')
        .insert({
          file_name: file.name,
          status: 'processing',
          total_posts: posts.length,
        })
        .select()
        .single();

      if (importError) throw importError;

      let importedCount = 0;
      let failedCount = 0;
      let imagesFoundCount = 0;
      let imagesImportedCount = 0;
      let imagesFailedCount = 0;

      for (const item of posts) {
        try {
          const title = getTextContent(item.getElementsByTagName('title')[0]);
          setProgress(prev => prev ? { ...prev, currentPost: title } : null);

          const content = getTextContent(item.getElementsByTagName('content:encoded')[0]);
          const excerpt = getTextContent(item.getElementsByTagName('excerpt:encoded')[0]);
          const slug = getTextContent(item.getElementsByTagName('wp:post_name')[0]);
          const creator = getTextContent(item.getElementsByTagName('dc:creator')[0]);
          const pubDate = getTextContent(item.getElementsByTagName('wp:post_date_gmt')[0]);

          const categoryElements = item.querySelectorAll('category[domain="category"]');
          let categoryName = 'Geral';
          if (categoryElements.length > 0) {
            categoryName = getTextContent(categoryElements[0]);
          }

          let { data: category } = await supabase
            .from('blog_categories')
            .select('id')
            .eq('name', categoryName)
            .single();

          if (!category) {
            const { data: newCategory } = await supabase
              .from('blog_categories')
              .insert({
                name: categoryName,
                slug: categoryName.toLowerCase().replace(/\s+/g, '-'),
              })
              .select('id')
              .single();
            category = newCategory;
          }

          const seoTitle = getPostMeta(item, '_yoast_wpseo_title') || title;
          const seoDescription = getPostMeta(item, '_yoast_wpseo_metadesc');
          const readTime = getPostMeta(item, '_yoast_wpseo_estimated-reading-time-minutes');

          let featuredImageUrl: string | null = null;
          const thumbnailId = getPostMeta(item, '_thumbnail_id');
          
          if (thumbnailId) {
            imagesFoundCount++;
            
            if (attachmentMap.has(thumbnailId)) {
              const imageUrl = attachmentMap.get(thumbnailId)!;
              const imageFileName = `${slug}-${Date.now()}.jpg`;
              featuredImageUrl = await downloadImage(imageUrl, imageFileName);
              
              if (featuredImageUrl) {
                imagesImportedCount++;
              } else {
                imagesFailedCount++;
              }
            } else {
              imagesFailedCount++;
            }
          }
          
          setProgress(prev => prev ? { 
            ...prev, 
            imagesFound: imagesFoundCount,
            imagesImported: imagesImportedCount,
            imagesFailed: imagesFailedCount
          } : null);

          const { error: postError } = await supabase
            .from('blog_posts')
            .insert({
              title,
              slug,
              excerpt: excerpt || content.substring(0, 200).replace(/<[^>]*>/g, ''),
              content,
              author: creator || 'Dr. Gabriel Lopes',
              category_id: category?.id,
              status: 'published',
              published_at: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
              featured_image: featuredImageUrl,
              seo_title: seoTitle,
              seo_description: seoDescription,
              read_time: readTime ? `${readTime} min` : '5 min',
            });

          if (postError) {
            failedCount++;
          } else {
            importedCount++;
          }

          setProgress(prev => prev ? { 
            ...prev, 
            imported: importedCount,
            failed: failedCount 
          } : null);

        } catch (error) {
          failedCount++;
        }
      }

      await supabase
        .from('wordpress_imports')
        .update({
          status: 'completed',
          imported_posts: importedCount,
          failed_posts: failedCount,
          completed_at: new Date().toISOString(),
        })
        .eq('id', importRecord.id);

      setCompleted(true);
      toast({
        title: 'Importação concluída!',
        description: `${importedCount} posts importados com sucesso. ${failedCount} falharam.`,
      });

    } catch (error: any) {
      toast({
        title: 'Erro na importação',
        description: error.message || 'Ocorreu um erro ao importar os posts',
        variant: 'destructive',
      });
    } finally {
      setImporting(false);
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Importar do WordPress</h2>
          <Button
            variant="destructive"
            onClick={() => setShowDeleteDialog(true)}
            disabled={importing || deleting}
          >
            Excluir Todos os Posts
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload do arquivo XML</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <input
                type="file"
                accept=".xml"
                onChange={handleFileChange}
                className="hidden"
                id="xml-upload"
              />
              <label htmlFor="xml-upload" className="cursor-pointer">
                <Button variant="outline" asChild>
                  <span>
                    <Upload className="w-4 h-4 mr-2" />
                    Selecionar arquivo XML
                  </span>
                </Button>
              </label>
              {file && (
                <p className="mt-4 text-sm text-muted-foreground">{file.name}</p>
              )}
            </div>

            {progress && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span>{progress.imported + progress.failed} / {progress.total}</span>
                  </div>
                  <Progress 
                    value={((progress.imported + progress.failed) / progress.total) * 100} 
                  />
                </div>

                {progress.currentPost && (
                  <p className="text-sm text-muted-foreground">
                    Importando: <span className="font-medium">{progress.currentPost}</span>
                  </p>
                )}

                <div className="space-y-2">
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{progress.imported} importados</span>
                    </div>
                    {progress.failed > 0 && (
                      <div className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="w-4 h-4" />
                        <span>{progress.failed} falharam</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-4 text-sm border-t pt-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>🖼️ Imagens: {progress.imagesFound} encontradas</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <span>✅ {progress.imagesImported} importadas</span>
                    </div>
                    {progress.imagesFailed > 0 && (
                      <div className="flex items-center gap-2 text-destructive">
                        <span>❌ {progress.imagesFailed} falharam</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={handleImport}
              disabled={!file || importing || completed}
              className="w-full"
            >
              {importing ? 'Importando...' : completed ? 'Importação Concluída' : 'Iniciar Importação'}
            </Button>

            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-2">Instruções:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Exporte seu conteúdo do WordPress em formato XML (WXR)</li>
                <li>Faça upload do arquivo aqui</li>
                <li>Aguarde o processamento (pode levar alguns minutos)</li>
                <li>Verifique os posts importados na lista de posts</li>
              </ol>
              <p className="mt-4 text-xs">
                <strong>Nota:</strong> Apenas posts publicados serão importados. As categorias serão criadas automaticamente se não existirem.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão de todos os posts</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir TODOS os posts do blog? Esta ação não pode ser desfeita e removerá permanentemente todos os artigos do banco de dados.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAll}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={deleting}
            >
              {deleting ? 'Excluindo...' : 'Excluir Todos'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default WordPressImportContent;
