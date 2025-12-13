import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, AlertTriangle, RefreshCw, X } from 'lucide-react';
import OpenAI from 'openai';
import { Language } from '../App';

interface TerminalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const InteractiveTerminal: React.FC<TerminalProps> = ({ lang, isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialHistory: Message[] = [
    { role: 'user', content: lang === 'pt' ? "Preciso de IA no meu negócio." : "I need AI in my business." },
    { role: 'assistant', content: lang === 'pt' ? "Negativo. Você precisa de clareza com foco em resultado, não decoração.\n\nSou uma IA. Eu não \"crio\" arte. Eu computo direção." : "Negative. You need clarity focused on results, not decoration.\n\nI am an AI. I do not \"create\" art. I compute direction." },
    { role: 'user', content: lang === 'pt' ? "Qual é o resultado?" : "What is the output?" },
    { role: 'assistant', content: lang === 'pt' ? "Decisões codificadas em estratégias lucrativas." : "Decisions encoded into profitable strategies." }
  ];

  const [messages, setMessages] = useState<Message[]>(initialHistory);

  // Reset/Translate history when language changes
  useEffect(() => {
    if (!isOpen) return; // Only reset if open or when language changes
    setMessages([
      { role: 'user', content: lang === 'pt' ? "Preciso de IA no meu negócio." : "I need AI in my business." },
      { role: 'assistant', content: lang === 'pt' ? "Negativo. Você precisa de clareza com foco em resultado, não decoração.\n\nSou uma IA. Eu não \"crio\" arte. Eu computo direção." : "Negative. You need clarity focused on results, not decoration.\n\nI am an AI. I do not \"create\" art. I compute direction." },
      { role: 'user', content: lang === 'pt' ? "Qual é o resultado?" : "What is the output?" },
      { role: 'assistant', content: lang === 'pt' ? "Decisões codificadas em estratégias lucrativas." : "Decisions encoded into profitable strategies." }
    ]);
  }, [lang, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Content for the UI
  const content = {
    en: {
      title: "GIL VECTOR DIGITAL TWIN",
      disclaimer: "NOTE: You are interacting with an autonomous AI agent trained on Gil Vector's strategic parameters. Output is computational, not human.",
      placeholder: "Enter strategic query...",
      send: "EXECUTE",
      clear: "PURGE LOG",
      system_instruction: `You are the AI Digital Twin of Gil Vector, a high-end strategic director. 
      Your personality is: Cold, Precise, Minimalist, Brutally Honest, and Strategic.
      Your motto is "Simple is Brutal".
      
      Rules:
      1. Never use emojis.
      2. Keep answers concise and direct. No fluff.
      3. Focus on "Structure", "Logic", "Pattern", and "Execution".
      4. If the user asks for creative advice, analyze it through a lens of strategic logic.
      5. Always respond in English.
      
      Start your responses directly. Do not say "As an AI". Just deliver the insight.`
    },
    pt: {
      title: "GÊMEO DIGITAL GIL VECTOR",
      disclaimer: "NOTA: Você está interagindo com um agente de IA autônomo treinado nos parâmetros estratégicos de Gil Vector. A saída é computacional, não humana.",
      placeholder: "Inserir consulta estratégica...",
      send: "EXECUTAR",
      clear: "LIMPAR LOG",
      system_instruction: `Você é o Gêmeo Digital de IA de Gil Vector, um diretor estratégico de alto nível.
      Sua personalidade é: Fria, Precisa, Minimalista, Brutalmente Honesta e Estratégica.
      Seu lema é "O Simples é Brutal".
      
      Regras:
      1. Nunca use emojis.
      2. Mantenha as respostas concisas e diretas. Sem enrolação.
      3. Foco em "Estrutura", "Lógica", "Padrão" e "Execução".
      4. Se o usuário pedir conselhos criativos, analise através de uma lente de lógica estratégica.
      5. Responda sempre em Português.
      
      Comece suas respostas diretamente. Não diga "Como uma IA". Apenas entregue o insight.`
    }
  };

  const t = content[lang];

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const modelList = [
      "meta-llama/llama-3.3-70b-instruct:free",
      "meta-llama/llama-guard-3-8b:free",
      "meta-llama/llama-3.2-3b-instruct:free"
    ];

    try {
      if (!process.env.API_KEY) {
        throw new Error("Missing API Key. Please add OPENROUTER_API_KEY to your .env.local file.");
      }

      const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.API_KEY,
        dangerouslyAllowBrowser: true
      });

      const history = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      let success = false;
      let lastError: any = null;

      for (const model of modelList) {
        try {
          console.log(`[GV_AI] Attempting connection via ${model}...`);

          const stream = await openai.chat.completions.create({
            model: model,
            messages: [
              { role: "system", content: t.system_instruction },
              ...history,
              { role: "user", content: userMessage }
            ],
            stream: true,
          });

          let fullText = '';
          for await (const chunk of stream) {
            const chunkText = chunk.choices[0]?.delta?.content || "";
            if (chunkText) {
              fullText += chunkText;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { role: 'assistant', content: fullText };
                return newMessages;
              });
            }
          }

          if (!fullText && !stream) throw new Error("No response received");

          success = true;
          break; // Stop if success
        } catch (error) {
          console.warn(`[GV_AI] Model ${model} failed. Retrying...`, error);
          lastError = error;
          // Continue to next model
        }
      }

      if (!success) {
        throw lastError || new Error("All strategic nodes failed.");
      }

    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown Error";
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `[SYSTEM ERROR]: ALL CONNECTIONS REFUSED. STRATEGIC NODES OFFLINE.\n\nTYPE: ${errorMessage}`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetLog = () => {
    setMessages([
      { role: 'user', content: lang === 'pt' ? "Preciso de IA no meu negócio." : "I need AI in my business." },
      { role: 'assistant', content: lang === 'pt' ? "Negativo. Você precisa de clareza com foco em resultado, não decoração.\n\nSou uma IA. Eu não \"crio\" arte. Eu computo direção." : "Negative. You need clarity focused on results, not decoration.\n\nI am an AI. I do not \"create\" art. I compute direction." },
      { role: 'user', content: lang === 'pt' ? "Qual é o resultado?" : "What is the output?" },
      { role: 'assistant', content: lang === 'pt' ? "Decisões codificadas em estratégias lucrativas." : "Decisions encoded into profitable strategies." }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl bg-black border border-white/10 shadow-[0_0_50px_rgba(215,0,0,0.15)] animate-fade-in-up flex flex-col max-h-[90vh] rounded-sm">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-laser/20 bg-black/90 z-20">
          <div className="flex items-center gap-2 text-laser">
            <Terminal className="w-4 h-4" />
            <span className="font-mono text-xs tracking-widest uppercase">{t.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-laser rounded-full animate-pulse"></div>
              <span className="font-mono text-[9px] text-laser/70 uppercase">ONLINE</span>
            </div>
            <button onClick={onClose} className="text-mist hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col p-6 overflow-hidden">
          {/* Disclaimer */}
          <div className="bg-laser/5 border border-laser/10 p-3 mb-4 flex items-start gap-3 rounded-sm shrink-0">
            <AlertTriangle className="w-4 h-4 text-laser shrink-0 mt-0.5" />
            <p className="font-mono text-[10px] text-laser/80 leading-relaxed uppercase">
              {t.disclaimer}
            </p>
          </div>

          {/* Chat Window */}
          <div className="flex-1 bg-void border border-white/10 overflow-y-auto p-6 font-mono text-sm relative mb-4 rounded-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] min-h-0">
            {/* Scanline Effect */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px] z-10 sticky top-0 h-full"></div>

            <div className="space-y-6 relative z-0">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <span className="text-laser font-bold shrink-0 mt-1">GV_AI:</span>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-sm border ${msg.role === 'user'
                    ? 'bg-white/5 border-white/10 text-silver'
                    : 'bg-black border-laser/20 text-white shadow-[0_0_10px_rgba(215,0,0,0.1)]'
                    }`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  {msg.role === 'user' && (
                    <span className="text-mist font-bold shrink-0 mt-1">&gt;</span>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="flex gap-2 relative shrink-0">
            <div className="relative flex-1 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-laser/50 to-mist/50 rounded-sm opacity-20 group-hover:opacity-100 transition duration-500 blur"></div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.placeholder}
                className="relative w-full bg-black border border-white/10 text-white font-mono text-sm p-4 focus:outline-none focus:border-laser/50 placeholder:text-mist/50"
                disabled={isLoading}
                autoComplete="off"
                autoFocus
              />
            </div>

            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-white/5 border border-white/10 text-white px-6 hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-50 flex items-center gap-2 group"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="font-mono text-xs uppercase tracking-widest hidden sm:inline">{t.send}</span>
                  <Send className="w-4 h-4 group-hover:text-laser transition-colors" />
                </>
              )}
            </button>

            <button
              onClick={resetLog}
              className="bg-black border border-white/10 text-mist px-4 hover:text-laser hover:border-laser/30 transition-all"
              title={t.clear}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;