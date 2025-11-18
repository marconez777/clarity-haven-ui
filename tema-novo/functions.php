<?php
/**
 * Tema Novo - Dr Gabriel Lopes Functions
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Define theme constants
define( 'TEMA_NOVO_VERSION', '1.0.0' );
define( 'TEMA_NOVO_DIR', get_template_directory() );
define( 'TEMA_NOVO_URI', get_template_directory_uri() );

/**
 * Include theme files
 */
require_once TEMA_NOVO_DIR . '/inc/theme-setup.php';
require_once TEMA_NOVO_DIR . '/inc/enqueue-scripts.php';

/**
 * Include component functions
 */
require_once TEMA_NOVO_DIR . '/components/breadcrumbs.php';
require_once TEMA_NOVO_DIR . '/components/whatsapp-button.php';

/**
 * Custom Nav Walker for Dropdown Menu
 */
class Tema_Novo_Nav_Walker extends Walker_Nav_Menu {
    /**
     * Start the element output for dropdown
     */
    function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
        
        // Check if this item has children
        $has_children = in_array( 'menu-item-has-children', $classes );
        
        if ( $has_children && $depth === 0 ) {
            $output .= '<li class="dropdown">';
            $output .= '<a href="' . esc_url( $item->url ) . '" class="dropdown-toggle">';
            $output .= esc_html( $item->title );
            $output .= '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
            $output .= '<polyline points="6 9 12 15 18 9"></polyline>';
            $output .= '</svg>';
            $output .= '</a>';
        } else {
            $output .= '<li>';
            $output .= '<a href="' . esc_url( $item->url ) . '"';
            
            // Add class for dropdown items
            if ( $depth > 0 ) {
                $output .= ' class="dropdown-item"';
            }
            
            $output .= '>' . esc_html( $item->title ) . '</a>';
        }
    }
    
    /**
     * Start the submenu output
     */
    function start_lvl( &$output, $depth = 0, $args = null ) {
        $output .= '<div class="dropdown-menu">';
    }
    
    /**
     * End the submenu output
     */
    function end_lvl( &$output, $depth = 0, $args = null ) {
        $output .= '</div>';
    }
}
