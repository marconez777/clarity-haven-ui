import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, FolderOpen, Tags, Users, Eye, TrendingUp, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { format, subDays, startOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DashboardSkeleton, CardSkeleton } from '@/components/admin/AdminSkeleton';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { data: stats, isLoading: loadingStats } = useQuery({
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

  const { data: leadStats, isLoading: loadingLeads } = useQuery({
    queryKey: ['admin-lead-stats'],
    queryFn: async () => {
      const today = startOfDay(new Date());
      
      const [totalLeads, todayLeads, totalTestSubmissions, todayTestSubmissions] = await Promise.all([
        supabase.from('leads').select('id', { count: 'exact', head: true }),
        supabase.from('leads').select('id', { count: 'exact', head: true }).gte('created_at', today.toISOString()),
        supabase.from('test_submissions').select('id', { count: 'exact', head: true }),
        supabase.from('test_submissions').select('id', { count: 'exact', head: true }).gte('created_at', today.toISOString()),
      ]);
      
      return {
        totalLeads: (totalLeads.count || 0) + (totalTestSubmissions.count || 0),
        todayLeads: (todayLeads.count || 0) + (todayTestSubmissions.count || 0),
      };
    },
  });

  const { data: viewStats, isLoading: loadingViews } = useQuery({
    queryKey: ['admin-view-stats'],
    queryFn: async () => {
      const today = startOfDay(new Date());
      
      const [totalViews, todayViews] = await Promise.all([
        supabase.from('page_views').select('id', { count: 'exact', head: true }),
        supabase.from('page_views').select('id', { count: 'exact', head: true }).gte('created_at', today.toISOString()),
      ]);
      
      return {
        totalViews: totalViews.count || 0,
        todayViews: todayViews.count || 0,
      };
    },
  });

  const { data: recentLeads } = useQuery({
    queryKey: ['admin-recent-leads'],
    queryFn: async () => {
      const [leads, tests] = await Promise.all([
        supabase.from('leads').select('id, email, name, source, created_at').order('created_at', { ascending: false }).limit(5),
        supabase.from('test_submissions').select('id, email, test_type, created_at').order('created_at', { ascending: false }).limit(5),
      ]);
      
      const combined = [
        ...(leads.data || []).map(l => ({ ...l, type: 'lead' as const })),
        ...(tests.data || []).map(t => ({ ...t, name: null, source: t.test_type, type: 'test' as const })),
      ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5);
      
      return combined;
    },
  });

  const { data: recentPosts } = useQuery({
    queryKey: ['admin-recent-posts'],
    queryFn: async () => {
      const { data } = await supabase
        .from('blog_posts')
        .select('id, title, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5);
      return data || [];
    },
  });

  const { data: chartData } = useQuery({
    queryKey: ['admin-visits-chart'],
    queryFn: async () => {
      const days = 7;
      const data: { date: string; visitas: number }[] = [];
      
      for (let i = days - 1; i >= 0; i--) {
        const date = subDays(new Date(), i);
        const dayStart = startOfDay(date);
        const dayEnd = startOfDay(subDays(date, -1));
        
        const { count } = await supabase
          .from('page_views')
          .select('id', { count: 'exact', head: true })
          .gte('created_at', dayStart.toISOString())
          .lt('created_at', dayEnd.toISOString());
        
        data.push({
          date: format(date, 'dd/MM', { locale: ptBR }),
          visitas: count || 0,
        });
      }
      
      return data;
    },
  });

  const isLoading = loadingStats || loadingLeads || loadingViews;

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Dashboard - Admin</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <DashboardSkeleton />
      </>
    );
  }

  const cards = [
    { title: 'Total de Posts', value: stats?.totalPosts || 0, icon: FileText, href: '/admin/posts' },
    { title: 'Total de Páginas', value: stats?.totalPages || 0, icon: FolderOpen, href: '/admin/pages' },
    { title: 'Leads Total', value: leadStats?.totalLeads || 0, icon: Users, href: '/admin/leads' },
    { title: 'Leads Hoje', value: leadStats?.todayLeads || 0, icon: TrendingUp, href: '/admin/leads' },
    { title: 'Visitas Total', value: viewStats?.totalViews || 0, icon: Eye, href: '/admin/analytics' },
    { title: 'Visitas Hoje', value: viewStats?.todayViews || 0, icon: Clock, href: '/admin/analytics' },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.title} to={card.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {card.title}
                    </CardTitle>
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{card.value}</div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Visitas nos últimos 7 dias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="visitas" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Leads */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Leads Recentes</CardTitle>
              <Link to="/admin/leads" className="text-sm text-primary hover:underline">
                Ver todos
              </Link>
            </CardHeader>
            <CardContent>
              {recentLeads && recentLeads.length > 0 ? (
                <div className="space-y-3">
                  {recentLeads.map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div>
                        <p className="font-medium text-sm">{lead.name || lead.email}</p>
                        <p className="text-xs text-muted-foreground">{lead.source}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={lead.type === 'test' ? 'secondary' : 'default'} className="text-xs">
                          {lead.type === 'test' ? 'Teste' : 'Contato'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {format(new Date(lead.created_at), 'dd/MM HH:mm', { locale: ptBR })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm text-center py-4">Nenhum lead recente</p>
              )}
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Posts Recentes</CardTitle>
              <Link to="/admin/posts" className="text-sm text-primary hover:underline">
                Ver todos
              </Link>
            </CardHeader>
            <CardContent>
              {recentPosts && recentPosts.length > 0 ? (
                <div className="space-y-3">
                  {recentPosts.map((post) => (
                    <Link 
                      key={post.id} 
                      to={`/admin/posts/edit/${post.id}`}
                      className="flex items-center justify-between py-2 border-b last:border-0 hover:bg-muted/50 -mx-2 px-2 rounded transition-colors"
                    >
                      <p className="font-medium text-sm truncate flex-1 mr-2">{post.title}</p>
                      <div className="text-right flex-shrink-0">
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'} className="text-xs">
                          {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {format(new Date(post.created_at), 'dd/MM/yyyy', { locale: ptBR })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm text-center py-4">Nenhum post criado</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
