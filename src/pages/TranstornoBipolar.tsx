import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";

const TranstornoBipolar = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Tratamento de Transtorno Bipolar - Dr. Gabriel Lopes | Psiquiatra Vila Olímpia</title>
        <meta name="description" content="Tratamento especializado para transtorno bipolar com o Dr. Gabriel Lopes. Abordagem humanizada para uma vida com mais equilíbrio na Vila Olímpia, SP." />
        <meta name="keywords" content="transtorno bipolar, bipolaridade, tratamento para transtorno bipolar, psiquiatra para transtorno bipolar, mania, hipomania, depressão, Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriel.med.br/transtorno-bipolar" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <Breadcrumbs items={[{ label: "Especialidades", href: "/especialidades" }, { label: "Transtorno Bipolar" }]} />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
            <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-20">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                  Oscilações intensas de humor, períodos de euforia seguidos por tristeza profunda?
                    <span className="block text-primary mt-3 md:mt-4">Você pode estar convivendo com o transtorno bipolar.</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                  O Dr. Gabriel Lopes é psiquiatra especializado no diagnóstico e tratamento do transtorno bipolar, unindo ciência, empatia e acompanhamento personalizado.
                  </p>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all w-full sm:w-auto" onClick={() => window.open('https://agendarconsulta.com/perfil/dr-gabriel-magalhaes-lopes-1618791448?origin=profile_search', '_blank')}>
                      🔹 Agende sua consulta
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto" asChild>
                      <Link to="/teste-transtorno-bipolar">🔹 Faça o teste de transtorno bipolar gratuito</Link>
                    </Button>
                  </div>
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 hidden md:block">
                  <img src={drGabrielImage} alt="Dr. Gabriel Lopes - Psiquiatra especialista em Transtorno Bipolar" className="w-full h-auto rounded-2xl shadow-[var(--shadow-soft)]" />
                </div>
              </div>
            </div>
          </section>

          {/* O que é o Transtorno Bipolar? */}
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
                    O que é o Transtorno Bipolar?
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
                </div>
                <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl border border-white/20">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                  O transtorno bipolar, também chamado de transtorno afetivo bipolar, é uma condição de saúde mental caracterizada pela alternância entre episódios de depressão e euforia — que podem variar em intensidade e duração. Essas mudanças afetam o humor, o comportamento e o nível de energia, interferindo diretamente na rotina, nos relacionamentos e na produtividade.
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
                Ainda que não exista uma causa única, o transtorno bipolar está fortemente relacionado a fatores genéticos e biológicos, podendo ser desencadeado ou agravado por aspectos ambientais.
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8 max-w-3xl mx-auto">
                  {["Hereditariedade: até 80% dos casos têm histórico familiar da condição", "Alterações químicas cerebrais: desequilíbrio de neurotransmissores", "Eventos traumáticos ou de alto estresse emocional", "Uso de substâncias como álcool e drogas", "Mudanças marcantes na vida, como perdas ou separações"].map((factor, index) => <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground text-lg">{factor}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </section>

          {/* Sintomas do Transtorno Bipolar */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Sintomas do <span className="text-primary">Transtorno Bipolar</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Fase depressiva */}
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">🔹 Fase depressiva</h3>
                    <ul className="space-y-4">
                      {["Humor deprimido e sensação de vazio", "Falta de energia e interesse", "Isolamento social", "Alterações no sono e apetite", "Sentimentos de desesperança e culpa", "Pensamentos de morte ou suicidas"].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>

                  {/* Fase maníaca */}
                  <div className="bg-gradient-to-br from-accent/10 to-background p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6">
                      <Brain className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">🔹 Fase maníaca</h3>
                    <ul className="space-y-4">
                      {["Euforia e energia excessiva", "Sono reduzido sem sensação de cansaço", "Fala acelerada e pensamentos rápidos", "Impulsividade e comportamentos de risco", "Irritabilidade e intolerância a frustrações", "Sensação de poder e autoconfiança exagerada"].map((symptom, index) => <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" asChild>
                    <Link to="/teste-transtorno-bipolar">🔹 Identificou-se com esses sintomas? Faça o teste gratuito de transtorno bipolar</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de Transtorno Bipolar */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Tipos de Transtornos de <span className="text-primary">Bipolar</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Tipo I</h3>
                    <p className="text-muted-foreground">Episódios de mania intensa, muitas vezes intercalados com períodos depressivos.</p>
                  </div>

                  <div className="bg-gradient-to-br from-accent/10 to-background p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Tipo II</h3>
                    <p className="text-muted-foreground">Alternância entre depressão e hipomania, mais comum em mulheres.</p>
                  </div>

                  <div className="bg-gradient-to-br from-secondary/20 to-background p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Ciclotímico</h3>
                    <p className="text-muted-foreground">Oscilações leves e constantes de humor, sem prejuízo grave à rotina.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Complicações Possíveis */}
          <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Complicações Possíveis
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Quando não tratado adequadamente, o transtorno bipolar pode levar a complicações sérias, como:
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8 max-w-3xl mx-auto">
                  {["Episódios psicóticos durante a mania", "Risco aumentado de suicídio", "Uso abusivo de substâncias", "Problemas profissionais e de relacionamento", "Desenvolvimento de outras condições mentais ou físicas"].map((factor, index) => <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <AlertCircle className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground text-lg">{factor}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </section>

          {/* Diagnóstico do Transtorno Bipolar */}
          <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  Diagnóstico do <span className="text-primary">Transtorno Bipolar</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

                <div className="space-y-6 mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                  O diagnóstico é clínico e realizado por um médico psiquiatra, com base no histórico do paciente e nos sintomas relatados. Como os episódios variam com o tempo, o diagnóstico pode ser complexo e exigir acompanhamento contínuo para avaliação da evolução dos sintomas.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/30">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground">
                    👉 Relatar todas as fases de humor e comportamentos é essencial para o diagnóstico preciso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teste de Transtorno Bipolar */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Faça o teste gratuito de transtorno bipolar
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                Nosso teste online ajuda a identificar sinais de alterações de humor que podem estar relacionadas à bipolaridade. O resultado indica se é o momento de buscar avaliação médica detalhada.
                </p>
                <p className="text-sm text-muted-foreground mb-8 italic">
                🧩 O teste não substitui o diagnóstico profissional, mas pode ser o primeiro passo para entender o que você está sentindo.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" asChild>
                  <Link to="/teste-transtorno-bipolar">🔹 Iniciar teste gratuito</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Tratamento do Transtorno Bipolar */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Tratamento do <span className="text-primary">Transtorno Bipolar</span>
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
                    Estabilizadores de humor e antipsicóticos, conforme prescrição médica.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-accent/10 to-background rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Psicoterapia</h3>
                    <p className="text-muted-foreground">
                    Para compreender e lidar com emoções e gatilhos.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-secondary/20 to-background rounded-xl border-2 border-secondary/30 hover:border-secondary/50 transition-all">
                    <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Terapias complementares</h3>
                    <p className="text-muted-foreground">
                    Acupuntura integrativa, nutrição e atividade física.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/20 mb-8">
                  <p className="text-lg text-foreground text-center">
                    <strong>No Instituto Sanapta, o paciente encontra um tratamento completo</strong>, com equipe formada por psiquiatras, psicólogos, nutricionistas, educadores físicos e terapeutas integrativos.
                  </p>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://agendarconsulta.com/perfil/dr-gabriel-magalhaes-lopes-1618791448?origin=profile_search', '_blank')}>
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
                Viver com equilíbrio é possível
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                O transtorno bipolar tem tratamento, e com o acompanhamento certo, é possível alcançar estabilidade emocional, bem-estar e qualidade de vida. Dê o primeiro passo hoje.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://agendarconsulta.com/perfil/dr-gabriel-magalhaes-lopes-1618791448?origin=profile_search', '_blank')}>
                    🔹 Agende sua consulta
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary" asChild>
                    <Link to="/teste-transtorno-bipolar">🔹 Faça o teste gratuito de transtorno bipolar</Link>
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
export default TranstornoBipolar;