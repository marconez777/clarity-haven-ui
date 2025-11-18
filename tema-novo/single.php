<?php
/**
 * Single Post Template
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
.back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: transparent;
    border: none;
    color: hsl(var(--muted-foreground));
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;
    margin-bottom: 1.5rem;
}

.back-button:hover {
    color: hsl(var(--foreground));
}

.back-button svg {
    width: 1rem;
    height: 1rem;
}

.post-container {
    max-width: 56rem;
    margin: 0 auto;
    padding: 0 1rem;
}

.post-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.post-badge {
    display: inline-block;
    background: hsl(var(--primary));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
}

.post-meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: hsl(var(--muted-foreground));
}

.post-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: hsl(var(--foreground));
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.post-featured-image {
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.post-content {
    font-size: 1.125rem;
    line-height: 1.8;
    color: hsl(var(--foreground));
}

.post-content p {
    margin-bottom: 1.5rem;
}

.post-content h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: hsl(var(--foreground));
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.post-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: hsl(var(--foreground));
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}

.post-content ul,
.post-content ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
}

.post-content li {
    margin-bottom: 0.5rem;
}

.post-content blockquote {
    border-left: 4px solid hsl(var(--primary));
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: hsl(var(--muted-foreground));
}

.post-content a {
    color: hsl(var(--primary));
    text-decoration: underline;
}

.post-content a:hover {
    color: hsl(var(--accent));
}

.related-posts {
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: 1px solid hsl(var(--border));
}

.related-posts h2 {
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    color: hsl(var(--foreground));
}

.related-posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .related-posts-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.related-post-card {
    background: hsl(var(--card));
    border: 1px solid hsl(var(--border));
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-decoration: none;
    display: block;
    transition: all 0.3s;
}

.related-post-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.related-post-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: hsl(var(--foreground));
    margin-bottom: 0.5rem;
}

.related-post-card:hover .related-post-title {
    color: hsl(var(--primary));
}

.related-post-category {
    font-size: 0.875rem;
    color: hsl(var(--primary));
    font-weight: 500;
}

@media (max-width: 768px) {
    .post-title {
        font-size: 1.875rem;
    }
}
</style>

<main style="padding: 2rem 0 4rem;">
    <div class="post-container">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            
            <!-- Back Button -->
            <a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ); ?>" class="back-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Voltar para o blog
            </a>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <!-- Meta -->
                <div class="post-meta">
                    <?php
                    $categories = get_the_category();
                    if ( ! empty( $categories ) ) :
                    ?>
                        <span class="post-badge"><?php echo esc_html( $categories[0]->name ); ?></span>
                    <?php endif; ?>
                    
                    <span class="post-meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <?php echo get_the_date(); ?>
                    </span>
                    
                    <span class="post-meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <?php echo get_the_author(); ?>
                    </span>
                </div>

                <!-- Title -->
                <h1 class="post-title"><?php the_title(); ?></h1>

                <!-- Featured Image -->
                <?php if ( has_post_thumbnail() ) : ?>
                    <?php the_post_thumbnail( 'large', array( 'class' => 'post-featured-image' ) ); ?>
                <?php endif; ?>

                <!-- Content -->
                <div class="post-content">
                    <?php the_content(); ?>
                </div>

                <!-- Tags -->
                <?php if ( has_tag() ) : ?>
                    <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid hsl(var(--border));">
                        <?php the_tags( '<div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">', '', '</div>' ); ?>
                    </div>
                <?php endif; ?>
            </article>

            <?php
            // Related Posts
            $categories = get_the_category();
            if ( ! empty( $categories ) ) :
                $category_id = $categories[0]->term_id;
                $related_query = new WP_Query( array(
                    'cat'            => $category_id,
                    'post__not_in'   => array( get_the_ID() ),
                    'posts_per_page' => 3,
                    'orderby'        => 'rand',
                ) );

                if ( $related_query->have_posts() ) :
            ?>
                    <div class="related-posts">
                        <h2><?php esc_html_e( 'Posts Relacionados', 'tema-novo' ); ?></h2>
                        <div class="related-posts-grid">
                            <?php while ( $related_query->have_posts() ) : $related_query->the_post(); ?>
                                <a href="<?php the_permalink(); ?>" class="related-post-card">
                                    <?php
                                    $post_categories = get_the_category();
                                    if ( ! empty( $post_categories ) ) :
                                    ?>
                                        <p class="related-post-category"><?php echo esc_html( $post_categories[0]->name ); ?></p>
                                    <?php endif; ?>
                                    <h3 class="related-post-title"><?php the_title(); ?></h3>
                                </a>
                            <?php endwhile; ?>
                        </div>
                    </div>
            <?php
                    wp_reset_postdata();
                endif;
            endif;
            ?>

        <?php endwhile; endif; ?>
    </div>
</main>

<?php
get_footer();
