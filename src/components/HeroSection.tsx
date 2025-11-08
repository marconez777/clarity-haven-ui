import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroImage}
          alt="Família feliz na praia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl pt-12 md:pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700 leading-tight">
            Saúde Mental com acompanhamento completo
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Cuidado integral e humanizado para o seu bem-estar emocional e mental
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 w-full sm:w-auto"
          >
            Conheça a Clínica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
