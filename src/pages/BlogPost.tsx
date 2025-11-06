import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

const blogPostsData = {
  "entendendo-ansiedade": {
    id: 1,
    title: "Entendendo a Ansiedade: Sintomas e Tratamentos",
    excerpt: "A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva pode impactar significativamente a qualidade de vida.",
    image: "/placeholder.svg",
    date: "15 Mar 2024",
    author: "Dr. Gabriel Lopes",
    category: "Ansiedade",
    readTime: "8 min",
    content: `
      <h2>O que é Ansiedade?</h2>
      <p>A ansiedade é uma emoção natural e importante que todos nós experimentamos. Ela nos alerta para possíveis ameaças e nos prepara para lidar com situações desafiadoras. No entanto, quando a ansiedade se torna excessiva, persistente e interfere nas atividades diárias, pode se transformar em um transtorno que requer atenção profissional.</p>

      <h2>Sintomas Comuns de Ansiedade</h2>
      <p>Os sintomas de ansiedade podem variar de pessoa para pessoa, mas geralmente incluem:</p>
      <ul>
        <li>Preocupação excessiva e persistente</li>
        <li>Inquietação ou sensação de estar "no limite"</li>
        <li>Fadiga constante</li>
        <li>Dificuldade de concentração</li>
        <li>Irritabilidade</li>
        <li>Tensão muscular</li>
        <li>Problemas de sono</li>
        <li>Palpitações ou aceleração do coração</li>
        <li>Sudorese excessiva</li>
        <li>Tremores ou sensação de sufocamento</li>
      </ul>

      <h2>Tipos de Transtornos de Ansiedade</h2>
      <p>Existem diversos tipos de transtornos de ansiedade, cada um com suas características específicas:</p>
      
      <h3>Transtorno de Ansiedade Generalizada (TAG)</h3>
      <p>Caracterizado por preocupação excessiva e persistente sobre diversos aspectos da vida cotidiana, como trabalho, saúde, família e finanças.</p>

      <h3>Transtorno do Pânico</h3>
      <p>Marcado por ataques de pânico recorrentes e inesperados, acompanhados de sintomas físicos intensos e medo de novos ataques.</p>

      <h3>Fobia Social</h3>
      <p>Medo intenso e persistente de situações sociais onde a pessoa pode ser observada, avaliada ou julgada por outros.</p>

      <h2>Opções de Tratamento</h2>
      <p>O tratamento da ansiedade geralmente envolve uma combinação de abordagens:</p>

      <h3>Psicoterapia</h3>
      <p>A Terapia Cognitivo-Comportamental (TCC) é uma das abordagens mais eficazes para tratar transtornos de ansiedade. Ela ajuda a identificar e modificar padrões de pensamento negativos e comportamentos que mantêm a ansiedade.</p>

      <h3>Medicação</h3>
      <p>Em alguns casos, medicamentos podem ser prescritos para ajudar a controlar os sintomas. Os mais comuns incluem antidepressivos e ansiolíticos, sempre sob supervisão médica.</p>

      <h3>Terapias Complementares</h3>
      <p>Técnicas como mindfulness, meditação, acupuntura e exercícios físicos regulares podem ser muito benéficas no controle da ansiedade.</p>

      <h2>Quando Procurar Ajuda</h2>
      <p>É importante procurar ajuda profissional quando a ansiedade:</p>
      <ul>
        <li>Interfere significativamente nas atividades diárias</li>
        <li>Causa sofrimento intenso</li>
        <li>Está presente na maioria dos dias por pelo menos 6 meses</li>
        <li>Leva ao evitamento de situações importantes</li>
        <li>Causa sintomas físicos preocupantes</li>
      </ul>

      <p>Não hesite em buscar apoio. O tratamento adequado pode fazer uma diferença significativa na sua qualidade de vida.</p>
    `
  },
  "tdah-adultos": {
    id: 2,
    title: "TDAH em Adultos: Mitos e Verdades",
    excerpt: "O Transtorno de Déficit de Atenção e Hiperatividade não afeta apenas crianças.",
    image: "/placeholder.svg",
    date: "10 Mar 2024",
    author: "Dr. Gabriel Lopes",
    category: "TDAH",
    readTime: "10 min",
    content: `
      <h2>TDAH não é apenas coisa de criança</h2>
      <p>Um dos maiores mitos sobre o TDAH é que ele desaparece na adolescência. Na realidade, cerca de 60% das crianças com TDAH continuam apresentando sintomas na vida adulta, embora eles possam se manifestar de forma diferente.</p>

      <h2>Como o TDAH se manifesta em adultos</h2>
      <p>Em adultos, os sintomas de hiperatividade física tendem a diminuir, mas a desatenção e a impulsividade podem persistir e causar dificuldades significativas:</p>
      <ul>
        <li>Dificuldade em organizar tarefas e gerenciar tempo</li>
        <li>Procrastinação crônica</li>
        <li>Dificuldade em manter o foco em tarefas longas</li>
        <li>Esquecimentos frequentes</li>
        <li>Impulsividade em decisões</li>
        <li>Dificuldade em completar projetos</li>
        <li>Problemas de relacionamento</li>
      </ul>

      <h2>Mitos sobre TDAH em Adultos</h2>
      
      <h3>Mito 1: "TDAH é desculpa para preguiça"</h3>
      <p>VERDADE: O TDAH é um transtorno neurobiológico real que afeta o funcionamento executivo do cérebro. Não tem nada a ver com preguiça ou falta de esforço.</p>

      <h3>Mito 2: "Adultos não podem desenvolver TDAH"</h3>
      <p>VERDADE: O TDAH não surge na vida adulta, mas pode ser diagnosticado pela primeira vez nesta fase, especialmente quando sintomas leves passaram despercebidos na infância.</p>

      <h3>Mito 3: "Medicação causa dependência"</h3>
      <p>VERDADE: Quando usados conforme prescrição médica, os medicamentos para TDAH não causam dependência e são seguros e eficazes.</p>

      <h2>Tratamento em Adultos</h2>
      <p>O tratamento do TDAH em adultos é multifacetado e personalizado:</p>
      
      <h3>Medicação</h3>
      <p>Medicamentos estimulantes e não-estimulantes podem ajudar significativamente no controle dos sintomas.</p>

      <h3>Psicoterapia</h3>
      <p>A terapia cognitivo-comportamental ajuda a desenvolver estratégias de organização, gerenciamento de tempo e controle de impulsos.</p>

      <h3>Coaching para TDAH</h3>
      <p>O coaching especializado pode auxiliar no desenvolvimento de habilidades práticas para o dia a dia.</p>

      <h2>Vivendo bem com TDAH</h2>
      <p>Com diagnóstico e tratamento adequados, adultos com TDAH podem ter vidas plenas e produtivas. O primeiro passo é buscar avaliação profissional.</p>
    `
  }
};

const relatedPosts = [
  {
    id: 3,
    title: "A Importância da Saúde Mental no Ambiente de Trabalho",
    category: "Bem-estar",
    slug: "saude-mental-trabalho"
  },
  {
    id: 4,
    title: "Depressão: Quando Procurar Ajuda Profissional",
    category: "Depressão",
    slug: "depressao-ajuda"
  },
  {
    id: 5,
    title: "Nutrição e Saúde Mental: A Conexão que Você Precisa Conhecer",
    category: "Nutrição",
    slug: "nutricao-saude-mental"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
            <Link to="/blog">
              <Button>Voltar ao Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Dr Gabriel Lopes</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, saúde mental, psiquiatria`} />
        <link rel="canonical" href={`https://drgabriellopes.com.br/blog/${slug}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-32">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-primary">{post.category}</Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime} de leitura
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                {post.title}
              </h1>

              {/* Featured Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-muted-foreground prose-ul:mb-6
                  prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Precisa de ajuda profissional?</h3>
                <p className="text-muted-foreground mb-6">
                  Agende uma consulta e descubra como podemos ajudá-lo a alcançar o bem-estar mental.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <Badge className="mb-2 w-fit">{relatedPost.category}</Badge>
                        <CardTitle className="text-lg hover:text-primary transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPost;
