# 🚀 Guía de Deployment en Vercel

## 📋 Pasos para publicar en Vercel:

### 1. 🌐 Ir a Vercel
- Ve a: [https://vercel.com](https://vercel.com)
- Inicia sesión con tu cuenta de GitHub

### 2. 🆕 Crear nuevo proyecto
- Haz clic en **"New Project"**
- Busca y selecciona: `Andres-Val-Cloud/Techzar`
- Haz clic en **"Import"**

### 3. ⚙️ Configuración del proyecto
**Framework Preset:** Vite
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

### 4. 🔐 Variables de entorno
En **Settings** → **Environment Variables**, agrega:

```
VITE_EMAILJS_SERVICE_ID = service_nqdqk05
VITE_EMAILJS_TEMPLATE_ID = template_lcza6sa
VITE_EMAILJS_PUBLIC_KEY = 1DLKvC0WhOnSzcPLV
```

### 5. 🚀 Deploy
- Haz clic en **"Deploy"**
- Espera a que termine el build (2-3 minutos)

### 6. 🎉 Resultado
Tu sitio estará disponible en:
`https://techzar-xxxx.vercel.app`

## ✨ Funcionalidades activas:
- ✅ Formulario de contacto → techzar.mx@gmail.com
- ✅ WhatsApp button → +52 33 3948 6994
- ✅ Navegación completa
- ✅ Diseño responsivo
- ✅ Animaciones 3D

## 🔄 Auto-deployment:
- Cada push a `main` → Deploy automático
- Preview en branches → URLs temporales
- HTTPS automático → Certificado SSL