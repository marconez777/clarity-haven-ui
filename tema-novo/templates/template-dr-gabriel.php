<?php
/**
 * Template Name: Dr. Gabriel
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
/* Tab Styles */
.tabs-container {
    width: 100%;
    max-width: 56rem;
    margin: 0 auto;
}

.tabs-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1));
    padding: 0.5rem;
    border-radius: 0.75rem;
    border: 2px solid rgba(0, 153, 204, 0.1);
}

.tab-trigger {
    padding: 0.875rem 1rem;
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    color: hsl(210, 10%, 45%);
    transition: all 0.3s;
    font-size: 0.9375rem;
}

.tab-trigger:hover {
    background: rgba(0, 153, 204, 0.05);
    color: hsl(198, 92%, 36%);
}

.tab-trigger.active {
    background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%));
    color: white;
    box-shadow: 0 4px 12px hsl(198 92% 36% / 0.3);
}

.tab-content {
    display: none;
    animation: fadeIn 0.3s ease-out;
}

.tab-content.active {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.prose p {
    font-size: 1.125rem;
    line-height: 1.75;
    margin-bottom: 1.5rem;
}

.prose h3 {
    font-size: 1.75rem;
    font-weight: bold;
    color: hsl(198, 92%, 36%);
    margin-top: 3rem;
    margin-bottom: 1rem;
}

.prose blockquote {
    border-left: 4px solid hsl(198, 92%, 36%);
    padding-left: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 2rem 0;
    font-style: italic;
    font-size: 1.25rem;
    background: rgba(0, 153, 204, 0.05);
    border-radius: 0 0.5rem 0.5rem 0;
}

.prose ul {
    list-style: none;
    padding-left: 0;
    margin: 1.5rem 0;
}

.prose ul li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.125rem;
}

.prose ul li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: hsl(198, 92%, 36%);
    font-weight: bold;
    font-size: 1.25rem;
}

.info-box {
    background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1));
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin: 2rem 0;
    border: 2px solid rgba(0, 153, 204, 0.2);
}

@media (max-width: 768px) {
    .tabs-list {
        grid-template-columns: 1fr;
    }
    
    .hidden-mobile {
        display: none;
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
            <h1 style="font-size: 3rem; font-weight: bold; text-align: center; margin-bottom: 3rem; color: hsl(210, 10%, 20%);">
                Dr. Gabriel Lopes
            </h1>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; max-width: 72rem; margin: 0 auto;">
                <!-- Image -->
                <div>
                    <img src="<?php echo esc_url( TEMA_NOVO_URI . '/assets/images/dr-gabriel.png' ); ?>" alt="Dr. Gabriel Lopes - Psiquiatra" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                </div>

                <!-- Doctoralia Widget -->
                <div style="display: flex; justify-content: center; align-items: start;">
                    <iframe 
                        frameborder="0" 
                        scrolling="no" 
                        allowtransparency="true"
                        data-id="pnh0yj0mfi" 
                        title="Docplanner Booking Widget" 
                        src="https://widgets.doctoralia.com.br/doctor/widget/certificate/gabriel-lopes?customUtm=null&id=pnh0yj0mfi&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Fdrgabriel.med.br%2Fdr-gabriel-lopes%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=false&expand_calendar=false" 
                        style="border: none; overflow: hidden; width: 245px; height: 284px;">
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Content Section with Tabs -->
    <section style="padding: 5rem 0; background: white;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <div style="text-align: center; margin-bottom: 4rem;">
                <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">
                    Navegue pelo <span style="color: hsl(198, 92%, 36%);">conteúdo</span>
                </h2>
                <div style="width: 6rem; height: 0.25rem; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); margin: 0 auto;"></div>
            </div>

            <div class="tabs-container">
                <div class="tabs-list" role="tablist">
                    <button class="tab-trigger active" onclick="openTab(event, 'tab1')">Me conheça melhor</button>
                    <button class="tab-trigger" onclick="openTab(event, 'tab2')">Minha formação</button>
                    <button class="tab-trigger" onclick="openTab(event, 'tab3')">Como é minha consulta</button>
                </div>

                <div id="tab1" class="tab-content active">
                    <div class="prose" style="max-width: none; color: hsl(210, 10%, 30%);">
                        <p>Olá! Sou o Dr. Gabriel Lopes, médico psiquiatra especializado no cuidado da saúde mental de crianças, adolescentes e adultos.</p>
                        
                        <p>Minha missão é oferecer um atendimento humanizado, acolhedor e baseado nas melhores evidências científicas. Acredito que cada paciente é único e merece um cuidado personalizado, considerando não apenas os sintomas, mas também o contexto de vida, as relações familiares e os sonhos de cada pessoa.</p>

                        <div class="info-box">
                            <p class="crm" style="font-size: 0.875rem; color: hsl(210, 10%, 45%); margin-bottom: 0.5rem;">CRM/SP: 131.339</p>
                            <p class="specialty" style="font-weight: 600; color: hsl(210, 10%, 20%);">RQE: 48295 (Psiquiatria) | RQE: 48295-1 (Psiquiatria da Infância e Adolescência)</p>
                        </div>

                        <blockquote>
                            "Antes de tudo um ser humano atento ao sofrimento de outro ser humano."
                        </blockquote>

                        <p>Além da prática clínica, também atuo como psiquiatra no Instituto Sanapta, referência em saúde mental e cuidado integral na Vila Olímpia.</p>
                    </div>
                </div>

                <div id="tab2" class="tab-content">
                    <div class="prose" style="max-width: none; color: hsl(210, 10%, 30%);">
                        <h3>Formação Acadêmica</h3>
                        
                        <ul>
                            <li>Graduação em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo</li>
                            <li>Residência Médica em Psiquiatria pela Santa Casa de São Paulo</li>
                            <li>Residência Médica em Psiquiatria da Infância e Adolescência pela Santa Casa de São Paulo</li>
                            <li>Título de Especialista em Psiquiatria pela ABP (Associação Brasileira de Psiquiatria)</li>
                            <li>Título de Especialista em Psiquiatria da Infância e Adolescência pela ABP</li>
                        </ul>

                        <h3>Áreas de Atuação</h3>
                        
                        <ul>
                            <li>TDAH (Transtorno de Déficit de Atenção e Hiperatividade)</li>
                            <li>Transtornos de Ansiedade</li>
                            <li>Depressão e Transtornos do Humor</li>
                            <li>Transtorno Bipolar</li>
                            <li>Psiquiatria Infantil e da Adolescência</li>
                            <li>Psicoterapia Analítico-Comportamental</li>
                        </ul>
                    </div>
                </div>

                <div id="tab3" class="tab-content">
                    <div class="prose" style="max-width: none; color: hsl(210, 10%, 30%);">
                        <h3>Como funciona a consulta?</h3>
                        
                        <p>Nas consultas, busco criar um ambiente acolhedor e seguro, onde você possa se sentir à vontade para compartilhar suas preocupações e dificuldades.</p>

                        <p><strong>Na primeira consulta:</strong></p>
                        <ul>
                            <li>Realizamos uma avaliação completa do seu histórico de saúde</li>
                            <li>Conversamos sobre os sintomas que você está enfrentando</li>
                            <li>Discutimos suas expectativas em relação ao tratamento</li>
                            <li>Iniciamos a construção de um plano terapêutico personalizado</li>
                        </ul>

                        <p><strong>Nas consultas de retorno:</strong></p>
                        <ul>
                            <li>Avaliamos a evolução do tratamento</li>
                            <li>Ajustamos medicações quando necessário</li>
                            <li>Trabalhamos estratégias psicoterapêuticas</li>
                            <li>Mantemos um acompanhamento próximo e humanizado</li>
                        </ul>

                        <blockquote>
                            Meu compromisso é estar presente em cada etapa da sua jornada rumo ao bem-estar emocional.
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section style="padding: 5rem 0; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1)); text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">
                Agende sua consulta
            </h2>
            <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem; max-width: 42rem; margin-left: auto; margin-right: auto;">
                Estou aqui para ajudá-lo(a) a cuidar da sua saúde mental com o respeito e a atenção que você merece.
            </p>
            <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
                Entre em contato agora
            </a>
        </div>
    </section>
</main>

<script>
function openTab(evt, tabId) {
    var i, tabcontent, tabtriggers;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tabtriggers = document.getElementsByClassName("tab-trigger");
    for (i = 0; i < tabtriggers.length; i++) {
        tabtriggers[i].classList.remove("active");
    }
    
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}
</script>

<?php
get_footer();
