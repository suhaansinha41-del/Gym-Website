import React from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { Check, ArrowRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

interface MembershipProps {
  onSelectPlan: (planTitle: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#0D0F10] relative border-b border-white/10 overflow-hidden">
      {/* Subtle atmospheric barbell plate in background */}
      <AtmosphericEquipment type="barbell-plate" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
            TRANSPARENT PRICING · NO HIDDEN FEES
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
            MEMBERSHIP THAT FITS YOUR GOAL.
          </h2>
          <p className="text-base sm:text-lg text-[#A7A9AC]">
            No surprise admission charges. No high-pressure sales calls. Pick a plan that matches your schedule and commitment.
          </p>
        </div>

        {/* 4 Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gymConfig.memberships.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
                  isPopular
                    ? 'bg-[#1C1F22] border-[#D71920] shadow-[0_10px_35px_rgba(215,25,32,0.18)] -translate-y-1'
                    : 'bg-[#17191C] border-white/10 hover:border-white/20 hover:bg-[#1C1F22]'
                }`}
                data-cursor="click"
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D71920] text-white font-bold font-mono text-[10px] uppercase tracking-wider py-1 px-3 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>MOST POPULAR IN RANCHI</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold uppercase text-[#F5F5F5]">
                      {plan.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#A7A9AC] bg-[#1C1F22] px-2 py-0.5 rounded border border-white/10">
                      {plan.duration}
                    </span>
                  </div>

                  {/* Pricing Block */}
                  <div className="mb-4">
                    <div className="font-headline text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
                      {plan.priceDisplay}
                    </div>
                    <div className="font-mono text-xs text-[#A7A9AC] mt-1">
                      Effective {plan.monthlyEquivalent}
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/10 my-5" />

                  {/* Included features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#F5F5F5]">
                        <Check className="w-3.5 h-3.5 text-[#D71920] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectPlan(plan.title)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#D71920] text-white hover:bg-[#FF2525] shadow-[0_0_20px_rgba(215,25,32,0.3)]'
                        : 'bg-[#1C1F22] text-[#F5F5F5] hover:bg-[#24272c] border border-white/10 hover:border-[#D71920]/40 hover:text-white'
                    }`}
                    data-cursor="click"
                  >
                    <span>ASK ABOUT MEMBERSHIP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Hi, I'm interested in the ${plan.title} membership plan at NOIR.FIT.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-wider text-[#A7A9AC] hover:text-[#F5F5F5] hover:bg-white/5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    data-cursor="click"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#D71920]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassuring note */}
        <div className="p-4 rounded-xl bg-[#17191C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#A7A9AC]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D71920]" />
            <span>All memberships include free locker usage, purified RO water & air conditioning.</span>
          </div>
          <div className="text-[#777B80]">
            Student and couple membership rates available on in-person verification.
          </div>
        </div>
      </div>
    </section>
  );
};
