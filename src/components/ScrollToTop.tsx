import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Normalize trailing slashes (except root "/")
    if (pathname.length > 1 && pathname.endsWith('/')) {
      const normalized = pathname.replace(/\/+$/, '') || '/';
      navigate(normalized + search + hash, { replace: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search, hash, navigate]);

  return null;
};

export default ScrollToTop;
