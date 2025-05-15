import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, NetworkIcon, Workflow } from 'lucide-react';

const Solution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const solutions = [
    {
      icon: <Cpu className="h-12 w-12 text-quantum-accent" />,
      title: "Quantum Processing",
      description: "Our quantum processors perform calculations exponentially faster than traditional computers, solving complex problems in seconds instead of years."
    },
    {
      icon: <Brain className="h-12 w-12 text-quantum-accent" />,
      title: "AI Integration",
      description: "We seamlessly merge quantum computing with advanced AI algorithms, creating intelligent systems that learn and adapt at unprecedented speeds."
    },
    {
      icon: <NetworkIcon className="h-12 w-12 text-quantum-accent" />,
      title: "Quantum Networks",
      description: "Secure, lightning-fast quantum networks enable communication and data transfer protected by the fundamental laws of physics."
    },
    {
      icon: <Workflow className="h-12 w-12 text-quantum-accent" />,
      title: "Hybrid Solutions",
      description: "Our platform bridges classical and quantum computing, allowing organizations to gradually transition their existing systems to quantum architecture."
    }
  ];

  return (
    <div className="section-container" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          Our <span className="gradient-text">Solution</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          QuantumLeap delivers revolutionary quantum computing solutions combined with advanced AI, making previously impossible tasks not only possible but practical.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Animated quantum circuit + AI brain visual */}
        <motion.div 
          className="w-full lg:w-1/2 h-96 relative bg-quantum-dark/50 rounded-2xl overflow-hidden border border-quantum-purple/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-400">Interactive Quantum Circuit + AI Visualization</p>
              <p className="text-xs text-gray-500">(Animated visual would appear here)</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Solution text content */}
        <motion.div 
          className="w-full lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 bg-quantum-dark/50 rounded-lg p-3 border border-quantum-purple/30">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-medium text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-16 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <div className="quantum-card bg-quantum-blue/20 border-quantum-accent/40">
          <h3 className="font-orbitron text-xl font-medium text-white mb-4">
            Quantum Advantage, Available Today
          </h3>
          <p className="text-gray-300">
            Unlike many quantum companies focused on theoretical future applications, QuantumLeap delivers practical quantum solutions that provide measurable advantages right now. Our hybrid approach allows you to benefit from quantum computing today while scaling for tomorrow.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Solution;