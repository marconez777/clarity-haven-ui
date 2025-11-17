<?php
/**
 * Dr. Gabriel Lopes - Página de Apresentação
 */
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Gabriel Lopes - Psiquiatra | CRM/SP 131.339</title>
    <meta name="description" content="Conheça o Dr. Gabriel Lopes, psiquiatra especializado em TDAH, adultos e infância. CRM/SP 131.339. Formação pela Santa Casa e HC-USP.">
    <meta name="keywords" content="dr gabriel lopes, psiquiatra, TDAH, psiquiatria infantil, psiquiatra são paulo">
    <link rel="stylesheet" href="styles.css">
    <style>
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
            background: hsl(var(--muted));
            padding: 0.25rem;
            border-radius: 0.5rem;
        }

        .tab-trigger {
            padding: 0.75rem 1rem;
            background: transparent;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            font-weight: 500;
            color: hsl(var(--muted-foreground));
            transition: all 0.2s;
        }

        .tab-trigger:hover {
            background: hsl(var(--background));
        }

        .tab-trigger.active {
            background: hsl(var(--background));
            color: hsl(var(--foreground));
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
            animation: fadeIn 0.3s ease-out;
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

        .prose {
            max-width: none;
            color: hsl(var(--foreground));
        }

        .prose p {
            font-size: 1.125rem;
            line-height: 1.75;
            margin-bottom: 1.5rem;
        }

        .prose h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: hsl(var(--primary));
            margin-top: 3rem;
            margin-bottom: 1rem;
        }

        .prose blockquote {
            border-left: 4px solid hsl(var(--primary));
            padding-left: 1.5rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
            margin: 2rem 0;
            font-style: italic;
            font-size: 1.25rem;
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
            color: hsl(var(--primary));
            font-weight: bold;
        }

        .info-box {
            background: hsl(var(--secondary) / 0.1);
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
        }

        .info-box p {
            margin-bottom: 0.5rem;
        }

        .info-box .crm {
            font-size: 0.875rem;
            color: hsl(var(--muted-foreground));
            margin-bottom: 0.5rem;
        }

        .info-box .specialties {
            font-weight: 600;
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: start;
            max-width: 80rem;
            margin: 3rem auto 0;
        }

        @media (min-width: 768px) {
            .hero-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .hero-image img {
            width: 100%;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        }

        .widget-container {
            display: flex;
            justify-content: center;
            align-items: start;
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php 
    include 'components/breadcrumbs.php';
    render_breadcrumbs([
        ['label' => 'Dr. Gabriel Lopes', 'href' => '/dr-gabriel.php']
    ]);
    ?>

    <main class="main-content">
        <!-- Hero Section -->
        <section class="hero-section" style="background: linear-gradient(to bottom, hsl(var(--secondary) / 0.2), hsl(var(--background))); padding: 4rem 0;">
            <div class="container">
                <h1 style="font-size: 2.5rem; font-weight: bold; color: hsl(var(--primary)); text-align: center; margin-bottom: 1rem;">
                    Dr. Gabriel Lopes
                </h1>
                
                <div class="hero-grid">
                    <!-- Image -->
                    <div class="hero-image">
                        <img src="images/dr-gabriel.png" alt="Dr. Gabriel Lopes - Psiquiatra">
                    </div>

                    <!-- Doctoralia Widget -->
                    <div class="widget-container">
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
        <section style="padding: 4rem 0;">
            <div class="container">
                <h2 style="font-size: 1.875rem; font-weight: bold; color: hsl(var(--primary)); text-align: center; margin-bottom: 2rem;">
                    Navegue pelo conteúdo
                </h2>

                <div class="tabs-container">
                    <div class="tabs-list">
                        <button class="tab-trigger active" onclick="switchTab('conheca', this)">Me conheça melhor</button>
                        <button class="tab-trigger" onclick="switchTab('formacao', this)">Minha formação</button>
                        <button class="tab-trigger" onclick="switchTab('consulta', this)">Como é minha consulta</button>
                    </div>

                    <!-- Tab: Me conheça melhor -->
                    <div id="conheca" class="tab-content active">
                        <div class="prose">
                            <p>
                                Primeiro de tudo, obrigado pelo seu tempo. Afinal, você poderia estar fazendo outras coisas e está aqui, não é mesmo? Espero de coração que seja útil e proveitoso para você.
                            </p>

                            <div class="info-box">
                                <p class="crm">CRM/SP: 131.339</p>
                                <p class="specialties">Médico Psiquiatra de Adultos (RQE – CREMESP: 48295)</p>
                                <p class="specialties">Psiquiatria da infância e adolescência (RQE – CREMESP: 48295-1)</p>
                            </div>

                            <p>
                                Hoje, logo depois que acordei, pensei no quanto tenho que agradecer pela vida. E uma das coisas que mais agradeço é poder ter prazer no que faço. Sempre gostei muito da minha profissão e ver pessoas melhorando é algo muito especial. Este site é uma forma de eu me conectar melhor com os pacientes. E, talvez, explicar um pouco de quem sou e o que eu faço.
                            </p>

                            <blockquote>
                                "Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana".
                            </blockquote>

                            <p>
                                E é assim que sempre tento ser no meu cotidiano. O mais empático possível com qualquer paciente que me procure. Quem tem dor, emocional ou física, tem pressa. E tento ser o mais assertivo possível no tratamento, para ajudar da melhor forma.
                            </p>

                            <h3>QUEM SOU EU?</h3>
                            
                            <p>
                                Olá, sou o Dr. Gabriel M. Lopes, psiquiatra com vasta experiência e especializado no atendimento a adultos e crianças. Possuo um destaque na área de Transtorno de Déficit de Atenção e Hiperatividade (TDAH), mas minha atuação abrange a totalidade da psiquiatria. Meu registro no CRM/SP é 131.339 e adquiri minha formação em Medicina pela prestigiosa Faculdade de Medicina da Santa Casa de São Paulo. Continuei minha jornada acadêmica fazendo Residência Médica em Psiquiatria nesta mesma instituição e um aprofundamento em Psiquiatria da Infância e Adolescência no reconhecido Hospital das Clínicas da Universidade de São Paulo (USP). Adicionalmente, sou um Psicoterapeuta formado em Análise do Comportamento pelo Instituto Paradigma.
                            </p>

                            <p>
                                Durante minha carreira, acumulei uma rica bagagem de experiências clínicas que me proporcionam segurança para atender a uma ampla gama de demandas psiquiátricas. Vale salientar que, mesmo com essa extensa abrangência, opto por não atender a idosos acima de 65 anos, pois acredito que a psiquiatria geriátrica é uma especialidade que requer um conhecimento distinto. Contudo, tenho a satisfação de encaminhar esses pacientes para colegas altamente qualificados.
                            </p>

                            <p>
                                Mesmo com um foco significativo em TDAH, minha prática não se limita a este campo. Atendo a uma diversidade de condições, sempre buscando o melhor para meus pacientes, desde aqueles que sofrem de ansiedade e depressão até aqueles que lutam contra transtornos mais complexos. Meu compromisso como psiquiatra é fazer mais do que tratar sintomas; é compreender o indivíduo por trás deles.
                            </p>

                            <p>
                                Em termos de minha abordagem de tratamento, acredito firmemente que um pouco de humanidade é tão importante quanto a competência técnica. Isto é evidente em minha filosofia de trabalho, resumida pela citação de Jung, "Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana". Esse é o norte de minha prática, seja ao tratar de TDAH ou de qualquer outra condição psiquiátrica.
                            </p>

                            <p>
                                Minha dedicação constante a melhorar e atualizar meus conhecimentos e habilidades é parte integrante da minha filosofia de trabalho. Estou sempre me atualizando através de congressos nacionais, internacionais e cursos diversos de aperfeiçoamento. Atualmente, estou envolvido em pesquisas em várias áreas de ponta na psiquiatria, incluindo o uso de fitocanabinóides na prática médica, psiquiatria do estilo de vida e psiconeuroimunologia.
                            </p>

                            <p>
                                Em meu consultório, cada paciente é valorizado e compreendido, seja qual for sua luta ou desafio. Cada detalhe do tratamento será explicado, incluindo medicamentos, possíveis efeitos colaterais e o tempo esperado para a melhora. Nossa meta é entender os sintomas, traçar uma linha do tempo para entender a evolução do quadro e estabelecer corretamente o diagnóstico para, então, discutir todas as opções terapêuticas disponíveis.
                            </p>

                            <p>
                                Para finalizar, a comunicação é uma prioridade no meu trabalho e na relação médico-paciente. Acredito que ela é a base para um tratamento bem-sucedido e é o que permite aos meus pacientes entender e participar ativamente de sua recuperação. Se você está buscando um psiquiatra que oferece um cuidado empático, baseado em evidências e que respeita sua individualidade, seja muito bem-vindo ao meu consultório.
                            </p>
                        </div>
                    </div>

                    <!-- Tab: Minha formação -->
                    <div id="formacao" class="tab-content">
                        <div class="prose">
                            <h3>Formação Acadêmica</h3>
                            <ul>
                                <li>Graduação em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (Turma XL)</li>
                                <li>Residência Médica em Psiquiatria pela Faculdade de Ciências Médicas da Santa Casa de São Paulo</li>
                                <li>Curso de Formação em Acupuntura e Medicina Tradicional Chinesa (MTC) da Associação Médica Brasileira de Acupuntura, com estágio clínico no Hospital do Servidor Público Estadual (IAMSPE)</li>
                                <li>Residência Médica em Psiquiatria da Infância e Adolescência pela USP</li>
                                <li>Formação em Psicoterapia Analítico Funcional pelo Instituto Paradigma</li>
                                <li>Mestrado em Psiconeuroimunologia pela Universidad de Salamanca – Espanha (em andamento)</li>
                            </ul>

                            <h3>Experiência Clínica</h3>
                            <p>
                                Com mais de 21 anos de experiência, minha atuação principal está voltada para:
                            </p>
                            <ul>
                                <li>TDAH (Transtorno de Déficit de Atenção e Hiperatividade)</li>
                                <li>Transtornos de Ansiedade</li>
                                <li>Transtornos de Humor (Depressão e Transtorno Bipolar)</li>
                            </ul>

                            <p>
                                Atendo principalmente infância, adolescentes e adultos até 65 anos, sempre com uma abordagem integrativa e personalizada.
                            </p>

                            <h3>Atualizações e Pesquisas</h3>
                            <p>
                                Mantenho constante atualização através de:
                            </p>
                            <ul>
                                <li>Congressos nacionais e internacionais de psiquiatria</li>
                                <li>Cursos de aperfeiçoamento em novas técnicas terapêuticas</li>
                                <li>Pesquisas em áreas de ponta: fitocanabinóides, psiquiatria do estilo de vida e psiconeuroimunologia</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Tab: Como é minha consulta -->
                    <div id="consulta" class="tab-content">
                        <div class="prose">
                            <h3>O Processo da Consulta</h3>
                            
                            <p>
                                Em meu consultório, cada paciente é valorizado e compreendido, seja qual for sua luta ou desafio. Minha abordagem é baseada em três pilares fundamentais:
                            </p>

                            <h3>1. Escuta Ativa e Empática</h3>
                            <p>
                                A primeira consulta é um momento de conhecimento mútuo. Dedico tempo para entender não apenas seus sintomas, mas também sua história de vida, seus desafios diários e suas expectativas em relação ao tratamento.
                            </p>

                            <h3>2. Avaliação Detalhada</h3>
                            <p>
                                Nossa meta é:
                            </p>
                            <ul>
                                <li>Entender os sintomas apresentados</li>
                                <li>Traçar uma linha do tempo para compreender a evolução do quadro</li>
                                <li>Estabelecer corretamente o diagnóstico</li>
                                <li>Identificar possíveis comorbidades</li>
                            </ul>

                            <h3>3. Plano Terapêutico Personalizado</h3>
                            <p>
                                Após a avaliação, discutiremos todas as opções terapêuticas disponíveis. Cada detalhe do tratamento será explicado, incluindo:
                            </p>
                            <ul>
                                <li>Medicamentos (quando necessário) e suas indicações</li>
                                <li>Possíveis efeitos colaterais</li>
                                <li>Tempo esperado para a melhora</li>
                                <li>Abordagens complementares (psicoterapia, mudanças de estilo de vida, etc.)</li>
                            </ul>

                            <h3>Comunicação e Acompanhamento</h3>
                            <p>
                                A comunicação é uma prioridade na relação médico-paciente. Acredito que ela é a base para um tratamento bem-sucedido e é o que permite aos meus pacientes entender e participar ativamente de sua recuperação.
                            </p>

                            <p>
                                Durante o acompanhamento, avaliaremos regularmente a evolução do quadro e ajustaremos o tratamento conforme necessário, sempre respeitando sua individualidade e suas necessidades específicas.
                            </p>

                            <h3>Atendimento Humanizado</h3>
                            <blockquote>
                                "Antes de tudo um ser humano atento ao sofrimento de outro ser humano."
                            </blockquote>
                            <p>
                                Esta é a filosofia que guia cada consulta. Quem tem dor, emocional ou física, tem pressa. Por isso, busco ser o mais assertivo possível no tratamento, para ajudar da melhor forma.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
    <?php include 'components/whatsapp-button.php'; ?>

    <script>
        function switchTab(tabId, button) {
            // Remove active class from all tabs and buttons
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab-trigger').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to selected tab and button
            document.getElementById(tabId).classList.add('active');
            button.classList.add('active');
        }
    </script>
</body>
</html>
