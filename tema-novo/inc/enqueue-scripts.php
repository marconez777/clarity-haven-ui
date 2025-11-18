<?php
/**
 * Enqueue Scripts and Styles
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enqueue scripts and styles
 */
function tema_novo_enqueue_scripts() {
    // Main stylesheet (styles.css from assets)
    wp_enqueue_style(
        'tema-novo-styles',
        TEMA_NOVO_URI . '/assets/css/styles.css',
        array(),
        TEMA_NOVO_VERSION
    );
    
    // Testes stylesheet
    wp_enqueue_style(
        'tema-novo-testes',
        TEMA_NOVO_URI . '/assets/css/styles-testes.css',
        array( 'tema-novo-styles' ),
        TEMA_NOVO_VERSION
    );
    
    // Main JavaScript
    wp_enqueue_script(
        'tema-novo-main',
        TEMA_NOVO_URI . '/assets/js/main.js',
        array(),
        TEMA_NOVO_VERSION,
        true
    );
    
    // Comment reply script
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'tema_novo_enqueue_scripts' );

/**
 * Add async/defer to scripts
 */
function tema_novo_add_async_defer( $tag, $handle ) {
    $async_scripts = array( 'tema-novo-main' );
    
    if ( in_array( $handle, $async_scripts ) ) {
        return str_replace( ' src', ' defer src', $tag );
    }
    
    return $tag;
}
add_filter( 'script_loader_tag', 'tema_novo_add_async_defer', 10, 2 );
