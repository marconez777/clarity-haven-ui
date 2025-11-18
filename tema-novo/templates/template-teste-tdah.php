<?php
/**
 * Template Name: Teste TDAH
 * 
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
tema_novo_breadcrumbs();
?>

<main class="test-container">
    <div style="text-align: center; margin-bottom: 2rem;">
        <h1 class="test-title">Teste de TDAH – Hiperatividade Adulto</h1>
        <p class="test-description">
            Avalie seus sintomas de hiperatividade com base em critérios validados
        </p>
    </div>

    <!-- Progress Bar -->
    <div class="progress-container">
        <div class="progress-text">Progresso: <span id="progress-text">0%</span></div>
        <div class="progress-bar">
            <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
        </div>
    </div>

    <!-- Test Content (controlled by JavaScript) -->
    <div id="test-content">
        <div id="session-title" style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--primary)); margin-bottom: 2rem; text-align: center;"></div>
        <div id="questions-container"></div>

        <div class="btn-group" style="margin-top: 2rem;">
            <button id="prev-btn" class="btn btn-outline" style="display: none;">Anterior</button>
            <button id="next-btn" class="btn btn-primary">Próxima</button>
        </div>
    </div>

    <!-- Results (initially hidden) -->
    <div id="test-results" style="display: none;"></div>

    <!-- Alert -->
    <div class="alert alert-warning" style="margin-top: 3rem;">
        <strong>Importante:</strong> Este teste não substitui uma avaliação médica profissional. 
        Os resultados são apenas indicativos e devem ser interpretados por um profissional de saúde qualificado.
    </div>
</main>

<script>
// O JavaScript do main.js já contém toda a lógica do teste TDAH
// Este template apenas fornece a estrutura HTML necessária
</script>

<?php
get_footer();
