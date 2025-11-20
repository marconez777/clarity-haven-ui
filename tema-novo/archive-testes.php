<?php
/**
 * Archive Template for Testes Custom Post Type
 * Redirects to the main Testes page
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Redirect to the main testes page (template-testes.php)
wp_redirect( home_url( '/testes' ) );
exit;
