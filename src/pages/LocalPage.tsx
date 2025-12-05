import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useParams, Navigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png?format=webp";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg?format=webp";
import DOMPurify from 'dompurify';
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";

const LocalPage = () => {
  const { slug } = useParams();

  const { data: page, isLoading, error } = useQuery({
    queryKey: ['page', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  if (error || !page) {
    return <Navigate to="/404" replace />;
  }

  const sanitizedContent = DOMPurify.sanitize(page.content);

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{page.seo_title || page.title}</title>
        <meta name="description" content={page.seo_description || ''} />
        {page.seo_keywords && <meta name="keywords" content={page.seo_keywords} />}
        <link rel="canonical" href={`https://drgabriel.med.br/${page.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://drgabriel.med.br/${page.slug}`} />
        <meta property="og:title" content={page.seo_title || page.title} />
        <meta property="og:description" content={page.seo_description || ''} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={page.seo_title || page.title} />
        <meta name="twitter:description" content={page.seo_description || ''} />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
            <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-20">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                    Dificuldade de Foco, Impulsividade ou Esquecimento Constante?
                    <span className="block text-primary mt-3 md:mt-4">Você pode estar convivendo com TDAH.</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                    Avaliação completa e tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e TDAH infantil e adulto.
                  </p>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all w-full sm:w-auto" onClick={() => handleWhatsAppClick('local_page_hero')}>
                      Agende sua consulta
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto" asChild>
                      <Link to="/teste-tdah-hiperatividade">Faça o teste de TDAH gratuito</Link>
                    </Button>
                  </div>
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 hidden md:block">
                  <img src={drGabrielImage} alt="Dr. Gabriel Lopes - Psiquiatra especialista em TDAH" className="w-full h-auto rounded-2xl shadow-[var(--shadow-soft)]" />
                </div>
              </div>
            </div>
          </section>

          {/* O que é o TDAH */}
          <section className="relative py-16 md:py-32 overflow-hidden">
            {/* Background parallax com transparência - Hidden on mobile */}
            <div className="absolute inset-0 bg-fixed bg-center bg-cover hidden md:block" style={{
              backgroundImage: `url(${consultorioImage})`
            }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#087daf]/90 via-[#087daf]/90 to-[#087daf]/90" />

            {/* Conteúdo */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                    Entenda o transtorno do déficit de atenção com hiperatividade
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
                </div>
                <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl border border-white/20">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                    O TDAH é uma condição neurobiológica que afeta o funcionamento da região frontal do cérebro,
                    responsável pelo controle da atenção, impulsividade e comportamento.
                    Cada caso é único e pode se manifestar com diferentes intensidades em crianças, adolescentes ou adultos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Causas e fatores de risco */}
          <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  Por que o TDAH acontece?
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  Não há uma única causa definida, mas estudos apontam fatores genéticos e ambientais como principais influenciadores.
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8 max-w-3xl mx-auto">
                  {[
                    "Histórico familiar de TDAH",
                    "Nascimento com baixo peso",
                    "Exposição a toxinas como chumbo",
                    "Uso de cigarro e álcool durante a gestação",
                    "Experiências traumáticas na infância (negligência, abuso ou violência)"
                  ].map((factor, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground text-lg">{factor}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-foreground font-medium">
                    👉 Cada paciente é único — por isso o diagnóstico deve ser sempre individualizado e conduzido por um médico especialista.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conteúdo da Página */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div 
                className="max-w-4xl mx-auto blog-content prose prose-lg"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Dê o primeiro passo para cuidar da sua <span className="text-primary">saúde mental</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  O tratamento do TDAH pode transformar sua rotina, trazendo mais foco, equilíbrio e qualidade de vida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => handleWhatsAppClick('local_page_cta')}>
                    🔹 Agende sua consulta
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" asChild>
                    <Link to="/teste-tdah-hiperatividade">🔹 Faça o teste gratuito de TDAH</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default LocalPage;
