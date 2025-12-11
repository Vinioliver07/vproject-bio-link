import React from 'react';
import { GlassCard } from './components/GlassCard';
import { ProfileHeader } from './components/ProfileHeader';
import { ActionGrid } from './components/ActionGrid';
import { SaveContactButton } from './components/SaveContactButton';
import { FeaturedProject } from './components/FeaturedProject';
import { Footer } from './components/Footer';

const App: React.FC = () => {

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden flex flex-col items-center bg-slate-950">
      
      {/* 1. Fixed Background - Abstract/Tech */}
      <div className="fixed inset-0 z-0">
        {/* Dark abstract tech background */}
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Tech Background"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-950"></div>
        
        {/* Decorative Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. Main Content Container */}
      <main className="relative z-10 w-full max-w-md mx-auto min-h-screen flex flex-col animate-fade-in-up">
        
        {/* Top Spacer */}
        <div className="h-6 md:h-12"></div>

        {/* The Glass Card Wrapper */}
        <div className="px-4 pb-8 flex-grow">
          <GlassCard className="animate-fade-in-up ring-1 ring-white/5">
            <ProfileHeader />
            <ActionGrid />
            <SaveContactButton />
            <FeaturedProject />
          </GlassCard>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;