import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface MediaCardProps {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
  index: number;
}

const MediaCard: React.FC<MediaCardProps> = ({ title, source, date, excerpt, image, link, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true,  });
  
  return (
    <motion.div
      ref={cardRef}
      className="quantum-card group hover:border-quantum-accent/40 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex flex-col h-full">
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-quantum-dark/90 to-transparent"></div>
          <div className="absolute bottom-3 left-3">
            <span className="bg-quantum-accent/90 text-white text-xs px-2 py-1 rounded">
              {source}
            </span>
          </div>
        </div>
        
        <div className="flex-grow flex flex-col">
          <h3 className="font-orbitron text-lg font-medium text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-3">{date}</p>
          <p className="text-gray-300 mb-4 flex-grow">{excerpt}</p>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto flex items-center text-quantum-accent font-medium hover:text-quantum-glow transition-colors duration-300"
          >
            Read full article
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const mediaData = [
  {
    title: "QuantumLeap's Revolutionary Processor Breaks Quantum Supremacy Record",
    source: "TechCrunch",
    date: "May 15, 2024",
    excerpt: "QuantumLeap's 256-qubit processor has solved a problem that would take classical computers billions of years to calculate, in just minutes.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://techcrunch.com/quantumleap-processor-breakthrough"
  },
  {
    title: "How QuantumLeap's AI-Quantum Integration is Transforming Drug Discovery",
    source: "Forbes",
    date: "April 3, 2024",
    excerpt: "Pharmaceutical companies using QuantumLeap's platform are reporting 80% faster discovery timelines for novel drug compounds.",
    image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://forbes.com/quantumleap-ai-drug-discovery"
  },
  {
    title: "QuantumLeap Announces Strategic Partnership with Global Financial Institutions",
    source: "The Wall Street Journal",
    date: "March 10, 2024",
    excerpt: "Five of the world's largest banks will deploy QuantumLeap's technology for risk modeling and fraud detection.",
    image: "https://images.pexels.com/photos/7078651/pexels-photo-7078651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://wsj.com/quantumleap-finance-partnership"
  }
];

const MediaCoverage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <div className="section-container" ref={sectionRef}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          Media <span className="gradient-text">Coverage</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          See what the world's leading publications are saying about QuantumLeap's groundbreaking quantum computing solutions.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {mediaData.map((item, index) => (
          <MediaCard
            key={index}
            title={item.title}
            source={item.source}
            date={item.date}
            excerpt={item.excerpt}
            image={item.image}
            link={item.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaCoverage;
