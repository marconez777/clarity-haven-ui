import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";
const PsiquiatraDeTDAH = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Psiquiatra de TDAH | DR Gabriel Lopes</title>
        <meta name="description" content="Marque uma consulta com psiquiatra de TDAH, esclareça seus sintomas e comece um acompanhamento estruturado para organizar sua rotina." />
        <meta name="keywords" content="psiquiatra, TDAH, consulta, online, especialista" />
        <link rel="canonical" href="https://drgabriel.med.br/psiquiatra-de-tdah" />
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
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all w-full sm:w-auto" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511941543929&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0', '_blank')}>
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


          {/* Seção de Texto Adicional */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto blog-content prose prose-lg">
                <h2>O Transtorno de Déficit de Atenção e Hiperatividade é uma condição que afeta a concentração, o controle dos impulsos e a capacidade de organização. Identificar seus sinais pode ser um desafio, especialmente porque eles variam de pessoa para pessoa. É por isso que buscar um psiquiatra de TDAH online é um passo essencial para compreender o que está acontecendo e iniciar o processo de tratamento com segurança.</h2>

<p>Muitas pessoas se perguntam qual médico consulta para TDAH, e a resposta é simples: o médico psiquiatra especialista em TDAH.</p>

<p>Esse profissional é capacitado para analisar os sintomas, compreender a história de vida do paciente e oferecer um diagnóstico preciso. O psiquiatra faz teste de TDAH para diferenciar o transtorno de outras condições com sintomas semelhantes, como ansiedade, depressão ou dificuldades de aprendizado.</p>

<h2>Vantagens de buscar um psiquiatra de TDAH online</h2>

<ul>
  <li>Agendar uma consulta com psiquiatra de TDAH online traz inúmeros benefícios. O paciente pode conversar com o médico no conforto de casa, evitando deslocamentos e facilitando a rotina. Essa modalidade de atendimento permite mais flexibilidade de horários e amplia o acesso a profissionais altamente qualificados, inclusive psiquiatra especialista em TDAH de outras regiões.</li>
  <li>Muitas pessoas se sentem mais à vontade para falar sobre suas dificuldades quando estão em um ambiente familiar. Essa tranquilidade favorece a sinceridade e ajuda o especialista a entender melhor os sintomas e os desafios enfrentados no dia a dia.</li>
</ul>

<h2>O que esperar da consulta com psiquiatra especialista em TDAH</h2>

<p>Durante o primeiro contato com o psiquiatra de TDAH online, o profissional fará uma escuta atenta da história pessoal, rotina e comportamento. Também poderá aplicar questionários e escalas que auxiliam na identificação do transtorno. Por isso, é fundamental ser transparente sobre os sintomas e dificuldades enfrentadas.</p>

<p>O psiquiatra faz teste de TDAH para confirmar o diagnóstico e, a partir disso, cria um plano de tratamento individualizado. Cada paciente é único, e o cuidado deve considerar aspectos emocionais, hábitos de vida e o impacto dos sintomas em diferentes áreas da vida.</p>

<h2>Tratamento de TDAH: Uma jornada de autoconhecimento e equilíbrio</h2>

<h3>O tratamento de TDAH vai muito além do uso de medicação.</h3>

<p>Ele envolve autoconhecimento, mudanças na rotina e, em muitos casos, acompanhamento psicoterápico. Com o apoio de um médico psiquiatra especialista em TDAH, é possível compreender melhor como o cérebro funciona e adotar estratégias para lidar com distrações, impulsividade e falta de foco.</p>

<p>O tratamento traz benefícios concretos: melhora na produtividade, maior controle emocional, autoestima fortalecida e relacionamentos mais equilibrados. Quando o processo é acompanhado por um especialista em Transtorno de déficit de atenção, os resultados costumam aparecer de forma gradual, mas consistente, proporcionando mais bem-estar e qualidade de vida.</p>

<h2>Por que escolher o acompanhamento online</h2>

<ul>
  <li>O psiquiatra de TDAH online tornou o cuidado mais acessível e prático. Para quem mora longe dos grandes centros ou tem uma rotina corrida, essa modalidade representa uma oportunidade real de começar o tratamento sem adiamentos. Além disso, o atendimento virtual mantém o mesmo padrão de sigilo e ética que as consultas presenciais.</li>
  <li>Outra vantagem é a continuidade. Mesmo em viagens ou mudanças de cidade, o acompanhamento pode seguir sem interrupções, garantindo que o plano terapêutico seja mantido e ajustado conforme as necessidades.</li>
</ul>

<h2>A importância de um especialista em Transtorno de déficit de atenção</h2>

<p>O TDAH exige olhar clínico apurado e sensibilidade. Um especialista em Transtorno de déficit de atenção compreende a complexidade desse transtorno e sabe que cada pessoa tem seu próprio ritmo de adaptação e evolução. Por isso, o plano terapêutico é feito sob medida, com metas realistas e acompanhamento próximo.</p>

<p>Quando se tem o apoio de um psiquiatra de TDAH online, o paciente não apenas entende seus desafios, mas também aprende a valorizar suas habilidades e conquistas. O tratamento é uma jornada de aprendizado e fortalecimento pessoal, que resgata o prazer em realizar tarefas e o sentimento de controle sobre a própria vida.</p>

<h2>Dar o primeiro passo faz toda a diferença</h2>

<p>Buscar um psiquiatra de TDAH online é uma atitude de coragem e autocuidado. Significa reconhecer que o foco, a organização e o bem-estar emocional podem ser recuperados com o acompanhamento certo.</p>

<p>Independentemente da idade, é sempre tempo de buscar ajuda. O médico psiquiatra especialista em TDAH está preparado para orientar o paciente com empatia, clareza e respeito. Seja por meio de um diagnóstico inicial, de um tratamento de TDAH estruturado ou de uma conversa esclarecedora, cada consulta representa um avanço importante na direção de uma vida mais equilibrada e produtiva.</p>

<h3>Marque agora mesmo sua consulta com psiquiatra de TDAH online!</h3>

<p>O Dr. Gabriel Lopes é médico psiquiatra especialista em TDAH, com atuação focada no diagnóstico preciso e em planos de tratamento individualizados para adultos, sempre com ética, responsabilidade e cuidado integral à saúde mental.</p>
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
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511941543929&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0', '_blank')}>
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
export default PsiquiatraDeTDAH;