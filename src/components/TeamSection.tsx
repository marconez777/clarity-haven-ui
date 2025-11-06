import teamImage from "@/assets/doctors/team-professionals.png";

const TeamSection = () => {
  const features = [
    "Acompanhamento completo",
    "Empatia e atenção na consulta",
    "Mestrado em psiconeuroimunologia",
  ];

  return (
    <section className="py-20 bg-primary/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Profissionais diferenciados para cuidar do seu bem-estar
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <img
            src={teamImage}
            alt="Profissionais da equipe"
            className="w-full rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
