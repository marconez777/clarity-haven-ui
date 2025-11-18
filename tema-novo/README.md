# Tema Novo - Dr Gabriel Lopes

Tema WordPress profissional para clínica de psiquiatria e saúde mental.

## 📋 Informações do Tema

- **Nome:** Tema Novo - Dr Gabriel Lopes
- **Versão:** 1.0.0
- **Requer WordPress:** 5.0 ou superior
- **Requer PHP:** 7.4 ou superior
- **Licença:** GPL v2 ou posterior

## 🚀 Instalação

1. Faça o upload da pasta `tema-novo` para `/wp-content/themes/`
2. Ative o tema através do painel WordPress em **Aparência > Temas**
3. Configure o tema seguindo as instruções abaixo

## ⚙️ Configuração Inicial

### 1. Configurar Página Inicial

1. Vá em **Páginas > Adicionar Nova**
2. Crie uma página com o título "Home"
3. Não selecione nenhum template (use o padrão)
4. Publique a página
5. Vá em **Configurações > Leitura**
6. Selecione "Uma página estática"
7. Em "Página inicial", selecione a página "Home" que você criou
8. Salve as alterações

### 2. Criar Páginas com Templates

Crie as seguintes páginas e aplique os respectivos templates:

| Título da Página | Slug | Template a Aplicar |
|-----------------|------|-------------------|
| TDAH | `tdah` | **TDAH** |
| Ansiedade | `ansiedade` | **Ansiedade** |
| Depressão | `depressao` | **Depressão** |
| Transtorno Bipolar | `transtorno-bipolar` | **Transtorno Bipolar** |
| Dr. Gabriel Lopes | `dr-gabriel-lopes` | **Dr. Gabriel** |
| Especialidades | `especialidades` | **Especialidades** |
| Nossa Equipe | `equipe` | **Nossa Equipe** |
| Testes | `testes` | **Testes** |
| Teste TDAH | `teste-tdah` | **Teste TDAH** |
| Contato | `contato` | **Contato** |

**Como aplicar um template:**
1. Ao criar/editar uma página, procure o box "Atributos da Página" na lateral direita
2. No dropdown "Template", selecione o template correspondente
3. Publique a página

### 3. Configurar Blog

1. Crie uma página com o título "Blog"
2. Não adicione nenhum conteúdo
3. Publique a página
4. Vá em **Configurações > Leitura**
5. Em "Página de posts", selecione a página "Blog"
6. Salve as alterações

### 4. Configurar Menus

1. Vá em **Aparência > Menus**
2. Crie um novo menu chamado "Menu Principal"
3. Adicione as páginas na seguinte ordem:
   - Dr. Gabriel Lopes
   - Especialidades (com submenu)
     - TDAH
     - Ansiedade
     - Depressão
     - Transtorno Bipolar
   - Nossa Equipe
   - Testes
   - Blog
   - Contato
4. Em "Configurações do Menu", marque a localização **Menu Principal**
5. Salve o menu

**Nota:** Para criar o dropdown de Especialidades:
- Arraste os itens TDAH, Ansiedade, Depressão e Transtorno Bipolar ligeiramente para a direita sob "Especialidades"
- Isso criará o submenu automaticamente

### 5. Configurar Logo (Opcional)

1. Vá em **Aparência > Personalizar**
2. Clique em **Identidade do Site**
3. Em "Logo", faça upload do logo da clínica
4. Ajuste o tamanho se necessário
5. Publique as alterações

## 📁 Estrutura do Tema

```
tema-novo/
├── style.css                    # Metadados do tema
├── functions.php                # Funções principais
├── index.php                    # Template fallback
├── front-page.php              # Página inicial (Home)
├── page.php                     # Template padrão para páginas
├── single.php                   # Template para posts individuais
├── archive.php                  # Lista de posts (Blog)
├── 404.php                      # Página de erro
├── header.php                   # Cabeçalho do site
├── footer.php                   # Rodapé do site
│
├── templates/                   # Page Templates
│   ├── template-tdah.php
│   ├── template-ansiedade.php
│   ├── template-depressao.php
│   ├── template-transtorno-bipolar.php
│   ├── template-dr-gabriel.php
│   ├── template-especialidades.php
│   ├── template-equipe.php
│   ├── template-testes.php
│   ├── template-teste-tdah.php
│   └── template-contato.php
│
├── inc/                         # Arquivos de configuração
│   ├── theme-setup.php
│   └── enqueue-scripts.php
│
├── components/                  # Componentes reutilizáveis
│   ├── breadcrumbs.php
│   └── whatsapp-button.php
│
└── assets/                      # Assets do tema
    ├── css/
    │   ├── styles.css
    │   └── styles-testes.css
    ├── js/
    │   └── main.js
    └── images/
        └── (todas as imagens)
```

## 🎨 Recursos do Tema

- ✅ Design moderno e responsivo
- ✅ Sistema de cores HSL totalmente customizável
- ✅ Menu de navegação com dropdown
- ✅ Breadcrumbs automáticos
- ✅ Botão flutuante do WhatsApp
- ✅ Templates específicos para cada página
- ✅ Sistema de blog completo
- ✅ Teste interativo de TDAH
- ✅ Integração com Doctoralia
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Acessibilidade (ARIA labels)

## 🎨 Customização

### Cores

As cores do tema podem ser alteradas editando as variáveis CSS em `assets/css/styles.css`:

```css
:root {
    --background: 0 0% 100%;
    --foreground: 210 10% 20%;
    --primary: 198 92% 36%;
    --primary-foreground: 0 0% 100%;
    --secondary: 185 58% 88%;
    --accent: 185 58% 58%;
    /* ... */
}
```

### Informações de Contato

Para alterar telefone, email e endereço, edite o arquivo `footer.php`.

### Número do WhatsApp

Para alterar o número do WhatsApp, edite `components/whatsapp-button.php`.

## 📝 Criando Posts do Blog

1. Vá em **Posts > Adicionar Novo**
2. Adicione título e conteúdo
3. Adicione uma imagem destacada (recomendado: 800x600px)
4. Selecione uma categoria
5. Preencha os campos de SEO (se usar plugin como Yoast SEO)
6. Publique o post

## 🔧 Suporte e Personalização

Para personalizações adicionais ou suporte, entre em contato através do site.

## 📄 Licença

Este tema é licenciado sob a GPL v2 ou posterior.
Copyright © 2025 Dr Gabriel Lopes - Todos os direitos reservados.

## ✅ Checklist Pós-Instalação

- [ ] Tema ativado
- [ ] Página "Home" criada e configurada como página inicial
- [ ] 10 páginas criadas com templates aplicados
- [ ] Página "Blog" criada e configurada como página de posts
- [ ] Menu principal criado e atribuído
- [ ] Logo personalizado configurado (opcional)
- [ ] Primeiro post de teste criado
- [ ] Verificado funcionamento do teste de TDAH
- [ ] Botão WhatsApp funcionando corretamente
- [ ] Site testado em dispositivos móveis

## 🆘 Problemas Comuns

**Menu não aparece?**
- Certifique-se de que criou o menu e o atribuiu à localização "Menu Principal"

**Templates não aparecem?**
- Verifique se o tema está ativado corretamente
- Os templates aparecem no editor de páginas em "Atributos da Página > Template"

**Imagens não carregam?**
- Verifique se todas as imagens foram copiadas para `assets/images/`

**Teste de TDAH não funciona?**
- Verifique se o arquivo `assets/js/main.js` está sendo carregado corretamente
- Abra o console do navegador (F12) para verificar erros JavaScript

## 📞 Contato

Dr Gabriel Lopes - Saúde Mental Integrada
- **Endereço:** Rua do Rocio, 423. Cj. 402. (Vila Olímpia) - São Paulo, CEP: 04548-020
- **Telefone:** (11) 94154-3929 | (11) 3044-1690
- **Email:** contato@drgabriellopes.com.br
- **Website:** https://drgabriellopes.com.br
