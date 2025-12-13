import React, { useState } from 'react';
import { Language } from '../App';
import InfoModal, { InfoType } from './InfoModal';

interface FooterProps {
  lang: Language;
  onOpenTerminal: () => void;
}

const Footer: React.FC<FooterProps> = ({ lang, onOpenTerminal }) => {
  const [activeModal, setActiveModal] = useState<InfoType>(null);

  const content = {
    en: {
      tagline: "Strategic Intelligence. Silent Execution.",
      direction: "Direction is everything.",
      index: "Index",
      links: {
        pattern: "Pattern",
        structure: "Structure",
        execution: "Execution"
      },
      signal: "Signal",
      policy: "Policy",
      policies: {
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies"
      },
      rights: "© 2025 GIL VECTOR.",
      aphorism: "Simple is Brutal."
    },
    pt: {
      tagline: "Inteligência Estratégica. Execução Silenciosa.",
      direction: "Direção é tudo.",
      index: "Índice",
      links: {
        pattern: "Padrão",
        structure: "Estrutura",
        execution: "Execução"
      },
      signal: "Sinal",
      policy: "Políticas",
      policies: {
        privacy: "Privacidade",
        terms: "Termos",
        cookies: "Cookies"
      },
      rights: "© 2025 GIL VECTOR.",
      aphorism: "O Simples é Brutal."
    }
  };

  const t = content[lang];

  return (
    <>
      <footer id="contact" className="scroll-mt-28 border-t border-white/[0.02] pt-24 pb-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-xs">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-graphene flex items-center justify-center border border-white/10">
                  <img src="/gv-logo.png" alt="GV" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-sm font-light text-silver/60 leading-relaxed mb-6">
                {t.tagline}<br />
                {t.direction}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-mist uppercase tracking-widest">{t.index}</span>

                <button
                  onClick={() => setActiveModal('pattern')}
                  className="text-left text-xs text-silver/60 hover:text-white hover:text-laser transition-colors font-mono"
                >
                  {t.links.pattern}
                </button>

                <button
                  onClick={() => setActiveModal('structure')}
                  className="text-left text-xs text-silver/60 hover:text-white hover:text-laser transition-colors font-mono"
                >
                  {t.links.structure}
                </button>

                <button
                  onClick={() => setActiveModal('execution')}
                  className="text-left text-xs text-silver/60 hover:text-white hover:text-laser transition-colors font-mono"
                >
                  {t.links.execution}
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-mist uppercase tracking-widest">{t.signal}</span>
                <a href="https://x.com/VectorGil" target="_blank" rel="noopener noreferrer" className="text-xs text-silver/60 hover:text-white transition-colors font-mono">X</a>
                <a href="https://www.linkedin.com/in/gilvector/" target="_blank" rel="noopener noreferrer" className="text-xs text-silver/60 hover:text-white transition-colors font-mono">LinkedIn</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono text-mist uppercase tracking-widest">{t.policy}</span>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="text-left text-xs text-silver/60 hover:text-white hover:text-laser transition-colors font-mono"
                >
                  {t.policies.privacy}
                </button>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="text-left text-xs text-silver/60 hover:text-white hover:text-laser transition-colors font-mono"
                >
                  {t.policies.terms}
                </button>
                <button
                  onClick={() => setActiveModal('cookies')}
                  className="text-left text-xs text-silver/60 hover:text-white hover:text-laser transition-colors font-mono"
                >
                  {t.policies.cookies}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8 gap-4">
            <p className="text-[10px] text-mist font-mono uppercase tracking-widest">{t.rights}</p>
            <p className="text-[10px] text-mist font-mono uppercase tracking-widest">{t.aphorism}</p>
          </div>
        </div>
      </footer>

      <InfoModal
        lang={lang}
        type={activeModal}
        onClose={() => setActiveModal(null)}
        onOpenTerminal={onOpenTerminal}
      />
    </>
  );
};

export default Footer;