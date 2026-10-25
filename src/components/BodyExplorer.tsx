import React, { useState } from 'react';
import { Target, Dumbbell, ShieldAlert, Sparkles } from 'lucide-react';
import { GymImage } from './GymImage';

type MuscleGroup = 'chest' | 'shoulders' | 'back' | 'arms' | 'core' | 'legs';

interface MuscleData {
  id: MuscleGroup;
  title: string;
  tagline: string;
  focus: string;
  exercises: string[];
  equipmentUsed: string;
  coachingTip: string;
  photoUrl: string;
  svgHighlightCoords: { cx: number; cy: number; r: number }[];
}

export const BodyExplorer: React.FC = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup>('chest');

  const muscleInfo: Record<MuscleGroup, MuscleData> = {
    chest: {
      id: 'chest',
      title: 'CHEST (PECTORALS)',
      tagline: 'Upper body pushing strength & firm chest development',
      focus: 'Strength & Muscle Building',
      exercises: ['Barbell Flat Bench Press', 'Incline Dumbbell Press', 'Weighted Dips / Push-ups'],
      equipmentUsed: 'Olympic Barbell, Adjustable Incline Bench, Cable Tower',
      coachingTip: 'Keep your shoulder blades pulled back and plant both feet flat on the floor. Lower the weight under control.',
      photoUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
      svgHighlightCoords: [
        { cx: 135, cy: 140, r: 24 },
        { cx: 165, cy: 140, r: 24 },
      ],
    },
    shoulders: {
      id: 'shoulders',
      title: 'SHOULDERS (DELTOIDS)',
      tagline: 'Broad posture, shoulder health & overhead pressing power',
      focus: 'Broad Shoulders & Posture Alignment',
      exercises: ['Overhead Dumbbell / Barbell Press', 'Dumbbell Lateral Raises', 'Cable Face Pulls'],
      equipmentUsed: 'Power Rack, Urethane Dumbbells, Dual Cable Pulleys',
      coachingTip: 'Lead lateral raises with your elbows rather than wrists to keep tension directly on your shoulders.',
      photoUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
      svgHighlightCoords: [
        { cx: 104, cy: 125, r: 18 },
        { cx: 196, cy: 125, r: 18 },
      ],
    },
    back: {
      id: 'back',
      title: 'BACK (LATS & RHOMBOIDS)',
      tagline: 'Upright posture, desk-job relief & solid pulling power',
      focus: 'V-Taper Width & Desk Posture Relief',
      exercises: ['Lat Pulldowns', 'Bent-Over Barbell Rows', 'Chest-Supported Cable Rows'],
      equipmentUsed: 'Lat Pulldown Machine, Olympic Barbell, Cable Row Station',
      coachingTip: 'Pull through your elbows and squeeze your shoulder blades together. Avoid jerking your lower back.',
      photoUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80',
      svgHighlightCoords: [
        { cx: 128, cy: 165, r: 22 },
        { cx: 172, cy: 165, r: 22 },
      ],
    },
    arms: {
      id: 'arms',
      title: 'ARMS (BICEPS & TRICEPS)',
      tagline: 'Arm strength, elbow joint support & everyday grip',
      focus: 'Muscle Tone & Firm Lockout Strength',
      exercises: ['Incline Dumbbell Bicep Curls', 'Tricep Rope Pushdowns', 'Close-Grip Press'],
      equipmentUsed: 'EZ-Curl Bar, Commercial Cable Tower, Dumbbells',
      coachingTip: 'Keep your elbows fixed in place during curls. Avoid swinging your body to cheat the weight.',
      photoUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
      svgHighlightCoords: [
        { cx: 90, cy: 170, r: 16 },
        { cx: 210, cy: 170, r: 16 },
      ],
    },
    core: {
      id: 'core',
      title: 'CORE & MIDSECTION',
      tagline: 'Lower back protection, firm abdomen & balance',
      focus: 'Spine Support & Flat Stomach Toning',
      exercises: ['Hanging Knee Raises', 'Cable Woodchoppers', 'Planks with Squeeze'],
      equipmentUsed: 'Captain’s Chair, Cable Tower, Medicine Balls',
      coachingTip: 'Tighten your midsection like preparing for a jump. Controlled form always produces better results than speed.',
      photoUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      svgHighlightCoords: [{ cx: 150, cy: 195, r: 24 }],
    },
    legs: {
      id: 'legs',
      title: 'LEGS (QUADS, HAMSTRINGS & GLUTES)',
      tagline: 'Full body calorie burner, knee durability & athletic strength',
      focus: 'Lower Body Power & Fat Loss Accelerator',
      exercises: ['Barbell Squats', 'Romanian Deadlifts (RDL)', 'Leg Press & Walking Lunges'],
      equipmentUsed: 'Power Cages, 45-degree Leg Press, Dumbbells',
      coachingTip: 'Push your knees out in line with your toes and drive through your midfoot. Stand tall at the top.',
      photoUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80',
      svgHighlightCoords: [
        { cx: 130, cy: 280, r: 32 },
        { cx: 170, cy: 280, r: 32 },
        { cx: 130, cy: 360, r: 22 },
        { cx: 170, cy: 360, r: 22 },
      ],
    },
  };

  const current = muscleInfo[selectedMuscle];

  return (
    <section id="body-explorer" className="py-20 lg:py-28 bg-[#111315] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
            ANATOMICAL PRECISION · NO GUESSWORK
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
            UNDERSTAND YOUR BODY. <br />
            <span className="text-[#A7A9AC]">TRAIN WITH PURPOSE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A9AC]">
            Tap on any muscle group to explore how we program exercises and form cues at our Lalpur gym.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#17191C] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle red glow background */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#D71920]/5 rounded-full blur-[140px] pointer-events-none" />

          {/* Left Column: Interactive Silhouette (PRESERVED EXACTLY AS REQUIRED) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="text-xs font-mono text-[#777B80] mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-ping" />
              INTERACTIVE ANATOMY MAP
            </div>

            <div className="relative w-72 h-[420px] flex items-center justify-center bg-[#0D0F10] rounded-xl border border-white/10 p-4 shadow-inner">
              {/* Silhouette SVG */}
              <svg
                viewBox="0 0 300 440"
                className="w-full h-full select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Human Athletic Outline */}
                {/* Head */}
                <circle cx="150" cy="55" r="26" fill="#1C1F22" stroke="#333333" strokeWidth="1.5" />
                {/* Neck & Traps */}
                <path d="M136 78 L164 78 L180 96 L120 96 Z" fill="#22252a" />
                {/* Torso & Shoulders */}
                <path
                  d="M110 102 C100 110 85 135 80 180 C78 200 90 220 96 220 C102 220 106 185 110 170 L115 220 L130 240 L170 240 L185 220 L190 170 C194 185 198 220 204 220 C210 220 222 200 220 180 C215 135 200 110 190 102 Z"
                  fill="#17191C"
                  stroke="#2d2d2d"
                  strokeWidth="1.5"
                />
                {/* Hips & Legs */}
                <path
                  d="M130 240 L170 240 L185 320 L178 410 L156 410 L152 320 L148 320 L144 410 L122 410 L115 320 Z"
                  fill="#17191C"
                  stroke="#2d2d2d"
                  strokeWidth="1.5"
                />

                {/* Interactive Muscle Group Click Areas */}
                {/* Shoulders */}
                <circle
                  cx="104"
                  cy="125"
                  r="18"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'shoulders'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('shoulders')}
                />
                <circle
                  cx="196"
                  cy="125"
                  r="18"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'shoulders'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('shoulders')}
                />

                {/* Chest */}
                <rect
                  x="120"
                  y="120"
                  width="60"
                  height="36"
                  rx="6"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'chest'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('chest')}
                />

                {/* Back / Upper Lats */}
                <rect
                  x="115"
                  y="158"
                  width="70"
                  height="22"
                  rx="4"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'back'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('back')}
                />

                {/* Core */}
                <rect
                  x="132"
                  y="182"
                  width="36"
                  height="45"
                  rx="6"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'core'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('core')}
                />

                {/* Arms */}
                <rect
                  x="80"
                  y="150"
                  width="20"
                  height="45"
                  rx="6"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'arms'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('arms')}
                />
                <rect
                  x="200"
                  y="150"
                  width="20"
                  height="45"
                  rx="6"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'arms'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('arms')}
                />

                {/* Legs (Quads & Calves) */}
                <rect
                  x="118"
                  y="245"
                  width="28"
                  height="75"
                  rx="8"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'legs'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('legs')}
                />
                <rect
                  x="154"
                  y="245"
                  width="28"
                  height="75"
                  rx="8"
                  data-cursor="select"
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMuscle === 'legs'
                      ? 'fill-[#D71920]/40 stroke-[#D71920] stroke-2'
                      : 'fill-[#D71920]/10 hover:fill-[#D71920]/25 stroke-white/10'
                  }`}
                  onClick={() => setSelectedMuscle('legs')}
                />

                {/* Active Highlight Marker Ring */}
                {current.svgHighlightCoords.map((coord, idx) => (
                  <circle
                    key={idx}
                    cx={coord.cx}
                    cy={coord.cy}
                    r={coord.r}
                    fill="none"
                    stroke="#D71920"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    className="animate-spin origin-center"
                  />
                ))}
              </svg>
            </div>

            {/* Quick Segment Buttons below silhouette */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4 max-w-xs">
              {(Object.keys(muscleInfo) as MuscleGroup[]).map((group) => (
                <button
                  key={group}
                  onClick={() => setSelectedMuscle(group)}
                  className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-colors cursor-pointer ${
                    selectedMuscle === group
                      ? 'bg-[#D71920] text-white font-bold shadow-[0_0_12px_rgba(215,25,32,0.4)]'
                      : 'bg-[#1C1F22] text-[#A7A9AC] hover:text-[#F5F5F5]'
                  }`}
                  data-cursor="click"
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: In-Depth Educational Details + Realistic Training Photo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
                    MUSCLE FOCUS
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-extrabold text-[#F5F5F5]">
                  {current.title}
                </h3>
                <p className="text-sm text-[#A7A9AC] mt-1">{current.tagline}</p>
              </div>

              {/* Realistic dummy training photo illustrating the exercise with B&W -> Color hover */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-lg">
                <GymImage
                  src={current.photoUrl}
                  alt={`${current.title} training`}
                  containerClassName="w-full h-full"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Focus Metric */}
            <div className="p-4 rounded-xl bg-[#1C1F22] border border-white/10 flex items-start gap-3">
              <Target className="w-5 h-5 text-[#D71920] shrink-0 mt-0.5" />
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#A7A9AC]">
                  TRAINING FOCUS AT NOIR.FIT
                </div>
                <div className="text-sm font-semibold text-[#F5F5F5]">{current.focus}</div>
              </div>
            </div>

            {/* Programmed Exercises */}
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#A7A9AC] mb-3 flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 text-[#D71920]" />
                CORE EXERCISES WE COACH FOR THIS MUSCLE
              </div>
              <div className="space-y-2">
                {current.exercises.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#1C1F22] border border-white/10 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#F5F5F5]">{ex}</span>
                    <span className="font-mono text-[11px] text-[#D71920]">Form Monitored</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coaching Tip */}
            <div className="p-4 rounded-xl bg-[#1C1F22] border-l-2 border-[#D71920] space-y-1">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#F5F5F5] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
                HEAD COACH FORM TIP
              </div>
              <p className="text-xs text-[#A7A9AC] leading-relaxed italic">
                "{current.coachingTip}"
              </p>
            </div>

            {/* Education Disclaimer */}
            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-[#777B80]">
              <ShieldAlert className="w-3.5 h-3.5 text-[#A7A9AC] shrink-0" />
              <span>
                Educational guide only. Full movement screening conducted during your free in-person trial in Lalpur.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
