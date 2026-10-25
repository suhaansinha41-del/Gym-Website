import React from 'react';
import { getWhatsAppLink } from '../data/gymConfig';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#0D0F10] relative overflow-hidden border-b border-white/10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D71920]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A7A9AC] bg-[#D71920]/10 px-3.5 py-1.5 rounded-full border border-[#D71920]/30 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
          <span>JOIN RANCHI'S FASTEST-GROWING FITNESS COMMUNITY</span>
        </div>

        <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.05]">
          YOUR TRANSFORMATION <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#C8C8C8]">
            STARTS TODAY.
          </span>
        </h2>

        <p className="text-lg sm:text-2xl text-[#A7A9AC] max-w-2xl mx-auto font-medium">
          You don't need to be fit to start. You just need to start.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            data-cursor="click"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wider text-white bg-[#D71920] hover:bg-[#FF2525] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_35px_rgba(215,25,32,0.4)] hover:shadow-[0_0_45px_rgba(215,25,32,0.6)] cursor-pointer active:scale-[0.98]"
          >
            <span>BOOK A FREE VISIT →</span>
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="click"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-mono text-sm sm:text-base uppercase tracking-wider text-[#F5F5F5] bg-[#17191C] hover:bg-[#1C1F22] border border-white/10 hover:border-[#D71920]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-[#D71920]" />
            <span>WHATSAPP US →</span>
          </a>
        </div>

        <div className="text-xs font-mono text-[#777B80] pt-2">
          Lalpur Chowk, Circular Road, Ranchi · Free 1-Day Trial · Complete Guidance
        </div>
      </div>
    </section>
  );
};
