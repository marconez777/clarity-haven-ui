import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Especialidades = () => {
  const especialidades = [
    {
      title: "TDAH",
      description: "Transtorno de Déficit de Atenção e Hiperatividade",
      href: "/tdah",
    },
    {
      title: "Ansiedade",
      description: "Transtornos de Ansiedade e Síndrome do Pânico",
      href: "/ansiedade",
    },
    {
      title: "Depressão",
      description: "Transtorno Depressivo e seus tratamentos",
      href: "/depressao",
    },
    {
      title: "Transtorno Bipolar",
      description: "Compreensão e tratamento do Transtorno Bipolar",
      href: "/transtorno-bipolar",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Especialidades em Saúde Mental",
    "description": "Especialidades do Dr. Gabriel Lopes: TDAH, Ansiedade, Depressão e Transtorno Bipolar. Tratamento especializado com abordagem integrada.",
    "url": "https://drgabriellopes.com.br/especialidades",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": especialidades.map((esp, index) => ({
        "@type": "MedicalCondition",
        "position": index + 1,
        "name": esp.title,
        "description": esp.description,
        "url": `https://drgabriellopes.com.br${esp.href}`
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Especialidades em Saúde Mental | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Conheça nossas especialidades: TDAH, Ansiedade, Depressão e Transtorno Bipolar. Tratamento especializado com abordagem integrada na Vila Olímpia/SP."
        />
        <meta name="keywords" content="especialidades psiquiatria, TDAH, ansiedade, depressão, transtorno bipolar, saúde mental" />
        <link rel="canonical" href="https://drgabriellopes.com.br/especialidades" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgabriellopes.com.br/especialidades" />
        <meta property="og:title" content="Especialidades em Saúde Mental | Dr. Gabriel Lopes" />
        <meta property="og:description" content="Conheça nossas especialidades: TDAH, Ansiedade, Depressão e Transtorno Bipolar. Tratamento especializado com abordagem integrada." />
        <meta property="og:image" content="https://drgabriellopes.com.br/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Dr. Gabriel Lopes - Psiquiatra" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs items={[{ label: "Especialidades" }]} />

      <main className="min-h-screen bg-background">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nossas Especialidades
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Atendimento especializado em saúde mental com abordagem integrada e personalizada
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {especialidades.map((especialidade) => {
                return (
                  <Link key={especialidade.href} to={especialidade.href}>
                    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="text-2xl">{especialidade.title}</CardTitle>
                        <CardDescription className="text-base">
                          {especialidade.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="text-primary hover:underline">
                          Saiba mais →
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Especialidades;
