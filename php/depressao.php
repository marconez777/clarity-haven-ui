<?php
require_once 'components/breadcrumbs.php';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tratamento de Depressão - Dr. Gabriel Lopes | Psiquiatra Vila Olímpia</title>
    <meta name="description" content="Tratamento especializado para depressão com o Dr. Gabriel Lopes. Abordagem integrativa e humanizada na Vila Olímpia, SP.">
    <meta name="keywords" content="depressão, tratamento depressão, psiquiatra depressão, Dr. Gabriel Lopes">
    <link rel="canonical" href="https://drgabriellopes.com.br/depressao">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Tratamento de Depressão - Dr. Gabriel Lopes">
    <meta property="og:description" content="Tratamento especializado para depressão com o Dr. Gabriel Lopes. Abordagem integrativa e humanizada na Vila Olímpia, SP.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://drgabriellopes.com.br/depressao">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Tratamento de Depressão - Dr. Gabriel Lopes">
    <meta name="twitter:description" content="Tratamento especializado para depressão com o Dr. Gabriel Lopes. Abordagem integrativa e humanizada na Vila Olímpia, SP.">
    
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Hero Section */
        .hero-depressao {
            min-height: 85vh;
            display: flex;
            align-items: center;
            overflow: hidden;
            background: linear-gradient(135deg, hsl(var(--secondary) / 0.3), hsl(var(--background)));
            padding: 6rem 0 3rem;
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: center;
            max-width: 72rem;
            margin: 0 auto;
        }

        .hero-content h1 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: hsl(var(--foreground));
            line-height: 1.2;
        }

        .hero-content h1 .highlight {
            display: block;
            color: hsl(var(--primary));
            margin-top: 1rem;
        }

        .hero-content p {
            font-size: 1rem;
            color: hsl(var(--muted-foreground));
            margin-bottom: 1.5rem;
        }

        .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .hero-image {
            display: none;
        }

        .hero-image img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            box-shadow: var(--shadow-soft);
        }

        @media (min-width: 768px) {
            .hero-grid {
                grid-template-columns: 1fr 1fr;
                gap: 3rem;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .hero-content p {
                font-size: 1.25rem;
            }

            .hero-buttons {
                flex-direction: row;
                gap: 1rem;
            }

            .hero-image {
                display: block;
            }

            .hero-depressao {
                padding: 8rem 0 5rem;
            }
        }

        @media (min-width: 1024px) {
            .hero-content h1 {
                font-size: 3rem;
            }
        }

        /* Parallax Section - O que é Depressão */
        .parallax-section {
            position: relative;
            padding: 4rem 0;
            overflow: hidden;
        }

        .parallax-bg {
            position: absolute;
            inset: 0;
            background-image: url('images/consultori-psiquiatria2.jpg');
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            display: none;
        }

        .parallax-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9), rgba(8, 125, 175, 0.9));
        }

        .parallax-content {
            position: relative;
            z-index: 10;
            max-width: 80rem;
            margin: 0 auto;
        }

        .parallax-title {
            text-align: center;
            margin-bottom: 4rem;
        }

        .parallax-title h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: white;
            line-height: 1.2;
        }

        .parallax-title .title-bar {
            width: 6rem;
            height: 0.25rem;
            background: linear-gradient(90deg, #22d3ee, #3b82f6);
            margin: 0 auto;
        }

        .parallax-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            padding: 2.5rem;
            border-radius: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .parallax-card p {
            font-size: 1.125rem;
            color: hsl(var(--foreground));
            line-height: 1.6;
            text-align: center;
        }

        @media (min-width: 768px) {
            .parallax-section {
                padding: 8rem 0;
            }

            .parallax-bg {
                display: block;
            }

            .parallax-title h2 {
                font-size: 3.75rem;
            }

            .parallax-card {
                padding: 3rem;
            }

            .parallax-card p {
                font-size: 1.25rem;
            }
        }

        /* Causas e Fatores de Risco */
        .causas-section {
            padding: 5rem 0;
            background: linear-gradient(180deg, hsl(var(--background)), hsl(var(--secondary) / 0.1));
        }

        .causas-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 48rem;
            margin: 0 auto 2rem;
        }

        .causa-card {
            display: flex;
            align-items: start;
            gap: 1rem;
            padding: 1.5rem;
            background: hsl(var(--background));
            border-radius: 0.75rem;
            border: 2px solid hsl(var(--primary) / 0.2);
            transition: border-color 0.3s;
        }

        .causa-card:hover {
            border-color: hsl(var(--primary) / 0.4);
        }

        .causa-card svg {
            width: 1.75rem;
            height: 1.75rem;
            color: hsl(var(--primary));
            flex-shrink: 0;
            margin-top: 0.25rem;
        }

        .causa-card span {
            color: hsl(var(--foreground));
            font-size: 1.125rem;
        }

        .causas-highlight {
            background: hsl(var(--primary) / 0.05);
            border-left: 4px solid hsl(var(--primary));
            padding: 1.5rem;
            border-radius: 0 0.5rem 0.5rem 0;
            max-width: 48rem;
            margin: 0 auto;
        }

        .causas-highlight p {
            color: hsl(var(--foreground));
            font-weight: 500;
        }

        /* Sintomas Section */
        .sintomas-section {
            padding: 5rem 0;
            background: hsl(var(--background));
        }

        .sintomas-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .sintoma-card {
            padding: 2rem;
            border-radius: 1rem;
            border: 2px solid;
            transition: all 0.3s;
        }

        .sintoma-card:hover {
            transform: scale(1.02);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .sintoma-card-emocional {
            background: linear-gradient(135deg, hsl(var(--secondary) / 0.2), hsl(var(--background)));
            border-color: hsl(var(--primary) / 0.2);
        }

        .sintoma-card-emocional:hover {
            border-color: hsl(var(--primary) / 0.4);
        }

        .sintoma-card-fisico {
            background: linear-gradient(135deg, hsl(var(--accent) / 0.1), hsl(var(--background)));
            border-color: hsl(var(--accent) / 0.2);
        }

        .sintoma-card-fisico:hover {
            border-color: hsl(var(--accent) / 0.4);
        }

        .sintoma-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .sintoma-icon-primary {
            background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
        }

        .sintoma-icon-accent {
            background: linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)));
        }

        .sintoma-icon svg {
            width: 2rem;
            height: 2rem;
            color: hsl(var(--primary-foreground));
        }

        .sintoma-card h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: hsl(var(--foreground));
        }

        .sintoma-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .sintoma-list li {
            display: flex;
            align-items: start;
            gap: 0.75rem;
            margin-bottom: 1rem;
        }

        .sintoma-list li .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-top: 0.5rem;
            flex-shrink: 0;
        }

        .dot-primary {
            background: hsl(var(--primary));
        }

        .dot-accent {
            background: hsl(var(--accent));
        }

        .sintoma-list li span {
            color: hsl(var(--muted-foreground));
        }

        @media (min-width: 768px) {
            .sintomas-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        /* Tristeza x Depressão */
        .tristeza-section {
            padding: 5rem 0;
            background: linear-gradient(180deg, hsl(var(--secondary) / 0.1), hsl(var(--background)));
        }

        /* Diagnóstico Section */
        .diagnostico-section {
            padding: 5rem 0;
            background: #087daf;
        }

        .diagnostico-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            padding: 2.5rem;
            border-radius: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .diagnostico-card p {
            font-size: 1.125rem;
            color: hsl(var(--foreground));
            line-height: 1.6;
            text-align: center;
        }

        .diagnostico-highlight {
            background: hsl(var(--primary) / 0.05);
            border-left: 4px solid hsl(var(--primary));
            padding: 1.5rem;
            border-radius: 0 0.5rem 0.5rem 0;
            margin-top: 2rem;
        }

        .diagnostico-highlight p {
            color: hsl(var(--foreground));
            font-weight: 500;
            text-align: left;
        }

        @media (min-width: 768px) {
            .diagnostico-card {
                padding: 3rem;
            }

            .diagnostico-card p {
                font-size: 1.25rem;
            }
        }

        /* Teste Section */
        .teste-section {
            padding: 5rem 0;
            background: linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05));
        }

        .teste-icon {
            width: 5rem;
            height: 5rem;
            background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }

        .teste-icon svg {
            width: 2.5rem;
            height: 2.5rem;
            color: hsl(var(--primary-foreground));
        }

        /* Tratamento Section */
        .tratamento-section {
            padding: 5rem 0;
            background: hsl(var(--background));
        }

        .tratamento-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .tratamento-card {
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 2px solid;
            transition: all 0.3s;
        }

        .tratamento-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .tratamento-card-1 {
            background: linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--background)));
            border-color: hsl(var(--primary) / 0.2);
        }

        .tratamento-card-1:hover {
            border-color: hsl(var(--primary) / 0.4);
        }

        .tratamento-card-2 {
            background: linear-gradient(135deg, hsl(var(--accent) / 0.1), hsl(var(--background)));
            border-color: hsl(var(--accent) / 0.2);
        }

        .tratamento-card-2:hover {
            border-color: hsl(var(--accent) / 0.4);
        }

        .tratamento-card-3 {
            background: linear-gradient(135deg, hsl(var(--secondary) / 0.2), hsl(var(--background)));
            border-color: hsl(var(--secondary) / 0.3);
        }

        .tratamento-card-3:hover {
            border-color: hsl(var(--secondary) / 0.5);
        }

        .tratamento-card-4 {
            background: linear-gradient(135deg, hsl(var(--accent) / 0.1), hsl(var(--background)));
            border-color: hsl(var(--accent) / 0.2);
        }

        .tratamento-card-4:hover {
            border-color: hsl(var(--accent) / 0.4);
        }

        .tratamento-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .tratamento-icon-1 {
            background: hsl(var(--primary) / 0.2);
        }

        .tratamento-icon-1 svg {
            width: 1.5rem;
            height: 1.5rem;
            color: hsl(var(--primary));
        }

        .tratamento-icon-2 {
            background: hsl(var(--accent) / 0.2);
        }

        .tratamento-icon-2 svg {
            width: 1.5rem;
            height: 1.5rem;
            color: hsl(var(--accent));
        }

        .tratamento-icon-3 {
            background: hsl(var(--secondary) / 0.3);
        }

        .tratamento-icon-3 svg {
            width: 1.5rem;
            height: 1.5rem;
            color: hsl(var(--primary));
        }

        .tratamento-icon-4 {
            background: hsl(var(--accent) / 0.2);
        }

        .tratamento-icon-4 svg {
            width: 1.5rem;
            height: 1.5rem;
            color: hsl(var(--primary));
        }

        .tratamento-card h3 {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 0.75rem;
            color: hsl(var(--foreground));
        }

        .tratamento-card p {
            color: hsl(var(--muted-foreground));
        }

        .tratamento-highlight {
            background: linear-gradient(90deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1));
            padding: 2rem;
            border-radius: 1rem;
            border: 2px solid hsl(var(--primary) / 0.2);
            margin-bottom: 2rem;
        }

        .tratamento-highlight p {
            font-size: 1.125rem;
            color: hsl(var(--foreground));
            text-align: center;
        }

        @media (min-width: 768px) {
            .tratamento-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        /* CTA Final */
        .cta-final {
            padding: 5rem 0;
            background: linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.05), hsl(var(--background)));
        }

        .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
        }

        @media (min-width: 640px) {
            .cta-buttons {
                flex-direction: row;
            }
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>

    <?php
    render_breadcrumbs([
        ['label' => 'Especialidades', 'href' => '/especialidades'],
        ['label' => 'Depressão']
    ]);
    ?>

    <main>
        <!-- Hero Section -->
        <section class="hero-depressao">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-content">
                        <h1>
                            Tristeza constante, falta de energia ou perda de interesse pelo que antes trazia prazer?
                            <span class="highlight">Você pode estar enfrentando um quadro de depressão.</span>
                        </h1>
                        <p>
                            Tratamento especializado com o Dr. Gabriel Lopes, psiquiatra referência em saúde mental e transtornos do humor.
                        </p>
                        <div class="hero-buttons">
                            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                                🔹 Agende sua consulta
                            </a>
                            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-outline btn-lg">
                                🔹 Faça o teste de depressão gratuito
                            </a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="images/dr-gabriel.png" alt="Dr. Gabriel Lopes - Psiquiatra especialista em Depressão">
                    </div>
                </div>
            </div>
        </section>

        <!-- O que é a Depressão? -->
        <section class="parallax-section">
            <div class="parallax-bg"></div>
            <div class="parallax-overlay"></div>
            
            <div class="container parallax-content">
                <div class="parallax-title">
                    <h2>O que é a Depressão?</h2>
                    <div class="title-bar"></div>
                </div>
                <div class="parallax-card">
                    <p>
                        A depressão é um transtorno de humor que vai além da tristeza passageira. Ela provoca alterações emocionais, cognitivas e físicas que comprometem o bem-estar e o desempenho diário. Diferente de um momento difícil, a depressão é uma condição médica, que requer diagnóstico e acompanhamento profissional.
                    </p>
                </div>
            </div>
        </section>

        <!-- Causas e Fatores de Risco -->
        <section class="causas-section">
            <div class="container">
                <div class="max-w-5xl mx-auto">
                    <div class="section-header">
                        <h2>Causas e Fatores de Risco</h2>
                        <p class="section-subtitle">
                            A depressão pode ter origem multifatorial, combinando fatores biológicos, genéticos e ambientais. As principais causas incluem:
                        </p>
                    </div>

                    <div class="causas-grid">
                        <div class="causa-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Predisposição genética: histórico familiar da doença;</span>
                        </div>
                        <div class="causa-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Alterações químicas no cérebro: deficiência de neurotransmissores como serotonina e dopamina;</span>
                        </div>
                        <div class="causa-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Experiências traumáticas na infância ou vida adulta;</span>
                        </div>
                        <div class="causa-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Perdas significativas: término, luto ou demissão;</span>
                        </div>
                        <div class="causa-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Sedentarismo, má alimentação e uso de drogas;</span>
                        </div>
                        <div class="causa-card">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Desequilíbrios hormonais ou doenças clínicas associadas.</span>
                        </div>
                    </div>

                    <div class="causas-highlight">
                        <p>
                            👉 Pessoas com predisposição genética podem desenvolver a doença mais facilmente quando expostas a fatores ambientais de risco.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sintomas da Depressão -->
        <section class="sintomas-section">
            <div class="container">
                <div class="max-w-6xl mx-auto">
                    <div class="section-header">
                        <h2>Sintomas da <span class="text-primary">Depressão</span></h2>
                        <div class="title-bar"></div>
                    </div>

                    <div class="sintomas-grid">
                        <!-- Sintomas emocionais e comportamentais -->
                        <div class="sintoma-card sintoma-card-emocional">
                            <div class="sintoma-icon sintoma-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                                </svg>
                            </div>
                            <h3>💭 Sintomas emocionais e comportamentais:</h3>
                            <ul class="sintoma-list">
                                <li>
                                    <div class="dot dot-primary"></div>
                                    <span>Tristeza e angústia constantes;</span>
                                </li>
                                <li>
                                    <div class="dot dot-primary"></div>
                                    <span>Falta de energia e desinteresse por atividades;</span>
                                </li>
                                <li>
                                    <div class="dot dot-primary"></div>
                                    <span>Sentimentos de culpa, fracasso e inutilidade;</span>
                                </li>
                                <li>
                                    <div class="dot dot-primary"></div>
                                    <span>Dificuldade de concentração e memória;</span>
                                </li>
                                <li>
                                    <div class="dot dot-primary"></div>
                                    <span>Baixa autoestima e pessimismo;</span>
                                </li>
                                <li>
                                    <div class="dot dot-primary"></div>
                                    <span>Pensamentos sobre morte ou suicidas.</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Sintomas físicos -->
                        <div class="sintoma-card sintoma-card-fisico">
                            <div class="sintoma-icon sintoma-icon-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </svg>
                            </div>
                            <h3>🩺 Sintomas físicos:</h3>
                            <ul class="sintoma-list">
                                <li>
                                    <div class="dot dot-accent"></div>
                                    <span>Fadiga e mal-estar;</span>
                                </li>
                                <li>
                                    <div class="dot dot-accent"></div>
                                    <span>Alterações no sono e apetite;</span>
                                </li>
                                <li>
                                    <div class="dot dot-accent"></div>
                                    <span>Dores sem causa aparente;</span>
                                </li>
                                <li>
                                    <div class="dot dot-accent"></div>
                                    <span>Desconfortos gastrointestinais;</span>
                                </li>
                                <li>
                                    <div class="dot dot-accent"></div>
                                    <span>Falta de ar e palpitações.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="text-center mt-12">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-outline btn-lg">
                            🔹 Identificou-se com esses sintomas? → Faça o teste gratuito de depressão
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tristeza x Depressão -->
        <section class="tristeza-section">
            <div class="container">
                <div class="max-w-4xl mx-auto">
                    <h2 class="section-title">
                        Tristeza x <span class="text-primary">Depressão</span>
                    </h2>
                    <div class="title-bar"></div>

                    <div class="mt-8">
                        <p class="text-lg text-muted">
                            É importante diferenciar: A tristeza é uma emoção passageira, geralmente associada a um evento específico. Já a depressão é persistente, profunda e independe de uma causa imediata. Enquanto a tristeza tende a se resolver com o tempo, a depressão necessita de tratamento médico e psicológico.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Diagnóstico da Depressão -->
        <section class="diagnostico-section">
            <div class="container">
                <div class="max-w-4xl mx-auto">
                    <div class="section-header">
                        <h2 style="color: white;">Diagnóstico da Depressão</h2>
                        <div class="title-bar" style="background: linear-gradient(90deg, #22d3ee, #3b82f6);"></div>
                    </div>
                    <div class="diagnostico-card">
                        <p>
                            O diagnóstico é clínico e deve ser feito por um médico psiquiatra. Durante a consulta, o profissional avalia sintomas, histórico pessoal e familiar, além de excluir outras condições que possam causar sintomas semelhantes.
                        </p>
                        <div class="diagnostico-highlight">
                            <p>
                                👉 Um diagnóstico precoce é essencial para iniciar o tratamento e evitar agravamentos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Teste de Depressão -->
        <section class="teste-section">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="teste-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                            <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                            <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                            <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                        </svg>
                    </div>
                    <h2 class="section-title">
                        Faça o teste gratuito de depressão
                    </h2>
                    <p class="text-lg text-muted mb-6">
                        Nosso teste online ajuda a identificar sinais que podem indicar a presença de um transtorno depressivo. Em poucos minutos, você entende se é o momento de buscar ajuda médica especializada.
                    </p>
                    <p class="text-sm text-muted mb-8" style="font-style: italic;">
                        🧩 O teste não substitui o diagnóstico profissional, mas é um ótimo primeiro passo para o autoconhecimento.
                    </p>
                    <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                        🔹 Iniciar teste gratuito
                    </a>
                </div>
            </div>
        </section>

        <!-- Tratamento da Depressão -->
        <section class="tratamento-section">
            <div class="container">
                <div class="max-w-5xl mx-auto">
                    <div class="section-header">
                        <h2>Tratamento da <span class="text-primary">Depressão</span></h2>
                        <div class="title-bar"></div>
                    </div>

                    <div class="tratamento-grid">
                        <div class="tratamento-card tratamento-card-1">
                            <div class="tratamento-icon tratamento-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </svg>
                            </div>
                            <h3>Medicação</h3>
                            <p>
                                Uso de antidepressivos e estabilizadores de humor, prescritos por um psiquiatra.
                            </p>
                        </div>

                        <div class="tratamento-card tratamento-card-2">
                            <div class="tratamento-icon tratamento-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                                </svg>
                            </div>
                            <h3>Psicoterapia</h3>
                            <p>
                                Para compreender e reorganizar emoções.
                            </p>
                        </div>

                        <div class="tratamento-card tratamento-card-3">
                            <div class="tratamento-icon tratamento-icon-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3>Mudanças no estilo de vida</h3>
                            <p>
                                Com foco em atividade física, alimentação e sono.
                            </p>
                        </div>

                        <div class="tratamento-card tratamento-card-4">
                            <div class="tratamento-icon tratamento-icon-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3>Terapias complementares</h3>
                            <p>
                                Como acupuntura integrativa e suporte nutricional.
                            </p>
                        </div>
                    </div>

                    <div class="tratamento-highlight">
                        <p>
                            <strong>No Instituto Sanapta, o cuidado é multidisciplinar</strong>, com uma equipe que une psiquiatria, psicologia, nutrição e acupuntura — promovendo o equilíbrio entre corpo e mente.
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

        <!-- CTA Final -->
        <section class="cta-final">
            <div class="container">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="section-title">
                        O primeiro passo para superar a depressão é buscar ajuda
                    </h2>
                    <p class="text-xl text-muted mb-10">
                        A depressão tem tratamento — e a recuperação é possível. Com acompanhamento médico adequado e apoio multidisciplinar, é possível retomar o equilíbrio emocional e viver com leveza novamente.
                    </p>
                    <div class="cta-buttons">
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                            🔹 Agende sua consulta
                        </a>
                        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-outline btn-lg">
                            🔹 Faça o teste gratuito de depressão
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
