import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Site vitrine Moderne',
    description: 'Site vitrine ultra moderne avec React et Tailwind CSS pour l\' entreprise Nodexia',
    image: '/images/nodexia.PNG',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'framer-motion'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'Application de Gestion',
    description: 'Dashboard administratif avec analyses et graphiques en temps réel',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Site vitrine',
    description: 'Site web moderne et élégant de la jeune entreprise Prentisoft',
    image: '/images/prentisoft.PNG',
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://prentisoft.com/',
    github: 'https://github.com',
  },
];