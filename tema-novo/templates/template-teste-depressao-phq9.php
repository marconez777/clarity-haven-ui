<?php
/**
 * Template Name: Teste Depressão PHQ9
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
    .iframe-wrapper {
        width: 100%;
        margin: 0;
        padding: 0;
        background: #fff;
    }
    
    .iframe-container {
        width: 100%;
        min-height: calc(100vh - 100px);
        border: none;
        display: block;
    }
</style>

<div class="iframe-wrapper">
    <iframe 
        src="https://clarity-haven-ui.lovable.app/teste-depressao-phq9"
        class="iframe-container"
        frameborder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
</div>

<?php
get_footer();
