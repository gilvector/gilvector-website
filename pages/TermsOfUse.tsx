import React, { useEffect } from 'react';
import { Language } from '../App';

interface TermsOfUseProps {
    lang: Language;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ lang }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            title: "OPERATIONAL TERMS",
            subtitle: "Service Usage Agreement & User Obligations",
            lastUpdated: "Last Updated: January 14, 2026",
            sections: [
                {
                    heading: "1. ACCEPTANCE OF DIRECTIVES",
                    text: "By accessing or using the Gil Vector website and services, you submit to these Terms of Use and comply with all applicable laws. If you do not agree with any part of these terms, you are prohibited from accessing this system."
                },
                {
                    heading: "2. INTELLECTUAL PROPERTY",
                    text: "The algorithms, visual interfaces, vectors, and strategic content available on this site are the exclusive property of Gil Vector. Unauthorized extraction, reverse engineering, or replication of our 'Intellectual Assets' is strictly prohibited and will be met with immediate termination of access and potential legal action."
                },
                {
                    heading: "3. USER OBLIGATIONS",
                    text: "You agree to:\n- Use the system only for lawful purposes.\n- Not compromise the integrity of our security perimeter.\n- Not use automated systems (bots, spiders) to harvest data without authorization.\n- Maintain the confidentiality of any access credentials provided."
                },
                {
                    heading: "4. LIMITATION OF LIABILITY",
                    text: "Gil Vector provides strategic intelligence, not guarantees. In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
                },
                {
                    heading: "5. DISCLAIMER OF WARRANTIES",
                    text: "Your use of the Service is at your sole risk. The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance."
                },
                {
                    heading: "6. GOVERNING LAW",
                    text: "These Terms shall be governed and construed in accordance with the laws of Brazil and International Commerce Treaties, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
                },
                {
                    heading: "7. TERMINATION",
                    text: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
                }
            ]
        },
        pt: {
            title: "TERMOS OPERACIONAIS",
            subtitle: "Acordo de Uso de Serviço & Obrigações do Usuário",
            lastUpdated: "Atualizado em: 14 de Janeiro de 2026",
            sections: [
                {
                    heading: "1. ACEITAÇÃO DAS DIRETRIZES",
                    text: "Ao acessar ou usar o site e serviços Gil Vector, você se submete a estes Termos de Uso e concorda em cumprir todas as leis aplicáveis. Se você não concordar com qualquer parte destes termos, você está proibido de acessar este sistema."
                },
                {
                    heading: "2. PROPRIEDADE INTELECTUAL",
                    text: "Os algoritmos, interfaces visuais, vetores e conteúdo estratégico disponíveis neste site são propriedade exclusiva da Gil Vector. A extração não autorizada, engenharia reversa ou replicação de nossos 'Ativos Intelectuais' é estritamente proibida e resultará na rescisão imediata do acesso e possíveis ações legais."
                },
                {
                    heading: "3. OBRIGAÇÕES DO USUÁRIO",
                    text: "Você concorda em:\n- Usar o sistema apenas para fins lícitos.\n- Não comprometer a integridade do nosso perímetro de segurança.\n- Não usar sistemas automatizados (bots, spiders) para colher dados sem autorização.\n- Manter a confidencialidade de quaisquer credenciais de acesso fornecidas."
                },
                {
                    heading: "4. LIMITAÇÃO DE RESPONSABILIDADE",
                    text: "A Gil Vector fornece inteligência estratégica, não garantias. Em nenhum caso seremos responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do seu acesso ou uso ou incapacidade de acessar ou usar o Serviço."
                },
                {
                    heading: "5. ISENÇÃO DE GARANTIAS",
                    text: "O uso do Serviço é por sua conta e risco. O Serviço é fornecido 'COMO ESTÁ' e 'CONFORME DISPONÍVEL'. O Serviço é fornecido sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não limitadas a, garantias implícitas de comercialização, adequação a um propósito específico, não violação ou curso de desempenho."
                },
                {
                    heading: "6. LEI APLICÁVEL",
                    text: "Estes Termos serão regidos e interpretados de acordo com as leis do Brasil e Tratados de Comércio Internacional, sem levar em conta seus conflitos de disposições legais. Nossa falha em fazer valer qualquer direito ou disposição destes Termos não será considerada uma renúncia a esses direitos."
                },
                {
                    heading: "7. RESCISÃO",
                    text: "Podemos encerrar ou suspender o acesso ao nosso Serviço imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, inclusive, sem limitação, se você violar os Termos."
                }
            ]
        }
    };

    const t = content[lang];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen relative z-10 w-full max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-laser animate-pulse"></span>
                    <span className="font-mono text-xs text-laser uppercase tracking-widest">System_Doc_02</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight uppercase">
                    {t.title}
                </h1>
                <p className="text-silver/60 font-mono text-sm uppercase tracking-widest border-l-2 border-laser pl-4">
                    {t.subtitle}
                </p>
                <p className="mt-4 text-mist text-xs font-mono uppercase">
                    {t.lastUpdated}
                </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
                {t.sections.map((section, index) => (
                    <div key={index} className="group">
                        <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-laser/50 text-sm font-mono group-hover:text-laser transition-colors pointer-events-none">
                                {`//`}
                            </span>
                            {section.heading}
                        </h2>
                        <div className="text-silver/80 font-mono text-sm leading-relaxed whitespace-pre-line pl-0 md:pl-8 border-l border-white/5 group-hover:border-white/10 transition-colors py-2">
                            {section.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Signature */}
            <div className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-mist">
                <span>Gil Vector Intelligence Systems</span>
                <span>End of Protocol</span>
            </div>
        </div>
    );
};

export default TermsOfUse;
