# 📧 Configuración de EmailJS para Techzar

Este proyecto utiliza EmailJS para enviar confirmaciones de solicitudes al correo `techzar.mx@gmail.com`.

## 🚀 Configuración Rápida

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Confirma tu email

### 2. Configurar el Servicio de Email
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail recomendado)
4. Sigue las instrucciones para conectar tu cuenta de Gmail
5. Copia el **Service ID** (ejemplo: `service_abcd1234`)

### 3. Crear Template de Email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa este template:

```
Subject: Nueva Solicitud de Servicio - {{service}}

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
```

4. Configura el **To Email** como: `{{to_email}}`
5. Guarda y copia el **Template ID** (ejemplo: `template_xyz789`)

### 4. Obtener Public Key
1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key** (ejemplo: `abcdefghijklmnop`)

### 5. Actualizar Configuración en el Código
Edita el archivo `src/components/RequestForm.jsx`:

```javascript
const emailConfig = {
  serviceId: 'TU_SERVICE_ID_AQUI',     // Reemplazar
  templateId: 'TU_TEMPLATE_ID_AQUI',   // Reemplazar  
  publicKey: 'TU_PUBLIC_KEY_AQUI'      // Reemplazar
};
```

## 🔧 Variables del Template

El formulario envía estas variables al template:

- `{{service}}` - Servicio solicitado
- `{{name}}` - Nombre del cliente
- `{{email}}` - Email del cliente
- `{{phone}}` - Teléfono del cliente
- `{{company}}` - Empresa (opcional)
- `{{location}}` - Ubicación
- `{{message}}` - Descripción del proyecto
- `{{urgency}}` - Nivel de urgencia
- `{{date}}` - Fecha de solicitud
- `{{time}}` - Hora de solicitud
- `{{to_email}}` - Email de destino (techzar.mx@gmail.com)

## 📱 Pruebas

1. Llena el formulario en el sitio web
2. Envía una solicitud de prueba
3. Revisa que el email llegue a `techzar.mx@gmail.com`
4. Verifica que todos los datos se muestren correctamente

## 🆓 Límites del Plan Gratuito

EmailJS plan gratuito incluye:
- 200 emails por mes
- Perfecto para sitios web pequeños a medianos

## 🛠️ Troubleshooting

### Error: "Service ID not found"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo

### Error: "Template ID not found"  
- Verifica que el Template ID sea correcto
- Asegúrate de que el template esté publicado

### Error: "Invalid public key"
- Verifica que el Public Key sea correcto
- Revisa que no tenga espacios extra

### Los emails no llegan
- Revisa la carpeta de spam
- Verifica que el email de destino esté correcto en el template
- Revisa los logs en el dashboard de EmailJS

## 📞 Soporte

Si tienes problemas con la configuración:
1. Revisa la documentación de EmailJS: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Verifica la consola del navegador para errores
3. Prueba con datos de ejemplo primero