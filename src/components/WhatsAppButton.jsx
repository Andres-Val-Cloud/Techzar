import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "+5233394869994"; // Tu número sin espacios para el enlace
  const message = "¡Hola! Me interesa conocer más sobre sus servicios tecnológicos.";
  
  // Crear el enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="whatsapp-button"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0]
      }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
    >
      <motion.div
        className="whatsapp-icon"
        animate={{ 
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaWhatsapp />
      </motion.div>
      
      <motion.div 
        className="whatsapp-tooltip"
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        ¡Contáctanos por WhatsApp!
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;