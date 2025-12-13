import React from 'react';
import { X, Calendar } from 'lucide-react';

interface ScheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Window */}
            <div className="relative w-full max-w-5xl h-[85vh] bg-black border border-white/10 shadow-[0_0_50px_rgba(215,0,0,0.15)] animate-fade-in-up flex flex-col rounded-sm">

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-laser/20 bg-black z-20">
                    <div className="flex items-center gap-2 text-laser">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-xs tracking-widest uppercase">STRATEGIC ALIGNMENT</span>
                    </div>
                    <button onClick={onClose} className="text-mist hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 bg-void relative overflow-hidden">
                    <iframe
                        src="https://cal.com/gilvector/inicializar"
                        className="w-full h-full border-0"
                        title="Schedule Meeting"
                        allow="camera; microphone; autoplay; fullscreen"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;
