import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Mail } from "lucide-react";

interface EmailCollectionStepProps {
  onSubmit: (email: string) => void;
  testName: string;
}

const EmailCollectionStep = ({ onSubmit, testName }: EmailCollectionStepProps) => {
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Por favor, insira seu e-mail");
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido");
      return;
    }
    if (!acceptedTerms) {
      setError("Por favor, aceite os termos para continuar");
      return;
    }
    setError("");
    onSubmit(email.trim().toLowerCase());
  };

  const isValid = email.trim() && validateEmail(email) && acceptedTerms;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Antes de começar
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Para receber seu resultado do {testName}, precisamos do seu e-mail
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informe seu e-mail</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && isValid) {
                  handleSubmit();
                }
              }}
              className={error ? "border-destructive" : ""}
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => {
                setAcceptedTerms(checked as boolean);
                setError("");
              }}
            />
            <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              Concordo em receber o resultado do teste e informações sobre saúde mental. 
              Seus dados estão protegidos e não serão compartilhados com terceiros.
            </Label>
          </div>

          <div className="bg-[hsl(180,60%,85%)] dark:bg-[hsl(180,60%,25%)] p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Por que pedimos seu e-mail?</strong>
              <br />
              Para que você possa salvar seu resultado e, se desejar, receber 
              orientações personalizadas sobre o tema do teste.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button 
          onClick={handleSubmit} 
          size="lg" 
          className="gap-2"
          disabled={!isValid}
        >
          Continuar para o Teste
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default EmailCollectionStep;
