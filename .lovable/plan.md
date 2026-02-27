

## Plano: Ajustar colunas da tabela de Leads

### Problema
- Coluna "Nome" sempre mostra "-" (testes não têm nome) — remover
- Coluna "Página" sempre mostra "-" (source_url não está populado) — remover  
- Coluna "WhatsApp" não aparece, mas existe no banco (`test_submissions.whatsapp`)

### Alterações

#### 1. Atualizar função `get_unified_leads` no banco
- Adicionar campo `whatsapp` ao retorno da função
- Para `leads`: usar `l.phone` como whatsapp
- Para `test_submissions`: usar `t.whatsapp`
- Remover `name` e `source_url` do retorno

#### 2. Atualizar `src/pages/admin/LeadsContent.tsx`
- Remover coluna "Nome" do header e body
- Remover coluna "Página" do header e body
- Adicionar coluna "WhatsApp" entre Email e Origem
- Atualizar type do `leads` array (remover `name`/`source_url`, adicionar `whatsapp`)
- Atualizar colSpan de 5 para 4
- Atualizar CSV export (remover Nome/URL, adicionar WhatsApp)

### Colunas finais da tabela
Email | WhatsApp | Origem | Data

