import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, Ring } from '@react-three/drei';

const neonColors = [
  "#7c3aed", "#14b8a6", "#facc15", "#ec4899", "#3b82f6", "#10b981", "#f97316", "#8b5cf6", "#22d3ee", "#e879f9"
];

const CircuitBoardWithSpheres = () => {
  const smallSpheres = Array.from({ length: 15 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    ],
    color: neonColors[Math.floor(Math.random() * neonColors.length)],
    size: Math.random() * 0.3 + 0.1
  }));

  return (
    <div className="relative w-full h-screen bg-black">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 10]} intensity={2} color="#ffffff" />

        {/* Main Large Sphere with Ring */}
        <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial color={neonColors[0]} emissive={neonColors[0]} emissiveIntensity={2} />
        </Sphere>
        <Ring args={[1.6, 2, 64]} position={[0, 0, 0]} rotation={[1.5, 0, 0]}>
          <meshStandardMaterial color={neonColors[2]} emissive={neonColors[2]} emissiveIntensity={1.2} side={2} />
        </Ring>

        {/* Smaller Rotating Spheres */}
        {smallSpheres.map((sphere, i) => (
          <Sphere key={i} args={[sphere.size, 64, 64]} position={sphere.position}>
            <meshStandardMaterial color={sphere.color} emissive={sphere.color} emissiveIntensity={1.2} />
          </Sphere>
        ))}

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
        <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade speed={2} />
      </Canvas>
    </div>
  );
};

export default CircuitBoardWithSpheres;
