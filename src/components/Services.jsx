import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaDesktop, FaTools, FaCog, FaWrench, FaHeadset } from 'react-icons/fa';

const Services = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice && isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceRequest = (serviceTitle) => {
    navigate(`/solicitar?service=${encodeURIComponent(serviceTitle)}`);
  };

  const toggleCard = (index, event) => {
    if (isMobile) {
      // Prevenir la propagación del evento si viene del botón
      if (event && event.target.classList.contains('service-btn')) {
        return;
      }
      
      setFlippedCards(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    }
  };

  const services = [
    {
      icon: <FaCode />,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, responsivos y optimizados para ofrecer la mejor experiencia de usuario.',
      features: ['React & Next.js', 'Responsive Design', 'SEO Optimizado', 'PWA']
    },
    {
      icon: <FaDesktop />,
      title: 'Desarrollo de Software',
      description: 'Soluciones de software personalizadas para automatizar procesos y mejorar la eficiencia empresarial.',
      features: ['Aplicaciones Desktop', 'Sistemas Web', 'APIs REST', 'Bases de Datos']
    },
    {
      icon: <FaTools />,
      title: 'Ensambles',
      description: 'Ensamblaje profesional de equipos informáticos con componentes de alta calidad y garantía.',
      features: ['PCs Gaming', 'Workstations', 'Servidores', 'Configuración']
    },
    {
      icon: <FaCog />,
      title: 'Mantenimiento',
      description: 'Mantenimiento preventivo y correctivo para mantener tus sistemas funcionando óptimamente.',
      features: ['Limpieza Hardware', 'Actualización Software', 'Optimización', 'Respaldos']
    },
    {
      icon: <FaWrench />,
      title: 'Reparaciones',
      description: 'Diagnóstico y reparación especializada de equipos informáticos con rapidez y eficiencia.',
      features: ['Diagnóstico Gratuito', 'Reparación Motherboard', 'Recuperación Datos', 'Garantía']
    },
    {
      icon: <FaHeadset />,
      title: 'Consultas TI',
      description: 'Asesoría técnica especializada para optimizar tu infraestructura tecnológica empresarial.',
      features: ['Auditoría TI', 'Migración Cloud', 'Seguridad', 'Capacitación']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="decorative-line"></div>
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-description">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${flippedCards.has(index) ? 'flipped' : ''}`}
              variants={cardVariants}
              whileHover={!isMobile ? { 
                scale: 1.05,
                rotateY: 10,
                z: 50
              } : {}}
              whileTap={isMobile ? { scale: 0.98 } : {}}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              style={{ 
                cursor: isMobile ? 'pointer' : 'default',
                touchAction: 'manipulation'
              }}
              onClick={(e) => toggleCard(index, e)}
              >
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  {isMobile && (
                    <div className="touch-indicator">
                      <span>👆 Toca para ver más detalles</span>
                    </div>
                  )}
                </div>
                
                <div className="service-card-back">
                  <h4 className="service-features-title">Incluye:</h4>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="service-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceRequest(service.title);
                    }}
                  >
                    Solicitar
                  </motion.button>
                  {isMobile && (
                    <div className="touch-indicator back">
                      <span>👆 Toca para regresar</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;