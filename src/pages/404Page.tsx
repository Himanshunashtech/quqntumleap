// src/pages/404Page.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a1a]">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} className="absolute">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff00ff" intensity={1.5} />
        <Stars radius={100} depth={50} count={2000} factor={4} />
        <FloatingNeonShape />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Content Overlay */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-8xl font-bold text-cyan-400 [text-shadow:_0_0_10px_#00f7ff,_0_0_20px_#00f7ff,_0_0_30px_#00f7ff]">
          404
        </h1>
        <h2 className="my-4 text-3xl text-purple-400 animate-glitch">
          QUANTUM DISRUPTION DETECTED
        </h2>
        <p className="mb-8 text-xl text-gray-300">
          The spacetime coordinates you requested don't exist in our continuum
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00f7ff" }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border-2 border-cyan-400 bg-transparent px-6 py-3 text-lg font-medium text-cyan-400 transition-all hover:bg-cyan-400/10"
          onClick={() => navigate('/')}
        >
          RETURN TO SAFETY
        </motion.button>
      </motion.div>
    </div>
  )
}

// 3D Neon Shape Component
function FloatingNeonShape() {
  return (
    <mesh scale={1.8} position={[0, 0, -2]} rotation={[0.4, 0.6, 0.2]}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial color="#00F0FF" emissive="#00F0FF" emissiveIntensity={1.2} metalness={0.7} roughness={0.2} />
    </mesh>
  )
}
