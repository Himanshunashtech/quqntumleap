import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Cpu, BarChart2, GitBranch, Layers,  } from 'lucide-react';

const qmlTopics = [
  {
    icon: <Cpu className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Data Encoding',
    description:
      'Techniques to encode classical data into quantum states, enabling quantum algorithms to process complex datasets efficiently.',
    link: {
      url: 'https://arxiv.org/abs/2001.03622',
      label: 'Learn about Encoding',
    },
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-cyan-400" />,
    title: 'Variational Quantum Circuits',
    description:
      'Hybrid quantum-classical models that optimize parameters of quantum circuits to solve machine learning tasks.',
    link: {
      url: 'https://arxiv.org/abs/1811.11184',
      label: 'Explore Variational Circuits',
    },
  },
  {
    icon: <GitBranch className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Neural Networks',
    description:
      'Quantum analogs of classical neural networks leveraging qubit superposition and entanglement to enhance learning capabilities.',
    link: {
      url: 'https://arxiv.org/abs/1904.04767',
      label: 'Quantum NN Overview',
    },
  },
  {
    icon: <Layers className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Kernel Methods',
    description:
      'Kernel-based algorithms enhanced by quantum computing to compute complex similarity measures efficiently.',
    link: {
      url: 'https://arxiv.org/abs/1701.03482',
      label: 'Kernel Methods Explained',
    },
  },
 
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 60,
    },
  }),
};

const QuantumMLPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#071921] px-6 py-20 max-w-7xl mx-auto font-orbitron">
      <motion.header
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(14,211,255,0.95)]">
          Quantum Machine Learning
        </h1>
        <p className="text-cyan-300 max-w-3xl mx-auto text-lg">
          Discover how quantum computing is reshaping machine learning by unlocking new computational possibilities and accelerating AI advancements.
        </p>
      </motion.header>

      <motion.section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {qmlTopics.map(({ icon, title, description, link }, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.25}
              glareColor="#0ef3ff"
              glareBorderRadius="1rem"
              className="bg-[#071921]/90 rounded-xl border border-cyan-400/40 p-6 cursor-pointer flex flex-col justify-between shadow-[0_0_15px_rgba(14,211,255,0.6)] hover:shadow-[0_0_20px_rgba(14,211,255,0.9)] hover:border-cyan-500/80 transition-shadow duration-300"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{title}</h3>
              <p className="text-cyan-300 mb-5 flex-grow">{description}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-cyan-400 font-semibold hover:text-cyan-500 transition-colors"
              >
                <span>{link.label}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="mt-20 max-w-4xl mx-auto text-center text-cyan-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(14,211,255,0.95)]">
          Why Quantum Machine Learning Matters
        </h2>
        <p className="text-lg leading-relaxed">
          Quantum Machine Learning combines the power of quantum computing with AI to revolutionize data processing and pattern recognition, offering breakthroughs in speed and accuracy for complex problem-solving.
        </p>
      </motion.section>
    </section>
  );
};

export default QuantumMLPage;
