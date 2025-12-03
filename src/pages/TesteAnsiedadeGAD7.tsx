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
import EmailCollectionStep from "@/components/tests/EmailCollectionStep";
import { submitTestResult } from "@/hooks/useTestSubmission";

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "Ficar facilmente aborrecido(a) ou irritado(a)" },
  { id: 2, text: "Sentir medo como se algo horrível fosse acontecer" },
  { id: 3, text: "Ficar tão agitado(a) que se torna difícil permanecer sentado(a)" },
  { id: 4, text: "Preocupou-se muito com diversas coisas" },
  { id: 5, text: "Não foi capaz de impedir ou de controlar as preocupações" },
  { id: 6, text: "Sentiu-se nervoso(a), ansioso(a) ou muito tenso(a)" },
  { id: 7, text: "Dificuldade para relaxar" },
];

const options = [
  { text: "Nenhuma vez", value: 0 },
  { text: "Vários dias", value: 1 },
  { text: "Mais da metade dos dias", value: 2 },
  { text: "Quase todos os dias", value: 3 },
];

const TesteAnsiedadeGAD7 = () => {
  const [currentStep, setCurrentStep] = useState<"welcome" | "email" | "questions" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  const totalPossibleScore = questions.length * 3;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestion, currentStep]);

  const startTest = () => {
    setCurrentStep("email");
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
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
      
      submitTestResult({
        email: userEmail,
        testType: "Ansiedade GAD-7",
        score: sum,
        maxScore: totalPossibleScore,
        resultLevel: sum >= 13 ? "Positivo" : "Negativo",
        answers: newAnswers,
      });
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
    setUserEmail("");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Teste de Ansiedade GAD-7 Online Gratuito | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Faça o teste de ansiedade GAD-7 online gratuito. Questionário validado para avaliar sintomas de ansiedade generalizada. Resultado imediato."
        />
        <meta
          name="keywords"
          content="teste ansiedade, gad-7, teste ansiedade online, ansiedade generalizada, sintomas ansiedade"
        />
        <link rel="canonical" href="https://drgabriel.med.br/teste-ansiedade-gad7" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgabriel.med.br/teste-ansiedade-gad7" />
        <meta property="og:title" content="Teste de Ansiedade GAD-7 Online Gratuito | Dr. Gabriel Lopes" />
        <meta property="og:description" content="Faça o teste de ansiedade GAD-7 online gratuito. Questionário validado para avaliar sintomas de ansiedade." />
        <meta property="og:image" content="https://drgabriel.med.br/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teste de Ansiedade GAD-7 Online Gratuito | Dr. Gabriel Lopes" />
        <meta name="twitter:description" content="Faça o teste de ansiedade GAD-7 online gratuito. Resultado imediato." />
        <meta name="twitter:image" content="https://drgabriel.med.br/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs
          items={[
            { label: "Testes", href: "/testes" },
            { label: "Teste de Ansiedade GAD-7" },
          ]}
        />

        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {currentStep === "welcome" && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Teste de Ansiedade GAD-7
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Questionário validado para avaliar sintomas de ansiedade generalizada
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sobre este teste</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      O GAD-7 é um questionário amplamente utilizado para rastreamento de sintomas de ansiedade generalizada em adultos.
                    </p>
                    <div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg space-y-2">
                      <h3 className="font-semibold text-foreground">Como funciona:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{questions.length} perguntas sobre como você se sentiu nas últimas duas semanas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Responda com sinceridade - não há respostas certas ou erradas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Leva aproximadamente 2-3 minutos</span>
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

            {currentStep === "email" && (
              <EmailCollectionStep 
                onSubmit={handleEmailSubmit} 
                testName="Teste de Ansiedade GAD-7" 
              />
            )}

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
                        <span className="text-sm text-muted-foreground">de {totalPossibleScore} pontos</span>
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-foreground">
                          {finalScore >= 13 ? "Resultado Positivo" : "Resultado Negativo"}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          {finalScore >= 13 ? (
                            <>
                              Sua pontuação de {finalScore} pontos sugere a presença de sintomas significativos de ansiedade. 
                              É altamente recomendado buscar uma avaliação com um profissional de saúde mental para uma análise detalhada.
                            </>
                          ) : (
                            <>
                              Sua pontuação de {finalScore} pontos está abaixo do indicativo de ansiedade moderada a grave. No entanto, se você 
                              identifica dificuldades significativas no seu dia a dia relacionadas à ansiedade, 
                              considere conversar com um profissional de saúde mental.
                            </>
                          )}
                        </p>
                      </div>
                      
                      {finalScore >= 13 && (
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

export default TesteAnsiedadeGAD7;
