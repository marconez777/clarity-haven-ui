import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png?format=webp";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg?format=webp";
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";
const TDAH = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Tratamento de TDAH - Dr. Gabriel Lopes | Psiquiatra Vila Clementino</title>
        <meta name="description" content="Avaliação completa e tratamento especializado para TDAH infantil e adulto com o Dr. Gabriel Lopes. Abordagem integrativa e humanizada na Vila Clementino, SP." />
        <meta name="keywords" content="TDAH, déficit de atenção, hiperatividade, tratamento TDAH, TDAH infantil, TDAH adulto, psiquiatra TDAH, Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriel.med.br/tdah" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgabriel.med.br/tdah" />
        <meta property="og:title" content="Tratamento de TDAH - Dr. Gabriel Lopes | Psiquiatra Vila Clementino" />
        <meta property="og:description" content="Avaliação completa e tratamento especializado para TDAH infantil e adulto com o Dr. Gabriel Lopes." />
        <meta property="og:image" content="https://drgabriel.med.br/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tratamento de TDAH - Dr. Gabriel Lopes | Psiquiatra Vila Clementino" />
        <meta name="twitter:description" content="Avaliação completa e tratamento especializado para TDAH infantil e adulto." />
        <meta name="twitter:image" content="https://drgabriel.med.br/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <Breadcrumbs items={[{
        label: "Especialidades",
        href: "/especialidades"
      }, {
        label: "TDAH"
      }]} />
        <main>
          {/* Hero Section */}
          <section className="relative py-8 md:py-16 overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                    Dificuldade de Foco, Impulsividade ou Esquecimento Constante?
                    <span className="block text-primary mt-3 md:mt-4 mb-[50px]">Você pode estar convivendo com TDAH.</span>
                  </h1>
                  <p className="hidden md:block text-lg sm:text-xl md:text-xl text-muted-foreground mb-6 md:mb-8">
                    Avaliação completa e tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e TDAH infantil e adulto.
                  </p>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all w-full sm:w-auto" onClick={() => handleWhatsAppClick('tdah_hero')}>
                      Agende sua consulta
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto" asChild>
                      <Link to="/teste-tdah-hiperatividade">Faça o teste de TDAH gratuito</Link>
                    </Button>
                  </div>
                  {/* Dr. Gabriel - Mobile */}
                  <div className="mt-8 md:hidden animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    <img src={drGabrielImage} alt="Dr. Gabriel Lopes - Psiquiatra especialista em TDAH" className="w-full max-w-sm mx-auto h-auto rounded-2xl shadow-[var(--shadow-soft)]" />
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
                  {["Histórico familiar de TDAH", "Nascimento com baixo peso", "Exposição a toxinas como chumbo", "Uso de cigarro e álcool durante a gestação", "Experiências traumáticas na infância (negligência, abuso ou violência)"].map((factor, index) => <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground text-lg">{factor}</span>
                    </div>)}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-foreground font-medium">
                    👉 Cada paciente é único — por isso o diagnóstico deve ser sempre individualizado e conduzido por um médico especialista.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sintomas do TDAH */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Sintomas do <span className="text-primary">TDAH</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Em crianças */}
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">🧒 Em crianças</h3>
                    <ul className="space-y-4">
                      {["Dificuldade de manter atenção em atividades escolares ou brincadeiras", "Inquietude e agitação constantes", "Impaciência e dificuldade em esperar", "Dificuldade de concluir tarefas"].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>

                  {/* Em adultos */}
                  <div className="bg-gradient-to-br from-accent/10 to-background p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6">
                      <Brain className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">👩‍💼 Em adultos</h3>
                    <ul className="space-y-4">
                      {["Falta de foco em tarefas diárias e profissionais", "Esquecimentos e perda de prazos", "Procrastinação", "Impulsividade e oscilações de humor", "Sensação de sobrecarga mental e dificuldade de organização"].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" asChild>
                    <Link to="/teste-tdah-hiperatividade">🔹 Faça o teste gratuito de TDAH</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnóstico do TDAH */}
          <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  Como é feito o <span className="text-primary">diagnóstico</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />
                
                <div className="space-y-6 mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O diagnóstico é clínico e deve ser realizado por um médico psiquiatra.
                    Durante a avaliação, o profissional analisa o histórico de sintomas desde a infância, 
                    em diferentes contextos — escolar, familiar e social.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-background rounded-xl border-2 border-primary/20">
                      <h4 className="font-bold text-xl mb-3 text-primary">TDAH Desatento</h4>
                      <p className="text-muted-foreground">Predomina a falta de atenção.</p>
                    </div>
                    <div className="p-6 bg-background rounded-xl border-2 border-accent/20">
                      <h4 className="font-bold text-xl mb-3 text-accent">TDAH Hiperativo-Impulsivo</h4>
                      <p className="text-muted-foreground">Predomina a inquietação e impulsividade.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/30">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground">
                      A consulta médica é essencial para diferenciar o TDAH de outras condições, como ansiedade ou depressão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teste de TDAH */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Faça o teste gratuito de TDAH
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nosso teste online ajuda você a identificar sinais que podem indicar o transtorno.
                  Em poucos minutos, você descobre se é recomendado buscar uma avaliação médica detalhada.
                </p>
                <p className="text-sm text-muted-foreground mb-8 italic">
                  🧩 O teste não substitui o diagnóstico profissional, mas é um ótimo ponto de partida.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" asChild>
                  <Link to="/teste-tdah-hiperatividade">🔹 Iniciar teste gratuito</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Tratamento do TDAH */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Tratamento especializado e <span className="text-primary">humanizado</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Medicação</h3>
                    <p className="text-muted-foreground">
                      Uso de psicoestimulantes ou antidepressivos conforme orientação médica.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-accent/10 to-background rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Psicoterapia</h3>
                    <p className="text-muted-foreground">
                      Apoio psicológico para controle da impulsividade e foco.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-secondary/20 to-background rounded-xl border-2 border-secondary/30 hover:border-secondary/50 transition-all">
                    <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Abordagem integrativa</h3>
                    <p className="text-muted-foreground">
                      Terapias complementares como acupuntura e orientação nutricional.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/20 mb-8">
                  <p className="text-lg text-foreground text-center">
                    <strong>No Instituto Sanapta, o cuidado é integral</strong> — com equipe multidisciplinar que une 
                    medicina tradicional e práticas complementares.
                  </p>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => handleWhatsAppClick('tdah_tratamento')}>
                    🔹 Agende sua Consulta
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* TDAH Infantil e TDAH Adulto */}
          <section className="py-20" style={{
          backgroundColor: '#087daf'
        }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-background p-8 rounded-2xl border-2 border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-primary">👦 TDAH Infantil</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O diagnóstico precoce reduz significativamente os impactos do transtorno na vida adulta.
                      Pais e educadores devem ficar atentos aos sinais de hiperatividade, desatenção e dificuldades escolares.
                    </p>
                  </div>

                  <div className="bg-background p-8 rounded-2xl border-2 border-accent/20">
                    <h3 className="font-bold mb-4 text-[neutral-600neutral-600] text-[#077eb0]">👩 TDAH em Adultos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mesmo surgindo na infância, o TDAH pode continuar na vida adulta, prejudicando relações, 
                      produtividade e autoestima. O tratamento adequado ajuda a retomar o controle e o equilíbrio emocional.
                    </p>
                  </div>
                </div>
              </div>
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
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => handleWhatsAppClick('tdah_cta_final')}>
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
    </>;
};
export default TDAH;