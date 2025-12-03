import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import DOMPurify from 'dompurify';
import { handleWhatsAppClick } from '@/hooks/useConversionTracking';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data } = await supabase
        .from('blog_posts')
        .select('*, blog_categories(name, slug)')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
      return data;
    },
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ['related-posts', post?.category_id],
    queryFn: async () => {
      if (!post?.category_id) return [];
      const { data } = await supabase
        .from('blog_posts')
        .select('id, title, slug, blog_categories(name)')
        .eq('category_id', post.category_id)
        .eq('status', 'published')
        .neq('id', post.id)
        .limit(3);
      return data || [];
    },
    enabled: !!post,
  });

  if (isLoading) {
    return (
      <>
        <Navigation />
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Carregando..." }]} />
        <div className="min-h-screen pt-8 pb-16 flex items-center justify-center">
          <p>Carregando...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navigation />
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        <div className="min-h-screen pt-8 pb-16">
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

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{post.seo_title || `${post.title} - Dr Gabriel Lopes`}</title>
        <meta name="description" content={post.seo_description || post.excerpt} />
        <meta name="keywords" content={post.seo_keywords || `${post.blog_categories?.name}, saúde mental`} />
        <link rel="canonical" href={`https://drgabriel.med.br/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://drgabriel.med.br/${post.slug}`} />
        <meta property="og:title" content={post.seo_title || post.title} />
        <meta property="og:description" content={post.seo_description || post.excerpt} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        
        {/* Twitter */}
        <meta name="twitter:title" content={post.seo_title || post.title} />
        <meta name="twitter:description" content={post.seo_description || post.excerpt} />
        {post.featured_image && <meta name="twitter:image" content={post.featured_image} />}
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
        
        <div className="container mx-auto px-4 pt-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>

        <article className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge>{post.blog_categories?.name}</Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.published_at).toLocaleDateString('pt-BR')}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.read_time}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                {post.title}
              </h1>

              {/* Card informativo do teste - acima da imagem */}
              {slug === 'teste-online-para-saber-se-voce-tem-deficit-de-atencao-dr-gabriel' && (
                <div className="mb-8 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Sobre este teste</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Este questionário ajuda a identificar sintomas de TDAH baseado em critérios validados cientificamente.
                      </p>
                      <div className="bg-primary/10 p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold text-foreground">Como funciona:</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 9 perguntas sobre comportamentos nos últimos 6 meses</li>
                          <li>• Responda com sinceridade - não há respostas certas ou erradas</li>
                          <li>• Leva aproximadamente 2 minutos</li>
                          <li>• Resultado imediato ao final</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>Importante:</strong> Este teste não substitui uma avaliação médica profissional. Serve como ferramenta de triagem inicial.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center">
                    <Link to="/teste-tdah-hiperatividade">
                      <Button size="lg" className="gap-2">
                        Iniciar Teste
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {post.featured_image && (
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-lg mb-12"
                />
              )}

              {/* Cards de testes - exibidos apenas no post sobre TDAH */}
              {slug === 'teste-online-para-saber-se-voce-tem-deficit-de-atencao-dr-gabriel' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <Link to="/teste-de-deficit-de-atencao-tdah-adulto">
                    <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          Teste de Desatenção – TDAH Adulto
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          ASRS-18 Parte 1
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/teste-tdah-hiperatividade">
                    <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          Teste de Hiperatividade – TDAH Adulto
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          ASRS-18 Parte 2
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              <div 
                className="blog-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />

              <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Precisa de ajuda profissional?</h3>
                <p className="text-muted-foreground mb-6">
                  Agende uma consulta e descubra como podemos ajudá-lo.
                </p>
                <Button 
                  size="lg"
                  onClick={() => handleWhatsAppClick('blog_post_sidebar')}
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} to={`/${related.slug}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <Badge className="mb-2 w-fit">{related.blog_categories?.name}</Badge>
                          <CardTitle className="text-lg">{related.title}</CardTitle>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPost;
