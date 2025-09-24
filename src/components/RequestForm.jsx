import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaComments, FaPaperPlane, FaHome } from 'react-icons/fa';

const RequestForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Configuración de EmailJS usando variables de entorno
  const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_nqdqk05',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_lcza6sa',
    confirmationTemplateId: import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID || 'template_skc8k3l',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '1DLKvC0WhOnSzcPLV'
  };

  // Estado del formulario
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    message: '',
    urgency: 'normal'
  });

  // Obtener el servicio de los parámetros URL
  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, service: decodeURIComponent(service) }));
    }
  }, [searchParams]);

  // Lista de servicios disponibles
  const services = [
    'Desarrollo Web',
    'Desarrollo de Software',
    'Ensambles',
    'Mantenimiento',
    'Reparaciones',
    'Consultas TI'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Debug: Verificar variables de entorno
    console.log('🔍 Variables de entorno EmailJS:', {
      serviceId: emailConfig.serviceId,
      templateId: emailConfig.templateId,
      confirmationTemplateId: emailConfig.confirmationTemplateId,
      publicKey: emailConfig.publicKey ? '***CONFIGURADA***' : 'NO CONFIGURADA'
    });

    try {
      // Preparar los datos para el email de la empresa
      const currentDate = new Date();
      const companyEmailData = {
        service: formData.service,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'No especificada',
        location: formData.location,
        message: formData.message,
        urgency: formData.urgency,
        date: currentDate.toLocaleDateString('es-MX'),
        time: currentDate.toLocaleTimeString('es-MX'),
        to_email: 'techzar.mx@gmail.com'
      };

      // Preparar los datos para el email de confirmación al cliente
      const clientEmailData = {
        to_name: formData.name,
        to_email: formData.email,
        service: formData.service,
        company_name: 'Techzar',
        company_email: 'techzar.mx@gmail.com',
        company_phone: '+52 (123) 456-7890',
        date: currentDate.toLocaleDateString('es-MX'),
        time: currentDate.toLocaleTimeString('es-MX')
      };

      console.log('📧 Datos del email a la empresa:', companyEmailData);
      console.log('📧 Datos del email de confirmación:', clientEmailData);

      // Enviar email a la empresa
      console.log('🚀 Enviando email a la empresa...');
      const companyResponse = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        companyEmailData,
        emailConfig.publicKey
      );
      console.log('✅ Email a empresa enviado exitosamente:', companyResponse);

      // Enviar email de confirmación al cliente usando la misma plantilla pero con diferentes datos
      console.log('🚀 Enviando email de confirmación al cliente...');
      const clientConfirmationData = {
        to_name: formData.name,
        to_email: formData.email,
        service: formData.service,
        name: formData.name,
        email: 'techzar.mx@gmail.com', // Email de respuesta
        phone: '+52 33 3948 6994', // Teléfono de contacto
        company: 'Techzar',
        location: 'Guadalajara, Jalisco',
        message: `Hola ${formData.name}, gracias por contactarnos para el servicio de ${formData.service}. Hemos recibido tu solicitud y nos pondremos en contacto contigo dentro de las próximas 24 horas.`,
        urgency: 'Confirmación de solicitud',
        date: currentDate.toLocaleDateString('es-MX'),
        time: currentDate.toLocaleTimeString('es-MX')
      };

      const clientResponse = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId, // Usar la misma plantilla
        clientConfirmationData,
        emailConfig.publicKey
      );

      console.log('✅ Email de confirmación al cliente enviado exitosamente:', clientResponse);
      console.log(`📬 Email de confirmación enviado a: ${formData.email}`);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('❌ Error detallado al enviar emails:', {
        error: error,
        message: error.message,
        status: error.status,
        text: error.text
      });
      setSubmitError(`Error al enviar la solicitud: ${error.text || error.message || 'Error desconocido'}. Por favor, intenta nuevamente.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    try {
      navigate('/', { replace: true });
    } catch (error) {
      // Fallback si hay algún problema con el router
      window.location.href = '/';
    }
  };





  return (
    <div className="request-form-page">
      <div className="form-container">
        <motion.div
          className="form-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button className="back-button" onClick={goBack}>
            <FaArrowLeft />
            Volver
          </button>
          <h1>Solicitar Servicio</h1>
          <p>Completa el formulario y nos pondremos en contacto contigo</p>
        </motion.div>

        <motion.form 
          className="request-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {isSubmitted ? (
            /* Mensaje de confirmación */
            <div className="success-message" style={{ textAlign: 'center', padding: '2rem' }}>
              <div className="success-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                ✅
              </div>
              <h2 style={{ color: '#28a745', marginBottom: '1rem' }}>¡Solicitud Enviada Exitosamente!</h2>
              <p style={{ marginBottom: '0.5rem' }}>
                Gracias por contactarnos. Hemos recibido tu solicitud para <strong>{formData.service}</strong>.
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                Te hemos enviado un email de confirmación a <strong>{formData.email}</strong> con todos los detalles.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Nos pondremos en contacto contigo dentro de las próximas 24 horas.
              </p>
              
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={() => navigate('/')}
                style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
              >
                <FaHome style={{ marginRight: '0.5rem' }} /> 
                Volver al inicio
              </button>
            </div>
          ) : (
            <>
              {/* Selección de servicio */}
              <div className="form-group">
            <label htmlFor="service">
              <FaComments />
              Servicio Solicitado *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecciona un servicio</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Información personal */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <FaUser />
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope />
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone />
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+52 33 1234 5678"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">
                <FaUser />
                Empresa (Opcional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>

          {/* Ubicación */}
          <div className="form-group">
            <label htmlFor="location">
              <FaMapMarkerAlt />
              Ubicación *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Ciudad, Estado"
              required
            />
          </div>

          {/* Urgencia */}
          <div className="form-group">
            <label htmlFor="urgency">
              Urgencia del Proyecto
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
            >
              <option value="low">Baja - sin tiempo estimado</option>
              <option value="normal">Normal - 4-7 semanas</option>
              <option value="high">Alta - 2-4 semanas</option>
              <option value="urgent">Urgente - lo antes posible</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="message">
              <FaComments />
              Detalles del Proyecto *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe tu proyecto, requerimientos específicos, presupuesto estimado, etc."
              rows="5"
              required
            />
          </div>

          {/* Botón de envío */}
          <motion.button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Enviando...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Enviar Solicitud
              </>
            )}
          </motion.button>

          {/* Acción secundaria: volver al inicio */}
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}> 
              <FaHome style={{ marginRight: '0.5rem' }} /> Volver al inicio
            </button>
          </div>

          <p className="form-note">
            * Campos obligatorios. Nos pondremos en contacto contigo en las próximas 24 horas.
          </p>

              {/* Mensaje de error */}
              {submitError && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitError}
                </motion.div>
              )}
            </>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default RequestForm;