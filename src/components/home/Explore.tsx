// Animation variants for arrow bobbing
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const techItems = [
  {
    id: 1,
    title: "Virtual Reality",
    description: `Virtual Reality immerses users in digital environments via headsets for gaming, training, and education. It combines hardware and sensors to enable interactive 3D experiences.`,
  },
  {
    id: 2,
    title: "Augmented Reality",
    description: `Augmented Reality overlays digital content onto the real world, enhancing industries like retail and healthcare. It uses cameras and sensors to integrate virtual elements seamlessly.`,
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: `Artificial Intelligence enables machines to learn and make decisions, driving innovation across sectors. It powers automation, analytics, and smarter systems through machine learning.`,
  },
  {
    id: 4,
    title: "Blockchain Technology",
    description: `Blockchain is a secure, decentralized ledger enabling transparent peer-to-peer transactions. It supports cryptocurrencies, smart contracts, and applications beyond finance.`,
  },
  {
    id: 5,
    title: "5G Networks",
    description: `5G delivers ultra-fast wireless speeds and low latency, enabling massive device connectivity. It powers real-time applications like smart cities and autonomous vehicles.`,
  },
  {
    id: 6,
    title: "Quantum Computing",
    description: `Quantum Computing leverages quantum mechanics for exponentially faster computations. It promises breakthroughs in cryptography, optimization, and scientific research.`,
  },
  {
    id: 7,
    title: "Internet of Things (IoT)",
    description: `IoT connects everyday devices to the internet for data exchange and remote control. It enhances efficiency in homes, industries, and smart environments.`,
  },
  {
    id: 8,
    title: "Edge Computing",
    description: `Edge Computing processes data near its source to reduce latency and improve speed. It supports critical applications by distributing computing resources locally.`,
  },
  {
    id: 9,
    title: "Neural Networks",
    description: `Neural Networks mimic brain structures to recognize patterns and solve problems. They underpin deep learning in image recognition and natural language processing.`,
  },
  {
    id: 10,
    title: "Robotics",
    description: `Robotics builds autonomous machines to perform complex tasks in various industries. Combining AI and sensors, robots improve efficiency and adaptability.`,
  },
  {
    id: 11,
    title: "Cybersecurity",
    description: `Cybersecurity protects digital systems from threats using encryption and AI-driven monitoring. It ensures data privacy and business continuity in a connected world.`,
  },
];

// Arrow & planet animation variants
const arrowMotion = {
  bob: {
    y: [0, -15, 0],
    transition: { yoyo: Infinity, duration: 3, ease: "easeInOut" },
  },
};

const planetOrbit = {
  rotate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 6, ease: "linear" },
  },
};

// Canvas starfield background component
function Starfield() {
  const canvasRef = useRef(null);
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ backgroundColor: "#000010" }}
    />
  );
}

export default function NeonTreeExploreWith3DBackground() {
  return (
    <>
      <Starfield />
      <div className="min-h-screen bg-transparent flex flex-col justify-center items-center py-20 px-2 sm:px-4 relative z-10">
        <div className="relative w-full max-w-4xl px-2 sm:px-8">
          {/* Central vertical neon line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 opacity-70 rounded"></div>
          <ul className="space-y-12 sm:space-y-24 relative z-20">
            {techItems.map((tech, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.li
                  key={tech.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex w-full justify-${isLeft ? "start" : "end"} items-center sm:px-8 px-2`}
                  style={{ perspective: "1000px" }}
                >
                  {/* Branch line connecting to center */}
                 

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: isLeft ? 10 : -10, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className="w-full max-w-xs sm:max-w-md bg-gradient-to-tr from-blue-900 to-blue-700 border border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)] rounded-3xl p-4 sm:p-8 text-blue-200 cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-400 drop-shadow-[0_0_10px_rgb(59,130,246)]">
                      {tech.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">{tech.description}</p>
                  </motion.div>

                  {/* Rotating planets */}
                  {/* <motion.div
                    variants={planetOrbit}
                    animate="rotate"
                    className="absolute -top-16 sm:-top-20 left-0 right-0 mx-auto flex gap-4"
                  >
                    <div className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_6px_rgb(147,197,253)]"></div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_8px_rgb(59,130,246)]"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_4px_rgb(147,197,253)]"></div>
                  </motion.div> */}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
