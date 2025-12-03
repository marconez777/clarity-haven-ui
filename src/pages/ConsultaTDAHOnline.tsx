import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";
const ConsultaTDAHOnline = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Consulta para TDAH Online | DR Gabriel Lopes</title>
        <meta name="description" content="Agende sua consulta para TDAH online, receba avaliação cuidadosa e inicie um plano de tratamento personalizado sem sair de casa." />
        <meta name="keywords" content="TDAH, consulta online, psiquiatra, Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriel.med.br/consulta-para-tdah-online" />
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
                <h1>Consulta para TDAH Online</h1>

                <p>O Transtorno de Déficit de Atenção e Hiperatividade pode impactar estudos, trabalho, relacionamentos e a autoestima.</p>

                <p>Para muitas pessoas, o primeiro passo é justamente admitir que precisam de apoio especializado e marcar uma consulta para TDAH online. Esse tipo de acompanhamento facilita o acesso ao cuidado, reduz barreiras geográficas e torna mais simples encontrar um psiquiatra especialista em tdah de confiança.</p>

                <p>Ao perceber dificuldades constantes de foco, atrasos, impulsividade e sensação de bagunça interna, vale considerar uma consulta para saber se tenho tdah. Conversar com um profissional capacitado traz clareza, acolhimento e um plano estruturado para organizar a rotina com mais tranquilidade.</p>

                <h2>Por que escolher a consulta para TDAH online</h2>

                <p>A consulta para TDAH online oferece conforto, praticidade e sigilo. A pessoa pode falar de suas dificuldades em casa, em um local tranquilo, o que muitas vezes ajuda a se abrir com mais naturalidade. Além disso, é possível escolher horários mais flexíveis, encaixando o cuidado na rotina sem tanta correria.</p>

                <p>Outro ponto importante é a possibilidade de contar com um Psiquiatra para TDAH mesmo morando longe dos grandes centros. Isso amplia as opções de profissionais disponíveis, permitindo encontrar alguém cuja forma de trabalho combine com o que a pessoa busca. Não é raro que uma consulta online tdah seja o divisor de águas para quem vinha sofrendo em silêncio por muitos anos.</p>

                <h2>Como funciona a consulta online com psiquiatra para TDAH</h2>

                <p>Na primeira consulta online com psiquiatra, o profissional escuta a história de vida, os sintomas, os desafios na escola, faculdade, trabalho e nas relações. Essa avaliação cuidadosa é essencial para diferenciar o TDAH de outras condições e para compreender o jeito singular de cada paciente.</p>

                <p>Ao longo das sessões, o Psiquiatra para TDAH pode propor estratégias personalizadas, como organização da rotina, manejo de distrações, ajustes no sono e, quando indicado, tratamento medicamentoso. Em muitos casos, a pessoa inicia o processo buscando apenas uma consulta para saber se tenho tdah e acaba descobrindo um caminho completo de autoconhecimento e cuidado.</p>

                <h2>Vantagens de buscar um psiquiatra especialista em tdah online</h2>

                <ul>
                  <li>Quem escolhe uma consulta para tdah​ pela internet encontra maior facilidade para manter a regularidade do acompanhamento. Sem deslocamentos longos, o compromisso se torna mais viável, o que aumenta as chances de seguir o plano de tratamento sugerido.</li>
                  <li>Um médico psiquiatra com foco em tdah costuma estar atualizado sobre recursos, técnicas e estratégias específicas para esse transtorno. Assim, cada consulta online tdah se transforma em um momento de aprendizado: o paciente compreende melhor seu próprio funcionamento, descobre formas mais leves de organizar tarefas e se sente apoiado em cada conquista.</li>
                  <li>Para muitas pessoas, a possibilidade de fazer consulta para tdah em casa diminui a vergonha ou o medo de julgamento. Isso fortalece o vínculo com o profissional e libera espaço para conversas sinceras sobre dificuldades íntimas, metas pessoais e sonhos que pareciam distantes.</li>
                </ul>

                <h2>Caminho de transformação com a consulta para TDAH online</h2>

                <h3>Investir em uma consulta para TDAH online é investir em qualidade de vida.</h3>

                <p>Com orientação adequada, é possível construir rotina mais organizada, melhorar o desempenho acadêmico e profissional e fortalecer relacionamentos. Muitas pessoas relatam que, após iniciar o acompanhamento, passaram a compreender melhor sua história, enxergando talentos e pontos fortes que antes ficavam escondidos sob a culpa e a autocobrança. Com o tempo, o acompanhamento constante fortalece a autoconfiança e ajuda a construir hábitos mais saudáveis.</p>

                <p>Ao contar com um médico psiquiatra especializado em TDAH e, quando necessário, com outros profissionais da área da saúde mental, o paciente deixa de se sentir “preguiçoso” ou “desorganizado” e passa a entender que existe uma explicação para as dificuldades que sempre enfrentou. Essa mudança de olhar é libertadora e abre portas para projetos que antes pareciam impossíveis.</p>

                <p>Se você sente que precisa de ajuda, considere marcar uma conversa online com psiquiatra voltada para TDAH. Dar esse passo é um gesto de cuidado consigo mesmo e uma forma de reconhecer que merece atenção, respeito e bem-estar. A partir da primeira consulta para TDAH online, começa uma jornada de autoconhecimento, mais foco e mais confiança na própria capacidade de realizar seus planos.</p>
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
export default ConsultaTDAHOnline;