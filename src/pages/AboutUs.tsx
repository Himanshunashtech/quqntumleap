import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Cpu, Users, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
const cardFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const faqData = [
  {
    question: 'What is quantum computing?',
    answer: 'Quantum computing leverages quantum bits (qubits) to perform complex computations much faster than classical computers.',
  },
  {
    question: 'How does AI integrate with quantum technology?',
    answer: 'AI algorithms can be optimized and accelerated using quantum computation, leading to faster problem-solving and better predictive models.',
  },
  {
    question: 'Who can benefit from Quantum Leaf’s solutions?',
    answer: 'Industries like healthcare, finance, logistics, and research institutions can harness our quantum AI solutions for innovation.',
  },
];

const AboutUsPage: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#0a0f24]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a1d96] via-[#7e2ca7] to-[#a933ff] opacity-10"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full space-y-32 text-white">

        {/* Hero-like Introduction */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            className="font-orbitron font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#a933ff] via-[#7e2ca7] to-[#4a1d96] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span>Quantum Leap</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering the future by combining quantum computing with artificial intelligence to revolutionize industries and empower innovation.
          </motion.p>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="font-orbitron font-bold text-4xl mb-10 text-center bg-gradient-to-r from-[#a933ff] via-[#7e2ca7] to-[#4a1d96] bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: 'Innovation', desc: 'Constantly pushing technological boundaries to build revolutionary solutions.' },
              { icon: Shield, title: 'Security', desc: 'Committed to protecting data with quantum-enhanced cryptography.' },
              { icon: Users, title: 'Collaboration', desc: 'Building strong partnerships with clients and communities to drive impact.' },
            ].map(({ icon: Icon, title, desc }, i) => (
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

        {/* Technology Stack */}
        <section>
          <h2 className="font-orbitron font-bold text-4xl mb-10 text-center bg-gradient-to-r from-[#a933ff] via-[#7e2ca7] to-[#4a1d96] bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: 'Quantum Hardware', desc: 'Utilizing cutting-edge quantum processors from industry leaders.' },
              { icon: Cpu, title: 'AI Frameworks', desc: 'Building AI models with TensorFlow, PyTorch, and custom quantum layers.' },
              { icon: Shield, title: 'Cybersecurity', desc: 'Quantum-resistant encryption and secure cloud infrastructure.' },
              { icon: Users, title: 'Cloud Computing', desc: 'Hybrid cloud solutions optimized for quantum workloads.' },
            ].map(({ icon: Icon, title, desc }, i) => (
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

        
        

        {/* Testimonials */}
        <section>
          <h2 className="font-orbitron font-bold text-4xl mb-10 text-center bg-gradient-to-r from-[#a933ff] via-[#7e2ca7] to-[#4a1d96] bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Quantum Leaf helped us accelerate our research using their advanced quantum AI platform. Truly a game changer!',
                name: 'Dr. Elena Martinez, Lead Scientist',
              },
              {
                quote: 'Their team’s expertise in quantum computing and AI has driven innovation in our financial algorithms.',
                name: 'Marcus Lee, CTO of FinTech Solutions',
              },
              {
                quote: 'Collaborating with Quantum Leaf has opened up new possibilities for secure data encryption.',
                name: 'Priya Nair, Cybersecurity Analyst',
              },
            ].map(({ quote, name }, i) => (
              <motion.div
                key={name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardFadeUp}
                className="bg-[#121837] rounded-xl p-6 shadow-neon hover:shadow-neon-lg transition-shadow duration-300"
              >
                <p className="italic text-gray-300 mb-4">"{quote}"</p>
                <p className="font-semibold text-[#a933ff]">{name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="font-orbitron font-bold text-4xl mb-10 text-center bg-gradient-to-r from-[#a933ff] via-[#7e2ca7] to-[#4a1d96] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map(({ question, answer }, i) => (
              <div
                key={i}
                className="bg-[#121837] rounded-lg p-5 shadow-neon cursor-pointer"
                onClick={() => toggleFaq(i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{question}</h3>
                  {faqOpen === i ? (
                    <ChevronUp className="text-[#a933ff]" />
                  ) : (
                    <ChevronDown className="text-[#a933ff]" />
                  )}
                </div>
                {faqOpen === i && (
                  <motion.p
                    className="mt-3 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;
