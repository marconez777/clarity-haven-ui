<?php
/**
 * Template Name: Especialidades
 * 
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
tema_novo_breadcrumbs();
?>

<style>
/* Page Styles */
.especialidades-page {
    min-height: 100vh;
    background: hsl(0, 0%, 100%);
}

.especialidades-section {
    padding: 4rem 0;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
}

.page-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: hsl(210, 10%, 20%);
}

.page-description {
    font-size: 1.125rem;
    color: hsl(210, 10%, 45%);
    max-width: 42rem;
    margin: 0 auto;
}

.especialidades-cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 56rem;
    margin: 0 auto;
}

.especialidade-card-link {
    text-decoration: none;
    display: block;
}

.especialidade-card {
    background: hsl(0, 0%, 100%);
    border: 1px solid hsl(210, 20%, 90%);
    border-radius: 0.75rem;
    padding: 2rem;
    height: 100%;
    transition: all 0.3s ease;
}

.especialidade-card:hover {
    box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);
    transform: translateY(-4px);
}

.especialidade-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: hsl(198, 92%, 36%);
    margin-bottom: 1rem;
}

.especialidade-card-description {
    font-size: 1rem;
    color: hsl(210, 10%, 45%);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.especialidade-card-symptoms {
    margin-top: 1.5rem;
}

.especialidade-card-symptoms h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: hsl(210, 10%, 30%);
    margin-bottom: 0.75rem;
}

.especialidade-card-symptoms ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.especialidade-card-symptoms li {
    font-size: 0.875rem;
    color: hsl(210, 10%, 45%);
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
}

.especialidade-card-symptoms li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: hsl(198, 92%, 36%);
    font-weight: bold;
}

.cta-section {
    text-align: center;
    margin-top: 4rem;
    padding: 3rem;
    background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1));
    border-radius: 1rem;
}

.cta-section h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: hsl(210, 10%, 20%);
    margin-bottom: 1rem;
}

.cta-section p {
    font-size: 1.125rem;
    color: hsl(210, 10%, 45%);
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 1.875rem;
    }
    
    .cta-section h2 {
        font-size: 1.5rem;
    }
}
</style>

<main class="especialidades-page">
    <section class="especialidades-section">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <!-- Header -->
            <div class="page-header">
                <h1 class="page-title">Especialidades em Saúde Mental</h1>
                <p class="page-description">
                    Tratamento especializado com abordagem integrada e personalizada para suas necessidades em saúde mental.
                </p>
            </div>

            <!-- Cards Grid -->
            <div class="especialidades-cards-grid">
                <!-- TDAH -->
                <a href="<?php echo esc_url( home_url( '/tdah' ) ); ?>" class="especialidade-card-link">
                    <div class="especialidade-card">
                        <h2 class="especialidade-card-title">TDAH</h2>
                        <p class="especialidade-card-description">
                            O Transtorno de Déficit de Atenção e Hiperatividade é uma condição neurobiológica que afeta a capacidade de manter o foco, controlar impulsos e regular o nível de atividade.
                        </p>
                        <div class="especialidade-card-symptoms">
                            <h4>Principais sintomas:</h4>
                            <ul>
                                <li>Dificuldade de concentração</li>
                                <li>Impulsividade</li>
                                <li>Hiperatividade</li>
                                <li>Esquecimento frequente</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <!-- Ansiedade -->
                <a href="<?php echo esc_url( home_url( '/ansiedade' ) ); ?>" class="especialidade-card-link">
                    <div class="especialidade-card">
                        <h2 class="especialidade-card-title">Ansiedade</h2>
                        <p class="especialidade-card-description">
                            Os transtornos de ansiedade são caracterizados por preocupação excessiva, medo intenso e sintomas físicos que interferem nas atividades diárias.
                        </p>
                        <div class="especialidade-card-symptoms">
                            <h4>Principais sintomas:</h4>
                            <ul>
                                <li>Preocupação constante</li>
                                <li>Tensão muscular</li>
                                <li>Inquietação</li>
                                <li>Dificuldade de relaxar</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <!-- Depressão -->
                <a href="<?php echo esc_url( home_url( '/depressao' ) ); ?>" class="especialidade-card-link">
                    <div class="especialidade-card">
                        <h2 class="especialidade-card-title">Depressão</h2>
                        <p class="especialidade-card-description">
                            A depressão é um transtorno de humor caracterizado por tristeza persistente, perda de interesse e alterações no funcionamento diário.
                        </p>
                        <div class="especialidade-card-symptoms">
                            <h4>Principais sintomas:</h4>
                            <ul>
                                <li>Tristeza profunda</li>
                                <li>Perda de energia</li>
                                <li>Alterações no sono</li>
                                <li>Falta de interesse</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <!-- Transtorno Bipolar -->
                <a href="<?php echo esc_url( home_url( '/transtorno-bipolar' ) ); ?>" class="especialidade-card-link">
                    <div class="especialidade-card">
                        <h2 class="especialidade-card-title">Transtorno Bipolar</h2>
                        <p class="especialidade-card-description">
                            O transtorno bipolar é caracterizado por oscilações extremas de humor, alternando entre períodos de mania ou hipomania e depressão.
                        </p>
                        <div class="especialidade-card-symptoms">
                            <h4>Principais sintomas:</h4>
                            <ul>
                                <li>Oscilações de humor</li>
                                <li>Períodos de euforia</li>
                                <li>Episódios depressivos</li>
                                <li>Mudanças de energia</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>

            <!-- CTA Section -->
            <div class="cta-section">
                <h2>Precisa de ajuda profissional?</h2>
                <p>Agende uma consulta e receba o tratamento adequado para suas necessidades</p>
                <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                    Agende sua consulta
                </a>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
