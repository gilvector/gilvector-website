import React, { useEffect } from 'react';
import { Language } from '../App';

interface PrivacyPolicyProps {
    lang: Language;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ lang }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            title: "PRIVACY PROTOCOL",
            subtitle: "Data Integrity & Information Security Guidelines",
            lastUpdated: "Last Updated: January 14, 2026",
            sections: [
                {
                    heading: "1. STRATEGIC OVERVIEW",
                    text: "Gil Vector ('we', 'us', or 'our') operates with a strict data-minimalism philosophy. This Privacy Policy describes how we collect, use, and disclose your information when you use our services. By accessing our interface, you consent to the data vectors described herein."
                },
                {
                    heading: "2. DATA CAPTURE VECTORS",
                    text: "We collect only the telemetry required for system optimization:\n- **Technical Data:** IP address, browser fingerprint, and device metrics used for security and localized rendering.\n- **Usage Metrics:** Interaction patterns within the application to improve algorithmic response.\n- **Voluntary Input:** Information you explicitly provide during consultation requests or terminal interactions."
                },
                {
                    heading: "3. INTELLIGENCE USAGE",
                    text: "Your data is used solely for:\n- Providing and maintaining our Service.\n- Detecting and preventing technical issues.\n- Strategic analysis to improve our service offerings.\n\nWe do not traffic your personal data to third-party data brokers. Your digital footprint remains classified."
                },
                {
                    heading: "4. COOKIES & TRACKING",
                    text: "We use essential cookies to maintain session state and preferences. These are functional operational nodes, not advertising surveillance tools. You can instruct your browser to refuse all cookies, but some interface vectors may become unstable."
                },
                {
                    heading: "5. GLOBAL COMPLIANCE (GDPR & LGPD)",
                    text: "We adhere to international data sovereignty standards:\n- **Access:** You have the right to request copies of your personal data.\n- **Rectification:** You have the right to request correction of any information you believe is inaccurate.\n- **Erasure:** You have the right to request that we erase your personal data ('Right to be Forgotten').\n- **Restrict Processing:** You have the right to request that we restrict the processing of your personal data.\n\nTo exercise these rights, contact our Data Protection Officer via the terminal or official channels."
                },
                {
                    heading: "6. SECURITY PROTOCOLS",
                    text: "We employ commercial-grade encryption and security measures. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
                },
                {
                    heading: "7. CHANGES TO THIS PROTOCOL",
                    text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes."
                }
            ]
        },
        pt: {
            title: "PROTOCOLO DE PRIVACIDADE",
            subtitle: "Diretrizes de Integridade de Dados & Segurança da Informação",
            lastUpdated: "Atualizado em: 14 de Janeiro de 2026",
            sections: [
                {
                    heading: "1. VISÃO GERAL ESTRATÉGICA",
                    text: "A Gil Vector ('nós', 'nosso') opera com uma filosofia estrita de minimalismo de dados. Esta Política de Privacidade descreve como coletamos, usamos e divulgamos suas informações quando você usa nossos serviços. Ao acessar nossa interface, você consente com os vetores de dados descritos aqui."
                },
                {
                    heading: "2. VETORES DE CAPTURA DE DADOS",
                    text: "Coletamos apenas a telemetria necessária para otimização do sistema:\n- **Dados Técnicos:** Endereço IP, fingerprint do navegador e métricas do dispositivo usados para segurança e renderização localizada.\n- **Métricas de Uso:** Padrões de interação dentro da aplicação para melhorar a resposta algorítmica.\n- **Input Voluntário:** Informações que você fornece explicitamente durante solicitações de consulta ou interações no terminal."
                },
                {
                    heading: "3. USO DE INTELIGÊNCIA",
                    text: "Seus dados são usados exclusivamente para:\n- Fornecer e manter nosso Serviço.\n- Detectar e prevenir problemas técnicos.\n- Análise estratégica para melhorar nossas ofertas de serviço.\n\nNão traficamos seus dados pessoais para corretores de dados terceirizados. Sua pegada digital permanece classificada."
                },
                {
                    heading: "4. COOKIES & RASTREAMENTO",
                    text: "Utilizamos cookies essenciais para manter o estado da sessão e preferências. Estes são nós operacionais funcionais, não ferramentas de vigilância publicitária. Você pode instruir seu navegador a recusar todos os cookies, mas alguns vetores da interface podem se tornar instáveis."
                },
                {
                    heading: "5. COMPLIANCE GLOBAL (GDPR & LGPD)",
                    text: "Aderimos aos padrões internacionais de soberania de dados:\n- **Acesso:** Você tem o direito de solicitar cópias de seus dados pessoais.\n- **Retificação:** Você tem o direito de solicitar a correção de qualquer informação que acredite estar imprecisa.\n- **Exclusão:** Você tem o direito de solicitar que apaguemos seus dados pessoais ('Direito ao Esquecimento').\n- **Restrição de Processamento:** Você tem o direito de solicitar que restrinjamos o processamento de seus dados pessoais.\n\nPara exercer esses direitos, contate nosso Encarregado de Proteção de Dados via terminal ou canais oficiais."
                },
                {
                    heading: "6. PROTOCOLOS DE SEGURANÇA",
                    text: "Empregamos criptografia e medidas de segurança de nível comercial. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus Dados Pessoais, não podemos garantir sua segurança absoluta."
                },
                {
                    heading: "7. MUDANÇAS NESTE PROTOCOLO",
                    text: "Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Aconselhamos que você revise esta Política de Privacidade periodicamente."
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
                    <span className="font-mono text-xs text-laser uppercase tracking-widest">System_Doc_01</span>
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

export default PrivacyPolicy;
