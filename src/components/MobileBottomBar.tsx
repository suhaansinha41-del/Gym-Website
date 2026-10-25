import React from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#111315]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 sm:hidden flex items-center justify-between gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      {/* 1. CALL Button */}
      <a
        href={`tel:${gymConfig.brand.phone}`}
        className="flex-1 py-2.5 px-2 rounded-lg bg-[#17191C] border border-white/10 text-center flex flex-col items-center justify-center gap-0.5 text-[#F5F5F5] hover:bg-[#1C1F22] active:scale-95 transition-all"
        aria-label="Call gym"
      >
        <Phone className="w-4 h-4 text-[#D71920]" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">CALL</span>
      </a>

      {/* 2. WHATSAPP Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 rounded-lg bg-[#17191C] border border-white/10 text-center flex flex-col items-center justify-center gap-0.5 text-[#F5F5F5] hover:bg-[#1C1F22] active:scale-95 transition-all"
        aria-label="WhatsApp gym"
      >
        <MessageSquare className="w-4 h-4 text-[#25D366]" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">WHATSAPP</span>
      </a>

      {/* 3. BOOK VISIT Button */}
      <button
        onClick={onOpenBooking}
        className="flex-[1.6] py-2.5 px-3 rounded-lg bg-[#D71920] text-white font-bold text-center flex flex-col items-center justify-center gap-0.5 shadow-[0_0_15px_rgba(215,25,32,0.4)] active:scale-95 transition-all cursor-pointer"
        aria-label="Book free visit"
      >
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-white" />
          <span className="font-mono text-[10px] uppercase tracking-wider font-extrabold">BOOK VISIT</span>
        </div>
      </button>
    </div>
  );
};
