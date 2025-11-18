<?php
function meu_tema_setup() {
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );
  register_nav_menus( array(
    'primary' => __( 'Menu principal', 'meu-tema' ),
  ) );
}
add_action( 'after_setup_theme', 'meu_tema_setup' );
