import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import LocalPage from './LocalPage';
import BlogPost from './BlogPost';

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // First, check if it's a page
  const { data: page, isLoading: pageLoading } = useQuery({
    queryKey: ['page-check', slug],
    queryFn: async () => {
      const { data } = await supabase
        .from('pages')
        .select('id')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
      return data;
    },
  });

  // If not a page, check if it's a blog post
  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ['post-check', slug],
    queryFn: async () => {
      const { data } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
      return data;
    },
    enabled: !pageLoading && !page,
  });

  if (pageLoading || postLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  // If it's a page, render LocalPage
  if (page) {
    return <LocalPage />;
  }

  // If it's a blog post, render BlogPost
  if (post) {
    return <BlogPost />;
  }

  // If neither, redirect to 404
  return <Navigate to="/404" replace />;
};

export default DynamicPage;
