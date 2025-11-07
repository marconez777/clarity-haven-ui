import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import { Progress } from '@/components/ui/progress';

interface ImportProgress {
  total: number;
  imported: number;
  failed: number;
  currentPost: string;
}

const WordPressImport = () => {
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState<ImportProgress | null>(null);
  const [completed, setCompleted] = useState(false);
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

  const downloadImage = async (url: string, fileName: string): Promise<string | null> => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Falha ao baixar imagem');
      
      const blob = await response.blob();
      const file = new File([blob], fileName, { type: blob.type });
      
      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true
        });
      
      if (error) throw error;
      
      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(data.path);
      
      return publicUrl;
    } catch (error) {
      console.error('Erro ao fazer download da imagem:', error);
      return null;
    }
  };

  const handleImport = async () => {
    if (!file) return;
    
    setImporting(true);
    setProgress({ total: 0, imported: 0, failed: 0, currentPost: '' });

    try {
      const xmlText = await file.text();
      const xmlDoc = parseXML(xmlText);

      // Verificar erros de parsing
      const parserError = xmlDoc.querySelector('parsererror');
      if (parserError) {
        throw new Error('Erro ao processar o arquivo XML');
      }

      // Criar mapa de attachments (imagens)
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

      // Obter todos os posts
      const posts = Array.from(items).filter(item => {
        const postType = getTextContent(item.getElementsByTagName('wp:post_type')[0]);
        const status = getTextContent(item.getElementsByTagName('wp:status')[0]);
        return postType === 'post' && status === 'publish';
      });

      setProgress(prev => prev ? { ...prev, total: posts.length } : null);

      // Criar registro de importação
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

      // Processar cada post
      for (const item of posts) {
        try {
          const title = getTextContent(item.getElementsByTagName('title')[0]);
          setProgress(prev => prev ? { ...prev, currentPost: title } : null);

          // Extrair dados do post
          const content = getTextContent(item.getElementsByTagName('content:encoded')[0]);
          const excerpt = getTextContent(item.getElementsByTagName('excerpt:encoded')[0]);
          const slug = getTextContent(item.getElementsByTagName('wp:post_name')[0]);
          const creator = getTextContent(item.getElementsByTagName('dc:creator')[0]);
          const pubDate = getTextContent(item.getElementsByTagName('wp:post_date_gmt')[0]);

          // Extrair categoria
          const categoryElements = item.querySelectorAll('category[domain="category"]');
          let categoryName = 'Geral';
          if (categoryElements.length > 0) {
            categoryName = getTextContent(categoryElements[0]);
          }

          // Buscar ou criar categoria
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

          // Extrair dados SEO
          const seoTitle = getPostMeta(item, '_yoast_wpseo_title') || title;
          const seoDescription = getPostMeta(item, '_yoast_wpseo_metadesc');
          const readTime = getPostMeta(item, '_yoast_wpseo_estimated-reading-time-minutes');

          // Extrair e fazer download da imagem destacada
          let featuredImageUrl: string | null = null;
          const thumbnailId = getPostMeta(item, '_thumbnail_id');
          if (thumbnailId && attachmentMap.has(thumbnailId)) {
            const imageUrl = attachmentMap.get(thumbnailId)!;
            const imageFileName = `${slug}-${Date.now()}.jpg`;
            featuredImageUrl = await downloadImage(imageUrl, imageFileName);
          }

          // Inserir post
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
            console.error('Erro ao importar post:', title, postError);
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
          console.error('Erro ao processar post:', error);
          failedCount++;
        }
      }

      // Atualizar registro de importação
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
      console.error('Erro na importação:', error);
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
      <Helmet>
        <title>Importar WordPress - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Importar do WordPress</h2>

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
    </>
  );
};

export default WordPressImport;
