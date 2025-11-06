import psiquiatriaIcon from "@/assets/specialties/psiquiatria.png";
import psicoterapiaIcon from "@/assets/specialties/psicoterapia.png";
import acupunturaIcon from "@/assets/specialties/acupuntura.png";
import nutricaoIcon from "@/assets/specialties/nutricao.png";
import neuropsicologiaIcon from "@/assets/specialties/neuropsicologia.png";

const SpecialtiesSection = () => {
  const specialties = [
    {
      image: psiquiatriaIcon,
      name: "Psiquiatria",
      description: "Diagnóstico e tratamento de transtornos mentais",
    },
    {
      image: psicoterapiaIcon,
      name: "Psicoterapia",
      description: "Apoio emocional e desenvolvimento pessoal",
    },
    {
      image: acupunturaIcon,
      name: "Acupuntura",
      description: "Equilíbrio energético e bem-estar",
    },
    {
      image: nutricaoIcon,
      name: "Nutrição",
      description: "Alimentação saudável para mente e corpo",
    },
    {
      image: neuropsicologiaIcon,
      name: "Neuropsicologia",
      description: "Avaliação e reabilitação cognitiva",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Saúde Mental Integrada na Vila Olímpia/SP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {specialties.map((specialty, index) => {
            return (
              <div
                key={specialty.name}
                className="group text-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-hover)] transition-all group-hover:scale-110 duration-300 overflow-hidden">
                  <img 
                    src={specialty.image} 
                    alt={specialty.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {specialty.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
