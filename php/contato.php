<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato - Dr Gabriel Lopes - Psiquiatra em São Paulo</title>
    <meta name="description" content="Entre em contato com o Dr Gabriel Lopes. Estamos na Vila Olímpia, São Paulo. Agende sua consulta de psiquiatria.">
    <meta name="keywords" content="contato psiquiatra, agendar consulta psiquiatria, Vila Olímpia, São Paulo">
    <link rel="canonical" href="https://drgabriellopes.com.br/contato">
    <link rel="stylesheet" href="styles.css">
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
            min-height: 150px;
            resize: vertical;
        }

        .form-error {
            color: #dc2626;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: none;
        }

        .form-group.error .form-error {
            display: block;
        }

        .form-group.error input,
        .form-group.error textarea {
            border-color: #dc2626;
        }

        .submit-button {
            width: 100%;
            padding: 0.875rem 1.5rem;
            background: hsl(217, 71%, 53%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .submit-button:hover {
            background: hsl(217, 71%, 48%);
        }

        .submit-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        @media (max-width: 768px) {
            .contact-hero h1 {
                font-size: 2rem;
            }

            .contact-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php
    require_once 'components/breadcrumbs.php';
    render_breadcrumbs([
        ['label' => 'Contato', 'href' => '/contato']
    ]);
    ?>

    <main class="contact-section">
        <!-- Hero Section -->
        <section class="contact-hero">
            <div class="container">
                <h1>Entre em Contato</h1>
                <p>
                    Estamos prontos para atender você. Preencha o formulário ou entre em contato diretamente.
                </p>
            </div>
        </section>

        <!-- Contact Content -->
        <section class="contact-content">
            <div class="contact-grid">
                <!-- Contact Info -->
                <div class="contact-info">
                    <!-- Address -->
                    <div class="info-card">
                        <div class="info-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Endereço</h3>
                            <p>
                                Rua Gomes de Carvalho, 1195 - 9º Andar - Sala 93<br>
                                Vila Olímpia, São Paulo - SP<br>
                                CEP: 04547-004
                            </p>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="info-card">
                        <div class="info-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Telefones</h3>
                            <p>
                                <a href="tel:+551141548199">(11) 4154-8199</a><br>
                                <a href="tel:+5511941543929">(11) 94154-3929</a>
                            </p>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="info-card">
                        <div class="info-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:contato@institutosanapta.com.br">contato@institutosanapta.com.br</a>
                            </p>
                        </div>
                    </div>

                    <!-- Hours -->
                    <div class="info-card">
                        <div class="info-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
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

                <!-- Contact Form -->
                <div class="contact-form">
                    <h2>Envie sua Mensagem</h2>
                    <form id="contactForm" method="POST">
                        <div class="form-group">
                            <label for="name">Nome *</label>
                            <input type="text" id="name" name="name" required maxlength="100">
                            <span class="form-error">Nome é obrigatório</span>
                        </div>

                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required maxlength="255">
                            <span class="form-error">Email válido é obrigatório</span>
                        </div>

                        <div class="form-group">
                            <label for="phone">Telefone *</label>
                            <input type="tel" id="phone" name="phone" required maxlength="20">
                            <span class="form-error">Telefone é obrigatório</span>
                        </div>

                        <div class="form-group">
                            <label for="subject">Assunto *</label>
                            <input type="text" id="subject" name="subject" required maxlength="200">
                            <span class="form-error">Assunto é obrigatório</span>
                        </div>

                        <div class="form-group">
                            <label for="message">Mensagem *</label>
                            <textarea id="message" name="message" required maxlength="2000"></textarea>
                            <span class="form-error">Mensagem é obrigatória</span>
                        </div>

                        <button type="submit" class="submit-button" id="submitBtn">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <?php 
    require_once 'components/whatsapp-button.php';
    include 'includes/footer.php'; 
    ?>

    <script>
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = document.getElementById('submitBtn');
            
            // Get form data
            const formData = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                phone: form.phone.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim()
            };
            
            // Basic validation
            let isValid = true;
            const formGroups = form.querySelectorAll('.form-group');
            
            formGroups.forEach(group => {
                const input = group.querySelector('input, textarea');
                if (!input.value.trim()) {
                    group.classList.add('error');
                    isValid = false;
                } else {
                    group.classList.remove('error');
                }
            });
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                form.email.closest('.form-group').classList.add('error');
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Disable button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            // Create WhatsApp message
            const message = encodeURIComponent(
                `*Novo contato do site*\n\n` +
                `*Nome:* ${formData.name}\n` +
                `*Email:* ${formData.email}\n` +
                `*Telefone:* ${formData.phone}\n` +
                `*Assunto:* ${formData.subject}\n\n` +
                `*Mensagem:*\n${formData.message}`
            );
            
            // Open WhatsApp
            window.open(`https://wa.me/5511941543929?text=${message}`, '_blank');
            
            // Show success message
            alert('Mensagem enviada! Em breve entraremos em contato.');
            
            // Reset form
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensagem';
        });
        
        // Remove error class on input
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
            input.addEventListener('input', function() {
                this.closest('.form-group').classList.remove('error');
            });
        });
    </script>
</body>
</html>