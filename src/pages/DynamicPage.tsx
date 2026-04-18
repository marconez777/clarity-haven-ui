import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import LocalPage from './LocalPage';
import BlogPost from './BlogPost';

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Check page
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

  // Check post
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

  // Check redirect
  const { data: redirect, isLoading: redirectLoading } = useQuery({
    queryKey: ['redirect-check', slug],
    queryFn: async () => {
      const { data } = await supabase
        .from('redirects')
        .select('to_path')
        .eq('from_path', slug)
        .maybeSingle();
      return data;
    },
    enabled: !pageLoading && !page && !postLoading && !post,
  });

  if (pageLoading || postLoading || redirectLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (page) return <LocalPage />;
  if (post) return <BlogPost />;

  if (redirect?.to_path) {
    if (/^https?:\/\//i.test(redirect.to_path)) {
      window.location.replace(redirect.to_path);
      return null;
    }
    return <Navigate to={redirect.to_path} replace />;
  }

  return <Navigate to="/404" replace />;
};

export default DynamicPage;
