import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png?format=webp";
import { trackConversion } from "@/hooks/useConversionTracking";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleAgendamento = () => {
    trackConversion({ buttonLocation: 'navigation_header' });
    window.open('https://api.whatsapp.com/send/?phone=5511941543929&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0', '_blank');
  };

  const menuItems = [
    { name: "Dr. Gabriel Lopes", href: "/dr-gabriel-lopes" },
    { name: "Nossa Equipe", href: "/equipe" },
    { name: "Testes", href: "/testes-de-saude-mental" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  const especialidadesItems = [
    { name: "TDAH", href: "/tdah" },
    { name: "Ansiedade", href: "/ansiedade" },
    { name: "Depressão", href: "/depressao" },
    { name: "Transtorno Bipolar", href: "/transtorno-bipolar" },
  ];

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="Dr Gabriel Lopes - Saúde Mental Integrada" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.slice(0, 1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Dropdown Especialidades */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Link to="/especialidades" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 focus:outline-none focus-visible:outline-none data-[state=open]:text-primary">
                    Especialidades
                    <ChevronDown size={16} className={`transition-transform duration-300 ease-out ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-background/95 backdrop-blur-md border border-border/50 shadow-lg min-w-[200px] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
                  sideOffset={8}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  {especialidadesItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="cursor-pointer text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 rounded-sm px-3 py-2">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {menuItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all" onClick={handleAgendamento}>
              Agendamento on-line
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.slice(0, 1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Especialidades no mobile */}
              <Link to="/especialidades" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                Especialidades
              </Link>
              <div className="flex flex-col gap-2 pl-4">
                {especialidadesItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-white" onClick={handleAgendamento}>
                Agendamento on-line
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
