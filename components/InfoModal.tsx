import React from 'react';
import { X, Activity, Layers, Cpu, Terminal, Shield, FileText, Database } from 'lucide-react';
import { Language } from '../App';

export type InfoType = 'pattern' | 'structure' | 'execution' | 'privacy' | 'terms' | 'cookies' | null;

interface InfoModalProps {
  lang: Language;
  type: InfoType;
  onClose: () => void;
  onOpenTerminal: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ lang, type, onClose, onOpenTerminal }) => {
  if (!type) return null;

  const content = {
    pattern: {
      en: {
        title: "PATTERN RECOGNITION",
        id: "DAT_01_PTRN",
        subtitle: "Knowledge Transfer & Strategic Lectures",
        body: `Information is abundant. Insight is scarce.
        
        The "Pattern" directive is our Knowledge Transfer protocol (Lectures & Keynotes). We do not deliver motivational speeches; we install new operating systems into your workforce. We decode market signals and teach your team to see the invisible vectors of opportunity.
        
        // MODULES:
        1. Decoding Market Signal vs. Noise
        2. The Future of Algorithmic Business
        3. Cognitive Re-patterning for Leadership
        
        We don't just speak. We upgrade the audience's processing power.`,
        btn: "Query Intelligence",
        icon: Activity
      },
      pt: {
        title: "RECONHECIMENTO DE PADRÃO",
        id: "DAT_01_PTRN",
        subtitle: "Transferência de Conhecimento & Palestras Estratégicas",
        body: `Informação é abundante. Insight é escasso.
        
        A diretriz "Padrão" é nosso protocolo de Transferência de Conhecimento (Palestras & Keynotes). Não entregamos discursos motivacionais; instalamos novos sistemas operacionais em sua força de trabalho. Decodificamos sinais de mercado e ensinamos sua equipe a ver os vetores invisíveis de oportunidade.
        
        // MÓDULOS:
        1. Decodificando Sinal de Mercado vs. Ruído
        2. O Futuro dos Negócios Algorítmicos
        3. Repadronização Cognitiva para Liderança
        
        Nós não apenas falamos. Atualizamos o poder de processamento da audiência.`,
        btn: "Consultar Inteligência",
        icon: Activity
      }
    },
    structure: {
      en: {
        title: "SYSTEM ARCHITECTURE",
        id: "DAT_02_STRC",
        subtitle: "Corporate Consulting & Optimization",
        body: `Chaos is a bug. Structure is the patch.
        
        The "Structure" directive is our Consulting interface. We analyze the architecture of your organization to identify friction points. We replace organic inefficiencies with rigid, high-performance logic. This is not advice; this is a complete system recalibration.
        
        // PROTOCOLS:
        1. Workflow Automation Design
        2. Removing Legacy Decision Bottlenecks
        3. Scaling through Logic-Based Frameworks
        
        We build the fortress that protects your capital flow.`,
        btn: "Initiate Diagnosis",
        icon: Layers
      },
      pt: {
        title: "ARQUITETURA DE SISTEMA",
        id: "DAT_02_STRC",
        subtitle: "Consultoria Corporativa & Otimização",
        body: `O caos é um bug. A estrutura é a correção.
        
        A diretriz "Estrutura" é nossa interface de Consultoria. Analisamos a arquitetura da sua organização para identificar pontos de atrito. Substituímos ineficiências orgânicas por lógica rígida de alta performance. Isso não é conselho; é uma recalibragem completa do sistema.
        
        // PROTOCOLOS:
        1. Design de Automação de Fluxo de Trabalho
        2. Remoção de Gargalos de Decisão Legados
        3. Escala através de Frameworks Baseados em Lógica
        
        Construímos a fortaleza que protege seu fluxo de capital.`,
        btn: "Iniciar Diagnóstico",
        icon: Layers
      }
    },
    execution: {
      en: {
        title: "KINETIC EXECUTION",
        id: "DAT_03_EXEC",
        subtitle: "High-Level Mentorship & Advisory",
        body: `Theory ends. Reality begins.
        
        The "Execution" directive is our Mentorship and Advisory channel. This is a direct neural link between Gil Vector intelligence and your decision-makers. We provide real-time trajectory correction, ensuring that strategy is converted into kinetic result without hesitation.
        
        // OPERATIONS:
        1. C-Level Strategic Co-piloting
        2. Real-time Crisis Navigation
        3. Implementation of "Zero-Latency" Culture
        
        You drive the machine. We program the destination.`,
        btn: "Request Access",
        icon: Cpu
      },
      pt: {
        title: "EXECUÇÃO CINÉTICA",
        id: "DAT_03_EXEC",
        subtitle: "Mentoria de Alto Nível & Advisory",
        body: `A teoria termina. A realidade começa.
        
        A diretriz "Execução" é nosso canal de Mentoria e Advisory. Este é um link neural direto entre a inteligência Gil Vector e seus tomadores de decisão. Fornecemos correção de trajetória em tempo real, garantindo que a estratégia seja convertida em resultado cinético sem hesitação.
        
        // OPERAÇÕES:
        1. Co-pilotagem Estratégica C-Level
        2. Navegação de Crise em Tempo Real
        3. Implementação de Cultura "Latência-Zero"
        
        Você pilota a máquina. Nós programamos o destino.`,
        btn: "Solicitar Acesso",
        icon: Cpu
      }
    },
    privacy: {
      en: {
        title: "PRIVACY PROTOCOL",
        id: "DAT_04_PRIV",
        subtitle: "Data Integrity & Anonymity",
        body: `Your data is a strategic asset. We treat it with military-grade classification.
        
        We collect minimal telemetry to optimize system performance. Personal identifiers are encrypted at rest and in transit. We do not share intelligence with third-party brokers. Your operational footprint remains classified within the Gil Vector ecosystem.
        
        // CLASSIFICATION:
        1. End-to-End Encryption
        2. Zero-Knowledge Analytics
        3. Strict Data Isolation
        
        Anonymity is the ultimate luxury.`,
        btn: "Query Privacy AI",
        icon: Shield
      },
      pt: {
        title: "PROTOCOLO DE PRIVACIDADE",
        id: "DAT_04_PRIV",
        subtitle: "Integridade de Dados & Anonimato",
        body: `Seus dados são um ativo estratégico. Nós os tratamos com classificação de nível militar.
        
        Coletamos telemetria mínima para otimizar o desempenho do sistema. Identificadores pessoais são criptografados em repouso e em trânsito. Não compartilhamos inteligência com corretores terceirizados. Sua pegada operacional permanece classificada dentro do ecossistema Gil Vector.
        
        // CLASSIFICAÇÃO:
        1. Criptografia de Ponta a Ponta
        2. Analytics Zero-Knowledge
        3. Isolamento Estrito de Dados
        
        O anonimato é o luxo definitivo.`,
        btn: "Consultar IA Privacidade",
        icon: Shield
      }
    },
    terms: {
      en: {
        title: "OPERATIONAL TERMS",
        id: "DAT_05_TERM",
        subtitle: "Usage Directives & Compliance",
        body: `Accessing Gil Vector systems implies consent to our operational logic.
        
        You agree not to reverse engineer, inject malicious code, or attempt to extract the core algorithmic weights of our AI models. Outputs are probabilistic strategic directives, not financial guarantees. Execution responsibility lies with the user.
        
        // DIRECTIVES:
        1. No Unauthorized Extraction
        2. Algorithmic Integrity Respect
        3. Strategic Liability Limitation
        
        Code is law. Violations terminate access.`,
        btn: "Query Legal AI",
        icon: FileText
      },
      pt: {
        title: "TERMOS OPERACIONAIS",
        id: "DAT_05_TERM",
        subtitle: "Diretrizes de Uso & Compliance",
        body: `Acessar os sistemas Gil Vector implica consentimento à nossa lógica operacional.
        
        Você concorda em não fazer engenharia reversa, injetar código malicioso ou tentar extrair os pesos algorítmicos centrais de nossos modelos de IA. As saídas são diretrizes estratégicas probabilísticas, não garantias financeiras. A responsabilidade da execução cabe ao usuário.
        
        // DIRETRIZES:
        1. Sem Extração Não Autorizada
        2. Respeito à Integridade Algorítmica
        3. Limitação de Responsabilidade Estratégica
        
        O código é a lei. Violações encerram o acesso.`,
        btn: "Consultar IA Legal",
        icon: FileText
      }
    },
    cookies: {
      en: {
        title: "TRACKING VECTORS",
        id: "DAT_06_COOK",
        subtitle: "Digital Residue Management",
        body: `We utilize digital markers to maintain session continuity and analyze usage patterns.
        
        These are not tracking pixels for advertising; they are functional nodes ensuring the interface responds to your command inputs instantly. By continuing, you acknowledge the necessity of these local data vectors for optimal performance.
        
        // VECTORS:
        1. Session State Persistence
        2. Interface Preferences
        3. Performance Metrics
        
        Efficiency leaves a trace.`,
        btn: "Query Data AI",
        icon: Database
      },
      pt: {
        title: "VETORES DE RASTREIO",
        id: "DAT_06_COOK",
        subtitle: "Gerenciamento de Resíduo Digital",
        body: `Utilizamos marcadores digitais para manter a continuidade da sessão e analisar padrões de uso.
        
        Estes não são pixels de rastreamento para publicidade; são nós funcionais garantindo que a interface responda aos seus comandos instantaneamente. Ao continuar, você reconhece a necessidade desses vetores de dados locais para performance ideal.
        
        // VETORES:
        1. Persistência de Estado de Sessão
        2. Preferências de Interface
        3. Métricas de Performance
        
        A eficiência deixa um rastro.`,
        btn: "Consultar IA Dados",
        icon: Database
      }
    }
  };

  const data = content[type][lang];
  const Icon = data.icon;
  const isPolicy = ['privacy', 'terms', 'cookies'].includes(type);

  const handleCtaClick = () => {
      onClose();
      setTimeout(() => {
          onOpenTerminal();
      }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
          onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-black border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-fade-in-up flex flex-col max-h-[90vh]">
          
          {/* Decorative Top Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-laser to-transparent opacity-50"></div>

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-graphene/50 relative overflow-hidden">
              <div className="absolute inset-0 vector-grid opacity-[0.05]"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-black border border-white/10 text-laser">
                      <Icon className="w-6 h-6" />
                  </div>
                  <div>
                      <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[10px] text-laser uppercase tracking-widest bg-laser/10 px-2 py-0.5 rounded-sm">
                              {data.id}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-laser animate-pulse"></span>
                      </div>
                      <h2 className="font-display font-bold text-xl text-white tracking-wide uppercase">
                          {data.title}
                      </h2>
                  </div>
              </div>

              <button 
                  onClick={onClose} 
                  className="text-mist hover:text-white transition-colors relative z-10 p-2 hover:bg-white/5 rounded-sm"
              >
                  <X className="w-5 h-5" />
              </button>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10 overflow-y-auto bg-black relative flex-1">
              {/* Sidebar decorative line */}
              <div className="absolute left-6 top-10 bottom-10 w-px bg-white/10 hidden md:block">
                  <div className="absolute top-0 left-[-2px] w-[5px] h-[1px] bg-laser"></div>
                  <div className="absolute bottom-0 left-[-2px] w-[5px] h-[1px] bg-laser"></div>
              </div>

              <div className="md:pl-8">
                  <h3 className="text-sm font-mono text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4 inline-block">
                      {data.subtitle}
                  </h3>
                  
                  <div className="text-silver/80 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-line mb-8">
                      {data.body}
                  </div>

                  {/* AI Agent Button */}
                  {!isPolicy && (
                    <button 
                        onClick={handleCtaClick}
                        className="group flex items-center gap-3 px-5 py-3 bg-black border border-laser/50 text-laser hover:bg-laser hover:text-white transition-all duration-300 w-full md:w-auto justify-center"
                    >
                        <Terminal className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-widest font-bold">
                            {data.btn}
                        </span>
                    </button>
                  )}
              </div>
          </div>

          {/* Footer Status */}
          <div className="p-3 border-t border-white/10 bg-graphene/30 flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-mist">
              <span>System_Read: Verified</span>
              <span>End of File</span>
          </div>
      </div>
    </div>
  );
};

export default InfoModal;