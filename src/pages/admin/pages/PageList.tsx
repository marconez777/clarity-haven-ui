import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';

const PageList = () => {
  return (
    <>
      <Helmet>
        <title>Páginas - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Páginas Locais</h2>
        
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center">
              Sistema de páginas locais será implementado em breve.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PageList;
