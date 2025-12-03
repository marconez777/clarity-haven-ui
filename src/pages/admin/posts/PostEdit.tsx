import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import PostForm from './PostForm';
import { Helmet } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';
import AdminBreadcrumbs from '@/components/admin/AdminBreadcrumbs';

const PostEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const { error } = await supabase
        .from('blog_posts')
        .update({
          ...data,
          published_at: data.status === 'published' && !post?.published_at 
            ? new Date().toISOString() 
            : post?.published_at,
        })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
      queryClient.invalidateQueries({ queryKey: ['post', id] });
      toast({ title: 'Post atualizado com sucesso' });
      navigate('/admin/posts');
    },
    onError: (error: any) => {
      toast({
        title: 'Erro ao atualizar post',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Editar Post - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="space-y-6">
        <AdminBreadcrumbs items={[
          { label: 'Posts', href: '/admin/posts' },
          { label: 'Editar Post' }
        ]} />
        <h2 className="text-3xl font-bold">Editar Post</h2>
        {post && (
          <PostForm
            initialData={{
              ...post,
              status: post.status as 'draft' | 'published',
            }}
            onSubmit={(data) => updateMutation.mutate(data)}
            isSubmitting={updateMutation.isPending}
          />
        )}
      </div>
    </>
  );
};

export default PostEdit;
