import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutDashboard, BarChart3, Users } from 'lucide-react';

// Import content components
import DashboardContent from './DashboardContent';
import AnalyticsContent from './AnalyticsContent';
import LeadsContent from './LeadsContent';

const DashboardTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'overview';

  const handleTabChange = (value: string) => {
    if (value === 'overview') {
      setSearchParams({});
    } else {
      setSearchParams({ tab: value });
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <Tabs value={currentTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">Visão Geral</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="leads" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Leads</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <DashboardContent />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <AnalyticsContent />
          </TabsContent>

          <TabsContent value="leads" className="mt-6">
            <LeadsContent />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default DashboardTabs;
