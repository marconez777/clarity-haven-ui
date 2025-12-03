import { useEffect, useCallback, useRef, useState } from 'react';

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes
const WARNING_BEFORE_TIMEOUT = 2 * 60 * 1000; // Show warning 2 minutes before

interface UseActivityTimeoutOptions {
  onTimeout: () => void;
  onWarning?: () => void;
  enabled?: boolean;
}

export const useActivityTimeout = ({
  onTimeout,
  onWarning,
  enabled = true,
}: UseActivityTimeoutOptions) => {
  const [showWarning, setShowWarning] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const warningRef = useRef<NodeJS.Timeout | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef<number>(Date.now());

  const clearAllTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (warningRef.current) {
      clearTimeout(warningRef.current);
      warningRef.current = null;
    }
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(() => {
    if (!enabled) return;
    
    lastActivityRef.current = Date.now();
    setShowWarning(false);
    clearAllTimeouts();

    // Set warning timeout
    warningRef.current = setTimeout(() => {
      setShowWarning(true);
      onWarning?.();
      
      // Start countdown
      const endTime = Date.now() + WARNING_BEFORE_TIMEOUT;
      setRemainingSeconds(Math.ceil(WARNING_BEFORE_TIMEOUT / 1000));
      
      countdownRef.current = setInterval(() => {
        const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        setRemainingSeconds(remaining);
        
        if (remaining <= 0) {
          clearInterval(countdownRef.current!);
        }
      }, 1000);
    }, INACTIVITY_TIMEOUT - WARNING_BEFORE_TIMEOUT);

    // Set actual timeout
    timeoutRef.current = setTimeout(() => {
      onTimeout();
    }, INACTIVITY_TIMEOUT);
  }, [enabled, onTimeout, onWarning, clearAllTimeouts]);

  const dismissWarning = useCallback(() => {
    setShowWarning(false);
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    if (!enabled) {
      clearAllTimeouts();
      return;
    }

    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
    
    const handleActivity = () => {
      // Only reset if not showing warning (to prevent accidental dismiss)
      if (!showWarning) {
        resetTimer();
      }
    };

    events.forEach(event => {
      document.addEventListener(event, handleActivity, { passive: true });
    });

    resetTimer();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
      clearAllTimeouts();
    };
  }, [enabled, resetTimer, clearAllTimeouts, showWarning]);

  return {
    showWarning,
    remainingSeconds,
    dismissWarning,
    resetTimer,
  };
};
