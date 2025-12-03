import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Tags, Upload } from 'lucide-react';

// Import content components
import PostsContent from './PostsContent';
import CategoriesContent from './CategoriesContent';
import WordPressImportContent from './WordPressImportContent';

const ContentTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'posts';

  const handleTabChange = (value: string) => {
    if (value === 'posts') {
      setSearchParams({});
    } else {
      setSearchParams({ tab: value });
    }
  };

  return (
    <>
      <Helmet>
        <title>Conteúdo - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <Tabs value={currentTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Posts</span>
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Tags className="h-4 w-4" />
              <span className="hidden sm:inline">Categorias</span>
            </TabsTrigger>
            <TabsTrigger value="import" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Importar</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <PostsContent />
          </TabsContent>

          <TabsContent value="categories" className="mt-6">
            <CategoriesContent />
          </TabsContent>

          <TabsContent value="import" className="mt-6">
            <WordPressImportContent />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ContentTabs;
