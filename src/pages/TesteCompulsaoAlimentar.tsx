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

interface Question {
  id: number;
  statements: string[];
}

const questions: Question[] = [
  {
    id: 1,
    statements: [
      "Eu raramente como tanta comida a ponto de sentir-me desconfortavelmente empanturrado(a) depois.",
      "Normalmente, cerca de uma vez por mês, como uma tal quantidade de comida que acabo me sentindo muito empanturrado(a).",
      "Eu tenho períodos regulares durante o mês, quando como grandes quantidades de comida, seja na hora das refeições, seja nos lanches.",
      "Eu como tanta comida que, regularmente, me sinto bastante desconfortável depois de comer e, algumas vezes, um pouco enjoado(a)."
    ]
  },
  {
    id: 2,
    statements: [
      "Eu não perco o controle total da minha alimentação quando estou de dieta, mesmo após períodos em que como demais.",
      "Às vezes, quando estou de dieta e como um alimento proibido, sinto como se tivesse estragado tudo e como ainda mais.",
      "Frequentemente, quando como demais durante uma dieta, tenho o hábito de dizer para mim mesmo(a): \"Agora que estraguei tudo, porque não irei até o fim\". Quando isso acontece, eu como ainda mais.",
      "Eu tenho o hábito regular de começar dietas rigorosas por mim mesmo(a), mas quebro as dietas entrando numa compulsão alimentar. Minha vida parece ser \"uma festa\" ou \"um morrer de fome\"."
    ]
  },
  {
    id: 3,
    statements: [
      "Eu não tenho nenhuma dificuldade para comer devagar, de maneira apropriada.",
      "Embora pareça que eu devore os alimentos, não acabo me sentindo empanturrado(a) por comer demais.",
      "Às vezes tendo a comer rapidamente, sentindo-me, então, desconfortavelmente cheio(a) depois.",
      "Eu tenho o hábito de engolir minha comida sem realmente mastigá-la. Quando isso acontece, em geral, me sinto desconfortavelmente empanturrado(a) por ter comido demais."
    ]
  },
  {
    id: 4,
    statements: [
      "Eu não sinto qualquer culpa ou ódio de mim mesmo(a) depois de comer demais.",
      "De vez em quando sinto culpa ou ódio de mim mesmo(a) depois de comer demais.",
      "Quase o tempo todo sinto muita culpa ou ódio de mim mesmo(a) depois de comer demais."
    ]
  },
  {
    id: 5,
    statements: [
      "Eu não penso muito em tentar controlar impulsos indesejáveis para comer.",
      "Pelo menos, em algum momento, sinto que meus pensamentos estão \"pré-ocupados\" tentando controlar meus impulsos para comer.",
      "Frequentemente, sinto que gasto muito tempo pensando no quanto comi ou tentando não comer mais.",
      "Parece, para mim, que a maior parte das horas que passo acordado(a) estão \"pré-ocupadas\" com pensamentos sobre comer ou não comer. Sinto como se eu estivesse constantemente lutando para não comer."
    ]
  },
  {
    id: 6,
    statements: [
      "Eu não tenho problema algum para parar de comer quando me sinto cheio(a).",
      "Eu, normalmente, posso parar de comer quando me sinto cheio(a), mas, de vez em quando, comer demais me deixa desconfortavelmente empanturrado(a).",
      "Eu tenho um problema para parar de comer uma vez que eu tenha começado e, normalmente, me sinto desconfortavelmente empanturrado(a) depois que faço uma refeição.",
      "Por eu ter o problema de não ser capaz de parar de comer quando quero, às vezes tenho que provocar o vômito, usar laxativos e/ou diuréticos para aliviar minha sensação de empanturramento."
    ]
  },
  {
    id: 7,
    statements: [
      "Normalmente, sei se estou ou não fisicamente com fome. Eu como a porção certa de comida para me satisfazer.",
      "De vez em quando eu me sinto em dúvida por não saber se estou ou não fisicamente com fome. Nessas ocasiões, é difícil saber o quanto eu deveria comer para me satisfazer.",
      "Mesmo que eu pudesse saber quantas calorias eu deveria ingerir, não teria ideia alguma de qual seria a quantidade \"normal\" de comida para mim."
    ]
  },
  {
    id: 8,
    statements: [
      "Parece que eu como tanto quando estou com os outros (reuniões familiares, sociais), como quando estou sozinho(a).",
      "Às vezes, quando estou com outras pessoas, não como tanto quanto eu quero comer, porque me sinto constrangido(a) com o meu comportamento alimentar.",
      "Frequentemente eu como só uma pequena quantidade de comida quando outros estão presentes, pois me sinto muito embaraçado(a) com o meu comportamento alimentar.",
      "Eu me sinto tão envergonhado(a) por comer demais que escolho horas para comer demais quando sei que ninguém me verá. Eu me sinto como uma pessoa que se esconde para comer."
    ]
  },
  {
    id: 9,
    statements: [
      "Eu me sinto capaz de controlar meus impulsos para comer, quando eu quero.",
      "Eu sinto que tenho falhado em controlar meu comportamento alimentar mais do que a média das pessoas.",
      "Eu me sinto totalmente incapaz de controlar meus impulsos para comer.",
      "Por me sentir tão incapaz de controlar meu comportamento alimentar, entro em desespero tentando manter o controle."
    ]
  },
  {
    id: 10,
    statements: [
      "Eu não me sinto constrangido(a) com o meu peso ou o tamanho do meu corpo quando estou com outras pessoas.",
      "Eu me sinto preocupado(a) quando penso em como pareço para os outros, mas isso, normalmente, não me faz sentir desapontado(a) comigo mesmo(a).",
      "Eu fico mesmo constrangido(a) com a minha aparência e o meu peso, o que me faz sentir desapontado(a) comigo mesmo(a).",
      "Eu me sinto muito constrangido(a) com o meu peso e, frequentemente, sinto muita vergonha e desprezo por mim mesmo(a). Tento evitar contatos sociais por causa desse constrangimento."
    ]
  },
  {
    id: 11,
    statements: [
      "Eu faço três refeições ao dia com apenas um lanche ocasional entre as refeições.",
      "Eu faço três refeições ao dia, mas, normalmente, também lancho entre as refeições.",
      "Quando eu faço lanches pesados, tenho o hábito de pular as refeições regulares.",
      "Há períodos regulares em que parece que eu estou continuamente comendo, sem refeições planejadas."
    ]
  },
  {
    id: 12,
    statements: [
      "Eu não tenho o hábito de comer quando estou chateado(a).",
      "Às vezes eu como quando estou chateado(a), mas, frequentemente, sou capaz de me ocupar e afastar minha mente da comida.",
      "Eu tenho o hábito regular de comer quando estou chateado(a), mas, de vez em quando, posso usar alguma outra atividade para afastar minha mente da comida.",
      "Eu tenho o forte hábito de comer quando estou chateado(a). Nada parece me ajudar a parar com esse hábito."
    ]
  },
  {
    id: 13,
    statements: [
      "Normalmente eu sou capaz de parar de comer quando quero. Eu sei quando \"já chega\".",
      "De vez em quando, eu tenho uma compulsão para comer que parece que não posso controlar.",
      "Frequentemente, tenho fortes impulsos para comer, parece que não sou capaz de controlar, mas, em outras ocasiões, posso controlar meus impulsos para comer.",
      "Eu me sinto incapaz de controlar impulsos para comer. Eu tenho medo de não ser capaz de parar de comer por vontade própria."
    ]
  },
  {
    id: 14,
    statements: [
      "Normalmente, quando como alguma coisa é porque estou fisicamente com fome.",
      "De vez em quando como alguma coisa por impulso, mesmo quando não estou realmente com fome.",
      "Eu tenho o hábito regular de comer alimentos que realmente não aprecio para satisfazer uma sensação de fome, mesmo que, fisicamente, eu não necessite de comida.",
      "Mesmo que não esteja fisicamente com fome, tenho uma sensação de fome em minha boca que somente parece ser satisfeita quando eu como um alimento, tipo um sanduíche, que enche a minha boca. Às vezes, quando eu como o alimento para satisfazer minha \"fome na boca\", em seguida eu o cuspo, assim não ganharei peso."
    ]
  },
  {
    id: 15,
    statements: [
      "Eu não penso muito sobre comida.",
      "Eu tenho fortes desejos por comida, mas eles só duram curtos períodos de tempo.",
      "Há dias em que parece que eu não posso pensar em mais nada a não ser comida.",
      "Na maioria dos dias, meus pensamentos parecem estar \"pré-ocupados\" com comida. Sinto como se eu vivesse para comer."
    ]
  },
  {
    id: 16,
    statements: [
      "Em geral, minha ingestão calórica não sobe níveis muito altos, nem desce níveis muito baixos.",
      "Às vezes, depois de comer demais, tento reduzir minha ingestão calórica para quase nada, para compensar o excesso de calorias que ingeri.",
      "Eu tenho o hábito regular de comer demais durante à noite. Parece que a minha rotina não é estar com fome de manhã, mas comer demais à noite.",
      "Na minha vida adulta tenho tido períodos, que duram semanas, nos quais praticamente me mato de fome. Isso se segue em períodos em que como demais. Parece que vivo uma vida de \"festa\" ou de \"morrer de fome\"."
    ]
  }
];

const TesteCompulsaoAlimentar = () => {
  const [currentStep, setCurrentStep] = useState<"welcome" | "questions" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);

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
      setSelectedAnswer(null);
    } else {
      const total = newAnswers.reduce((sum, score) => sum + score, 0);
      setFinalScore(total);
      setCurrentStep("results");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const newAnswers = [...answers];
      const previousAnswer = newAnswers.pop();
      setAnswers(newAnswers);
      setSelectedAnswer(previousAnswer ?? null);
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
  const isPositive = finalScore > 25;

  return (
    <>
      <Helmet>
        <title>Teste de Compulsão Alimentar | Dr Gabriel Lopes</title>
        <meta
          name="description"
          content="Avalie seus padrões alimentares com o teste de Compulsão Alimentar. Ferramenta de triagem validada para identificar possíveis sintomas de transtorno de compulsão alimentar."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs
          items={[
            { label: "Testes", href: "/testes" },
            { label: "Teste de Compulsão Alimentar" },
          ]}
        />

        <main className="flex-grow pt-4 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {currentStep === "welcome" && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                    <Brain className="h-10 w-10 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    Teste de Compulsão Alimentar
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Este teste ajuda a identificar padrões de comportamento relacionados à compulsão alimentar.
                  </p>
                </div>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Sobre este teste</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg">
                      <h3 className="font-semibold mb-2 text-foreground">Como funciona</h3>
                      <p className="text-sm text-foreground/80">
                        O teste contém 16 grupos de afirmações sobre seus hábitos alimentares. 
                        Para cada grupo, selecione a afirmação que melhor descreve seu comportamento atual.
                      </p>
                    </div>

                    <Alert className="bg-[hsl(45,100%,95%)] dark:bg-[hsl(45,100%,15%)] border-[hsl(45,100%,60%)]">
                      <AlertCircle className="h-5 w-5 text-[hsl(45,100%,40%)]" />
                      <AlertDescription className="text-foreground">
                        <strong>Importante:</strong> Este teste não substitui uma avaliação médica profissional. 
                        Os resultados são apenas indicativos e devem ser interpretados por um profissional de saúde qualificado.
                      </AlertDescription>
                    </Alert>

                    <Button
                      onClick={startTest}
                      size="lg"
                      className="w-full text-lg h-14"
                    >
                      Iniciar Teste
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentStep === "questions" && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-primary">
                      Questão {currentQuestion + 1} de {questions.length}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {Math.round(progress)}% completo
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Selecione a afirmação que melhor descreve você:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup
                      value={selectedAnswer?.toString()}
                      onValueChange={(value) => setSelectedAnswer(Number(value))}
                    >
                      {questions[currentQuestion].statements.map((statement, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-4 rounded-lg border-2 transition-all hover:border-primary/50 hover:bg-accent/50 cursor-pointer"
                          onClick={() => setSelectedAnswer(index)}
                        >
                          <RadioGroupItem value={index.toString()} id={`statement-${index}`} />
                          <Label
                            htmlFor={`statement-${index}`}
                            className="flex-1 cursor-pointer text-base leading-relaxed"
                          >
                            {statement}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={currentQuestion === 0}
                        className="flex-1"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Anterior
                      </Button>
                      <Button
                        onClick={handleAnswer}
                        disabled={selectedAnswer === null}
                        className="flex-1"
                      >
                        {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentStep === "results" && (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                    <Brain className="h-10 w-10 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary">
                    Resultado do Teste
                  </h1>
                </div>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[hsl(var(--primary)/0.1)] border-4 border-primary">
                        <span className="text-4xl font-bold text-primary">{finalScore}</span>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold mb-2">
                          {isPositive ? "Resultado Positivo" : "Resultado Negativo"}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                          {isPositive
                            ? "Sua pontuação indica possíveis padrões de compulsão alimentar que merecem atenção profissional."
                            : "Sua pontuação está dentro da faixa que não sugere compulsão alimentar significativa no momento."}
                        </p>
                      </div>
                    </div>

                    <Alert className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] border-[hsl(180,60%,50%)]">
                      <AlertCircle className="h-5 w-5 text-[hsl(180,60%,40%)]" />
                      <AlertDescription className="text-foreground">
                        <strong>Lembre-se:</strong> Este teste é apenas uma ferramenta de triagem. 
                        Um diagnóstico preciso requer avaliação profissional completa e multidisciplinar.
                      </AlertDescription>
                    </Alert>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        variant="outline"
                        onClick={restartTest}
                        className="flex-1"
                      >
                        Refazer Teste
                      </Button>
                      <Button
                        onClick={() => window.location.href = "/contato"}
                        className="flex-1"
                      >
                        Agendar Consulta
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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

export default TesteCompulsaoAlimentar;
