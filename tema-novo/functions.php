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

/**
 * Register Custom Post Type for Testes
 */
function tema_novo_register_testes_cpt() {
    $labels = array(
        'name'                  => _x( 'Testes', 'Post Type General Name', 'tema_novo' ),
        'singular_name'         => _x( 'Teste', 'Post Type Singular Name', 'tema_novo' ),
        'menu_name'             => __( 'Testes', 'tema_novo' ),
        'name_admin_bar'        => __( 'Teste', 'tema_novo' ),
        'archives'              => __( 'Arquivos de Testes', 'tema_novo' ),
        'attributes'            => __( 'Atributos de Teste', 'tema_novo' ),
        'parent_item_colon'     => __( 'Teste Pai:', 'tema_novo' ),
        'all_items'             => __( 'Todos os Testes', 'tema_novo' ),
        'add_new_item'          => __( 'Adicionar Novo Teste', 'tema_novo' ),
        'add_new'               => __( 'Adicionar Novo', 'tema_novo' ),
        'new_item'              => __( 'Novo Teste', 'tema_novo' ),
        'edit_item'             => __( 'Editar Teste', 'tema_novo' ),
        'update_item'           => __( 'Atualizar Teste', 'tema_novo' ),
        'view_item'             => __( 'Ver Teste', 'tema_novo' ),
        'view_items'            => __( 'Ver Testes', 'tema_novo' ),
        'search_items'          => __( 'Procurar Teste', 'tema_novo' ),
        'not_found'             => __( 'Não encontrado', 'tema_novo' ),
        'not_found_in_trash'    => __( 'Não encontrado na Lixeira', 'tema_novo' ),
        'featured_image'        => __( 'Imagem Destacada', 'tema_novo' ),
        'set_featured_image'    => __( 'Definir imagem destacada', 'tema_novo' ),
        'remove_featured_image' => __( 'Remover imagem destacada', 'tema_novo' ),
        'use_featured_image'    => __( 'Usar como imagem destacada', 'tema_novo' ),
        'insert_into_item'      => __( 'Inserir no teste', 'tema_novo' ),
        'uploaded_to_this_item' => __( 'Enviado para este teste', 'tema_novo' ),
        'items_list'            => __( 'Lista de testes', 'tema_novo' ),
        'items_list_navigation' => __( 'Navegação na lista de testes', 'tema_novo' ),
        'filter_items_list'     => __( 'Filtrar lista de testes', 'tema_novo' ),
    );
    $args = array(
        'label'                 => __( 'Teste', 'tema_novo' ),
        'description'           => __( 'Post Type para cadastrar testes', 'tema_novo' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-forms',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'testes',
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
        'rewrite'               => array( 'slug' => 'testes' ),
    );
    register_post_type( 'testes', $args );
}
add_action( 'init', 'tema_novo_register_testes_cpt', 0 );
