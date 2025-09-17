import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: '#', name: 'Facebook' },
    { icon: <FaInstagram />, href: '#', name: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', name: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', name: 'Twitter' },
    { icon: <FaWhatsapp />, href: '#', name: 'WhatsApp' }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'info@techzar.com', href: 'mailto:info@techzar.com' },
    { icon: <FaPhone />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <FaMapMarkerAlt />, text: 'Ciudad, País', href: '#' }
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

          {/* Newsletter */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Mantente al día con las últimas tecnologías y nuestros servicios.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Tu email"
                className="newsletter-input"
              />
              <motion.button
                type="submit"
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirse
              </motion.button>
            </form>
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