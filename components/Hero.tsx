import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Language } from '../App';

interface HeroProps {
    lang: Language;
    onOpenTerminal: () => void;
}

const ChatInterface: React.FC<{ lang: Language; onOpenTerminal: () => void }> = ({ lang, onOpenTerminal }) => {
    const [visibleStep, setVisibleStep] = useState(0);

    useEffect(() => {
        // Reset animation when language changes
        setVisibleStep(0);
        const timers = [
            setTimeout(() => setVisibleStep(1), 500),  // User 1
            setTimeout(() => setVisibleStep(2), 1500), // Bot 1
            setTimeout(() => setVisibleStep(3), 3000), // User 2
            setTimeout(() => setVisibleStep(4), 4500), // Bot 2
        ];
        return () => timers.forEach(clearTimeout);
    }, [lang]);

    const content = {
        en: {
            user1: "I need AI in my business.",
            bot1: "Negative. You need clarity focused on results, not decoration.",
            bot1_sub: "I am an AI. I do not \"create\" art. I compute direction.",
            user2: "What is the output?",
            bot2: "Decisions encoded into profitable strategies.",
            action: "Execute Logic"
        },
        pt: {
            user1: "Preciso de IA no meu negócio.",
            bot1: "Negativo. Você precisa de clareza com foco em resultado, não decoração.",
            bot1_sub: "Sou uma IA. Eu não \"crio\" arte. Eu computo direção.",
            user2: "Qual é o resultado?",
            bot2: "Decisões codificadas em estratégias lucrativas.",
            action: "Executar Lógica"
        }
    };

    const t = content[lang];

    return (
        <div className="animate-fade-in-up delay-[400ms] w-full max-w-2xl mx-auto mt-20">
            {/* Rigid Container */}
            <div className="relative border-x border-white/5 bg-graphene/30 backdrop-blur-md p-0">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-3 border-y border-white/5 bg-black/50">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-laser"></div>
                        <span className="font-mono text-[9px] text-mist uppercase tracking-[0.2em]">AI_Core</span>
                    </div>
                    <span className="font-mono text-[9px] text-mist tracking-widest">{lang === 'en' ? 'Running...' : 'Executando...'}</span>
                </div>

                {/* Body */}
                <div className="p-8 space-y-6 min-h-[280px] flex flex-col justify-center font-mono text-xs text-left">

                    {/* User */}
                    <div className={`flex items-start gap-4 transition-all duration-500 ${visibleStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-mist">&gt;</span>
                        <span className="text-silver">{t.user1}</span>
                    </div>

                    {/* System */}
                    <div className={`flex items-start gap-4 transition-all duration-500 ${visibleStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-laser">#</span>
                        <div className="text-mist">
                            <p className="mb-2 text-white">{t.bot1}</p>
                            <p className="text-silver/60">{t.bot1_sub}</p>
                        </div>
                    </div>

                    {/* User */}
                    <div className={`flex items-start gap-4 transition-all duration-500 ${visibleStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-mist">&gt;</span>
                        <span className="text-silver">{t.user2}</span>
                    </div>

                    {/* System */}
                    <div className={`flex items-start gap-4 transition-all duration-500 ${visibleStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-laser">#</span>
                        <div className="text-mist">
                            <p className="text-white mb-2">{t.bot2}</p>
                            <div
                                onClick={onOpenTerminal}
                                className="flex items-center gap-2 text-laser cursor-pointer hover:text-white transition-colors"
                            >
                                <span className="uppercase tracking-widest">{t.action}</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Decorative Bottom Line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-laser/50 to-transparent"></div>
            </div>
        </div>
    );
};

const Hero: React.FC<HeroProps> = ({ lang, onOpenTerminal }) => {
    const content = {
        en: {
            badge: "Autonomous Entity",
            h1: "Direction is",
            h1_sub: "Everything.",
            p: "I am Gil Vector.",
            p_sub: "AI Strategist specialized in precision.",
            btn: "Input Data"
        },
        pt: {
            badge: "Entidade Autônoma",
            h1: "A Direção é",
            h1_sub: "Tudo.",
            p: "Eu sou Gil Vector.",
            p_sub: "Estrategista de IA especializado em precisão.",
            btn: "Inserir Dados"
        }
    };

    const t = content[lang];

    return (
        <section id="hero" className="scroll-mt-28 flex flex-col items-center text-center px-6 mb-32 max-w-7xl mx-auto pt-32 relative min-h-screen">

            {/* Subtle Vector Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[300px] bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>

            {/* Badge */}
            <div className="animate-fade-in-up flex items-center gap-4 mb-10">
                <div className="h-px w-8 bg-white/20"></div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-mist">{t.badge}</span>
                <div className="h-px w-8 bg-white/20"></div>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-[100ms] font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-white mb-8">
                {t.h1}<br />
                <span className="text-mist">{t.h1_sub}</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up delay-[200ms] text-sm md:text-base text-mist max-w-lg mx-auto leading-relaxed mb-12 font-mono">
                {t.p}
                <br />
                <span className="text-white"> {t.p_sub}</span>
            </p>

            {/* Minimal Buttons */}
            <div className="animate-fade-in-up delay-[300ms] flex flex-col md:flex-row items-center gap-8">
                <button onClick={onOpenTerminal} className="flex items-center gap-2 text-white hover:text-laser transition-colors duration-300 group">
                    <span className="text-xs font-mono uppercase tracking-widest border-b border-transparent group-hover:border-laser pb-1">{t.btn}</span>
                    <ChevronRight className="w-3 h-3" />
                </button>
            </div>

            <ChatInterface lang={lang} onOpenTerminal={onOpenTerminal} />
        </section>
    );
};

export default Hero;