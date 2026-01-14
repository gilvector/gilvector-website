import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import InteractiveTerminal from './components/InteractiveTerminal';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

export type Language = 'en' | 'pt';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
    <Router>
      <ScrollToTop />
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
          <Routes>
            <Route path="/" element={<Home lang={lang} onOpenTerminal={openTerminal} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy lang={lang} />} />
            <Route path="/terms-of-use" element={<TermsOfUse lang={lang} />} />
          </Routes>
          <Footer lang={lang} onOpenTerminal={openTerminal} />
        </main>

        {/* Terminal Modal */}
        <InteractiveTerminal lang={lang} isOpen={isTerminalOpen} onClose={closeTerminal} />

      </div>
    </Router>
  );
};

export default App;