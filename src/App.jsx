import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import DSA from './sections/DSA';
import CurrentlyExploring from './sections/CurrentlyExploring';
import Contact from './sections/Contact';
import CommandPalette from './components/CommandPalette';
import CursorGlow from './components/CursorGlow';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle terminal via Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      // Close on Escape
      if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#090d16] dark:text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-500 relative transition-colors duration-300 overflow-x-hidden">
        {/* Ambient Mouse Spotlight Glow */}
        <CursorGlow />

        {/* Top Navbar */}
        <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <DSA />
          <CurrentlyExploring />
          <Contact />
        </main>

        {/* Interactive Developer Command Terminal */}
        <CommandPalette 
          isOpen={isTerminalOpen} 
          onClose={() => setIsTerminalOpen(false)} 
        />

        {/* Bottom Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
