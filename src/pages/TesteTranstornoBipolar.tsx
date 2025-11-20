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
  { id: 1, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e falava demais ou bem mais rápido que o normal?" },
  { id: 2, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e fazia coisas que normalmente não faz e que as pessoas consideravam loucura, exagero ou muito arriscado?" },
  { id: 3, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se sentia tão bem e para cima que levou as pessoas a pensarem que você não estava em seu normal ou, então, isto lhe trouxe problemas?" },
  { id: 4, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se sentia com mais energia que o normal?" },
  { id: 5, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se distraía o tempo todo com as coisas ao redor e assim não conseguia se concentrar em uma atividade?" },
  { id: 6, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se sentia tão bem e para cima que levou as pessoas a pensarem que você não estava em seu normal ou, então, isto lhe trouxe problemas?" },
  { id: 7, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e ficava tão irritado(a) que gritava com as pessoas ou começava uma briga ou uma discussão sem motivo justificado?" },
  { id: 8, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e sentia-se muito mais autoconfiante que o normal?" },
  { id: 9, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e tinha muito menos sono que o normal e não sentia falta disto?" },
  { id: 10, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e falava demais ou bem mais rápido que o normal?" },
  { id: 11, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e seus pensamentos eram muito rápidos e você não conseguia pensar mais calmamente?" },
  { id: 12, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se distraia o tempo todo com as coisas ao redor e assim não conseguia se concentrar em uma atividade?" },
  { id: 13, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se sentia com mais energia que o normal?" },
  { id: 14, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e era muito mais ativo(a) e fazia muito mais coisas que normalmente faz?" },
  { id: 15, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e era bem mais extrovertido(a), expansivo(a) ou desinibido(a) com as pessoas do que normalmente?" },
  { id: 16, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e era muito mais interessado(a) em sexo que normalmente?" },
  { id: 17, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e fazia coisas que normalmente não faz e que as pessoas consideravam loucura, exagero ou muito arriscado?" },
  { id: 18, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e gastava dinheiro sem controle, trazendo problemas para você ou para sua família?" },
];

const options = [
  { text: "NÃO", value: 0 },
  { text: "SIM", value: 1 },
];

const TesteTranstornoBipolar = () => {
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
  const totalPossibleScore = questions.length;

  return (
    <>
      <Helmet>
        <title>Teste de Transtorno Bipolar Online Gratuito | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Faça o teste de transtorno bipolar online gratuito. Avalie sintomas de alterações de humor. Resultado imediato."
        />
        <meta
          name="keywords"
          content="teste transtorno bipolar, teste bipolaridade, alteração humor, mania hipomania"
        />
        <link rel="canonical" href="https://drgabriellopes.com.br/teste-transtorno-bipolar" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs
          items={[
            { label: "Testes", href: "/testes" },
            { label: "Teste de Transtorno Bipolar" },
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
                    Teste de Transtorno Bipolar
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Avaliação de sintomas de alterações de humor e energia
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sobre este teste</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Este questionário avalia sintomas relacionados ao transtorno bipolar, caracterizado por episódios de alterações significativas de humor, energia e comportamento.
                    </p>
                    <div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg space-y-2">
                      <h3 className="font-semibold text-foreground">Como funciona:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{questions.length} perguntas sobre períodos em que você se sentiu diferente do seu normal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Responda SIM ou NÃO para cada pergunta</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Leva aproximadamente 5-6 minutos</span>
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
                        <span className="text-sm text-muted-foreground">de {totalPossibleScore} pontos</span>
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-foreground">
                          {finalScore >= 8 ? "Resultado Positivo" : "Resultado Negativo"}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          {finalScore >= 8 ? (
                            <>
                              Sua pontuação de {finalScore} pontos sugere a presença de sintomas compatíveis com transtorno bipolar. 
                              É altamente recomendado buscar uma avaliação com um psiquiatra para uma análise detalhada e diagnóstico preciso.
                            </>
                          ) : (
                            <>
                              Sua pontuação de {finalScore} pontos está abaixo do indicativo. No entanto, se você 
                              identifica alterações significativas de humor ou energia que afetam sua vida, 
                              considere conversar com um profissional de saúde mental.
                            </>
                          )}
                        </p>
                      </div>
                      
                      {finalScore >= 8 && (
                        <div className="pt-2">
                          <Button asChild size="lg" className="w-full sm:w-auto">
                            <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta." target="_blank" rel="noopener noreferrer">
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

export default TesteTranstornoBipolar;
