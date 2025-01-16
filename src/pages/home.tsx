import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/image';
import { Skills } from '../components/skills';
import { ContactForm } from '../components/contact-form';
import { defaultImages } from '../assets/images';

const projects = [
  {
    id: '1',
    title: 'E-commerce Mobile App',
    description: 'Application mobile de commerce électronique avec Flutter et Firebase.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    id: '2',
    title: 'Portfolio Personnel',
    description: 'Site web portfolio moderne construit avec React et TailwindCSS.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    id: '3',
    title: 'Application de Gestion',
    description: 'Application web de gestion des tâches et des projets.',
    image: '/projects/gestion.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
];

const services = [
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

const testimonials = [
  {
    name: 'Roosvelt',
    role: 'CEO de XYZ Inc.',
    content: 'Je suis très satisfait du travail effectué par Kenne. Il est très professionnel et sa qualité de travail est exceptionnelle.',
    // avatar: 'https://picsum.photos/200/300',
  },
  {
    name: 'Jane Doe',
    role: 'CTO de ABC Inc.',
    content: 'Kabrel Kenne est un développeur très talentueux. Il a su répondre à nos besoins et nous a fourni une solution de haute qualité.',
    // avatar: 'https://picsum.photos/200/301',
  },
  {
    name: 'Bob Smith',
    role: 'Directeur de projet chez DEF Inc.',
    content: 'Je recommande vivement Kabrel pour tout projet de développement. Il est très réactif et sa communication est excellente.',
    // avatar: 'https://picsum.photos/200/302',
  },
];

const stats = [
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

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
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
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Développeur <span className="gradient-text">Full-Stack</span>
              </h1>
              <p className="text-xl text-gray-500 text-muted-foreground mb-8 max-w-xl">
                Je crée des applications web et mobiles modernes, performantes et intuitives.
                Transformons ensemble vos idées en réalité digitale.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
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
              transition={{ delay: 0.7 }}
              className="flex-1 relative"
            >
              <div className="relative w-[400px] h-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[60px] blur-3xl animate-pulse" />
                <Image
                  src={defaultImages.profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-[30px] border-4 border-primary shadow-2xl"
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
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-4xl font-bold shadow-lg"
                >
                  <span className="gradient-text">5+</span>
                  <span className="text-sm ml-1">ans</span>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Mes Compétences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un aperçu des technologies que je maîtrise et utilise quotidiennement
              dans mes projets.
            </p>
          </motion.div>
          
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Projets Récents</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes dernières réalisations en développement web et mobile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fallbackType="project"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="flex gap-4">
                        {project.demoLink && (
                          <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Voir la démo
                          </motion.a>
                        )}
                        {project.githubLink && (
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Code source
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors group"
            >
              <span>Voir tous les projets</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
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
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
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
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
              </motion.div>
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
      <section id="contact" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
