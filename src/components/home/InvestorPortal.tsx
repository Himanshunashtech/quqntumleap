import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LineChart, TrendingUp, DollarSign, BarChart4 } from 'lucide-react';

interface FundingStageProps {
  stage: string;
  amount: string;
  date: string;
  description: string;
  current: boolean;
  index: number;
}

const FundingStage: React.FC<FundingStageProps> = ({ stage, amount, date, description, current, index }) => {
  return (
    <motion.div 
      className={`relative ${index !== 0 && 'pl-8 ml-4 border-l border-quantum-purple/40'} pb-10`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 -translate-x-[50%] w-8 h-8 rounded-full flex items-center justify-center">
        {current ? (
          <div className="w-8 h-8 rounded-full bg-quantum-accent/20 flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 rounded-full bg-quantum-accent shadow-neon"></div>
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-quantum-purple/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-quantum-accent"></div>
          </div>
        )}
      </div>
      
      <div className={current ? 'quantum-card bg-quantum-dark/60 border-quantum-accent/30' : ''}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-orbitron font-medium text-lg text-white">{stage}</h3>
          <span className={`text-lg font-medium ${current ? 'text-quantum-accent' : 'text-white'}`}>{amount}</span>
        </div>
        <p className="text-gray-400 text-sm mb-3">{date}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const fundingData = [
  {
    stage: "Seed Round",
    amount: "$2.5M",
    date: "January 2022",
    description: "Initial funding to develop our quantum processor prototype and core technology.",
    current: false
  },
  {
    stage: "Series A",
    amount: "$18M",
    date: "October 2022",
    description: "Expanded our research team and established our first quantum lab facility.",
    current: false
  },
  {
    stage: "Series B",
    amount: "$45M",
    date: "July 2023",
    description: "Scaled our technology and launched our first commercial quantum processing units.",
    current: true
  },
  {
    stage: "Series C",
    amount: "Upcoming",
    date: "Q3 2024 (Projected)",
    description: "Global expansion and commercialization of our quantum cloud platform.",
    current: false
  }
];

const InvestorPortal: React.FC = () => {
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
          Investor <span className="gradient-text">Portal</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Track our growth journey and investment milestones as we revolutionize the quantum computing landscape.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Funding timeline */}
        <div className="lg:col-span-2">
          <motion.h3 
            className="section-subheading mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            Funding Journey
          </motion.h3>
          
          <div className="relative pl-4">
            {fundingData.map((stage, index) => (
              <FundingStage 
                key={index}
                stage={stage.stage}
                amount={stage.amount}
                date={stage.date}
                description={stage.description}
                current={stage.current}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Right: Stats and metrics */}
        <div>
          <motion.h3 
            className="section-subheading mb-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            Key Metrics
          </motion.h3>
          
          <div className="space-y-6">
            {[
              { icon: <TrendingUp className="h-6 w-6" />, title: "Growth Rate", value: "+127% YoY" },
              { icon: <DollarSign className="h-6 w-6" />, title: "Valuation", value: "$450M" },
              { icon: <LineChart className="h-6 w-6" />, title: "Revenue Growth", value: "+89% YoY" },
              { icon: <BarChart4 className="h-6 w-6" />, title: "Market Cap Potential", value: "$2.5B by 2027" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="quantum-card hover:border-quantum-accent/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center">
                  <div className="bg-quantum-blue/20 p-3 rounded-lg mr-4 text-quantum-accent">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">{stat.title}</h4>
                    <p className="text-white font-orbitron text-xl font-medium">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="quantum-button w-full">
                Investor Login
              </button>
              <p className="text-gray-500 text-sm mt-2 text-center">
                For accredited investors only
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorPortal;