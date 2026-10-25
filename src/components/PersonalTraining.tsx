import React from 'react';
import { getWhatsAppLink } from '../data/gymConfig';
import { GymImage } from './GymImage';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { Calendar, ClipboardList, LineChart, Apple, CheckCircle2, MessageSquare } from 'lucide-react';

interface PersonalTrainingProps {
  onBookPT: () => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onBookPT }) => {
  const ptBenefits = [
    {
      title: 'Personal Training Plan',
      desc: 'No generic routines. Every exercise, rep count and rest period is customized to your starting mobility and target goals.',
      icon: ClipboardList,
    },
    {
      title: 'Live 1-on-1 Form Correction',
      desc: 'Your trainer stands beside you on every set. Corrects joint angles and posture in real time to prevent injuries and maximize progress.',
      icon: CheckCircle2,
    },
    {
      title: 'Realistic Indian Diet Guidance',
      desc: 'Daily calorie and protein targets tailored around regular home-cooked Indian meals (roti, dal, paneer, eggs, chicken).',
      icon: Apple,
    },
    {
      title: 'Continuous Progress Tracking',
      desc: 'Bi-weekly body measurements and lifting records logged into your personal card so you can see clear progress every month.',
      icon: LineChart,
    },
    {
      title: 'Weekly Check-ins & WhatsApp Accountability',
      desc: 'Miss a workout? We follow up. Going out for a function? We modify your session so you stay consistent without stress.',
      icon: Calendar,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#111315] relative border-b border-white/10 overflow-hidden">
      {/* Subtle atmospheric coaching radar in background */}
      <AtmosphericEquipment type="coaching-silhouette" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#17191C] border border-[#D71920]/30 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle red glow background */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D71920]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading, Photograph and CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A7A9AC] bg-[#D71920]/10 px-3 py-1.5 rounded-full border border-[#D71920]/25">
                <span>1-ON-1 PERSONAL COACHING · RANCHI</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
                WANT MORE PERSONAL ATTENTION?
              </h2>

              <p className="text-base sm:text-lg text-[#A7A9AC] leading-relaxed">
                Work one-to-one with a dedicated coach who understands your goals, accommodates your schedule, and gives you total confidence on the gym floor.
              </p>

              {/* Realistic dummy photograph of personal coaching with B&W -> Color Hover */}
              <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl relative group">
                <GymImage
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                  fallbackSrc="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
                  alt="Personal trainer coaching client at NOIR.FIT"
                  containerClassName="w-full h-full"
                  className="w-full h-full"
                />
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#F5F5F5] bg-[#111315]/85 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                    ONE-TO-ONE TECHNIQUE GUIDANCE
                  </span>
                </div>
              </div>

              {/* Progress roadmap card */}
              <div className="p-4 rounded-xl bg-[#1C1F22] border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A7A9AC]">TYPICAL 12-WEEK COACHING PROGRESSION</span>
                  <span className="text-[#D71920] font-bold">+85% CONSISTENCY</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                  <div className="space-y-1">
                    <div className="h-1.5 rounded-full bg-[#D71920]" />
                    <span className="text-[#A7A9AC] block">W1-3: Form Base</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 rounded-full bg-[#D71920]" />
                    <span className="text-[#A7A9AC] block">W4-6: Strength</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 rounded-full bg-[#D71920]" />
                    <span className="text-[#A7A9AC] block">W7-9: Metabolic</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 rounded-full bg-[#D71920]" />
                    <span className="text-[#D71920] font-bold block">W10-12: Results</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onBookPT}
                  className="py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#D71920] hover:bg-[#FF2525] text-white flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(215,25,32,0.35)] transition-all active:scale-[0.98]"
                  data-cursor="click"
                >
                  <span>BOOK PERSONAL TRAINING →</span>
                </button>

                <a
                  href={getWhatsAppLink("Hi! I'd like to ask about Personal Training availability and plans at NOIR.FIT.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-5 rounded-xl font-mono text-xs uppercase tracking-wider text-[#F5F5F5] bg-[#1C1F22] hover:bg-[#22252a] border border-white/10 hover:border-[#D71920]/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  data-cursor="click"
                >
                  <MessageSquare className="w-4 h-4 text-[#D71920]" />
                  <span>WhatsApp Coach</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Benefits Checklist */}
            <div className="lg:col-span-6 space-y-3">
              {ptBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-4.5 rounded-xl bg-[#1C1F22] border border-white/10 hover:border-[#D71920]/40 transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#17191C] border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#D71920]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline text-base font-bold text-[#F5F5F5]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#A7A9AC] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
