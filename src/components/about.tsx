import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/animations';

const skills = [
  {
    icon: Code2,
    title: 'Développement Web',
    description: 'Expert en React, TypeScript et architectures modernes',
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: "Création d'interfaces élégantes et intuitives",
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimisation et bonnes pratiques pour des applications rapides',
  },
];

interface SkillCardProps {
  icon: typeof Code2;
  title: string;
  description: string;
}

function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
  return (
    <motion.div variants={fadeIn}>
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center text-center">
          <Icon className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-muted/50">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="container px-4 mx-auto"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-12"
        >
          À Propos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}