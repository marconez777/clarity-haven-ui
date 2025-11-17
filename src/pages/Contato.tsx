import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email deve ter menos de 255 caracteres" }),
  phone: z.string().trim().min(1, { message: "Telefone é obrigatório" }).max(20, { message: "Telefone deve ter menos de 20 caracteres" }),
  subject: z.string().trim().min(1, { message: "Assunto é obrigatório" }).max(200, { message: "Assunto deve ter menos de 200 caracteres" }),
  message: z.string().trim().min(1, { message: "Mensagem é obrigatória" }).max(2000, { message: "Mensagem deve ter menos de 2000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Criar mensagem para WhatsApp
      const message = encodeURIComponent(
        `*Novo contato do site*\n\n` +
        `*Nome:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Telefone:* ${data.phone}\n` +
        `*Assunto:* ${data.subject}\n\n` +
        `*Mensagem:*\n${data.message}`
      );
      
      // Abrir WhatsApp
      window.open(`https://wa.me/5511941543929?text=${message}`, '_blank');
      
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contato - Dr Gabriel Lopes - Psiquiatra em São Paulo</title>
        <meta name="description" content="Entre em contato com o Dr Gabriel Lopes. Estamos na Vila Olímpia, São Paulo. Agende sua consulta de psiquiatria." />
        <meta name="keywords" content="contato psiquiatra, agendar consulta psiquiatria, Vila Olímpia, São Paulo" />
        <link rel="canonical" href="https://drgabriellopes.com.br/contato" />
      </Helmet>

      <Navigation />
      <Breadcrumbs items={[{ label: "Contato" }]} />
      
      <main className="min-h-screen pt-4">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Entre em Contato
              </h1>
              <p className="text-lg text-muted-foreground">
                Estamos prontos para atender você. Preencha o formulário ou entre em contato diretamente.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulário */}
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Envie sua Mensagem
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Seu nome"
                      className="mt-2"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="seu@email.com"
                      className="mt-2"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="(11) 99999-9999"
                      className="mt-2"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Como podemos ajudar?"
                      className="mt-2"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Descreva sua necessidade..."
                      className="mt-2 min-h-[150px]"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all"
                    size="lg"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </div>

              {/* Informações de Contato e Mapa */}
              <div className="space-y-8">
                {/* Informações */}
                <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Informações de Contato
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                        <p className="text-muted-foreground">
                          Rua do Rocio, 423. Cj. 402<br />
                          Vila Olímpia - São Paulo<br />
                          CEP: 04548-020
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefones</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:11941543929" className="hover:text-primary transition-colors">
                            (11) 94154-3929
                          </a>
                          <br />
                          <a href="tel:1130441690" className="hover:text-primary transition-colors">
                            (11) 3044-1690
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:contato@drgabriellopes.com.br" className="hover:text-primary transition-colors">
                            contato@drgabriellopes.com.br
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 20h<br />
                          Sábado: 8h às 14h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mapa */}
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7742934487796!2d-46.68455!3d-23.598123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574d6e11d4b1%3A0x5b12c8b9e4f1b1e5!2sRua%20do%20Rocio%2C%20423%20-%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004548-020!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Dr Gabriel Lopes"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contato;
