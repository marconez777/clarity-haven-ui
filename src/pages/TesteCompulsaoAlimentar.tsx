import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Brain, ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import EmailCollectionStep from "@/components/tests/EmailCollectionStep";
import { submitTestResult } from "@/hooks/useTestSubmission";
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";

const questions = [
  { id: 1, statements: ["Eu raramente como tanta comida a ponto de sentir-me desconfortavelmente empanturrado(a) depois.", "Normalmente, cerca de uma vez por mês, como uma tal quantidade de comida que acabo me sentindo muito empanturrado(a).", "Eu tenho períodos regulares durante o mês, quando como grandes quantidades de comida.", "Eu como tanta comida que, regularmente, me sinto bastante desconfortável depois de comer."] },
  { id: 2, statements: ["Eu não perco o controle total da minha alimentação quando estou de dieta.", "Às vezes, quando estou de dieta e como um alimento proibido, sinto como se tivesse estragado tudo e como ainda mais.", "Frequentemente, quando como demais durante uma dieta, tenho o hábito de dizer para mim mesmo(a): \"Agora que estraguei tudo, porque não irei até o fim\".", "Eu tenho o hábito regular de começar dietas rigorosas por mim mesmo(a), mas quebro as dietas entrando numa compulsão alimentar."] },
  { id: 3, statements: ["Eu não tenho nenhuma dificuldade para comer devagar, de maneira apropriada.", "Embora pareça que eu devore os alimentos, não acabo me sentindo empanturrado(a) por comer demais.", "Às vezes tendo a comer rapidamente, sentindo-me desconfortavelmente cheio(a) depois.", "Eu tenho o hábito de engolir minha comida sem realmente mastigá-la."] },
  { id: 4, statements: ["Eu não sinto qualquer culpa ou ódio de mim mesmo(a) depois de comer demais.", "De vez em quando sinto culpa ou ódio de mim mesmo(a) depois de comer demais.", "Quase o tempo todo sinto muita culpa ou ódio de mim mesmo(a) depois de comer demais."] },
  { id: 5, statements: ["Eu não penso muito em tentar controlar impulsos indesejáveis para comer.", "Pelo menos, em algum momento, sinto que meus pensamentos estão \"pré-ocupados\" tentando controlar meus impulsos para comer.", "Frequentemente, sinto que gasto muito tempo pensando no quanto comi ou tentando não comer mais.", "Parece, para mim, que a maior parte das horas que passo acordado(a) estão \"pré-ocupadas\" com pensamentos sobre comer ou não comer."] },
  { id: 6, statements: ["Eu não tenho problema algum para parar de comer quando me sinto cheio(a).", "Eu, normalmente, posso parar de comer quando me sinto cheio(a), mas, de vez em quando, comer demais me deixa desconfortavelmente empanturrado(a).", "Eu tenho um problema para parar de comer uma vez que eu tenha começado.", "Por eu ter o problema de não ser capaz de parar de comer quando quero, às vezes tenho que provocar o vômito, usar laxativos."] },
  { id: 7, statements: ["Normalmente, sei se estou ou não fisicamente com fome.", "De vez em quando eu me sinto em dúvida por não saber se estou ou não fisicamente com fome.", "Mesmo que eu pudesse saber quantas calorias eu deveria ingerir, não teria ideia alguma de qual seria a quantidade \"normal\" de comida para mim."] },
  { id: 8, statements: ["Parece que eu como tanto quando estou com os outros, como quando estou sozinho(a).", "Às vezes, quando estou com outras pessoas, não como tanto quanto eu quero comer.", "Frequentemente eu como só uma pequena quantidade de comida quando outros estão presentes.", "Eu me sinto tão envergonhado(a) por comer demais que escolho horas para comer demais quando sei que ninguém me verá."] },
];

const TesteCompulsaoAlimentar = () => {
  const [currentStep, setCurrentStep] = useState<"welcome" | "email" | "questions" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  const startTest = () => setCurrentStep("email");
  const handleEmailSubmit = (email: string) => { setUserEmail(email); setCurrentStep("questions"); setCurrentQuestion(0); setAnswers([]); setSelectedAnswer(null); };

  const handleAnswer = () => {
    if (selectedAnswer === null) return;
    const newAnswers = [...answers, selectedAnswer]; setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) { setCurrentQuestion(currentQuestion + 1); setSelectedAnswer(null); }
    else { const total = newAnswers.reduce((sum, score) => sum + score, 0); setFinalScore(total); setCurrentStep("results"); submitTestResult({ email: userEmail, testType: "Compulsão Alimentar", score: total, maxScore: questions.length * 3, resultLevel: total > 25 ? "Positivo" : "Negativo", answers: newAnswers }); }
  };

  const handleBack = () => { if (currentQuestion > 0) { setCurrentQuestion(currentQuestion - 1); const newAnswers = [...answers]; const prev = newAnswers.pop(); setAnswers(newAnswers); setSelectedAnswer(prev ?? null); } };
  const restartTest = () => { setCurrentStep("welcome"); setCurrentQuestion(0); setAnswers([]); setSelectedAnswer(null); setFinalScore(0); setUserEmail(""); };
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isPositive = finalScore > 25;

  return (
    <>
      <Helmet><title>Teste de Compulsão Alimentar | Dr Gabriel Lopes</title><meta name="description" content="Avalie seus padrões alimentares com o teste de Compulsão Alimentar." /><link rel="canonical" href="https://drgabriel.med.br/teste-compulsao-alimentar" /></Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation /><Breadcrumbs items={[{ label: "Testes", href: "/testes" }, { label: "Teste de Compulsão Alimentar" }]} />
        <main className="flex-grow pt-4 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {currentStep === "welcome" && (<div className="space-y-8 animate-fade-in"><div className="text-center space-y-4"><div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4"><Brain className="h-10 w-10 text-primary" /></div><h1 className="text-4xl md:text-5xl font-bold text-primary">Teste de Compulsão Alimentar</h1><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Este teste ajuda a identificar padrões de comportamento relacionados à compulsão alimentar.</p></div><Card className="border-2"><CardHeader><CardTitle className="text-2xl">Sobre este teste</CardTitle></CardHeader><CardContent className="space-y-4"><div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg"><h3 className="font-semibold mb-2">Como funciona</h3><p className="text-sm">O teste contém {questions.length} grupos de afirmações. Selecione a que melhor descreve você.</p></div><Alert className="bg-[hsl(45,100%,95%)] dark:bg-[hsl(45,100%,15%)] border-[hsl(45,100%,60%)]"><AlertCircle className="h-5 w-5" /><AlertDescription><strong>Importante:</strong> Este teste não substitui avaliação médica profissional.</AlertDescription></Alert><Button onClick={startTest} size="lg" className="w-full text-lg h-14">Iniciar Teste</Button></CardContent></Card></div>)}
            {currentStep === "email" && <EmailCollectionStep onSubmit={handleEmailSubmit} testName="Teste de Compulsão Alimentar" />}
            {currentStep === "questions" && (<div className="space-y-6 animate-fade-in"><div className="space-y-2"><div className="flex justify-between items-center"><h2 className="text-2xl font-bold text-primary">Questão {currentQuestion + 1} de {questions.length}</h2><span className="text-sm text-muted-foreground">{Math.round(progress)}%</span></div><Progress value={progress} className="h-2" /></div><Card className="border-2"><CardHeader><CardTitle className="text-xl">Selecione a afirmação que melhor descreve você:</CardTitle></CardHeader><CardContent className="space-y-4"><RadioGroup value={selectedAnswer?.toString()} onValueChange={(v) => setSelectedAnswer(Number(v))}>{questions[currentQuestion].statements.map((statement, idx) => (<div key={idx} className="flex items-start space-x-3 p-4 rounded-lg border-2 hover:border-primary/50 cursor-pointer" onClick={() => setSelectedAnswer(idx)}><RadioGroupItem value={idx.toString()} /><Label className="flex-1 cursor-pointer text-base leading-relaxed">{statement}</Label></div>))}</RadioGroup><div className="flex gap-4 pt-4"><Button variant="outline" onClick={handleBack} disabled={currentQuestion === 0} className="flex-1"><ArrowLeft className="mr-2 h-4 w-4" />Anterior</Button><Button onClick={handleAnswer} disabled={selectedAnswer === null} className="flex-1">{currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}<ArrowRight className="ml-2 h-4 w-4" /></Button></div></CardContent></Card></div>)}
            {currentStep === "results" && (<div className="space-y-8 animate-fade-in"><div className="text-center"><div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"><Brain className="w-8 h-8 text-primary" /></div><h1 className="text-3xl font-bold text-primary">Resultado do Teste</h1></div><Card><CardContent className="pt-6 space-y-6"><div className="text-center space-y-4"><div className={`inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 ${isPositive ? "bg-red-100 border-red-500" : "bg-[hsl(var(--primary)/0.1)] border-primary"}`}><span className={`text-4xl font-bold ${isPositive ? "text-red-500" : "text-primary"}`}>{finalScore}</span><span className="text-sm text-muted-foreground">pontos</span></div>{isPositive && <p className="text-xl md:text-2xl font-bold text-red-600 mt-4">Probabilidade Alta de Estar com Compulsão Alimentar</p>}<h2 className="text-2xl font-bold">{isPositive ? "Resultado Positivo" : "Resultado Negativo"}</h2><p className="text-muted-foreground">{isPositive ? "Sua pontuação sugere possível compulsão alimentar. Recomendamos avaliação profissional." : "Sua pontuação está abaixo do indicativo de compulsão alimentar."}</p>{isPositive && <div className="pt-4"><Button size="lg" className="w-full sm:w-auto py-4 px-8 text-lg font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white gap-3" onClick={() => handleWhatsAppClick('compulsao_alimentar_resultado', 'Olá, fiz o teste de Compulsão Alimentar no site, e quero saber mais sobre o tratamento.')}><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>Agendar Consulta pelo WhatsApp</Button></div>}</div><Alert className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)]"><AlertCircle className="h-5 w-5" /><AlertDescription><strong>Lembre-se:</strong> Este teste é apenas uma ferramenta de triagem.</AlertDescription></Alert></CardContent></Card><div className="flex justify-center"><Button onClick={restartTest} variant="outline" size="lg">Refazer Teste</Button></div></div>)}
          </div>
        </main>
        <Footer /><WhatsAppButton />
      </div>
    </>
  );
};

export default TesteCompulsaoAlimentar;
