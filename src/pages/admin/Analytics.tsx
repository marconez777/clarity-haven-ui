import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MousePointerClick, TrendingUp, Calendar } from "lucide-react";
import { format, subDays, startOfDay, endOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";

const Analytics = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['conversion-stats'],
    queryFn: async () => {
      const now = new Date();
      const today = startOfDay(now);
      const yesterday = startOfDay(subDays(now, 1));
      const last7Days = startOfDay(subDays(now, 7));
      const last30Days = startOfDay(subDays(now, 30));

      // Total clicks
      const { count: totalClicks } = await supabase
        .from('conversion_events')
        .select('*', { count: 'exact', head: true });

      // Today clicks
      const { count: todayClicks } = await supabase
        .from('conversion_events')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());

      // Last 7 days clicks
      const { count: last7DaysClicks } = await supabase
        .from('conversion_events')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', last7Days.toISOString());

      // Last 30 days clicks
      const { count: last30DaysClicks } = await supabase
        .from('conversion_events')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', last30Days.toISOString());

      return {
        totalClicks: totalClicks || 0,
        todayClicks: todayClicks || 0,
        last7DaysClicks: last7DaysClicks || 0,
        last30DaysClicks: last30DaysClicks || 0,
      };
    },
  });

  const { data: recentEvents } = useQuery({
    queryKey: ['recent-conversion-events'],
    queryFn: async () => {
      const { data } = await supabase
        .from('conversion_events')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
      return data || [];
    },
  });

  const { data: topPages } = useQuery({
    queryKey: ['top-conversion-pages'],
    queryFn: async () => {
      const { data } = await supabase
        .from('conversion_events')
        .select('page_url')
        .order('created_at', { ascending: false });
      
      if (!data) return [];
      
      const pageCounts = data.reduce((acc: Record<string, number>, event) => {
        const page = event.page_url || 'Desconhecido';
        acc[page] = (acc[page] || 0) + 1;
        return acc;
      }, {});

      return Object.entries(pageCounts)
        .map(([page, count]) => ({ page, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
    },
  });

  const { data: topLocations } = useQuery({
    queryKey: ['top-button-locations'],
    queryFn: async () => {
      const { data } = await supabase
        .from('conversion_events')
        .select('button_location')
        .order('created_at', { ascending: false });
      
      if (!data) return [];
      
      const locationCounts = data.reduce((acc: Record<string, number>, event) => {
        const location = event.button_location || 'Desconhecido';
        acc[location] = (acc[location] || 0) + 1;
        return acc;
      }, {});

      return Object.entries(locationCounts)
        .map(([location, count]) => ({ location, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
    },
  });

  return (
    <>
      <Helmet>
        <title>Analytics de Conversões | Admin</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics de Conversões</h1>
          <p className="text-muted-foreground">Acompanhe os cliques nos botões de agendamento via WhatsApp</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Cliques</CardTitle>
              <MousePointerClick className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats?.totalClicks}</div>
              <p className="text-xs text-muted-foreground">Desde o início</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats?.todayClicks}</div>
              <p className="text-xs text-muted-foreground">Cliques hoje</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Últimos 7 dias</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats?.last7DaysClicks}</div>
              <p className="text-xs text-muted-foreground">Cliques na semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Últimos 30 dias</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats?.last30DaysClicks}</div>
              <p className="text-xs text-muted-foreground">Cliques no mês</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Pages and Locations */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Páginas com mais cliques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPages?.map((item, index) => (
                  <div key={item.page} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">{index + 1}.</span>
                      <span className="text-sm truncate max-w-[200px]">{item.page}</span>
                    </div>
                    <span className="text-sm font-bold">{item.count}</span>
                  </div>
                ))}
                {(!topPages || topPages.length === 0) && (
                  <p className="text-sm text-muted-foreground">Nenhum dado disponível</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Localizações dos botões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topLocations?.map((item, index) => (
                  <div key={item.location} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">{index + 1}.</span>
                      <span className="text-sm truncate max-w-[200px]">{item.location}</span>
                    </div>
                    <span className="text-sm font-bold">{item.count}</span>
                  </div>
                ))}
                {(!topLocations || topLocations.length === 0) && (
                  <p className="text-sm text-muted-foreground">Nenhum dado disponível</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Events */}
        <Card>
          <CardHeader>
            <CardTitle>Eventos recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-medium">Data/Hora</th>
                    <th className="text-left py-2 font-medium">Página</th>
                    <th className="text-left py-2 font-medium">Localização</th>
                    <th className="text-left py-2 font-medium">Referrer</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEvents?.map((event) => (
                    <tr key={event.id} className="border-b">
                      <td className="py-2">
                        {format(new Date(event.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                      </td>
                      <td className="py-2 truncate max-w-[150px]">{event.page_url || '-'}</td>
                      <td className="py-2 truncate max-w-[150px]">{event.button_location || '-'}</td>
                      <td className="py-2 truncate max-w-[150px]">{event.referrer || '-'}</td>
                    </tr>
                  ))}
                  {(!recentEvents || recentEvents.length === 0) && (
                    <tr>
                      <td colSpan={4} className="py-4 text-center text-muted-foreground">
                        Nenhum evento registrado ainda
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Analytics;
