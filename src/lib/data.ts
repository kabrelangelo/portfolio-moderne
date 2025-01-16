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
    title: 'Application Mobile',
    description: 'Application mobile cross-platform avec synchronisation temps réel',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
];