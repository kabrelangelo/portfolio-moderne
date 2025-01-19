import { motion } from 'framer-motion';
import { defaultImages } from '../assets/images';
import { Image } from '../components/image';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative min-h-screen flex items-center pt-20">
       {/*  <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
             <Image
              src={defaultImages.hero}
              alt="Hero Background"
              className="w-full h-full object-cover"
              fallbackType="hero"
            /> 
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          </motion.div>
        </div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 text-center md:text-left"
            >

              <h1 className="text-5xl m-6  md:text-7xl font-bold mb-6">
                Développeur <span className="gradient-text">Full-Stack</span>
              </h1>
              <p className="text-xl text-gray-500 font-normal m-6 text-muted-foreground mb-8 max-w-xl">
                Je crée des applications web et mobiles modernes, performantes et intuitives.
                Transformons ensemble vos idées en réalité digitale.
              </p>
              <div className="flex gap-4 md:m-6 justify-center md:justify-start">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Me Contacter
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  Voir mes Projets
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, ease:"easeOut" }}
              className="flex-1 relative"
            >
              <div className="relative w-full md:w-[500px] h-[400px] md:h-[500px] mx-auto">
  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[30px] md:rounded-[60px] blur-3xl animate-pulse" />
  <Image
    src={defaultImages.profile}
    alt="Profile"
    className="w-full h-full object-cover rounded-[20px] md:rounded-[30px] border-4 border-primary shadow-2xl"
    fallbackType="profile"
  />
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      delay: 1,
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full flex items-center justify-center text-2xl md:text-4xl font-bold shadow-lg"
  >
    <span className="gradient-text">5+</span>
    <span className="text-xs md:text-sm ml-1">ans</span>
  </motion.div>
</div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full backdrop-blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-5 left-10 w-16 h-16 bg-secondary/20 rounded-full backdrop-blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}