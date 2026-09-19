# Redes Popochos

Landing page moderna y responsive para centralizar las redes sociales, canales de contacto y acceso a la tienda de **Popochos**, una tienda de coleccionables.

El proyecto está construido con React + TypeScript + Vite y utiliza una interfaz visual inspirada en el diseño común de los nuevos perfiles de enlaces, adaptada a la identidad de Redes Popochos.

## ✨ Características

- 🎨 Diseño moderno y responsive
- 🟠 Identidad visual basada en el color de la marca
- 🖼️ Logo y favicon personalizados
- 📱 Accesos directos a redes sociales
- 🛍️ Sección independiente para acceder a la tienda
- 💬 Contacto directo por WhatsApp
- ✉️ Contacto por correo electrónico
- 📍 Acceso directo a la ubicación mediante Waze
- ✨ Efectos de iluminación, halos y animaciones sutiles
- ♿ Etiquetas accesibles para enlaces e imágenes
- 📱 Adaptación específica para dispositivos móviles

## 🔗 Redes y enlaces

La página actualmente integra:

- Facebook
- Instagram
- X
- TikTok
- YouTube
- Waze
- Tienda oficial
- WhatsApp
- Correo electrónico

Los enlaces y la información del perfil están centralizados en:

`src/data/profile.ts`

Esto permite actualizar URLs, textos, datos de contacto y la información de la tienda sin modificar la estructura de los componentes.

## 🛍️ Tienda

La sección **Compras** dirige a la tienda oficial de Popochos:

**https://popochos.co**

La tienda se presenta como una tarjeta independiente de las redes sociales para mantener una jerarquía visual clara entre los canales sociales y el acceso comercial.

## 🧩 Arquitectura

El proyecto está organizado mediante componentes reutilizables:

- `ProfileHeader` — Logo, nombre, descripción y tagline.
- `SocialLinks` — Contenedor de las redes sociales.
- `SocialLink` — Componente individual para cada red.
- `Shopping` — Acceso destacado a la tienda.
- `Footer` — Información de copyright y autoría.
- `App` — Composición general de la página.

La información específica de Popochos está separada de la interfaz mediante `src/data/profile.ts`.

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Interfaz y componentes |
| TypeScript | Tipado estático |
| Vite 8 | Desarrollo y build |
| React Icons | Iconos de redes sociales |
| Lucide React | Iconos de interfaz |
| CSS | Diseño, responsive y animaciones |
| ESLint | Calidad y revisión del código |
| GitHub Pages | Despliegue |

## 📁 Estructura principal

```text
redespopochos/
├── .github/
│   └── workflows/
│       └── pages.yml
├── public/
│   └── assets/
│       ├── favicon.svg
│       └── logo-popochos.png
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── Shopping.tsx
│   │   ├── SocialLink.tsx
│   │   └── SocialLinks.tsx
│   ├── data/
│   │   └── profile.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/GomezDJasson/redespopochos.git
cd redespopochos
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📦 Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo de Vite.

### Build

```bash
npm run build
```

Ejecuta la comprobación de TypeScript y genera la versión optimizada para producción.

### Lint

```bash
npm run lint
```

Ejecuta ESLint sobre el proyecto.

### Preview

```bash
npm run preview
```

Sirve localmente la versión generada por el build.

## 🌐 Despliegue

El proyecto utiliza **GitHub Pages** mediante GitHub Actions.

El workflow:

`.github/workflows/pages.yml`

se ejecuta automáticamente cuando se realiza un push a `main` y también puede ejecutarse manualmente desde GitHub Actions.

El proyecto utiliza la siguiente configuración de Vite:

```ts
base: '/redespopochos/'
```

La página está preparada para publicarse en:

**https://gomezdjasson.github.io/redespopochos/**

## 🎯 Objetivo

Crear una página de enlaces sencilla, rápida y visualmente atractiva que permita a los clientes de Popochos encontrar en un solo lugar sus redes sociales, información de contacto, ubicación y tienda oficial.

## 👨‍💻 Autor

**Gomez D. Jasson**

- GitHub: https://github.com/GomezDJasson
- Portafolio: https://portafolio-jasson.vercel.app/

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.

---

© 2026 Popochos. Todos los derechos reservados.
