import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";
const Ansiedade = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Tratamento de Ansiedade - Dr. Gabriel Lopes | Psiquiatra Vila Olímpia</title>
        <meta name="description" content="Tratamento especializado para transtornos de ansiedade com o Dr. Gabriel Lopes. Abordagem humanizada para uma vida com mais tranquilidade na Vila Olímpia, SP." />
        <meta name="keywords" content="ansiedade, transtorno de ansiedade, tratamento para ansiedade, psiquiatra para ansiedade, TAG, pânico, ansiedade social, Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriellopes.com.br/ansiedade" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
            <div className="container mx-auto px-4 py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h1 className="text-4xl font-bold mb-6 text-foreground md:text-5xl">
                    Sente angústia constante, medo ou preocupação em excesso?
                    <span className="block text-primary mt-4">Você pode estar convivendo com um transtorno de ansiedade.</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e transtornos de ansiedade.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                      🔹 Agende sua consulta
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" onClick={() => {}}>
                      🔹 Faça o teste de ansiedade gratuito
                    </Button>
                  </div>
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                  <img src={drGabrielImage} alt="Dr. Gabriel Lopes - Psiquiatra especialista em Ansiedade" className="w-full h-auto rounded-2xl shadow-[var(--shadow-soft)]" />
                </div>
              </div>
            </div>
          </section>

          {/* O que é a Ansiedade? */}
          <section className="relative py-32 overflow-hidden">
            {/* Background parallax com transparência */}
            <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{
            backgroundImage: `url(${consultorioImage})`
          }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#087daf]/90 via-[#087daf]/90 to-[#087daf]/90" />

            {/* Conteúdo */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                    O que é a Ansiedade?
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
                </div>
                <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl border border-white/20">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                    A ansiedade é uma resposta natural do corpo a situações de estresse ou risco.
                    Todos sentimos ansiedade em algum momento — ela nos prepara para agir e enfrentar desafios.
                    No entanto, quando o medo, a apreensão e a tensão passam a ser constantes e desproporcionais, afetando a qualidade de vida, estamos diante de um transtorno de ansiedade, que requer acompanhamento médico especializado.
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
                  Causas e Fatores de Risco
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  A ansiedade pode ter origens multifatoriais, envolvendo aspectos genéticos, biológicos e ambientais. Entre os fatores mais comuns estão:
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8 max-w-3xl mx-auto">
                  {["Predisposição genética (histórico familiar)", "Experiências traumáticas ou situações de estresse intenso", "Uso de substâncias como álcool, cafeína e estimulantes", "Desequilíbrios hormonais e doenças cardíacas ou respiratórias", "Personalidade mais sensível a críticas e mudanças"].map((factor, index) => <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground text-lg">{factor}</span>
                    </div>)}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-foreground font-medium">
                    👉 Cada pessoa manifesta a ansiedade de forma diferente — o diagnóstico individual é essencial.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de Transtornos de Ansiedade */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Tipos de Transtornos de <span className="text-primary">Ansiedade</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Transtorno de Ansiedade Generalizada (TAG) */}
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Transtorno de Ansiedade Generalizada (TAG)</h3>
                    <p className="text-muted-foreground">preocupação intensa e persistente em diversas áreas da vida.</p>
                  </div>

                  {/* Transtorno de Pânico */}
                  <div className="bg-gradient-to-br from-accent/10 to-background p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Transtorno de Pânico</h3>
                    <p className="text-muted-foreground">crises súbitas de medo extremo com sintomas físicos intensos.</p>
                  </div>

                  {/* Ansiedade Social */}
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Ansiedade Social</h3>
                    <p className="text-muted-foreground">medo excessivo de interações ou situações sociais.</p>
                  </div>

                  {/* Agorafobia */}
                  <div className="bg-gradient-to-br from-accent/10 to-background p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Agorafobia</h3>
                    <p className="text-muted-foreground">medo de locais públicos ou situações em que a pessoa se sinta “presa”.</p>
                  </div>

                  {/* Transtorno de Estresse Pós-Traumático (TEPT) */}
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Transtorno de Estresse Pós-Traumático (TEPT)</h3>
                    <p className="text-muted-foreground">ansiedade após experiências traumáticas.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sintomas da Ansiedade */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Sintomas da <span className="text-primary">Ansiedade</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Sintomas físicos */}
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">🩺 Sintomas físicos</h3>
                    <ul className="space-y-4">
                      {["Palpitações e falta de ar", "Tensão muscular, tremores e sudorese", "Tontura e sensação de desmaio", "Dores no peito, de cabeça e no estômago", "Alterações no sono e no apetite"].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>

                  {/* Sintomas psicológicos */}
                  <div className="bg-gradient-to-br from-accent/10 to-background p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6">
                      <Brain className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">💭 Sintomas psicológicos</h3>
                    <ul className="space-y-4">
                      {["Preocupação excessiva e medo constante", "Irritabilidade e impaciência", "Sensação de perda de controle", "Pensamentos obsessivos", "Dificuldade de concentração e relaxamento"].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" onClick={() => {}}>
                    🔹 Identificou-se com esses sintomas? Faça o teste gratuito de ansiedade
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnóstico da Ansiedade */}
          <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  Diagnóstico da <span className="text-primary">Ansiedade</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

                <div className="space-y-6 mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O diagnóstico é clínico e deve ser realizado por um médico psiquiatra.
                    Durante a consulta, o profissional avalia sintomas físicos e emocionais, sua frequência e intensidade, além de investigar possíveis condições associadas, como depressão ou transtornos do sono.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/30">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground">
                      👉 Um diagnóstico preciso é o primeiro passo para o tratamento eficaz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teste de Ansiedade */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Faça o teste gratuito de ansiedade
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nosso teste online ajuda a identificar sinais que podem indicar um transtorno ansioso.
                  Em poucos minutos, você saberá se é recomendado buscar uma avaliação médica detalhada.
                </p>
                <p className="text-sm text-muted-foreground mb-8 italic">
                  🧩 O teste não substitui o diagnóstico profissional, mas é um excelente ponto de partida para o autocuidado.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => {}}>
                  🔹 Iniciar teste gratuito
                </Button>
              </div>
            </div>
          </section>

          {/* Tratamento da Ansiedade */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Tratamento da <span className="text-primary">Ansiedade</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Medicamentos</h3>
                    <p className="text-muted-foreground">
                      Ansiolíticos ou antidepressivos, prescritos conforme o caso.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-accent/10 to-background rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Psicoterapia</h3>
                    <p className="text-muted-foreground">
                      Para controle de pensamentos e reeducação emocional.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-secondary/20 to-background rounded-xl border-2 border-secondary/30 hover:border-secondary/50 transition-all">
                    <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Terapias complementares</h3>
                    <p className="text-muted-foreground">
                      Acupuntura integrativa e práticas de relaxamento.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/20 mb-8">
                  <p className="text-lg text-foreground text-center">
                    <strong>No Instituto Sanapta, o tratamento é conduzido de forma integrada</strong>, unindo medicina tradicional e abordagens complementares para promover o equilíbrio físico e mental.
                  </p>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                    🔹 Agende sua consulta com o Dr. Gabriel Lopes
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Depoimentos */}
          <TestimonialsSection />

          {/* CTA Final */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Você não precisa conviver com a ansiedade sozinho(a)
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  O tratamento certo pode transformar sua rotina e devolver sua tranquilidade e equilíbrio emocional.
                  Comece hoje mesmo o cuidado com sua saúde mental.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                    🔹 Agende sua consulta
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" onClick={() => {}}>
                    🔹 Faça o teste gratuito de ansiedade
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
export default Ansiedade;