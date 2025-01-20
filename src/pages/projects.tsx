import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/projects/project-card';

const projects = [
  {
    id: 1,
    title: 'E-commerce Mobile App',
    description: 'Application mobile de e-commerce avec Flutter et Firebase, offrant une expérience utilisateur fluide.',
    image: '/images/sigeris0.PNG',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    demo: 'https://demo.com',
    github: 'https://github.com',
    category: 'Mobile',
    featured: true,
  },
  {
    id: 2,
    title: 'Site vitrine Moderne',
    description: 'Site vitrine ultra moderne avec React et Tailwind CSS pour l\' entreprise Nodexia',
    image: '/images/nodexia.PNG',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'framer-motion'],
    demo: 'https://example.com',
    github: 'https://github.com',
    category: 'Web',
    featured: true,
  },

  {
    id: 3,
    title: 'Site vitrine',
    description: 'Site web moderne et élégant de la jeune entreprise Prentisoft',
    image: '/images/prentisoft.PNG',
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://prentisoft.com/',
    github: 'https://github.com/kabrelangelo',
    category: 'Web',
    featured: true,
  },
  {
    id: 4,
    title: 'Site Web de E-commerce',
    description: "Site de E-commerce d'objets de luxe et de magnifiques vetements",
    image: '/images/prentisoft.PNG',
    technologies: ['WordPress', 'Woocommerce', 'HTML', 'JavaScript'],
    demo: 'https://prentisoft.com/',
    github: 'https://github.com/kabrelangelo',
    category: 'Web',
    featured: true,
  },
];

const categories = ['Tous', 'Web', 'Mobile', 'Desktop'];

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'Tous' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
    <div className='text-center my-8'>
      <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Mes <span className="gradient-text">Projets</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl mb-16 text-muted-foreground max-w-2xl mx-auto"
            >
               Découvrez une sélection de mes projets les plus récents et significatifs,
               démontrant mes compétences en développement web et mobile.
            </motion.p>
            </div>
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary/10 text-secondary-foreground hover:bg-secondary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};