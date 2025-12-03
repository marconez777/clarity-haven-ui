import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import { useLoginAttempts } from '@/hooks/useLoginAttempts';
import { useAuditLog } from '@/hooks/useAuditLog';
import { z } from 'zod';
import { Lock, AlertTriangle, Loader2 } from 'lucide-react';

const loginSchema = z.object({
  email: z.string()
    .trim()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  password: z.string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { signIn, user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isLocked, remainingAttempts, formatRemainingTime, recordAttempt, clearAttempts } = useLoginAttempts();
  const { logLoginSuccess } = useAuditLog();

  // Redirect if already logged in and is admin
  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      navigate('/admin');
    }
  }, [user, isAdmin, authLoading, navigate]);

  const validateForm = (): boolean => {
    try {
      loginSchema.parse({ email, password });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { email?: string; password?: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0] === 'email') fieldErrors.email = err.message;
          if (err.path[0] === 'password') fieldErrors.password = err.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLocked) {
      toast({
        title: "Conta bloqueada temporariamente",
        description: `Aguarde ${formatRemainingTime()} para tentar novamente.`,
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      await recordAttempt(email, false);
      
      // Generic error message to not reveal info
      toast({
        title: "Erro ao fazer login",
        description: remainingAttempts > 1 
          ? `Email ou senha incorretos. ${remainingAttempts - 1} tentativas restantes.`
          : "Email ou senha incorretos.",
        variant: "destructive",
      });
    } else {
      await recordAttempt(email, true);
      clearAttempts(email);
      await logLoginSuccess(email);
      
      toast({
        title: "Login realizado com sucesso",
      });
      navigate('/admin');
    }
    
    setLoading(false);
  };

  // Show loading while checking auth state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Login - Dr Gabriel Lopes</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img 
                src="/favicon.png" 
                alt="Logo Dr Gabriel Lopes" 
                className="w-16 h-16"
              />
            </div>
            <div>
              <CardTitle className="text-2xl">Área Administrativa</CardTitle>
              <CardDescription>Faça login para acessar o painel</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {isLocked && (
              <Alert variant="destructive" className="mb-4">
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  Muitas tentativas de login. Conta bloqueada por {formatRemainingTime()}.
                </AlertDescription>
              </Alert>
            )}
            
            {!isLocked && remainingAttempts < 5 && remainingAttempts > 0 && (
              <Alert className="mb-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                  {remainingAttempts} {remainingAttempts === 1 ? 'tentativa restante' : 'tentativas restantes'} antes do bloqueio.
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  placeholder="seu@email.com"
                  required
                  disabled={isLocked || loading}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
                  }}
                  placeholder="••••••••"
                  required
                  disabled={isLocked || loading}
                  className={errors.password ? 'border-destructive' : ''}
                />
                {errors.password && (
                  <p className="text-sm text-destructive mt-1">{errors.password}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading || isLocked}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  'Entrar'
                )}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <button 
                type="button"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => toast({ title: "Entre em contato com o administrador para recuperar sua senha." })}
              >
                Esqueci minha senha
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
