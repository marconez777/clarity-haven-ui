<?php
/**
 * Template Name: Ansiedade
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
                        Sente angústia constante, medo ou preocupação em excesso?
                        <span style="display: block; color: hsl(198, 92%, 36%); margin-top: 1rem;">Você pode estar convivendo com um transtorno de ansiedade.</span>
                    </h1>
                    <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem;">
                        Tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e transtornos de ansiedade.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;" class="cta-buttons">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg" style="text-align: center;">
                            Agende sua consulta
                        </a>
                        <a href="#" class="btn btn-outline btn-lg" style="text-align: center;">
                            Faça o teste de ansiedade gratuito
                        </a>
                    </div>
                </div>
                <div class="hidden-mobile">
                    <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/dr-gabriel.png' ); ?>" alt="Dr. Gabriel Lopes - Psiquiatra especialista em Ansiedade" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                </div>
            </div>
        </div>
    </section>

    <!-- O que é Ansiedade -->
    <section style="position: relative; padding: 4rem 0; overflow: hidden;">
        <div class="hidden-mobile" style="position: absolute; inset: 0; background-image: url('<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/consultori-psiquiatria2.jpg' ); ?>'); background-size: cover; background-position: center; background-attachment: fixed;"></div>
        <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9));"></div>
        
        <div class="container" style="position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 80rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 3.75rem; font-weight: bold; margin-bottom: 2rem; color: white; line-height: 1.2;">
                        O que é Ansiedade?
                    </h2>
                    <div style="width: 8rem; height: 0.375rem; background: linear-gradient(to right, #67e8f9, #3b82f6); margin: 0 auto; border-radius: 9999px; box-shadow: 0 0 40px rgba(103, 232, 249, 0.5);"></div>
                </div>
                
                <div style="max-width: 80rem; margin: 0 auto; color: white;">
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        A ansiedade é uma resposta natural do corpo ao estresse, mas quando se torna excessiva e interfere nas atividades diárias, pode indicar um transtorno de ansiedade.
                    </p>
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        Os transtornos de ansiedade são caracterizados por preocupação constante, medo intenso e sintomas físicos que prejudicam a qualidade de vida.
                    </p>
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        Com tratamento adequado, é possível controlar os sintomas e recuperar o bem-estar emocional.
                    </p>
                    
                    <div style="background: rgba(0, 153, 204, 0.1); border-left: 4px solid white; padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-top: 2rem;">
                        <p style="color: white; font-weight: 500; margin: 0;">
                            👉 O diagnóstico correto é fundamental para um tratamento eficaz. Procure sempre um profissional especializado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sintomas da Ansiedade -->
    <section style="padding: 5rem 0; background: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 72rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                        Sintomas da <span style="color: hsl(198, 92%, 36%);">Ansiedade</span>
                    </h2>
                    <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;" class="symptoms-grid">
                    <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2);">
                        <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: white; font-size: 2rem;">
                            🧠
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">Sintomas Psicológicos</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Preocupação excessiva</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Medo constante</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Pensamentos acelerados</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Dificuldade de concentração</span>
                            </li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2);">
                        <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: white; font-size: 2rem;">
                            💓
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">Sintomas Físicos</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Palpitações</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Tensão muscular</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Sudorese excessiva</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Problemas digestivos</span>
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
                        O tratamento da ansiedade é personalizado e pode incluir:
                    </p>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Psicoterapia:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Especialmente a Terapia Cognitivo-Comportamental (TCC)</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Medicação:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Ansiolíticos ou antidepressivos quando necessário</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Técnicas de Relaxamento:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Respiração, meditação e mindfulness</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Mudanças no Estilo de Vida:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Exercícios físicos, alimentação saudável e sono adequado</span>
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
                Pronto para recuperar sua tranquilidade?
            </h2>
            <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem; max-width: 42rem; margin-left: auto; margin-right: auto;">
                Agende uma consulta com o Dr. Gabriel Lopes e comece seu tratamento hoje.
            </p>
            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                Agende sua consulta agora
            </a>
        </div>
    </section>
</main>

<?php
get_footer();
