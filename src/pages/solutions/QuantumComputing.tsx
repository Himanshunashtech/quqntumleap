import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Link2 } from 'lucide-react';

const useCaseData = [
  {
    title: 'Quantum Cryptography',
    description: 'Provides theoretically unbreakable encryption methods, ensuring maximum data security.',
    paperLink: 'https://arxiv.org/abs/quant-ph/0101012',
  },
  {
    title: 'Optimization Problems',
    description: 'Quantum algorithms can solve complex optimization challenges faster than classical methods.',
    paperLink: 'https://doi.org/10.1038/nphys2743',
  },
  {
    title: 'Drug Discovery',
    description: 'Simulating molecular interactions with quantum computers accelerates pharmaceutical research.',
    paperLink: 'https://www.nature.com/articles/s41586-020-2444-0',
  },
  {
    title: 'Machine Learning',
    description: 'Quantum-enhanced ML models enable superior pattern recognition and faster training.',
    paperLink: 'https://arxiv.org/abs/1904.04219',
  },
  {
    title: 'Financial Modeling',
    description: 'Enables more accurate risk analysis and portfolio optimization using quantum algorithms.',
    paperLink: 'https://arxiv.org/abs/1712.07404',
  },
  {
    title: 'Climate Modeling',
    description: 'Quantum simulations improve forecasting models for climate change and environmental planning.',
    paperLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0010465519301260',
  },
  {
    title: 'Material Science',
    description: 'Predicts material properties enabling the design of novel compounds with desired characteristics.',
    paperLink: 'https://pubs.acs.org/doi/10.1021/acs.chemrev.9b00331',
  },
];

const UseCaseCard: React.FC<{
  title: string;
  description: string;
  paperLink: string;
  delay: number;
}> = ({ title, description, paperLink, delay }) => {
  return (
    <motion.div
      className="bg-[#071921]/90 rounded-xl border border-cyan-400/40 p-6 cursor-pointer flex flex-col justify-between transition-shadow duration-300 hover:border-cyan-500/80 hover:shadow-[0_0_12px_rgba(14,211,255,0.7),0_0_24px_rgba(14,211,255,0.4)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={() => window.open(paperLink, '_blank')}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') window.open(paperLink, '_blank'); }}
    >
      <h3 className="font-orbitron font-medium text-white text-lg mb-4">{title}</h3>
      <p className="text-cyan-300 mb-6 flex-grow">{description}</p>
      <div className="flex items-center text-cyan-400 hover:text-cyan-500 space-x-2 select-none">
        <BookOpen className="w-5 h-5" />
        <span className="underline font-semibold">Read Published Paper</span>
        <Link2 className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

const QuantumUseCasesPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#071921] px-6 py-20 max-w-7xl mx-auto">
      <motion.h2
        className="text-center font-orbitron text-4xl mb-20 bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Quantum Computing Use Cases
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {useCaseData.map(({ title, description, paperLink }, i) => (
          <UseCaseCard
            key={title}
            title={title}
            description={description}
            paperLink={paperLink}
            delay={i * 0.15}
          />
        ))}
      </div>
    </section>
  );
};

export default QuantumUseCasesPage;
