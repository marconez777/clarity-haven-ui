import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTracking } from '@/hooks/usePageTracking';

const PageTracker = () => {
  const location = useLocation();
  const { trackPageView } = usePageTracking();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Avoid duplicate tracking on same path
    if (lastTrackedPath.current === location.pathname) {
      return;
    }
    
    lastTrackedPath.current = location.pathname;
    trackPageView(location.pathname);
  }, [location.pathname, trackPageView]);

  return null;
};

export default PageTracker;
