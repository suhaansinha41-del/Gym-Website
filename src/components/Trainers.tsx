import React, { useState } from 'react';
import { gymConfig, getWhatsAppLink } from '../data/gymConfig';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { ShieldCheck, Award, MessageSquare, ChevronRight, X } from 'lucide-react';
import arjunPhoto from '../assets/images/trainers/arjun.jpg';
import priyaPhoto from '../assets/images/trainers/priya.jpg';
import rohitPhoto from '../assets/images/trainers/rohit.jpg';

export const Trainers: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof gymConfig.trainers[0] | null>(null);

  // Directly map trainer IDs to the bundled image assets
  const trainerPhotos: Record<string, string> = {
    'arjun-kumar': arjunPhoto,
    'priya-sharma': priyaPhoto,
    'rohit-singh': rohitPhoto,
  };

  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#0D0F10] relative border-b border-white/10 overflow-hidden">
      {/* Subtle atmospheric coaching radar in background */}
      <AtmosphericEquipment type="coaching-silhouette" position="center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
              CERTIFIED COACHING TEAM · RANCHI
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              MEET YOUR TRAINERS.
            </h2>
            <p className="text-base sm:text-lg text-[#A7A9AC]">
              No ego, no guesswork. Our certified coaches are always on the floor to teach proper form and keep you on track.
            </p>
          </div>

          <div className="font-mono text-xs text-[#A7A9AC] bg-[#17191C] px-3.5 py-2 rounded-lg border border-white/10 w-fit">
            <span>CERTIFIED PERSONAL COACHES</span>
          </div>
        </div>

        {/* 3 Premium Trainer Cards with Monochrome to Natural Color Photo Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gymConfig.trainers.map((coach) => {
            const photoSrc = trainerPhotos[coach.id] || arjunPhoto;

            return (
              <div
                key={coach.id}
                className="group relative rounded-2xl bg-[#17191C] border border-white/10 hover:border-[#D71920]/50 hover:bg-[#1C1F22] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(215,25,32,0.15)] cursor-pointer"
                data-cursor="explore"
                onClick={() => setSelectedTrainer(coach)}
              >
                {/* Coach Portrait Image Container with B&W -> Color Interaction */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                  <img
                    src={photoSrc}
                    alt={`${coach.name} coach`}
                    style={{ objectPosition: 'center 15%' }}
                    className="w-full h-full object-cover grayscale contrast-[1.08] brightness-85 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-105 group-hover:scale-[1.04]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Scrim Vignette Overlay (Guarantees Text Readability) */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#17191C] via-[#17191C]/50 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Subtle Athletic Red Sheen on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_40px_rgba(215,25,32,0.12)]" />

                  {/* Top experience tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-white bg-[#D71920] px-3 py-1 rounded-full shadow-md">
                      {coach.experience}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-mono text-[10px] text-[#A7A9AC] bg-[#111315]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      HOVER FOR COLOR
                    </span>
                  </div>
                </div>

                {/* Profile Information & Specialties */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-headline text-2xl font-extrabold text-[#F5F5F5] group-hover:text-white transition-colors">
                      {coach.name}
                    </h3>
                    <div className="text-xs font-mono text-[#A7A9AC] font-semibold mt-0.5">
                      {coach.role}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed line-clamp-2">
                    {coach.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {coach.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[11px] text-[#F5F5F5] bg-[#1C1F22] px-2.5 py-1 rounded border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D71920] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      VIEW FULL PROFILE
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>

                    <a
                      href={getWhatsAppLink(`Hi, I would like to book a coaching assessment with ${coach.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-lg bg-[#1C1F22] hover:bg-[#D71920] hover:text-white text-[#A7A9AC] transition-colors border border-white/10 cursor-pointer shadow-sm"
                      title={`Chat about ${coach.name}`}
                      data-cursor="click"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Full Trainer Bio & Certifications */}
        {selectedTrainer && (
          <div
            className="fixed inset-0 z-50 bg-[#111315]/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedTrainer(null)}
          >
            <div
              className="bg-[#17191C] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
                    COACH PROFILE · NOIR.FIT RANCHI
                  </span>
                  <h4 className="font-headline text-2xl font-extrabold text-[#F5F5F5]">
                    {selectedTrainer.name}
                  </h4>
                  <div className="text-xs font-mono text-[#A7A9AC]">
                    {selectedTrainer.role} · {selectedTrainer.experience}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="p-2 text-[#A7A9AC] hover:text-[#F5F5F5] hover:bg-white/5 rounded-full cursor-pointer"
                  data-cursor="click"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-[#A7A9AC] leading-relaxed">
                  {selectedTrainer.bio}
                </p>

                <div className="p-4 rounded-xl bg-[#1C1F22] border border-white/10 space-y-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#A7A9AC] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#D71920]" />
                    CLIENT HIGHLIGHT
                  </div>
                  <p className="text-xs text-[#F5F5F5] leading-relaxed">
                    {selectedTrainer.clientHighlights}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs uppercase text-[#A7A9AC] mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
                    VERIFIED CREDENTIALS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrainer.certifications.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-mono text-xs text-[#F5F5F5] bg-[#1C1F22] px-3 py-1 rounded border border-white/10"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Hi, I'd like to book an intro PT session with Coach ${selectedTrainer.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D71920] text-white hover:bg-[#FF2525] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-[0_0_25px_rgba(215,25,32,0.35)]"
                  data-cursor="click"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>BOOK FREE CONSULTATION WITH COACH {selectedTrainer.name.split(' ')[0]} →</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
