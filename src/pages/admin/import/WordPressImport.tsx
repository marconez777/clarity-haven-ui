import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const WordPressImport = () => {
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (!file) return;
    
    setImporting(true);
    
    toast({
      title: 'Funcionalidade em desenvolvimento',
      description: 'A importação será implementada após receber o XML de exemplo',
    });
    
    setImporting(false);
  };

  return (
    <>
      <Helmet>
        <title>Importar WordPress - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Importar do WordPress</h2>

        <Card>
          <CardHeader>
            <CardTitle>Upload do arquivo XML</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <input
                type="file"
                accept=".xml"
                onChange={handleFileChange}
                className="hidden"
                id="xml-upload"
              />
              <label htmlFor="xml-upload" className="cursor-pointer">
                <Button variant="outline" asChild>
                  <span>
                    <Upload className="w-4 h-4 mr-2" />
                    Selecionar arquivo XML
                  </span>
                </Button>
              </label>
              {file && (
                <p className="mt-4 text-sm text-muted-foreground">{file.name}</p>
              )}
            </div>

            <Button
              onClick={handleImport}
              disabled={!file || importing}
              className="w-full"
            >
              {importing ? 'Importando...' : 'Iniciar Importação'}
            </Button>

            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-2">Instruções:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Exporte seu conteúdo do WordPress em formato XML (WXR)</li>
                <li>Faça upload do arquivo aqui</li>
                <li>Aguarde o processamento (pode levar alguns minutos)</li>
                <li>Verifique os posts importados na lista de posts</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default WordPressImport;
