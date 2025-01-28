import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Pour un défilement instantané sans animation
    });
  }, [pathname]);

  return null; // Le composant ne rend rien visuellement
};

export default ScrollToTop;