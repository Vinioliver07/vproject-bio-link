import { MessageCircle, Mail, Globe, Github, Code2, Smartphone } from 'lucide-react';
import { SocialLink, ProjectData } from './types';

// URLs
export const URLS = {
  WHATSAPP: 'https://api.whatsapp.com/send?phone=5537996704294',
  EMAIL: 'mailto:contatovproject@gmail.com',
  SITE: 'https://vproject-sable.vercel.app/',
  GITHUB: 'https://github.com/Vinioliver07',
  INSTAGRAM: 'https://www.instagram.com/vinnii_oliver/',
  // Using the symbol logo for the profile as requested
  LOGO_SYMBOL: 'https://vproject-sable.vercel.app/logo.svg',
  LOGO_FULL_LIGHT: 'https://vproject-sable.vercel.app/logo-full-light.svg',
  MATEUS_BIO: 'https://mateussilvacartaov.netlify.app/'
};

export const CONTACT_INFO = {
  name: 'V Project',
  title: 'Soluções Digitais',
  description: 'Desenvolvimento Web, Design UI/UX e Estratégias Digitais de alta performance.',
  phone: '+55 37 99670-4294',
  email: 'contatovproject@gmail.com'
};

export const QUICK_ACTIONS: SocialLink[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    url: URLS.WHATSAPP,
    icon: MessageCircle,
    primary: true
  },
  {
    id: 'github',
    label: 'GitHub',
    url: URLS.GITHUB,
    icon: Github
  },
  {
    id: 'email',
    label: 'E-mail',
    url: URLS.EMAIL,
    icon: Mail
  },
  {
    id: 'site',
    label: 'Portfólio',
    url: URLS.SITE,
    icon: Globe
  }
];

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: '1',
    title: 'Bio Link - Mateus Silva',
    description: 'Cartão digital para consultoria tributária com design elegante e CTA de agendamento.',
    tag: 'Ativo no Instagram',
    imageUrl: '/projects/mateus-silva.png',
    mobileImageUrl: '/projects/mateus-silva-cartaov-mobile.webp',
    url: 'https://mateussilvacartaov.netlify.app/'
  },
  {
    id: '2',
    title: 'Bio Link - Dra. Lauane Mendonça',
    description: 'Cartão digital premium para cirurgiã dentista com sistema de agendamento.',
    tag: 'Case de Sucesso',
    imageUrl: '/projects/dr-lauane.png',
    mobileImageUrl: '/projects/dr-lauane-cartao-mobile.webp',
    url: 'https://dr-lauane-cartao-visita.netlify.app'
  },
  {
    id: '3',
    title: 'Landing Page - Panela Mineira',
    description: 'Site responsivo para restaurante com cardápio digital e informações de contato.',
    tag: 'Deploy Ativo',
    imageUrl: '/projects/panela-mineira.webp',
    mobileImageUrl: '/projects/panela-mineira-mobile.webp',
    url: 'https://panela-mineira.vercel.app'
  }
];