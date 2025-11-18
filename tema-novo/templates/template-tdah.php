<?php
/**
 * Template Name: TDAH
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
    
    [style*="grid-template-columns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
    }
}
</style>

<main>
    <!-- Hero Section -->
    <section style="position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
        <div class="container" style="margin: 0 auto; padding: 6rem 1rem 3rem; max-width: 1200px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 72rem; margin: 0 auto;">
                <div>
                    <h1 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%); line-height: 1.2;">
                        Dificuldade de Foco, Impulsividade ou Esquecimento Constante?
                        <span style="display: block; color: hsl(198, 92%, 36%); margin-top: 1rem;">Você pode estar convivendo com TDAH.</span>
                    </h1>
                    <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem;">
                        Avaliação completa e tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e TDAH infantil e adulto.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg" style="text-align: center;">
                            Agende sua consulta
                        </a>
                        <a href="<?php echo esc_url( home_url( '/teste-tdah' ) ); ?>" class="btn btn-outline btn-lg" style="text-align: center;">
                            Faça o teste de TDAH gratuito
                        </a>
                    </div>
                </div>
                <div class="hidden-mobile">
                    <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/dr-gabriel.png' ); ?>" alt="Dr. Gabriel Lopes - Psiquiatra especialista em TDAH" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                </div>
            </div>
        </div>
    </section>

    <!-- O que é o TDAH -->
    <section style="position: relative; padding: 4rem 0; overflow: hidden;">
        <div class="hidden-mobile" style="position: absolute; inset: 0; background-image: url('<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/consultori-psiquiatria2.jpg' ); ?>'); background-size: cover; background-position: center; background-attachment: fixed;"></div>
        <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9));"></div>
        
        <div class="container" style="position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 80rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 3.75rem; font-weight: bold; margin-bottom: 2rem; color: white; line-height: 1.2;">
                        O que é o TDAH?
                    </h2>
                    <div style="width: 8rem; height: 0.375rem; background: linear-gradient(to right, #67e8f9, #3b82f6); margin: 0 auto; border-radius: 9999px; box-shadow: 0 0 40px rgba(103, 232, 249, 0.5);"></div>
                </div>
                
                <div style="max-width: 80rem; margin: 0 auto; color: white;">
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma condição neurobiológica crônica que afeta a capacidade de manter o foco, controlar impulsos e regular o nível de atividade.
                    </p>
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        Embora muitas vezes seja identificado na infância, o TDAH pode persistir durante toda a vida, interferindo no desempenho acadêmico, profissional e nas relações pessoais.
                    </p>
                    <p style="font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.8;">
                        Com diagnóstico preciso e tratamento adequado, é possível gerenciar os sintomas e alcançar melhor qualidade de vida e bem-estar emocional.
                    </p>
                    
                    <div style="background: rgba(0, 153, 204, 0.1); border-left: 4px solid white; padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-top: 2rem;">
                        <p style="color: white; font-weight: 500; margin: 0;">
                            👉 Cada paciente é único — por isso o diagnóstico deve ser sempre individualizado e conduzido por um médico especialista.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sintomas do TDAH -->
    <section style="padding: 5rem 0; background: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="max-width: 72rem; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                        Sintomas do <span style="color: hsl(198, 92%, 36%);">TDAH</span>
                    </h2>
                    <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
                    <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: all 0.3s;">
                        <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: white; font-size: 2rem;">
                            👥
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">TDAH em Crianças</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Não consegue ficar parado</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Esquece facilmente as coisas</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Dificuldade de seguir instruções</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Distrai-se com facilidade</span>
                            </li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: all 0.3s;">
                        <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: white; font-size: 2rem;">
                            👤
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">TDAH em Adultos</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Dificuldade em manter foco</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Procrastinação frequente</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Dificuldade de organização</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 30%);">
                                <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.25rem;">→</span>
                                <span>Impulsividade</span>
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
                        O tratamento do TDAH é personalizado e pode incluir:
                    </p>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Medicação:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Medicamentos que ajudam a regular a atenção e o controle de impulsos</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Psicoterapia:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Acompanhamento psicológico para desenvolver estratégias de enfrentamento</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Orientação Familiar:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Apoio e educação para familiares compreenderem e ajudarem no tratamento</span>
                            </div>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem;">
                            <span style="color: hsl(198, 92%, 36%); font-weight: bold; font-size: 1.5rem;">→</span>
                            <div>
                                <strong style="color: hsl(210, 10%, 20%);">Mudanças no Estilo de Vida:</strong>
                                <span style="color: hsl(210, 10%, 30%);"> Exercícios, alimentação equilibrada e técnicas de organização</span>
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
                Pronto para dar o primeiro passo?
            </h2>
            <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem; max-width: 42rem; margin-left: auto; margin-right: auto;">
                Agende uma consulta com o Dr. Gabriel Lopes e receba o tratamento especializado que você merece.
            </p>
            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                Agende sua consulta agora
            </a>
        </div>
    </section>
</main>

<?php
get_footer();
