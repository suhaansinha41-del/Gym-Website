import React, { useState } from 'react';
import { Dumbbell, Users, Target, Sparkles, Check, ChevronRight } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      num: '01',
      title: 'MODERN EQUIPMENT',
      icon: Dumbbell,
      tag: 'PREMIUM MACHINES',
      summary: 'Everything you need for serious strength, muscle and fitness training.',
      detail:
        'Imported cable crossover towers, calibrated Olympic barbells, power racks with safety spotter arms, and heavy-duty benches built to support heavy lifting safely.',
      bullets: [
        'Olympic barbells and calibrated bumper plates',
        'Urethane dumbbells ranging from 2.5 kg to 50 kg',
        'Commercial-grade benches and plate-loaded machines',
      ],
    },
    {
      num: '02',
      title: 'EXPERIENCED TRAINERS',
      icon: Users,
      tag: 'FORM GUIDANCE',
      summary: 'Get proper guidance instead of guessing your way through workouts.',
      detail:
        'Our certified trainers are always on the floor. We correct posture, teach warm-up protocols, and ensure you lift with strict form so you progress without injuries.',
      bullets: [
        'Certified strength and fitness coaches',
        'No phone scrolling — active presence and spotting',
        'Coaching cues explained in clear, friendly language',
      ],
    },
    {
      num: '03',
      title: 'PERSONAL ATTENTION',
      icon: Target,
      tag: 'CUSTOM PLANS',
      summary: 'Training that fits your goals, fitness level and busy schedule.',
      detail:
        'No two bodies are identical. We factor in your job routine, past joint issues, and real Indian home meal patterns to craft a workout routine you can actually sustain year-round.',
      bullets: [
        'Workout sheets tailored to your exact 3 or 4-day split',
        'Regular weight and circumference check-ins',
        'Direct WhatsApp support for workout doubts',
      ],
    },
    {
      num: '04',
      title: 'CLEAN & COMFORTABLE',
      icon: Sparkles,
      tag: 'HYGIENE & CULTURE',
      summary: 'A welcoming, disciplined environment where you can focus on training.',
      detail:
        'High-velocity air circulation, spotless sanitized locker rooms, clean rubber flooring, and an encouraging crowd that respects gym etiquette.',
      bullets: [
        'Sanitized equipment and mats throughout the day',
        'Well-lit, air-conditioned workout floor',
        'Welcoming atmosphere for women and beginners',
      ],
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#111315] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
            FOUNDED ON REAL COACHING · RANCHI
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
            TRAIN SMARTER. <br />
            <span className="text-[#A7A9AC]">GET STRONGER.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A9AC] leading-relaxed">
            The right training plan makes all the difference. Our approach combines quality equipment, experienced trainers and personal attention.
          </p>
        </div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activeCard === idx;

            return (
              <div
                key={pillar.num}
                onClick={() => setActiveCard(isSelected ? null : idx)}
                data-cursor="click"
                className={`group relative rounded-xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#1C1F22] border-[#D71920]/60 shadow-[0_10px_30px_rgba(215,25,32,0.12)] -translate-y-1'
                    : 'bg-[#17191C] border-white/10 hover:border-white/20 hover:bg-[#1C1F22]'
                }`}
              >
                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#D71920] tracking-wider">
                      {pillar.num}
                    </span>
                    <span className="font-mono text-[10px] text-[#777B80] uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#17191C] border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#D71920]/50 transition-colors">
                    <Icon className="w-6 h-6 text-[#D71920]" />
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-[#F5F5F5] mb-2 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#A7A9AC] leading-relaxed mb-4">
                    {pillar.summary}
                  </p>

                  {/* Expandable detail */}
                  {isSelected && (
                    <div className="pt-3 border-t border-white/10 space-y-3 animate-in fade-in duration-200">
                      <p className="text-xs text-[#F5F5F5] leading-relaxed">{pillar.detail}</p>
                      <ul className="space-y-1.5 pt-1">
                        {pillar.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2 text-[11px] text-[#A7A9AC]">
                            <Check className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom interactive prompt */}
                <div className="pt-4 mt-2 flex items-center justify-between text-xs font-mono text-[#777B80] group-hover:text-[#D71920] transition-colors">
                  <span>{isSelected ? 'TAP TO COLLAPSE' : 'LEARN DETAILS'}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isSelected ? 'rotate-90 text-[#D71920]' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
