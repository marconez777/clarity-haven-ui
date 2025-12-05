import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    smartlook: any;
  }
}

const SmartlookAnalytics = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    // Don't load Smartlook on admin pages
    if (isAdminPage) return;

    // Check if Smartlook is already loaded
    if (window.smartlook) return;

    // Delay Smartlook loading by 3 seconds to prioritize critical content
    const timeoutId = setTimeout(() => {
      // Load Smartlook script
      window.smartlook = window.smartlook || function() {
        (window.smartlook.api = window.smartlook.api || []).push(arguments);
      };

      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.src = 'https://web-sdk.smartlook.com/recorder.js';
      document.head.appendChild(script);

      window.smartlook('init', '4a42b280a917350f729a368877041c9d9dfc72c5', { region: 'eu' });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [isAdminPage]);

  return null;
};

export default SmartlookAnalytics;