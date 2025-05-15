import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, Server, Code2, ShieldAlert, Globe2 } from 'lucide-react';

const cardFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const productsData = [
  { icon: ShoppingCart, title: 'Quantum AI Platform', desc: 'Revolutionize your business with next-gen AI solutions powered by quantum technology.' },
  { icon: Package, title: 'Qubit Engine', desc: 'High-performance quantum processors for scientific and industrial applications.' },
  { icon: Server, title: 'Quantum Cloud', desc: 'Secure, scalable quantum cloud computing for real-time data processing.' },
  { icon: Code2, title: 'Quantum SDK', desc: 'Comprehensive developer tools for building quantum applications.' },
  { icon: ShieldAlert, title: 'Quantum Security Suite', desc: 'Quantum-enhanced cryptography for data protection.' },
  { icon: Globe2, title: 'Global Quantum Network', desc: 'Seamless, high-speed global networking for quantum communication.' },
];

const ProductsPage = () => {
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
            Our <span>Products</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cutting-edge quantum products designed to push the boundaries of technology and innovation.
          </motion.p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {productsData.map(({ icon: Icon, title, desc }, i) => (
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

export default ProductsPage;
