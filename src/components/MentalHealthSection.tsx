import { Button } from "@/components/ui/button";
import mentalHealthImage from "@/assets/sections/mental-health.png";

const MentalHealthSection = () => {
  const conditions = ["Depressão", "Ansiedade", "TDAH", "Teste sua saúde mental."];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={mentalHealthImage}
              alt="Pessoa relaxando na natureza"
              className="rounded-[3rem] shadow-[var(--shadow-soft)] w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Atenção a sua saúde mental
            </h2>
            <p className="text-lg text-foreground/90 mb-6">
              Diversos problemas podem afetar sua saúde mental e causar
              sofrimento como:
            </p>
            <ul className="space-y-4 mb-8">
              {conditions.map((condition) => (
                <li key={condition} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <span className="text-lg text-foreground">{condition}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Saiba mais
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511941543929&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0', '_blank')}>
                Agende sua consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthSection;
