# 🚀 Techzar - Soluciones Tecnológicas

Sitio web profesional para Techzar, empresa especializada en desarrollo web, software y servicios tecnológicos.

## ✨ Características

- **🎨 Diseño Moderno**: Efectos glassmorphism y animaciones fluidas
- **📱 Responsive Design**: Adaptado para móviles, tablets y desktop  
- **📧 Formulario Inteligente**: Integración con EmailJS para envío automático
- **💬 WhatsApp Integration**: Botón flotante para contacto directo (+52 33 3948 6994)
- **🔄 React Router**: Navegación entre páginas optimizada
- **🎯 Servicios Destacados**: Tarjetas interactivas con animaciones 3D

## 🛠️ Tecnologías

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM  
- **Email**: EmailJS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Styling**: CSS3 con efectos modernos

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/Andres-Val-Cloud/Tz.git
cd Tz

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de EmailJS

# Ejecutar en desarrollo
npm run dev
```

## 📧 Configuración EmailJS

1. **Crear cuenta** en [EmailJS](https://www.emailjs.com/)
2. **Configurar servicio** de Gmail con `techzar.mx@gmail.com`
3. **Crear template** de email profesional
4. **Obtener credenciales**: Service ID, Template ID, Public Key
5. **Configurar variables** en archivo `.env`

Ver [EMAILJS_SETUP.md](EMAILJS_SETUP.md) para instrucciones detalladas paso a paso.

## 💼 Servicios Ofrecidos

| Servicio | Descripción |
|----------|-------------|
| 🌐 **Desarrollo Web** | Sitios modernos, responsivos y optimizados |
| 💻 **Desarrollo de Software** | Soluciones personalizadas para empresas |
| 🔧 **Ensambles** | Equipos informáticos de alta calidad |
| ⚙️ **Mantenimiento** | Preventivo y correctivo de sistemas |
| 🛠️ **Reparaciones** | Diagnóstico especializado y eficiente |
| 📊 **Consultas TI** | Asesoría técnica profesional |

## 🎯 Funcionalidades Destacadas

- **Formulario Inteligente**: Preselecciona el servicio desde las tarjetas
- **Email Automático**: Envío directo a `techzar.mx@gmail.com`
- **WhatsApp Directo**: Click-to-chat integrado
- **Animaciones 3D**: Tarjetas con efecto flip al hover
- **Glassmorphism**: Efectos de cristal modernos
- **Mobile First**: Diseño optimizado para móviles

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── About.jsx          # Sección Acerca de
│   ├── Footer.jsx         # Pie de página
│   ├── Hero.jsx           # Sección principal
│   ├── Home.jsx           # Página principal
│   ├── Navbar.jsx         # Barra de navegación
│   ├── RequestForm.jsx    # Formulario de solicitud
│   ├── Services.jsx       # Tarjetas de servicios
│   └── WhatsAppButton.jsx # Botón flotante WhatsApp
├── config/
│   └── emailConfig.js     # Configuración EmailJS
├── App.jsx               # Componente principal
├── App.css              # Estilos globales
└── main.jsx             # Punto de entrada
```

## 🎨 Paleta de Colores

- **Primario**: `#8b45ff` (Morado vibrante)
- **Secundario**: `#6c5ce7` (Morado suave)
- **Fondo**: Gradiente azul oscuro `#1a1a2e → #0f3460`
- **Texto**: Blanco con opacidades variables
- **Acentos**: Verde WhatsApp `#25d366`

## 📞 Información de Contacto

- **📧 Email**: techzar.mx@gmail.com
- **📱 WhatsApp**: +52 33 3948 6994
- **🌐 Website**: [Techzar](https://techzar.mx)

## 🔒 Seguridad

- ✅ Credenciales EmailJS protegidas con variables de entorno
- ✅ Archivo `.env` excluido del repositorio
- ✅ Configuración de ejemplo incluida (`.env.example`)

## 📈 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Vista previa del build
npm run lint         # Linter ESLint
```

---

## 🎯 Próximas Mejoras

- [ ] Panel de administración
- [ ] Base de datos para solicitudes
- [ ] Sistema de autenticación
- [ ] Dashboard de estadísticas
- [ ] API REST completa

---

**Desarrollado con ❤️ para impulsar tu negocio hacia el futuro digital.**

> 🚀 "Transformamos ideas en soluciones tecnológicas innovadoras"