<?php
session_start();

// Initialize session data
if (!isset($_SESSION['teste_tdah'])) {
    $_SESSION['teste_tdah'] = [
        'step' => 'welcome',
        'current_question' => 0,
        'answers' => [],
        'final_score' => 0,
        'started_at' => time()
    ];
}

// Questions array (identical to React version)
$questions = [
    "Com que frequência você fica se mexendo na cadeira ou balançando as mãos ou os pés quando precisa ficar sentado(a) por muito tempo?",
    "Com que frequência você se levanta da cadeira em reuniões ou em outras situações onde deveria ficar sentado(a)?",
    'Com que frequência você se sente ativo(a) demais e necessitando fazer coisas, como se estivesse "com um motor ligado"?',
    "Com que frequência você tem dificuldade para manter a atenção em tarefas ou atividades de lazer?",
    "Com que frequência você se pega falando demais em situações sociais?",
    "Com que frequência você tem dificuldade para esperar nas situações onde cada um tem a sua vez?",
    "Com que frequência você interrompe os outros quando eles estão ocupados?",
    "Com que frequência você tem dificuldade para sossegar e relaxar quando tem tempo livre para você?",
    "Quando você está conversando, com que frequência você se pega terminando as frases das pessoas antes delas?"
];

$options = [
    ['text' => 'Raramente', 'value' => 0],
    ['text' => 'Algumas Vezes', 'value' => 0.2],
    ['text' => 'Frequentemente', 'value' => 1.0],
    ['text' => 'Muito Frequentemente', 'value' => 1.35]
];

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    
    if ($action === 'start') {
        $_SESSION['teste_tdah'] = [
            'step' => 'questions',
            'current_question' => 0,
            'answers' => [],
            'final_score' => 0,
            'started_at' => time()
        ];
    } elseif ($action === 'answer') {
        $answer_value = floatval($_POST['answer'] ?? 0);
        $_SESSION['teste_tdah']['answers'][] = $answer_value;
        
        if ($_SESSION['teste_tdah']['current_question'] < count($questions) - 1) {
            $_SESSION['teste_tdah']['current_question']++;
        } else {
            // Calculate final score
            $sum = array_sum($_SESSION['teste_tdah']['answers']);
            $_SESSION['teste_tdah']['final_score'] = round($sum, 1);
            $_SESSION['teste_tdah']['step'] = 'results';
        }
    } elseif ($action === 'back') {
        if ($_SESSION['teste_tdah']['current_question'] > 0) {
            array_pop($_SESSION['teste_tdah']['answers']);
            $_SESSION['teste_tdah']['current_question']--;
        }
    } elseif ($action === 'restart') {
        $_SESSION['teste_tdah'] = [
            'step' => 'welcome',
            'current_question' => 0,
            'answers' => [],
            'final_score' => 0,
            'started_at' => time()
        ];
    }
    
    // Redirect to prevent form resubmission
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit;
}

$step = $_SESSION['teste_tdah']['step'];
$current_question = $_SESSION['teste_tdah']['current_question'];
$answers = $_SESSION['teste_tdah']['answers'];
$final_score = $_SESSION['teste_tdah']['final_score'];
$average_score = 4.6;
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste de TDAH - Hiperatividade Adulto | Dr Gabriel Lopes</title>
    <meta name="description" content="Teste online de TDAH para adultos. Avalie sintomas de hiperatividade e déficit de atenção. Resultado imediato e orientações profissionais.">
    <meta name="keywords" content="teste TDAH, TDAH adulto, hiperatividade, déficit de atenção, teste online TDAH">
    <link rel="canonical" href="https://drgabriellopes.com.br/teste-tdah">
    
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="Teste de TDAH - Hiperatividade Adulto | Dr Gabriel Lopes">
    <meta property="og:description" content="Teste online de TDAH para adultos. Avalie sintomas de hiperatividade e déficit de atenção. Resultado imediato e orientações profissionais.">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Teste de TDAH - Hiperatividade Adulto | Dr Gabriel Lopes">
    <meta name="twitter:description" content="Teste online de TDAH para adultos. Avalie sintomas de hiperatividade e déficit de atenção.">
    
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php 
    include 'components/breadcrumbs.php';
    render_breadcrumbs([
        ['label' => 'Especialidades', 'href' => 'especialidades.php'],
        ['label' => 'TDAH', 'href' => 'tdah.php'],
        ['label' => 'Teste de TDAH', 'href' => '#']
    ]);
    ?>
    
    <main>
            
            <?php if ($step === 'welcome'): ?>
                <!-- Welcome Screen -->
                <section style="min-height: 85vh; display: flex; align-items: center; padding: 6rem 1rem 3rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
                    <div class="container" style="max-width: 56rem; margin: 0 auto;">
                        <div style="background: white; border-radius: 1rem; padding: 3rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                            <div style="text-align: center; margin-bottom: 3rem;">
                                <div style="width: 5rem; height: 5rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.3);">
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                                    </svg>
                                </div>
                                <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">
                                    Teste de TDAH - Hiperatividade
                                </h1>
                                <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%);">
                                    Este questionário avalia sintomas de hiperatividade e impulsividade em adultos.
                                </p>
                            </div>
                            
                            <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 0.75rem; margin-bottom: 2rem; border: 2px solid rgba(0, 153, 204, 0.1);">
                                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
                                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div style="width: 2rem; height: 2rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span style="color: hsl(210, 10%, 30%); font-size: 1rem;">9 perguntas rápidas</span>
                                    </li>
                                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div style="width: 2rem; height: 2rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span style="color: hsl(210, 10%, 30%); font-size: 1rem;">Resultado imediato</span>
                                    </li>
                                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div style="width: 2rem; height: 2rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span style="color: hsl(210, 10%, 30%); font-size: 1rem;">Orientações de um especialista</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div style="background: rgba(0, 153, 204, 0.05); border-left: 4px solid hsl(198, 92%, 36%); padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-bottom: 2rem;">
                                <div style="display: flex; gap: 1rem;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(198, 92%, 36%)" stroke-width="2" style="flex-shrink: 0; margin-top: 0.125rem;">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                    <p style="margin: 0; font-size: 0.875rem; color: hsl(210, 10%, 35%); line-height: 1.6;">
                                        Este teste não substitui uma avaliação médica profissional. Ele serve como uma ferramenta de triagem inicial.
                                    </p>
                                </div>
                            </div>
                            
                            <form method="POST">
                                <input type="hidden" name="action" value="start">
                                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                                    Iniciar Teste
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                
            <?php elseif ($step === 'questions'): ?>
                <!-- Questions Screen -->
                <section style="min-height: 85vh; display: flex; align-items: center; padding: 6rem 1rem 3rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
                    <div class="container" style="max-width: 56rem; margin: 0 auto;">
                        <div style="background: white; border-radius: 1rem; padding: 3rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                            <div style="margin-bottom: 2rem;">
                                <p style="color: hsl(198, 92%, 36%); font-weight: 600; margin-bottom: 0.5rem;">
                                    Pergunta <?php echo $current_question + 1; ?> de <?php echo count($questions); ?>
                                </p>
                                <div style="width: 100%; height: 0.5rem; background: rgba(0, 153, 204, 0.1); border-radius: 9999px; overflow: hidden;">
                                    <div style="width: <?php echo (($current_question + 1) / count($questions)) * 100; ?>%; height: 100%; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); transition: width 0.3s; border-radius: 9999px;"></div>
                                </div>
                            </div>
                            
                            <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 2rem; color: hsl(210, 10%, 20%); line-height: 1.5;">
                                <?php echo htmlspecialchars($questions[$current_question]); ?>
                            </h2>
                            
                            <form method="POST" id="questionForm">
                                <input type="hidden" name="action" value="answer">
                                
                                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                                    <?php foreach ($options as $option): ?>
                                        <label style="position: relative; display: block; cursor: pointer;">
                                            <input 
                                                type="radio" 
                                                name="answer" 
                                                value="<?php echo $option['value']; ?>" 
                                                style="position: absolute; opacity: 0; width: 0; height: 0;"
                                                required
                                                onchange="document.getElementById('nextBtn').disabled = false; this.parentElement.parentElement.querySelectorAll('label').forEach(l => l.style.background = 'white'); this.parentElement.style.background = 'linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1))'; this.parentElement.style.borderColor = 'hsl(198, 92%, 36%)';"
                                            >
                                            <span style="display: block; padding: 1.25rem 1.5rem; border: 2px solid rgba(0, 153, 204, 0.2); border-radius: 0.75rem; background: white; transition: all 0.3s; font-size: 1rem; color: hsl(210, 10%, 30%);">
                                                <?php echo htmlspecialchars($option['text']); ?>
                                            </span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>
                                
                                <div style="display: flex; gap: 1rem;">
                                    <?php if ($current_question > 0): ?>
                                        <button 
                                            type="submit" 
                                            formaction="<?php echo $_SERVER['PHP_SELF']; ?>"
                                            name="action"
                                            value="back"
                                            class="btn btn-outline"
                                            style="flex: 1;"
                                        >
                                            Voltar
                                        </button>
                                    <?php endif; ?>
                                    <button 
                                        type="submit" 
                                        id="nextBtn"
                                        class="btn btn-primary" 
                                        style="flex: 1;"
                                        disabled
                                    >
                                        <?php echo $current_question < count($questions) - 1 ? 'Próxima' : 'Ver Resultados'; ?>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                
            <?php elseif ($step === 'results'): ?>
                <!-- Results Screen -->
                <section style="min-height: 85vh; display: flex; align-items: center; padding: 6rem 1rem 3rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
                    <div class="container" style="max-width: 56rem; margin: 0 auto;">
                        <div style="background: white; border-radius: 1rem; padding: 3rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                            <div style="text-align: center; margin-bottom: 3rem;">
                                <div style="width: 5rem; height: 5rem; background: linear-gradient(to bottom right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.3);">
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">
                                    Resultado do Teste
                                </h1>
                                <p style="font-size: 1rem; color: hsl(210, 10%, 45%);">
                                    Sua pontuação foi calculada com base nas suas respostas
                                </p>
                            </div>
                            
                            <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 0.75rem; text-align: center; margin-bottom: 2rem; border: 2px solid rgba(0, 153, 204, 0.2);">
                                <p style="font-size: 0.875rem; color: hsl(210, 10%, 45%); margin-bottom: 0.5rem;">
                                    Sua Pontuação
                                </p>
                                <p style="font-size: 3.75rem; font-weight: bold; color: hsl(198, 92%, 36%); margin-bottom: 0.5rem; line-height: 1;">
                                    <?php echo number_format($final_score, 1); ?>
                                </p>
                                <p style="font-size: 0.875rem; color: hsl(210, 10%, 45%);">
                                    Média populacional: <?php echo number_format($average_score, 1); ?>
                                </p>
                            </div>
                            
                            <div style="background: rgba(0, 153, 204, 0.05); border-left: 4px solid hsl(198, 92%, 36%); padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-bottom: 2rem;">
                                <h3 style="font-weight: 600; margin-bottom: 0.75rem; color: hsl(210, 10%, 20%);">
                                    O que significa este resultado?
                                </h3>
                                <?php if ($final_score > $average_score): ?>
                                    <p style="margin-bottom: 1rem; color: hsl(210, 10%, 35%); line-height: 1.6;">
                                        Sua pontuação está acima da média populacional, o que pode indicar a presença de sintomas significativos de hiperatividade e impulsividade.
                                    </p>
                                    <p style="margin: 0; color: hsl(210, 10%, 35%); line-height: 1.6;">
                                        Recomendamos fortemente que você agende uma consulta com um especialista para uma avaliação completa e discussão sobre possíveis estratégias de tratamento.
                                    </p>
                                <?php else: ?>
                                    <p style="margin-bottom: 1rem; color: hsl(210, 10%, 35%); line-height: 1.6;">
                                        Sua pontuação está dentro ou abaixo da média populacional. No entanto, se você ainda está preocupado com sintomas de TDAH, recomendamos uma consulta com um especialista.
                                    </p>
                                    <p style="margin: 0; color: hsl(210, 10%, 35%); line-height: 1.6;">
                                        Lembre-se de que este teste não substitui uma avaliação profissional completa.
                                    </p>
                                <?php endif; ?>
                            </div>
                            
                            <div style="background: rgba(255, 193, 7, 0.1); border-left: 4px solid #ffc107; padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-bottom: 2rem;">
                                <div style="display: flex; gap: 1rem;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2" style="flex-shrink: 0; margin-top: 0.125rem;">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                    <p style="margin: 0; font-size: 0.875rem; color: hsl(210, 10%, 35%); line-height: 1.6;">
                                        <strong style="display: block; margin-bottom: 0.25rem;">Importante:</strong>
                                        Este teste é uma ferramenta de triagem e não substitui o diagnóstico médico. Apenas um profissional qualificado pode fazer uma avaliação completa considerando seu histórico médico e situação individual.
                                    </p>
                                </div>
                            </div>
                            
                            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                <a href="https://wa.me/5511941543929?text=Olá! Gostaria de agendar uma consulta para avaliação de TDAH." target="_blank" class="btn btn-primary btn-lg" style="text-align: center; text-decoration: none;">
                                    Agende sua Avaliação
                                </a>
                                <form method="POST">
                                    <input type="hidden" name="action" value="restart">
                                    <button type="submit" class="btn btn-outline btn-lg" style="width: 100%;">
                                        Refazer o Teste
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            <?php endif; ?>
        
    </main>
    
    <?php include 'includes/footer.php'; ?>
    <?php include 'components/whatsapp-button.php'; ?>
    
    <script>
        // Prevent form resubmission on refresh
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
        
        // Scroll to top on step change
        window.scrollTo({top: 0, behavior: 'smooth'});
    </script>
</body>
</html>
