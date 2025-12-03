import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Users, Calendar, MessageSquare, FileText, Download, Search } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Lead {
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  source: string;
  source_url: string | null;
  created_at: string;
  type: 'contact' | 'test';
}

const Leads = () => {
  const [filter, setFilter] = useState<'all' | 'contact' | 'test'>('all');
  const [search, setSearch] = useState('');

  // Fetch leads from contacts
  const { data: contactLeads = [], isLoading: loadingContacts } = useQuery({
    queryKey: ['contact-leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return (data || []).map((lead) => ({
        ...lead,
        type: 'contact' as const,
      }));
    },
  });

  // Fetch leads from test submissions
  const { data: testLeads = [], isLoading: loadingTests } = useQuery({
    queryKey: ['test-leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('test_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return (data || []).map((submission) => ({
        id: submission.id,
        name: null,
        email: submission.email,
        phone: null,
        source: submission.test_type,
        source_url: null,
        created_at: submission.created_at,
        type: 'test' as const,
      }));
    },
  });

  // Combine and sort all leads
  const allLeads = useMemo(() => {
    const combined: Lead[] = [...contactLeads, ...testLeads];
    return combined.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [contactLeads, testLeads]);

  // Filter leads
  const filteredLeads = useMemo(() => {
    let filtered = allLeads;

    if (filter === 'contact') {
      filtered = filtered.filter((lead) => lead.type === 'contact');
    } else if (filter === 'test') {
      filtered = filtered.filter((lead) => lead.type === 'test');
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (lead) =>
          lead.email.toLowerCase().includes(searchLower) ||
          lead.name?.toLowerCase().includes(searchLower) ||
          lead.source.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [allLeads, filter, search]);

  // Stats
  const stats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return {
      total: allLeads.length,
      today: allLeads.filter((lead) => new Date(lead.created_at) >= today).length,
      contacts: contactLeads.length,
      tests: testLeads.length,
    };
  }, [allLeads, contactLeads, testLeads]);

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Nome', 'Email', 'Telefone', 'Origem', 'URL de Origem', 'Data'];
    const rows = filteredLeads.map((lead) => [
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
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Hoje</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.today}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Formulário de Contato</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.contacts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Testes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.tests}</div>
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
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="contact">Formulário de Contato</SelectItem>
            <SelectItem value="test">Testes</SelectItem>
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
                <TableHead>Telefone</TableHead>
                <TableHead>Origem</TableHead>
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
              ) : filteredLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    Nenhum lead encontrado
                  </TableCell>
                </TableRow>
              ) : (
                filteredLeads.map((lead) => (
                  <TableRow key={`${lead.type}-${lead.id}`}>
                    <TableCell className="font-medium">
                      {lead.name || <span className="text-muted-foreground">-</span>}
                    </TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>
                      {lead.phone || <span className="text-muted-foreground">-</span>}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          lead.type === 'contact'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        {lead.source}
                      </span>
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
      </Card>
    </div>
  );
};

export default Leads;