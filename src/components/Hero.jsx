import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrambleText = ({ children, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const finalText = children;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() => {
        return finalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            if (letter === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');
      });

      if (iteration >= finalText.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [finalText, speed]);

  return (
    <span className={`scramble-text ${isAnimating ? 'animating' : ''}`}>
      {displayText}
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <ScrambleText speed={30}>TECHZAR</ScrambleText>
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <ScrambleText speed={40}>Desarrollo Tecnológico</ScrambleText>
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Innovación y excelencia en desarrollo web, software, ensambles, 
            mantenimientos, reparaciones y consultas TI.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            <motion.a
              href="#services"
              className="btn btn-primary"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Nuestros Servicios
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contáctanos
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="video-container">
            <div className="video-placeholder">
              <div className="video-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="video-title">Video Promocional</h3>
              <p className="video-description">
                Conoce más sobre Techzar y nuestros servicios
              </p>
              <div className="video-placeholder-text">
                <span>Espacio reservado para video de YouTube</span>
              </div>
            </div>
            {/* 
            Para agregar un video de YouTube real, reemplaza todo el div 'video-placeholder' 
            con este iframe y cambia VIDEO_ID por el ID real del video:
            
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1" 
              title="Video Promocional - Techzar" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              loading="lazy">
            </iframe>
            
            Ejemplo con un video real:
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;