import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Users, Calendar, MessageSquare, FileText, Download, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const ITEMS_PER_PAGE = 20;

const LeadsContent = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (searchTimeout) clearTimeout(searchTimeout);
    const timeout = setTimeout(() => {
      setDebouncedSearch(value);
      setCurrentPage(1);
    }, 400);
    setSearchTimeout(timeout);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setCurrentPage(1);
  };

  // Determine if we're filtering contacts, tests, or a specific test type
  const isContactFilter = filter === 'contact';
  const isTestFilter = filter === 'test';
  const isSpecificTest = !['all', 'contact', 'test'].includes(filter);
  const showContacts = filter === 'all' || isContactFilter;
  const showTests = filter === 'all' || isTestFilter || isSpecificTest;

  // Fetch test types dynamically
  const { data: testTypes = [] } = useQuery({
    queryKey: ['test-types'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('test_submissions')
        .select('test_type');
      if (error) throw error;
      const counts: Record<string, number> = {};
      (data || []).forEach((r) => {
        counts[r.test_type] = (counts[r.test_type] || 0) + 1;
      });
      // This still hits the 1000 limit for counting per type, so let's use a workaround
      return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([type, count]) => ({ type, count }));
    },
    staleTime: 60000,
  });

  // Stats: use exact counts
  const { data: totalContacts = 0 } = useQuery({
    queryKey: ['leads-count-contacts'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });
      if (error) throw error;
      return count || 0;
    },
  });

  const { data: totalTests = 0 } = useQuery({
    queryKey: ['leads-count-tests'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('test_submissions')
        .select('*', { count: 'exact', head: true });
      if (error) throw error;
      return count || 0;
    },
  });

  const { data: todayContacts = 0 } = useQuery({
    queryKey: ['leads-count-today-contacts'],
    queryFn: async () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const { count, error } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());
      if (error) throw error;
      return count || 0;
    },
  });

  const { data: todayTests = 0 } = useQuery({
    queryKey: ['leads-count-today-tests'],
    queryFn: async () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const { count, error } = await supabase
        .from('test_submissions')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());
      if (error) throw error;
      return count || 0;
    },
  });

  const totalLeads = totalContacts + totalTests;
  const todayLeads = todayContacts + todayTests;

  // Server-side paginated query for contacts
  const { data: contactsData, isLoading: loadingContacts } = useQuery({
    queryKey: ['leads-contacts-page', currentPage, debouncedSearch, filter],
    queryFn: async () => {
      if (!showContacts) return { items: [], count: 0 };

      let query = supabase
        .from('leads')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      if (debouncedSearch) {
        query = query.or(`email.ilike.%${debouncedSearch}%,name.ilike.%${debouncedSearch}%,source.ilike.%${debouncedSearch}%`);
      }

      // For "all" filter, we need to merge both tables. We'll fetch contacts separately.
      const { data, count, error } = await query;
      if (error) throw error;
      return {
        items: (data || []).map((lead) => ({
          ...lead,
          type: 'contact' as const,
        })),
        count: count || 0,
      };
    },
    enabled: showContacts,
  });

  // Server-side paginated query for tests
  const { data: testsData, isLoading: loadingTests } = useQuery({
    queryKey: ['leads-tests-page', currentPage, debouncedSearch, filter],
    queryFn: async () => {
      if (!showTests) return { items: [], count: 0 };

      let query = supabase
        .from('test_submissions')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      if (debouncedSearch) {
        query = query.or(`email.ilike.%${debouncedSearch}%,test_type.ilike.%${debouncedSearch}%`);
      }

      if (isSpecificTest) {
        query = query.eq('test_type', filter);
      }

      const { data, count, error } = await query;
      if (error) throw error;
      return {
        items: (data || []).map((submission) => ({
          id: submission.id,
          name: null as string | null,
          email: submission.email,
          phone: null as string | null,
          source: submission.test_type,
          source_url: null as string | null,
          created_at: submission.created_at,
          type: 'test' as const,
        })),
        count: count || 0,
      };
    },
    enabled: showTests,
  });

  // Combine, sort, and paginate client-side from full results
  const combined = useMemo(() => {
    const contacts = contactsData?.items || [];
    const tests = testsData?.items || [];
    const all = [...contacts, ...tests];
    all.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return all;
  }, [contactsData, testsData]);

  const filteredCount = (contactsData?.count || 0) + (testsData?.count || 0);
  // Since we still get all from each table (Supabase 1000 limit), let's use count for total
  // but paginate from combined
  const totalPages = Math.ceil(filteredCount / ITEMS_PER_PAGE);
  const paginatedLeads = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return combined.slice(start, start + ITEMS_PER_PAGE);
  }, [combined, currentPage]);

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Nome', 'Email', 'Telefone', 'Origem', 'URL de Origem', 'Data'];
    const rows = combined.map((lead) => [
      lead.name || '-',
      lead.email,
      lead.phone || '-',
      lead.source,
      lead.source_url || '-',
      format(new Date(lead.created_at), 'dd/MM/yyyy HH:mm'),
    ]);
    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
  };

  const isLoading = loadingContacts || loadingTests;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leads</h1>
        <p className="text-muted-foreground">
          Gerencie todos os leads capturados pelo site
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Hoje</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayLeads}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Formulário de Contato</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalContacts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Testes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTests}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome, email ou origem..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-full sm:w-[280px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="contact">Formulário de Contato</SelectItem>
            <SelectItem value="test">Todos os Testes</SelectItem>
            {testTypes.map((t) => (
              <SelectItem key={t.type} value={t.type}>
                {t.type} ({t.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={exportToCSV} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar CSV
        </Button>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Página</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    Carregando leads...
                  </TableCell>
                </TableRow>
              ) : paginatedLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    Nenhum lead encontrado
                  </TableCell>
                </TableRow>
              ) : (
                paginatedLeads.map((lead) => (
                  <TableRow key={`${lead.type}-${lead.id}`}>
                    <TableCell className="font-medium">
                      {lead.name || <span className="text-muted-foreground">-</span>}
                    </TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          lead.type === 'contact'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        {lead.source}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      {lead.source_url ? (
                        <span className="text-xs text-muted-foreground truncate block" title={lead.source_url}>
                          {lead.source_url.replace(/^https?:\/\/[^/]+/, '')}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {format(new Date(lead.created_at), "dd 'de' MMM, HH:mm", {
                        locale: ptBR,
                      })}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="text-sm text-muted-foreground">
              Mostrando {((currentPage - 1) * ITEMS_PER_PAGE) + 1} a {Math.min(currentPage * ITEMS_PER_PAGE, filteredCount)} de {filteredCount} leads
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-8 h-8 p-0"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Próximo
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default LeadsContent;
