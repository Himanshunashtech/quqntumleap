import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

export const AnimatedSphere = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  // Smooth rotation animation
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  // Smooth scaling animation
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

export const Particles = () => {
  const particlesRef = useRef<THREE.Group>(null!);

  // Smooth particle motion
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

const QuantumOrb: React.FC = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 rounded-full filter blur-2xl bg-purple-700/20 animate-pulse"></div>
      <Canvas>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#A933FF" />
        <AnimatedSphere />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate rotateSpeed={0.6} />
      </Canvas>
    </div>
  );
};

export default QuantumOrb;