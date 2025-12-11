import React from 'react';
import { QUICK_ACTIONS } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export const ActionGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 px-6 mb-6">
      {QUICK_ACTIONS.map((action) => (
        <a
          key={action.id}
          href={action.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative flex flex-col items-center justify-center p-5
            rounded-2xl border 
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-500/10
            active:scale-95
            ${action.primary 
                ? 'bg-neon-500/10 border-neon-500/50 hover:bg-neon-500/20' 
                : 'bg-slate-800/40 border-white/5 hover:border-white/20 hover:bg-slate-800/60'
            }
          `}
        >
          <div className={`
            mb-3 p-2.5 rounded-xl transition-colors duration-300
            ${action.id === 'whatsapp' 
                ? 'text-green-400 bg-green-500/10 group-hover:bg-green-500/20' 
                : 'text-neon-400 bg-neon-500/10 group-hover:bg-neon-500/20'
            }
          `}>
            <action.icon size={26} strokeWidth={1.5} />
          </div>
          <span className="text-xs font-semibold text-slate-200 tracking-wide group-hover:text-white transition-colors">
            {action.label}
          </span>
          
          <ArrowUpRight size={14} className="absolute top-3 right-3 text-white/10 group-hover:text-neon-500 transition-colors" />
        </a>
      ))}
    </div>
  );
};