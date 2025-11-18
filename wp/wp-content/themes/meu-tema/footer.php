<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Logo e Descrição -->
            <div>
                <div class="footer-logo-section">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="Logo Dr Gabriel Lopes" class="footer-logo">
                    <div class="footer-logo-text">
                        <span class="footer-logo-subtitle">Saúde Mental Integrada</span>
                        <span class="footer-logo-title">Dr Gabriel Lopes</span>
                    </div>
                </div>
                <p class="footer-description">
                    Cuidado integral e humanizado para o seu bem-estar emocional e mental.
                </p>
            </div>

            <!-- Contato -->
            <div>
                <h3 class="footer-section-title">Contato</h3>
                <div class="footer-contact">
                    <div class="footer-contact-item">
                        <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div class="footer-contact-text">
                            <p>Rua do Rocio, 423. Cj. 402. (Vila Olímpia)</p>
                            <p>São Paulo, CEP: 04548-020</p>
                        </div>
                    </div>
                    <div class="footer-contact-item">
                        <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <div class="footer-contact-text">
                            <a href="tel:1194154-3929">11 94154-3929</a> |
                            <a href="tel:1130441690">11 3044-1690</a>
                        </div>
                    </div>
                    <div class="footer-contact-item">
                        <svg class="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <div class="footer-contact-text">
                            <a href="mailto:contato@drgabriellopes.com.br">contato@drgabriellopes.com.br</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Horário -->
            <div>
                <h3 class="footer-section-title">Horário de Atendimento</h3>
                <div class="footer-hours">
                    <p>Segunda a Sexta: 8h às 20h</p>
                    <p>Sábado: 8h às 14h</p>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider">
            <div class="footer-bottom">
                <p>Diretor Técnico Médico: Dr. Gabriel Lopes – CRM/SP: 131.339 RQE: 48295 RQE: 48295-1.</p>
                <p>Todos os Direitos Reservados © <?php echo date('Y'); ?></p>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
