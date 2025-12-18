import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Mail, Phone } from "lucide-react";

interface EmailCollectionStepProps {
  onSubmit: (data: { email: string; whatsapp: string }) => void;
  testName: string;
}

const EmailCollectionStep = ({ onSubmit, testName }: EmailCollectionStepProps) => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWhatsApp = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 11;
  };

  const formatWhatsApp = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 11) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
    setError("");
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
    if (!whatsapp.trim()) {
      setError("Por favor, insira seu WhatsApp");
      return;
    }
    if (!validateWhatsApp(whatsapp)) {
      setError("Por favor, insira um WhatsApp válido (DDD + número)");
      return;
    }
    if (!acceptedTerms) {
      setError("Por favor, aceite os termos para continuar");
      return;
    }
    setError("");
    onSubmit({ 
      email: email.trim().toLowerCase(), 
      whatsapp: whatsapp.replace(/\D/g, '') 
    });
  };

  const isValid = email.trim() && validateEmail(email) && whatsapp.trim() && validateWhatsApp(whatsapp) && acceptedTerms;

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
          Para receber seu resultado do {testName}, precisamos dos seus dados
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informe seus dados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              E-mail *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={error && error.includes("e-mail") ? "border-destructive" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              WhatsApp *
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(11) 99999-9999"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && isValid) {
                  handleSubmit();
                }
              }}
              className={error && error.includes("WhatsApp") ? "border-destructive" : ""}
            />
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

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
              <strong className="text-foreground">Por que pedimos seus dados?</strong>
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
