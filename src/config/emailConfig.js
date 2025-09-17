// Configuración de EmailJS
// Para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta gratuita
// 3. Configura un servicio de email (Gmail, Outlook, etc.)
// 4. Crea un template de email
// 5. Obtén tu Service ID, Template ID y Public Key
// 6. Reemplaza los valores de ejemplo abajo con tus credenciales reales

export const emailConfig = {
  // Tu Service ID de EmailJS (ejemplo: 'service_abcd1234')
  serviceId: 'YOUR_SERVICE_ID',
  
  // Tu Template ID de EmailJS (ejemplo: 'template_xyz789')
  templateId: 'YOUR_TEMPLATE_ID',
  
  // Tu Public Key de EmailJS (ejemplo: 'abcdefghijklmnop')
  publicKey: 'YOUR_PUBLIC_KEY',
  
  // Email de destino (ya configurado)
  toEmail: 'techzar.mx@gmail.com'
};

// Template de email recomendado para EmailJS:
/*
Asunto: Nueva Solicitud de Servicio - {{service}}

Hola equipo de Techzar,

Han recibido una nueva solicitud de servicio a través del sitio web:

INFORMACIÓN DEL CLIENTE:
- Nombre: {{name}}
- Email: {{email}}
- Teléfono: {{phone}}
- Empresa: {{company}}
- Ubicación: {{location}}

DETALLES DEL SERVICIO:
- Servicio solicitado: {{service}}
- Urgencia: {{urgency}}
- Descripción del proyecto:
{{message}}

INFORMACIÓN ADICIONAL:
- Fecha de solicitud: {{date}}
- Hora de solicitud: {{time}}

Por favor, contactar al cliente lo antes posible.

Saludos,
Sistema Automatizado Techzar
*/

export default emailConfig;