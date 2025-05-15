import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Wifi, Satellite, Key, Link, ShieldCheck, Server } from 'lucide-react';

const quantumConcepts = [
  {
    icon: <Wifi className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Entanglement',
    description:
      'Particles become interconnected so that the state of one instantly influences another, regardless of distance. This forms the backbone of quantum communication.',
    link: {
      url: 'https://en.wikipedia.org/wiki/Quantum_entanglement',
      label: 'Learn more',
    },
  },
  {
    icon: <Satellite className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Teleportation',
    description:
      'Enables the transfer of quantum states between distant particles without moving the particles themselves, enabling ultra-secure communication.',
    link: {
      url: 'https://quantum.country/qcvc',
      label: 'Deep dive',
    },
  },
  {
    icon: <Key className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Key Distribution (QKD)',
    description:
      'A communication method that uses quantum mechanics to securely distribute encryption keys, ensuring tamper-proof transmission.',
    link: {
      url: 'https://www.idquantique.com/quantum-safe-security/quantum-key-distribution/',
      label: 'Explore QKD',
    },
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum-Safe Cryptography',
    description:
      'Cryptographic algorithms designed to resist quantum attacks, securing data against future quantum decryption capabilities.',
    link: {
      url: 'https://csrc.nist.gov/Projects/post-quantum-cryptography',
      label: 'NIST PQC',
    },
  },
  {
    icon: <Server className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Network Infrastructure',
    description:
      'Building scalable quantum repeaters and nodes to enable long-distance quantum communication without loss of quantum information.',
    link: {
      url: 'https://www.nature.com/articles/s41534-020-00306-4',
      label: 'Research paper',
    },
  },
  {
    icon: <Link className="h-10 w-10 text-cyan-400" />,
    title: 'Quantum Internet',
    description:
      'The next-generation internet leveraging quantum networks to provide unparalleled security and new computing paradigms.',
    link: {
      url: 'https://quantum-internet.team/',
      label: 'Official site',
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
      stiffness: 50,
    },
  }),
};

const QuantumNetworksPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#071921] px-6 py-20 max-w-7xl mx-auto font-orbitron">
      <motion.header
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(14,211,255,0.9)]">
          Quantum Networks
        </h1>
        <p className="text-cyan-300 max-w-3xl mx-auto text-lg">
          Unlock the future of communication by harnessing the power of quantum mechanics to build ultra-secure and lightning-fast networks.
        </p>
      </motion.header>

      <motion.section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {quantumConcepts.map(({ icon, title, description, link }, i) => (
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
        <h2 className="text-3xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(14,211,255,0.9)]">
          Explore Quantum Networking Today
        </h2>
        <p className="text-lg leading-relaxed">
          Quantum networks are set to revolutionize secure communications, data transmission, and computing connectivity. Stay ahead by embracing the quantum leap in networking technology.
        </p>
      </motion.section>
    </section>
  );
};

export default QuantumNetworksPage;
