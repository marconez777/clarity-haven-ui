import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const DOMAIN = 'https://drgabriel.med.br';

// Static routes with their priorities
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/dr-gabriel-lopes', priority: '0.9', changefreq: 'monthly' },
  { path: '/equipe', priority: '0.8', changefreq: 'monthly' },
  { path: '/especialidades', priority: '0.9', changefreq: 'monthly' },
  { path: '/tdah', priority: '0.9', changefreq: 'weekly' },
  { path: '/ansiedade', priority: '0.9', changefreq: 'weekly' },
  { path: '/depressao', priority: '0.9', changefreq: 'weekly' },
  { path: '/transtorno-bipolar', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/contato', priority: '0.7', changefreq: 'monthly' },
  { path: '/testes', priority: '0.8', changefreq: 'monthly' },
  { path: '/teste-tdah', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-tdah-hiperatividade', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-tdah-adulto', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-ansiedade-gad7', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-depressao-phq9', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-autismo-aq10', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-autismo-aq50', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-compulsao-alimentar', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-burnout', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-transtorno-bipolar', priority: '0.7', changefreq: 'monthly' },
  { path: '/teste-sofrimento-mental', priority: '0.7', changefreq: 'monthly' },
  { path: '/psiquiatra-de-tdah', priority: '0.8', changefreq: 'monthly' },
  { path: '/consulta-tdah-online', priority: '0.8', changefreq: 'monthly' },
];

function formatDate(date: string | null): string {
  if (!date) return new Date().toISOString().split('T')[0];
  return new Date(date).toISOString().split('T')[0];
}

function generateUrlEntry(url: string, lastmod: string, changefreq: string, priority: string): string {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const today = new Date().toISOString().split('T')[0];
    const urls: string[] = [];

    // Add static routes
    for (const route of staticRoutes) {
      urls.push(generateUrlEntry(
        `${DOMAIN}${route.path}`,
        today,
        route.changefreq,
        route.priority
      ));
    }

    // Fetch published blog posts
    const { data: posts, error: postsError } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (postsError) {
      console.error('Error fetching posts:', postsError);
    } else if (posts) {
      for (const post of posts) {
        urls.push(generateUrlEntry(
          `${DOMAIN}/${post.slug}`,
          formatDate(post.updated_at || post.published_at),
          'weekly',
          '0.7'
        ));
      }
    }

    // Fetch published pages
    const { data: pages, error: pagesError } = await supabase
      .from('pages')
      .select('slug, updated_at, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (pagesError) {
      console.error('Error fetching pages:', pagesError);
    } else if (pages) {
      for (const page of pages) {
        // Avoid duplicating static routes
        const isStatic = staticRoutes.some(r => r.path === `/${page.slug}`);
        if (!isStatic) {
          urls.push(generateUrlEntry(
            `${DOMAIN}/${page.slug}`,
            formatDate(page.updated_at || page.published_at),
            'monthly',
            '0.6'
          ));
        }
      }
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    console.log(`Generated sitemap with ${urls.length} URLs`);

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate sitemap' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
