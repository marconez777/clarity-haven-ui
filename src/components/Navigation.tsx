import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    { name: "Dr. Gabriel Lopes", href: "/dr-gabriel-lopes" },
    { name: "Nossa Equipe", href: "/equipe" },
    { name: "Testes", href: "/testes" },
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
          <a href="/" className="flex items-center">
            <img 
              src={logo}
              alt="Dr Gabriel Lopes - Saúde Mental Integrada" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.slice(0, 1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Dropdown Especialidades */}
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <a href="/especialidades" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 focus:outline-none focus-visible:outline-none data-[state=open]:text-primary">
                    Especialidades
                    <ChevronDown size={16} className={`transition-transform duration-300 ease-out ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-background/95 backdrop-blur-md border border-border/50 shadow-lg min-w-[200px] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
                  sideOffset={8}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  {especialidadesItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <a href={item.href} className="cursor-pointer text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 rounded-sm px-3 py-2">
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {menuItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-hover)] transition-all">
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Especialidades no mobile */}
              <a href="/especialidades" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                Especialidades
              </a>
              <div className="flex flex-col gap-2 pl-4">
                {especialidadesItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {menuItems.slice(1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-white">
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
