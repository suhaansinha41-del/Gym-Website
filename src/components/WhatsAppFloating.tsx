import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/gymConfig';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
      {/* Friendly tooltip prompt */}
      {showTooltip && (
        <div className="bg-[#17191C] border border-white/10 rounded-xl p-3 shadow-2xl max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative text-xs">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#777B80] hover:text-[#F5F5F5] cursor-pointer"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-mono text-[10px] text-[#A7A9AC] font-semibold mb-0.5">
            ONLINE // RANCHI TEAM
          </div>
          <p className="text-[#A7A9AC] leading-snug">
            Got questions about timings, pricing or a trial pass? Chat with us directly on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="click"
        className="group flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-[#25D366] text-[#080808] font-bold text-xs uppercase tracking-wider shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-[#080808]" />
        <span className="font-headline tracking-normal font-extrabold">WhatsApp Us</span>
      </a>
    </div>
  );
};
