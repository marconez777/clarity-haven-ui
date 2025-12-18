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
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";

const questions = [
  { id: 1, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e falava demais ou bem mais rápido que o normal?" },
  { id: 2, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e fazia coisas que normalmente não faz e que as pessoas consideravam loucura, exagero ou muito arriscado?" },
  { id: 3, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se sentia tão bem e para cima que levou as pessoas a pensarem que você não estava em seu normal?" },
  { id: 4, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se sentia com mais energia que o normal?" },
  { id: 5, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e se distraía o tempo todo com as coisas ao redor?" },
  { id: 6, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e ficava tão irritado(a) que gritava com as pessoas ou começava uma briga?" },
  { id: 7, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e sentia-se muito mais autoconfiante que o normal?" },
  { id: 8, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e tinha muito menos sono que o normal e não sentia falta disto?" },
  { id: 9, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e seus pensamentos eram muito rápidos?" },
  { id: 10, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e era muito mais ativo(a) e fazia muito mais coisas que normalmente?" },
  { id: 11, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e era bem mais extrovertido(a) ou desinibido(a)?" },
  { id: 12, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e era muito mais interessado(a) em sexo que normalmente?" },
  { id: 13, text: "Você alguma vez já se sentiu fora do seu modo normal de ser e gastava dinheiro sem controle?" },
];

const options = [{ text: "NÃO", value: 0 }, { text: "SIM", value: 1 }];

const TesteTranstornoBipolar = () => {
  const [currentStep, setCurrentStep] = useState<"welcome" | "email" | "questions" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [currentQuestion, currentStep]);

  const startTest = () => setCurrentStep("email");
  const handleEmailSubmit = (email: string) => { setUserEmail(email); setCurrentStep("questions"); setAnswers([]); setCurrentQuestion(0); setSelectedAnswer(null); };

  const handleAnswer = () => {
    if (selectedAnswer === null) return;
    const newAnswers = [...answers]; newAnswers[currentQuestion] = selectedAnswer; setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) { setCurrentQuestion(currentQuestion + 1); setSelectedAnswer(newAnswers[currentQuestion + 1] ?? null); }
    else { const sum = newAnswers.reduce((a, v) => a + v, 0); setFinalScore(sum); setCurrentStep("results"); submitTestResult({ email: userEmail, testType: "Transtorno Bipolar", score: sum, maxScore: questions.length, resultLevel: sum >= 8 ? "Positivo" : "Negativo", answers: newAnswers }); }
  };

  const handleBack = () => { if (currentQuestion > 0) { setCurrentQuestion(currentQuestion - 1); setSelectedAnswer(answers[currentQuestion - 1] ?? null); } };
  const restartTest = () => { setCurrentStep("welcome"); setCurrentQuestion(0); setAnswers([]); setSelectedAnswer(null); setFinalScore(0); setUserEmail(""); };
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Helmet><html lang="pt-BR" /><title>Teste de Transtorno Bipolar Online Gratuito | Dr. Gabriel Lopes</title><meta name="description" content="Faça o teste de transtorno bipolar online gratuito. Avalie sintomas de alterações de humor. Resultado imediato." /><link rel="canonical" href="https://drgabriel.med.br/teste-transtorno-bipolar" /></Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation /><Breadcrumbs items={[{ label: "Testes", href: "/testes" }, { label: "Teste de Transtorno Bipolar" }]} />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {currentStep === "welcome" && (<div className="space-y-8 animate-fade-in"><div className="text-center space-y-4"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"><Brain className="w-8 h-8 text-primary" /></div><h1 className="text-3xl md:text-4xl font-bold text-foreground">Teste de Transtorno Bipolar</h1><p className="text-lg text-muted-foreground">Avaliação de sintomas de alterações de humor e energia</p></div><Card><CardHeader><CardTitle>Sobre este teste</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-muted-foreground">Este questionário avalia sintomas relacionados ao transtorno bipolar.</p><div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg"><h3 className="font-semibold">Como funciona:</h3><ul className="text-sm text-muted-foreground"><li>• {questions.length} perguntas - Leva 3-4 minutos</li></ul></div><div className="bg-[hsl(45,100%,95%)] dark:bg-[hsl(45,100%,15%)] border border-[hsl(45,100%,70%)] p-4 rounded-lg"><p className="text-sm"><strong>Importante:</strong> Este teste não substitui avaliação médica profissional.</p></div></CardContent></Card><div className="text-center"><Button onClick={startTest} size="lg" className="gap-2">Iniciar Teste<ArrowRight className="w-4 h-4" /></Button></div></div>)}
            {currentStep === "email" && <EmailCollectionStep onSubmit={handleEmailSubmit} testName="Teste de Transtorno Bipolar" />}
            {currentStep === "questions" && (<div className="space-y-6 animate-fade-in"><div className="space-y-2"><div className="flex justify-between text-sm text-muted-foreground"><span>Pergunta {currentQuestion + 1} de {questions.length}</span><span>{Math.round(progress)}%</span></div><Progress value={progress} className="h-2" /></div><Card><CardHeader><CardTitle className="text-xl">{questions[currentQuestion].text}</CardTitle></CardHeader><CardContent><RadioGroup value={selectedAnswer?.toString()} onValueChange={(v) => setSelectedAnswer(Number(v))} className="space-y-3">{options.map((o) => (<div key={o.value} className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 cursor-pointer" onClick={() => setSelectedAnswer(o.value)}><RadioGroupItem value={o.value.toString()} /><Label className="flex-1 cursor-pointer font-medium">{o.text}</Label></div>))}</RadioGroup></CardContent></Card><div className="flex justify-between gap-4"><Button onClick={handleBack} variant="outline" disabled={currentQuestion === 0}><ArrowLeft className="w-4 h-4 mr-2" />Anterior</Button><Button onClick={handleAnswer} disabled={selectedAnswer === null}>{currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}<ArrowRight className="w-4 h-4 ml-2" /></Button></div></div>)}
            {currentStep === "results" && (<div className="space-y-8 animate-fade-in"><div className="text-center"><h1 className="text-3xl font-bold text-primary">Resultado do Teste</h1></div><Card><CardContent className="pt-6 space-y-6"><div className="text-center space-y-4"><div className={`inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 ${finalScore >= 8 ? "bg-red-100 border-red-500" : "bg-[hsl(var(--primary)/0.1)] border-primary"}`}><span className={`text-4xl font-bold ${finalScore >= 8 ? "text-red-500" : "text-primary"}`}>{finalScore}</span><span className="text-sm text-muted-foreground">de {questions.length}</span></div>{finalScore >= 8 && <p className="text-xl md:text-2xl font-bold text-red-600 mt-4">Probabilidade Alta de Estar com Transtorno Bipolar</p>}<h2 className="text-2xl font-bold text-primary">{finalScore >= 8 ? "Resultado Positivo" : "Resultado Negativo"}</h2><p className="text-muted-foreground">{finalScore >= 8 ? "Sua pontuação sugere sintomas compatíveis com transtorno bipolar. Recomendamos avaliação profissional." : "Sua pontuação está abaixo do indicativo."}</p>{finalScore >= 8 && <div className="pt-4"><Button size="lg" className="w-full sm:w-auto py-4 px-8 text-lg font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white gap-3" onClick={() => handleWhatsAppClick('transtorno_bipolar_resultado', 'Olá, fiz o teste de Transtorno Bipolar no site, e quero saber mais sobre o tratamento.')}><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>Iniciar Tratamento</Button></div>}</div><Alert className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)]"><AlertCircle className="h-5 w-5" /><AlertDescription><strong>Lembre-se:</strong> Este teste é apenas uma ferramenta de triagem.</AlertDescription></Alert></CardContent></Card><div className="flex justify-center"><Button onClick={restartTest} variant="outline" size="lg">Refazer Teste</Button></div></div>)}
          </div>
        </main>
        <Footer /><WhatsAppButton />
      </div>
    </>
  );
};

export default TesteTranstornoBipolar;
