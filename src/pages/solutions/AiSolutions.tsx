import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Powered Conversations',
    description: 'Seamlessly integrate AI chatbots that understand natural language and provide intelligent responses.',
  },
  {
    title: 'Automated Task Execution',
    description: 'Deploy AI models that autonomously perform complex tasks, increasing efficiency and accuracy.',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Leverage AI to analyze data streams in real-time for actionable insights and proactive decision-making.',
  },
];

const aiTypes = [
  {
    name: 'Narrow AI (Weak AI)',
    desc: 'AI systems designed for specific tasks like speech recognition or recommendation engines.',
    link: 'https://chat.openai.com/', // OpenAI ChatGPT as example
  },
  {
    name: 'General AI (Strong AI)',
    desc: 'Hypothetical AI with human-like cognitive abilities capable of understanding and learning any task.',
    link: 'https://www.youtube.com/watch?v=2ePf9rue1Ao', // explanatory video
  },
  {
    name: 'Superintelligent AI',
    desc: 'AI that surpasses human intelligence and can improve itself autonomously.',
    link: 'https://www.nickbostrom.com/superintelligence', // Bostrom's page
  },
  {
    name: 'Reactive Machines',
    desc: 'Basic AI that reacts to inputs but has no memory of past events.',
    link: 'https://deepmind.com/research/case-studies/alphago-the-story-so-far', // DeepMind AlphaGo
  },
  {
    name: 'Limited Memory',
    desc: 'AI systems that can learn from historical data to inform current decisions.',
    link: 'https://ai.googleblog.com/2019/02/learning-to-learn-in-google-brain.html', // Google AI Blog
  },
];

const AIIntegrationPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#071921] px-6 py-20 max-w-7xl mx-auto">
      {/* Hero */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-orbitron text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400">
          AI Integration
        </h1>
        <p className="mt-4 text-cyan-300 max-w-3xl mx-auto text-lg">
          Empower your platform with advanced AI capabilities, enabling intelligent automation, interactive chatbots, and insightful analytics.
        </p>
      </motion.div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {features.map(({ title, description,  }, i) => (
          <motion.div
            key={title}
            className="bg-[#0a1f2d] rounded-xl border border-cyan-500/40 p-6 shadow-neon cursor-pointer hover:shadow-[0_0_20px_rgba(14,211,255,0.7)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <h3 className="text-xl font-orbitron text-white mb-4">{title}</h3>
            <p className="text-cyan-300 mb-6">{description}</p>
           
          </motion.div>
        ))}
      </div>

      {/* New Section: AI IDE Integration */}
      <motion.div
        className="bg-[#0a1f2d] rounded-xl border border-cyan-500/40 p-10 shadow-neon mb-20 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2">
          <h2 className="font-orbitron text-3xl text-white mb-6">Integrate AI Development Tools</h2>
          <p className="text-cyan-300 mb-6">
            Enhance your development workflow with AI-powered IDEs that assist with code generation, debugging, and intelligent suggestions.
          </p>
          <ul className="list-disc list-inside text-cyan-400 space-y-3">
            <li>Real-time code autocompletion</li>
            <li>AI-driven debugging and error fixing</li>
            <li>Natural language to code conversion</li>
            <li>Integration with popular coding platforms</li>
          </ul>
        </div>
        <div className="md:w-1/2 rounded-lg overflow-hidden border border-cyan-600/50 shadow-[0_0_20px_rgba(14,211,255,0.7)]">
          <video
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/robot.mp4" // Replace with your 3D AI IDE coding video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>

      {/* AI Types Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-orbitron text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 mb-6">
          Types of AI & Chat Models
        </h2>
        <p className="text-cyan-300 max-w-3xl mx-auto mb-12">
          Explore different categories of AI, their capabilities, and try out popular chat models to understand how they work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {aiTypes.map(({ name, desc, link }) => (
            <motion.a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0a1f2d] rounded-xl border border-cyan-500/40 p-6 shadow-neon hover:shadow-[0_0_20px_rgba(14,211,255,0.7)] transition-shadow duration-300 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-orbitron text-white mb-3">{name}</h3>
              <p className="text-cyan-300 mb-4">{desc}</p>
              <span className="text-cyan-400 font-semibold underline">Explore Model →</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AIIntegrationPage;
