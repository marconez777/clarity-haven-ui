import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Família feliz na praia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
            Saúde Mental com acompanhamento completo
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Cuidado integral e humanizado para o seu bem-estar emocional e mental
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
          >
            Conheça a Clínica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
