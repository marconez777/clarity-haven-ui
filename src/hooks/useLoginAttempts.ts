import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const MAX_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 15;
const STORAGE_KEY = 'login_attempts';

interface LoginAttempt {
  email: string;
  timestamp: number;
  success: boolean;
}

export const useLoginAttempts = () => {
  const [attempts, setAttempts] = useState<LoginAttempt[]>([]);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutEndTime, setLockoutEndTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);

  // Load attempts from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as LoginAttempt[];
        // Filter out old attempts (older than lockout period)
        const cutoff = Date.now() - LOCKOUT_MINUTES * 60 * 1000;
        const recent = parsed.filter(a => a.timestamp > cutoff);
        setAttempts(recent);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Check lockout status whenever attempts change
  useEffect(() => {
    const failedAttempts = attempts.filter(a => !a.success);
    if (failedAttempts.length >= MAX_ATTEMPTS) {
      const oldestFailure = failedAttempts[failedAttempts.length - MAX_ATTEMPTS];
      const lockoutEnd = oldestFailure.timestamp + LOCKOUT_MINUTES * 60 * 1000;
      
      if (Date.now() < lockoutEnd) {
        setIsLocked(true);
        setLockoutEndTime(lockoutEnd);
      } else {
        setIsLocked(false);
        setLockoutEndTime(null);
      }
    } else {
      setIsLocked(false);
      setLockoutEndTime(null);
    }
  }, [attempts]);

  // Update remaining time countdown
  useEffect(() => {
    if (!lockoutEndTime) {
      setRemainingTime(0);
      return;
    }

    const updateTime = () => {
      const remaining = Math.max(0, Math.ceil((lockoutEndTime - Date.now()) / 1000));
      setRemainingTime(remaining);
      
      if (remaining <= 0) {
        setIsLocked(false);
        setLockoutEndTime(null);
        // Clear old failed attempts
        const cutoff = Date.now() - LOCKOUT_MINUTES * 60 * 1000;
        const recent = attempts.filter(a => a.timestamp > cutoff);
        setAttempts(recent);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lockoutEndTime, attempts]);

  const recordAttempt = useCallback(async (email: string, success: boolean) => {
    const newAttempt: LoginAttempt = {
      email,
      timestamp: Date.now(),
      success,
    };

    const newAttempts = [...attempts, newAttempt];
    setAttempts(newAttempts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAttempts));

    // Log to database (don't await to not block login)
    supabase.from('login_attempts').insert({
      email,
      success,
      user_agent: navigator.userAgent,
    }).then(() => {});

    return newAttempt;
  }, [attempts]);

  const clearAttempts = useCallback((email: string) => {
    const filtered = attempts.filter(a => a.email !== email);
    setAttempts(filtered);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }, [attempts]);

  const getRemainingAttempts = useCallback(() => {
    const failedAttempts = attempts.filter(a => !a.success);
    return Math.max(0, MAX_ATTEMPTS - failedAttempts.length);
  }, [attempts]);

  const formatRemainingTime = useCallback(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, [remainingTime]);

  return {
    isLocked,
    remainingTime,
    remainingAttempts: getRemainingAttempts(),
    formatRemainingTime,
    recordAttempt,
    clearAttempts,
  };
};
