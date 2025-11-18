<?php
/**
 * Template Name: Testes
 * 
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
tema_novo_breadcrumbs();
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
                <a href="<?php echo esc_url( home_url( '/teste-tdah' ) ); ?>" class="card card-hover" style="text-decoration: none;">
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

                <!-- Testes desabilitados -->
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

                <div class="card card-disabled">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                        </div>
                        <h3 class="card-title">Teste de Transtorno Bipolar - Mood Disorder Questionnaire</h3>
                        <span class="card-badge">Em breve</span>
                    </div>
                </div>

                <div class="card card-disabled">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                        </div>
                        <h3 class="card-title">Escala de Ansiedade - GAD-7</h3>
                        <span class="card-badge">Em breve</span>
                    </div>
                </div>

                <div class="card card-disabled">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                        </div>
                        <h3 class="card-title">Escala de Depressão - PHQ-9</h3>
                        <span class="card-badge">Em breve</span>
                    </div>
                </div>
            </div>

            <!-- Alert Box -->
            <div class="alert alert-info" style="max-width: 56rem; margin: 3rem auto 0;">
                <p><strong>Atenção:</strong> Os testes disponibilizados aqui são ferramentas de triagem inicial e não substituem uma avaliação diagnóstica completa realizada por um profissional de saúde mental.</p>
                <p style="margin-top: 1rem;">Se você identificou sintomas preocupantes, recomendamos que procure um psiquiatra ou psicólogo para uma avaliação detalhada.</p>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section style="padding: 4rem 0; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1)); text-align: center;">
        <div class="container" style="max-width: 56rem; margin: 0 auto; padding: 0 1rem;">
            <h2 style="font-size: 1.875rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                Precisa de ajuda profissional?
            </h2>
            <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                Agende uma consulta com o Dr. Gabriel Lopes para uma avaliação completa
            </p>
            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                Agendar consulta
            </a>
        </div>
    </section>
</main>

<?php
get_footer();
