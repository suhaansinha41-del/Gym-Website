import React, { useState } from 'react';
import { gymConfig } from '../data/gymConfig';
import { GymImage } from './GymImage';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { Layers, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const FacilityBento: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<typeof gymConfig.facilityZones[0] | null>(null);

  // Curated realistic dummy gym photography for each zone
  const zoneImages: Record<string, { src: string; fallback: string }> = {
    'training-floor': {
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    },
    'strength-zone': {
      src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    },
    'cardio-zone': {
      src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80',
    },
    'personal-coaching': {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80',
    },
    'functional-area': {
      src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
    },
    'recovery-space': {
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80',
    },
  };

  return (
    <section id="facility" className="py-20 lg:py-28 bg-[#111315] relative border-b border-white/10 overflow-hidden">
      {/* Subtle atmospheric rotating barbell mechanism in the background */}
      <AtmosphericEquipment type="barbell-plate" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
              LALPUR FACILITY TOUR
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              TAKE A LOOK INSIDE.
            </h2>
            <p className="text-base sm:text-lg text-[#A7A9AC]">
              Everything you need to train, recover and stay consistent. Hover over any zone to explore the gym in natural color.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#A7A9AC] bg-[#17191C] px-3.5 py-2 rounded-lg border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
            <span>4,500 SQ.FT. · AIR-CONDITIONED · LALPUR</span>
          </div>
        </div>

        {/* Asymmetric Bento Grid with Monochrome to Color Photo Interaction */}
        <div className="grid grid-cols-12 gap-5">
          {gymConfig.facilityZones.map((zone) => {
            const photo = zoneImages[zone.id] || {
              src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
              fallback: '',
            };

            return (
              <div
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className={`${zone.span} group relative rounded-2xl border border-white/10 hover:border-[#D71920]/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] shadow-lg hover:shadow-[0_15px_35px_rgba(215,25,32,0.15)] facility-card`}
                data-cursor="explore"
              >
                {/* Background Realistic Dummy Gym Photograph with B&W -> Color Hover */}
                <div className="absolute inset-0 z-0">
                  <GymImage
                    src={photo.src}
                    fallbackSrc={photo.fallback}
                    alt={zone.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full"
                  />
                </div>

                {/* Top header row */}
                <div className="relative z-10 flex items-center justify-between p-6 sm:p-7">
                  <span className="font-mono text-xs font-bold tracking-wider text-[#F5F5F5] bg-[#111315]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#D71920]/30 shadow-md">
                    {zone.tag}
                  </span>
                  <span className="font-mono text-[10px] text-[#A7A9AC] bg-[#111315]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                    TAP TO INSPECT
                  </span>
                </div>

                {/* Bottom Content with Protected Dark Gradient */}
                <div className="relative z-10 p-6 sm:p-7 space-y-3 bg-gradient-to-t from-[#111315] via-[#111315]/90 to-transparent pt-12">
                  <div>
                    <h3 className="font-headline text-2xl font-extrabold text-[#F5F5F5] group-hover:text-white transition-colors">
                      {zone.title}
                    </h3>
                    <div className="text-xs font-mono text-[#A7A9AC] font-semibold mt-0.5">
                      {zone.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed max-w-xl">
                    {zone.description}
                  </p>

                  {/* Bottom specs preview */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {zone.features.slice(0, 2).map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="font-mono text-[11px] text-[#F5F5F5] bg-[#1C1F22]/90 backdrop-blur-xs px-2.5 py-0.5 rounded border border-white/10"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-[11px] text-[#D71920] flex items-center gap-1 font-semibold">
                      View Equipment
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-depth Equipment & Zone Details */}
        {selectedZone && (
          <div
            className="fixed inset-0 z-50 bg-[#111315]/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedZone(null)}
          >
            <div
              className="bg-[#17191C] border border-white/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
                    ZONE SPECIFICATION · RANCHI
                  </span>
                  <h4 className="font-headline text-2xl font-extrabold text-[#F5F5F5]">
                    {selectedZone.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedZone(null)}
                  className="p-2 text-[#A7A9AC] hover:text-[#F5F5F5] hover:bg-white/5 rounded-full cursor-pointer transition-colors"
                  aria-label="Close"
                  data-cursor="click"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-[#A7A9AC] leading-relaxed">
                {selectedZone.description}
              </p>

              <div>
                <h5 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#D71920]" />
                  EQUIPMENT INSTALLED IN THIS ZONE
                </h5>
                <div className="space-y-2">
                  {selectedZone.equipment.map((eq, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#1C1F22] border border-white/10 flex items-center gap-2.5 text-xs text-[#F5F5F5]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedZone(null)}
                  className="w-full py-3.5 rounded font-mono text-xs uppercase font-bold tracking-wider bg-[#1C1F22] hover:bg-[#22252a] text-[#F5F5F5] border border-white/10 transition-colors cursor-pointer"
                  data-cursor="click"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
