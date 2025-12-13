import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Hero from './components/Hero';
import InteractiveTerminal from './components/InteractiveTerminal';
import About from './components/About';
import Features from './components/Features';
import Integration from './components/Integration';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';

export type Language = 'en' | 'pt';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Automatic detection
    const userLang = navigator.language || navigator.languages[0];
    if (userLang && (userLang.includes('pt') || userLang.includes('PT'))) {
      setLang('pt');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const openTerminal = () => setIsTerminalOpen(true);
  const closeTerminal = () => setIsTerminalOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden text-silver bg-black relative selection:bg-laser selection:text-white">

      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {/* Subtle Vector Grid - 2% Opacity */}
        <div className="absolute inset-0 vector-grid opacity-[0.02]"></div>

        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-void-gradient opacity-80"></div>

        {/* Left Side Light Source (Minimal) */}
        <div className="absolute top-0 left-0 w-[500px] h-full bg-gradient-to-r from-white/[0.03] to-transparent"></div>
      </div>

      <Navbar lang={lang} setLang={setLang} onOpenTerminal={openTerminal} />

      <main className="z-10 relative">
        <Hero lang={lang} onOpenTerminal={openTerminal} />
        <About lang={lang} />
        <Features lang={lang} />
        <Integration lang={lang} />
        <BentoGrid lang={lang} onOpenTerminal={openTerminal} />
        <Footer lang={lang} onOpenTerminal={openTerminal} />
      </main>

      {/* Terminal Modal */}
      <InteractiveTerminal lang={lang} isOpen={isTerminalOpen} onClose={closeTerminal} />

    </div>
  );
};

export default App;