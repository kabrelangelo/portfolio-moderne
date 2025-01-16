import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/projects/project-card';

// Ces données devraient idéalement venir d'une API ou d'un CMS
const projects = [
  {
    id: '1',
    title: 'E-commerce Mobile App',
    description: 'Application mobile de commerce électronique avec Flutter et Firebase, offrant une expérience utilisateur fluide et moderne.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    category: 'Mobile',
    featured: true,
  },
  {
    id: '2',
    title: 'Portfolio Personnel',
    description: 'Site web portfolio moderne construit avec React et TailwindCSS, mettant en valeur mes projets et compétences.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    category: 'Web',
    featured: true,
  },
  // Ajoutez plus de projets ici
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et significatifs,
            démontrant mes compétences en développement web et mobile.
          </p>
        </motion.div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
