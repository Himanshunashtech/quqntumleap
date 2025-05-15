import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Animated Sphere with rotation and scaling animation
export const AnimatedSphere = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const props = useSpring({
    from: { scale: 0.8 },
    to: { scale: 1 },
    config: { mass: 10, tension: 400, friction: 50 },
  });

  return (
    <animated.mesh ref={mesh} scale={props.scale}>
      <sphereGeometry args={[1, 100, 200]} />
      <meshStandardMaterial
        color="#4A1D96"
        roughness={0.3}
        metalness={0.8}
        emissive="#A933FF"
        emissiveIntensity={0.5}
      />
    </animated.mesh>
  );
};

// Particle group floating around sphere
export const Particles = () => {
  const particlesRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      particlesRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const particles = useMemo(() => {
    return Array.from({ length: 60 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 1.5 + Math.random() * 1.5;
      const x = distance * Math.sin(angle);
      const y = distance * Math.cos(angle);
      const z = (Math.random() - 0.5) * 2;
      return {
        position: [x, y, z] as [number, number, number],
        size: 0.02 + Math.random() * 0.04,
      };
    });
  }, []);

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
};

// 3D Orb Background Component
const QuantumOrb: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 rounded-full filter blur-2xl bg-purple-700/20 animate-pulse"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#A933FF" />
        <AnimatedSphere />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate rotateSpeed={0.6} />
      </Canvas>
    </div>
  );
};

// Main Privacy Policy & Terms Page
const policies = [
  {
    title: "User Data Protection",
    description:
      "We prioritize the security and protection of your personal data to ensure it remains confidential. We implement strict access controls and encryption technologies to safeguard your information from unauthorized access."
  },
  {
    title: "Data Retention and Deletion",
    description:
      "We retain your data only for as long as necessary to provide our services and comply with legal obligations. Upon request, you can have your data deleted permanently, ensuring your privacy is respected."
  },
  {
    title: "Cookies and Tracking Technologies",
    description:
      "Our site uses cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content. You have the option to manage or disable cookies at any time through your browser settings."
  },
  {
    title: "Third-Party Data Sharing",
    description:
      "We do not share your personal data with third parties without your explicit consent, except when legally required or when working with trusted partners under strict confidentiality agreements."
  },
  {
    title: "Data Security and Encryption",
    description:
      "All user data is transmitted and stored using industry-standard encryption protocols. We continuously monitor our security infrastructure to detect and prevent potential threats or vulnerabilities."
  },
  {
    title: "User Rights and Data Control",
    description:
      "You have full rights over your data, including the ability to access, correct, update, or delete your information. We also support data portability requests, empowering you to transfer data to other services."
  },
  {
    title: "AI Ethics and Transparency",
    description:
      "We are committed to ethical AI development. Our AI systems operate transparently, respecting user privacy, avoiding bias, and being accountable to ensure fair treatment for all users."
  },
  {
    title: "Advertising and Analytics",
    description:
      "Advertising and analytics data is collected only with your permission. We use this information responsibly to improve service quality, customize your experience, and provide relevant content without compromising your privacy."
  },
  {
    title: "International Data Transfers",
    description:
      "Your data may be stored and processed in secure data centers worldwide. We comply with international privacy regulations such as GDPR to ensure your data is handled safely across borders."
  },
  {
    title: "Policy Changes and Updates",
    description:
      "We regularly review and update our policies to keep up with evolving regulations and technological advancements. Any significant changes will be communicated to you promptly."
  },
  {
    title: "Contact and Support Information",
    description:
      "If you have any questions, concerns, or requests related to your privacy or our terms, our dedicated support team is ready to assist you promptly and thoroughly."
  }
];

const PrivacyPolicyTermsPage = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0f24] text-white flex flex-col items-center py-20 px-6 overflow-hidden">
      {/* 3D Background */}
      <QuantumOrb />

      <motion.h1
        className="font-orbitron text-5xl bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 bg-clip-text text-transparent mb-16 z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Privacy Policy & Terms of Service
      </motion.h1>

      <motion.div
        className="space-y-10 max-w-4xl z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">Our Policies</h2>
          <ul className="space-y-10">
            {policies.map(({ title, description }, index) => (
              <li key={index} className="text-gray-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">{title}</h3>
                <p className="leading-relaxed text-gray-400">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyTermsPage;
