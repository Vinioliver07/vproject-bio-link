import React from 'react';
import { FEATURED_PROJECT } from '../constants';
import { ArrowRight, Zap } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const ProjectWrapper = FEATURED_PROJECT.url ? 'a' : 'div';
  const wrapperProps = FEATURED_PROJECT.url ? {
    href: FEATURED_PROJECT.url,
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <div className="px-6 mb-8">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-slate-300 text-xs font-bold uppercase tracking-wider">Destaque</h3>
        <div className="flex items-center gap-1 text-neon-500 text-xs font-medium">
          <Zap size={12} fill="currentColor" />
          <span>V Project Select</span>
        </div>
      </div>
      
      <ProjectWrapper
        {...wrapperProps}
        className="
        group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-800/50
        transition-all duration-300 hover:border-neon-500/50 hover:bg-slate-800/80
        block cursor-pointer
      ">
        <div className="aspect-[2/1] w-full overflow-hidden relative">
            <img 
                src={FEATURED_PROJECT.imageUrl} 
                alt={FEATURED_PROJECT.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
            
            <div className="absolute top-3 left-3 bg-neon-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg shadow-neon-500/20">
                {FEATURED_PROJECT.tag}
            </div>
        </div>

        <div className="p-4 relative -mt-8">
            <div className="flex justify-between items-end mb-1">
                <div className="w-full">
                    <h4 className="text-white font-bold text-lg leading-tight mb-1">{FEATURED_PROJECT.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{FEATURED_PROJECT.description}</p>
                </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                 <span className="text-[10px] text-slate-500 font-mono">CODE • DESIGN • STRATEGY</span>
                 <span className="flex items-center gap-1.5 text-xs font-semibold text-neon-400 group-hover:text-neon-300 transition-colors">
                    Ver Projeto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </div>
      </ProjectWrapper>
    </div>
  );
};