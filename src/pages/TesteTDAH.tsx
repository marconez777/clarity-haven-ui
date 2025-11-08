import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, CheckCircle2, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

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

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const averageScore = 4.6; // Média fornecida no exemplo

  const startTest = () => {
    setCurrentStep("questions");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
  };

  const handleAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Reset selection after moving to next question
      setTimeout(() => setSelectedAnswer(null), 0);
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Calcular pontuação final (soma direta dos pontos)
      const sum = newAnswers.reduce((acc, val) => acc + val, 0);
      const score = parseFloat(sum.toFixed(1));
      setFinalScore(score);
      setCurrentStep("results");
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Restore previous answer
      setSelectedAnswer(answers[currentQuestion - 1]);
      // Remove last answer from array
      setAnswers(answers.slice(0, -1));
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const restartTest = () => {
    setCurrentStep("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setFinalScore(0);
  };

  return (
    <>
      <Helmet>
        <title>Teste de TDAH Online Gratuito | Dr. Gabriel Lopes</title>
        <meta
          name="description"
          content="Faça o teste de TDAH online gratuito em 2 minutos. Descubra se você apresenta sintomas que indicam necessidade de avaliação profissional."
        />
        <meta name="keywords" content="teste tdah, teste tdah online, teste tdah gratuito, sintomas tdah" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          {/* Welcome Screen */}
          {currentStep === "welcome" && (
            <section className="py-12 md:py-24 px-4">
              <div className="container max-w-3xl mx-auto">
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                  <Brain className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-primary" />
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                    Teste de TDAH Online Gratuito
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    Este teste é baseado em critérios clínicos e ajuda a identificar possíveis sintomas de TDAH.
                    Leva apenas 2 minutos para completar.
                  </p>
                </div>

                <Card className="backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-scale-in">
                  <CardHeader>
                    <CardTitle className="text-2xl">Antes de começar</CardTitle>
                    <CardDescription className="text-base">
                      Responda às 9 perguntas com sinceridade, pensando no seu comportamento nos últimos 6 meses.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-background/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">
                        São apenas 9 perguntas de múltipla escolha
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-background/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">
                        Não existe resposta certa ou errada
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-background/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">
                        O resultado é imediato e gratuito
                      </p>
                    </div>

                    <Button
                      onClick={startTest}
                      size="lg"
                      className="w-full mt-6 text-lg h-14"
                    >
                      Iniciar Teste
                    </Button>
                  </CardContent>
                </Card>

                <p className="text-sm text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
                  <strong>Atenção:</strong> Este teste não substitui uma avaliação psiquiátrica profissional.
                  O resultado não serve como diagnóstico conclusivo nem tem validade jurídica.
                </p>
              </div>
            </section>
          )}

          {/* Questions Screen */}
          {currentStep === "questions" && (
            <section className="pt-28 md:pt-32 pb-8 md:pb-16 px-4">
              <div className="container max-w-3xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8 md:mb-12 animate-fade-in">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      Questão {currentQuestion + 1} de {questions.length}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question Card */}
                <Card className="backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-in fade-in slide-in-from-right duration-500">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl leading-relaxed">
                      {questions[currentQuestion].text}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedAnswer?.toString()}
                      onValueChange={(value) => setSelectedAnswer(parseFloat(value))}
                      className="flex flex-col gap-3"
                    >
                      {options.map((option) => (
                        <div key={option.value}>
                          <RadioGroupItem
                            value={option.value.toString()}
                            id={`option-${option.value}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`option-${option.value}`}
                            className="flex items-center justify-start rounded-lg border-2 border-muted bg-background/50 p-4 md:p-6 hover:bg-accent hover:border-primary cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:shadow-lg min-h-[64px] font-medium w-full"
                          >
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="flex flex-col gap-3 mt-6 md:mt-8">
                      {currentQuestion > 0 && (
                        <Button
                          onClick={handleBack}
                          variant="outline"
                          size="lg"
                          className="w-full text-lg h-12 md:h-14"
                        >
                          Voltar
                        </Button>
                      )}
                      <Button
                        onClick={handleAnswer}
                        disabled={selectedAnswer === null}
                        size="lg"
                        className="w-full text-lg h-12 md:h-14"
                      >
                        {currentQuestion < questions.length - 1 ? "Próxima" : "Ver Resultado"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* Results Screen */}
          {currentStep === "results" && (
            <section className="py-12 md:py-24 px-4">
              <div className="container max-w-3xl mx-auto">
                <div className="text-center mb-8 md:mb-12 animate-fade-in">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Seu Resultado
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Obrigado por fazer o nosso teste!
                  </p>
                </div>

                <Card className="backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 mb-6 animate-scale-in">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-4 border-primary mb-4">
                        <span className="text-5xl font-bold text-primary">{finalScore}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sua pontuação
                      </p>
                    </div>

                    {finalScore >= 4 ? (
                      <div className="space-y-6">
                        <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                          <p className="text-lg font-semibold mb-2">
                            Resultado indicativo de avaliação médica
                          </p>
                          <p className="text-muted-foreground">
                            Neste teste é considerado resultado indicativo de avaliação médica pontuações iguais ou acima de 4.
                            Seus sintomas sugerem que uma consulta com um profissional seria importante.
                          </p>
                        </div>

                        <Button
                          size="lg"
                          className="w-full text-lg h-14"
                          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                        >
                          Agende sua Consulta para Avaliação Profissional
                        </Button>
                      </div>
                    ) : (
                      <div className="p-6 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-lg font-semibold mb-2">
                          Resultado abaixo do indicativo
                        </p>
                        <p className="text-muted-foreground">
                          Sua pontuação está abaixo de 4. No entanto, se você sente que os sintomas afetam sua qualidade de vida,
                          considere conversar com um profissional de saúde mental.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-8 p-4 bg-background/50 rounded-lg">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{finalScore}</p>
                        <p className="text-sm text-muted-foreground">Seus pontos</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{averageScore}</p>
                        <p className="text-sm text-muted-foreground">Média de pontos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={restartTest}
                    className="flex-1"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Fazer Outro Teste
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1"
                  >
                    <Link to="/blog">Ver Artigos do Blog</Link>
                  </Button>
                </div>

                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground space-y-2">
                      <strong className="block text-foreground">Atenção:</strong>
                      <span className="block">• Nenhum teste substitui uma avaliação psiquiátrica.</span>
                      <span className="block">• O resultado deste teste não serve como diagnóstico conclusivo nem tem validade jurídica ou como atestado médico, para nenhuma finalidade.</span>
                      <span className="block">• Não inicie nenhum tratamento baseado no resultado de qualquer teste da internet, sem uma consulta médica antes.</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TesteTDAH;
