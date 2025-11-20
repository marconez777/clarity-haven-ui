import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Brain, ArrowLeft, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Com que frequência você fica se mexendo na cadeira ou balançando as mãos ou os pés quando precisa ficar sentado(a) por muito tempo?",
  },
  {
    id: 2,
    text: "Com que frequência você se levanta da cadeira em reuniões ou em outras situações onde deveria ficar sentado(a)?",
  },
  {
    id: 3,
    text: 'Com que frequência você se sente ativo(a) demais e necessitando fazer coisas, como se estivesse "com um motor ligado"?',
  },
  {
    id: 4,
    text: "Com que frequência você tem dificuldade para manter a atenção em tarefas ou atividades de lazer?",
  },
  {
    id: 5,
    text: "Com que frequência você se pega falando demais em situações sociais?",
  },
  {
    id: 6,
    text: "Com que frequência você tem dificuldade para esperar nas situações onde cada um tem a sua vez?",
  },
  {
    id: 7,
    text: "Com que frequência você interrompe os outros quando eles estão ocupados?",
  },
  {
    id: 8,
    text: "Com que frequência você tem dificuldade para sossegar e relaxar quando tem tempo livre para você?",
  },
  {
    id: 9,
    text: "Quando você está conversando, com que frequência você se pega terminando as frases das pessoas antes delas?",
  },
];

const options = [
  { text: "Raramente", value: 0 },
  { text: "Algumas Vezes", value: 0.2 },
  { text: "Frequentemente", value: 1.0 },
  { text: "Muito Frequentemente", value: 1.35 },
];

const TesteTDAH = () => {
  const [currentStep, setCurrentStep] = useState<"welcome" | "questions" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);

  const totalPossibleScore = questions.length * 1.35;

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
        <title>Teste de TDAH Online Gratuito | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Faça o teste de TDAH online gratuito. Questionário rápido para identificar sintomas de TDAH. Resultado imediato."
        />
        <meta
          name="keywords"
          content="teste tdah, teste tdah online, tdah adulto, teste hiperatividade"
        />
        <link rel="canonical" href="https://drgabriellopes.com.br/teste-tdah" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs
          items={[
            { label: "Testes", href: "/testes" },
            { label: "Teste de TDAH" },
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
                    Teste de TDAH Online Gratuito
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Este teste é baseado em critérios clínicos e ajuda a identificar possíveis sintomas de TDAH.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sobre este teste</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Este questionário ajuda a identificar sintomas de TDAH baseado em critérios validados cientificamente.
                    </p>
                    <div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg space-y-2">
                      <h3 className="font-semibold text-foreground">Como funciona:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{questions.length} perguntas sobre comportamentos nos últimos 6 meses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Responda com sinceridade - não há respostas certas ou erradas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Leva aproximadamente 2 minutos</span>
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
                        <span className="text-4xl font-bold text-primary">{finalScore.toFixed(1)}</span>
                        <span className="text-sm text-muted-foreground">de {totalPossibleScore.toFixed(1)} pontos</span>
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-foreground">
                          {finalScore >= 5 ? "Resultado Positivo" : "Resultado Negativo"}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          {finalScore >= 5 ? (
                            <>
                              Sua pontuação de {finalScore.toFixed(1)} pontos sugere a presença de sintomas compatíveis com TDAH. 
                              Recomendamos uma avaliação com um profissional especializado para uma análise detalhada.
                            </>
                          ) : (
                            <>
                              Sua pontuação de {finalScore.toFixed(1)} pontos está abaixo do indicativo de TDAH. No entanto, se você 
                              identifica dificuldades significativas no seu dia a dia, considere conversar com um 
                              profissional de saúde mental.
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        <strong>Lembre-se:</strong> Este teste é apenas uma ferramenta de triagem. Um diagnóstico preciso requer avaliação profissional completa e multidisciplinar.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={restartTest} variant="outline" size="lg">
                    Refazer Teste
                  </Button>
                  <Button asChild size="lg">
                    <a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para avaliação de TDAH." target="_blank" rel="noopener noreferrer">
                      Agendar Consulta
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TesteTDAH;
