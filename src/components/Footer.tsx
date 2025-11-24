import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img 
                src={logo}
                alt="Dr Gabriel Lopes - Saúde Mental Integrada" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-muted-foreground">
              Cuidado integral e humanizado para o seu bem-estar emocional e mental.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-muted-foreground">
                  <p>Rua do Rocio, 423. Cj. 402. (Vila Olímpia)</p>
                  <p>São Paulo, CEP: 04548-020</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <a href="tel:1194154-3929" className="hover:text-primary transition-colors">
                    11 94154-3929
                  </a>
                  {" | "}
                  <a href="tel:1130441690" className="hover:text-primary transition-colors">
                    11 3044-1690
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@drgabriellopes.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@drgabriellopes.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Horário de Atendimento
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Segunda a Sexta: 8h às 20h</p>
              <p>Sábado: 8h às 14h</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              Diretor Técnico Médico: Dr. Gabriel Lopes – CRM/SP: 131.339 RQE:
              48295 RQE: 48295-1.
            </p>
            <p>Todos os Direitos Reservados © {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
