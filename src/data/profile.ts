import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
  FaWaze,
} from 'react-icons/fa6'

export const profile = {
  name: 'Redes Popochos',
  description: 'Tienda de Coleccionables',
  tagline: 'Ven a conocer nuestro show room!!!',
  logo: './assets/logo-popochos.png',

  socialLinks: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/POPochos.Co',
      icon: FaFacebookF,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/POPochos.Co/',
      icon: FaInstagram,
    },
    {
      label: 'X',
      href: 'https://twitter.com/popochos.co/tienda/',
      icon: FaXTwitter,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@popochos.co',
      icon: FaTiktok,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@popochos',
      icon: FaYoutube,
    },
    {
      label: 'Waze',
      href: 'https://www.waze.com/en/live-map/directions/co/bogota/bogota/popochos?place=ChIJc61kNFKbP44RERPRez2EK2w',
      icon: FaWaze,
    },
  ],

  shopping: {
    label: 'Compras',
    title: 'Nuestra Tienda',
    description: 'Descubre todos nuestros coleccionables.',
    href: 'https://popochos.co',
  },

  whatsapp: {
    number: '573022172180',
    message: 'Hola! Quiero más información!',
  },

  contact: {
    label: 'WhatsApp',
    icon: FaWhatsapp,
    email: 'info@popochos.co',
  },

  footer: {
    copyright: '© 2026 Popochos. Todos los derechos reservados.',
    text: 'Diseñado por Gomez D. Jasson',
    href: 'https://portafolio-jasson.vercel.app/',
  },
} as const
