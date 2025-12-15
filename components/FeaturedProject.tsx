import React, { useState, useEffect } from 'react';
import { FEATURED_PROJECTS } from '../constants';
import { ArrowRight, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentProject = FEATURED_PROJECTS[currentIndex];

  // Auto-play carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  };

  const ProjectWrapper = currentProject.url ? 'a' : 'div';
  const wrapperProps = currentProject.url ? {
    href: currentProject.url,
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <div className="px-6 mb-8">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-slate-300 text-xs font-bold uppercase tracking-wider">Projetos em Destaque</h3>
        <div className="flex items-center gap-1 text-neon-500 text-xs font-medium">
          <Zap size={12} fill="currentColor" />
          <span>V Project Select</span>
        </div>
      </div>
      
      <div className="relative">
        <ProjectWrapper
          {...wrapperProps}
          className="
          group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-800/50
          transition-all duration-300 hover:border-neon-500/50 hover:bg-slate-800/80
          block
        ">
          <div className="aspect-[2/1] w-full overflow-hidden relative">
              <picture>
                {currentProject.mobileImageUrl && (
                  <source 
                    media="(max-width: 768px)" 
                    srcSet={currentProject.mobileImageUrl}
                    type="image/webp"
                  />
                )}
                <img 
                    src={currentProject.imageUrl} 
                    alt={currentProject.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    style={{ imageRendering: 'crisp-edges' }}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
              
              <div className="absolute top-3 left-3 bg-neon-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg shadow-neon-500/20">
                  {currentProject.tag}
              </div>
          </div>

          <div className="p-4 relative -mt-8">
              <div className="flex justify-between items-end mb-1">
                  <div className="w-full">
                      <h4 className="text-white font-bold text-lg leading-tight mb-1">{currentProject.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{currentProject.description}</p>
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

        {/* Controles do Carrossel */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white hover:bg-neon-500/20 hover:border-neon-500/50 transition-all z-10"
          aria-label="Projeto anterior"
        >
          <ChevronLeft size={18} />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white hover:bg-neon-500/20 hover:border-neon-500/50 transition-all z-10"
          aria-label="Próximo projeto"
        >
          <ChevronRight size={18} />
        </button>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4">
          {FEATURED_PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-neon-500' 
                  : 'w-1.5 bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};