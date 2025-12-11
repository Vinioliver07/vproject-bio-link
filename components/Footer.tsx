import React from 'react';
import { URLS } from '../constants';
import { Instagram, Github, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8 text-center border-t border-white/5 bg-slate-900/50 backdrop-blur-md w-full">
      <div className="flex justify-center gap-6 mb-4">
        <a href={URLS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-neon-500 transition-colors transform hover:scale-110">
            <Instagram size={20} />
        </a>
        <a href={URLS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
            <Github size={20} />
        </a>
        <a href={URLS.SITE} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-neon-500 transition-colors transform hover:scale-110">
            <Globe size={20} />
        </a>
      </div>
      <div className="flex flex-col items-center gap-1">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold">
            V Project © {new Date().getFullYear()}
          </p>
          <p className="text-[9px] text-slate-700">
            Soluções Digitais High-End
          </p>
      </div>
    </footer>
  );
};