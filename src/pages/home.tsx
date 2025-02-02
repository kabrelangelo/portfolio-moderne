import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/image';
import { useSpring, animated } from '@react-spring/web';

// Lazy load components
const Hero = lazy(() => import('../components/hero').then(module => ({ default: module.Hero })));
const Skills = lazy(() => import('../components/skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('@/components/projects').then(module => ({ default: module.Projects })));
const ContactForm = lazy(() => import('../components/contact-form').then(module => ({ default: module.ContactForm })));

// Types
interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
}

interface CounterProps {
  n: number;
}

const Counter = ({ n }: CounterProps) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  });

  return <animated.span>{number.to((n: number) => n.toFixed(0))}</animated.span>;
};

// Memoized static data
const testimonials: Testimonial[] = [
  {
    name: "Idriss Meli",
    role: "Directeur, Prentisoft",
    content: "Un développeur exceptionnel qui a su transformer notre vision en réalité. Son professionnalisme est remarquable.",
  },
  {
    name: "Abba Sali",
    role: "Développeur, Freelance",
    content: "Excellente collaboration sur notre projet d'application mobile. Les délais ont été respectés et la communication était parfaite.",
  },
  {
    name: "Paul Mana",
    role: "Fondateur, Nodexia",
    content: "Un vrai professionnel qui comprend les besoins business. Le résultat final a dépassé nos attentes.",
  },
];

const stats: Stat[] = [
  {
    label: 'Projets réalisés',
    value: '20+',
  },
  {
    label: 'Années d\'expérience',
    value: '5+',
  },
  {
    label: 'Clients satisfaits',
    value: '100%',
  },
  {
    label: 'Lignes de code écrites',
    value: '100k+',
  },
];

const services: Service[] = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes et responsives avec les dernières technologies',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-6m-5 0H5a2 2 0 00-2 2v6m18-3v-3" /></svg>,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et cross-platform pour Android et iOS',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: 'Conseil en Technologie',
    description: 'Expertise et accompagnement dans vos choix technologiques',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    gradient: "from-orange-500 to-red-500",
  },
];

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Chargement...</div>}>
        <Hero />
      </Suspense>

      {/* Skills Section */}
      <section id="skills" className="py-6 bg-background">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Chargement des compétences...</div>}>
          <Skills />
        </Suspense>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pb-16 bg-accent/5">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Chargement des projets...</div>}>
          <Projects />
        </Suspense>
        <div className="flex justify-center items-center">
          <Link to="/projects">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Voir tous les Projets
            </motion.a>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Mes <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions sur mesure pour répondre à vos besoins numériques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-transparent via-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/50 border border-primary/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="mb-6 relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-background/50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ce que disent mes <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les retours d'expérience de mes clients satisfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-transparent via-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                <div className="relative p-6 rounded-2xl bg-card border border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center rounded-full shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    "
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Image
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        fallbackType="testimonial"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="text-center space-y-4">
                {/* Stat Value with hover effect */}
                <div className="relative">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 transition-colors group-hover:from-primary/90 group-hover:to-primary">
                    {stat.value}
                  </span>
                </div>
                
                {/* Label with subtle animation */}
                <motion.div 
                  className="text-base text-muted-foreground/90 font-medium tracking-wide"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                >
                  {stat.label}
                </motion.div>
                
                {/* Decorative underline */}
                <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact Section */}
       {/* Contact Section */}
       <div id="contact" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
              <p className="text-muted-foreground mb-8">
                Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous
                et de voir comment je peux vous aider à le réaliser.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:ngoumkwa.kenne@gmail.com" className="text-primary hover:underline">
                      ngoumkwa.kenne@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <div className="space-y-1">
                      <a href="tel:+237652480684" className="block text-primary hover:underline">
                        +237 652 48 06 84
                      </a>
                      <a href="tel:+237697296199" className="block text-primary hover:underline">
                        +237 697 29 61 99
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Suspense fallback={<div className="h-96 flex items-center justify-center">Chargement du formulaire...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
