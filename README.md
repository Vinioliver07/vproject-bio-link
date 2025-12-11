# 🚀 V Project - Bio Link Premium

<div align="center">
  
[![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Cartão de visita digital high-end com design glassmorphism e showcase de projetos reais.**

[Demo ao Vivo](https://vproject-bio-link.vercel.app) • [Portfólio](https://vproject-sable.vercel.app/)

</div>

---

## ✨ Características

- 🎨 **Design Premium** - Glassmorphism com efeitos neon e animações suaves
- 📱 **Totalmente Responsivo** - Mobile-first design
- ⚡ **Performance Otimizada** - Code splitting, lazy loading e bundle otimizado (60KB gzip)
- 🔗 **Links Rápidos** - WhatsApp, Email, GitHub e Portfólio
- 💾 **Download vCard** - Salvar contato direto na agenda
- 🎯 **Showcase de Projetos** - Destaque para cases reais em produção
- 🌐 **SEO Ready** - Meta tags e performance otimizados

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Ícones modernos

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/Vinioliver07/vproject-bio-link.git

# Entre na pasta
cd vproject-bio-link

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O app estará rodando em `http://localhost:3000`

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
vproject-bio-link/
├── components/
│   ├── ActionGrid.tsx          # Grid de ações rápidas
│   ├── FeaturedProject.tsx     # Card de projeto em destaque
│   ├── Footer.tsx              # Rodapé com redes sociais
│   ├── GlassCard.tsx          # Card com efeito glass
│   ├── ProfileHeader.tsx       # Header com foto e info
│   └── SaveContactButton.tsx   # Botão de download vCard
├── public/
│   └── projects/              # Screenshots de projetos
├── App.tsx                    # Componente principal
├── constants.ts              # Configurações e dados
├── types.ts                  # TypeScript types
└── index.css                 # Estilos globais
```

## ⚙️ Configuração

Edite o arquivo `constants.ts` para personalizar:

```typescript
export const CONTACT_INFO = {
  name: 'Seu Nome',
  title: 'Seu Título',
  description: 'Sua descrição...',
  phone: '+55 00 00000-0000',
  email: 'seu@email.com'
};

export const URLS = {
  WHATSAPP: 'https://api.whatsapp.com/send?phone=...',
  EMAIL: 'mailto:seu@email.com',
  // ... outros links
};
```

## 📊 Performance

- **Bundle Size**: 189KB (60KB gzip)
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

## 🎨 Customização

O projeto usa Tailwind CSS com tema customizado. Cores principais:

```javascript
colors: {
  neon: {
    400: '#33C5FF',
    500: '#00AEEF', // Cor principal
    600: '#008AC5',
  }
}
```

## 📝 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**V Project - Soluções Digitais**

- Website: [vproject-sable.vercel.app](https://vproject-sable.vercel.app/)
- GitHub: [@Vinioliver07](https://github.com/Vinioliver07)
- Instagram: [@vinnii_oliver](https://www.instagram.com/vinnii_oliver/)

---

<div align="center">
Desenvolvido com 💙 por V Project
</div>
