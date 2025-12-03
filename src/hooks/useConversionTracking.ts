import { supabase } from "@/integrations/supabase/client";

interface TrackConversionParams {
  eventType?: string;
  buttonLocation: string;
}

export const trackConversion = async ({ eventType = 'whatsapp_click', buttonLocation }: TrackConversionParams) => {
  try {
    await supabase.from('conversion_events').insert({
      event_type: eventType,
      page_url: window.location.pathname,
      button_location: buttonLocation,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
};

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5511941543929&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0';

export const handleWhatsAppClick = (buttonLocation: string) => {
  trackConversion({ buttonLocation });
  window.open(WHATSAPP_URL, '_blank');
};

export const useConversionTracking = () => {
  const trackWhatsAppClick = (buttonLocation: string) => {
    trackConversion({ eventType: 'whatsapp_click', buttonLocation });
  };

  return { trackWhatsAppClick, trackConversion, handleWhatsAppClick };
};
