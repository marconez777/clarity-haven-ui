import { trackConversion } from "@/hooks/useConversionTracking";

const WhatsAppButton = () => {
  const whatsappNumber = "5511941543929";
  const message = "Olá! Gostaria de agendar uma consulta.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    trackConversion({ buttonLocation: 'floating_button' });
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="w-9 h-9 text-white group-hover:scale-110 transition-transform"
        fill="currentColor"
      >
        <path d="M16.004 0C7.164 0 0 7.164 0 16.004c0 2.82.736 5.58 2.136 8.02L0 32l8.196-2.08a15.93 15.93 0 007.808 2.076h.008C24.844 31.996 32 24.836 32 16.004 32 7.164 24.836 0 16.004 0zm0 29.328a13.26 13.26 0 01-6.976-1.98l-.5-.296-5.176 1.316 1.38-5.032-.324-.516a13.21 13.21 0 01-2.068-7.116c0-7.344 5.98-13.324 13.332-13.324 7.344 0 13.324 5.98 13.324 13.324 0 7.352-5.98 13.332-13.332 13.332l.34-.008zm7.304-9.976c-.4-.2-2.368-1.168-2.736-1.3-.368-.136-.636-.2-.904.2-.268.4-1.036 1.3-1.268 1.568-.236.268-.468.3-.868.1-.4-.2-1.688-.62-3.216-1.98-1.188-1.06-1.988-2.368-2.22-2.768-.236-.4-.028-.616.172-.816.18-.18.4-.468.6-.7.2-.236.268-.4.4-.668.136-.268.068-.5-.032-.7-.1-.2-.904-2.18-1.24-2.984-.324-.784-.656-.676-.9-.688-.236-.012-.5-.012-.768-.012-.268 0-.7.1-1.068.5-.368.4-1.4 1.368-1.4 3.336 0 1.968 1.432 3.868 1.632 4.136.2.268 2.82 4.304 6.832 6.032.952.412 1.696.656 2.276.84.956.304 1.824.26 2.512.16.768-.116 2.368-.968 2.7-1.904.336-.936.336-1.74.236-1.904-.1-.168-.368-.268-.768-.468z"/>
      </svg>
      <span className="absolute -top-12 right-0 bg-foreground text-background px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
