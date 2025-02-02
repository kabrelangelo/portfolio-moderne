import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { memo } from 'react';

export const ScrollProgress = memo(() => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
      style={{ 
        scaleX,
        willChange: "transform",
        transform: "translateZ(0)"
      }}
    />
  );
});
