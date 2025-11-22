import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";
const ProfissionalEspecialistaEmTDAH = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Profissional Especialista em TDAH | DR Gabriel Lopes</title>
        <meta name="description" content="Agende atendimento com profissional especialista em TDAH e receba orientação técnica, humanizada e voltada às suas necessidades." />
        <meta name="keywords" content="especialista, TDAH, profissional, psiquiatra, adulto" />
        <link rel="canonical" href="https://drgabriellopes.com.br/profissional-especialista-em-tdah" />
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
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all w-full sm:w-auto" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                      Agende sua consulta
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
                      Faça o teste de TDAH gratuito
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
                <h2>Conviver com sintomas de desatenção, impulsividade e dificuldade de organização pode ser exaustivo. Muitas pessoas passam anos acreditando que tudo é “falta de esforço”, até descobrir que um profissional especialista em tdah pode explicar o que está por trás desse padrão.</h2>

<p>O medico especialista em tdah é o médico indicado para avaliar esses sinais, acolher a história do paciente e orientar os próximos passos. Em vários casos, é o Psiquiatra para TDAH quem transforma dúvidas em clareza e abre espaço para uma rotina mais leve e organizada.</p>

<h2>A importância do olhar voltado para a vida adulta</h2>

<p>O transtorno não se limita à infância. Muitas pessoas apenas na fase adulta percebem que as dificuldades de foco, atrasos recorrentes e esquecimentos constantes não são mera distração. Nessa hora, contar com um especialista em tdah em adultos faz toda a diferença.</p>

<p>Esse profissional entende as particularidades dessa fase da vida, como responsabilidades profissionais, relacionamento afetivo e gestão financeira. Com uma avaliação cuidadosa, é possível definir um tratamento de TDAH em adultos que considere objetivos pessoais e o estilo de vida, respeitando limites e valorizando qualidades.</p>

<h2>Como o psiquiatra chega ao diagnóstico de TDAH</h2>

<p>Uma das dúvidas mais comuns é como psiquiatra diagnostica tdah. O processo envolve escuta atenta, análise detalhada da história de vida, observação dos sintomas atuais e, quando necessário, aplicação de escalas e questionários específicos.</p>

<p>O medico psiquiatra especialista em tdah leva em conta o impacto dos sintomas no estudo, no trabalho e nas relações, sempre com olhar humano e acolhedor. O objetivo é oferecer respostas claras, sem rótulos, ajudando a pessoa a entender que há explicação para aquilo que sempre pareceu desorganização ou “falta de foco” sem motivo.</p>

<h2>Benefícios de ter um acompanhamento contínuo</h2>

<p>Contar com um profissional especialista em tdah ao longo do tempo permite ajustes finos no plano terapêutico. À medida que a rotina muda, o médico revisa estratégias, orienta sobre organização, sono, manejo de distrações e equilíbrio emocional. O Psiquiatra para TDAH pode sugerir, quando indicado, uso de medicamentos, sempre de forma cuidadosa e individualizada, além de recomendar mudanças de hábitos que favorecem concentração e bem-estar. Esse acompanhamento constante ajuda a pessoa a perceber avanços, celebrar conquistas e cultivar uma relação mais gentil consigo mesma.</p>

<h2>Especialista em TDAH em adultos</h2>

<p>Muitas pessoas crescem ouvindo que são preguiçosas, desorganizadas ou “sem jeito”. Quando encontram um especialista em tdah em adultos, passam a olhar para si mesmas com mais compreensão. Esse tipo de profissional enxerga além das dificuldades: identifica talentos, criatividade, capacidade de improviso e raciocínio rápido, que muitas vezes estavam escondidos sob anos de culpa. O medico especialista em tdah ajuda a reconstruir a autoestima, mostrando que o transtorno não define quem a pessoa é, apenas explica certos desafios que podem ser manejados com suporte adequado.</p>

<h2>Tratamento de TDAH em adultos: mais organização e qualidade de vida</h2>

<ul>
  <li>O tratamento de TDAH em adultos costuma combinar diferentes estratégias. Além de possíveis medicamentos, o medico psiquiatra especialista em tdah orienta sobre estruturação da rotina, uso de lembretes, divisão de tarefas em etapas menores e desenvolvimento de hábitos saudáveis.</li>
  <li>Em conjunto, essas medidas reduzem a sensação de caos interno e trazem mais previsibilidade para o dia a dia. Quando bem conduzido, o tratamento de TDAH em adultos favorece produtividade, melhora relacionamentos e devolve ao paciente a sensação de que ele está no comando da própria história.</li>
</ul>

<h2>Como o profissional especialista em TDAH apoia a vida pessoal e profissional</h2>

<p>O trabalho de um profissional especialista em tdah não se limita à prescrição de remédios. Ele ajuda a pessoa a entender seus gatilhos, ajustar expectativas e criar estratégias personalizadas para lidar com prazos, reuniões, estudos e tarefas domésticas.</p>

<p>Durante as consultas, é comum surgir a pergunta sobre como psiquiatra diagnostica tdah em situações específicas, como na infância, na faculdade ou no trabalho, e o médico explica cada detalhe com paciência. Essa troca fortalece o vínculo terapêutico e faz o paciente se sentir ouvido, respeitado e acompanhado em cada fase da vida.</p>

<h2>A importância de escolher o profissional certo</h2>

<p>Escolher um profissional especialista em tdah com quem exista identificação é fundamental. Sentir-se à vontade para falar sobre dificuldades, medos e conquistas torna o processo terapêutico mais leve. Um bom especialista explica o diagnóstico com linguagem simples, responde dúvidas e constrói, junto com o paciente, metas realistas. Isso inclui planejar mudanças graduais, respeitar o tempo de cada um e reconhecer que cada pequeno passo na direção de mais organização já é uma vitória importante.</p>

<h2>Dar o primeiro passo é um gesto de cuidado consigo mesmo</h2>

<p>Muitas pessoas adiam a busca por ajuda por vergonha ou por acreditar que “não é tão grave assim”. No entanto, marcar uma consulta com um profissional especialista em tdah pode representar o início de uma fase completamente diferente. Com suporte adequado, é possível desenvolver novas habilidades, melhorar a concentração, organizar melhor a rotina e resgatar sonhos que pareciam distantes. Cuidar da saúde mental é um ato de amor-próprio, e contar com um especialista preparado torna esse caminho muito mais seguro, acolhedor e cheio de possibilidades.</p>

<h3>Marque agora mesmo sua consulta com o Melhor Psiquiatra para TDAH!</h3>

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
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                    🔹 Agende sua consulta
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    🔹 Faça o teste gratuito de TDAH
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
export default ProfissionalEspecialistaEmTDAH;