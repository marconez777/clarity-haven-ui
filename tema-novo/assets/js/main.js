/**
 * Main JavaScript File
 * Tema Novo - Dr Gabriel Lopes
 *
 * @package Tema_Novo
 */

(function() {
    'use strict';
    
    /**
     * Dropdown functionality
     */
    function initDropdown() {
        const dropdown = document.querySelector('.dropdown');
        const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');
        
        if (dropdown && dropdownToggle) {
            // Toggle on click
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
            
            // Close on outside click
            document.addEventListener('click', function(e) {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });
        }
    }
    
    /**
     * TDAH Test functionality
     */
    function initTDAHTest() {
        const testForm = document.getElementById('tdah-test-form');
        if (!testForm) return;
        
        let currentSession = 1;
        const totalSessions = 6;
        let answers = {};
        
        // Session questions data
        const sessions = {
            1: {
                title: "Desatenção - Parte 1",
                questions: [
                    "Não presta atenção em detalhes ou comete erros por descuido",
                    "Tem dificuldade para manter a atenção em tarefas ou atividades",
                    "Parece não escutar quando lhe dirigem a palavra",
                    "Não segue instruções até o fim e não consegue terminar trabalhos"
                ]
            },
            2: {
                title: "Desatenção - Parte 2",
                questions: [
                    "Tem dificuldade para organizar tarefas e atividades",
                    "Evita ou reluta em se envolver em tarefas que exigem esforço mental prolongado",
                    "Perde coisas necessárias para tarefas ou atividades",
                    "Distrai-se facilmente com estímulos externos"
                ]
            },
            3: {
                title: "Desatenção - Parte 3",
                questions: [
                    "É esquecido em relação a atividades cotidianas"
                ]
            },
            4: {
                title: "Hiperatividade/Impulsividade - Parte 1",
                questions: [
                    "Mexe ou bate com as mãos ou os pés ou se contorce na cadeira",
                    "Levanta da cadeira em situações em que se espera que permaneça sentado",
                    "Corre de um lado para outro ou sobe nas coisas em situações inapropriadas",
                    "É incapaz de brincar ou se envolver em atividades de lazer calmamente"
                ]
            },
            5: {
                title: "Hiperatividade/Impulsividade - Parte 2",
                questions: [
                    "Não para ou frequentemente está a 'mil por hora'",
                    "Fala demais",
                    "Responde às perguntas de forma precipitada antes que sejam concluídas",
                    "Tem dificuldade para esperar a sua vez"
                ]
            },
            6: {
                title: "Hiperatividade/Impulsividade - Parte 3",
                questions: [
                    "Interrompe ou se intromete em conversas e atividades dos outros"
                ]
            }
        };
        
        // Render session
        function renderSession(sessionNum) {
            const session = sessions[sessionNum];
            const container = document.getElementById('questions-container');
            const progressBar = document.querySelector('.progress-fill');
            const progressText = document.querySelector('.progress-text');
            
            // Update progress
            const progress = (sessionNum / totalSessions) * 100;
            progressBar.style.width = progress + '%';
            progressText.textContent = `Sessão ${sessionNum} de ${totalSessions}`;
            
            // Update title
            document.getElementById('session-title').textContent = session.title;
            
            // Clear container
            container.innerHTML = '';
            
            // Render questions
            session.questions.forEach((question, index) => {
                const questionNum = getQuestionNumber(sessionNum, index);
                const questionHtml = `
                    <div class="radio-group" style="margin-bottom: 2rem;">
                        <label style="font-weight: 500; margin-bottom: 1rem; display: block; color: hsl(var(--foreground));">
                            ${questionNum}. ${question}
                        </label>
                        <div style="display: grid; gap: 0.75rem;">
                            ${renderRadioOption(questionNum, 0, 'Raramente ou nunca')}
                            ${renderRadioOption(questionNum, 1, 'Às vezes')}
                            ${renderRadioOption(questionNum, 2, 'Frequentemente')}
                            ${renderRadioOption(questionNum, 3, 'Muito frequentemente')}
                        </div>
                    </div>
                `;
                container.innerHTML += questionHtml;
            });
            
            // Update buttons
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (sessionNum === 1) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'inline-flex';
            }
            
            if (sessionNum === totalSessions) {
                nextBtn.textContent = 'Ver Resultado';
            } else {
                nextBtn.textContent = 'Próxima';
            }
            
            // Restore saved answers
            restoreAnswers();
        }
        
        // Get question number across all sessions
        function getQuestionNumber(sessionNum, questionIndex) {
            let num = 0;
            for (let i = 1; i < sessionNum; i++) {
                num += sessions[i].questions.length;
            }
            return num + questionIndex + 1;
        }
        
        // Render radio option
        function renderRadioOption(questionNum, value, label) {
            const checked = answers[questionNum] === value ? 'checked' : '';
            return `
                <label class="radio-item ${checked ? 'checked' : ''}">
                    <input type="radio" name="q${questionNum}" value="${value}" class="radio-input" ${checked}>
                    <span class="radio-label">${label}</span>
                </label>
            `;
        }
        
        // Restore saved answers
        function restoreAnswers() {
            document.querySelectorAll('.radio-input').forEach(input => {
                input.addEventListener('change', function() {
                    const questionNum = parseInt(this.name.replace('q', ''));
                    answers[questionNum] = parseInt(this.value);
                    
                    // Update visual state
                    const radioGroup = this.closest('.radio-group');
                    radioGroup.querySelectorAll('.radio-item').forEach(item => {
                        item.classList.remove('checked');
                    });
                    this.closest('.radio-item').classList.add('checked');
                });
            });
        }
        
        // Next button
        document.getElementById('next-btn')?.addEventListener('click', function() {
            if (currentSession < totalSessions) {
                currentSession++;
                renderSession(currentSession);
                window.scrollTo(0, 0);
            } else {
                showResults();
            }
        });
        
        // Previous button
        document.getElementById('prev-btn')?.addEventListener('click', function() {
            if (currentSession > 1) {
                currentSession--;
                renderSession(currentSession);
                window.scrollTo(0, 0);
            }
        });
        
        // Show results
        function showResults() {
            const totalQuestions = 18;
            let totalScore = 0;
            let answeredQuestions = Object.keys(answers).length;
            
            // Calculate total score
            for (let key in answers) {
                totalScore += answers[key];
            }
            
            // Calculate percentage
            const maxScore = totalQuestions * 3;
            const percentage = (totalScore / maxScore) * 100;
            
            // Determine result level
            let resultLevel = '';
            let resultColor = '';
            let resultDescription = '';
            
            if (percentage < 30) {
                resultLevel = 'Baixo';
                resultColor = '#10b981';
                resultDescription = 'Seus sintomas sugerem baixa probabilidade de TDAH. Continue monitorando seu bem-estar.';
            } else if (percentage < 60) {
                resultLevel = 'Moderado';
                resultColor = '#f59e0b';
                resultDescription = 'Alguns sintomas de TDAH foram identificados. Considere buscar orientação profissional.';
            } else {
                resultLevel = 'Alto';
                resultColor = '#ef4444';
                resultDescription = 'Vários sintomas de TDAH foram identificados. É altamente recomendado buscar avaliação médica especializada.';
            }
            
            // Hide test content
            document.getElementById('test-content').style.display = 'none';
            
            // Show results
            const resultsDiv = document.getElementById('test-results');
            resultsDiv.style.display = 'block';
            resultsDiv.innerHTML = `
                <div style="text-align: center; margin-bottom: 3rem;">
                    <h2 style="font-size: 2rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                        Resultado do Teste
                    </h2>
                    <div class="score-circle" style="background: ${resultColor};">
                        <div class="score-number">${Math.round(percentage)}%</div>
                        <div class="score-label">Nível ${resultLevel}</div>
                    </div>
                    <p style="max-width: 600px; margin: 2rem auto; color: hsl(var(--muted-foreground)); font-size: 1.125rem;">
                        ${resultDescription}
                    </p>
                </div>
                
                <div class="alert alert-warning" style="margin-bottom: 2rem;">
                    <strong>Importante:</strong> Este teste não substitui uma avaliação médica profissional. 
                    Os resultados são apenas indicativos e devem ser interpretados por um profissional de saúde qualificado.
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <a href="/contato" class="btn btn-primary btn-lg">Agende uma Consulta</a>
                    <button onclick="location.reload()" class="btn btn-outline btn-lg" style="margin-left: 1rem;">
                        Fazer Teste Novamente
                    </button>
                </div>
            `;
            
            window.scrollTo(0, 0);
        }
        
        // Initialize first session
        renderSession(1);
    }
    
    /**
     * Initialize on DOM ready
     */
    document.addEventListener('DOMContentLoaded', function() {
        initDropdown();
        initTDAHTest();
    });
    
})();
