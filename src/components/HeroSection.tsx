import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero/hero-family.jpg?format=webp";
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";
const HeroSection = () => {
  return <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden pb-12 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Família feliz na praia" 
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/70 md:bg-gradient-to-r md:from-background/90 md:via-background/50 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl pt-24 md:pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold md:mb-6 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700 leading-tight mx-0 my-0 mb-[10px] mt-[50px]">
            Saúde Mental com acompanhamento completo
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 my-0 mb-[50px]">
            Cuidado integral e humanizado para o seu bem-estar emocional e mental
          </p>
          <Button size="lg" onClick={() => handleWhatsAppClick('hero_section')} className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 w-full sm:w-auto my-[50px] mb-[50px] mt-[30px]">
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;