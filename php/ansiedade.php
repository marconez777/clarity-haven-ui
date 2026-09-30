<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tratamento de Ansiedade - Dr. Gabriel Lopes | Psiquiatra Vila Clementino</title>
    <meta name="description" content="Tratamento especializado para transtornos de ansiedade com o Dr. Gabriel Lopes. Abordagem humanizada para uma vida com mais tranquilidade na Vila Clementino, SP.">
    <meta name="keywords" content="ansiedade, transtorno de ansiedade, tratamento para ansiedade, psiquiatra para ansiedade, TAG, pânico, ansiedade social, Dr. Gabriel Lopes">
    <link rel="canonical" href="https://drgabriellopes.com.br/ansiedade">
    
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="Tratamento de Ansiedade - Dr. Gabriel Lopes | Psiquiatra Vila Clementino">
    <meta property="og:description" content="Tratamento especializado para transtornos de ansiedade com abordagem humanizada para uma vida com mais tranquilidade.">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Tratamento de Ansiedade - Dr. Gabriel Lopes">
    <meta name="twitter:description" content="Tratamento especializado para transtornos de ansiedade com abordagem humanizada para uma vida com mais tranquilidade.">
    
    <link rel="stylesheet" href="styles.css">
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
</head>
<body>
    <?php 
    include 'includes/header.php';
    include 'components/breadcrumbs.php';
    
    render_breadcrumbs([
        ['label' => 'Especialidades', 'href' => 'especialidades.php'],
        ['label' => 'Ansiedade', 'href' => '#']
    ]);
    ?>
    
    <main>
        <!-- Hero Section -->
        <section style="position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
            <div class="container" style="margin: 0 auto; padding: 6rem 1rem 3rem; max-width: 1200px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 72rem; margin: 0 auto;">
                    <div>
                        <h1 style="font-size: 2.25rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%); line-height: 1.2;">
                            Sente angústia constante, medo ou preocupação em excesso?
                            <span style="display: block; color: hsl(198, 92%, 36%); margin-top: 1rem;">Você pode estar convivendo com um transtorno de ansiedade.</span>
                        </h1>
                        <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem;">
                            Tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e transtornos de ansiedade.
                        </p>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg" style="text-align: center;">
                                Agende sua consulta
                            </a>
                            <a href="#" class="btn btn-outline btn-lg" style="text-align: center;">
                                Faça o teste de ansiedade gratuito
                            </a>
                        </div>
                    </div>
                    <div class="hidden-mobile">
                        <img src="images/dr-gabriel.png" alt="Dr. Gabriel Lopes - Psiquiatra especialista em Ansiedade" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                    </div>
                </div>
            </div>
        </section>

        <!-- O que é a Ansiedade -->
        <section style="position: relative; padding: 4rem 0; overflow: hidden;">
            <div class="hidden-mobile" style="position: absolute; inset: 0; background-image: url('images/consultori-psiquiatria2.jpg'); background-size: cover; background-position: center; background-attachment: fixed;"></div>
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9));"></div>
            
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem; position: relative; z-index: 10;">
                <div style="max-width: 80rem; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem; color: white; line-height: 1.2;">
                            O que é a Ansiedade?
                        </h2>
                        <div style="width: 8rem; height: 0.375rem; background: linear-gradient(to right, #22d3ee, #3b82f6); margin: 0 auto; border-radius: 9999px; box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);"></div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); padding: 2.5rem 3rem; border-radius: 1.5rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.2);">
                        <p style="font-size: 1.125rem; color: hsl(210, 10%, 20%); line-height: 1.75; text-align: center;">
                            A ansiedade é uma resposta natural do corpo a situações de estresse ou risco. 
                            Todos sentimos ansiedade em algum momento — ela nos prepara para agir e enfrentar desafios. 
                            No entanto, quando o medo, a apreensão e a tensão passam a ser constantes e desproporcionais, afetando a qualidade de vida, estamos diante de um transtorno de ansiedade, que requer acompanhamento médico especializado.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Causas e Fatores de Risco -->
        <section style="padding: 5rem 0; background: linear-gradient(to bottom, hsl(0, 0%, 100%), rgba(185, 223, 237, 0.1));">
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
                <div style="max-width: 80rem; margin: 0 auto;">
                    <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem; text-align: center;">
                        Causas e Fatores de Risco
                    </h2>
                    <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
                        A ansiedade pode ter origens multifatoriais, envolvendo aspectos genéticos, biológicos e ambientais. Entre os fatores mais comuns estão:
                    </p>

                    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
                        <div style="display: flex; align-items: start; gap: 1rem; padding: 1.5rem; background: hsl(0, 0%, 100%); border-radius: 0.75rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: border-color 0.3s;">
                            <svg style="width: 1.75rem; height: 1.75rem; color: hsl(198, 92%, 36%); flex-shrink: 0; margin-top: 0.25rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span style="color: hsl(210, 10%, 20%); font-size: 1.125rem;">Predisposição genética (histórico familiar)</span>
                        </div>
                        <div style="display: flex; align-items: start; gap: 1rem; padding: 1.5rem; background: hsl(0, 0%, 100%); border-radius: 0.75rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: border-color 0.3s;">
                            <svg style="width: 1.75rem; height: 1.75rem; color: hsl(198, 92%, 36%); flex-shrink: 0; margin-top: 0.25rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span style="color: hsl(210, 10%, 20%); font-size: 1.125rem;">Experiências traumáticas ou situações de estresse intenso</span>
                        </div>
                        <div style="display: flex; align-items: start; gap: 1rem; padding: 1.5rem; background: hsl(0, 0%, 100%); border-radius: 0.75rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: border-color 0.3s;">
                            <svg style="width: 1.75rem; height: 1.75rem; color: hsl(198, 92%, 36%); flex-shrink: 0; margin-top: 0.25rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span style="color: hsl(210, 10%, 20%); font-size: 1.125rem;">Uso de substâncias como álcool, cafeína e estimulantes</span>
                        </div>
                        <div style="display: flex; align-items: start; gap: 1rem; padding: 1.5rem; background: hsl(0, 0%, 100%); border-radius: 0.75rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: border-color 0.3s;">
                            <svg style="width: 1.75rem; height: 1.75rem; color: hsl(198, 92%, 36%); flex-shrink: 0; margin-top: 0.25rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span style="color: hsl(210, 10%, 20%); font-size: 1.125rem;">Desequilíbrios hormonais e doenças cardíacas ou respiratórias</span>
                        </div>
                        <div style="display: flex; align-items: start; gap: 1rem; padding: 1.5rem; background: hsl(0, 0%, 100%); border-radius: 0.75rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: border-color 0.3s;">
                            <svg style="width: 1.75rem; height: 1.75rem; color: hsl(198, 92%, 36%); flex-shrink: 0; margin-top: 0.25rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span style="color: hsl(210, 10%, 20%); font-size: 1.125rem;">Personalidade mais sensível a críticas e mudanças</span>
                        </div>
                    </div>

                    <div style="background: rgba(0, 153, 204, 0.05); border-left: 4px solid hsl(198, 92%, 36%); padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0;">
                        <p style="color: hsl(210, 10%, 20%); font-weight: 500; margin: 0;">
                            👉 Cada pessoa manifesta a ansiedade de forma diferente — o diagnóstico individual é essencial.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tipos de Transtornos de Ansiedade -->
        <section style="padding: 5rem 0; background: white;">
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                            Tipos de Transtornos de <span style="color: hsl(198, 92%, 36%);">Ansiedade</span>
                        </h2>
                        <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <!-- TAG -->
                        <div style="padding: 2rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: all 0.3s; cursor: pointer;">
                            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%);">Transtorno de Ansiedade Generalizada (TAG)</h3>
                            <p style="color: hsl(210, 10%, 45%);">preocupação intensa e persistente em diversas áreas da vida.</p>
                        </div>
                        
                        <!-- Transtorno de Pânico -->
                        <div style="padding: 2rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1)); border-radius: 1rem; border: 2px solid rgba(185, 223, 237, 0.2); transition: all 0.3s; cursor: pointer;">
                            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%);">Transtorno de Pânico</h3>
                            <p style="color: hsl(210, 10%, 45%);">crises súbitas de medo extremo com sintomas físicos intensos.</p>
                        </div>

                        <!-- Ansiedade Social -->
                        <div style="padding: 2rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: all 0.3s; cursor: pointer;">
                            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%);">Ansiedade Social</h3>
                            <p style="color: hsl(210, 10%, 45%);">medo excessivo de interações ou situações sociais.</p>
                        </div>

                        <!-- Agorafobia -->
                        <div style="padding: 2rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1)); border-radius: 1rem; border: 2px solid rgba(185, 223, 237, 0.2); transition: all 0.3s; cursor: pointer;">
                            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%);">Agorafobia</h3>
                            <p style="color: hsl(210, 10%, 45%);">medo de locais públicos ou situações em que a pessoa se sinta "presa".</p>
                        </div>

                        <!-- TEPT -->
                        <div style="padding: 2rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: all 0.3s; cursor: pointer;">
                            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%);">Transtorno de Estresse Pós-Traumático (TEPT)</h3>
                            <p style="color: hsl(210, 10%, 45%);">ansiedade após experiências traumáticas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sintomas da Ansiedade -->
        <section style="padding: 5rem 0; background: white;">
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                            Sintomas da <span style="color: hsl(198, 92%, 36%);">Ansiedade</span>
                        </h2>
                        <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                    </div>

                    <div class="symptoms-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-bottom: 3rem;">
                        <!-- Sintomas físicos -->
                        <div style="padding: 2rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: all 0.3s;">
                            <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                                <svg style="width: 2rem; height: 2rem; color: white;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%);">🩺 Sintomas físicos</h3>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(198, 92%, 36%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Palpitações e falta de ar</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(198, 92%, 36%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Tensão muscular, tremores e sudorese</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(198, 92%, 36%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Tontura e sensação de desmaio</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(198, 92%, 36%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Dores no peito, de cabeça e no estômago</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(198, 92%, 36%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Alterações no sono e no apetite</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Sintomas psicológicos -->
                        <div style="padding: 2rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1)); border-radius: 1rem; border: 2px solid rgba(185, 223, 237, 0.2); transition: all 0.3s;">
                            <div style="width: 4rem; height: 4rem; background: linear-gradient(to bottom right, hsl(185, 58%, 58%), hsl(198, 92%, 36%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                                <svg style="width: 2rem; height: 2rem; color: white;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                                    <path d="M12 6v6l4 2"></path>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; color: hsl(210, 10%, 20%);">💭 Sintomas psicológicos</h3>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(185, 58%, 58%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Preocupação excessiva e medo constante</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(185, 58%, 58%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Irritabilidade e impaciência</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(185, 58%, 58%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Sensação de perda de controle</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(185, 58%, 58%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Pensamentos obsessivos</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 0.75rem; color: hsl(210, 10%, 45%);">
                                    <span style="width: 0.5rem; height: 0.5rem; background: hsl(185, 58%, 58%); border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></span>
                                    <span>Dificuldade de concentração e relaxamento</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style="text-align: center;">
                        <a href="#" class="btn btn-outline btn-lg" style="display: inline-block;">
                            🔹 Identificou-se com esses sintomas? Faça o teste gratuito de ansiedade
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Diagnóstico da Ansiedade -->
        <section style="padding: 5rem 0; background: linear-gradient(to bottom, rgba(185, 223, 237, 0.1), hsl(0, 0%, 100%));">
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
                <div style="max-width: 64rem; margin: 0 auto;">
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem; text-align: center;">
                        Diagnóstico da <span style="color: hsl(198, 92%, 36%);">Ansiedade</span>
                    </h2>
                    <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto 3rem;"></div>

                    <div style="margin-bottom: 2rem;">
                        <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); line-height: 1.75;">
                            O diagnóstico é clínico e deve ser realizado por um médico psiquiatra.
                            Durante a consulta, o profissional avalia sintomas físicos e emocionais, sua frequência e intensidade, além de investigar possíveis condições associadas, como depressão ou transtornos do sono.
                        </p>
                    </div>

                    <div style="background: linear-gradient(to right, rgba(0, 153, 204, 0.1), rgba(185, 223, 237, 0.1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.3);">
                        <div style="display: flex; align-items: start; gap: 1rem;">
                            <svg style="width: 2rem; height: 2rem; color: hsl(198, 92%, 36%); flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <p style="font-size: 1.125rem; font-weight: 500; color: hsl(210, 10%, 20%); margin: 0;">
                                👉 Um diagnóstico preciso é o primeiro passo para o tratamento eficaz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Teste de Ansiedade -->
        <section style="padding: 5rem 0; background: linear-gradient(to bottom right, rgba(0, 153, 204, 0.05), rgba(185, 223, 237, 0.05));">
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
                <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
                    <div style="width: 5rem; height: 5rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: white; font-size: 2.5rem;">
                        🧠
                    </div>
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem;">
                        Faça o teste gratuito de ansiedade
                    </h2>
                    <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 1.5rem;">
                        Nosso teste online ajuda a identificar sinais que podem indicar um transtorno ansioso.
                        Em poucos minutos, você saberá se é recomendado buscar uma avaliação médica detalhada.
                    </p>
                    <p style="font-size: 0.875rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem; font-style: italic;">
                        🧩 O teste não substitui o diagnóstico profissional, mas é um excelente ponto de partida para o autocuidado.
                    </p>
                    <a href="#" class="btn btn-primary btn-lg">
                        🔹 Iniciar teste gratuito
                    </a>
                </div>
            </div>
        </section>

        <!-- Tratamento da Ansiedade -->
        <section style="padding: 5rem 0; background: white;">
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
                <div style="max-width: 80rem; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                            Tratamento da <span style="color: hsl(198, 92%, 36%);">Ansiedade</span>
                        </h2>
                        <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                    </div>

                    <div class="treatment-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem;">
                        <div style="padding: 1.5rem; background: linear-gradient(to bottom right, rgba(0, 153, 204, 0.1), rgba(255, 255, 255, 1)); border-radius: 0.75rem; border: 2px solid rgba(0, 153, 204, 0.2); transition: all 0.3s;">
                            <div style="width: 3rem; height: 3rem; background: rgba(0, 153, 204, 0.2); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                                <svg style="width: 1.5rem; height: 1.5rem; color: hsl(198, 92%, 36%);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; color: hsl(210, 10%, 20%);">Medicamentos</h3>
                            <p style="color: hsl(210, 10%, 45%);">Ansiolíticos ou antidepressivos, prescritos conforme o caso.</p>
                        </div>

                        <div style="padding: 1.5rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1)); border-radius: 0.75rem; border: 2px solid rgba(185, 223, 237, 0.2); transition: all 0.3s;">
                            <div style="width: 3rem; height: 3rem; background: rgba(185, 223, 237, 0.2); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                                <svg style="width: 1.5rem; height: 1.5rem; color: hsl(185, 58%, 58%);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                                    <path d="M12 6v6l4 2"></path>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; color: hsl(210, 10%, 20%);">Psicoterapia</h3>
                            <p style="color: hsl(210, 10%, 45%);">Para controle de pensamentos e reeducação emocional.</p>
                        </div>

                        <div style="padding: 1.5rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); border-radius: 0.75rem; border: 2px solid rgba(185, 223, 237, 0.3); transition: all 0.3s;">
                            <div style="width: 3rem; height: 3rem; background: rgba(185, 223, 237, 0.3); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                                <svg style="width: 1.5rem; height: 1.5rem; color: hsl(198, 92%, 36%);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.75rem; color: hsl(210, 10%, 20%);">Terapias complementares</h3>
                            <p style="color: hsl(210, 10%, 45%);">Acupuntura integrativa e práticas de relaxamento.</p>
                        </div>
                    </div>

                    <div style="background: linear-gradient(to right, rgba(0, 153, 204, 0.1), rgba(185, 223, 237, 0.1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 153, 204, 0.2); margin-bottom: 2rem;">
                        <p style="font-size: 1.125rem; color: hsl(210, 10%, 20%); text-align: center; margin: 0;">
                            <strong>No Instituto Sanapta, o tratamento é conduzido de forma integrada</strong>, unindo medicina tradicional e abordagens complementares para promover o equilíbrio físico e mental.
                        </p>
                    </div>

                    <div style="text-align: center;">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                            🔹 Agende sua consulta com o Dr. Gabriel Lopes
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final -->
        <section style="padding: 5rem 0; background: linear-gradient(to bottom right, rgba(0, 153, 204, 0.1), rgba(185, 223, 237, 0.05), hsl(0, 0%, 100%));">
            <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
                <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem;">
                        Você não precisa conviver com a ansiedade sozinho(a)
                    </h2>
                    <p style="font-size: 1.25rem; color: hsl(210, 10%, 45%); margin-bottom: 2.5rem;">
                        O tratamento certo pode transformar sua rotina e devolver sua tranquilidade e equilíbrio emocional.
                        Comece hoje mesmo o cuidado com sua saúde mental.
                    </p>
                    <div class="cta-buttons" style="display: flex; gap: 1rem; justify-content: center;">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                            🔹 Agende sua consulta
                        </a>
                        <a href="#" class="btn btn-outline btn-lg">
                            🔹 Faça o teste gratuito de ansiedade
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
    <?php include 'components/whatsapp-button.php'; ?>
</body>
</html>
