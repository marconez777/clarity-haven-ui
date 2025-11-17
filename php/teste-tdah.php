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
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="styles-testes.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php 
    include 'components/breadcrumbs.php';
    render_breadcrumbs([
        ['label' => 'Testes', 'href' => '/testes'],
        ['label' => 'Teste TDAH']
    ]);
    ?>
    
    <main>
        <div class="test-container animate-fade-in">
            
            <?php if ($step === 'welcome'): ?>
                <!-- Welcome Screen -->
                <div class="card animate-scale-in">
                    <div class="test-header">
                        <div class="test-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                            </svg>
                        </div>
                        <h1 class="test-title">Teste de TDAH - Hiperatividade</h1>
                        <p class="test-description">
                            Este questionário avalia sintomas de hiperatividade e impulsividade em adultos.
                        </p>
                    </div>
                    
                    <ul class="info-list">
                        <li class="info-item">
                            <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>9 perguntas rápidas</span>
                        </li>
                        <li class="info-item">
                            <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Resultado imediato</span>
                        </li>
                        <li class="info-item">
                            <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Orientações de um especialista</span>
                        </li>
                    </ul>
                    
                    <div class="alert alert-info">
                        <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <p style="margin: 0; font-size: 0.875rem;">
                            Este teste não substitui uma avaliação médica profissional. Ele serve como uma ferramenta de triagem inicial.
                        </p>
                    </div>
                    
                    <form method="POST" style="margin-top: 2rem;">
                        <input type="hidden" name="action" value="start">
                        <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                            Iniciar Teste
                        </button>
                    </form>
                </div>
                
            <?php elseif ($step === 'questions'): ?>
                <!-- Questions Screen -->
                <div class="card animate-fade-in">
                    <div class="progress-container">
                        <p class="progress-text">
                            Pergunta <?php echo $current_question + 1; ?> de <?php echo count($questions); ?>
                        </p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: <?php echo (($current_question + 1) / count($questions)) * 100; ?>%;"></div>
                        </div>
                    </div>
                    
                    <h2 class="test-title" style="font-size: 1.5rem; margin-bottom: 2rem;">
                        <?php echo htmlspecialchars($questions[$current_question]); ?>
                    </h2>
                    
                    <form method="POST" id="questionForm">
                        <input type="hidden" name="action" value="answer">
                        
                        <div class="radio-group">
                            <?php foreach ($options as $option): ?>
                                <label class="radio-item">
                                    <input 
                                        type="radio" 
                                        name="answer" 
                                        value="<?php echo $option['value']; ?>" 
                                        class="radio-input"
                                        required
                                        onchange="document.getElementById('nextBtn').disabled = false"
                                    >
                                    <span class="radio-label"><?php echo htmlspecialchars($option['text']); ?></span>
                                </label>
                            <?php endforeach; ?>
                        </div>
                        
                        <div class="btn-group" style="margin-top: 2rem;">
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
                
            <?php elseif ($step === 'results'): ?>
                <!-- Results Screen -->
                <div class="results-container animate-scale-in">
                    <div class="card">
                        <div class="test-header">
                            <h1 class="test-title">Resultado do Teste</h1>
                            <p class="test-description">Pontuação de Hiperatividade e Impulsividade</p>
                        </div>
                        
                        <div class="score-circle">
                            <div class="score-number"><?php echo $final_score; ?></div>
                            <div class="score-label">pontos</div>
                        </div>
                        
                        <?php if ($final_score >= 4): ?>
                            <div class="alert alert-warning">
                                <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                <div>
                                    <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Sintomas Significativos</h3>
                                    <p style="margin: 0; font-size: 0.875rem; line-height: 1.5;">
                                        Sua pontuação sugere sintomas consistentes com TDAH. Recomendamos fortemente agendar uma consulta para avaliação profissional.
                                    </p>
                                </div>
                            </div>
                        <?php else: ?>
                            <div class="alert alert-info">
                                <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <div>
                                    <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Sintomas Abaixo da Média</h3>
                                    <p style="margin: 0; font-size: 0.875rem; line-height: 1.5;">
                                        Sua pontuação está abaixo do limite. Se você ainda tem preocupações, considere consultar um profissional.
                                    </p>
                                </div>
                            </div>
                        <?php endif; ?>
                        
                        <div class="comparison-grid">
                            <div class="comparison-item">
                                <div class="comparison-value"><?php echo $final_score; ?></div>
                                <div class="comparison-label">Seus Pontos</div>
                            </div>
                            <div class="comparison-item">
                                <div class="comparison-value"><?php echo $average_score; ?></div>
                                <div class="comparison-label">Média de Corte</div>
                            </div>
                        </div>
                        
                        <div class="btn-group" style="margin-top: 2rem;">
                            <a href="https://wa.me/5511941543929?text=<?php echo urlencode('Olá! Gostaria de agendar uma consulta para avaliação de TDAH.'); ?>" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="btn btn-primary" 
                               style="flex: 1; text-align: center;">
                                Agendar Consulta
                            </a>
                            <form method="POST" style="flex: 1;">
                                <input type="hidden" name="action" value="restart">
                                <button type="submit" class="btn btn-outline" style="width: 100%;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                                    </svg>
                                    Fazer Outro Teste
                                </button>
                            </form>
                        </div>
                        
                        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid hsl(var(--border));">
                            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;">Importante Saber</h3>
                            <ul style="list-style: disc; padding-left: 1.5rem; font-size: 0.875rem; color: hsl(var(--muted-foreground)); line-height: 1.6;">
                                <li>Este teste é uma ferramenta de triagem, não um diagnóstico definitivo</li>
                                <li>Um profissional qualificado pode fornecer uma avaliação completa</li>
                                <li>O tratamento adequado pode melhorar significativamente a qualidade de vida</li>
                                <li>TDAH é uma condição tratável com diversas opções terapêuticas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
            
        </div>
    </main>

    <?php include 'includes/footer.php'; ?>
    <?php include 'components/whatsapp-button.php'; ?>
    
    <script>
        // Auto scroll to top on page load
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Enhanced radio button interactions
        document.querySelectorAll('.radio-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.radio-item').forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                this.querySelector('input[type="radio"]').checked = true;
                document.getElementById('nextBtn').disabled = false;
            });
        });
        
        // Prevent double submit
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function() {
                const buttons = form.querySelectorAll('button[type="submit"]');
                buttons.forEach(btn => {
                    btn.disabled = true;
                    btn.style.opacity = '0.6';
                });
            });
        });
    </script>
</body>
</html>
