import React from 'react';
import { UserPlus, Save } from 'lucide-react';
import { CONTACT_INFO, URLS } from '../constants';

export const SaveContactButton: React.FC = () => {
  
  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${CONTACT_INFO.name}
ORG:${CONTACT_INFO.title}
TEL;TYPE=CELL:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}
EMAIL:${CONTACT_INFO.email}
URL:${URLS.SITE}
NOTE:${CONTACT_INFO.description}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'VProject_Contato.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-6 mb-8">
      <button
        onClick={handleSaveContact}
        className="
          w-full group relative overflow-hidden
          bg-gradient-to-r from-neon-600 to-neon-500
          hover:from-neon-500 hover:to-neon-400
          text-white font-bold
          py-4 rounded-xl
          transition-all duration-300
          shadow-lg shadow-neon-500/25
          hover:shadow-neon-500/40
          hover:-translate-y-0.5
          border border-white/10
        "
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
        
        <div className="flex items-center justify-center gap-3 relative z-10">
          <Save size={20} className="stroke-2" />
          <span className="tracking-widest text-sm uppercase">Salvar Contato</span>
        </div>
      </button>
    </div>
  );
};