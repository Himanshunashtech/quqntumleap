import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, BookOpen, Award, Globe } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.2 });
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay
      }
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="quantum-card border-quantum-accent/20 hover:shadow-neon hover:border-quantum-accent/50
      transition-all duration-500"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-quantum-accent">
          {icon}
        </div>
        <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-2">
          {value}
        </h3>
        <p className="text-gray-400">{label}</p>
      </div>
    </motion.div>
  );
};

const statsData = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "10,000x",
    label: "Performance Increase"
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "500+",
    label: "Enterprise Clients"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    value: "120+",
    label: "Research Papers"
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "25+",
    label: "Industry Awards"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "40+",
    label: "Countries Served"
  }
];

const StatsDashboard: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <div className="section-container" ref={sectionRef}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          <span className="gradient-text">Quantum</span> Impact
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Our quantum solutions are transforming industries and delivering measurable results. See the numbers that define our quantum advantage.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      {/* Graph visualization */}
      <motion.div 
        className="mt-16 p-8 quantum-card bg-quantum-dark/60 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="font-orbitron text-xl font-medium text-white mb-6 text-center">
          Performance Benchmark
        </h3>
        <div className="h-64 bg-quantum-darkest/70 rounded-lg border border-quantum-purple/20 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Interactive performance graph visualization would appear here</p>
        </div>
        <div className="mt-4 text-right">
          <span className="text-xs text-gray-500">Data updated in real-time</span>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsDashboard;