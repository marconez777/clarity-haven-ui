import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Paciente",
    text: "O Dr. Gabriel foi fundamental no meu tratamento de ansiedade. Sua abordagem humanizada e profissional me ajudou a recuperar minha qualidade de vida. Recomendo muito!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Paciente",
    text: "Excelente profissional! O tratamento para depressão que recebi foi transformador. Agradeço pela dedicação e cuidado em cada consulta.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Mãe de paciente",
    text: "Meu filho foi diagnosticado com TDAH e o acompanhamento do Dr. Gabriel tem sido essencial. Profissional atencioso e competente, que realmente se importa com o bem-estar dos pacientes.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Paciente",
    text: "Após anos sofrendo com transtornos de humor, finalmente encontrei um profissional que me compreende e me ajuda de verdade. Muito obrigado, Dr. Gabriel!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide">
            ✦ Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos <span className="text-primary">pacientes dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira a experiência de quem já foi atendido por nossa equipe
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="border-2 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <Quote className="w-12 h-12 text-primary/20 mb-4" />
                        <p className="text-muted-foreground mb-6 min-h-[120px]">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-semibold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-1 mt-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">4.9/5</div>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Avaliação média dos nossos pacientes
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=dr+gabriel+lopes+psiquiatra",
                  "_blank"
                )
              }
            >
              Ver todas as avaliações no Google
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
