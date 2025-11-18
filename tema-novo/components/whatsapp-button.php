<?php
/**
 * WhatsApp Floating Button Component
 *
 * @package Tema_Novo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Display WhatsApp floating button
 */
function tema_novo_whatsapp_button() {
    $whatsapp_number = '5511941543929';
    $whatsapp_message = urlencode( 'Olá! Gostaria de agendar uma consulta.' );
    $whatsapp_url = "https://wa.me/{$whatsapp_number}?text={$whatsapp_message}";
    ?>
    <!-- WhatsApp Floating Button -->
    <a 
        href="<?php echo esc_url( $whatsapp_url ); ?>"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-button"
        aria-label="Contato via WhatsApp"
    >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    </a>
    <?php
}
