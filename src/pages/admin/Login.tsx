import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      toast({
        title: "Erro ao fazer login",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Login realizado com sucesso",
      });
      navigate('/admin');
    }
    
    setLoading(false);
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
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
