import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RichTextEditor from '@/components/admin/RichTextEditor';
import ImageUploader from '@/components/admin/ImageUploader';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const RESERVED_SLUGS = [
  'tdah', 'ansiedade', 'depressao', 'equipe', 'blog', 'contato', 
  'dr-gabriel-lopes', 'admin', 'login', 'sobre', 'servicos'
];

const postSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  slug: z.string()
    .min(1, 'Slug é obrigatório')
    .refine(
      (slug) => !RESERVED_SLUGS.includes(slug.toLowerCase()),
      { message: 'Este slug não pode ser usado pois conflita com páginas do site' }
    ),
  excerpt: z.string().min(1, 'Resumo é obrigatório'),
  content: z.string().min(1, 'Conteúdo é obrigatório'),
  featured_image: z.string().optional(),
  author: z.string().min(1, 'Autor é obrigatório'),
  category_id: z.string().min(1, 'Categoria é obrigatória'),
  read_time: z.string().default('5 min'),
  status: z.enum(['draft', 'published']),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  seo_keywords: z.string().optional(),
});

type PostFormData = z.infer<typeof postSchema>;

interface PostFormProps {
  initialData?: Partial<PostFormData> & { id?: string };
  onSubmit: (data: PostFormData) => void;
  isSubmitting: boolean;
}

const PostForm = ({ initialData, onSubmit, isSubmitting }: PostFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: initialData || {
      status: 'draft',
      author: 'Dr. Gabriel Lopes',
      read_time: '5 min',
      content: '',
    },
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');
      return data || [];
    },
  });

  const title = watch('title');
  const generateSlug = () => {
    if (title && !initialData?.slug) {
      const slug = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      setValue('slug', slug);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Tabs defaultValue="content" className="w-full">
        <TabsList>
          <TabsTrigger value="content">Conteúdo</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <div>
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              {...register('title')}
              onBlur={generateSlug}
            />
            {errors.title && (
              <p className="text-sm text-destructive mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="slug">Slug (URL) *</Label>
            <Input id="slug" {...register('slug')} placeholder="ex: tratamento-ansiedade" />
            <p className="text-xs text-muted-foreground mt-1">
              O artigo será acessível em: drgabriel.med.br/<strong>{watch('slug') || 'seu-slug'}</strong>
            </p>
            {errors.slug && (
              <p className="text-sm text-destructive mt-1">{errors.slug.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="excerpt">Resumo *</Label>
            <Textarea id="excerpt" {...register('excerpt')} rows={3} />
            {errors.excerpt && (
              <p className="text-sm text-destructive mt-1">{errors.excerpt.message}</p>
            )}
          </div>

          <div>
            <Label>Imagem Destacada</Label>
            <ImageUploader
              currentImage={watch('featured_image')}
              onImageUploaded={(url) => setValue('featured_image', url)}
            />
          </div>

          <div>
            <Label>Conteúdo *</Label>
            <RichTextEditor
              content={watch('content') || ''}
              onChange={(content) => setValue('content', content)}
            />
            {errors.content && (
              <p className="text-sm text-destructive mt-1">{errors.content.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="author">Autor *</Label>
              <Input id="author" {...register('author')} />
            </div>
            <div>
              <Label htmlFor="category_id">Categoria *</Label>
              <Select
                value={watch('category_id')}
                onValueChange={(value) => setValue('category_id', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category_id && (
                <p className="text-sm text-destructive mt-1">
                  {errors.category_id.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="read_time">Tempo de Leitura</Label>
              <Input id="read_time" {...register('read_time')} placeholder="5 min" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <div>
            <Label htmlFor="seo_title">Título SEO</Label>
            <Input
              id="seo_title"
              {...register('seo_title')}
              placeholder="Se vazio, usará o título do post"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Ideal: 50-60 caracteres
            </p>
          </div>

          <div>
            <Label htmlFor="seo_description">Descrição SEO</Label>
            <Textarea
              id="seo_description"
              {...register('seo_description')}
              rows={3}
              placeholder="Se vazio, usará o resumo do post"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Ideal: 150-160 caracteres
            </p>
          </div>

          <div>
            <Label htmlFor="seo_keywords">Palavras-chave</Label>
            <Input
              id="seo_keywords"
              {...register('seo_keywords')}
              placeholder="palavra1, palavra2, palavra3"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Separadas por vírgula
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center pt-6 border-t">
        <Select
          value={watch('status')}
          onValueChange={(value: 'draft' | 'published') => setValue('status', value)}
        >
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Rascunho</SelectItem>
            <SelectItem value="published">Publicado</SelectItem>
          </SelectContent>
        </Select>

        <div className="space-x-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar Post'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
