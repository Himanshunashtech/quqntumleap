import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  Shield, 
  Database, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: "QuantumCore Processor",
    description: "Our flagship quantum processing unit with 256 qubits, enabling computation beyond classical limits.",
    icon: <Cpu className="h-10 w-10 mb-4 text-quantum-accent" />,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "Hardware"
  },
  {
    name: "QuantumNet Secure",
    description: "Quantum-encrypted network solution providing unhackable communication channels for sensitive data.",
    icon: <Shield className="h-10 w-10 mb-4 text-quantum-accent" />,
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "Security"
  },
  {
    name: "QuantumCloud Platform",
    description: "Cloud-based quantum computing access with intuitive interface and seamless API integration.",
    icon: <Server className="h-10 w-10 mb-4 text-quantum-accent" />,
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "Cloud"
  },
  {
    name: "QuantumAI Engine",
    description: "Hybrid quantum-classical AI system that accelerates machine learning by orders of magnitude.",
    icon: <Database className="h-10 w-10 mb-4 text-quantum-accent" />,
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "AI"
  }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px] xl:w-[420px] quantum-card group transition-all duration-500
      hover:shadow-neon-strong hover:-translate-y-2 hover:border-quantum-accent/50"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
        <div className="absolute top-2 right-2 z-10 bg-quantum-purple/80 text-white text-xs py-1 px-2 rounded">
          {product.tag}
        </div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-quantum-dark/80 to-transparent"></div>
      </div>
      <div>
        <div className="mb-4">
          {product.icon}
        </div>
        <h3 className="font-orbitron text-xl font-medium text-white mb-2">{product.name}</h3>
        <p className="text-gray-400">{product.description}</p>
        <motion.button 
          className="mt-4 text-quantum-accent font-medium flex items-center"
          whileHover={{ x: 5 }}
        ><Link to="/quantumcomputing">
          Learn more
          </Link>
          <ChevronRight className="h-4 w-4 ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const TechShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Control carousel scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { current } = containerRef;
      const scrollAmount = 420; // Approximately one card width
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className="section-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div>
          <h2 className="section-heading">
            Our <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our revolutionary quantum computing solutions designed to solve your most complex challenges.
          </p>
        </div>
        
        <div className="flex space-x-2 mt-6 md:mt-0">
          <motion.button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-quantum-purple/30 hover:border-quantum-accent/70 text-white
            hover:bg-quantum-dark/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-quantum-purple/30 hover:border-quantum-accent/70 text-white
            hover:bg-quantum-dark/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
      
      {/* Products carousel */}
      <div 
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product, index) => (
          <div key={index} className="snap-start">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
      
      {/* Call to action */}
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <motion.button 
          className="quantum-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ><Link to="/quantumcomputing">
          View All Products
                   </Link>

        </motion.button>

      </motion.div>
     
    </div>
  );
};

export default TechShowcase;