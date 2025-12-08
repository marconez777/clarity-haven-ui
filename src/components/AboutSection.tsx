import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png?format=webp";
import { trackConversion } from "@/hooks/useConversionTracking";

const AboutSection = () => {
  const [loadIframe, setLoadIframe] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  const handleAgendamento = () => {
    trackConversion({ buttonLocation: 'about_section' });
    window.open('https://api.whatsapp.com/send/?phone=5511941543929&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0', '_blank');
  };

  // Lazy load iframe when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={handleAgendamento}>
                Agende sua consulta
              </Button>
            </div>
            
            <div ref={iframeRef} className="mt-8 flex justify-center md:justify-start min-h-[284px]">
              {loadIframe ? (
                <iframe 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency={true}
                  data-id="pnh0yj0mfi" 
                  title="Docplanner Booking Widget" 
                  src="https://widgets.doctoralia.com.br/doctor/widget/certificate/gabriel-lopes?customUtm=null&id=pnh0yj0mfi&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Fdrgabriel.med.br%2Fdr-gabriel-lopes%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=false&expand_calendar=false" 
                  style={{ border: "none", overflow: "hidden", width: "245px", height: "284px" }}
                  loading="lazy"
                />
              ) : (
                <div className="w-[245px] h-[284px] bg-muted animate-pulse rounded-lg" />
              )}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative group">
              <img
                src={drGabrielImage}
                alt="Dr. Gabriel Lopes"
                className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
              <a
                href="https://www.instagram.com/drgabriellopes/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center justify-center w-[86px] h-[86px] rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
                aria-label="Instagram do Dr. Gabriel Lopes"
              >
                <Instagram className="w-11 h-11" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;