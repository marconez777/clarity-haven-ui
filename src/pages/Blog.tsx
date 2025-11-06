import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Entendendo a Ansiedade: Sintomas e Tratamentos",
    excerpt: "A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva pode impactar significativamente a qualidade de vida. Conheça os principais sintomas e opções de tratamento.",
    image: "/placeholder.svg",
    date: "15 Mar 2024",
    author: "Dr. Gabriel Lopes",
    category: "Ansiedade",
    slug: "entendendo-ansiedade"
  },
  {
    id: 2,
    title: "TDAH em Adultos: Mitos e Verdades",
    excerpt: "O Transtorno de Déficit de Atenção e Hiperatividade não afeta apenas crianças. Descubra como o TDAH se manifesta em adultos e as melhores estratégias de tratamento.",
    image: "/placeholder.svg",
    date: "10 Mar 2024",
    author: "Dr. Gabriel Lopes",
    category: "TDAH",
    slug: "tdah-adultos"
  },
  {
    id: 3,
    title: "A Importância da Saúde Mental no Ambiente de Trabalho",
    excerpt: "Cuidar da saúde mental no trabalho é essencial para o bem-estar e produtividade. Aprenda estratégias práticas para manter o equilíbrio mental no dia a dia profissional.",
    image: "/placeholder.svg",
    date: "5 Mar 2024",
    author: "Dr. Gabriel Lopes",
    category: "Bem-estar"
  },
  {
    id: 4,
    title: "Depressão: Quando Procurar Ajuda Profissional",
    excerpt: "Reconhecer os sinais da depressão e buscar ajuda no momento certo pode fazer toda a diferença. Saiba quando é hora de procurar um profissional de saúde mental.",
    image: "/placeholder.svg",
    date: "28 Fev 2024",
    author: "Dr. Gabriel Lopes",
    category: "Depressão"
  },
  {
    id: 5,
    title: "Nutrição e Saúde Mental: A Conexão que Você Precisa Conhecer",
    excerpt: "Você sabia que a alimentação pode influenciar diretamente sua saúde mental? Descubra como uma nutrição adequada pode ajudar no tratamento de transtornos mentais.",
    image: "/placeholder.svg",
    date: "20 Fev 2024",
    author: "Dr. Gabriel Lopes",
    category: "Nutrição"
  },
  {
    id: 6,
    title: "Acupuntura no Tratamento de Transtornos Mentais",
    excerpt: "A acupuntura tem se mostrado uma terapia complementar eficaz no tratamento de diversos transtornos mentais. Entenda como essa técnica milenar pode ajudar.",
    image: "/placeholder.svg",
    date: "15 Fev 2024",
    author: "Dr. Gabriel Lopes",
    category: "Terapias Integrativas"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Dr Gabriel Lopes | Artigos sobre Saúde Mental</title>
        <meta 
          name="description" 
          content="Artigos e conteúdos sobre saúde mental, TDAH, ansiedade, depressão e bem-estar escritos pelo Dr. Gabriel Lopes. Informação confiável para cuidar da sua mente." 
        />
        <meta name="keywords" content="blog saúde mental, artigos psiquiatria, TDAH, ansiedade, depressão, bem-estar mental" />
        <link rel="canonical" href="https://drgabriellopes.com.br/blog" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog
              </h1>
              <p className="text-lg text-muted-foreground">
                Artigos, insights e informações sobre saúde mental, bem-estar e qualidade de vida. 
                Conteúdo especializado para você cuidar melhor da sua mente.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card 
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full"
                  >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                </Card>
              </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;
