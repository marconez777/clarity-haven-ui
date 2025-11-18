<?php
/**
 * Template Name: Contato
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
.contact-section {
    min-height: 100vh;
    padding-top: 1rem;
}

.contact-hero {
    background: linear-gradient(to bottom, hsl(217, 71%, 53%, 0.1), transparent);
    padding: 4rem 1rem;
    text-align: center;
}

.contact-hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
}

.contact-hero p {
    font-size: 1.125rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
}

.contact-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: all 0.3s ease;
}

.info-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.info-icon {
    width: 48px;
    height: 48px;
    background: hsl(217, 71%, 53%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}

.info-icon svg {
    width: 24px;
    height: 24px;
}

.info-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
}

.info-content p,
.info-content a {
    color: #666;
    line-height: 1.6;
    text-decoration: none;
}

.info-content a:hover {
    color: hsl(217, 71%, 53%);
}

.contact-form {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-weight: 500;
    color: #333;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: hsl(217, 71%, 53%);
    box-shadow: 0 0 0 3px hsl(217, 71%, 53%, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<section class="contact-section">
    <div class="contact-hero">
        <h1>Entre em Contato</h1>
        <p>Estamos aqui para ajudar. Entre em contato conosco para agendar sua consulta ou tirar suas dúvidas.</p>
    </div>

    <div class="contact-content">
        <div class="contact-grid">
            <!-- Informações de Contato -->
            <div class="contact-info">
                <!-- Endereço -->
                <div class="info-card">
                    <div class="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <div class="info-content">
                        <h3>Endereço</h3>
                        <p>Rua do Rocio, 423. Cj. 402. (Vila Olímpia)<br>São Paulo, CEP: 04548-020</p>
                    </div>
                </div>

                <!-- Telefone -->
                <div class="info-card">
                    <div class="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <div class="info-content">
                        <h3>Telefone</h3>
                        <p>
                            <a href="tel:1194154-3929">11 94154-3929</a><br>
                            <a href="tel:1130441690">11 3044-1690</a>
                        </p>
                    </div>
                </div>

                <!-- Email -->
                <div class="info-card">
                    <div class="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div class="info-content">
                        <h3>Email</h3>
                        <p><a href="mailto:contato@drgabriellopes.com.br">contato@drgabriellopes.com.br</a></p>
                    </div>
                </div>

                <!-- Horário -->
                <div class="info-card">
                    <div class="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div class="info-content">
                        <h3>Horário de Atendimento</h3>
                        <p>
                            Segunda a Sexta: 8h às 20h<br>
                            Sábado: 8h às 14h
                        </p>
                    </div>
                </div>
            </div>

            <!-- Formulário de Contato -->
            <div class="contact-form">
                <h2>Envie uma Mensagem</h2>
                <form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
                    <input type="hidden" name="action" value="contact_form">
                    <?php wp_nonce_field( 'contact_form_nonce' ); ?>
                    
                    <div class="form-group">
                        <label for="name">Nome *</label>
                        <input type="text" id="name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="phone">Telefone</label>
                        <input type="tel" id="phone" name="phone">
                    </div>

                    <div class="form-group">
                        <label for="subject">Assunto *</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>

                    <div class="form-group">
                        <label for="message">Mensagem *</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div>

        <!-- Mapa (Opcional) -->
        <div style="margin-top: 4rem;">
            <h2 style="text-align: center; margin-bottom: 2rem; font-size: 1.875rem; font-weight: 700;">Como Chegar</h2>
            <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7944676!2d-46.6839!3d-23.5942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzM5LjEiUyA0NsKwNDEnMDIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" 
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
