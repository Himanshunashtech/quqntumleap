import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, AlertTriangle, Database, Lock } from 'lucide-react';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="quantum-card hover:border-quantum-accent/40 hover:shadow-neon"
    >
      <div className="mb-4 text-quantum-accent">{icon}</div>
      <h3 className="text-lg font-orbitron font-medium text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const ProblemStatement: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const problems = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Computational Limitations",
      description: "Traditional computing struggles with complex problems that quantum computing can solve exponentially faster."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Encryption Vulnerabilities",
      description: "Current encryption methods will become obsolete with quantum advancements, creating urgent security concerns."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Processing Barriers",
      description: "Massive datasets exceed classical computing capabilities, limiting AI and machine learning potential."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Quantum Access Gaps",
      description: "Most organizations lack access to quantum computing resources and expertise needed for innovation."
    }
  ];
  
  return (
    <div ref={sectionRef} className="section-container">
      <motion.div 
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          The <span className="gradient-text">Problem</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          In today's rapidly evolving technological landscape, organizations face unprecedented computational challenges that traditional systems cannot solve efficiently.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        style={{ opacity, y }}
      >
        {problems.map((problem, index) => (
          <ProblemCard
            key={index}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
            delay={index * 0.15}
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h3 className="font-orbitron text-xl text-white mb-4">
          The Future Demands Quantum Solutions
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          As data grows exponentially and problems become more complex, traditional computing approaches are reaching their fundamental limits. The time for quantum computing is now.
        </p>
      </motion.div>
    </div>
  );
};

export default ProblemStatement;