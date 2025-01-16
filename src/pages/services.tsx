import { motion } from 'framer-motion';
import { Image } from '../components/image';
import { servicesImages } from '../assets/images';

const services = [
  {
    title: "Développement Web",
    description: "Création de sites web et d'applications web modernes et performantes",
    image: servicesImages.webDev,
    features: [
      "Sites web responsive",
      "Applications React/Next.js",
      "E-commerce",
      "Optimisation SEO"
    ]
  },
  {
    title: "Développement Mobile",
    description: "Applications mobiles natives et cross-platform",
    image: servicesImages.mobileDev,
    features: [
      "Applications iOS et Android",
      "Flutter/React Native",
      "UI/UX Mobile",
      "Performance optimisée"
    ]
  },
  {
    title: "Design UI/UX",
    description: "Création d'interfaces utilisateur modernes et intuitives",
    image: servicesImages.design,
    features: [
      "Design System",
      "Prototypage",
      "Tests utilisateurs",
      "Design responsive"
    ]
  },
  {
    title: "Conseil Technique",
    description: "Accompagnement et expertise technique pour vos projets",
    image: servicesImages.consulting,
    features: [
      "Architecture logicielle",
      "Choix technologiques",
      "Optimisation performance",
      "Sécurité"
    ]
  }
];

export const ServicesPage = () => {
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
          <Image
            src={servicesImages.webDev}
            alt="Services Hero"
            className="w-full h-full object-cover"
            fallbackType="service"
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
              Mes <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Des solutions sur mesure pour vos projets digitaux
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.2 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fallbackType="service"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1 + index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-primary">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
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
