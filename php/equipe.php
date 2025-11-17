<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nossa Equipe - Dr Gabriel Lopes - Instituto Sanapta</title>
    <meta name="description" content="Conheça a equipe multidisciplinar do Instituto Sanapta. Psiquiatras, psicólogos, neuropsicólogos e nutricionistas especializados em saúde mental.">
    <meta name="keywords" content="equipe médica, psiquiatras, psicólogos, neuropsicologia, nutrição, Instituto Sanapta, São Paulo">
    <link rel="canonical" href="https://drgabriellopes.com.br/equipe">
    <link rel="stylesheet" href="styles.css">
    <style>
        .team-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 1rem;
        }

        .team-hero {
            text-align: center;
            margin-bottom: 4rem;
            padding: 4rem 1rem;
            background: linear-gradient(135deg, hsl(217, 71%, 53%) 0%, hsl(217, 71%, 63%) 100%);
            border-radius: 12px;
            color: white;
        }

        .team-hero h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .team-hero p {
            font-size: 1.125rem;
            opacity: 0.95;
            max-width: 600px;
            margin: 0 auto;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .team-card {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .team-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .team-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, hsl(217, 71%, 53%), hsl(217, 71%, 63%));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .team-name {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 0.5rem;
        }

        .team-role {
            color: hsl(217, 71%, 53%);
            font-weight: 500;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
        }

        .team-description {
            color: #666;
            line-height: 1.6;
            white-space: pre-line;
        }

        @media (max-width: 768px) {
            .team-hero h1 {
                font-size: 2rem;
            }

            .team-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php
    require_once 'components/breadcrumbs.php';
    render_breadcrumbs([
        ['label' => 'Nossa Equipe', 'href' => '/equipe']
    ]);
    ?>

    <main class="team-section">
        <div class="team-hero">
            <h1>Nossa Equipe</h1>
            <p>
                Conheça os profissionais especializados que fazem parte do Instituto Sanapta
            </p>
        </div>

        <div class="team-grid">
            <!-- Dr. Gabriel Lopes -->
            <div class="team-card">
                <div class="team-avatar">GL</div>
                <h2 class="team-name">Dr. Gabriel Lopes</h2>
                <p class="team-role">Fundador do Instituto Sanapta</p>
                <p class="team-description">Graduado em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (Turma XL).
Residência Médica em Psiquiatria pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.
Curso de Formação em Acupuntura e Medicina Tradicional Chinesa (MTC) da Associação Médica Brasileira de Acupuntura, com estágio clínico no Hospital do Servidor Público Estadual (IAMSPE).
Residência Médica em Psiquiatria da Infância e Adolescência pela USP.
Formação em Psicoterapia Analítico Funcional pelo Instituto Paradigma.
Mestrado em Psiconeuroimunologia pela Universidad de Salamanca – Espanha (em andamento).
Experiência clínica: TDAH, Transtornos de Ansiedade, Transtornos de Humor. Atende principalmente infância, adolescentes e adultos até 65 anos.

21 anos de experiência.</p>
            </div>

            <!-- Dra. Ana Carolina Sato -->
            <div class="team-card">
                <div class="team-avatar">AS</div>
                <h2 class="team-name">Dra. Ana Carolina Sato</h2>
                <p class="team-role">Co-fundadora do Instituto Sanapta</p>
                <p class="team-description">Graduada em Medicina pela UNIFESP – Escola Paulista de Medicina
Residência Médica em Pediatria pela UNIFESP – Escola Paulista de Medicina
Residência Médica em Medicina do Adolescente pela UNIFESP – Escola Paulista de Medicina
Título de Especialista pela Sociedade Brasileira de Pediatria.
Pós-graduada com especialização em Acupuntura pelo Center-AO, também vinculado a UNIFESP.
Título de Especialista em Acupuntura pela Associação Médica Brasileira de Acupuntura.
Idealizadora do método SATO de acupuntura médica (Sistema de Acupuntura com Tratamento Orientado), terapia que agrega a teoria da medicina chinesa às práticas modernas como psiconeuroimunologia, barra de access, medicina emocional, medicina holística, florais de Bach, aromaterapia, mindfulness e biomagnetismo, possuindo certificação em todas as modalidades.
Atualmente é mestranda em Psiconeuroimunologia pela Universidad de Salamanca na Espanha.
Atende desde crianças recém-nascidas a idosos.
Grande experiência com crianças com problemas neurológicos, paralisia cerebral, autismo. Atende gestantes e mulheres em fase de fertilização com resultados animadores.
21 anos de experiência em medicina chinesa.</p>
            </div>

            <!-- Dra. Vanessa Olivers -->
            <div class="team-card">
                <div class="team-avatar">VO</div>
                <h2 class="team-name">Dra. Vanessa Olivers</h2>
                <p class="team-role">Neuropsicóloga</p>
                <p class="team-description">Neuropsicóloga formada pelo Instituto de Psiquiatria do Hospital das Clínicas de São Paulo (Ipq- HC-FMUSP) com ênfase em avaliação neuropsicológica e expertise na avaliação e diagnósticos diferencial de TDAH em adolescentes e adultos, bem como de todas as suas comorbidades conhecidas. Atendimento a saúde mental em psicoterapia psicodinâmica.
Psicóloga clínica de adolescentes e adultos com maior experiência em TDAH e suas comorbidades.
A importância da avaliação neuropsicológica está não só no fato de ser o exame mais importante para confirmar o diagnóstico de TDAH, mas principalmente para nortear o tratamento da própria terapia, realizada em nossa clínica. Coordenadora do setor de avaliação diagnóstica em neuropsicologia do Instituto Sanapta.</p>
            </div>

            <!-- Wladimir Martins -->
            <div class="team-card">
                <div class="team-avatar">WM</div>
                <h2 class="team-name">Wladimir Martins</h2>
                <p class="team-role">Psicólogo CRP 36.438/6</p>
                <p class="team-description">Especialização na teoria Psicodramática (EPP) e mestrado em violência como estratégia de convivência (Assédio moral). Atendimento de adultos e casais. Larga experiência na academia e como docente.</p>
            </div>

            <!-- Michelle Ribeiro Teixeira -->
            <div class="team-card">
                <div class="team-avatar">MT</div>
                <h2 class="team-name">Michelle Ribeiro Teixeira</h2>
                <p class="team-role">Psicóloga</p>
                <p class="team-description">Psicóloga graduada pelo Centro Universitário Anhanguera de São Paulo e pós graduada em Terapia Cognitivo Comportamental pelo Centro de Estudos do Comportamento.
Atendimento clínico de adolescentes e adultos.
Formação em Terapia do Esquema (Schema Therapy) pelo Centro de Psicologia Aplicada.
Transtornos do Humor, Transtorno Obsessivo Compulsivo, Transtorno Bipolar, Transtornos de Personalidade e Transtornos Alimentares.</p>
            </div>

            <!-- Rebeca Marques -->
            <div class="team-card">
                <div class="team-avatar">RM</div>
                <h2 class="team-name">Rebeca Marques</h2>
                <p class="team-role">Nutricionista</p>
                <p class="team-description">Graduada em Nutrição. Pós graduada em Nutrição clínica funcional. Pós graduação em andamento em Transtornos Alimentares e Obesidade. Atendimento na área clínica com foco no tratamento e prevenção de doenças e transtornos relacionados à alimentação, como obesidade, diabetes, hipertensão, dislipidemias, gastrite, refluxo, entre outros.
Grande experiência em transtornos alimentares como anorexia, bulimia e compulsão alimentar.
Especialização com foco em melhora da composição corporal com técnicas de educação alimentar visando uma melhor relação com a comida de forma leve e descomplicada.</p>
            </div>

            <!-- Dra. Sandra Beatriz -->
            <div class="team-card">
                <div class="team-avatar">SB</div>
                <h2 class="team-name">Dra. Sandra Beatriz</h2>
                <p class="team-role">Psiquiatra</p>
                <p class="team-description">Médica graduada pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Residência médica em Psiquiatria na Irmandade da Santa Casa de Misericórdia de São Paulo. Psicoterapeuta de orientação dinâmica e analítica. Formação em Terapia Cognitivo Comportamental. Habilitação em Psiquiatria Forense pela Associação Brasileira de Psiquiatria.
Atendimento de adolescentes e adultos. Ampla experiência em dependência química.</p>
            </div>
        </div>
    </main>

    <?php 
    require_once 'components/whatsapp-button.php';
    include 'includes/footer.php'; 
    ?>
</body>
</html>