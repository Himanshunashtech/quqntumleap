import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  skills: {
    label: string;
    value: number;
  }[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Eliza Chen",
    role: "Chief Quantum Officer",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: [
      { label: "Quantum Physics", value: 95 },
      { label: "Algorithm Design", value: 90 },
      { label: "System Architecture", value: 85 },
      { label: "AI Integration", value: 80 }
    ]
  },
  {
    name: "Dr. Marcus Rivera",
    role: "Director of AI Research",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: [
      { label: "Artificial Intelligence", value: 95 },
      { label: "Neural Networks", value: 90 },
      { label: "Quantum Machine Learning", value: 88 },
      { label: "Data Science", value: 85 }
    ]
  },
  {
    name: "Sarah Johnson",
    role: "Lead Quantum Engineer",
    image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: [
      { label: "Quantum Circuit Design", value: 92 },
      { label: "Quantum Programming", value: 90 },
      { label: "Error Correction", value: 88 },
      { label: "Hardware Integration", value: 82 }
    ]
  },
  {
    name: "Alex Tanner",
    role: "Chief Innovation Officer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: [
      { label: "Strategic Vision", value: 94 },
      { label: "Product Development", value: 90 },
      { label: "Quantum Applications", value: 85 },
      { label: "Business Transformation", value: 88 }
    ]
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });
  
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15
      }
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="quantum-card hover:shadow-neon hover:border-quantum-accent/40 transition-all duration-500"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="relative h-40 w-40 mx-auto sm:mx-0 rounded-full overflow-hidden border-4 border-quantum-blue/30">
            <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-quantum-dark/50 to-transparent"></div>
          </div>
        </div>
        
        {/* Member info */}
        <div className="flex-grow">
          <h3 className="font-orbitron text-xl font-medium text-white mb-1">{member.name}</h3>
          <p className="text-quantum-accent mb-4">{member.role}</p>
          
          {/* Skill radar */}
          <div className="space-y-3">
            {member.skills.map((skill, skillIndex) => (
              <div key={skillIndex}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">{skill.label}</span>
                  <span className="text-quantum-accent">{skill.value}%</span>
                </div>
                <div className="h-2 w-full bg-quantum-dark/50 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-quantum-accent to-quantum-purple"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
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
          Our <span className="gradient-text">Team</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Meet the brilliant minds behind QuantumLeap's revolutionary quantum technologies. Our team combines expertise in quantum physics, AI, and enterprise solutions.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} />
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <motion.button 
          className="quantum-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Our Team
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TeamSection;