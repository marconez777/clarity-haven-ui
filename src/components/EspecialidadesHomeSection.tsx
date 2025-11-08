import { Link } from "react-router-dom";

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
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
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
          {especialidades.map((especialidade, index) => (
            <Link key={especialidade.href} to={especialidade.href}>
              <div className={`h-full p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-secondary/20 to-background border-primary/20 hover:border-primary/40' 
                  : 'bg-gradient-to-br from-accent/10 to-background border-accent/20 hover:border-accent/40'
              }`}>
                <h3 className="text-xl font-bold mb-3 text-foreground">{especialidade.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {especialidade.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesHomeSection;
