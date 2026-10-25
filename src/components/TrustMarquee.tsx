import React from 'react';

export const TrustMarquee: React.FC = () => {
  const items = [
    'STRENGTH',
    'FAT LOSS',
    'MUSCLE BUILDING',
    'PERSONAL TRAINING',
    'FUNCTIONAL FITNESS',
    'MOBILITY',
    'CONSISTENCY',
    'RESULTS',
  ];

  return (
    <div className="relative py-4 bg-[#0D0F10] border-y border-white/10 overflow-hidden select-none">
      {/* Side gradient fades */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0F10] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0F10] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-headline font-bold text-sm tracking-wider uppercase text-[#A7A9AC] hover:text-[#F5F5F5] transition-colors whitespace-nowrap">
              {item}
            </span>
            <span className="ml-6 text-[#D71920] text-xs">◆</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};
