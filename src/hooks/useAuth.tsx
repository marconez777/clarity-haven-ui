import { useEffect, useState, useCallback, useRef } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ADMIN_CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const adminCheckIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const checkAdminStatus = useCallback(async (userId: string): Promise<boolean> => {
    try {
      const { data: isAdminData } = await supabase
        .rpc('is_admin', { _user_id: userId });
      const adminStatus = isAdminData || false;
      setIsAdmin(adminStatus);
      return adminStatus;
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
      return false;
    }
  }, []);

  const handleAdminRevoked = useCallback(() => {
    toast({
      title: "Acesso revogado",
      description: "Suas permissões de administrador foram removidas.",
      variant: "destructive",
    });
    setIsAdmin(false);
    navigate('/admin/login');
  }, [toast, navigate]);

  // Periodic admin status check
  useEffect(() => {
    if (!user || !isAdmin) {
      if (adminCheckIntervalRef.current) {
        clearInterval(adminCheckIntervalRef.current);
        adminCheckIntervalRef.current = null;
      }
      return;
    }

    const checkStatus = async () => {
      const stillAdmin = await checkAdminStatus(user.id);
      if (!stillAdmin) {
        handleAdminRevoked();
      }
    };

    adminCheckIntervalRef.current = setInterval(checkStatus, ADMIN_CHECK_INTERVAL);

    return () => {
      if (adminCheckIntervalRef.current) {
        clearInterval(adminCheckIntervalRef.current);
        adminCheckIntervalRef.current = null;
      }
    };
  }, [user, isAdmin, checkAdminStatus, handleAdminRevoked]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          setTimeout(() => {
            checkAdminStatus(session.user.id);
          }, 0);
        } else {
          setIsAdmin(false);
        }
      }
    );

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await checkAdminStatus(session.user.id);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [checkAdminStatus]);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signOut = async (reason?: string) => {
    // Log to audit before signing out
    if (user) {
      try {
        await supabase.from('audit_log').insert({
          user_id: user.id,
          user_email: user.email,
          action: reason === 'timeout' ? 'session_timeout' : 'logout',
          details: { reason },
          user_agent: navigator.userAgent,
        });
      } catch (error) {
        console.error('Failed to log logout:', error);
      }
    }

    const { error } = await supabase.auth.signOut();
    if (!error) {
      setIsAdmin(false);
      navigate('/admin/login');
    }
    return { error };
  };

  return {
    user,
    session,
    loading,
    isAdmin,
    signIn,
    signOut,
    checkAdminStatus,
  };
};
