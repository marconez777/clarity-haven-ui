import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Json } from '@/integrations/supabase/types';

type AuditAction = 
  | 'login'
  | 'logout'
  | 'login_failed'
  | 'session_timeout'
  | 'post_created'
  | 'post_updated'
  | 'post_deleted'
  | 'page_created'
  | 'page_updated'
  | 'page_deleted'
  | 'category_created'
  | 'category_updated'
  | 'category_deleted';

export const useAuditLog = () => {
  const logAction = useCallback(async (
    action: AuditAction,
    details?: Record<string, string | number | boolean | null>
  ) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('Audit log: No user found for action', action);
        return;
      }

      await supabase.from('audit_log').insert([{
        user_id: user.id,
        user_email: user.email,
        action,
        details: (details || {}) as Json,
        user_agent: navigator.userAgent,
      }]);
    } catch (error) {
      console.error('Failed to log audit action:', error);
    }
  }, []);

  const logLoginSuccess = useCallback((email: string) => {
    return logAction('login', { email });
  }, [logAction]);

  const logLoginFailed = useCallback(async (email: string, reason?: string) => {
    // For failed login, we can't use user_id, so log directly
    try {
      await supabase.from('login_attempts').insert({
        email,
        success: false,
        user_agent: navigator.userAgent,
      });
    } catch (error) {
      console.error('Failed to log failed login:', error);
    }
  }, []);

  const logLogout = useCallback((reason?: string) => {
    return logAction('logout', { reason });
  }, [logAction]);

  const logSessionTimeout = useCallback(() => {
    return logAction('session_timeout', {});
  }, [logAction]);

  return {
    logAction,
    logLoginSuccess,
    logLoginFailed,
    logLogout,
    logSessionTimeout,
  };
};
