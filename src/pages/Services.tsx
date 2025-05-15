import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, Code, ShieldCheck, TrendingUp, Globe, Settings, Zap, Search } from 'lucide-react';

const cardFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const servicesData = [
  { icon: Cpu, title: 'Quantum Computing', desc: 'Next-gen quantum processing for unparalleled computational power.' },
  { icon: Database, title: 'AI Solutions', desc: 'Advanced AI systems for intelligent automation and analytics.' },
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Scalable, secure, and quantum-ready cloud solutions.' },
  { icon: Code, title: 'Software Development', desc: 'Custom software solutions tailored to your business needs.' },
  { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Quantum-resistant security for data protection.' },
  { icon: TrendingUp, title: 'Data Analytics', desc: 'Powerful insights from massive data sets.' },
  { icon: Globe, title: 'Global Networking', desc: 'Optimized networking for faster global connectivity.' },
  { icon: Settings, title: 'IT Consulting', desc: 'Expert guidance for digital transformation.' },
  { icon: Zap, title: 'Automation', desc: 'Automate workflows for increased efficiency.' },
  { icon: Search, title: 'R&D Services', desc: 'Cutting-edge research and development support.' },
];

const ServicesPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#0a0f24]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a1d96] via-[#7e2ca7] to-[#a933ff] opacity-10"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/grid-pattern.svg")', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full space-y-32 text-white">
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            className="font-orbitron font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#a933ff] via-[#7e2ca7] to-[#4a1d96] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span>Services</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering businesses with the latest in quantum computing, AI, and advanced technology solutions.
          </motion.p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {servicesData.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardFadeUp}
                className="bg-[#121837] rounded-xl p-6 shadow-neon hover:shadow-neon-lg transition-shadow duration-300 cursor-default"
              >
                <Icon className="h-12 w-12 text-[#a933ff] mb-4" />
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
