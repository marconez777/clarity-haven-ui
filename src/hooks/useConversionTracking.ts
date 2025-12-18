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

const WHATSAPP_PHONE = '5511941543929';
const DEFAULT_MESSAGE = 'Olá! Gostaria de agendar uma consulta.';

export const handleWhatsAppClick = (buttonLocation: string, customMessage?: string) => {
  trackConversion({ buttonLocation });
  const message = encodeURIComponent(customMessage || DEFAULT_MESSAGE);
  const url = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${message}&type=phone_number&app_absent=0`;
  window.open(url, '_blank');
};

export const useConversionTracking = () => {
  const trackWhatsAppClick = (buttonLocation: string) => {
    trackConversion({ eventType: 'whatsapp_click', buttonLocation });
  };

  return { trackWhatsAppClick, trackConversion, handleWhatsAppClick };
};
