<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testes de Saúde Mental | Dr Gabriel Lopes</title>
    <meta name="description" content="Realize testes online de avaliação de saúde mental. TDAH, ansiedade, depressão, transtorno bipolar e outros testes validados.">
    <meta name="keywords" content="teste TDAH, teste ansiedade, teste depressão, avaliação mental, teste bipolar, teste autismo">
    <link rel="canonical" href="https://drgabriellopes.com.br/testes">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="styles-testes.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php 
    // Breadcrumbs
    include 'components/breadcrumbs.php';
    render_breadcrumbs([
        ['label' => 'Testes']
    ]);
    ?>
    
    <main>
        <!-- Hero Section -->
        <section style="padding: 4rem 0; background: linear-gradient(180deg, hsl(var(--background)), hsl(var(--accent) / 0.1));">
            <div class="container">
                <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
                    <h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; color: hsl(var(--primary));">
                        Testes de Saúde Mental
                    </h1>
                    <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem; line-height: 1.6;">
                        Avalie seus sintomas com nossos testes online validados. Os resultados podem ajudar você a entender melhor sua saúde mental e orientar uma conversa com um profissional.
                    </p>
                    <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground)); font-style: italic;">
                        *Importante: Estes testes não substituem uma avaliação profissional completa.
                    </p>
                </div>
            </div>
        </section>

        <!-- Testes Grid -->
        <section style="padding: 4rem 0;">
            <div class="container">
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; max-width: 1200px; margin: 0 auto;">
                    
                    <!-- Teste TDAH Hiperatividade - ATIVO -->
                    <a href="teste-tdah.php" class="card card-hover" style="text-decoration: none;">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de TDAH – Hiperatividade Adulto</h3>
                        </div>
                    </a>

                    <!-- Teste Autismo AQ-10 -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Autismo Adulto – AQ-10</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Autismo AQ-50 -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Autismo Adulto – AQ-50</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Depressão PHQ9 -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Depressão – PHQ9</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Déficit de Atenção -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Déficit de Atenção – TDAH Adulto</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Ansiedade GAD-7 -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Ansiedade – GAD-7</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Compulsão Alimentar -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Compulsão Alimentar</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Burnout -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Burnout</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Transtorno Bipolar -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Transtorno Bipolar</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                    <!-- Teste Sofrimento Mental -->
                    <div class="card card-disabled">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 class="card-title">Teste de Sofrimento Mental</h3>
                            <span class="card-badge">Em breve</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Disclaimer Legal -->
        <section style="padding: 4rem 0; background: hsl(var(--muted) / 0.3);">
            <div class="container">
                <div style="max-width: 48rem; margin: 0 auto;">
                    <div class="alert alert-warning">
                        <div class="alert-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                        </div>
                        <div>
                            <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Aviso Importante</h3>
                            <p style="font-size: 0.875rem; line-height: 1.5; margin: 0;">
                                Estes testes são ferramentas de triagem e não substituem uma avaliação clínica completa. 
                                Se você está experimentando sintomas significativos, procure ajuda profissional qualificada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
    <?php include 'components/whatsapp-button.php'; ?>
</body>
</html>
