<?php
/**
 * Template Name: Blog (Lista de Posts)
 * Description: Exibe a lista de posts do blog
 */

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
        padding: 0 1.5rem 1.5rem;
    }

    .blog-card-excerpt {
        color: hsl(var(--muted-foreground));
        margin-bottom: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .blog-card-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.875rem;
        color: hsl(var(--muted-foreground));
    }

    .blog-card-meta-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    .blog-card-meta-item svg {
        width: 1rem;
        height: 1rem;
    }

    .empty-state {
        text-align: center;
        padding: 4rem 1rem;
        color: hsl(var(--muted-foreground));
    }

    /* Paginação */
    .pagination {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 3rem;
        padding: 0 2rem;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }

    .pagination .page-numbers {
        padding: 0.5rem 1rem;
        background: hsl(var(--card));
        border: 1px solid hsl(var(--border));
        border-radius: 0.375rem;
        color: hsl(var(--foreground));
        text-decoration: none;
        transition: all 0.2s;
    }

    .pagination .page-numbers:hover {
        background: hsl(var(--primary));
        color: white;
        border-color: hsl(var(--primary));
    }

    .pagination .page-numbers.current {
        background: hsl(var(--primary));
        color: white;
        border-color: hsl(var(--primary));
    }
</style>

<main class="main-content">
    <!-- Hero Section -->
    <section class="blog-hero">
        <div class="blog-hero-content">
            <h1>Blog</h1>
            <p>
                Artigos, insights e informações sobre saúde mental, bem-estar e qualidade de vida. 
                Conteúdo especializado para você cuidar melhor da sua mente.
            </p>
        </div>
    </section>

    <?php
    // Setup Custom Query
    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : ( ( get_query_var( 'page' ) ) ? get_query_var( 'page' ) : 1 );

    $args = array(
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => get_option('posts_per_page', 10),
        'paged'          => $paged
    );

    $blog_query = new WP_Query( $args );
    ?>

    <!-- Blog Posts Grid -->
    <section class="blog-posts-section">
        <?php if ( $blog_query->have_posts() ) : ?>
            <div class="blog-posts-grid">
                    <?php while ( $blog_query->have_posts() ) : $blog_query->the_post();
                        $categories = get_the_category();
                        $category_name = !empty($categories) ? esc_html($categories[0]->name) : 'Sem categoria';
                        
                        // Pegar excerpt limitado
                        $excerpt = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 20, '...');
                    ?>
                        <a href="<?php the_permalink(); ?>" class="blog-card">
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="blog-card-image">
                                    <?php the_post_thumbnail('medium_large'); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="blog-card-header">
                                <span class="blog-badge"><?php echo $category_name; ?></span>
                                <h2 class="blog-card-title"><?php the_title(); ?></h2>
                            </div>
                            
                            <div class="blog-card-content">
                                <p class="blog-card-excerpt"><?php echo esc_html($excerpt); ?></p>
                                <div class="blog-card-meta">
                                    <span class="blog-card-meta-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <?php echo get_the_date('d/m/Y'); ?>
                                    </span>
                                    <span class="blog-card-meta-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <?php the_author(); ?>
                                    </span>
                                </div>
                            </div>
                        </a>
                    <?php endwhile; ?>
                </div>

            <?php
            // Paginação
            $pagination_args = array(
                'mid_size'  => 2,
                'prev_text' => '← Anterior',
                'next_text' => 'Próxima →',
                'total'     => $blog_query->max_num_pages,
                'current'   => $paged
            );

            $pagination_links = paginate_links( $pagination_args );

            if ( $pagination_links ) {
                echo '<div class="pagination">';
                echo $pagination_links;
                echo '</div>';
            }

            wp_reset_postdata();
            ?>

        <?php else : ?>
            <div class="empty-state" style="max-width: 1200px; margin: 0 auto;">
                <p>Nenhum post publicado ainda.</p>
                <p style="margin-top: 1rem; font-size: 0.875rem;">Em breve teremos novos conteúdos sobre saúde mental.</p>
            </div>
        <?php endif; ?>
    </section>
</main>

<?php
get_template_part('components/whatsapp-button');
get_footer();
?>