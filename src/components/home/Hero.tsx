import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ChevronDown, Mic } from 'lucide-react';
import QuantumOrb from '../ui/QuantumOrb';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const scrollToNextSection = () => {
    const heroHeight = heroRef.current?.clientHeight || 0;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <div 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-quantum-darkest">
        <div className="absolute inset-0 quantum-gradient opacity-80"></div>
        <div className="absolute inset-0 grid-background opacity-40"></div>
      </div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                <span className="gradient-text">Quantum</span> Computing <br /> Meets <span className="gradient-text">Artificial</span> Intelligence
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
                Pioneering the next frontier of technology with revolutionary quantum solutions. We're building the future, one qubit at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button 
                  className="quantum-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Solutions</span>
                  <PlayCircle className="h-5 w-5" />
                </motion.button>
                <motion.button 
                  className="quantum-button-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Right column: 3D Quantum Orb */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]"
            >
              <QuantumOrb />
              
              {/* Voice-controlled "Ask our AI" button */}
              <motion.button
                className="absolute -bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 
                quantum-button bg-quantum-dark border border-quantum-neon/50 hover:border-quantum-accent 
                px-5 py-3 rounded-full shadow-neon z-10"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00F0FF' }}
                whileTap={{ scale: 0.95 }}
              >
                <Mic className="h-5 w-5 mr-2" />
                <span>Ask our AI</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <button 
            onClick={scrollToNextSection}
            className="flex flex-col items-center text-quantum-accent hover:text-quantum-glow transition duration-300"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;