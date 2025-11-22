import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pageSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  slug: z.string().min(1, 'URL é obrigatória').regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'URL deve conter apenas letras minúsculas, números e hífens'),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  status: z.enum(['draft', 'published']),
});

type PageFormData = z.infer<typeof pageSchema>;

const PageEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');

  const isEditMode = !!id;

  const { data: page } = useQuery({
    queryKey: ['page', id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: isEditMode,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PageFormData>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      status: 'draft',
    },
  });

  useEffect(() => {
    if (page) {
      setValue('title', page.title);
      setValue('slug', page.slug);
      setValue('seo_title', page.seo_title || '');
      setValue('seo_description', page.seo_description || '');
      setValue('status', page.status as 'draft' | 'published');
      setContent(page.content || '');
    }
  }, [page, setValue]);

  const saveMutation = useMutation({
    mutationFn: async (data: PageFormData & { content: string }) => {
      const pageData = {
        title: data.title,
        slug: data.slug,
        content: data.content,
        seo_title: data.seo_title || null,
        seo_description: data.seo_description || null,
        status: data.status,
        template: 'modelo-local',
      };

      if (isEditMode) {
        const { error } = await supabase
          .from('pages')
          .update({
            ...pageData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('pages')
          .insert(pageData);
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
      toast.success(isEditMode ? 'Página atualizada!' : 'Página criada!');
      navigate('/admin/pages');
    },
    onError: (error) => {
      toast.error('Erro ao salvar: ' + error.message);
    },
  });

  const onSubmit = (data: PageFormData) => {
    saveMutation.mutate({ ...data, content });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setValue('title', title);
    if (!isEditMode) {
      setValue('slug', generateSlug(title));
    }
  };

  return (
    <>
      <Helmet>
        <title>{isEditMode ? 'Editar Página' : 'Nova Página'} - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin/pages')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-3xl font-bold">
            {isEditMode ? 'Editar Página' : 'Nova Página'}
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Página</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título da Página</Label>
                <Input
                  id="title"
                  {...register('title')}
                  onChange={handleTitleChange}
                  placeholder="Ex: TDAH em Santos"
                />
                {errors.title && (
                  <p className="text-sm text-destructive">{errors.title.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL (Slug)</Label>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">/local/</span>
                  <Input
                    id="slug"
                    {...register('slug')}
                    placeholder="tdah-em-santos"
                  />
                </div>
                {errors.slug && (
                  <p className="text-sm text-destructive">{errors.slug.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={watch('status')}
                  onValueChange={(value) => setValue('status', value as 'draft' | 'published')}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Rascunho</SelectItem>
                    <SelectItem value="published">Publicada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seo_title">Título SEO</Label>
                <Input
                  id="seo_title"
                  {...register('seo_title')}
                  placeholder="Título otimizado para mecanismos de busca"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo_description">Descrição SEO</Label>
                <Textarea
                  id="seo_description"
                  {...register('seo_description')}
                  placeholder="Descrição que aparecerá nos resultados de busca"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conteúdo da Página</CardTitle>
            </CardHeader>
            <CardContent>
              <RichTextEditor content={content} onChange={setContent} />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" disabled={saveMutation.isPending}>
              {saveMutation.isPending ? 'Salvando...' : (isEditMode ? 'Atualizar' : 'Criar Página')}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/pages')}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PageEditor;
