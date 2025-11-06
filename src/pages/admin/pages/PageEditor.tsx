import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const PageEditor = () => {
  return (
    <>
      <Helmet>
        <title>Editor de Páginas - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Editor de Páginas</h2>
        
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center">
              Editor de páginas será implementado em breve.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PageEditor;
