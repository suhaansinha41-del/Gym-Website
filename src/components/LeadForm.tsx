import React, { useState } from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import confetti from 'canvas-confetti';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Phone, MessageSquare } from 'lucide-react';

interface LeadFormProps {
  initialGoal?: string;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialGoal, onSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState(initialGoal || 'Fat Loss');
  const [preferredTime, setPreferredTime] = useState('Morning');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

      setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D71920', '#FFFFFF', '#17191C'],
        });
      } catch {}
      if (onSuccess) onSuccess();
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
  };

  return (
    <div className="bg-[#17191C] border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D71920]/5 rounded-full blur-[100px] pointer-events-none" />

      {!isSubmitted ? (
        <div className="space-y-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#A7A9AC] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
              <span>FREE 1-DAY PASS · NO OBLIGATION</span>
            </div>
            <h3 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#F5F5F5]">
              COME SEE THE GYM.
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A9AC] mt-1">
              Tour the facility, test out the equipment, and speak directly with our coaches before deciding.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-[#D71920]/30 text-red-300 text-xs font-mono">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A7A9AC] mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-lg bg-[#1C1F22] border border-white/10 focus:border-[#D71920] text-sm text-[#F5F5F5] placeholder-[#777B80] outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A7A9AC] mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <div className="flex">
                <span className="px-3.5 py-3 rounded-l-lg bg-[#1C1F22] border border-r-0 border-white/10 text-xs font-mono text-[#A7A9AC] flex items-center">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98350 12345"
                  className="w-full px-4 py-3 rounded-r-lg bg-[#1C1F22] border border-white/10 focus:border-[#D71920] text-sm text-[#F5F5F5] placeholder-[#777B80] outline-none transition-colors"
                />
              </div>
            </div>

            {/* Goal Select */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A7A9AC] mb-1.5">
                Your Primary Fitness Goal
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#1C1F22] border border-white/10 focus:border-[#D71920] text-sm text-[#F5F5F5] outline-none transition-colors cursor-pointer"
              >
                <option value="Fat Loss">Fat Loss</option>
                <option value="Muscle Building">Muscle Building</option>
                <option value="Strength">Strength Training</option>
                <option value="General Fitness">General Fitness</option>
                <option value="Beginner Training">Beginner Foundation (First Time)</option>
                <option value="Personal Training">Personal Training</option>
              </select>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A7A9AC] mb-1.5">
                Preferred Visit Time Slot
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Morning', label: 'Morning (6 - 10 AM)' },
                  { id: 'Afternoon', label: 'Afternoon (1 - 4 PM)' },
                  { id: 'Evening', label: 'Evening (5 - 9 PM)' },
                ].map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setPreferredTime(slot.id)}
                    className={`py-2 px-2 rounded font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
                      preferredTime === slot.id
                        ? 'bg-[#D71920] text-white font-bold border-[#D71920] shadow-[0_0_12px_rgba(215,25,32,0.3)]'
                        : 'bg-[#1C1F22] text-[#A7A9AC] hover:text-[#F5F5F5] border-white/10'
                    }`}
                  >
                    {slot.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                data-cursor="click"
                className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#D71920] hover:bg-[#FF2525] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(215,25,32,0.35)] active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>BOOK MY FREE VISIT →</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#777B80] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
              <span>We never spam or sell numbers · Lalpur, Ranchi</span>
            </div>
          </form>
        </div>
      ) : (
        /* Confirmation State */
        <div className="text-center py-8 space-y-5 relative z-10 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#D71920]/10 border-2 border-[#D71920] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(215,25,32,0.3)]">
            <CheckCircle2 className="w-9 h-9 text-[#D71920]" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
              REQUEST CONFIRMED
            </span>
            <h3 className="font-headline text-3xl font-extrabold text-[#F5F5F5]">
              THANK YOU, {name.split(' ')[0].toUpperCase()}!
            </h3>
            <p className="text-sm text-[#A7A9AC] max-w-md mx-auto leading-relaxed">
              Your free visit pass for <span className="text-[#F5F5F5] font-semibold">{goal}</span> has been scheduled for the <span className="text-[#F5F5F5] font-semibold">{preferredTime}</span> slot.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1C1F22] border border-white/10 max-w-sm mx-auto text-xs text-[#A7A9AC] leading-relaxed">
            Our team at Lalpur will send a confirmation message on WhatsApp (+91 {phone}) within 2 hours.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={getWhatsAppLink(`Hi, I just submitted my free visit booking on your website for ${name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl font-mono text-xs uppercase tracking-wider bg-[#1C1F22] hover:bg-[#22252a] text-[#F5F5F5] border border-white/10 hover:border-[#D71920]/40 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#D71920]" />
              <span>Open in WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="py-3 px-4 rounded-xl font-mono text-xs uppercase text-[#A7A9AC] hover:text-[#F5F5F5] transition-colors cursor-pointer"
            >
              Book for a Friend
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
