import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Brain, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "Tenho grande dificuldade em entender sinais sociais, como expressões faciais ou tons de voz." },
  { id: 2, text: "Evito situações sociais por me sentir sobrecarregado ou fora do lugar." },
  { id: 3, text: "Sinto necessidade extrema de manter rotinas e padrões fixos." },
  { id: 4, text: "Tenho sensibilidade elevada a sons, luzes, cheiros ou texturas." },
  { id: 5, text: "Prefiro me concentrar em um interesse específico e ignoro outros assuntos." },
  { id: 6, text: "Tenho dificuldades em iniciar ou manter conversas." },
  { id: 7, text: "Me incomodo quando minha rotina é interrompida inesperadamente." },
  { id: 8, text: "Tenho dificuldade em perceber quando alguém está entediado ou desconfortável." },
  { id: 9, text: "Evito olhar nos olhos durante interações sociais." },
  { id: 10, text: "Fico muito desconfortável em situações com muitas pessoas ou estímulos." },
  { id: 11, text: "Preciso me isolar com frequência para recuperar energia após interações sociais." },
  { id: 12, text: "Tenho dificuldade para interpretar piadas ou metáforas." },
  { id: 13, text: "Tendo a repetir frases ou pensamentos em looping." },
  { id: 14, text: "Fico angustiado(a) com mudanças de planos, mesmo que pequenas." },
  { id: 15, text: "Evito ser o centro das atenções por me sentir desconectado da situação." },
  { id: 16, text: "Tenho dificuldade para perceber o que é apropriado dizer em certas situações." },
  { id: 17, text: "Me sinto mais confortável interagindo com objetos do que com pessoas." },
  { id: 18, text: "Costumo fixar meu olhar em detalhes ou padrões visuais." },
  { id: 19, text: "Já fui percebido como frio ou indiferente, mesmo sem querer." },
  { id: 20, text: "Me esforço muito para entender normas sociais que parecem naturais aos outros." },
  { id: 21, text: "Tenho dificuldade em compreender ironia, sarcasmo ou indiretas." },
  { id: 22, text: "Costumo repetir movimentos com o corpo como forma de autorregulação." },
  { id: 23, text: "Tenho dificuldade em entender o sentido de regras não explícitas." },
  { id: 24, text: "Me confundo em situações com linguagem ambígua." },
  { id: 25, text: "Evito abraços ou toques físicos por desconforto sensorial." },
  { id: 26, text: "Costumo falar de forma monótona ou muito rápida sem perceber." },
  { id: 27, text: "Já fui considerado(a) excessivamente direto(a) ou insensível por minhas respostas." },
  { id: 28, text: "Sinto mais facilidade em me relacionar com adultos do que com pessoas da minha idade." },
  { id: 29, text: "Fico sobrecarregado(a) quando há muitos estímulos ao mesmo tempo." },
  { id: 30, text: "Tenho dificuldade em compartilhar interesses com outras pessoas." },
  { id: 31, text: "Tenho rituais que sigo mesmo sem necessidade prática." },
  { id: 32, text: "Sinto ansiedade intensa antes de eventos sociais." },
  { id: 33, text: "Sou muito apegado(a) a objetos ou coleções específicas." },
  { id: 34, text: "Tenho movimentos motores repetitivos involuntários em momentos de ansiedade." },
  { id: 35, text: "Me expresso melhor por escrito do que oralmente." },
  { id: 36, text: "Evito reuniões sociais, mesmo com pessoas conhecidas." },
  { id: 37, text: "Tenho dificuldade para perceber se estou entediando os outros." },
  { id: 38, text: "Me interesso por temas que considero mais lógicos do que emocionais." },
  { id: 39, text: "Sinto que não me encaixo nos grupos sociais." },
  { id: 40, text: "Costumo falar muito sobre um assunto mesmo que o outro não demonstre interesse." },
  { id: 41, text: "Evito mudar de trajeto ou de atividades sem planejamento prévio." },
  { id: 42, text: "Sinto que preciso de muito tempo para me adaptar a mudanças." },
  { id: 43, text: "Tenho dificuldade em simular empatia mesmo quando entendo racionalmente a situação." },
  { id: 44, text: "Fico ansioso(a) com ruídos ambientes, mesmo que baixos." },
  { id: 45, text: "Tenho uma forma peculiar de me comunicar que nem todos entendem." },
  { id: 46, text: "Tive dificuldades sociais desde a infância." },
  { id: 47, text: "Meu modo de falar ou me expressar já foi considerado 'estranho' por outros." },
  { id: 48, text: "Costumo me sentir diferente das outras pessoas na maior parte do tempo." },
  { id: 49, text: "Tenho mais facilidade para lidar com sistemas ou estruturas do que com relações sociais." },
  { id: 50, text: "Sinto que interpreto o mundo de forma diferente da maioria das pessoas." },
];

const options = [
  { text: "NÃO", value: 0 },
  { text: "SIM", value: 1 },
];

const TesteAutismoAQ50 = () => {
  const [currentStep, setCurrentStep] = useState<"welcome" | "questions" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestion, currentStep]);

  const startTest = () => {
    setCurrentStep("questions");
    setAnswers([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const handleAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(newAnswers[currentQuestion + 1] ?? null);
    } else {
      const sum = newAnswers.reduce((acc, val) => acc + val, 0);
      setFinalScore(sum);
      setCurrentStep("results");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] ?? null);
    }
  };

  const restartTest = () => {
    setCurrentStep("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setFinalScore(0);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Helmet>
        <title>Teste de Autismo AQ-50 Completo Online | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Teste de autismo AQ-50 completo online. Avaliação detalhada de características do espectro autista em adultos."
        />
        <meta
          name="keywords"
          content="teste autismo, aq-50, teste autismo completo, espectro autista adulto, avaliação autismo"
        />
        <link rel="canonical" href="https://drgabriellopes.com.br/teste-autismo-aq50" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs
          items={[
            { label: "Testes", href: "/testes" },
            { label: "Teste de Autismo AQ-50" },
          ]}
        />

        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Welcome Screen */}
            {currentStep === "welcome" && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Teste de Autismo Adulto AQ-50
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Avaliação completa e detalhada de características do espectro autista
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sobre este teste</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      O AQ-50 é o Quociente do Espectro Autista completo, desenvolvido para uma avaliação 
                      abrangente de características associadas ao espectro autista em adultos.
                    </p>
                    <div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg space-y-2">
                      <h3 className="font-semibold text-foreground">Como funciona:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{questions.length} perguntas sobre comportamentos, interações sociais e preferências</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Responda SIM ou NÃO para cada pergunta</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Leva aproximadamente 10-15 minutos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Resultado imediato ao final</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[hsl(45,100%,95%)] dark:bg-[hsl(45,100%,15%)] border border-[hsl(45,100%,70%)] dark:border-[hsl(45,100%,30%)] p-4 rounded-lg">
                      <p className="text-sm font-medium text-[hsl(45,100%,20%)] dark:text-[hsl(45,100%,80%)]">
                        <strong>Importante:</strong> Este teste não substitui uma avaliação médica profissional. 
                        Os resultados são apenas indicativos e devem ser interpretados por um profissional de saúde qualificado.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button onClick={startTest} size="lg" className="gap-2">
                    Iniciar Teste
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Questions Screen */}
            {currentStep === "questions" && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {questions[currentQuestion].text}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedAnswer?.toString()}
                      onValueChange={(value) => setSelectedAnswer(Number(value))}
                      className="space-y-3"
                    >
                      {options.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer"
                          onClick={() => setSelectedAnswer(option.value)}
                        >
                          <RadioGroupItem value={option.value.toString()} id={`option-${option.value}`} />
                          <Label
                            htmlFor={`option-${option.value}`}
                            className="flex-1 cursor-pointer font-medium"
                          >
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                <div className="flex justify-between gap-4">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    disabled={currentQuestion === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </Button>
                  <Button
                    onClick={handleAnswer}
                    disabled={selectedAnswer === null}
                    className="gap-2"
                  >
                    {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Results Screen */}
            {currentStep === "results" && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary">
                    Resultado do Teste
                  </h1>
                </div>

                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full bg-[hsl(var(--primary)/0.1)] border-4 border-primary">
                        <span className="text-4xl font-bold text-primary">{finalScore}</span>
                        <span className="text-sm text-muted-foreground">de {questions.length} pontos</span>
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-foreground">
                          {finalScore >= 25 ? "Resultado Positivo" : "Resultado Negativo"}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          {finalScore >= 25 ? (
                            <>
                              Sua pontuação de {finalScore} pontos indica um nível significativo de características 
                              associadas ao espectro autista. É altamente recomendado buscar uma avaliação diagnóstica
                              completa com um profissional especializado.
                            </>
                          ) : (
                            <>
                              Sua pontuação de {finalScore} pontos está abaixo do indicativo. No entanto, se você 
                              identifica dificuldades significativas no seu dia a dia, considere conversar com um 
                              profissional de saúde mental.
                            </>
                          )}
                        </p>
                      </div>
                      
                      {finalScore >= 25 && (
                        <div className="pt-2">
                          <Button asChild size="lg" className="w-full sm:w-auto">
                            <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para avaliação." target="_blank" rel="noopener noreferrer">
                              Agendar Consulta
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>

                    <Alert className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] border-[hsl(180,60%,50%)]">
                      <AlertCircle className="h-5 w-5 text-[hsl(180,60%,40%)]" />
                      <AlertDescription className="text-foreground">
                        <strong>Lembre-se:</strong> Este teste é apenas uma ferramenta de triagem. Um diagnóstico preciso requer avaliação profissional completa e multidisciplinar.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <Button onClick={restartTest} variant="outline" size="lg">
                    Refazer Teste
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TesteAutismoAQ50;
