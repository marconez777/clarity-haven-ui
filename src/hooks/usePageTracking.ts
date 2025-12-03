import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const SESSION_KEY = 'page_tracking_session_id';

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

export const usePageTracking = () => {
  const trackPageView = useCallback(async (pathname: string) => {
    // Don't track admin pages
    if (pathname.startsWith('/admin')) {
      return;
    }

    try {
      const sessionId = getSessionId();
      
      await supabase.from('page_views').insert({
        page_url: pathname,
        page_title: document.title,
        session_id: sessionId,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, []);

  return { trackPageView };
};
