import React, { useState } from 'react';
import { gymConfig } from '../data/gymConfig';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredReviews = filter === 'all'
    ? gymConfig.testimonials
    : gymConfig.testimonials.filter((t) => t.program.toLowerCase().includes(filter));

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#111315] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
              LOCAL RANCHI COMMUNITY
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              WHAT OUR MEMBERS SAY.
            </h2>
            <p className="text-base sm:text-lg text-[#A7A9AC]">
              Real feedback from working professionals, students, and beginners training at our Lalpur facility.
            </p>
          </div>

          {/* Google Review Badge */}
          <div className="p-4 rounded-xl bg-[#17191C] border border-white/10 flex items-center gap-4 shrink-0 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-headline font-black text-lg text-[#F5F5F5]">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#D71920]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D71920]" />
                ))}
                <span className="font-headline font-bold text-sm text-[#F5F5F5] ml-1">
                  {gymConfig.brand.googleRating}
                </span>
              </div>
              <div className="font-mono text-[11px] text-[#A7A9AC] mt-0.5">
                Google Reviews ({gymConfig.brand.reviewCount}+ verified)
              </div>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'fat loss', label: 'Fat Loss' },
            { id: 'beginner', label: 'Beginners' },
            { id: 'strength', label: 'Strength & Muscle' },
            { id: 'personal training', label: 'Personal Coaching' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                filter === tab.id
                  ? 'bg-[#1C1F22] border-[#D71920] text-[#D71920] font-semibold shadow-sm'
                  : 'bg-[#17191C] border-white/10 text-[#A7A9AC] hover:text-[#F5F5F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#17191C] border border-white/10 hover:border-white/20 hover:bg-[#1C1F22] transition-all flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3">
                {/* Stars and Verification */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D71920]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D71920]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#777B80] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
                    Verified Local Member
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#F5F5F5] leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1C1F22] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#D71920]">
                    {rev.avatarInitials}
                  </div>
                  <div>
                    <div className="font-bold text-[#F5F5F5]">{rev.author}</div>
                    <div className="font-mono text-[11px] text-[#777B80]">
                      {rev.location} · {rev.program}
                    </div>
                  </div>
                </div>
                <div className="font-mono text-[11px] text-[#777B80]">{rev.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Transparency Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-[#17191C] border border-white/10">
          <div className="text-xs font-mono text-[#777B80] text-center sm:text-left">
            <span>Demo reviews styled after verified Google ratings. Easily replaceable with live Google Places review feed.</span>
          </div>

          <a
            href={gymConfig.brand.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-[#D71920] hover:underline flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>VIEW ALL ON GOOGLE MAPS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
