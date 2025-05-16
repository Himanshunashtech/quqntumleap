import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import QuantumOrb from '../components/ui/QuantumOrb'; // your 3D orb component

const starVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i: number) => ({
    scale: [0, 1.5, 1],
    opacity: [0, 1, 1],
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
      repeat: Infinity,
      repeatDelay: 2,
    },
  }),
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.7, transition: { duration: 0.3, ease: 'easeIn' } },
};

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    formRef.current?.reset();

    // Hide popup after 3.5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-quantum-darkest px-4 py-20 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Left half: 3D Orb */}
      <div className="w-full lg:w-1/2 flex items-center justify-center h-96 md:h-[450px] lg:h-[600px]">
        <QuantumOrb />
      </div>

      {/* Right half: Contact Form with translucent blur */}
      <div className="w-full lg:w-1/2 max-w-2xl bg-quantum-dark bg-opacity-60 backdrop-blur-xl rounded-2xl p-10 shadow-neon border border-quantum-neon/30 z-10">
        <h2 className="text-4xl font-orbitron font-bold text-quantum-neon mb-8 text-center">
          Get in Touch
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="quantum-input bg-quantum-dark border border-quantum-neon/50 rounded-xl px-5 py-4 text-quantum-neon placeholder-quantum-accent/70 focus:outline-none focus:border-quantum-accent focus:ring-2 focus:ring-quantum-accent/50 focus:text-quantum-neon transition duration-300 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="quantum-input bg-quantum-dark border border-quantum-neon/50 rounded-xl px-5 py-4 text-quantum-neon placeholder-quantum-accent/70 focus:outline-none focus:border-quantum-accent focus:ring-2 focus:ring-quantum-accent/50 focus:text-quantum-neon transition duration-300 w-full"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="quantum-input bg-quantum-dark border border-quantum-neon/50 rounded-xl px-5 py-4 text-quantum-neon placeholder-quantum-accent/70 focus:outline-none focus:border-quantum-accent focus:ring-2 focus:ring-quantum-accent/50 focus:text-quantum-neon transition duration-300 w-full resize-none"
          />
          <motion.button
            type="submit"
            className="quantum-button w-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </motion.button>
        </form>
      </div>

      {/* Popup overlay */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="w-full max-w-md rounded-xl bg-[#1e0b3c] bg-opacity-90 backdrop-blur-md border border-quantum-neon shadow-neon p-12 flex flex-col items-center">
              {/* Stars container */}
              <div className="relative w-full h-28 mb-8 flex justify-center items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={starVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute bg-quantum-neon rounded-full"
                    style={{
                      width: 20,
                      height: 20,
                      top: '50%',
                      left: `${15 + i * 16}%`,
                      translate: '-50% -50%',
                      filter:
                        'drop-shadow(0 0 10px #A933FF) drop-shadow(0 0 15px #00F0FF)',
                    }}
                  />
                ))}
              </div>

              {/* Message */}
              <motion.p
                className="text-3xl font-orbitron font-bold text-quantum-neon text-center tracking-wider select-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              >
                We have received your message!
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
