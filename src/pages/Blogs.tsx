import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PenTool, MessageSquare, BookOpen } from 'lucide-react';

const cardFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const blogPosts = [
  { icon: FileText, title: 'The Future of Quantum Computing', desc: 'Exploring the potential impact of quantum technology on various industries.', link: 'https://example.com/future-of-quantum-computing' },
  { icon: PenTool, title: 'AI and Quantum Synergy', desc: 'How AI can leverage quantum computing for accelerated learning.', link: 'https://example.com/ai-quantum-synergy' },
  { icon: MessageSquare, title: 'Breaking Encryption with Quantum', desc: 'Understanding the implications of quantum computing on modern cryptography.', link: 'https://example.com/breaking-encryption-quantum' },
  { icon: BookOpen, title: 'Quantum Mechanics for Beginners', desc: 'An introduction to the principles of quantum physics.', link: 'https://example.com/quantum-mechanics-beginners' },
  { icon: FileText, title: 'Top Quantum Algorithms', desc: 'A deep dive into the algorithms powering quantum computation.', link: 'https://example.com/top-quantum-algorithms' },
  { icon: PenTool, title: 'Quantum Networking and Communication', desc: 'Exploring the future of ultra-secure communication systems.', link: 'https://example.com/quantum-networking-communication' },
];

const BlogPage = () => {
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
            Our <span>Blog</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, news, and thought leadership from the world of quantum computing and AI.
          </motion.p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogPosts.map(({ icon: Icon, title, desc, link }, i) => (
              <motion.a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardFadeUp}
                className="bg-[#121837] rounded-xl p-6 shadow-neon hover:shadow-neon-lg transition-shadow duration-300 cursor-pointer"
              >
                <Icon className="h-12 w-12 text-[#a933ff] mb-4" />
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{desc}</p>
                <span className="text-[#a933ff] font-semibold underline">Read More →</span>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;