import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/image';

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
}

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
    description: 'Création de sites web modernes et responsives',
    icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-6m-5 0H5a2 2 0 00-2 2v6m18-3v-3" /></svg>,
  },
  {
    title: 'Développement Mobile',
    description: 'Création d\'applications mobiles pour Android et iOS',
    icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  },
  {
    title: 'Conseil en Technologie',
    description: 'Accompagnement dans la mise en place de solutions technologiques',
    icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
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
      <section id="skills" className="py-10 bg-background">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Chargement des compétences...</div>}>
          <Skills />
        </Suspense>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pb-20 bg-accent/5">
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
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Mes Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions sur mesure pour répondre à vos besoins numériques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ce que disent mes clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les retours d'expérience de mes clients satisfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-2xl bg-card relative"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                  "
                </div>
                <p className="text-muted-foreground mb-4 mt-2">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      // fallbackType="avatar"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">Contactez-moi</h2>
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
