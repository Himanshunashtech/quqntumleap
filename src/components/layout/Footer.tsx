import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
                <span className="text-white font-orbitron text-xl font-bold">
                  Quantum<span className="text-quantum-accent">Leap</span>
                </span>
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
                  <span>Quantum Valley, CA 94103</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-orbitron font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Products', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-quantum-accent transition duration-300 flex items-center"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-quantum-accent mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solutions */}
            <div>
              <h3 className="text-white font-orbitron font-medium text-lg mb-4">Solutions</h3>
              <ul className="space-y-2">
                {[
                  'Quantum Computing', 
                  'AI Integration', 
                  'Quantum Machine Learning', 
                  'Quantum Encryption', 
                  'Quantum Networks', 
                  'Research Partnerships'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-quantum-accent transition duration-300 flex items-center"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-quantum-accent mr-2"></span>
                      {item}
                    </a>
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
              <form className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-lg bg-quantum-dark border border-quantum-purple/30 text-white 
                    focus:outline-none focus:border-quantum-accent focus:ring-1 focus:ring-quantum-accent transition duration-300"
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
                {[Github, Twitter, Linkedin, Youtube].map((Icon, index) => (
                  <motion.a 
                    key={index}
                    href="#"
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
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} QuantumLeap. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 mr-16 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-quantum-accent text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-quantum-accent text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-quantum-accent text-sm transition duration-300">Cookies</a>
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
  );
};

export default Footer;