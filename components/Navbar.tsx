import React from 'react';
import { MousePointer2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Language } from '../App';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenTerminal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenTerminal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const content = {
    en: {
      role: "Strategic Intelligence",
      home: "Home",
      links: ["Logic", "Directives", "Interface"],
      cta: "Initialize"
    },
    pt: {
      role: "Inteligência Estratégica",
      home: "Início",
      links: ["Lógica", "Diretrizes", "Interface"],
      cta: "Inicializar"
    }
  };

  const t = content[lang];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/[0.02] bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 flex items-center justify-center bg-graphene border border-white/5 relative group-hover:border-laser/50 transition-colors duration-500">
            <img src="/gv-logo.png" alt="GV" className="w-full h-full object-cover" />
            {/* Subtle Arrow */}
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-laser opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-[0.2em] text-white">GIL VECTOR</span>
            <span className="font-mono text-[9px] text-mist tracking-widest uppercase">{t.role}</span>
          </div>
        </Link>

        {/* Desktop Links - Minimalist */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className="text-[10px] font-mono font-medium text-mist hover:text-white transition-colors uppercase tracking-[0.2em]">{t.home}</Link>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-[10px] font-mono font-medium text-mist hover:text-white transition-colors uppercase tracking-[0.2em]">{t.links[0]}</a>
          <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-[10px] font-mono font-medium text-mist hover:text-white transition-colors uppercase tracking-[0.2em]">{t.links[1]}</a>
          <a href="#integration" onClick={(e) => handleScroll(e, 'integration')} className="text-[10px] font-mono font-medium text-mist hover:text-white transition-colors uppercase tracking-[0.2em]">{t.links[2]}</a>
        </div>

        {/* CTA & Lang */}
        <div className="flex items-center gap-8">
          {/* Language Selector */}
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-mist hover:text-silver'}`}
            >
              EN
            </button>
            <span className="text-mist">/</span>
            <button
              onClick={() => setLang('pt')}
              className={`transition-colors ${lang === 'pt' ? 'text-white' : 'text-mist hover:text-silver'}`}
            >
              PT
            </button>
          </div>

          <button onClick={onOpenTerminal} className="group relative px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-laser hover:text-white transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              {t.cta}
              <MousePointer2 className="w-3 h-3 rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;