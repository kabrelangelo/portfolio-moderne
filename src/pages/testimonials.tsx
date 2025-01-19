import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Abba Sali",
    role: "Développeur, Freelance",
    content: "Un développeur exceptionnel qui a su transformer notre vision en réalité. La qualité du code et le professionnalisme sont remarquables.",
    // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887",
    project: {
      name: "API de E-commerce",
      image: "/images/api.PNG",
    }
  },
  {
    name: "Cyrille Kamgue",
    role: "Directeur, Sigeris Sarl",
    content: "Excellente collaboration sur notre projet d'application mobile. Les délais ont été respectés et la communication était parfaite.",
    // image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    project: {
      name: "Application de Gestion Scolaire",
      image: "/images/sigeris0.PNG",
    }
  },
  {
    name: "Rodrigue Nana",
    role: "Fondateur, ALUCOBOND",
    content: "Un vrai professionnel qui comprend les besoins business. Le résultat final a dépassé nos attentes.",
    // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    project: {
      name: "Site Web Vitrine",
      image: "/images/nana.jfif",
    }
  },
  {
    name: "Roosvelt Tchoffo",
    role: "Grossiste",
    content: "La meilleure décision que nous ayons prise pour notre projet. L'expertise technique et les conseils stratégiques ont été précieux.",
    // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887",
    project: {
      name: "",
     image: "/images/grossiste.jfif",
    }
  },
];

const stats = [
  { label: "Projets Complétés", value: "50+" },
  { label: "Clients Satisfaits", value: "30+" },
  { label: "Années d'Expérience", value: "5+" },
  { label: "Technologies Maîtrisées", value: "15+" },
];

export const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="/images/testimonials.jpg"
            alt="Testimonials Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Ils me font <span className="gradient-text">Confiance</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Découvrez les retours d'expérience de mes clients sur nos collaborations
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Stats Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="text-center glass p-6 rounded-2xl"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  delay: index * 0.2,
                }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 + index * 0.2 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={testimonial.project.image}
                  alt={testimonial.project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-sm bg-primary/20 px-3 py-1 rounded-full">
                    {testimonial.project.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                {/*   <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                  /> */}
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="relative">
                  <span className="absolute top-0 left-0 text-6xl text-primary/20">"</span>
                  <p className="pl-8 pt-4 italic text-muted-foreground">
                    {testimonial.content}
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Prêt à <span className="gradient-text">Collaborer</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et voyons comment je peux vous aider à le réaliser.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Commencer un Projet
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
