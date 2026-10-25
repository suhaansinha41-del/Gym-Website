import React from 'react';
import { gymConfig } from '../data/gymConfig';
import { GymImage } from './GymImage';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { ArrowRight, Check, Compass, Sparkles } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  // Curated realistic fitness training photography for each program
  const programPhotos: Record<string, string> = {
    'fat-loss': 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80',
    'muscle-building': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
    'strength-training': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    'personal-training': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    'functional-fitness': 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=80',
    'beginner-program': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80',
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#0D0F10] relative border-b border-white/10 overflow-hidden">
      {/* Subtle atmospheric kettlebell & wave in background */}
      <AtmosphericEquipment type="kettlebell-wave" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
            STRUCTURED TRAINING PLANS · RANCHI
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
            FIND YOUR PROGRAM.
          </h2>
          <p className="text-base sm:text-lg text-[#A7A9AC]">
            Every body is different. Whether you are stepping into a gym for the very first time or chasing a new personal record, we have a progressive roadmap for you.
          </p>
        </div>

        {/* 6 Program Cards with Monochrome to Color Photo Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gymConfig.programs.map((prog, idx) => {
            const isBeginner = prog.id === 'beginner-program';
            const photoUrl = programPhotos[prog.id] || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80';

            return (
              <div
                key={prog.id}
                className={`group relative rounded-2xl flex flex-col justify-between transition-all duration-500 border overflow-hidden ${
                  isBeginner
                    ? 'bg-[#1C1F22] border-[#D71920]/60 shadow-[0_10px_35px_rgba(215,25,32,0.15)]'
                    : 'bg-[#17191C] border-white/10 hover:border-white/20 hover:bg-[#1C1F22]'
                }`}
                data-cursor="explore"
              >
                {/* Program Card Header with Realistic Photo & B&W -> Color Hover */}
                <div className="relative w-full h-44 overflow-hidden">
                  <GymImage
                    src={photoUrl}
                    alt={prog.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#D71920] px-2.5 py-0.5 rounded-full shadow-md">
                      0{idx + 1}
                    </span>
                    {isBeginner && (
                      <span className="text-[10px] font-mono uppercase bg-white text-[#111315] font-extrabold px-2 py-0.5 rounded-full">
                        MOST WELCOMING
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="font-mono text-[10px] text-[#F5F5F5] bg-[#111315]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {prog.duration}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-headline text-2xl font-extrabold text-[#F5F5F5] mb-1 group-hover:text-white transition-colors">
                      {prog.title}
                    </h3>
                    <div className="text-xs font-mono text-[#A7A9AC] font-semibold mb-3">
                      {prog.tag}
                    </div>

                    <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed mb-5">
                      {prog.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {prog.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F5F5F5]">
                          <Check className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[11px] font-mono text-[#777B80] mb-3">
                      BEST FOR: <span className="text-[#A7A9AC]">{prog.bestFor}</span>
                    </div>

                    <button
                      onClick={() => onSelectProgram(prog.title)}
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isBeginner
                          ? 'bg-[#D71920] text-white hover:bg-[#FF2525] shadow-[0_0_20px_rgba(215,25,32,0.3)]'
                          : 'bg-[#1C1F22] text-[#F5F5F5] hover:bg-[#22252a] border border-white/10 hover:border-[#D71920]/40 hover:text-white'
                      }`}
                      data-cursor="click"
                    >
                      <span>Choose This Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PROMINENT BEGINNER WELCOME CALLOUT (Important Indian Gym Requirement) */}
        <div className="rounded-2xl bg-gradient-to-r from-[#17191C] via-[#1C1F22] to-[#17191C] border border-[#D71920]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#A7A9AC]">
              <Compass className="w-4 h-4 text-[#D71920]" />
              <span>ZERO INTIMIDATION POLICY · LALPUR</span>
            </div>
            <h4 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#F5F5F5]">
              NEW TO THE GYM?
            </h4>
            <p className="text-sm text-[#A7A9AC] max-w-xl">
              Don’t know what to do on your first day? Wondering what machines to touch? Our trainers walk by your side from the minute you step onto the floor.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onSelectProgram('Beginner Program')}
              className="py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#D71920] hover:bg-[#FF2525] text-white flex items-center gap-2 shadow-[0_0_25px_rgba(215,25,32,0.35)] transition-all cursor-pointer active:scale-[0.98]"
              data-cursor="click"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>I'M NEW — HELP ME START →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
