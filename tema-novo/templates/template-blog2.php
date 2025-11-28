<?php
/**
 * Template Name: Blog 2
 * Description: Template de blog com grade de 3 colunas
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
tema_novo_breadcrumbs();
?>

<style>
.blog2-hero {
    padding: 3rem 0 4rem;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(185, 223, 237, 0.1));
}

.blog2-hero-content {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 0 2rem;
}

.blog2-hero h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
    .blog2-hero h1 {
        font-size: 3rem;
    }
}

.blog2-hero p {
    font-size: 1.125rem;
    color: #666;
}

.blog2-posts-section {
    padding: 3rem 0 4rem;
}

.blog2-posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

@media (min-width: 768px) {
    .blog2-posts-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .blog2-posts-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.blog2-card {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s;
    text-decoration: none;
    display: block;
    height: 100%;
}

.blog2-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.blog2-card-image {
    position: relative;
    height: 12rem;
    overflow: hidden;
    background: #f5f5f5;
}

.blog2-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog2-card-header {
    padding: 1.5rem 1.5rem 0;
}

.blog2-badge {
    display: inline-block;
    background: #0EA5E9;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.blog2-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1rem;
    transition: color 0.2s;
}

.blog2-card:hover .blog2-card-title {
    color: #0EA5E9;
}

.blog2-card-content {
    padding: 0 1.5rem;
}

.blog2-card-excerpt {
    color: #666;
    line-height: 1.6;
}

.blog2-card-footer {
    padding: 1rem 1.5rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    color: #666;
}

.blog2-empty {
    text-align: center;
    padding: 4rem 1rem;
    max-width: 1400px;
    margin: 0 auto;
}

.blog2-empty h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
}

.blog2-empty p {
    font-size: 1.125rem;
    color: #666;
    margin-bottom: 2rem;
}

.blog2-pagination {
    margin-top: 4rem;
    text-align: center;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem;
}
</style>

<main>
    <!-- Hero Section -->
    <section class="blog2-hero">
        <div class="blog2-hero-content">
            <h1>Blog</h1>
            <p>Artigos, insights e informações sobre saúde mental, bem-estar e qualidade de vida. Conteúdo especializado para você cuidar melhor da sua mente.</p>
        </div>
    </section>

    <!-- Posts Grid -->
    <section class="blog2-posts-section">
        <?php
        // Query para buscar todos os posts publicados
        $args = array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => 12,
            'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        $blog_query = new WP_Query($args);
        
        if ($blog_query->have_posts()) : ?>
            <div class="blog2-posts-grid">
                <?php while ($blog_query->have_posts()) : $blog_query->the_post(); ?>
                    <a href="<?php the_permalink(); ?>" class="blog2-card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="blog2-card-image">
                                <?php the_post_thumbnail('tema-novo-card'); ?>
                            </div>
                        <?php else : ?>
                            <div class="blog2-card-image">
                                <img src="<?php echo esc_url(TEMA_NOVO_URI . '/assets/images/mental-health.png'); ?>" alt="<?php the_title_attribute(); ?>">
                            </div>
                        <?php endif; ?>
                        
                        <div class="blog2-card-header">
                            <?php
                            $categories = get_the_category();
                            if (!empty($categories)) :
                            ?>
                                <span class="blog2-badge"><?php echo esc_html($categories[0]->name); ?></span>
                            <?php endif; ?>
                            <h2 class="blog2-card-title"><?php the_title(); ?></h2>
                        </div>
                        
                        <div class="blog2-card-content">
                            <p class="blog2-card-excerpt">
                                <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                            </p>
                        </div>
                        
                        <div class="blog2-card-footer">
                            <span><?php echo get_the_date(); ?></span>
                            <span>•</span>
                            <span><?php echo get_the_author(); ?></span>
                        </div>
                    </a>
                <?php endwhile; ?>
            </div>

            <!-- Pagination -->
            <div class="blog2-pagination">
                <?php
                echo paginate_links(array(
                    'total' => $blog_query->max_num_pages,
                    'current' => max(1, get_query_var('paged')),
                    'mid_size' => 2,
                    'prev_text' => __('← Anterior', 'tema-novo'),
                    'next_text' => __('Próximo →', 'tema-novo'),
                ));
                ?>
            </div>
        <?php else : ?>
            <div class="blog2-empty">
                <h2><?php esc_html_e('Nenhum post encontrado', 'tema-novo'); ?></h2>
                <p><?php esc_html_e('Ainda não há posts publicados. Volte em breve!', 'tema-novo'); ?></p>
                <a href="<?php echo esc_url(home_url('/')); ?>" style="display: inline-block; background: #0EA5E9; color: white; padding: 0.75rem 1.5rem; border-radius: 0.375rem; text-decoration: none; font-weight: 500;">
                    <?php esc_html_e('Voltar para Home', 'tema-novo'); ?>
                </a>
            </div>
        <?php endif;
        
        wp_reset_postdata();
        ?>
    </section>
</main>

<?php
get_footer();
?>
