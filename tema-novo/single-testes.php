<?php
/**
 * The template for displaying single Teste posts
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Inicia a sessão para armazenar o estado do teste.
if ( ! session_id() ) {
    session_start();
}

// Inicializa os dados da sessão para este teste específico.
$post_id = get_the_ID();
$session_key = 'teste_' . $post_id;

if ( ! isset( $_SESSION[ $session_key ] ) ) {
    $_SESSION[ $session_key ] = [
        'step'             => 'welcome',
        'current_question' => 0,
        'answers'          => [],
        'final_score'      => 0,
    ];
}

// Carrega as perguntas do campo repetidor do ACF.
$questions = [];
if ( function_exists( 'have_rows' ) && have_rows( 'perguntas', $post_id ) ) {
    while ( have_rows( 'perguntas', $post_id ) ) {
        the_row();
        $texto_pergunta = get_sub_field( 'texto_da_pergunta' );
        if ( $texto_pergunta ) {
            $questions[] = $texto_pergunta;
        }
    }
}

$options = [
    [ 'text' => 'Raramente', 'value' => 0 ],
    [ 'text' => 'Algumas Vezes', 'value' => 0.2 ],
    [ 'text' => 'Frequentemente', 'value' => 1.0 ],
    [ 'text' => 'Muito Frequentemente', 'value' => 1.35 ],
];

// Lógica de processamento do formulário.
if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    $action = $_POST['action'] ?? '';

    if ( $action === 'start' && ! empty( $questions ) ) {
        $_SESSION[ $session_key ] = [
            'step'             => 'questions',
            'current_question' => 0,
            'answers'          => [],
            'final_score'      => 0,
        ];
    } elseif ( $action === 'answer' ) {
        $answer_value = floatval( $_POST['answer'] ?? 0 );
        $_SESSION[ $session_key ]['answers'][] = $answer_value;

        if ( $_SESSION[ $session_key ]['current_question'] < count( $questions ) - 1 ) {
            $_SESSION[ $session_key ]['current_question']++;
        } else {
            $sum = array_sum( $_SESSION[ $session_key ]['answers'] );
            $_SESSION[ $session_key ]['final_score'] = round( $sum, 1 );
            $_SESSION[ $session_key ]['step'] = 'results';
        }
    } elseif ( $action === 'back' ) {
        if ( $_SESSION[ $session_key ]['current_question'] > 0 ) {
            array_pop( $_SESSION[ $session_key ]['answers'] );
            $_SESSION[ $session_key ]['current_question']--;
        } else {
            // Volta para a tela de boas-vindas se estiver na primeira pergunta
            $_SESSION[ $session_key ]['step'] = 'welcome';
        }
    } elseif ( $action === 'restart' ) {
        $_SESSION[ $session_key ] = [
            'step'             => 'welcome',
            'current_question' => 0,
            'answers'          => [],
            'final_score'      => 0,
        ];
    }

    // Redireciona para evitar reenvio do formulário, preservando o parâmetro debug se existir
    $redirect_url = get_permalink();
    if ( isset( $_GET['debug'] ) ) {
        $redirect_url = add_query_arg( 'debug', '1', $redirect_url );
    }
    header( 'Location: ' . $redirect_url );
    exit;
}

// Obtém o estado atual do teste.
$step             = $_SESSION[ $session_key ]['step'];
$current_question = $_SESSION[ $session_key ]['current_question'];
$final_score      = $_SESSION[ $session_key ]['final_score'];
$average_score    = 4.6;

get_header();
tema_novo_breadcrumbs();
?>

<?php if ( isset( $_GET['debug'] ) ) : ?>
    <?php if ( ! current_user_can( 'administrator' ) ) : ?>
        <div style="background: #ff5252; color: white; padding: 1rem; margin: 1rem; border-radius: 0.5rem; font-weight: bold;">
            ⚠️ Você precisa estar logado como ADMINISTRADOR para ver o modo debug!
        </div>
    <?php else : ?>
        <div style="background: #ffeb3b; padding: 1.5rem; margin: 1rem; border: 3px solid #f57c00; border-radius: 0.5rem; font-family: monospace; font-size: 0.9rem; position: relative; z-index: 9999;">
            <strong style="display: block; margin-bottom: 1rem; color: #e65100; font-size: 1.2rem; border-bottom: 2px solid #f57c00; padding-bottom: 0.5rem;">🔍 DEBUG MODE ATIVO</strong>
            
            <div style="background: white; padding: 1rem; border-radius: 0.25rem; margin-bottom: 1rem;">
                <strong style="color: #1976d2;">📊 Informações do Teste:</strong><br>
                <strong>Post ID:</strong> <?php echo $post_id; ?><br>
                <strong>Perguntas carregadas:</strong> <span style="color: <?php echo count( $questions ) > 0 ? 'green' : 'red'; ?>; font-weight: bold;"><?php echo count( $questions ); ?></span><br>
                <strong>ACF ativo:</strong> <?php echo function_exists( 'have_rows' ) ? '<span style="color: green;">✅ Sim</span>' : '<span style="color: red;">❌ Não</span>'; ?><br>
            </div>
            
            <div style="background: white; padding: 1rem; border-radius: 0.25rem; margin-bottom: 1rem;">
                <strong style="color: #1976d2;">🎯 Estado da Sessão:</strong><br>
                <strong>Step atual:</strong> <span style="color: #1976d2; font-weight: bold;"><?php echo $step; ?></span><br>
                <strong>Questão atual:</strong> <?php echo $current_question + 1; ?> de <?php echo count( $questions ); ?><br>
                <strong>Respostas registradas:</strong> <?php echo count( $_SESSION[ $session_key ]['answers'] ); ?><br>
                <strong>Pontuação final:</strong> <?php echo $final_score; ?><br>
            </div>
            
            <?php if ( count( $questions ) > 0 ) : ?>
                <div style="background: white; padding: 1rem; border-radius: 0.25rem;">
                    <strong style="color: #1976d2;">📝 Perguntas:</strong><br>
                    <strong>Primeira:</strong> <?php echo htmlspecialchars( substr( $questions[0], 0, 100 ) ); ?>...<br>
                    <strong>Última:</strong> <?php echo htmlspecialchars( substr( $questions[ count( $questions ) - 1 ], 0, 100 ) ); ?>...
                </div>
            <?php else : ?>
                <div style="background: #ffcdd2; padding: 1rem; border-radius: 0.25rem; border: 2px solid #d32f2f;">
                    <strong style="color: #d32f2f; font-size: 1.1rem;">⚠️ NENHUMA PERGUNTA ENCONTRADA!</strong><br>
                    <em style="color: #c62828;">Verifique se o campo ACF 'perguntas' com sub-campo 'texto_da_pergunta' está configurado corretamente no WordPress Admin.</em>
                </div>
            <?php endif; ?>
            
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid #f57c00; font-size: 0.8rem; color: #666;">
                <strong>Dica:</strong> Para desativar o debug, remova <code>?debug=1</code> da URL
            </div>
        </div>
    <?php endif; ?>
<?php endif; ?>

<style>
    /* Estilos copiados do teste-tdah.php, com alguns ajustes */
    .btn-primary:hover:not(:disabled) {
        background: linear-gradient(to bottom right, hsl(198, 92%, 42%), hsl(185, 58%, 64%)) !important;
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -5px hsl(198 92% 36% / 0.3);
    }
    .btn-outline:hover:not(:disabled) {
        background: hsl(198, 92%, 36%) !important;
        color: white !important;
        border-color: hsl(198, 92%, 36%) !important;
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -5px hsl(198 92% 36% / 0.2);
    }
    .btn-primary:active:not(:disabled),
    .btn-outline:active:not(:disabled) {
        transform: translateY(0);
    }
    .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    /* Feedback visual para radio buttons selecionados */
    input[type="radio"]:checked + span {
        background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1)) !important;
        border-color: hsl(198, 92%, 36%) !important;
        border-width: 2px;
        box-shadow: 0 4px 12px -2px hsl(198 92% 36% / 0.3);
        font-weight: 600;
    }
    
    /* Adiciona um indicador visual de seleção */
    input[type="radio"]:checked + span::before {
        content: '✓';
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: hsl(198, 92%, 36%);
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    /* Melhora o estilo do span para aceitar o ::before */
    label span {
        position: relative;
    }
    
    label[style*="cursor: pointer"]:hover span {
        background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.15), rgba(255, 255, 255, 1)) !important;
        border-color: hsl(198, 92%, 36%) !important;
        transform: translateX(4px);
    }
    .btn-primary, .btn-outline {
        transition: all 0.3s ease;
    }
</style>

<main>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <?php if ( $step === 'welcome' ) : ?>
            <!-- Tela de Boas-vindas -->
            <section style="min-height: 85vh; display: flex; align-items: center; padding: 6rem 1rem 3rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
                <div class="container" style="max-width: 56rem; margin: 0 auto;">
                    <div style="background: white; border-radius: 1rem; padding: 3rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">
                                <?php the_title(); ?>
                            </h1>
                            <div class="post-content" style="font-size: 1.125rem; color: hsl(210, 10%, 45%);">
                                <?php the_content(); ?>
                            </div>
                        </div>
                        <div style="background: rgba(0, 153, 204, 0.05); border-left: 4px solid hsl(198, 92%, 36%); padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-bottom: 2rem;">
                            <p style="margin: 0; font-size: 0.875rem; color: hsl(210, 10%, 35%); line-height: 1.6;">
                                Este teste não substitui uma avaliação médica profissional. Ele serve como uma ferramenta de triagem inicial.
                            </p>
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

        <?php elseif ( $step === 'questions' ) : ?>
            <?php if ( empty( $questions ) ) : ?>
                <!-- Mensagem de erro se não houver perguntas -->
                <section style="min-height: 85vh; display: flex; align-items: center; padding: 6rem 1rem 3rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
                    <div class="container" style="max-width: 56rem; margin: 0 auto;">
                        <div style="background: white; border-radius: 1rem; padding: 3rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                            <div style="text-align: center;">
                                <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem; color: hsl(0, 70%, 50%);">
                                    ⚠️ Erro: Teste não configurado
                                </h1>
                                <p style="font-size: 1.125rem; color: hsl(210, 10%, 45%); margin-bottom: 2rem;">
                                    Este teste ainda não possui perguntas cadastradas. Por favor, entre em contato com o administrador do site.
                                </p>
                                <form method="POST">
                                    <input type="hidden" name="action" value="restart">
                                    <button type="submit" class="btn btn-outline btn-lg">
                                        Voltar para o início
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            <?php else : ?>
                <!-- Tela de Perguntas -->
                <section style="min-height: 85vh; display: flex; align-items: center; padding: 6rem 1rem 3rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
                    <div class="container" style="max-width: 56rem; margin: 0 auto;">
                        <div style="background: white; border-radius: 1rem; padding: 3rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                            <div style="margin-bottom: 2rem;">
                                <p style="color: hsl(198, 92%, 36%); font-weight: 600; margin-bottom: 0.5rem;">
                                    Pergunta <?php echo $current_question + 1; ?> de <?php echo count( $questions ); ?>
                                </p>
                            <div style="width: 100%; height: 0.5rem; background: rgba(0, 153, 204, 0.1); border-radius: 9999px; overflow: hidden;">
                                <div style="width: <?php echo ( ( $current_question + 1 ) / count( $questions ) ) * 100; ?>%; height: 100%; background: linear-gradient(to right, hsl(198, 92%, 36%), hsl(185, 58%, 58%)); transition: width 0.3s; border-radius: 9999px;"></div>
                            </div>
                        </div>
                        <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 2rem; color: hsl(210, 10%, 20%); line-height: 1.5;">
                            <?php echo htmlspecialchars( $questions[ $current_question ] ); ?>
                        </h2>
                        <form method="POST" id="questionForm">
                            <input type="hidden" name="action" value="answer">
                            <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                                <?php foreach ( $options as $option ) : ?>
                                    <label style="position: relative; display: block; cursor: pointer;">
                                        <input type="radio" name="answer" value="<?php echo $option['value']; ?>" style="position: absolute; opacity: 0; width: 0; height: 0;" required onchange="document.getElementById('nextBtn').disabled = false;">
                                        <span style="display: block; padding: 1.25rem 1.5rem; border: 2px solid rgba(0, 153, 204, 0.2); border-radius: 0.75rem; background: white; transition: all 0.3s; font-size: 1rem; color: hsl(210, 10%, 30%);">
                                            <?php echo htmlspecialchars( $option['text'] ); ?>
                                        </span>
                                    </label>
                                <?php endforeach; ?>
                            </div>
                            <div style="display: flex; gap: 1rem;">
                                <!-- Sempre mostrar o botão Voltar -->
                                <button type="submit" formaction="<?php the_permalink(); ?>" name="action" value="back" class="btn btn-outline" style="flex: 1;">
                                    ← Voltar
                                </button>
                                <button type="submit" id="nextBtn" class="btn btn-primary" style="flex: 2;" disabled>
                                    <?php echo $current_question < count( $questions ) - 1 ? 'Próxima →' : 'Ver Resultados →'; ?>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <?php endif; ?>

        <?php elseif ( $step === 'results' ) : ?>
            <!-- Tela de Resultados -->
            <section style="min-height: 85vh; display: flex; align-items: center; padding: 6rem 1rem 3rem; background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.3), rgba(255, 255, 255, 1));">
                <div class="container" style="max-width: 56rem; margin: 0 auto;">
                    <div style="background: white; border-radius: 1rem; padding: 3rem; box-shadow: 0 10px 30px -10px hsl(198 92% 36% / 0.2);">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem; color: hsl(210, 10%, 20%);">
                                Resultado do Teste
                            </h1>
                        </div>
                        <div style="background: linear-gradient(to bottom right, rgba(185, 223, 237, 0.2), rgba(255, 255, 255, 1)); padding: 2rem; border-radius: 0.75rem; text-align: center; margin-bottom: 2rem; border: 2px solid rgba(0, 153, 204, 0.2);">
                            <p style="font-size: 3.75rem; font-weight: bold; color: hsl(198, 92%, 36%); margin-bottom: 0.5rem; line-height: 1;">
                                <?php echo number_format( $final_score, 1 ); ?>
                            </p>
                        </div>
                        <div style="background: rgba(0, 153, 204, 0.05); border-left: 4px solid hsl(198, 92%, 36%); padding: 1.5rem; border-radius: 0 0.5rem 0.5rem 0; margin-bottom: 2rem;">
                            <?php if ( $final_score > $average_score ) : ?>
                                <p>Sua pontuação está acima da média, o que pode indicar a presença de sintomas significativos. Recomendamos que você agende uma consulta com um especialista.</p>
                            <?php else : ?>
                                <p>Sua pontuação está dentro ou abaixo da média. No entanto, se você ainda está preocupado com os sintomas, recomendamos uma consulta com um especialista.</p>
                            <?php endif; ?>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <a href="https://wa.me/5511941543929?text=Olá! Gostaria de agendar uma consulta." target="_blank" class="btn btn-primary btn-lg" style="text-align: center; text-decoration: none;">
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

    <?php endwhile; endif; ?>
</main>

<script>
    // Previne o reenvio do formulário ao atualizar a página.
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
</script>

<?php
get_footer();
