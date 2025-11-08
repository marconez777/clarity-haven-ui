import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EspecialidadesHomeSection = () => {
  const especialidades = [
    {
      title: "TDAH",
      description: "Transtorno de Déficit de Atenção e Hiperatividade com tratamento especializado",
      href: "/tdah",
    },
    {
      title: "Ansiedade",
      description: "Tratamento para transtornos de ansiedade e síndrome do pânico",
      href: "/ansiedade",
    },
    {
      title: "Depressão",
      description: "Acompanhamento e tratamento do transtorno depressivo",
      href: "/depressao",
    },
    {
      title: "Transtorno Bipolar",
      description: "Diagnóstico e tratamento do transtorno bipolar",
      href: "/transtorno-bipolar",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Principais Especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendimento especializado para suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {especialidades.map((especialidade) => (
            <Link key={especialidade.href} to={especialidade.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{especialidade.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {especialidade.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesHomeSection;
