<?php
/**
 * Template Name: Modelo Local
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
@media (max-width: 768px) {
    .hidden-mobile {
        display: none !important;
    }
    
    .modelo-local-grid {
        grid-template-columns: 1fr !important;
    }
    
    .modelo-local-buttons {
        flex-direction: column !important;
    }
    
    .modelo-local-hero h1 {
        font-size: 1.875rem !important;
    }
    
    .modelo-local-hero .subtitle {
        font-size: 1.5rem !important;
    }
}
</style>

<main>
    <!-- Hero Section -->
    <section style="position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
        <div class="container" style="margin: 0 auto; padding: 6rem 1rem 3rem; max-width: 1200px;">
            <div class="modelo-local-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 72rem; margin: 0 auto;">
                <!-- Coluna de texto -->
                <div class="modelo-local-hero">
                    <h1 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(var(--foreground)); line-height: 1.2;">
                        Dificuldade de Foco, Impulsividade ou Esquecimento Constante?
                        <span class="subtitle" style="display: block; color: hsl(var(--primary)); margin-top: 1rem; font-size: 2rem;">Você pode estar convivendo com TDAH.</span>
                    </h1>
                    <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem; line-height: 1.6;">
                        Avaliação completa e tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e TDAH infantil e adulto.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <a href="https://wa.me/5511941543929" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg" style="width: 100%; text-align: center;">
                            Agende sua consulta
                        </a>
                        <a href="<?php echo esc_url( home_url( '/teste-tdah' ) ); ?>" class="btn btn-outline btn-lg" style="width: 100%; text-align: center;">
                            Faça o teste de TDAH gratuito
                        </a>
                    </div>
                </div>
                
                <!-- Coluna de imagem -->
                <div class="hidden-mobile">
                    <img 
                        src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/dr-gabriel.png' ); ?>" 
                        alt="Dr. Gabriel Lopes - Psiquiatra especialista em TDAH" 
                        style="width: 100%; height: auto; border-radius: 1rem; box-shadow: var(--shadow-soft);"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Seção Entenda o transtorno -->
    <section style="position: relative; padding: 4rem 0; overflow: hidden;">
        <div class="hidden-mobile" style="position: absolute; inset: 0; background-image: url('<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/consultori-psiquiatria2.jpg' ); ?>'); background-size: cover; background-position: center; background-attachment: fixed;"></div>
        <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9));"></div>
        
        <div class="container" style="position: relative; z-index: 10; margin: 0 auto; padding: 0 1rem; max-width: 1200px;">
            <div style="max-width: 80rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 2rem; color: white; line-height: 1.2;">
                        Entenda o transtorno do déficit de atenção com hiperatividade
                    </h2>
                    <div style="width: 8rem; height: 0.375rem; background: linear-gradient(to right, rgb(34, 211, 238), rgb(59, 130, 246)); margin: 0 auto; border-radius: 9999px; box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);"></div>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); padding: 2.5rem; border-radius: 1.5rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.2);">
                    <p style="font-size: 1.25rem; line-height: 1.8; color: hsl(var(--foreground)); margin-bottom: 1.5rem;">
                        O Transtorno de Déficit de Atenção com Hiperatividade (TDAH) é uma condição neurobiológica que afeta tanto crianças quanto adultos. Caracteriza-se por dificuldade de concentração, impulsividade e, em alguns casos, hiperatividade.
                    </p>
                    <p style="font-size: 1.25rem; line-height: 1.8; color: hsl(var(--foreground));">
                        Muitas vezes, o TDAH é subdiagnosticado ou confundido com outras condições. Um diagnóstico preciso e um tratamento adequado podem fazer toda a diferença na qualidade de vida.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Seção Por que o TDAH acontece -->
    <section style="padding: 5rem 0; background: linear-gradient(to bottom, hsl(var(--background)), rgba(185, 223, 237, 0.1));">
        <div class="container" style="margin: 0 auto; padding: 0 1rem; max-width: 1200px;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h2 style="font-size: 2.25rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                    Por que o TDAH acontece?
                </h2>
                <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); max-width: 48rem; margin: 0 auto;">
                    Embora não exista uma causa única para o TDAH, alguns fatores de risco são cientificamente reconhecidos:
                </p>
            </div>
            
            <div style="max-width: 48rem; margin: 0 auto;">
                <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
                    <!-- Fator 1 -->
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.75rem; border: 2px solid hsl(var(--border)); transition: all 0.3s ease;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--primary)); flex-shrink: 0; margin-top: 0.125rem;">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span style="font-size: 1.125rem; color: hsl(var(--foreground)); line-height: 1.6;">
                            Histórico familiar de TDAH
                        </span>
                    </div>
                    
                    <!-- Fator 2 -->
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.75rem; border: 2px solid hsl(var(--border)); transition: all 0.3s ease;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--primary)); flex-shrink: 0; margin-top: 0.125rem;">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span style="font-size: 1.125rem; color: hsl(var(--foreground)); line-height: 1.6;">
                            Nascimento com baixo peso
                        </span>
                    </div>
                    
                    <!-- Fator 3 -->
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.75rem; border: 2px solid hsl(var(--border)); transition: all 0.3s ease;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--primary)); flex-shrink: 0; margin-top: 0.125rem;">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span style="font-size: 1.125rem; color: hsl(var(--foreground)); line-height: 1.6;">
                            Exposição a toxinas como chumbo
                        </span>
                    </div>
                    
                    <!-- Fator 4 -->
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.75rem; border: 2px solid hsl(var(--border)); transition: all 0.3s ease;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--primary)); flex-shrink: 0; margin-top: 0.125rem;">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span style="font-size: 1.125rem; color: hsl(var(--foreground)); line-height: 1.6;">
                            Uso de cigarro e álcool durante a gestação
                        </span>
                    </div>
                    
                    <!-- Fator 5 -->
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; background: white; border-radius: 0.75rem; border: 2px solid hsl(var(--border)); transition: all 0.3s ease;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--primary)); flex-shrink: 0; margin-top: 0.125rem;">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span style="font-size: 1.125rem; color: hsl(var(--foreground)); line-height: 1.6;">
                            Experiências traumáticas na infância (negligência, abuso ou violência)
                        </span>
                    </div>
                </div>
                
                <!-- Box de destaque -->
                <div style="background: hsla(198, 92%, 36%, 0.05); border-left: 4px solid hsl(var(--primary)); padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-top: 2rem;">
                    <p style="font-size: 1.125rem; color: hsl(var(--foreground)); line-height: 1.6;">
                        <span style="font-size: 1.5rem; margin-right: 0.5rem;">👉</span>
                        <strong>É importante ressaltar que ter um ou mais desses fatores não significa que a pessoa desenvolverá TDAH.</strong> O diagnóstico deve ser feito por um profissional qualificado.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Seção Lorem Ipsum (Blog Content) -->
    <section style="padding: 5rem 0; background: hsl(var(--background));">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div class="blog-content" style="max-width: 56rem; margin: 0 auto;">
                <?php
                // Exibe o conteúdo editado no WordPress
                if ( have_posts() ) :
                    while ( have_posts() ) : the_post();
                        the_content();
                    endwhile;
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- Seção CTA Final -->
    <section style="padding: 5rem 0; background: linear-gradient(to bottom right, hsla(198, 92%, 36%, 0.1), hsla(185, 58%, 58%, 0.05), hsl(var(--background)));">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1.5rem; line-height: 1.2; color: hsl(var(--foreground));">
                    Dê o primeiro passo para cuidar da sua <span style="color: hsl(var(--primary));">saúde mental</span>
                </h2>
                <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); margin-bottom: 2.5rem; line-height: 1.6;">
                    O tratamento do TDAH pode transformar sua rotina, trazendo mais foco, equilíbrio e qualidade de vida.
                </p>
                <div class="modelo-local-buttons" style="display: flex; gap: 1rem; justify-content: center;">
                    <a href="https://wa.me/5511941543929" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg" style="min-width: 200px;">
                        🔹 Agende sua consulta
                    </a>
                    <a href="<?php echo esc_url( home_url( '/teste-tdah' ) ); ?>" class="btn btn-outline btn-lg" style="min-width: 200px;">
                        🔹 Faça o teste gratuito de TDAH
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
?>
