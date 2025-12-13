import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../App';

interface BentoProps {
  lang: Language;
  onOpenTerminal: () => void;
}

const BentoGrid: React.FC<BentoProps> = ({ lang, onOpenTerminal }) => {
  const content = {
      en: {
          title: "Strategic Intelligence",
          subtitle: "Global Operations",
          b1_title: "Silent Execution",
          b1_desc: "We don't announce movement. We arrive. Our systems are designed to operate in the background, creating inevitable outcomes.",
          status: "Status: Active",
          b2_title: "Depth",
          b2_sub: "Beats Speed",
          b2_desc: "Fast decisions break. Deep decisions compound.",
          b3_title: "Design",
          b3_sub: "Is Power",
          b3_desc: "The market follows those who create the map.",
          b4_title: "Strategic Resonance",
          b4_desc: "Brands don't speak. Brands vibrate.",
          btn: "Run Analysis"
      },
      pt: {
          title: "Inteligência Estratégica",
          subtitle: "Operações Globais",
          b1_title: "Execução Silenciosa",
          b1_desc: "Não anunciamos movimento. Nós chegamos. Nossos sistemas são projetados para operar em segundo plano, criando resultados inevitáveis.",
          status: "Status: Ativo",
          b2_title: "Profundidade",
          b2_sub: "Vence a Velocidade",
          b2_desc: "Decisões rápidas quebram. Decisões profundas compõem.",
          b3_title: "Design",
          b3_sub: "É Poder",
          b3_desc: "O mercado segue aqueles que criam o mapa.",
          b4_title: "Ressonância Estratégica",
          b4_desc: "Marcas não falam. Marcas vibram.",
          btn: "Fazer Análise"
      }
  };

  const t = content[lang];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/[0.02]">
        <div className="mb-16 flex items-end justify-between">
            <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                {t.title}
            </h2>
            <span className="text-mist font-mono text-[10px] uppercase tracking-widest">{t.subtitle}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {/* Background for grid gaps */}
            
            {/* Main Block */}
            <div className="md:col-span-2 bg-black p-10 min-h-[300px] flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className="w-5 h-5 text-laser" />
                </div>
                
                <div>
                    <h3 className="text-xl font-display text-white mb-4">{t.b1_title}</h3>
                    <p className="text-mist text-sm font-light max-w-sm leading-relaxed">
                        {t.b1_desc}
                    </p>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                    <div className="h-px w-12 bg-white/20 group-hover:bg-laser transition-colors duration-500"></div>
                    <span className="text-[10px] font-mono text-mist uppercase tracking-widest">{t.status}</span>
                </div>
            </div>

            {/* Side Block Top */}
            <div className="bg-black p-10 flex flex-col justify-center group relative">
                 <h3 className="text-lg font-display text-white mb-2">{t.b2_title}</h3>
                 <p className="text-[10px] text-mist font-mono uppercase tracking-widest mb-4">
                     {t.b2_sub}
                 </p>
                 <p className="text-silver/50 text-xs font-light leading-relaxed">
                     {t.b2_desc}
                 </p>
                 <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-laser group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </div>

            {/* Side Block Bottom */}
            <div className="bg-black p-10 flex flex-col justify-center group md:col-start-3 border-t border-white/5 md:border-t-0">
                 <h3 className="text-lg font-display text-white mb-2">{t.b3_title}</h3>
                 <p className="text-[10px] text-mist font-mono uppercase tracking-widest mb-4">
                     {t.b3_sub}
                 </p>
                 <p className="text-silver/50 text-xs font-light leading-relaxed">
                     {t.b3_desc}
                 </p>
            </div>

            {/* Wide Bottom Block */}
            <div className="md:col-span-2 bg-black p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
                <div>
                    <h3 className="text-lg font-display text-white mb-2">{t.b4_title}</h3>
                    <p className="text-mist text-xs font-mono">{t.b4_desc}</p>
                </div>
                <div className="w-full md:w-auto h-px md:h-auto border-t md:border-t-0 md:border-l border-white/10 md:pl-8 pt-4 md:pt-0">
                    <button 
                        onClick={onOpenTerminal}
                        className="text-xs text-white hover:text-laser transition-colors uppercase tracking-widest flex items-center gap-2"
                    >
                        {t.btn} <ArrowUpRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BentoGrid;