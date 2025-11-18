<?php
/**
 * Template Name: Transtorno Bipolar
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
    
    .hero-grid,
    .symptoms-grid,
    .treatment-grid,
    .types-grid {
        grid-template-columns: 1fr !important;
    }
    
    .cta-buttons {
        flex-direction: column !important;
    }
}
</style>

<main>
    <!-- Hero Section -->
    <section style="position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
        <div class="container" style="margin: 0 auto; padding: 6rem 1rem 3rem; max-width: 1200px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 72rem; margin: 0 auto;" class="hero-grid">
                <div>
                    <h1 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%); line-height: 1.2;">
                        Oscilações intensas de humor, períodos de euforia seguidos por tristeza profunda?
                        <span style="display: block; color: hsl(198, 92%, 36%); margin-top: 1rem;">Você pode estar convivendo com o transtorno bipolar.</span>
                    </h1>
                    <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem;">
                        O Dr. Gabriel Lopes é psiquiatra especializado no diagnóstico e tratamento do transtorno bipolar, unindo ciência, empatia e acompanhamento personalizado.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;" class="cta-buttons">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg" style="text-align: center;">
                            Agende sua consulta
                        </a>
                        <a href="#" class="btn btn-outline btn-lg" style="text-align: center;">
                            Faça o teste de transtorno bipolar gratuito
                        </a>
                    </div>
                </div>
                <div class="hidden-mobile">
                    <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/dr-gabriel.png' ); ?>" alt="Dr. Gabriel Lopes - Psiquiatra especialista em Transtorno Bipolar" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                </div>
            </div>
        </div>
    </section>

    <!-- O que é Transtorno Bipolar -->
    <section style="position: relative; padding: 4rem 0; overflow: hidden;">
        <div class="hidden-mobile" style="position: absolute; inset: 0; background-image: url('<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/consultori-psiquiatria2.jpg' ); ?>'); background-size: cover; background-position: center; background-attachment: fixed;"></div>
        <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9));"></div>
        
        <div class="container" style="position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 80rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 3.75rem; font-weight: bold; margin-bottom: 2rem; color: white; line-height: 1.2;">
                        O que é Transtorno Bipolar?
                    </h2>
                    <div style="width: 8rem; height: 0.375rem; background: linear-gradient(to right, #67e8f9, #3b82f6); margin: 0 auto; border-radius: 9999px; box-shadow: 0 0 40px rgba(103, 232, 249, 0.5);"></div>
                </div>
                
                <div style="max-width: 80rem; margin: 0 auto; color: white;">
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        O transtorno bipolar é caracterizado por oscilações extremas de humor, alternando entre períodos de mania ou hipomania (estado de euforia elevada) e depressão.
                    </p>
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        Essas mudanças vão além das variações normais de humor e podem afetar significativamente o funcionamento diário, os relacionamentos e a qualidade de vida.
                    </p>
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        Com o diagnóstico correto e tratamento adequado, é possível estabilizar o humor e viver uma vida plena e equilibrada.
                    </p>
                    
                    <div style="background: rgba(0, 153, 204, 0.1); border-left: 4px solid white; padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-top: 2rem;">
                        <p style="color: white; font-weight: 500; margin: 0;">
                            👉 O transtorno bipolar requer acompanhamento médico especializado. Não interrompa o tratamento sem orientação profissional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sintomas -->
    <section style="padding: 5rem 0; background: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 72rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                        Sintomas do <span style="color: hsl(198, 92%, 36%);">Transtorno Bipolar</span>
                    </h2>
                    <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;" class="symptoms-grid">
                    <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2);">
                        <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: white; font-size: 2rem;">
                            📈
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">Episódios de Mania</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Euforia excessiva</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Aumento de energia</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Impulsividade extrema</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Diminuição da necessidade de sono</span>
                            </li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2);">
                        <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: white; font-size: 2rem;">
                            📉
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">Episódios Depressivos</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Tristeza profunda</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Perda de energia</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Desinteresse</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Alterações no sono e apetite</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tratamento -->
    <section style="padding: 5rem 0; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1));">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 72rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                        Como é o <span style="color: hsl(198, 92%, 36%);">Tratamento</span>
                    </h2>
                    <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                </div>

                <div style="background: white; padding: 3rem; border-radius: 1rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                    <p style="font-size: 1.125rem; color: hsl(210, 10%, 30%); margin-bottom: 1.5rem; line-height: 1.8;">
                        O tratamento do transtorno bipolar é contínuo e pode incluir:
                    </p>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Estabilizadores de Humor:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Medicamentos para controlar as oscilações</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Psicoterapia:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Terapia especializada e acompanhamento constante</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Psicoeducação:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Conhecimento sobre a condição para melhor manejo</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Suporte Familiar:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Envolvimento da família no tratamento</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section style="padding: 5rem 0; background: white; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">
                Busque equilíbrio e qualidade de vida
            </h2>
            <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem; max-width: 42rem; margin-left: auto; margin-right: auto;">
                Agende uma consulta com o Dr. Gabriel Lopes e receba o tratamento especializado.
            </p>
            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                Agende sua consulta agora
            </a>
        </div>
    </section>
</main>

<?php
get_footer();
