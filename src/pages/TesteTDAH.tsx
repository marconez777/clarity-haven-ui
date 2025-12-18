import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Brain, ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import EmailCollectionStep from "@/components/tests/EmailCollectionStep";
import { submitTestResult } from "@/hooks/useTestSubmission";
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";

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
  const [searchParams] = useSearchParams();
  const initialStep = searchParams.get("step") === "email" ? "email" : "welcome";
  const [currentStep, setCurrentStep] = useState<"welcome" | "email" | "questions" | "results">(initialStep);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  const totalPossibleScore = questions.length * 1.35;

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
      
      // Submit test result
      submitTestResult({
        email: userEmail,
        testType: "TDAH Hiperatividade",
        score: sum,
        maxScore: totalPossibleScore,
        resultLevel: sum >= 5 ? "Positivo" : "Negativo",
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
        <title>Teste de TDAH Online Gratuito | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Faça o teste de TDAH online gratuito. Questionário rápido para identificar sintomas de TDAH. Resultado imediato."
        />
        <meta
          name="keywords"
          content="teste tdah, teste tdah online, tdah adulto, teste hiperatividade"
        />
        <link rel="canonical" href="https://drgabriel.med.br/teste-tdah-hiperatividade" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgabriel.med.br/teste-tdah-hiperatividade" />
        <meta property="og:title" content="Teste de TDAH Online Gratuito | Dr. Gabriel Lopes" />
        <meta property="og:description" content="Faça o teste de TDAH online gratuito. Questionário rápido para identificar sintomas de TDAH." />
        <meta property="og:image" content="https://drgabriel.med.br/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teste de TDAH Online Gratuito | Dr. Gabriel Lopes" />
        <meta name="twitter:description" content="Faça o teste de TDAH online gratuito. Questionário rápido para identificar sintomas de TDAH." />
        <meta name="twitter:image" content="https://drgabriel.med.br/og-image.jpg" />
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

            {/* Email Collection Screen */}
            {currentStep === "email" && (
              <EmailCollectionStep 
                onSubmit={handleEmailSubmit} 
                testName="Teste de TDAH" 
              />
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
                      <div className={`inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 ${
                        finalScore >= 5 
                          ? "bg-red-100 border-red-500" 
                          : "bg-[hsl(var(--primary)/0.1)] border-primary"
                      }`}>
                        <span className={`text-4xl font-bold ${finalScore >= 5 ? "text-red-500" : "text-primary"}`}>{finalScore.toFixed(1)}</span>
                        <span className="text-sm text-muted-foreground">de {totalPossibleScore.toFixed(1)} pontos</span>
                      </div>

                      {finalScore >= 5 && (
                        <p className="text-xl md:text-2xl font-bold text-red-600 mt-4">
                          Probabilidade Alta de Estar com TDAH
                        </p>
                      )}

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
                      
                      {finalScore >= 5 && (
                        <div className="pt-4">
                          <Button 
                            size="lg" 
                            className="w-full sm:w-auto py-4 px-8 text-lg font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white gap-3"
                            onClick={() => handleWhatsAppClick('tdah_hiperatividade_resultado')}
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Agendar Consulta pelo WhatsApp
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

export default TesteTDAH;
