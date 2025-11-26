import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { FileQuestion } from "lucide-react";

const Testes = () => {
  const testes = [
    {
      title: "Teste de Autismo Adulto – AQ-10",
      href: "/teste-autismo-aq10",
      disabled: false,
    },
    {
      title: "Teste de Autismo Adulto – AQ-50",
      href: "/teste-autismo-aq50",
      disabled: false,
    },
    {
      title: "Teste de Depressão – PHQ9",
      href: "/teste-depressao-phq9",
      disabled: false,
    },
    {
      title: "Teste de TDAH – Hiperatividade Adulto",
      href: "/teste-tdah-hiperatividade",
      disabled: false,
    },
    {
      title: "Teste de Déficit de Atenção – TDAH Adulto",
      href: "/teste-tdah-adulto",
      disabled: false,
    },
    {
      title: "Teste de Ansiedade – GAD-7",
      href: "/teste-ansiedade-gad7",
      disabled: false,
    },
    {
      title: "Teste de Compulsão Alimentar",
      href: "/teste-compulsao-alimentar",
      disabled: false,
    },
    {
      title: "Teste de Burnout",
      href: "/teste-burnout",
      disabled: false,
    },
    {
      title: "Teste de Transtorno Bipolar",
      href: "/teste-transtorno-bipolar",
      disabled: false,
    },
    {
      title: "Teste de Sofrimento Mental",
      href: "/teste-sofrimento-mental",
      disabled: false,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Testes de Saúde Mental",
    "description": "Testes online gratuitos de avaliação de saúde mental: TDAH, ansiedade, depressão, transtorno bipolar e outros testes validados.",
    "url": "https://drgabriel.med.br/testes",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": testes.map((teste, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": teste.title,
        "url": `https://drgabriel.med.br${teste.href}`
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Testes de Saúde Mental | Dr Gabriel Lopes</title>
        <meta
          name="description"
          content="Realize testes online de avaliação de saúde mental. TDAH, ansiedade, depressão, transtorno bipolar e outros testes validados."
        />
        <meta name="keywords" content="teste saúde mental, teste TDAH, teste ansiedade, teste depressão, teste bipolar, teste online gratuito" />
        <link rel="canonical" href="https://drgabriel.med.br/testes" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgabriel.med.br/testes" />
        <meta property="og:title" content="Testes de Saúde Mental | Dr Gabriel Lopes" />
        <meta property="og:description" content="Realize testes online de avaliação de saúde mental. TDAH, ansiedade, depressão, transtorno bipolar e outros testes validados." />
        <meta property="og:image" content="https://drgabriel.med.br/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Dr. Gabriel Lopes - Psiquiatra" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Testes de Saúde Mental | Dr Gabriel Lopes" />
        <meta name="twitter:description" content="Realize testes online de avaliação de saúde mental. TDAH, ansiedade, depressão e outros." />
        <meta name="twitter:image" content="https://drgabriel.med.br/og-image.jpg" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs items={[{ label: "Testes" }]} />
        
        <main className="flex-grow pt-4">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-background to-accent/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  Testes de Saúde Mental
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Avalie seus sintomas com nossos testes online validados. Os resultados podem ajudar você a entender melhor sua saúde mental e orientar uma conversa com um profissional.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  *Importante: Estes testes não substituem uma avaliação profissional completa.
                </p>
              </div>
            </div>
          </section>

          {/* Testes Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testes.map((teste, index) => (
                  <a
                    key={index}
                    href={teste.disabled ? undefined : teste.href}
                    className={`group ${
                      teste.disabled
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer hover:scale-105 transition-transform duration-200"
                    }`}
                    onClick={(e) => teste.disabled && e.preventDefault()}
                  >
                    <Card className="h-full border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg">
                      <CardHeader className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-3 rounded-lg ${
                            teste.disabled
                              ? "bg-muted"
                              : "bg-primary/10 group-hover:bg-primary/20 transition-colors"
                          }`}>
                            <FileQuestion className={`h-6 w-6 ${
                              teste.disabled ? "text-muted-foreground" : "text-primary"
                            }`} />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg leading-tight">
                              {teste.title}
                            </CardTitle>
                            {teste.disabled && (
                              <span className="text-xs text-muted-foreground mt-2 block">
                                Em breve
                              </span>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Aviso Legal */}
          <section className="py-12 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-primary">
                    Aviso Importante
                  </h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Os testes disponibilizados neste site têm caráter informativo e educacional. Eles não substituem uma consulta médica ou avaliação profissional completa.
                    </p>
                    <p>
                      Os resultados devem ser interpretados por um profissional de saúde mental qualificado, que considerará seu histórico completo, contexto de vida e outros fatores relevantes.
                    </p>
                    <p className="font-medium text-foreground">
                      Se você está passando por uma crise ou emergência, procure ajuda imediatamente através do CVV (188) ou dirija-se ao serviço de emergência mais próximo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Testes;
