import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Activity, Zap } from "lucide-react";

const Especialidades = () => {
  const especialidades = [
    {
      title: "TDAH",
      description: "Transtorno de Déficit de Atenção e Hiperatividade",
      icon: Brain,
      href: "/tdah",
      color: "text-blue-500",
    },
    {
      title: "Ansiedade",
      description: "Transtornos de Ansiedade e Síndrome do Pânico",
      icon: Heart,
      href: "/ansiedade",
      color: "text-green-500",
    },
    {
      title: "Depressão",
      description: "Transtorno Depressivo e seus tratamentos",
      icon: Activity,
      href: "/depressao",
      color: "text-purple-500",
    },
    {
      title: "Transtorno Bipolar",
      description: "Compreensão e tratamento do Transtorno Bipolar",
      icon: Zap,
      href: "/transtorno-bipolar",
      color: "text-orange-500",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Especialidades em Saúde Mental | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Conheça nossas especialidades: TDAH, Ansiedade, Depressão e Transtorno Bipolar. Tratamento especializado com abordagem integrada na Vila Olímpia/SP."
        />
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
                const Icon = especialidade.icon;
                return (
                  <Link key={especialidade.href} to={especialidade.href}>
                    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                      <CardHeader>
                        <div className={`${especialidade.color} mb-4`}>
                          <Icon className="w-12 h-12" />
                        </div>
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
