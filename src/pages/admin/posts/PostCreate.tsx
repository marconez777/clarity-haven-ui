import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import PostForm from './PostForm';
import { Helmet } from 'react-helmet-async';

const PostCreate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const { error } = await supabase.from('blog_posts').insert([
        {
          ...data,
          published_at: data.status === 'published' ? new Date().toISOString() : null,
        },
      ]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
      toast({ title: 'Post criado com sucesso' });
      navigate('/admin/posts');
    },
    onError: (error: any) => {
      toast({
        title: 'Erro ao criar post',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  return (
    <>
      <Helmet>
        <title>Novo Post - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Novo Post</h2>
        <PostForm
          onSubmit={(data) => createMutation.mutate(data)}
          isSubmitting={createMutation.isPending}
        />
      </div>
    </>
  );
};

export default PostCreate;
