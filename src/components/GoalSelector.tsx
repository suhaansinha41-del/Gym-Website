import React, { useState } from 'react';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { Flame, BicepsFlexed, Zap, HeartPulse, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

interface GoalSelectorProps {
  onSelectGoal: (goalName: string) => void;
}

export const GoalSelector: React.FC<GoalSelectorProps> = ({ onSelectGoal }) => {
  const [selectedGoalId, setSelectedGoalId] = useState<string>('fat-loss');

  const goals = [
    {
      id: 'fat-loss',
      title: 'LOSE FAT',
      subtitle: 'Shed excess belly fat while keeping muscle firm and toned',
      icon: Flame,
      targetTime: '8 – 12 Weeks',
      weeklyFrequency: '4 Sessions / Week',
      recommendedComponents: [
        'Compound Strength Training (Protects lean muscle)',
        'Low-Impact Cardio (Burns fat without joint ache)',
        'Indian Diet Protein & Calorie Deficit Plan',
        'Bi-weekly Body Fat & Circumference Tracking',
      ],
      weeklySchedule: 'Mon: Lower Body + Cardio · Tue: Upper Body · Thu: Full Body · Fri: Core & Intervals',
      ctaText: 'START FAT LOSS JOURNEY →',
      accentColor: '#D71920',
    },
    {
      id: 'build-muscle',
      title: 'BUILD MUSCLE',
      subtitle: 'Build athletic shape, broader shoulders, and muscle density',
      icon: BicepsFlexed,
      targetTime: '12 – 16 Weeks',
      weeklyFrequency: '4 – 5 Sessions / Week',
      recommendedComponents: [
        'Progressive Overload on Barbell & Dumbbell Lifts',
        'Targeted Hypertrophy for Chest, Back & Arms',
        'Calorie Surplus & Home-Cooked Protein Targets',
        'Foam Rolling & Sleep Recovery Guidance',
      ],
      weeklySchedule: 'Mon: Push (Chest/Shoulders) · Tue: Pull (Back/Biceps) · Thu: Legs · Fri: Arms & Shoulders',
      ctaText: 'EXPLORE MUSCLE BUILDING →',
      accentColor: '#D71920',
    },
    {
      id: 'get-stronger',
      title: 'GET STRONGER',
      subtitle: 'Build raw power, dense bones, and lifting confidence',
      icon: Zap,
      targetTime: '10 – 14 Weeks',
      weeklyFrequency: '3 – 4 Sessions / Week',
      recommendedComponents: [
        'Big 4 Fundamentals: Squat, Bench, Deadlift, Press',
        'Controlled Tempo & Central Nervous System Work',
        'Joint & Tendon Durability Exercises',
        'Experienced Floor Spotter for Maximum Safety',
      ],
      weeklySchedule: 'Mon: Heavy Squat + Accessories · Wed: Bench Press Focus · Fri: Deadlift & Back Power',
      ctaText: 'EXPLORE STRENGTH PLAN →',
      accentColor: '#D71920',
    },
    {
      id: 'improve-fitness',
      title: 'IMPROVE FITNESS',
      subtitle: 'Boost daily stamina, heart endurance, energy and posture',
      icon: HeartPulse,
      targetTime: '6 – 8 Weeks Foundation',
      weeklyFrequency: '3 – 4 Sessions / Week',
      recommendedComponents: [
        'Dynamic Kettlebell & Functional Turf Circuits',
        'Cardiovascular Conditioning (Rowers, Curved Treadmills)',
        'Daily Mobility Drills to Relieve Stiff Neck & Back',
        'Core Stability & Balance Drills',
      ],
      weeklySchedule: 'Mon: Functional Circuit · Wed: Cardio Conditioning · Fri: Full-body Mobility & Core',
      ctaText: 'START FITNESS JOURNEY →',
      accentColor: '#D71920',
    },
  ];

  const currentGoal = goals.find((g) => g.id === selectedGoalId) || goals[0];

  return (
    <section id="goal-selector" className="py-20 lg:py-28 bg-[#0D0F10] relative border-b border-white/10 overflow-hidden">
      {/* Subtle atmospheric treadmill wheel in background */}
      <AtmosphericEquipment type="treadmill-wheel" position="center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
            CHOOSE YOUR DIRECTION · RANCHI
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
            WHAT’S YOUR GOAL?
          </h2>
          <p className="text-base sm:text-lg text-[#A7A9AC]">
            Choose your goal and discover where to start. We create a structured training plan around your starting fitness level.
          </p>
        </div>

        {/* 4 Interactive Goal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoalId === goal.id;

            return (
              <div
                key={goal.id}
                onClick={() => setSelectedGoalId(goal.id)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'bg-[#1C1F22] border-[#D71920] shadow-[0_0_30px_rgba(215,25,32,0.25)] -translate-y-1'
                    : 'bg-[#17191C] border-white/10 hover:border-white/20 hover:bg-[#1C1F22]'
                }`}
                data-cursor="click"
              >
                {/* Active top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isSelected ? 'bg-[#D71920]' : 'bg-transparent group-hover:bg-white/10'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#D71920] text-white shadow-[0_0_15px_rgba(215,25,32,0.4)]'
                          : 'bg-[#17191C] text-[#A7A9AC] group-hover:text-[#F5F5F5]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <span className="font-mono text-[10px] uppercase font-bold text-[#D71920] bg-[#D71920]/10 px-2 py-0.5 rounded-full border border-[#D71920]/30">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <h3 className="font-headline text-xl font-extrabold text-[#F5F5F5] mb-1">
                    {goal.title}
                  </h3>
                  <p className="text-xs text-[#A7A9AC] leading-relaxed">
                    {goal.subtitle}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#777B80]">{goal.targetTime}</span>
                  <span
                    className={`font-semibold flex items-center gap-1 ${
                      isSelected ? 'text-[#D71920]' : 'text-[#A7A9AC] group-hover:text-[#F5F5F5]'
                    }`}
                  >
                    Select Plan
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Recommendation Panel */}
        <div className="rounded-2xl bg-[#17191C] border border-[#D71920]/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl animate-in fade-in duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D71920]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Recommendation Overview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
                  RECOMMENDED ROADMAP FOR {currentGoal.title}
                </span>
              </div>

              <h4 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#F5F5F5]">
                Your {currentGoal.title} Training Plan
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {currentGoal.recommendedComponents.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#1C1F22] border border-white/10 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F5F5F5] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Weekly schedule preview */}
              <div className="p-4 rounded-xl bg-[#111315] border border-white/10 flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase text-[#A7A9AC] mb-1">
                    SAMPLE WEEKLY SCHEDULE ({currentGoal.weeklyFrequency})
                  </div>
                  <div className="text-xs text-[#F5F5F5] leading-relaxed">
                    {currentGoal.weeklySchedule}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Call To Action Box */}
            <div className="lg:col-span-5 bg-[#1C1F22] p-6 sm:p-7 rounded-xl border border-white/10 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#A7A9AC]">
                  READY TO PUT THIS IN MOTION?
                </span>
                <h5 className="font-headline text-xl font-bold text-[#F5F5F5]">
                  Get A Free In-Person Assessment in Ranchi
                </h5>
                <p className="text-xs text-[#A7A9AC] leading-relaxed">
                  Come by our Lalpur facility. One of our head coaches will assess your movement, discuss your daily schedule and meals, and set you up with this plan.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onSelectGoal(currentGoal.title)}
                  className="w-full py-4 px-5 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#D71920] hover:bg-[#FF2525] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(215,25,32,0.35)] active:scale-[0.99]"
                  data-cursor="click"
                >
                  <span>{currentGoal.ctaText}</span>
                </button>
                <div className="text-center font-mono text-[11px] text-[#777B80]">
                  Free 1-Day Trial Session Included · Zero Pressure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
