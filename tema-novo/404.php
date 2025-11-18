<?php
/**
 * 404 Error Page Template
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="primary" class="site-main">
    <section class="error-404 not-found" style="min-height: 70vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 8rem 1rem 4rem;">
        <div class="container" style="max-width: 600px;">
            <header class="page-header" style="margin-bottom: 2rem;">
                <h1 class="page-title" style="font-size: 6rem; color: hsl(var(--primary)); font-weight: 700; margin-bottom: 1rem;">404</h1>
                <p style="font-size: 1.5rem; color: hsl(var(--foreground)); margin-bottom: 2rem;">
                    <?php esc_html_e( 'Ops! Página não encontrada.', 'tema-novo' ); ?>
                </p>
            </header>

            <div class="page-content">
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                    <?php esc_html_e( 'Parece que esta página não existe. Que tal tentar uma das opções abaixo?', 'tema-novo' ); ?>
                </p>

                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary btn-lg">
                        <?php esc_html_e( 'Voltar para Home', 'tema-novo' ); ?>
                    </a>
                    <a href="<?php echo esc_url( home_url( '/contato' ) ); ?>" class="btn btn-outline btn-lg">
                        <?php esc_html_e( 'Entre em Contato', 'tema-novo' ); ?>
                    </a>
                </div>

                <?php get_search_form(); ?>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
