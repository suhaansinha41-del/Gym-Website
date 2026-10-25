import React from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import { Hero3DObject } from './Hero3DObject';
import { ArrowRight, MessageSquare, Star, ShieldCheck, Dumbbell } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: (preselectedGoal?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 lg:pt-38 lg:pb-28 overflow-hidden border-b border-white/10 flex flex-col justify-center bg-[#111315]">
      {/* 
        LAYER 1: ATMOSPHERIC 3D DUMBBELL SITTING PHYSICALLY BEHIND TYPOGRAPHY
        z-index: 1, pointer-events: none, occupying full hero background
      */}
      <Hero3DObject isBackground={true} />

      {/* 
        LAYER 2: SUBTLE GLOW & READABILITY GRADIENT OVERLAY
        z-index: 5, pointer-events: none, ensures high WCAG contrast for white headline 
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111315]/95 via-[#111315]/75 to-transparent pointer-events-none z-5" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D71920]/8 rounded-full blur-[170px] pointer-events-none z-5" />

      {/* 
        LAYER 3: HERO CONTENT & TYPOGRAPHY SITTING IN FRONT
        z-index: 10, left-aligned, occupying left 45-55% of the canvas, overlapping 3D object
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-7">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A7A9AC] bg-[#17191C]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D71920]/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
            <span>EST. {gymConfig.brand.established} · RANCHI, JHARKHAND · PRIVATE FITNESS STUDIO</span>
          </div>

          {/* Main Stacked Headline — Dominant, clean, bold, sitting right in front of the 3D rotating dumbbell */}
          <h1 className="font-headline text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.0] text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            <span className="text-[#9A7748]">BUILD</span> <br />
            YOUR <br />
            <span className="text-[#9A7748]">BEST</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#C8C8C8]">
              SELF.
            </span>
          </h1>

          {/* Supporting Line & Natural Language Body Copy */}
          <div className="space-y-3 max-w-2xl bg-[#111315]/40 backdrop-blur-xs p-2 rounded-xl">
            <p className="text-xl sm:text-2xl font-semibold text-[#F5F5F5] drop-shadow-sm">
              Modern equipment. Expert trainers. Personal attention. Real results.
            </p>
            <p className="text-base sm:text-lg text-[#A7A9AC] leading-relaxed drop-shadow-sm">
              Whether your goal is fat loss, muscle building, strength or simply becoming fitter — we'll help you build a plan that works for you. No confusing jargon, no intimidation.
            </p>
          </div>

          {/* LAYER 4: UI BUTTONS & STATS */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#D71920] hover:bg-[#FF2525] transition-all shadow-[0_0_35px_rgba(215,25,32,0.4)] hover:shadow-[0_0_45px_rgba(215,25,32,0.6)] flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98]"
              data-cursor="click"
            >
              <span>BOOK A FREE VISIT →</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl text-sm sm:text-base font-mono uppercase tracking-wider text-[#F5F5F5] bg-[#17191C]/90 hover:bg-[#1C1F22] backdrop-blur-md border border-white/10 hover:border-[#D71920]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              data-cursor="click"
            >
              <MessageSquare className="w-4 h-4 text-[#D71920]" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Reassuring local note */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#777B80] pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D71920]" />
              <span>Free 1-Day Trial Session · Circular Road, Lalpur</span>
            </div>
            <div className="flex items-center gap-1.5 hidden sm:flex">
              <Dumbbell className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Move mouse to interact with 3D equipment</span>
            </div>
          </div>

          {/* Believable CMS-style Hero Stats */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {gymConfig.heroStats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-headline text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] tracking-tight flex items-baseline gap-1">
                  {stat.value}
                  {stat.value.includes('★') && (
                    <Star className="w-3.5 h-3.5 fill-[#D71920] text-[#D71920] inline -ml-1" />
                  )}
                </div>
                <div className="font-medium text-xs text-[#F5F5F5]">{stat.label}</div>
                <div className="font-mono text-[11px] text-[#777B80]">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
