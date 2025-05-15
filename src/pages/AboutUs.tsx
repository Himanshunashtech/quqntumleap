import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import QuantumOrb from '../../src/components/ui/QuantumOrb';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0f24]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D96] via-[#7E2CA7] to-[#A933FF] opacity-80"></div>
        <div className="absolute inset-0 grid-background opacity-20"></div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10 space-y-20">
        {/* Our Mission */}
        <section className="text-center">
          <motion.h1
            className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-[#F4F5FA] mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#A933FF]">Mission</span>
          </motion.h1>
          <p className="text-[#BBBFC7] text-lg md:text-xl max-w-3xl mx-auto">
            At Quantum Leaf, our mission is to harness the power of quantum computing and artificial intelligence to transform the world of technology and create impactful, data-driven solutions.
          </p>
        </section>

        {/* Vision */}
        <section className="text-center">
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-[#F4F5FA] mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-[#A933FF]">Vision</span>
          </motion.h2>
          <p className="text-[#BBBFC7] text-lg md:text-xl max-w-3xl mx-auto">
            We envision a future where quantum technology and AI seamlessly integrate to revolutionize industries, accelerate scientific discoveries, and unlock unprecedented possibilities.
          </p>
        </section>

        {/* Technology */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px] mx-auto"
          >
            <QuantumOrb />
          </motion.div>
          <p className="text-[#BBBFC7] text-lg md:text-xl max-w-3xl mx-auto mt-6">
            Our technology is driven by cutting-edge quantum algorithms and powerful AI models that push the limits of computation.
          </p>
        </section>

        {/* Team */}
        <section className="text-center">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-[#F4F5FA] mb-6">
            Meet Our <span className="text-[#A933FF]">Team</span>
          </h2>
          <p className="text-[#BBBFC7] text-lg md:text-xl max-w-3xl mx-auto">
            Our team is a blend of visionary thinkers, experienced engineers, and passionate innovators committed to shaping the future of technology.
          </p>
        </section>

        {/* Innovation */}
        <section className="text-center">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-[#F4F5FA] mb-6">
            Driving <span className="text-[#A933FF]">Innovation</span>
          </h2>
          <p className="text-[#BBBFC7] text-lg md:text-xl max-w-3xl mx-auto">
            We are constantly pushing the boundaries of what's possible, creating cutting-edge solutions to the world's most challenging problems.
          </p>
        </section>

        {/* Contact Us */}
        <section className="text-center">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl text-[#F4F5FA] mb-6">
            Get in <span className="text-[#A933FF]">Touch</span>
          </h2>
          <p className="text-[#BBBFC7] text-lg md:text-xl max-w-3xl mx-auto">
            Ready to explore the future of technology? Contact us to learn more about how we can collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            <motion.button className="bg-[#A933FF] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#7E2CA7] transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Us
            </motion.button>
            <motion.button className="border-2 border-[#A933FF] text-[#A933FF] px-6 py-3 rounded-full shadow-md hover:bg-[#4A1D96] hover:text-white transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Join Our Team
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
