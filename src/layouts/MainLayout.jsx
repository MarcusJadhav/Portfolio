import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-accent-blue/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full gradient-bg" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      
      <main>
        {children}
      </main>

      {/* Floating UI Blur Elements */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent z-40 pointer-events-none" />
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-40 pointer-events-none" />
    </div>
  );
};

export default MainLayout;
