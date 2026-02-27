
## Problemas identificados

1. **Contador parado em 1000**: O Supabase tem limite padrão de 1000 linhas por query. Há 2098 submissões de teste mas só 1000 são retornadas.
2. **Filtro limitado**: Atualmente só filtra "Todos", "Formulário de Contato" e "Testes". Não permite filtrar por tipo específico de teste (TDAH, Ansiedade, etc.).

## Plano de implementação

### 1. Corrigir limite de 1000 registros
- Usar contagem real via query com `count` do Supabase em vez de `.length` dos dados retornados
- Para a listagem paginada, implementar paginação server-side com `.range()` em vez de carregar tudo no client

### 2. Implementar paginação server-side
- Buscar apenas os 20 registros da página atual usando `.range(from, to)` no Supabase
- Buscar contagens totais separadamente com `select('*', { count: 'exact', head: true })`
- Passar `filter`, `search` e `page` como parâmetros da query

### 3. Adicionar filtro por tipo de teste
- Mudar o Select de filtro para incluir os 10 tipos de teste existentes:
  - Transtorno Bipolar (656)
  - TDAH Hiperatividade (610)
  - Depressão PHQ-9 (283)
  - Autismo AQ-10 (167)
  - Ansiedade GAD-7 (102)
  - TDAH Déficit de Atenção Adulto (95)
  - Sofrimento Mental (64)
  - Burnout (50)
  - Autismo AQ-50 (43)
  - Compulsão Alimentar (28)
- Buscar os tipos de teste dinamicamente do banco para manter atualizado

### 4. Corrigir contadores dos cards de estatísticas
- Usar queries `count` dedicadas para cada card (total, hoje, contatos, testes)
- Essas queries não são limitadas pelo `.select()` de 1000

### Arquivos modificados
- `src/pages/admin/LeadsContent.tsx` - refatorar para paginação server-side + filtros expandidos
