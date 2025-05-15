import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Atom } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name:" " , href: " " },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
      setHideHeader(scrollTop > lastScrollTop && scrollTop > 100);
      lastScrollTop = scrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: any) => {
    if (href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'} ${hideHeader ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="flex items-center gap-2">
              <Atom className="h-10 w-10 text-quantum-accent animate-spin-slow" />
              <span className="text-white font-orbitron text-xl font-bold">
                Quantum<span className="text-quantum-accent">Leap</span>
              </span>
            </Link>
          </motion.div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href.startsWith('/') ? item.href : location.pathname}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium relative group ${location.pathname === item.href ? 'text-quantum-accent' : 'text-gray-300'} hover:text-quantum-accent transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <motion.button className="quantum-button ml-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: navItems.length * 0.1 }}>
              Contact Us
            </motion.button>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white hover:text-quantum-accent transition duration-300">
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div className="md:hidden bg-black border-t border-quantum-purple/20" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href.startsWith('/') ? item.href : location.pathname}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-quantum-accent hover:bg-quantum-purple/10 rounded-md transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <button className="quantum-button w-full mt-4">Contact Us</button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
