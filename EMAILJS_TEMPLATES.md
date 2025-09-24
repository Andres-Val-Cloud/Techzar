# Templates de EmailJS para Confirmación de Cliente

## Template 1: Notificación para la empresa (template_lcza6sa)

**Variables disponibles:**
- `{{service}}` - Servicio solicitado
- `{{name}}` - Nombre del cliente
- `{{email}}` - Email del cliente
- `{{phone}}` - Teléfono del cliente
- `{{company}}` - Empresa del cliente
- `{{location}}` - Ubicación
- `{{message}}` - Mensaje del cliente
- `{{urgency}}` - Urgencia del proyecto
- `{{date}}` - Fecha de solicitud
- `{{time}}` - Hora de solicitud

## Template 2: Confirmación para el cliente (NUEVO)

**Nombre del template:** `template_skc8k3l`

**HTML del template:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Confirmación de Solicitud - Techzar</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #8b45ff, #6c5ce7); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">¡Gracias por tu solicitud!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Techzar - Desarrollo Tecnológico</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
                Hola <strong>{{to_name}}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 25px;">
                Hemos recibido exitosamente tu solicitud para el servicio de <strong style="color: #8b45ff;">{{service}}</strong>.
            </p>
            
            <!-- Service Details -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #8b45ff;">
                <h3 style="color: #8b45ff; margin: 0 0 15px 0; font-size: 18px;">Detalles de tu solicitud:</h3>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Servicio:</strong> {{service}}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Fecha:</strong> {{date}}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Hora:</strong> {{time}}</p>
            </div>
            
            <!-- Next Steps -->
            <div style="background: linear-gradient(135deg, #e8f5e8, #f0f8f0); padding: 25px; border-radius: 8px; margin: 25px 0;">
                <h3 style="color: #25d366; margin: 0 0 15px 0; font-size: 18px; display: flex; align-items: center;">
                    <span style="font-size: 20px; margin-right: 10px;">📋</span>
                    ¿Qué sigue ahora?
                </h3>
                <ul style="padding-left: 20px; margin: 0; color: #333;">
                    <li style="margin: 8px 0;">Nuestro equipo revisará tu solicitud detalladamente</li>
                    <li style="margin: 8px 0;">Te contactaremos dentro de las próximas <strong>24 horas</strong></li>
                    <li style="margin: 8px 0;">Programaremos una consulta para discutir tu proyecto</li>
                    <li style="margin: 8px 0;">Te enviaremos una propuesta personalizada</li>
                </ul>
            </div>
            
            <!-- Contact Info -->
            <div style="background: #fff; border: 2px solid #8b45ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h4 style="color: #8b45ff; margin: 0 0 15px 0; font-size: 16px;">📞 Información de Contacto</h4>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:{{company_email}}" style="color: #8b45ff; text-decoration: none;">{{company_email}}</a></p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Teléfono:</strong> {{company_phone}}</p>
            </div>
            
            <!-- Urgent Contact -->
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; font-size: 14px; color: #856404;">
                    <strong>¿Tienes alguna pregunta urgente?</strong> No dudes en contactarnos directamente a {{company_email}}
                </p>
            </div>
            
            <p style="font-size: 16px; color: #555; margin-top: 30px; line-height: 1.6;">
                Gracias por confiar en nosotros para tu proyecto tecnológico. Estamos emocionados de trabajar contigo.
            </p>
            
            <p style="margin-top: 25px; color: #333;">
                Saludos cordiales,<br>
                <strong style="color: #8b45ff; font-size: 16px;">Equipo {{company_name}}</strong>
            </p>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; font-size: 12px; color: #6c757d;">
                Este email fue enviado automáticamente. Por favor no respondas a este mensaje.
            </p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #6c757d;">
                © 2024 Techzar - Desarrollo Tecnológico. Todos los derechos reservados.
            </p>
        </div>
    </div>
</body>
</html>
```

**Variables para el template de confirmación:**
- `{{to_name}}` - Nombre del cliente
- `{{to_email}}` - Email del cliente
- `{{service}}` - Servicio solicitado
- `{{company_name}}` - Nombre de la empresa (Techzar)
- `{{company_email}}` - Email de la empresa
- `{{company_phone}}` - Teléfono de la empresa
- `{{date}}` - Fecha de la solicitud
- `{{time}}` - Hora de la solicitud

## Configuración en EmailJS

1. **Crear el nuevo template:**
   - Ve a tu dashboard de EmailJS
   - Crea un nuevo template
   - Usa el HTML de arriba
   - Guarda el Template ID como `template_confirmation`

2. **Actualizar variables de entorno:**
   ```env
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=template_lcza6sa
   VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=template_skc8k3l
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

3. **Probar ambos emails:**
   - El cliente recibirá un email profesional de confirmación
   - Tu empresa recibirá la notificación con los detalles del cliente

## Beneficios de esta implementación:

✅ **Mejor experiencia del cliente** - Confirmación inmediata
✅ **Profesionalismo** - Email con diseño corporativo
✅ **Información clara** - Pasos siguientes detallados
✅ **Contacto fácil** - Información de contacto visible
✅ **Automatización** - Proceso completamente automático