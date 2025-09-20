import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'INICIO', href: '#home', id: 'home' },
    { name: 'SERVICIOS', href: '#services', id: 'services' },
    { name: 'NOSOTROS', href: '#about', id: 'about' },
    { name: 'CONTACTO', href: '#contact', id: 'contact' }
  ];

  // Detectar la sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (href, id) => {
    setActiveSection(id);
    setIsOpen(false);

    // Esperar a que termine la animación de cierre del menú móvil (~300ms)
    const delay = 350;
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Compensar la altura del navbar fijo
        const navbar = document.querySelector('.navbar');
        const offset = navbar?.offsetHeight ? navbar.offsetHeight + 10 : 90;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
      } else {
        // Fallback: actualizar el hash
        if (href.startsWith('#')) {
          window.location.hash = href;
        }
      }
    }, delay);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div 
          className="navbar-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/techzar-logo.png" alt="Techzar Logo" className="logo" />
          <span className="brand-text">TECHZAR</span>
        </motion.div>

        {/* Separador vertical */}
        <div className="navbar-separator"></div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`navbar-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.href, item.id);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div 
                  className="active-indicator"
                  layoutId="activeIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Button */}
        <motion.button
          className="hamburger"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-container">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`mobile-menu-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.href, item.id);
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;