<?php
/**
 * Front Page Template - Home
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">Saúde Mental com acompanhamento completo</h1>
                    <p class="hero-description">Cuidado integral e humanizado para o seu bem-estar emocional e mental</p>
                    <a href="#contato" class="btn btn-primary btn-lg">Conheça a Clínica</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Principais Especialidades -->
    <section class="especialidades-home-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Principais Especialidades</h2>
                <p class="section-description">Atendimento especializado para suas necessidades</p>
            </div>
            
            <div class="especialidades-grid">
                <a href="<?php echo esc_url( home_url( '/tdah' ) ); ?>" class="especialidade-card especialidade-card-primary">
                    <h3 class="especialidade-title">TDAH</h3>
                    <p class="especialidade-description">Transtorno de Déficit de Atenção e Hiperatividade com tratamento especializado</p>
                </a>
                
                <a href="<?php echo esc_url( home_url( '/ansiedade' ) ); ?>" class="especialidade-card especialidade-card-accent">
                    <h3 class="especialidade-title">Ansiedade</h3>
                    <p class="especialidade-description">Tratamento para transtornos de ansiedade e síndrome do pânico</p>
                </a>
                
                <a href="<?php echo esc_url( home_url( '/depressao' ) ); ?>" class="especialidade-card especialidade-card-primary">
                    <h3 class="especialidade-title">Depressão</h3>
                    <p class="especialidade-description">Acompanhamento e tratamento do transtorno depressivo</p>
                </a>
                
                <a href="<?php echo esc_url( home_url( '/transtorno-bipolar' ) ); ?>" class="especialidade-card especialidade-card-accent">
                    <h3 class="especialidade-title">Transtorno Bipolar</h3>
                    <p class="especialidade-description">Diagnóstico e tratamento do transtorno bipolar</p>
                </a>
            </div>
        </div>
    </section>

    <!-- Saúde Mental Integrada -->
    <section class="specialties-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Saúde Mental Integrada na Vila Olímpia/SP</h2>
                <div class="section-divider"></div>
            </div>
            
            <div class="specialties-grid">
                <div class="specialty-item">
                    <div class="specialty-icon">
                        <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/specialties/psiquiatria.png' ); ?>" alt="Psiquiatria">
                    </div>
                    <h3 class="specialty-name">Psiquiatria</h3>
                    <p class="specialty-description">Diagnóstico e tratamento de transtornos mentais</p>
                </div>
                
                <div class="specialty-item">
                    <div class="specialty-icon">
                        <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/specialties/psicoterapia.png' ); ?>" alt="Psicoterapia">
                    </div>
                    <h3 class="specialty-name">Psicoterapia</h3>
                    <p class="specialty-description">Apoio emocional e desenvolvimento pessoal</p>
                </div>
                
                <div class="specialty-item">
                    <div class="specialty-icon">
                        <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/specialties/acupuntura.png' ); ?>" alt="Acupuntura">
                    </div>
                    <h3 class="specialty-name">Acupuntura</h3>
                    <p class="specialty-description">Equilíbrio energético e bem-estar</p>
                </div>
                
                <div class="specialty-item">
                    <div class="specialty-icon">
                        <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/specialties/nutricao.png' ); ?>" alt="Nutrição">
                    </div>
                    <h3 class="specialty-name">Nutrição</h3>
                    <p class="specialty-description">Alimentação saudável para mente e corpo</p>
                </div>
                
                <div class="specialty-item">
                    <div class="specialty-icon">
                        <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/specialties/neuropsicologia.png' ); ?>" alt="Neuropsicologia">
                    </div>
                    <h3 class="specialty-name">Neuropsicologia</h3>
                    <p class="specialty-description">Avaliação e reabilitação cognitiva</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <h2 class="about-title">Dr. Gabriel Lopes</h2>
                    <div class="about-text">
                        <p>Formado em Medicina e Residência Médica em Psiquiatria da Infância e da Adolescência pela faculdade Santa Casa de São Paulo. Suas principais especialidades: Ansiedade, Depressão, TDAH.</p>
                        <p>Psiquiatra Infantil e de adultos/ Psicoterapeuta analítico comportamental. Atua como psiquiatra no <a href="https://www.institutosanapta.com.br" target="_blank" rel="noopener noreferrer" class="link-primary">Instituto Sanapta</a>, referência em saúde mental e cuidado integral.</p>
                    </div>
                    <blockquote class="about-quote">
                        "Antes de tudo um ser humano atento ao sofrimento de outro ser humano."
                    </blockquote>
                    <div class="about-buttons">
                        <a href="<?php echo esc_url( home_url( '/dr-gabriel-lopes' ) ); ?>" class="btn btn-outline btn-lg">Conheço o doutor</a>
                        <a href="#agendar" class="btn btn-primary btn-lg">Agende sua consulta</a>
                    </div>
                    
                    <div class="doctoralia-widget">
                        <iframe 
                            frameborder="0" 
                            scrolling="no" 
                            allowtransparency="true"
                            data-id="pnh0yj0mfi" 
                            title="Docplanner Booking Widget" 
                            src="https://widgets.doctoralia.com.br/doctor/widget/certificate/gabriel-lopes?customUtm=null&id=pnh0yj0mfi&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Fdrgabriel.med.br%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=false&expand_calendar=false" 
                            style="border: none; overflow: hidden; width: 245px; height: 284px;">
                        </iframe>
                    </div>
                </div>
                <div class="about-image">
                    <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/dr-gabriel.png' ); ?>" alt="Dr. Gabriel Lopes - Psiquiatra">
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Nossa Equipe Multidisciplinar</h2>
                <p class="section-description">Profissionais especializados para um cuidado completo</p>
            </div>
            <div class="team-content">
                <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/team-professionals.png' ); ?>" alt="Equipe de profissionais" class="team-image">
                <div class="team-text">
                    <p>Nossa equipe é formada por profissionais altamente qualificados e especializados em diversas áreas da saúde mental, garantindo um atendimento integral e personalizado.</p>
                    <a href="<?php echo esc_url( home_url( '/equipe' ) ); ?>" class="btn btn-primary">Conheça a Equipe</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Mental Health Section -->
    <section class="mental-health-section">
        <div class="container">
            <div class="mental-health-content">
                <div class="mental-health-text">
                    <h2 class="section-title">Cuidado com sua Saúde Mental</h2>
                    <p>A saúde mental é tão importante quanto a saúde física. Cuidar do bem-estar emocional e psicológico é essencial para uma vida plena e equilibrada.</p>
                    <ul class="mental-health-list">
                        <li>Atendimento humanizado e acolhedor</li>
                        <li>Tratamentos baseados em evidências científicas</li>
                        <li>Acompanhamento contínuo e personalizado</li>
                        <li>Equipe multidisciplinar especializada</li>
                    </ul>
                    <a href="<?php echo esc_url( home_url( '/contato' ) ); ?>" class="btn btn-primary btn-lg">Entre em Contato</a>
                </div>
                <div class="mental-health-image">
                    <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/mental-health.png' ); ?>" alt="Saúde Mental">
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
