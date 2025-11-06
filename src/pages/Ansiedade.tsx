import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Users, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";

const Ansiedade = () => {
  return (
    <>
      <Helmet>
        <title>Tratamento de Ansiedade - Dr. Gabriel Lopes | Psiquiatra Vila Olímpia</title>
        <meta name="description" content="Tratamento especializado para transtornos de ansiedade com o Dr. Gabriel Lopes. Abordagem integrativa e humanizada na Vila Olímpia, SP." />
        <meta name="keywords" content="ansiedade, transtorno de ansiedade, tratamento ansiedade, psiquiatra ansiedade, Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriellopes.com.br/ansiedade" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Coração Acelerado, Pensamentos Negativos ou Sensação de que{" "}
                  <span className="text-primary">Algo Ruim Vai Acontecer?</span>
                </h1>
                <p className="text-xl text-primary font-semibold">
                  Você pode estar convivendo com ansiedade.
                </p>
                <p className="text-lg text-muted-foreground">
                  Tratamento especializado e humanizado para transtornos de ansiedade com o Dr. Gabriel Lopes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                    🔹 Agende sua consulta
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    🔹 Faça o teste de ansiedade gratuito
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img
                  src={drGabrielImage}
                  alt="Dr. Gabriel Lopes - Psiquiatra especialista em ansiedade"
                  className="w-full h-auto rounded-2xl shadow-[var(--shadow-soft)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* O que causa a ansiedade - Parallax Section */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: `url(${consultorioImage})`,
              filter: 'brightness(0.3)'
            }}
          />
          <div className="absolute inset-0 bg-primary/90" />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
              Entenda as causas da ansiedade
            </h2>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                A ansiedade pode ser causada por diversos fatores. Sabe-se que muitas pessoas têm 
                <strong> predisposição genética</strong> para viver episódios ansiosos mais frequentes e intensos, 
                mas esta não é a única causa possível para a condição.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                O sentimento pode aparecer também quando a pessoa está prestes a passar por uma situação que 
                considera muito estressante, como começar em um emprego novo, passar por uma cirurgia ou 
                qualquer situação que julgue importante ou de risco, seja real ou não.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Já os <strong>transtornos de ansiedade</strong>, isto é, quando o sentimento se torna generalizado 
                ou associado a situações específicas de forma frequente, podem ser causados por diversos fatores, 
                de acordo com o tipo de transtorno apresentado pelo indivíduo.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de transtornos de ansiedade */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
              Tipos de transtornos de ansiedade
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Os transtornos podem ser classificados de acordo com as causas de sua manifestação e a forma como os sintomas surgem.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Transtorno de ansiedade generalizada",
                  description: "Quando o sentimento é intenso e ocorre em diversas áreas e situações",
                  icon: Shield
                },
                {
                  title: "Transtorno de ansiedade social",
                  description: "Quando o sentimento ansioso é relacionado a interações sociais",
                  icon: Users
                },
                {
                  title: "Transtorno de pânico",
                  description: "Ansiedade surge de forma intensa e repentina, com sensação de que algo ruim está prestes a acontecer",
                  icon: AlertCircle
                },
                {
                  title: "Ansiedade de separação",
                  description: "O sentimento é desencadeado pela separação de entes — comum em crianças quando os pais se separam",
                  icon: Heart
                },
                {
                  title: "Agorafobia",
                  description: "Medo excessivo de frequentar lugares públicos e movimentados",
                  icon: Shield
                },
                {
                  title: "Transtorno de estresse pós-traumático",
                  description: "Quando a ansiedade é desencadeada após a vivência de situações violentas ou traumáticas",
                  icon: AlertCircle
                }
              ].map((type, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p className="text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sintomas da Ansiedade */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
              Sintomas da Ansiedade
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              A ansiedade pode se manifestar como uma série de sintomas físicos e psicológicos
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {/* Sintomas Físicos */}
              <div className="bg-card p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Sintomas Físicos</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Tensão muscular e tremores",
                    "Palpitações",
                    "Falta de ar",
                    "Tontura",
                    "Falta ou excesso de apetite",
                    "Sudorese excessiva",
                    "Distúrbios gastrointestinais",
                    "Sensação de bolo na garganta",
                    "Sensação de cansaço extremo",
                    "Alterações no sono (insônia ou sonolência)",
                    "Dores de cabeça, no peito e musculares"
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sintomas Psicológicos */}
              <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Sintomas Psicológicos</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Sensação de que algo ruim está para acontecer",
                    "Irritabilidade e impaciência",
                    "Excesso de preocupação e pensamentos obsessivos",
                    "Sensação de perda de controle",
                    "Sensação de perda de conexão com as pessoas e ambiente",
                    "Inquietação",
                    "Autocrítica e autodepreciação",
                    "Dificuldade de manter interações sociais"
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                Identificou-se com esses sintomas? Faça o teste de ansiedade online
              </Button>
            </div>
          </div>
        </section>

        {/* Fatores de Risco */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
              Fatores de Risco
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Características que aumentam as chances de desenvolver transtornos de ansiedade
            </p>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Predisposição genética (histórico familiar)",
                "Gênero (maior prevalência em mulheres)",
                "Doenças cardíacas, hormonais e respiratórias",
                "Uso de álcool, estimulantes e drogas",
                "Uso de medicamentos corticosteroides",
                "Experiências traumáticas ou estressantes"
              ].map((factor, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{factor}</p>
                </div>
              ))}

              <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Importante:</strong> A presença de um ou mais fatores de risco não significa necessariamente que a pessoa desenvolverá um transtorno de ansiedade, mas aumenta as chances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como é feito o diagnóstico */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
              Como é feito o diagnóstico
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O diagnóstico de qualquer transtorno de ansiedade é <strong className="text-foreground">clínico</strong> e 
                  deve ser feito pelo médico psiquiatra a partir da análise dos sintomas físicos e psicológicos 
                  apresentados pelo paciente.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Além disso, também é importante avaliar as <strong className="text-foreground">circunstâncias</strong> em 
                  que esses sintomas aparecem, para investigar o tipo de transtorno que pode ser diagnosticado.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ainda, é importante investigar a possível presença de outros distúrbios de saúde mental, como a 
                  <strong className="text-foreground"> depressão</strong>, que pode estar associada à ansiedade.
                </p>
              </div>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-semibold mb-2">Atenção:</p>
                    <p className="text-muted-foreground">
                      É fundamental investigar a origem dos sintomas físicos para que sejam corretamente 
                      associados à ansiedade, e não a outras doenças.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teste de Ansiedade */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8 animate-fade-in">
                <div className="bg-primary/10 p-8 rounded-full">
                  <Brain className="w-16 h-16 text-primary" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Faça o teste gratuito de ansiedade
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                O teste de ansiedade é um conjunto de perguntas sobre a frequência do aparecimento de alguns sintomas específicos. 
                Dependendo do resultado, você pode ser aconselhado a buscar atendimento médico para que o diagnóstico correto seja feito.
              </p>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-3 justify-center">
                  <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Importante:</strong> O teste não substitui o diagnóstico profissional. 
                    Ele é apenas uma ferramenta inicial de avaliação.
                  </p>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all animate-fade-in" style={{ animationDelay: '0.4s' }} onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                Iniciar teste gratuito
              </Button>
            </div>
          </div>
        </section>

        {/* Como controlar a ansiedade */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
              Como controlar a ansiedade?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              O tratamento adequado da ansiedade envolve diferentes abordagens que podem ser combinadas para resultados mais eficazes
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Medicação</h3>
                <p className="text-muted-foreground mb-4">
                  Ansiolíticos e antidepressivos podem ser prescritos para controlar os sintomas físicos e psicológicos da ansiedade.
                </p>
                <p className="text-sm text-muted-foreground">
                  O uso de medicação deve sempre ser acompanhado por um psiquiatra.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-accent/10 p-4 rounded-lg w-fit mb-6">
                  <Brain className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Psicoterapia</h3>
                <p className="text-muted-foreground mb-4">
                  A terapia cognitivo-comportamental (TCC) é uma das abordagens mais eficazes para o tratamento da ansiedade.
                </p>
                <p className="text-sm text-muted-foreground">
                  Ajuda a identificar e modificar padrões de pensamento negativos.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Abordagem integrativa</h3>
                <p className="text-muted-foreground mb-4">
                  Técnicas de respiração, meditação, mindfulness, acupuntura e atividade física complementam o tratamento.
                </p>
                <p className="text-sm text-muted-foreground">
                  Promovem bem-estar e qualidade de vida de forma holística.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold mb-4 text-center">No Instituto Sanapta, o cuidado é integral</h3>
              <p className="text-lg text-muted-foreground text-center mb-6">
                O Dr. Gabriel Lopes oferece uma abordagem personalizada que combina medicação, psicoterapia e 
                práticas integrativas para um tratamento completo e eficaz da ansiedade.
              </p>
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                  Agende sua consulta com o Dr. Gabriel Lopes
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Dê o primeiro passo para controlar a ansiedade
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                O tratamento adequado pode transformar sua vida, trazendo mais tranquilidade e bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                  🔹 Agende sua consulta
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  🔹 Faça o teste gratuito de ansiedade
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Ansiedade;
