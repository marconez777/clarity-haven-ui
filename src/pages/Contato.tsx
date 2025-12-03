import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
      // Salvar lead no banco de dados
      await supabase.from('leads').insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        source: 'Formulário de Contato',
        source_url: window.location.pathname
      });

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
        <html lang="pt-BR" />
        <title>Contato - Dr Gabriel Lopes - Psiquiatra em São Paulo</title>
        <meta name="description" content="Entre em contato com o Dr Gabriel Lopes. Estamos na Vila Olímpia, São Paulo. Agende sua consulta de psiquiatria." />
        <meta name="keywords" content="contato psiquiatra, agendar consulta psiquiatria, Vila Olímpia, São Paulo" />
        <link rel="canonical" href="https://drgabriel.med.br/contato" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drgabriel.med.br/contato" />
        <meta property="og:title" content="Contato - Dr Gabriel Lopes - Psiquiatra em São Paulo" />
        <meta property="og:description" content="Entre em contato com o Dr Gabriel Lopes. Estamos na Vila Olímpia, São Paulo." />
        <meta property="og:image" content="https://drgabriel.med.br/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato - Dr Gabriel Lopes - Psiquiatra em São Paulo" />
        <meta name="twitter:description" content="Entre em contato com o Dr Gabriel Lopes. Estamos na Vila Olímpia, São Paulo." />
        <meta name="twitter:image" content="https://drgabriel.med.br/og-image.jpg" />
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
            {/* WhatsApp Destaque - Full Width */}
            <div className="bg-[#25D366] rounded-lg p-4 shadow-lg mb-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-lg font-bold">Atendimento Rápido</h3>
                  <p className="text-white/90 text-sm">Fale diretamente conosco pelo WhatsApp</p>
                </div>
                <Button
                  onClick={() => handleWhatsAppClick('contact_page_highlight')}
                  className="bg-white text-[#25D366] hover:bg-white/90 font-semibold gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
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
                          <a href="mailto:contato@drgabriel.med.br" className="hover:text-primary transition-colors">
                            contato@drgabriel.med.br
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
