<?php
/**
 * Breadcrumbs Component
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Display breadcrumbs
 */
function tema_novo_breadcrumbs() {
    // Don't display on home page
    if ( is_front_page() ) {
        return;
    }
    
    $home_title = esc_html__( 'Home', 'tema-novo' );
    $home_url = home_url( '/' );
    
    echo '<nav aria-label="Breadcrumb" class="breadcrumbs-container">';
    echo '<ol class="breadcrumbs-list">';
    
    // Home link
    echo '<li class="breadcrumb-item">';
    echo '<a href="' . esc_url( $home_url ) . '" class="breadcrumb-link">' . $home_title . '</a>';
    echo '</li>';
    
    // Separator
    echo '<li class="breadcrumb-separator" aria-hidden="true">';
    echo '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
    echo '<polyline points="9 18 15 12 9 6"></polyline>';
    echo '</svg>';
    echo '</li>';
    
    if ( is_category() || is_single() ) {
        // Category
        if ( is_single() ) {
            $categories = get_the_category();
            if ( ! empty( $categories ) ) {
                $category = $categories[0];
                echo '<li class="breadcrumb-item">';
                echo '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" class="breadcrumb-link">';
                echo esc_html( $category->name );
                echo '</a>';
                echo '</li>';
                
                echo '<li class="breadcrumb-separator" aria-hidden="true">';
                echo '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
                echo '<polyline points="9 18 15 12 9 6"></polyline>';
                echo '</svg>';
                echo '</li>';
            }
        }
        
        // Current post/category
        echo '<li class="breadcrumb-item">';
        echo '<span class="breadcrumb-current">';
        if ( is_single() ) {
            the_title();
        } else {
            single_cat_title();
        }
        echo '</span>';
        echo '</li>';
        
    } elseif ( is_page() ) {
        global $post;
        // Parent pages
        if ( $post->post_parent ) {
            $parent_id = $post->post_parent;
            $breadcrumbs = array();
            
            while ( $parent_id ) {
                $page = get_post( $parent_id );
                $breadcrumbs[] = array(
                    'title' => get_the_title( $page->ID ),
                    'url'   => get_permalink( $page->ID ),
                );
                $parent_id = $page->post_parent;
            }
            
            $breadcrumbs = array_reverse( $breadcrumbs );
            
            foreach ( $breadcrumbs as $crumb ) {
                echo '<li class="breadcrumb-item">';
                echo '<a href="' . esc_url( $crumb['url'] ) . '" class="breadcrumb-link">';
                echo esc_html( $crumb['title'] );
                echo '</a>';
                echo '</li>';
                
                echo '<li class="breadcrumb-separator" aria-hidden="true">';
                echo '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
                echo '<polyline points="9 18 15 12 9 6"></polyline>';
                echo '</svg>';
                echo '</li>';
            }
        }
        
        // Current page
        echo '<li class="breadcrumb-item">';
        echo '<span class="breadcrumb-current">' . get_the_title() . '</span>';
        echo '</li>';
        
    } elseif ( is_search() ) {
        echo '<li class="breadcrumb-item">';
        echo '<span class="breadcrumb-current">';
        printf( esc_html__( 'Resultados da busca: %s', 'tema-novo' ), get_search_query() );
        echo '</span>';
        echo '</li>';
        
    } elseif ( is_404() ) {
        echo '<li class="breadcrumb-item">';
        echo '<span class="breadcrumb-current">' . esc_html__( 'Página não encontrada', 'tema-novo' ) . '</span>';
        echo '</li>';
    }
    
    echo '</ol>';
    echo '</nav>';
}
