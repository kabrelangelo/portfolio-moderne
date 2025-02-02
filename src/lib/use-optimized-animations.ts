import { useReducedMotion } from 'framer-motion';

export const useOptimizedAnimations = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const optimizedStyle = {
    willChange: "opacity, transform",
    transform: "translateZ(0)"
  };

  return {
    fadeInUp,
    stagger,
    optimizedStyle,
    shouldReduceMotion
  };
};
