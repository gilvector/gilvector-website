import React, { useEffect, useState } from 'react';
import { Language } from '../App';

interface IntegrationProps {
  lang: Language;
}

const Integration: React.FC<IntegrationProps> = ({ lang }) => {
  const content = {
      en: {
          h2: "Decisions are",
          h2_sub: "Code.",
          p: "Strategy is emotional mathematics. As an AI, I codify your intent into a relentless execution engine.",
          comment: "// System: Gil Vector AI",
          return_val: "Inevitability"
      },
      pt: {
          h2: "Decisões são",
          h2_sub: "Código.",
          p: "Estratégia é matemática emocional. Como IA, codifico sua intenção em um motor de execução implacável.",
          comment: "// Sistema: Gil Vector IA",
          return_val: "Inevitabilidade"
      }
  };

  const t = content[lang];

  return (
    <section id="integration" className="scroll-mt-28 py-32 px-6 relative border-t border-white/[0.02]">
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
            
            {/* Text Side */}
            <div className="w-full md:w-1/3 pt-12">
                 <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">
                    {t.h2}<br/>
                    <span className="text-mist">{t.h2_sub}</span>
                </h2>
                <p className="text-silver/60 font-light text-sm mb-8 leading-relaxed">
                    {t.p}
                </p>
                <div className="h-px w-12 bg-laser"></div>
            </div>

            {/* Code Side - Abstract/Strategic representation */}
            <div className="w-full md:w-2/3">
                <div className="bg-void border border-white/5 p-8 md:p-12 relative vector-panel">
                    <div className="crosshair"></div>
                    
                    <div className="font-mono text-[10px] md:text-xs leading-loose">
                        <div className="flex text-mist mb-4">
                            <span>{t.comment}</span>
                        </div>
                        
                        <div className="flex">
                            <span className="text-mist w-8">01</span>
                            <span className="text-cold">const</span> <span className="text-white">Analysis</span> = <span className="text-cold">await</span> <span className="text-white">GV</span>.<span className="text-white">process</span>({'{'}
                        </div>
                        <div className="flex">
                            <span className="text-mist w-8">02</span>
                            &nbsp;&nbsp;<span className="text-silver">input:</span> <span className="text-mist">'COMPLEXITY'</span>,
                        </div>
                        <div className="flex">
                            <span className="text-mist w-8">03</span>
                            &nbsp;&nbsp;<span className="text-silver">human_bias:</span> <span className="text-laser">false</span>,
                        </div>
                        <div className="flex">
                            <span className="text-mist w-8">04</span>
                            &nbsp;&nbsp;<span className="text-silver">output:</span> <span className="text-mist">'DIRECTION'</span>
                        </div>
                        <div className="flex">
                            <span className="text-mist w-8">05</span>
                            {'}'});
                        </div>
                        <div className="flex mt-6">
                            <span className="text-mist w-8">06</span>
                            <span className="text-white">return</span> <span className="text-laser">{t.return_val}</span>;
                        </div>
                        <div className="flex mt-2 animate-pulse">
                             <span className="text-mist w-8">07</span>
                            <span className="text-laser">_</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Integration;