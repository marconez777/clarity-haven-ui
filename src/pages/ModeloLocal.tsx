import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, CheckCircle2, AlertCircle } from "lucide-react";
import drGabrielImage from "@/assets/doctors/dr-gabriel.png";
import consultorioImage from "@/assets/sections/consultori-psiquiatria2.jpg";
const ModeloLocal = () => {
  return <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Modelo Local - Dr. Gabriel Lopes</title>
        <meta name="description" content="Página modelo para novas seções e conteúdos." />
        <meta name="keywords" content="modelo, psiquiatra, Dr. Gabriel Lopes" />
        <link rel="canonical" href="https://drgabriellopes.com.br/modelo-local" />
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
                    Dificuldade de Foco, Impulsividade ou Esquecimento Constante?
                    <span className="block text-primary mt-4">Você pode estar convivendo com TDAH.</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Avaliação completa e tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e TDAH infantil e adulto.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
                      Agende sua consulta
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                      Faça o teste de TDAH gratuito
                    </Button>
                  </div>
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                  <img src={drGabrielImage} alt="Dr. Gabriel Lopes - Psiquiatra especialista em TDAH" className="w-full h-auto rounded-2xl shadow-[var(--shadow-soft)]" />
                </div>
              </div>
            </div>
          </section>

          {/* O que é o TDAH */}
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
                <h1>Lorem Ipsum Dolor Sit Amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h2>Subtítulo H2</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>Subtítulo H3</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <ul>
                  <li>Item de lista 1</li>
                  <li>Item de lista 2</li>
                  <li>Item de lista 3</li>
                </ul>
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
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-hover)] transition-all" onClick={() => window.open('https://wa.me/5511941543929', '_blank')}>
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
export default ModeloLocal;