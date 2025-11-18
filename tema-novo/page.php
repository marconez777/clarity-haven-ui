<?php
/**
 * Default Page Template
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
tema_novo_breadcrumbs();
?>

<main id="primary" class="site-main">
    <div class="container" style="max-width: 56rem; margin: 0 auto; padding: 2rem 1rem 4rem;">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header" style="margin-bottom: 2rem; text-align: center;">
                    <h1 style="font-size: 2.5rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <?php if ( has_post_thumbnail() ) : ?>
                    <div style="margin-bottom: 2rem;">
                        <?php the_post_thumbnail( 'large', array( 'style' => 'width: 100%; height: auto; border-radius: 0.75rem;' ) ); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content" style="font-size: 1.125rem; line-height: 1.8; color: hsl(var(--foreground));">
                    <?php
                    the_content();

                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links">' . esc_html__( 'Páginas:', 'tema-novo' ),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div>
            </article>

            <?php
            // If comments are open or there is at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;
        endwhile;
        ?>
    </div>
</main>

<?php
get_footer();
