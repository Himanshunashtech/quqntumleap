import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  Atom,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
} from 'lucide-react';

const popupVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.7, transition: { duration: 0.3, ease: 'easeIn' } },
};

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

const Footer: React.FC = () => {
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setShowSubscribePopup(true);
    setEmail('');
    setTimeout(() => {
      setShowSubscribePopup(false);
    }, 3500);
  };

  return (
    <>
      <footer className="bg-quantum-darkest border-t border-quantum-purple/20 relative">
        <div className="grid-background absolute inset-0 opacity-50"></div>

        {/* Quantum footer with pulsing energy grid */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {/* Company & Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="relative h-10 w-10">
                    <Atom className="h-10 w-10 text-quantum-accent animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-quantum-neon shadow-neon-purple"></div>
                    </div>
                  </div>
                  <Link to="/">
                  <span className="text-white font-orbitron text-xl font-bold">
                    Quantum<span className="text-quantum-accent">Leap</span>
                  </span>
                  </Link>
                </div>

                <p className="text-gray-400 text-sm">
                  Pioneering the future through AI and quantum computing solutions.
                  We transform complex challenges into quantum opportunities.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-quantum-accent transition duration-300">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:info@quantumleap.ai">info@quantumleap.ai</a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-quantum-accent transition duration-300">
                    <Phone className="h-5 w-5" />
                    <a href="tel:+11234567890">+1 (123) 456-7890</a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-quantum-accent transition duration-300">
                    <MapPin className="h-5 w-5" />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Quantum+Valley,+CA+94103"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quantum Valley, CA 94103
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-orbitron font-medium text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'About Us', path: '/about' },
                    { name: 'Services', path: '/services' },
                    { name: 'Products', path: '/products' },
                    { name: 'Contact', path: '/contact' },
                    { name: 'Blog', path: '/blogs' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-gray-400 hover:text-quantum-accent transition duration-300 flex items-center"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-quantum-accent mr-2"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-white font-orbitron font-medium text-lg mb-4">Solutions</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Quantum Computing', to: '/quantumcomputing' },
                    { name: 'Quantum Machine Learning', to: '/quantummachinelearning' },
                    { name: 'Quantum Encryption', to: '/quantumencryption' },
                    { name: 'Quantum Networks', to: '/quantumnetwork' },
                    { name: 'AI Integration', to: '/aiintegeration' },
                  ].map(({ name, to }) => (
                    <li key={name}>
                      <Link
                        to={to}
                        className="text-gray-400 hover:text-quantum-accent transition duration-300 flex items-center"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-quantum-accent mr-2"></span>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h3 className="text-white font-orbitron font-medium text-lg mb-4">Subscribe</h3>
                <p className="text-gray-400 text-sm">
                  Join our quantum community and receive the latest news and insights from the frontier of technology.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-quantum-dark border border-quantum-purple/30 text-white 
                    focus:outline-none focus:border-quantum-accent focus:ring-1 focus:ring-quantum-accent transition duration-300"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 px-4 py-2 bg-quantum-purple hover:bg-quantum-purple/90 text-white 
                    rounded-md transition duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>

                {/* Social Media Icons */}
                <div className="flex space-x-3">
                  {[
                    { icon: Github, url: 'https://github.com/login' },
                    { icon: Twitter, url: 'https://twitter.com/login' },
                    { icon: Linkedin, url: 'https://www.linkedin.com/login' },
                    { icon: Youtube, url: 'https://www.youtube.com/account' },
                  ].map(({ icon: Icon, url }, index) => (
                    <motion.a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-quantum-dark border border-quantum-purple/30 
                      text-white hover:text-quantum-accent hover:border-quantum-accent transition duration-300"
                      whileHover={{ y: -3, boxShadow: '0 0 8px rgba(0, 240, 255, 0.7)' }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom section with copyright */}
            <div className="mt-12 pt-8 border-t border-quantum-purple/20 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} QuantumLeap. All rights reserved.</p>

              <div className="flex space-x-4 mt-4 mr-16 md:mt-0">
                <Link to="/privacy-policy-terms" className="text-gray-400 hover:text-quantum-accent text-sm transition duration-300">
                  Privacy Policy & Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-6 right-8 h-12 w-12 rounded-full bg-quantum-purple 
        flex items-center justify-center text-white shadow-neon z-20 hover:bg-quantum-accent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      </footer>

      {/* Subscribe Popup Overlay */}
      <AnimatePresence>
        {showSubscribePopup && (
          <motion.div
            key="subscribe-popup"
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
                      filter: 'drop-shadow(0 0 10px #A933FF) drop-shadow(0 0 15px #00F0FF)',
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
                You have subscribed to our newsletter! <br />
                You will receive notifications about our organization.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
