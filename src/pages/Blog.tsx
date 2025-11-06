import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data } = await supabase
        .from('blog_posts')
        .select('*, blog_categories(name, slug)')
        .eq('status', 'published')
        .order('published_at', { ascending: false });
      return data || [];
    },
  });
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
            {isLoading ? (
              <p className="text-center">Carregando posts...</p>
            ) : posts?.length === 0 ? (
              <p className="text-center">Nenhum post publicado ainda.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts?.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      {post.featured_image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <Badge className="mb-2 w-fit">
                          {post.blog_categories?.name || 'Sem categoria'}
                        </Badge>
                        <CardTitle className="hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.published_at).toLocaleDateString('pt-BR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;
