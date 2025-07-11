import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { category: "Frontend", items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Flutter", level: 90 },
      { name: "Tailwind CSS", level: 75 },
    ]
  },
  { category: "Backend", items: [
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Supabase", level: 70 },
    ]
  },
  { category: "Mobile", items: [
      { name: "Flutter", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "Android", level: 80 },
      { name: "IOS", level: 75 },
    ]
  },
  { category: "Autres", items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 },
    ]
  }
];

export const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        duration: 0.5
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full pt-12">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemAnimation}
              className="bg-card p-6 rounded-2xl shadow-md"
              style={{ 
                willChange: "opacity, transform",
                transform: "translateZ(0)"
              }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${skill.level}%` : 0 }}
                        transition={{ 
                          duration: shouldReduceMotion ? 1 : 1.2, 
                          ease: "easeOut",
                          delay: shouldReduceMotion ? 0 : 0.2
                        }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        style={{ willChange: "width" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
