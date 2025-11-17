<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tratamento de TDAH - Dr. Gabriel Lopes | Psiquiatra Vila Olímpia</title>
    <meta name="description" content="Avaliação completa e tratamento especializado para TDAH infantil e adulto com o Dr. Gabriel Lopes. Abordagem integrativa e humanizada na Vila Olímpia, SP.">
    <meta name="keywords" content="TDAH, déficit de atenção, hiperatividade, tratamento TDAH, TDAH infantil, TDAH adulto, psiquiatra TDAH, Dr. Gabriel Lopes">
    <link rel="canonical" href="https://drgabriellopes.com.br/tdah">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="Tratamento de TDAH - Dr. Gabriel Lopes | Psiquiatra Vila Olímpia">
    <meta property="og:description" content="Avaliação completa e tratamento especializado para TDAH infantil e adulto.">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Tratamento de TDAH - Dr. Gabriel Lopes">
    <meta name="twitter:description" content="Avaliação completa e tratamento especializado para TDAH infantil e adulto.">
    
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Estilos específicos da página TDAH */
        .breadcrumb {
            padding: 1.5rem 0;
            margin-top: 5rem;
            background: hsl(210, 20%, 96%);
        }
        
        .breadcrumb-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .breadcrumb-list {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            list-style: none;
            font-size: 0.875rem;
        }
        
        .breadcrumb-list a {
            color: hsl(210, 10%, 45%);
            text-decoration: none;
            transition: color 0.2s;
        }
        
        .breadcrumb-list a:hover {
            color: hsl(198, 92%, 36%);
        }
        
        .breadcrumb-separator {
            color: hsl(210, 10%, 45%);
        }
        
        .breadcrumb-current {
            color: hsl(210, 10%, 20%);
            font-weight: 500;
        }
        
        .tdah-hero {
            position: relative;
            min-height: 85vh;
            display: flex;
            align-items: center;
            overflow: hidden;
            background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));
        }
        
        .tdah-hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 6rem 1rem 3rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .tdah-hero-text h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: hsl(210, 10%, 20%);
            line-height: 1.2;
        }
        
        .tdah-hero-text .highlight {
            display: block;
            color: hsl(198, 92%, 36%);
            margin-top: 1rem;
        }
        
        .tdah-hero-text p {
            font-size: 1.125rem;
            color: hsl(210, 10%, 45%);
            margin-bottom: 2rem;
        }
        
        .tdah-hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .tdah-hero-image img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            box-shadow: 0 10px 30px -10px rgba(0, 153, 204, 0.2);
        }
        
        .section-blue {
            position: relative;
            padding: 4rem 0;
            overflow: hidden;
        }
        
        .section-blue-bg {
            position: absolute;
            inset: 0;
            background-image: url('images/consultori-psiquiatria2.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        
        .section-blue-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9));
        }
        
        .section-blue-content {
            position: relative;
            z-index: 10;
        }
        
        .section-blue h2 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: white;
            text-align: center;
        }
        
        .section-blue .divider {
            width: 8rem;
            height: 0.375rem;
            background: linear-gradient(to right, rgba(103, 232, 249, 1), rgba(59, 130, 246, 1));
            margin: 0 auto 3rem;
            border-radius: 9999px;
            box-shadow: 0 0 40px rgba(103, 232, 249, 0.5);
        }
        
        .section-blue p {
            font-size: 1.125rem;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 1.5rem;
            line-height: 1.8;
        }
        
        .card-symptoms {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .card-symptom {
            background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1));
            padding: 2rem;
            border-radius: 1rem;
            border: 2px solid rgba(0, 153, 204, 0.2);
            transition: all 0.3s;
        }
        
        .card-symptom:hover {
            border-color: rgba(0, 153, 204, 0.4);
            box-shadow: 0 10px 30px -10px rgba(0, 153, 204, 0.3);
            transform: scale(1.02);
        }
        
        .card-symptom-icon {
            width: 4rem;
            height: 4rem;
            background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: white;
            font-size: 2rem;
        }
        
        .card-symptom h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
        }
        
        .symptom-list {
            list-style: none;
        }
        
        .symptom-list li {
            display: flex;
            align-items: start;
            gap: 0.75rem;
            margin-bottom: 1rem;
            color: hsl(210, 10%, 45%);
        }
        
        .symptom-list .dot {
            width: 0.5rem;
            height: 0.5rem;
            background: hsl(198, 92%, 36%);
            border-radius: 50%;
            margin-top: 0.5rem;
            flex-shrink: 0;
        }
        
        .treatment-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 3rem;
        }
        
        .treatment-card {
            padding: 1.5rem;
            background: linear-gradient(to bottom right, rgba(0, 153, 204, 0.1), rgba(255, 255, 255, 1));
            border-radius: 0.75rem;
            border: 2px solid rgba(0, 153, 204, 0.2);
            transition: all 0.3s;
        }
        
        .treatment-card:hover {
            border-color: rgba(0, 153, 204, 0.4);
        }
        
        .treatment-card-icon {
            width: 3rem;
            height: 3rem;
            background: rgba(0, 153, 204, 0.2);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            color: hsl(198, 92%, 36%);
            font-size: 1.5rem;
        }
        
        .treatment-card h3 {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 0.75rem;
        }
        
        .treatment-card p {
            color: hsl(210, 10%, 45%);
        }
        
        .info-box {
            background: linear-gradient(to right, rgba(0, 153, 204, 0.1), rgba(185, 223, 237, 0.1));
            padding: 2rem;
            border-radius: 1rem;
            border: 2px solid rgba(0, 153, 204, 0.2);
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .info-box p {
            font-size: 1.125rem;
            color: hsl(210, 10%, 20%);
        }
        
        .tdah-type-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .tdah-type-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            border: 2px solid rgba(0, 153, 204, 0.2);
        }
        
        .tdah-type-card h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: hsl(198, 92%, 36%);
        }
        
        .tdah-type-card p {
            color: hsl(210, 10%, 45%);
            line-height: 1.6;
        }
        
        .cta-test {
            background: linear-gradient(to bottom right, rgba(0, 153, 204, 0.05), rgba(185, 223, 237, 0.05));
            padding: 5rem 0;
        }
        
        .cta-test-content {
            max-width: 48rem;
            margin: 0 auto;
            text-align: center;
            padding: 0 1rem;
        }
        
        .cta-test-icon {
            width: 5rem;
            height: 5rem;
            background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            color: white;
            font-size: 2.5rem;
        }
        
        .section-tdah-types {
            background: #087daf;
            padding: 5rem 0;
        }
        
        @media (max-width: 768px) {
            .tdah-hero-content {
                grid-template-columns: 1fr;
                padding: 4rem 1rem 2rem;
            }
            
            .tdah-hero-image {
                display: none;
            }
            
            .tdah-hero-text h1 {
                font-size: 1.75rem;
            }
            
            .card-symptoms,
            .treatment-cards,
            .tdah-type-cards {
                grid-template-columns: 1fr;
            }
            
            .section-blue-bg {
                display: none;
            }
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <!-- Breadcrumbs -->
    <nav class="breadcrumb">
        <div class="breadcrumb-container">
            <ul class="breadcrumb-list">
                <li><a href="/">Início</a></li>
                <li><span class="breadcrumb-separator">/</span></li>
                <li><a href="/especialidades">Especialidades</a></li>
                <li><span class="breadcrumb-separator">/</span></li>
                <li><span class="breadcrumb-current">TDAH</span></li>
            </ul>
        </div>
    </nav>
    
    <main>
        <!-- Hero Section -->
        <section class="tdah-hero">
            <div class="tdah-hero-content">
                <div class="tdah-hero-text">
                    <h1>
                        Dificuldade de Foco, Impulsividade ou Esquecimento Constante?
                        <span class="highlight">Você pode estar convivendo com TDAH.</span>
                    </h1>
                    <p>
                        Avaliação completa e tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e TDAH infantil e adulto.
                    </p>
                    <div class="tdah-hero-buttons">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                            Agende sua consulta
                        </a>
                        <a href="/teste-tdah" class="btn btn-outline btn-lg">
                            Faça o teste de TDAH gratuito
                        </a>
                    </div>
                </div>
                <div class="tdah-hero-image">
                    <img src="images/dr-gabriel.png" alt="Dr. Gabriel Lopes - Psiquiatra especialista em TDAH">
                </div>
            </div>
        </section>

        <!-- O que é o TDAH -->
        <section class="section-blue">
            <div class="section-blue-bg"></div>
            <div class="section-blue-overlay"></div>
            <div class="container section-blue-content">
                <h2>O que é o TDAH?</h2>
                <div class="divider"></div>
                <div style="max-width: 80rem; margin: 0 auto;">
                    <p>
                        O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma condição neurobiológica crônica que afeta a capacidade de manter o foco, controlar impulsos e regular o nível de atividade.
                    </p>
                    <p>
                        Embora muitas vezes seja identificado na infância, o TDAH pode persistir durante toda a vida, interferindo no desempenho acadêmico, profissional e nas relações pessoais.
                    </p>
                    <p>
                        Com diagnóstico preciso e tratamento adequado, é possível gerenciar os sintomas e alcançar melhor qualidade de vida e bem-estar emocional.
                    </p>
                    <div style="background: rgba(0, 153, 204, 0.1); border-left: 4px solid white; padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-top: 2rem;">
                        <p style="color: white; font-weight: 500; margin: 0;">
                            👉 Cada paciente é único — por isso o diagnóstico deve ser sempre individualizado e conduzido por um médico especialista.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sintomas do TDAH -->
        <section class="py-20 bg-background">
            <div class="container">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold mb-4">
                            Sintomas do <span style="color: hsl(198, 92%, 36%);">TDAH</span>
                        </h2>
                        <div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                    </div>

                    <div class="card-symptoms">
                        <!-- Em crianças -->
                        <div class="card-symptom">
                            <div class="card-symptom-icon">👦</div>
                            <h3>🧒 Em crianças</h3>
                            <ul class="symptom-list">
                                <li>
                                    <div class="dot"></div>
                                    <span>Dificuldade de manter atenção em atividades escolares ou brincadeiras</span>
                                </li>
                                <li>
                                    <div class="dot"></div>
                                    <span>Inquietude e agitação constantes</span>
                                </li>
                                <li>
                                    <div class="dot"></div>
                                    <span>Impaciência e dificuldade em esperar</span>
                                </li>
                                <li>
                                    <div class="dot"></div>
                                    <span>Dificuldade de concluir tarefas</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Em adultos -->
                        <div class="card-symptom">
                            <div class="card-symptom-icon">🧠</div>
                            <h3>👩‍💼 Em adultos</h3>
                            <ul class="symptom-list">
                                <li>
                                    <div class="dot"></div>
                                    <span>Falta de foco em tarefas diárias e profissionais</span>
                                </li>
                                <li>
                                    <div class="dot"></div>
                                    <span>Esquecimentos e perda de prazos</span>
                                </li>
                                <li>
                                    <div class="dot"></div>
                                    <span>Procrastinação</span>
                                </li>
                                <li>
                                    <div class="dot"></div>
                                    <span>Impulsividade e oscilações de humor</span>
                                </li>
                                <li>
                                    <div class="dot"></div>
                                    <span>Sensação de sobrecarga mental e dificuldade de organização</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="text-center" style="margin-top: 3rem;">
                        <a href="/teste-tdah" class="btn btn-outline btn-lg">
                            🔹 Identificou-se com esses sintomas? Faça o teste de TDAH online
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Diagnóstico do TDAH -->
        <section class="py-20 bg-gradient-to-b from-secondary/10 to-background" style="padding: 5rem 0; background: linear-gradient(to bottom, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1));">
            <div class="container">
                <div style="max-width: 64rem; margin: 0 auto;">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-center" style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem; text-align: center;">
                        Diagnóstico do <span style="color: hsl(198, 92%, 36%);">TDAH</span>
                    </h2>
                    <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto 3rem;"></div>

                    <div style="margin-bottom: 2rem;">
                        <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); line-height: 1.6; margin-bottom: 1.5rem;">
                            O diagnóstico do TDAH é essencialmente clínico e deve ser feito por um médico especialista, como um psiquiatra. 
                            O processo envolve:
                        </p>
                        <ul style="list-style: none; padding: 0;">
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                <span style="color: hsl(198, 92%, 36%); font-size: 1.5rem;">✅</span>
                                <span>Avaliação detalhada dos sintomas e histórico médico</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                <span style="color: hsl(198, 92%, 36%); font-size: 1.5rem;">✅</span>
                                <span>Questionários padronizados aplicados ao paciente e familiares</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                <span style="color: hsl(198, 92%, 36%); font-size: 1.5rem;">✅</span>
                                <span>Exclusão de outras condições médicas ou psiquiátricas</span>
                            </li>
                            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1rem; color: hsl(210, 10%, 45%);">
                                <span style="color: hsl(198, 92%, 36%); font-size: 1.5rem;">✅</span>
                                <span>Avaliação neuropsicológica (quando indicada)</span>
                            </li>
                        </ul>
                    </div>

                    <div style="background: rgba(0, 153, 204, 0.05); border-left: 4px solid hsl(198, 92%, 36%); padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0;">
                        <p style="color: hsl(210, 10%, 20%); font-weight: 500;">
                            ⚠️ É importante ressaltar que nenhum exame laboratorial ou de imagem substitui a avaliação clínica.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Teste gratuito de TDAH -->
        <section class="cta-test">
            <div class="cta-test-content">
                <div class="cta-test-icon">🧠</div>
                <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem;">
                    Faça o teste gratuito de TDAH
                </h2>
                <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 1.5rem;">
                    Nosso teste online ajuda você a identificar sinais que podem indicar o transtorno.
                    Em poucos minutos, você descobre se é recomendado buscar uma avaliação médica detalhada.
                </p>
                <p style="font-size: 0.875rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem; font-style: italic;">
                    🧩 O teste não substitui o diagnóstico profissional, mas é um ótimo ponto de partida.
                </p>
                <a href="/teste-tdah" class="btn btn-primary btn-lg">
                    🔹 Iniciar teste gratuito
                </a>
            </div>
        </section>

        <!-- Tratamento do TDAH -->
        <section class="py-20 bg-background">
            <div class="container">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div class="text-center mb-16">
                        <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                            Tratamento especializado e <span style="color: hsl(198, 92%, 36%);">humanizado</span>
                        </h2>
                        <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
                    </div>

                    <div class="treatment-cards">
                        <div class="treatment-card">
                            <div class="treatment-card-icon">❤️</div>
                            <h3>Medicação</h3>
                            <p>
                                Uso de psicoestimulantes ou antidepressivos conforme orientação médica.
                            </p>
                        </div>

                        <div class="treatment-card">
                            <div class="treatment-card-icon">🧠</div>
                            <h3>Psicoterapia</h3>
                            <p>
                                Apoio psicológico para controle da impulsividade e foco.
                            </p>
                        </div>

                        <div class="treatment-card">
                            <div class="treatment-card-icon">👥</div>
                            <h3>Abordagem integrativa</h3>
                            <p>
                                Terapias complementares como acupuntura e orientação nutricional.
                            </p>
                        </div>
                    </div>

                    <div class="info-box">
                        <p>
                            <strong>No Instituto Sanapta, o cuidado é integral</strong> — com equipe multidisciplinar que une 
                            medicina tradicional e práticas complementares.
                        </p>
                    </div>

                    <div class="text-center">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                            🔹 Agende sua consulta com o Dr. Gabriel Lopes
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- TDAH Infantil e TDAH Adulto -->
        <section class="section-tdah-types">
            <div class="container">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div class="tdah-type-cards">
                        <div class="tdah-type-card">
                            <h3>👦 TDAH Infantil</h3>
                            <p>
                                O diagnóstico precoce reduz significativamente os impactos do transtorno na vida adulta.
                                Pais e educadores devem ficar atentos aos sinais de hiperatividade, desatenção e dificuldades escolares.
                            </p>
                        </div>

                        <div class="tdah-type-card">
                            <h3>👩 TDAH em Adultos</h3>
                            <p>
                                Mesmo surgindo na infância, o TDAH pode continuar na vida adulta, prejudicando relações, 
                                produtividade e autoestima. O tratamento adequado ajuda a retomar o controle e o equilíbrio emocional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final -->
        <section style="padding: 5rem 0; background: linear-gradient(to bottom right, rgba(0, 153, 204, 0.1), rgba(185, 223, 237, 0.05), rgba(255, 255, 255, 1));">
            <div class="container">
                <div style="max-width: 48rem; margin: 0 auto; text-align: center; padding: 0 1rem;">
                    <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem;">
                        Dê o primeiro passo para cuidar da sua <span style="color: hsl(198, 92%, 36%);">saúde mental</span>
                    </h2>
                    <p style="font-size: 1.25rem; color: hsl(210, 10%, 45%); margin-bottom: 2.5rem;">
                        O tratamento do TDAH pode transformar sua rotina, trazendo mais foco, equilíbrio e qualidade de vida.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px; margin: 0 auto;">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                            🔹 Agende sua consulta
                        </a>
                        <a href="/teste-tdah" class="btn btn-outline btn-lg">
                            🔹 Faça o teste gratuito de TDAH
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <?php include 'includes/footer.php'; ?>
    
    <!-- WhatsApp Button -->
    <a href="https://wa.me/5511941543929" class="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
        </svg>
    </a>
</body>
</html>
