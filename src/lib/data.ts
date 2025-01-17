import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Modern',
    description: 'Une plateforme e-commerce moderne avec panier et paiement intégré',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
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