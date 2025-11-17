<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Especialidades em Saúde Mental | Dr. Gabriel Lopes</title>
    <meta name="description" content="Conheça nossas especialidades: TDAH, Ansiedade, Depressão e Transtorno Bipolar. Tratamento especializado com abordagem integrada na Vila Olímpia/SP.">
    <meta name="keywords" content="especialidades, psiquiatria, TDAH, ansiedade, depressão, transtorno bipolar, saúde mental">
    <meta name="author" content="Dr. Gabriel Lopes">
    <link rel="canonical" href="https://drgabriellopes.com.br/especialidades">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="Especialidades em Saúde Mental | Dr. Gabriel Lopes">
    <meta property="og:description" content="Conheça nossas especialidades: TDAH, Ansiedade, Depressão e Transtorno Bipolar. Tratamento especializado com abordagem integrada.">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Especialidades em Saúde Mental | Dr. Gabriel Lopes">
    <meta name="twitter:description" content="Conheça nossas especialidades em saúde mental com abordagem integrada e personalizada.">
    
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Breadcrumbs */
        .breadcrumbs {
            background: hsl(210, 20%, 98%);
            padding: 1rem 0;
            margin-top: 5rem;
        }
        
        .breadcrumbs-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
        }
        
        .breadcrumbs a {
            color: hsl(198, 92%, 36%);
            text-decoration: none;
            transition: color 0.2s;
        }
        
        .breadcrumbs a:hover {
            color: hsl(185, 58%, 58%);
            text-decoration: underline;
        }
        
        .breadcrumbs-separator {
            color: hsl(210, 10%, 45%);
        }
        
        .breadcrumbs-current {
            color: hsl(210, 10%, 45%);
        }
        
        /* Page Styles */
        .especialidades-page {
            min-height: 100vh;
            background: hsl(0, 0%, 100%);
        }
        
        .especialidades-section {
            padding: 4rem 0;
        }
        
        .page-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .page-title {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: hsl(210, 10%, 20%);
        }
        
        .page-description {
            font-size: 1.125rem;
            color: hsl(210, 10%, 45%);
            max-width: 42rem;
            margin: 0 auto;
        }
        
        .especialidades-cards-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 56rem;
            margin: 0 auto;
        }
        
        .especialidade-card-link {
            text-decoration: none;
            display: block;
        }
        
        .especialidade-card {
            background: hsl(0, 0%, 100%);
            border: 1px solid hsl(210, 20%, 90%);
            border-radius: 0.75rem;
            padding: 2rem;
            height: 100%;
            transition: all 0.3s ease;
        }
        
        .especialidade-card:hover {
            box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);
            transform: translateY(-4px);
        }
        
        .especialidade-card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: hsl(210, 10%, 20%);
            margin-bottom: 0.5rem;
        }
        
        .especialidade-card-description {
            font-size: 1rem;
            color: hsl(210, 10%, 45%);
            margin-bottom: 1rem;
        }
        
        .especialidade-card-link-text {
            color: hsl(198, 92%, 36%);
            font-weight: 500;
        }
        
        .especialidade-card:hover .especialidade-card-link-text {
            text-decoration: underline;
        }
        
        @media (min-width: 768px) {
            .page-title {
                font-size: 3rem;
            }
            
            .especialidades-cards-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
        <div class="breadcrumbs-container">
            <a href="/">Home</a>
            <span class="breadcrumbs-separator">/</span>
            <span class="breadcrumbs-current">Especialidades</span>
        </div>
    </nav>
    
    <main class="especialidades-page">
        <section class="especialidades-section">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">Nossas Especialidades</h1>
                    <p class="page-description">
                        Atendimento especializado em saúde mental com abordagem integrada e personalizada
                    </p>
                </div>
                
                <div class="especialidades-cards-grid">
                    <a href="tdah.php" class="especialidade-card-link">
                        <div class="especialidade-card">
                            <h2 class="especialidade-card-title">TDAH</h2>
                            <p class="especialidade-card-description">
                                Transtorno de Déficit de Atenção e Hiperatividade
                            </p>
                            <span class="especialidade-card-link-text">Saiba mais →</span>
                        </div>
                    </a>
                    
                    <a href="ansiedade.php" class="especialidade-card-link">
                        <div class="especialidade-card">
                            <h2 class="especialidade-card-title">Ansiedade</h2>
                            <p class="especialidade-card-description">
                                Transtornos de Ansiedade e Síndrome do Pânico
                            </p>
                            <span class="especialidade-card-link-text">Saiba mais →</span>
                        </div>
                    </a>
                    
                    <a href="depressao.php" class="especialidade-card-link">
                        <div class="especialidade-card">
                            <h2 class="especialidade-card-title">Depressão</h2>
                            <p class="especialidade-card-description">
                                Transtorno Depressivo e seus tratamentos
                            </p>
                            <span class="especialidade-card-link-text">Saiba mais →</span>
                        </div>
                    </a>
                    
                    <a href="transtorno-bipolar.php" class="especialidade-card-link">
                        <div class="especialidade-card">
                            <h2 class="especialidade-card-title">Transtorno Bipolar</h2>
                            <p class="especialidade-card-description">
                                Compreensão e tratamento do Transtorno Bipolar
                            </p>
                            <span class="especialidade-card-link-text">Saiba mais →</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </main>
    
    <?php include 'includes/footer.php'; ?>
    
    <!-- WhatsApp Button -->
    <a href="https://wa.me/5511999999999" class="whatsapp-button" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    </a>
</body>
</html>
