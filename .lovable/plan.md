

The user already has the sitemap edge function. They want a static `public/sitemap.xml` served at the main domain, plus updated robots.txt, plus keep edge function as dynamic reference.

I have two questions: domain and which dynamic tables. Looking at existing code: domain is `https://drgabriel.med.br` (in edge function). Tables are `blog_posts` and `pages` with `status='published'`. Let me confirm with the user.

## Plano: Sitemap estático em /sitemap.xml

### Perguntas antes de implementar

Preciso confirmar 2 pontos com você antes de gerar o arquivo:

1. **Domínio principal** — no edge function atual está `https://drgabriel.med.br`. Mantemos esse?
2. **Tabelas dinâmicas** — confirmo que devo incluir:
   - `blog_posts` (status='published') → URL: `/{slug}`
   - `pages` (status='published') → URL: `/{slug}`

### Implementação (após confirmação)

**1. Criar `public/sitemap.xml` estático** com:
- Todas as rotas estáticas do `src/App.tsx` (exceto `/admin/*`, `/:slug` dinâmica e redirects `<Navigate>`)
- Todos os `blog_posts` publicados (consultados agora via SQL)
- Todas as `pages` publicadas (consultadas agora via SQL)
- Formato sitemap 0.9 com `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
- Prioridades:
  - `/` → 1.0
  - `/dr-gabriel-lopes`, `/especialidades`, especialidades clínicas (TDAH, ansiedade, depressão, bipolar) → 0.9
  - `/blog`, `/testes-de-saude-mental`, `/equipe` → 0.8
  - posts do blog, páginas dinâmicas → 0.7
  - LPs de teste, `/contato`, `/modelo-local` → 0.5–0.6

**2. Atualizar `public/robots.txt`**:
- Manter `Disallow: /admin/`
- Trocar `Sitemap:` para `https://drgabriel.med.br/sitemap.xml`

**3. Manter edge function `supabase/functions/sitemap/index.ts`** como referência dinâmica (já existe e funciona com SERVICE_ROLE_KEY + CORS + XML).

### Aviso importante (a ser repetido na entrega)
- `public/sitemap.xml` é **estático** e **não atualiza sozinho**
- Sempre que publicar novo post ou página no admin, **me peça para regenerar** o `public/sitemap.xml`
- A edge function `/functions/v1/sitemap` continua disponível como versão sempre atualizada (alternativa)

### Entregável final
URL para cadastrar no Google Search Console: `https://drgabriel.med.br/sitemap.xml`

