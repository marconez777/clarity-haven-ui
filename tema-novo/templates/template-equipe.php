<?php
/**
 * Template Name: Nossa Equipe
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
.team-page {
    min-height: 100vh;
    padding: 2rem 0 4rem;
}

.team-header {
    text-align: center;
    margin-bottom: 4rem;
    padding: 0 1rem;
}

.team-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: hsl(var(--foreground));
    margin-bottom: 1rem;
}

.team-header p {
    font-size: 1.125rem;
    color: hsl(var(--muted-foreground));
    max-width: 42rem;
    margin: 0 auto;
}

.team-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (min-width: 768px) {
    .team-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.team-member {
    background: hsl(var(--card));
    border: 1px solid hsl(var(--border));
    border-radius: 0.75rem;
    padding: 2rem;
    transition: all 0.3s ease;
}

.team-member:hover {
    box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);
    transform: translateY(-2px);
}

.team-member-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.team-avatar {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    flex-shrink: 0;
}

.team-member-info h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: hsl(var(--foreground));
    margin-bottom: 0.25rem;
}

.team-member-role {
    font-size: 0.875rem;
    color: hsl(var(--primary));
    font-weight: 500;
}

.team-member-description {
    color: hsl(var(--muted-foreground));
    line-height: 1.7;
    font-size: 0.9375rem;
    white-space: pre-line;
}
</style>

<main class="team-page">
    <div class="team-header">
        <h1>Nossa Equipe Multidisciplinar</h1>
        <p>
            Conheça os profissionais especializados que compõem nossa equipe, 
            oferecendo um atendimento integral e humanizado para sua saúde mental.
        </p>
    </div>

    <div class="team-grid">
        <?php
        // Dados dos membros da equipe
        $team_members = array(
            array(
                'name' => 'Dr. Gabriel Lopes',
                'role' => 'Fundador do Instituto Sanapta',
                'initials' => 'GL',
                'description' => 'Graduado em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (Turma XL).
Residência Médica em Psiquiatria pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.
Curso de Formação em Acupuntura e Medicina Tradicional Chinesa (MTC) da Associação Médica Brasileira de Acupuntura, com estágio clínico no Hospital do Servidor Público Estadual (IAMSPE).
Residência Médica em Psiquiatria da Infância e Adolescência pela USP.
Formação em Psicoterapia Analítico Funcional pelo Instituto Paradigma.
Mestrado em Psiconeuroimunologia pela Universidad de Salamanca – Espanha (em andamento).
Experiência clínica: TDAH, Transtornos de Ansiedade, Transtornos de Humor. Atende principalmente infância, adolescentes e adultos até 65 anos.

21 anos de experiência.'
            ),
            array(
                'name' => 'Dra. Ana Carolina Sato',
                'role' => 'Co-fundadora do Instituto Sanapta',
                'initials' => 'AS',
                'description' => 'Graduada em Medicina pela UNIFESP – Escola Paulista de Medicina
Residência Médica em Pediatria pela UNIFESP – Escola Paulista de Medicina
Residência Médica em Medicina do Adolescente pela UNIFESP – Escola Paulista de Medicina
Título de Especialista pela Sociedade Brasileira de Pediatria.
Pós-graduada com especialização em Acupuntura pelo Center-AO, também vinculado a UNIFESP.
Título de Especialista em Acupuntura pela Associação Médica Brasileira de Acupuntura.
Idealizadora do método SATO de acupuntura médica (Sistema de Acupuntura com Tratamento Orientado), terapia que agrega a teoria da medicina chinesa às práticas modernas como psiconeuroimunologia, barra de access, medicina emocional, medicina holística, florais de Bach, aromaterapia, mindfulness e biomagnetismo, possuindo certificação em todas as modalidades.
Atualmente é mestranda em Psiconeuroimunologia pela Universidad de Salamanca na Espanha.
Atende desde crianças recém-nascidas a idosos.
Grande experiência com crianças com problemas neurológicos, paralisia cerebral, autismo. Atende gestantes e mulheres em fase de fertilização com resultados animadores.
21 anos de experiência em medicina chinesa.'
            ),
            array(
                'name' => 'Dra. Vanessa Olivers',
                'role' => 'Neuropsicóloga',
                'initials' => 'VO',
                'description' => 'Neuropsicóloga formada pelo Instituto de Psiquiatria do Hospital das Clínicas de São Paulo (Ipq- HC-FMUSP) com ênfase em avaliação neuropsicológica e expertise na avaliação e diagnósticos diferencial de TDAH em adolescentes e adultos, bem como de todas as suas comorbidades conhecidas. Atendimento a saúde mental em psicoterapia psicodinâmica.
Psicóloga clínica de adolescentes e adultos com maior experiência em TDAH e suas comorbidades.
A importância da avaliação neuropsicológica está não só no fato de ser o exame mais importante para confirmar o diagnóstico de TDAH, mas principalmente para nortear o tratamento da própria terapia, realizada em nossa clínica. Coordenadora do setor de avaliação diagnóstica em neuropsicologia do Instituto Sanapta.'
            ),
            array(
                'name' => 'Wladimir Martins',
                'role' => 'Psicólogo CRP 36.438/6',
                'initials' => 'WM',
                'description' => 'Especialização na teoria Psicodramática (EPP) e mestrado em violência como estratégia de convivência (Assédio moral). Atendimento de adultos e casais. Larga experiência na academia e como docente.'
            ),
            array(
                'name' => 'Michelle Ribeiro Teixeira',
                'role' => 'Psicóloga',
                'initials' => 'MT',
                'description' => 'Formada pela Universidade São Francisco. Possui experiência em Avaliação Neuropsicológica no Hospital das Clínicas, com especialização em Terapia Cognitivo Comportamental e capacitação em Terapia de Processamento Cognitivo. Atuou na Rede de Atenção Psicossocial como psicóloga de CAPS (Centro de Atenção Psicossocial) e como psicóloga no Residencial Terapêutico acolhendo pessoas em sofrimento psíquico grave. Atende principalmente mulheres adultas com TDAH e comorbidades associadas.'
            ),
            array(
                'name' => 'Sofia Hamoui',
                'role' => 'Psicóloga',
                'initials' => 'SH',
                'description' => 'Graduada em Psicologia pela Universidade Presbiteriana Mackenzie. Experiência na área clínica com atendimentos de adolescentes e adultos. Especialista em Terapia Cognitivo Comportamental pelo Instituto de Terapia Cognitiva (ITC). Capacitação em Transtorno do Espectro Autista (TEA), atuando principalmente com adolescentes e adultos dentro do espectro. Realiza atendimentos de TDAH e demais transtornos com suas comorbidades, sendo elas depressão, ansiedade, transtorno de personalidade, entre outras.'
            ),
            array(
                'name' => 'Danielle Fonseca',
                'role' => 'Nutricionista',
                'initials' => 'DF',
                'description' => 'Graduada em Nutrição pela Universidade Bandeirantes de São Paulo. Pós-graduada em Nutrição Esportiva Funcional pela VP Consultoria Nutricional. Certificação em Nutrição Comportamental. Atua no consultório com ênfase em emagrecimento saudável, comportamento alimentar, gestantes e nutrição esportiva funcional.'
            )
        );

        foreach ( $team_members as $member ) :
        ?>
            <div class="team-member">
                <div class="team-member-header">
                    <div class="team-avatar">
                        <?php echo esc_html( $member['initials'] ); ?>
                    </div>
                    <div class="team-member-info">
                        <h3><?php echo esc_html( $member['name'] ); ?></h3>
                        <p class="team-member-role"><?php echo esc_html( $member['role'] ); ?></p>
                    </div>
                </div>
                <div class="team-member-description">
                    <?php echo nl2br( esc_html( $member['description'] ) ); ?>
                </div>
            </div>
        <?php
        endforeach;
        ?>
    </div>

    <!-- CTA Section -->
    <div style="text-align: center; margin-top: 4rem; padding: 3rem 1rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.1), rgba(255, 255, 255, 1)); border-radius: 1rem; max-width: 56rem; margin-left: auto; margin-right: auto;">
        <h2 style="font-size: 1.875rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 1rem;">
            Agende sua consulta
        </h2>
        <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
            Entre em contato e agende um horário com um de nossos profissionais
        </p>
        <a href="https://wa.me/5511941543929" target="_blank" class="btn btn-primary btn-lg">
            Fale conosco agora
        </a>
    </div>
</main>

<?php
get_footer();
