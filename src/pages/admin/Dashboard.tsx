import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, FolderOpen, Tags } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [posts, pages, categories] = await Promise.all([
        supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
        supabase.from('pages').select('id', { count: 'exact', head: true }),
        supabase.from('blog_categories').select('id', { count: 'exact', head: true }),
      ]);
      
      return {
        totalPosts: posts.count || 0,
        totalPages: pages.count || 0,
        totalCategories: categories.count || 0,
      };
    },
  });

  const cards = [
    { title: 'Total de Posts', value: stats?.totalPosts || 0, icon: FileText },
    { title: 'Total de Páginas', value: stats?.totalPages || 0, icon: FolderOpen },
    { title: 'Categorias', value: stats?.totalCategories || 0, icon: Tags },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{card.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
