import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { memo } from 'react';

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
  index: number;
  isInView: boolean;
  shouldReduceMotion: boolean;
}

const SkillCard = memo(({ icon: Icon, title, description, index, isInView, shouldReduceMotion }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay: shouldReduceMotion ? 0 : index * 0.1
        }
      } : {}}
      style={{ 
        willChange: "opacity, transform",
        transform: "translateZ(0)"
      }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center text-center">
          <Icon className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

export const About = memo(() => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div ref={ref} className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.5
            }
          } : {}}
          className="text-3xl font-bold text-center mb-12"
          style={{ 
            willChange: "opacity, transform",
            transform: "translateZ(0)"
          }}
        >
          À Propos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={index}
              isInView={inView}
              shouldReduceMotion={shouldReduceMotion ?? false}

            />
          ))}
        </div>
      </div>
    </section>
  );
});