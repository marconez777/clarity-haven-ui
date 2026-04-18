

## Diagnóstico de 404s

A análise dos dados revela **2329 hits na página /404** vindos de 3 categorias:

### 1. Trailing slashes (URLs com barra final)
URLs como `/testes-de-saude-mental/`, `/nossa-equipe/`, `/dr-gabriel-lopes/` estão gerando 404 porque o React Router não faz match com a barra final.
- **~2000+ hits** só de trailing slashes em rotas que existem

### 2. URLs antigas do WordPress não mapeadas
Páginas como `/nossa-equipe/` → `/equipe`, `/onde-atendo/`, `/agende-sua-consulta/` que eram do site antigo e não têm redirect.

### 3. Blog posts antigos do WordPress
Posts como `/remedios-tarja-preta`, `/transtorno-bipolar-tipo-ii`, `/transtorno-da-personalidade-esquizoide` que existiam no WordPress mas não foram importados para o banco atual. Muitos destes existem como blog_posts com slugs diferentes ou não foram importados.

---

## Plano de implementação

### 1. Normalizar trailing slashes no ScrollToTop/App
- No componente `ScrollToTop.tsx` (ou criar um novo `TrailingSlashRedirect`), detectar URLs com trailing slash e fazer `<Navigate>` para a mesma URL sem a barra
- Isso resolve automaticamente centenas de 404s

### 2. Criar tabela `redirects` no banco
- Colunas: `id`, `from_path` (unique), `to_path`, `created_at`
- Permitir cadastrar redirects de URLs antigas para URLs novas
- Sem RLS (público, somente leitura via anon)

### 3. Atualizar `DynamicPage` para consultar redirects
- Antes de retornar 404, consultar a tabela `redirects` para ver se o `slug` tem um redirect cadastrado
- Se encontrar, fazer `<Navigate to={redirect.to_path} replace />`

### 4. Popular redirects iniciais
- Inserir os redirects mais acessados via migration:
  - `/nossa-equipe` → `/equipe`
  - `/onde-atendo` → `/contato`
  - `/agende-sua-consulta` → `https://wa.me/5511941543929` (ou `/contato`)
  - `/teste-online-para-saber-se-voce-tem-deficit-de-atencao-dr-gabriel` → `/teste-tdah-hiperatividade`
  - `/teste-de-tdah-hiperatividade-adulto` → `/teste-tdah-hiperatividade` (já existe redirect mas só sem trailing slash)
  - E os demais top 404s que mapeiam para páginas existentes

### 5. Adicionar UI de gerenciamento de redirects no admin (opcional)
- Tela simples para criar/editar/deletar redirects no painel admin

### Arquivos modificados
- `src/components/ScrollToTop.tsx` ou novo `TrailingSlashRedirect.tsx` — normalizar trailing slashes
- `src/pages/DynamicPage.tsx` — consultar tabela `redirects` antes de 404
- Migration SQL — criar tabela `redirects` e popular com dados iniciais

