import { Button } from "@/components/ui/button";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Dr. Gabriel Lopes
            </h2>
            <div className="space-y-4 text-foreground/90">
              <p>
                Formado em Medicina e Residência Médica em Psiquiatria da Infância
                e da Adolescência pela faculdade Santa Casa de São Paulo. Suas
                principais especialidades: Ansiedade, Depressão, TDAH.
              </p>
              <p>
                Psiquiatra Infantil e de adultos/ Psicoterapeuta analítico
                comportamental. Atua como psiquiatra no{" "}
                <a
                  href="https://www.institutosanapta.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Instituto Sanapta
                </a>
                , referência em saúde mental e cuidado integral.
              </p>
            </div>
            <blockquote className="mt-8 text-2xl font-semibold text-primary italic border-l-4 border-primary pl-4">
              "Antes de tudo um ser humano atento ao sofrimento de outro ser
              humano."
            </blockquote>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Conheço o doutor
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all"
              >
                Agende sua consulta
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-3" />
              <img
                src={drGabrielImage}
                alt="Dr. Gabriel Lopes"
                className="relative rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
