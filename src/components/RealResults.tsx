import React, { useState, useRef, useCallback } from 'react';
import { gymConfig } from '../data/gymConfig';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { ArrowLeftRight, TrendingDown, BicepsFlexed, Award, ShieldCheck } from 'lucide-react';
import rahulBefore from '../assets/images/transformations/rahul-before.jpg';
import rahulAfter from '../assets/images/transformations/rahul-after.jpg';
import poojaBefore from '../assets/images/transformations/pooja-before.jpg';
import poojaAfter from '../assets/images/transformations/pooja-after.jpg';
import vikramBefore from '../assets/images/transformations/vikram-before.jpg';
import vikramAfter from '../assets/images/transformations/vikram-after.jpg';

export const RealResults: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100%
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const activeCase = gymConfig.beforeAfterDemos[activeCaseIndex];

  // Curated realistic fitness progress imagery (consistent before/after pairs of the same person)
  const caseImages: Record<string, { before: string; after: string }> = {
    'case-1': {
      before: rahulBefore,
      after: rahulAfter,
    },
    'case-2': {
      before: poojaBefore,
      after: poojaAfter,
    },
    'case-3': {
      before: vikramBefore,
      after: vikramAfter,
    },
  };

  const currentPhotos = caseImages[activeCase.id] || caseImages['case-1'];

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onTouchStart = () => {
    isDragging.current = true;
  };

  return (
    <section id="results" className="py-20 lg:py-28 bg-[#111315] relative border-b border-white/10 overflow-hidden">
      {/* Atmospheric progress pulse in background */}
      <AtmosphericEquipment type="progress-pulse" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A7A9AC] bg-[#D71920]/10 px-3 py-1 rounded-full border border-[#D71920]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
              <span>DEMO TRANSFORMATION · ILLUSTRATIVE RESULT</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              REAL PEOPLE. <br />
              <span className="text-[#A7A9AC]">REAL PROGRESS.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A7A9AC]">
              Consistency, sound nutrition and guided workouts bring measurable changes. Drag the interactive slider left and right to inspect the transformation.
            </p>
          </div>

          <div className="font-mono text-xs text-[#A7A9AC] bg-[#17191C] px-3.5 py-2 rounded-lg border border-white/10 w-fit">
            <span>RANCHI MEMBER ROADMAPS</span>
          </div>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {gymConfig.beforeAfterDemos.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                activeCaseIndex === idx
                  ? 'bg-[#1C1F22] border-[#D71920] text-[#D71920] font-bold shadow-[0_0_15px_rgba(215,25,32,0.2)]'
                  : 'bg-[#17191C] border-white/10 text-[#A7A9AC] hover:text-[#F5F5F5] hover:bg-[#1C1F22]'
              }`}
              data-cursor="click"
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Interactive Slider Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#17191C] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
          {/* Left: The Interactive Before/After Visual Frame */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative w-full h-[420px] sm:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 bg-[#0D0F10] group/slider"
              data-cursor="drag"
              onMouseDown={onMouseDown}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={(e) => {
                if (isDragging.current) handlePointerMove(e.clientX);
              }}
              onTouchStart={onTouchStart}
              onTouchEnd={() => (isDragging.current = false)}
              onTouchMove={(e) => {
                if (isDragging.current) handlePointerMove(e.touches[0].clientX);
              }}
            >
              {/* Premium Dark Studio Backdrop for Contained Aspect Ratio */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-black pointer-events-none" />

              {/* "AFTER" Layer (Full size background) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={currentPhotos.after}
                  alt={`After ${activeCase.title}`}
                  className="w-full h-full object-contain object-center grayscale contrast-105 brightness-95 transition-all duration-700 group-hover/slider:grayscale-0 group-hover/slider:contrast-100 group-hover/slider:brightness-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 z-10">
                  <span className="font-mono text-xs uppercase px-3 py-1.5 rounded-full bg-[#D71920] text-white font-bold shadow-md">
                    AFTER ({activeCase.duration})
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 z-10 text-right">
                  <span className="font-mono text-base text-[#D71920] block font-extrabold">
                    {activeCase.stats.weightChange}
                  </span>
                  <span className="font-mono text-xs text-[#F5F5F5]">
                    {activeCase.stats.bodyFat}
                  </span>
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={currentPhotos.before}
                  alt={`Before ${activeCase.title}`}
                  className="w-full h-full object-contain object-center grayscale contrast-110 brightness-85 transition-all duration-700 group-hover/slider:grayscale-0 group-hover/slider:contrast-100 group-hover/slider:brightness-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-xs uppercase px-3 py-1.5 rounded-full bg-[#1C1F22]/90 text-[#F5F5F5] font-semibold border border-white/10 backdrop-blur-xs">
                    BEFORE (DAY 01)
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                  <span className="font-mono text-xs text-[#A7A9AC] block">
                    Starting Baseline
                  </span>
                  <span className="font-mono text-xs text-[#F5F5F5]">
                    Initial Screening
                  </span>
                </div>
              </div>

              {/* Draggable Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#D71920] pointer-events-none shadow-[0_0_20px_#D71920]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111315] border-2 border-[#D71920] flex items-center justify-center shadow-2xl">
                  <ArrowLeftRight className="w-4 h-4 text-[#D71920]" />
                </div>
              </div>

              {/* Slider instruction hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-wider text-[#F5F5F5] bg-[#111315]/85 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm pointer-events-none">
                DRAG SLIDER TO REVEAL
              </div>
            </div>
          </div>

          {/* Right: Case Details & Key Metric Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC] block mb-1">
                SAMPLE PROGRESS ROADMAP
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#F5F5F5]">
                {activeCase.member}, Age {activeCase.age}
              </h3>
              <p className="text-xs font-mono text-[#A7A9AC] mt-0.5">
                Training Plan: {activeCase.programUsed}
              </p>
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3.5 rounded-xl bg-[#1C1F22] border border-white/10 space-y-1 text-center">
                <span className="font-mono text-[10px] uppercase text-[#777B80] block">CHANGE</span>
                <span className="font-headline text-lg sm:text-xl font-bold text-[#D71920] block">
                  {activeCase.stats.weightChange}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C1F22] border border-white/10 space-y-1 text-center">
                <span className="font-mono text-[10px] uppercase text-[#777B80] block">BODY FAT</span>
                <span className="font-headline text-xs sm:text-sm font-bold text-[#F5F5F5] block pt-1">
                  {activeCase.stats.bodyFat}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C1F22] border border-white/10 space-y-1 text-center">
                <span className="font-mono text-[10px] uppercase text-[#777B80] block">PRIMARY WIN</span>
                <span className="font-headline text-xs sm:text-sm font-bold text-[#F5F5F5] block pt-1">
                  {activeCase.stats.primaryGain}
                </span>
              </div>
            </div>

            {/* Story */}
            <div className="p-4 rounded-xl bg-[#1C1F22] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#A7A9AC]">
                <Award className="w-4 h-4 text-[#D71920]" />
                TRAINING FOCUS & HABITS
              </div>
              <p className="text-xs sm:text-sm text-[#A7A9AC] leading-relaxed">
                "{activeCase.story}"
              </p>
            </div>

            {/* Demo transparency disclaimer */}
            <div className="text-[11px] font-mono text-[#777B80] leading-snug p-3 rounded-lg bg-[#111315] border border-white/10">
              Demonstration showcase for prospective gym owners in Ranchi. Replaceable with verified before/after member pictures from your actual training facility.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
