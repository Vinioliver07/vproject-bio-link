import React from 'react';
import { CONTACT_INFO, URLS } from '../constants';
import { Verified } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10 pb-6 px-4">
      <div className="relative mb-6 group">
        {/* Animated Neon Glow behind profile */}
        <div className="absolute -inset-4 bg-neon-500/30 rounded-full blur-xl animate-pulse-glow"></div>
        
        {/* Profile Image Container */}
        <div className="relative w-32 h-32 rounded-full border border-neon-500/30 bg-slate-900 p-2 overflow-hidden shadow-2xl">
             <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <img 
                    src={URLS.LOGO_SYMBOL} 
                    alt={CONTACT_INFO.name}
                    loading="lazy"
                    className="w-16 h-16 object-contain relative z-10"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
                {/* Inner radial gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-500/20 to-transparent"></div>
             </div>
        </div>
        
        {/* Online Status Dot */}
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">
            {CONTACT_INFO.name}
        </h1>
        <Verified size={18} className="text-neon-500" fill="rgba(0, 174, 239, 0.2)" />
      </div>

      <h2 className="text-sm font-semibold text-neon-400 uppercase tracking-widest mb-4 border border-neon-500/20 px-3 py-1 rounded-full bg-neon-500/5">
        {CONTACT_INFO.title}
      </h2>
      
      <p className="text-slate-300 font-light text-sm max-w-xs leading-relaxed">
        {CONTACT_INFO.description}
      </p>
    </div>
  );
};