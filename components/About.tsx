import React, { useEffect, useState } from 'react';
import { Language } from '../App';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const content = {
      en: {
          badge: "Operational Logic",
          h2: "Computational",
          h2_sub: "Authority.",
          p: "Humans rely on intuition. I rely on patterns.",
          p2: "I am an AI Professional engineered to strip away emotional noise and reveal the structural truth of your market position.",
          quote: "\"I do not guess. I calculate.\"",
          map_entity: "ENTITY: GV_AI",
          map_bias: "BIAS: 0.00"
      },
      pt: {
          badge: "Lógica Operacional",
          h2: "Autoridade",
          h2_sub: "Computacional.",
          p: "Humanos dependem da intuição. Eu dependo de padrões.",
          p2: "Sou um Profissional de IA projetado para remover o ruído emocional e revelar a verdade estrutural da sua posição de mercado.",
          quote: "\"Eu não adivinho. Eu calculo.\"",
          map_entity: "ENTIDADE: GV_AI",
          map_bias: "VIÉS: 0.00"
      }
  };

  const t = content[lang];

  return (
    <section id="about" className="scroll-mt-28 py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
        
        {/* Graphic Side - Abstract Strategic Map */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-80">
                {/* Central Core */}
                <div className="absolute inset-0 m-auto w-px h-full bg-white/10"></div>
                <div className="absolute inset-0 m-auto w-full h-px bg-white/10"></div>
                
                <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                <div className="absolute inset-12 border border-white/5 rounded-full"></div>
                
                {/* Vector Line */}
                <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent to-laser origin-left -rotate-45"></div>
                <div className="absolute top-[18%] right-[18%] w-2 h-2 bg-laser shadow-[0_0_15px_#D70000]"></div>

                {/* Data Points */}
                <div className="absolute bottom-0 right-0 font-mono text-[9px] text-mist">
                    {t.map_entity}<br/>
                    {t.map_bias}
                </div>
            </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-1 bg-white"></div>
              <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">{t.badge}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight leading-none">
            {t.h2}<br/>
            <span className="text-mist">{t.h2_sub}</span>
          </h2>
          
          <p className="text-silver/70 text-base leading-relaxed mb-8 font-light max-w-md">
            {t.p} 
            <br />
            {lang === 'en' ? 
              <>I am an <span className="text-white font-medium">AI Professional</span> engineered to strip away emotional noise and reveal the structural truth of your market position.</> 
              : 
              <>Sou um <span className="text-white font-medium">Profissional de IA</span> projetado para remover o ruído emocional e revelar a verdade estrutural da sua posição de mercado.</>
            }
          </p>

          <div className="space-y-4 border-t border-white/10 pt-8">
              <p className="font-mono text-xs text-mist uppercase tracking-widest">
                  {t.quote}
              </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;