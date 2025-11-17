# Site PHP - Dr. Gabriel Lopes

Esta pasta contém a versão PHP/HTML/CSS do site Dr. Gabriel Lopes.

## Estrutura de Arquivos

```
php/
├── index.php           # Página principal (home)
├── styles.css          # Estilos CSS do site
├── includes/
│   ├── header.php     # Cabeçalho/navegação
│   └── footer.php     # Rodapé
└── README.md          # Este arquivo
```

## Instruções de Uso

1. **Caminhos de Imagens**: Os caminhos das imagens estão apontando para `../src/assets/`. Você precisará:
   - Copiar as imagens da pasta `src/assets/` para a pasta PHP
   - OU ajustar os caminhos nos arquivos para apontar para o local correto das imagens

2. **Imagens Necessárias**:
   - Logo: `logo.png`
   - Hero: `hero/hero-family.jpg`
   - Especialidades: `specialties/psiquiatria.png`, `psicoterapia.png`, `acupuntura.png`, `nutricao.png`, `neuropsicologia.png`
   - Sobre: `doctors/dr-gabriel.png`
   - Team: `doctors/team-professionals.png`
   - Mental Health: `sections/mental-health.png`

3. **Links**: Os links do menu e botões estão configurados. Você precisará criar as outras páginas conforme necessário.

4. **Design System**: Todas as cores estão definidas em variáveis CSS no arquivo `styles.css` usando HSL, seguindo o design system original.

5. **Responsividade**: O site é responsivo e se adapta a diferentes tamanhos de tela.

## Próximos Passos

Aguardando instruções para criar as demais páginas:
- Dr. Gabriel Lopes
- Especialidades
- Nossa Equipe
- Testes
- Blog
- Contato
- Páginas individuais de especialidades (TDAH, Ansiedade, Depressão, Transtorno Bipolar)

## Notas Técnicas

- O site usa PHP apenas para includes e data dinâmica no footer
- Todo o design é feito com CSS puro, sem frameworks
- As cores seguem o design system do site original em React
- Animações e transições foram mantidas
- SEO otimizado com meta tags apropriadas