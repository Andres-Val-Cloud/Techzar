import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías para ofrecer soluciones vanguardistas'
    },
    {
      icon: <FaHandshake />,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en transparencia y calidad'
    },
    {
      icon: <FaAward />,
      title: 'Excelencia',
      description: 'Nos comprometemos a superar las expectativas en cada proyecto'
    },
    {
      icon: <FaUsers />,
      title: 'Colaboración',
      description: 'Trabajamos junto a nuestros clientes para lograr el éxito mutuo'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Nosotros</h2>
          <p className="section-description">
            En Techzar, somos un equipo apasionado por la tecnología, dedicado a transformar 
            ideas en realidades digitales que impulsan el crecimiento de nuestros clientes.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-subtitle">Nuestra Misión</h3>
            <p className="about-description">
              Proporcionar soluciones tecnológicas innovadoras y personalizadas que ayuden 
              a las empresas a crecer, optimizar sus procesos y alcanzar sus objetivos 
              mediante el poder de la tecnología moderna.
            </p>
            
            <h3 className="about-subtitle">Nuestra Visión</h3>
            <p className="about-description">
              Ser el socio tecnológico de referencia, reconocido por nuestra excelencia 
              en el desarrollo de software, la calidad de nuestros servicios y nuestro 
              compromiso con la satisfacción del cliente.
            </p>
          </motion.div>

          <motion.div
            className="about-values"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="about-subtitle">Nuestros Valores</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;