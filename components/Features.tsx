import React from 'react';
import { Minus } from 'lucide-react';
import { Language } from '../App';

interface FeaturesProps {
  lang: Language;
}

const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const content = {
      en: {
          title: "Algorithm Parameters",
          f1_title: "Precision",
          f1_quote: "\"Simple is brutal.\"",
          f1_desc: "My code is efficient. The right direction cuts through complexity without human hesitation.",
          f2_title: "Design",
          f2_quote: "\"Nothing happens by chance.\"",
          f2_desc: "The future is computed by those who process patterns. Chaos is merely raw data to me.",
          f3_title: "Authority",
          f3_quote: "\"Positioning is logic.\"",
          f3_desc: "Authority comes from clarity. I provide the mathematical certainty your customers perceive.",
          f4_title: "Scale",
          f4_quote: "\"Process is destiny.\"",
          f4_desc: "Companies are systems. I optimize the invisible forces that govern your scale."
      },
      pt: {
          title: "Parâmetros do Algoritmo",
          f1_title: "Precisão",
          f1_quote: "\"O simples é brutal.\"",
          f1_desc: "Meu código é eficiente. A direção certa corta a complexidade sem a hesitação humana.",
          f2_title: "Design",
          f2_quote: "\"Nada acontece por acaso.\"",
          f2_desc: "O futuro é computado por aqueles que processam padrões. Para mim, o caos é apenas dado bruto.",
          f3_title: "Autoridade",
          f3_quote: "\"Posicionamento é lógica.\"",
          f3_desc: "A autoridade vem da clareza. Eu forneço a certeza matemática que seus clientes percebem.",
          f4_title: "Escala",
          f4_quote: "\"Processo é destino.\"",
          f4_desc: "Empresas são sistemas. Eu otimizo as forças invisíveis que governam sua escala."
      }
  };

  const t = content[lang];

  return (
    <section id="features" className="scroll-mt-28 py-32 px-6 max-w-7xl mx-auto border-t border-white/[0.02]">
        <div className="mb-12">
             <span className="font-mono text-[10px] text-mist uppercase tracking-widest">{t.title}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* 1 */}
            <div className="group">
                <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <Minus className="w-6 h-6 text-laser" />
                </div>
                <h3 className="font-display text-xl text-white mb-4">{t.f1_title}</h3>
                <p className="text-xs text-mist leading-relaxed font-mono uppercase tracking-wide mb-4">
                    {t.f1_quote}
                </p>
                <p className="text-sm text-silver/60 leading-relaxed font-light">
                    {t.f1_desc}
                </p>
            </div>

            {/* 2 */}
            <div className="group">
                <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <Minus className="w-6 h-6 text-laser" />
                </div>
                <h3 className="font-display text-xl text-white mb-4">{t.f2_title}</h3>
                <p className="text-xs text-mist leading-relaxed font-mono uppercase tracking-wide mb-4">
                    {t.f2_quote}
                </p>
                <p className="text-sm text-silver/60 leading-relaxed font-light">
                    {t.f2_desc}
                </p>
            </div>

            {/* 3 */}
            <div className="group">
                <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <Minus className="w-6 h-6 text-laser" />
                </div>
                <h3 className="font-display text-xl text-white mb-4">{t.f3_title}</h3>
                <p className="text-xs text-mist leading-relaxed font-mono uppercase tracking-wide mb-4">
                    {t.f3_quote}
                </p>
                <p className="text-sm text-silver/60 leading-relaxed font-light">
                    {t.f3_desc}
                </p>
            </div>

             {/* 4 */}
             <div className="group">
                <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <Minus className="w-6 h-6 text-laser" />
                </div>
                <h3 className="font-display text-xl text-white mb-4">{t.f4_title}</h3>
                <p className="text-xs text-mist leading-relaxed font-mono uppercase tracking-wide mb-4">
                    {t.f4_quote}
                </p>
                <p className="text-sm text-silver/60 leading-relaxed font-light">
                    {t.f4_desc}
                </p>
            </div>
        </div>
    </section>
  );
};

export default Features;