import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaWhatsapp />, href: 'https://wa.me/523339486994?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20desarrollo%20tecnol%C3%B3gico', name: 'WhatsApp' }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'techzar.mx@gmail.com', href: 'mailto:techzar.mx@gmail.com' },
    { icon: <FaPhone />, text: '+52 (33) 39486994', href: 'tel:+523339486994' },
    { icon: <FaMapMarkerAlt />, text: 'Zapopan, Jalisco', href: '#' }
  ];

  const services = [
    'Desarrollo Web',
    'Desarrollo de Software',
    'Ensambles',
    'Mantenimiento',
    'Reparaciones',
    'Consultas TI'
  ];

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-brand">
              <img src="/techzar-logo.png" alt="Techzar Logo" className="footer-logo" />
              <h3>TECHZAR</h3>
            </div>
            <p className="footer-description">
              Innovación y excelencia en desarrollo tecnológico. 
              Tu socio confiable para soluciones TI integrales.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-title">Servicios</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <a href="#services" className="footer-link">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="footer-title">Contacto</h4>
            <div className="contact-info">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="contact-icon">{contact.icon}</span>
                  <span className="contact-text">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>


        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="footer-bottom-content">
            <p>&copy; 2025 Techzar. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacidad</a>
              <a href="#" className="footer-bottom-link">Términos</a>
              <a href="#" className="footer-bottom-link">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;