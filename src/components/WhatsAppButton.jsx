import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "523339486994";
  const message = "¡Hola! Me interesa conocer más sobre sus servicios de Techzar.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Detectar tamaño de pantalla para posicionamiento responsivo
  const getResponsiveRight = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return '0px'; // Desktop: pegado al borde
      if (window.innerWidth >= 769) return '5px';  // Tablet
      return '15px'; // Móvil: más espacio para UX táctil
    }
    return '0px';
  };

  const getResponsiveSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return '70px'; // Desktop
      if (window.innerWidth >= 769) return '65px';  // Tablet
      return '60px'; // Móvil
    }
    return '70px';
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '25px',
    right: getResponsiveRight(),
    width: getResponsiveSize(),
    height: getResponsiveSize(),
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
    zIndex: 9999,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    textDecoration: 'none',
    color: 'white',
    fontSize: window.innerWidth >= 1024 ? '35px' : window.innerWidth >= 769 ? '32px' : '28px',
    animation: 'float 3s ease-in-out infinite'
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Contactar por WhatsApp - Techzar"
        title="¡Contáctanos por WhatsApp!"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsAppButton;