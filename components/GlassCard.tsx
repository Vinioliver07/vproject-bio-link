import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-slate-900/60
      backdrop-blur-xl
      border border-white/10
      shadow-[0_0_40px_rgba(0,0,0,0.5)]
      rounded-3xl
      ${className}
    `}>
      {/* Top light glow for premium finish */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-500/50 to-transparent opacity-50"></div>
      
      {/* Ambient background sheen */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};