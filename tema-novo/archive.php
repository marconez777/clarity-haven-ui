<?php
/**
 * Archive Template - Blog List
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
.blog-hero {
    padding: 3rem 0 4rem;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(185, 223, 237, 0.1));
}

    .blog-hero-content {
        max-width: 1400px;
        margin: 0 auto;
        text-align: center;
        padding: 0 2rem;
    }

.blog-hero h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: hsl(var(--foreground));
    margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
    .blog-hero h1 {
        font-size: 3rem;
    }
}

.blog-hero p {
    font-size: 1.125rem;
    color: hsl(var(--muted-foreground));
}

.blog-posts-section {
    padding: 3rem 0 4rem;
}

    .blog-posts-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
    }

@media (min-width: 768px) {
    .blog-posts-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .blog-posts-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.blog-card {
    background: hsl(var(--card));
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s;
    text-decoration: none;
    display: block;
    height: 100%;
}

.blog-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.blog-card-image {
    position: relative;
    height: 12rem;
    overflow: hidden;
    background: hsl(var(--muted));
}

.blog-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-card-header {
    padding: 1.5rem 1.5rem 0;
}

.blog-badge {
    display: inline-block;
    background: hsl(var(--primary));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.blog-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: hsl(var(--foreground));
    margin-bottom: 1rem;
    transition: color 0.2s;
}

.blog-card:hover .blog-card-title {
    color: hsl(var(--primary));
}

.blog-card-content {
    padding: 0 1.5rem;
}

.blog-card-excerpt {
    color: hsl(var(--muted-foreground));
    line-height: 1.6;
}

.blog-card-footer {
    padding: 1rem 1.5rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    color: hsl(var(--muted-foreground));
}

.blog-empty {
    text-align: center;
    padding: 4rem 1rem;
}

.blog-empty h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: hsl(var(--foreground));
    margin-bottom: 1rem;
}

.blog-empty p {
    font-size: 1.125rem;
    color: hsl(var(--muted-foreground));
    margin-bottom: 2rem;
}
</style>

<main>
    <!-- Hero Section -->
    <section class="blog-hero">
        <div class="blog-hero-content">
            <h1><?php echo is_category() ? single_cat_title( '', false ) : 'Blog'; ?></h1>
            <p>
                <?php 
                if ( is_category() ) {
                    echo category_description();
                } else {
                    echo 'Artigos e conteúdos sobre saúde mental, TDAH, ansiedade, depressão e bem-estar. Informação confiável para cuidar da sua mente.';
                }
                ?>
            </p>
        </div>
    </section>

    <!-- Posts Grid -->
    <section class="blog-posts-section">
        <?php if ( have_posts() ) : ?>
            <div class="blog-posts-grid">
                    <?php while ( have_posts() ) : the_post(); ?>
                        <a href="<?php the_permalink(); ?>" class="blog-card">
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="blog-card-image">
                                    <?php the_post_thumbnail( 'tema-novo-card' ); ?>
                                </div>
                            <?php else : ?>
                                <div class="blog-card-image">
                                    <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/mental-health.png' ); ?>" alt="<?php the_title_attribute(); ?>">
                                </div>
                            <?php endif; ?>
                            
                            <div class="blog-card-header">
                                <?php
                                $categories = get_the_category();
                                if ( ! empty( $categories ) ) :
                                ?>
                                    <span class="blog-badge"><?php echo esc_html( $categories[0]->name ); ?></span>
                                <?php endif; ?>
                                <h2 class="blog-card-title"><?php the_title(); ?></h2>
                            </div>
                            
                            <div class="blog-card-content">
                                <p class="blog-card-excerpt">
                                    <?php echo wp_trim_words( get_the_excerpt(), 20 ); ?>
                                </p>
                            </div>
                            
                            <div class="blog-card-footer">
                                <span><?php echo get_the_date(); ?></span>
                                <span>•</span>
                                <span><?php echo get_the_author(); ?></span>
                            </div>
                        </a>
                    <?php endwhile; ?>
            </div>

            <!-- Pagination -->
            <div style="margin-top: 4rem; text-align: center; max-width: 1400px; margin-left: auto; margin-right: auto; padding: 0 2rem;">
                <?php
                the_posts_pagination( array(
                    'mid_size'  => 2,
                    'prev_text' => __( '← Anterior', 'tema-novo' ),
                    'next_text' => __( 'Próximo →', 'tema-novo' ),
                ) );
                ?>
            </div>
        <?php else : ?>
            <div class="blog-empty" style="max-width: 1400px; margin: 0 auto; padding: 0 2rem;">
                <h2><?php esc_html_e( 'Nenhum post encontrado', 'tema-novo' ); ?></h2>
                <p><?php esc_html_e( 'Ainda não há posts publicados. Volte em breve!', 'tema-novo' ); ?></p>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">
                    <?php esc_html_e( 'Voltar para Home', 'tema-novo' ); ?>
                </a>
            </div>
        <?php endif; ?>
    </section>
</main>

<?php
get_template_part('components/whatsapp-button');
get_footer();
?>
