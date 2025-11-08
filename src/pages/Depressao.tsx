import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2 } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";

const Depressao = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Tratamento de Depressão - Dr. Gabriel Lopes | Psiquiatra Vila Olímpia</title>
        <meta name="description" content="Tratamento especializado para depressão com o Dr. Gabriel Lopes. Abordagem integrativa e humanizada na Vila Olímpia, SP." />
        <meta name="keywords" content="depressão, tratamento depressão, psiquiatra depressão, Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriellopes.com.br/depressao" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
            <div className="container mx-auto px-4 pt-32 pb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h1 className="text-4xl font-bold mb-6 text-foreground md:text-5xl">
                    Tristeza constante, falta de energia ou perda de interesse pelo que antes trazia prazer?
                    <span className="block text-primary mt-4">Você pode estar enfrentando um quadro de depressão.</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e transtornos do humor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                      🔹 Agende sua consulta
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                      🔹 Faça o teste de depressão gratuito
                    </Button>
                  </div>
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                  <img src={drGabrielImage} alt="Dr. Gabriel Lopes - Psiquiatra especialista em Depressão" className="w-full h-auto rounded-2xl shadow-[var(--shadow-soft)]" />
                </div>
              </div>
            </div>
          </section>

          {/* O que é a Depressão? */}
          <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{
            backgroundImage: `url(${consultorioImage})`
          }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#087daf]/90 via-[#087daf]/90 to-[#087daf]/90" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                    O que é a Depressão?
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
                </div>
                <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl border border-white/20">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                    A depressão é um transtorno de humor que vai além da tristeza passageira. Ela provoca alterações emocionais, cognitivas e físicas que comprometem o bem-estar e o desempenho diário. Diferente de um momento difícil, a depressão é uma condição médica, que requer diagnóstico e acompanhamento profissional.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Causas e Fatores de Risco */}
          <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  Causas e Fatores de Risco
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  A depressão pode ter origem multifatorial, combinando fatores biológicos, genéticos e ambientais. As principais causas incluem:
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8 max-w-3xl mx-auto">
                  {["Predisposição genética: histórico familiar da doença;", "Alterações químicas no cérebro: deficiência de neurotransmissores como serotonina e dopamina;", "Experiências traumáticas na infância ou vida adulta;", "Perdas significativas: término, luto ou demissão;", "Sedentarismo, má alimentação e uso de drogas;", "Desequilíbrios hormonais ou doenças clínicas associadas."].map((factor, index) => <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground text-lg">{factor}</span>
                    </div>)}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-foreground font-medium">
                    👉 Pessoas com predisposição genética podem desenvolver a doença mais facilmente quando expostas a fatores ambientais de risco.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sintomas da Depressão */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Sintomas da <span className="text-primary">Depressão</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Sintomas emocionais e comportamentais */}
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                      <Brain className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">💭 Sintomas emocionais e comportamentais:</h3>
                    <ul className="space-y-4">
                      {["Tristeza e angústia constantes;", "Falta de energia e desinteresse por atividades;", "Sentimentos de culpa, fracasso e inutilidade;", "Dificuldade de concentração e memória;", "Baixa autoestima e pessimismo;", "Pensamentos sobre morte ou suicidas."].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>

                  {/* Sintomas físicos */}
                  <div className="bg-gradient-to-br from-accent/10 to-background p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">🩺 Sintomas físicos:</h3>
                    <ul className="space-y-4">
                      {["Fadiga e mal-estar;", "Alterações no sono e apetite;", "Dores sem causa aparente;", "Desconfortos gastrointestinais;", "Falta de ar e palpitações."].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                    🔹 Identificou-se com esses sintomas? → Faça o teste gratuito de depressão
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Tristeza x Depressão */}
          <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  Tristeza x <span className="text-primary">Depressão</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

                <div className="space-y-6 mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    É importante diferenciar: A tristeza é uma emoção passageira, geralmente associada a um evento específico. Já a depressão é persistente, profunda e independe de uma causa imediata. Enquanto a tristeza tende a se resolver com o tempo, a depressão necessita de tratamento médico e psicológico.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnóstico da Depressão */}
          <section className="py-20" style={{ backgroundColor: '#087daf' }}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
                        Diagnóstico da Depressão
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-12" />
                    <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl border border-white/20">
                        <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                            O diagnóstico é clínico e deve ser feito por um médico psiquiatra. Durante a consulta, o profissional avalia sintomas, histórico pessoal e familiar, além de excluir outras condições que possam causar sintomas semelhantes.
                        </p>
                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                            <p className="text-foreground font-medium">
                                👉 Um diagnóstico precoce é essencial para iniciar o tratamento e evitar agravamentos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* Teste de Depressão */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Faça o teste gratuito de depressão
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nosso teste online ajuda a identificar sinais que podem indicar a presença de um transtorno depressivo. Em poucos minutos, você entende se é o momento de buscar ajuda médica especializada.
                </p>
                <p className="text-sm text-muted-foreground mb-8 italic">
                  🧩 O teste não substitui o diagnóstico profissional, mas é um ótimo primeiro passo para o autoconhecimento.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                  🔹 Iniciar teste gratuito
                </Button>
              </div>
            </div>
          </section>

          {/* Tratamento da Depressão */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Tratamento da <span className="text-primary">Depressão</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Medicação</h3>
                    <p className="text-muted-foreground">
                      Uso de antidepressivos e estabilizadores de humor, prescritos por um psiquiatra.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-accent/10 to-background rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Psicoterapia</h3>
                    <p className="text-muted-foreground">
                      Para compreender e reorganizar emoções.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-secondary/20 to-background rounded-xl border-2 border-secondary/30 hover:border-secondary/50 transition-all">
                    <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Mudanças no estilo de vida</h3>
                    <p className="text-muted-foreground">
                      Com foco em atividade física, alimentação e sono.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-primary/10 to-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Terapias complementares</h3>
                    <p className="text-muted-foreground">
                      Como acupuntura integrativa e suporte nutricional.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/20 mb-8">
                  <p className="text-lg text-foreground text-center">
                    <strong>No Instituto Sanapta, o cuidado é multidisciplinar</strong>, com uma equipe que une psiquiatria, psicologia, nutrição e acupuntura — promovendo o equilíbrio entre corpo e mente.
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


          {/* CTA Final */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  O primeiro passo para superar a depressão é buscar ajuda
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  A depressão tem tratamento — e a recuperação é possível. Com acompanhamento médico adequado e apoio multidisciplinar, é possível retomar o equilíbrio emocional e viver com leveza novamente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                    🔹 Agende sua consulta
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                    🔹 Faça o teste gratuito de depressão
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
export default Depressao;