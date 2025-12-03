import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useActivityTimeout } from '@/hooks/useActivityTimeout';
import { SessionTimeoutWarning } from '@/components/admin/SessionTimeoutWarning';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Tags, 
  Upload, 
  LogOut,
  Menu,
  X,
  BarChart3,
  Users
} from 'lucide-react';
import { useState, useCallback } from 'react';

const AdminLayout = () => {
  const { signOut, user, isAdmin } = useAuth();
  const location = useLocation();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSessionTimeout = useCallback(() => {
    toast({
      title: "Sessão expirada",
      description: "Você foi desconectado por inatividade.",
      variant: "destructive",
    });
    signOut('timeout');
  }, [signOut, toast]);

  const { showWarning, remainingSeconds, dismissWarning } = useActivityTimeout({
    onTimeout: handleSessionTimeout,
    enabled: !!user && isAdmin,
  });

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin', exact: true },
    { icon: FileText, label: 'Posts', path: '/admin/posts' },
    { icon: Tags, label: 'Categorias', path: '/admin/categories' },
    { icon: FolderOpen, label: 'Páginas', path: '/admin/pages' },
    { icon: Users, label: 'Leads', path: '/admin/leads' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: Upload, label: 'Importar WordPress', path: '/admin/import' },
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Session Timeout Warning */}
      <SessionTimeoutWarning 
        open={showWarning}
        remainingSeconds={remainingSeconds}
        onContinue={dismissWarning}
      />

      <header className="border-b bg-card sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
            <Link to="/admin" className="flex items-center gap-2">
              <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={() => signOut()}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`
          fixed lg:sticky top-[57px] left-0 z-30 h-[calc(100vh-57px)]
          w-64 border-r bg-card transition-transform lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path, item.exact);
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={active ? "secondary" : "ghost"}
                    className={`w-full justify-start ${active ? 'bg-secondary font-medium' : ''}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
