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
  const isInView = useInView(cardRef, { once: true,  });

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
      className="quantum-card border-quantum-accent/20 hover:shadow-neon hover:border-quantum-accent/50 transition-all duration-500"
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

// Performance data for the bar chart (numeric values, no suffix)
const performanceData = [
  { label: "Q1", value: 2500 },
  { label: "Q2", value: 4000 },
  { label: "Q3", value: 7000 },
  { label: "Q4", value: 10000 },
];

const BarChart: React.FC = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, threshold: 0.3 });

  return (
    <div ref={chartRef} className="space-y-4">
      {performanceData.map(({ label, value }) => {
        const barWidth = isInView ? `${(value / 10000) * 100}%` : '0%';

        return (
          <div key={label} className="flex items-center space-x-4">
            <span className="w-24 text-gray-400 font-mono">{label}</span>
            <div className="flex-1 bg-quantum-darkest rounded-full h-6 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: barWidth }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-6 rounded-full shadow-neon bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-400"
              />
              <span className="absolute right-3 top-0 bottom-0 flex items-center text-white font-semibold font-mono">
                {value.toLocaleString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

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
      
      <motion.div 
        className="mt-16 p-8 quantum-card bg-quantum-dark/60 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="font-orbitron text-xl font-medium text-white mb-6 text-center">
          Performance Benchmark
        </h3>
        <div className="h-24">
          <BarChart />
        </div>
        <div className="mt-4 text-right">
          <span className="text-xs text-gray-500">Data updated in real-time</span>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsDashboard;
