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
    title: 'Application Mobile de Gestion Scolaire',
    description: 'Application mobile de gestion scolaire avec Flutter et CodeIgniter pour l\' entreprise SIGERIS SARL',
    image: '/images/sigeris0.PNG',
    technologies: ['Flutter', 'CodeIgniter', 'MySQL', 'PHP'],
    demo: 'https://play.google.com/store/apps/details?id=cm.sigeris.sigerishs&hl=ln&pli=1',
    github: '',
  },
  {
    id: 3,
    title: 'Site vitrine',
    description: 'Site web moderne et élégant de la jeune entreprise Prentisoft',
    image: '/images/prentisoft.PNG',
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://prentisoft.com/',
    github: 'https://github.com/kabrelangelo',
  },
];