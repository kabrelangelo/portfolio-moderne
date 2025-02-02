import { motion, useReducedMotion } from 'framer-motion';
import { defaultImages } from '../assets/images';
import { Image } from '../components/image';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 }
  };

  const pulseVariants = {
    hidden: { scale: 1, opacity: 1 },
    visible: { 
      scale: shouldReduceMotion ? 1 : 1.05, 
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Développeur <span className="gradient-text">Full-Stack</span>
              </h1>
              <p className="text-xl text-gray-500 font-normal text-muted-foreground mb-8 max-w-xl">
                Je crée des applications web et mobiles modernes, performantes et intuitives.
                Transformons ensemble vos idées en réalité digitale.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                >
                  Me Contacter
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition"
                >
                  Voir mes Projets
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative w-full md:w-[400px] h-[400px] md:h-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-xl blur-2xl" />
                <Image
                  src={defaultImages.profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl border-4 border-primary shadow-xl"
                  fallbackType="profile"
                />
                <motion.div
                  animate={{
                    scale: shouldReduceMotion ? 1 : [1, 1.05, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute -bottom-5 -right-5 w-20 h-20 md:w-28 md:h-28 bg-accent rounded-full flex items-center justify-center text-xl md:text-3xl font-bold shadow-md"
                >
                  <span className="gradient-text">5+</span>
                  <span className="text-xs md:text-sm ml-1">ans</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
