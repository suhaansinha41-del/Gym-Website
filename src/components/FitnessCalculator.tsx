import React, { useState, useMemo } from 'react';
import { AtmosphericEquipment } from './AtmosphericEquipment';
import { Calculator, ArrowRight, ShieldCheck, Activity, Flame, Scale } from 'lucide-react';

interface FitnessCalculatorProps {
  onAssessmentClick: (calcData: { bmi: string; goal: string; calories: number }) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onAssessmentClick }) => {
  const [age, setAge] = useState<number>(27);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(74);
  const [activity, setActivity] = useState<'sedentary' | 'light' | 'moderate' | 'very'>('light');
  const [goal, setGoal] = useState<'fat-loss' | 'muscle-gain' | 'maintain' | 'fitness'>('fat-loss');

  // BMI calculation
  const calculations = useMemo(() => {
    const heightM = heightCm / 100;
    const bmiVal = weightKg / (heightM * heightM);
    const bmi = Number(bmiVal.toFixed(1));

    // Category
    let category = 'Normal Weight';
    let categoryColor = '#34D399';
    if (bmi < 18.5) {
      category = 'Underweight';
      categoryColor = '#60A5FA';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal Weight (Optimal)';
      categoryColor = '#34D399';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
      categoryColor = '#FBBF24';
    } else {
      category = 'Obese Range';
      categoryColor = '#F87171';
    }

    // Healthy weight range (WHO standard for 18.5 - 24.9 BMI)
    const minHealthyKg = Math.round(18.5 * heightM * heightM);
    const maxHealthyKg = Math.round(24.9 * heightM * heightM);

    // Basal Metabolic Rate (Mifflin - St Jeor)
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
    };
    const tdee = Math.round(bmr * activityMultipliers[activity]);

    // Target Calories based on Goal
    let targetCalories = tdee;
    if (goal === 'fat-loss') {
      targetCalories = Math.max(1400, Math.round(tdee - 450));
    } else if (goal === 'muscle-gain') {
      targetCalories = Math.round(tdee + 350);
    }

    // Recommended plan next step
    let nextStepText = '';
    if (goal === 'fat-loss') {
      nextStepText =
        'Focus on 3–4 days of compound strength training + 20 mins low-intensity post-lift cardio to preserve lean muscle while burning body fat.';
    } else if (goal === 'muscle-gain') {
      nextStepText =
        'Prioritize progressive overload on power movements (Squats, Presses, Rows) + 1.6g–2g protein per kg of bodyweight.';
    } else if (goal === 'maintain') {
      nextStepText =
        'Maintain balanced 3-day full body training with emphasis on joint mobility, core conditioning, and consistent meal timing.';
    } else {
      nextStepText =
        'Incorporate functional turf circuits, kettlebell complexes, and aerobic intervals for all-day energy and heart endurance.';
    }

    return {
      bmi,
      category,
      categoryColor,
      minHealthyKg,
      maxHealthyKg,
      tdee,
      targetCalories,
      nextStepText,
    };
  }, [age, gender, heightCm, weightKg, activity, goal]);

  return (
    <section id="bmi-calculator" className="py-20 lg:py-28 bg-[#0D0F10] relative border-b border-white/10 overflow-hidden">
      {/* Subtle atmospheric breathing ring in background */}
      <AtmosphericEquipment type="breathing-pulse" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#A7A9AC]">
            BODY METRICS ESTIMATOR
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
            KNOW YOUR NUMBERS.
          </h2>
          <p className="text-base sm:text-lg text-[#A7A9AC]">
            Calculate your BMI and estimated maintenance caloric energy in seconds. Use this as your baseline before stepping into the gym.
          </p>
        </div>

        {/* Two-Column Interactive Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#17191C] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Left Column: Form Inputs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-[#D71920]" />
                YOUR STATS
              </span>
              <span className="font-mono text-[11px] text-[#777B80]">METRIC UNITS</span>
            </div>

            {/* Gender Switch */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A7A9AC] mb-2">Gender</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    gender === 'male'
                      ? 'bg-[#D71920] text-white font-bold shadow-[0_0_15px_rgba(215,25,32,0.3)]'
                      : 'bg-[#1C1F22] text-[#A7A9AC] hover:text-[#F5F5F5] border border-white/10'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    gender === 'female'
                      ? 'bg-[#D71920] text-white font-bold shadow-[0_0_15px_rgba(215,25,32,0.3)]'
                      : 'bg-[#1C1F22] text-[#A7A9AC] hover:text-[#F5F5F5] border border-white/10'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-[#A7A9AC] uppercase">Age</span>
                <span className="text-[#F5F5F5] font-bold">{age} Years</span>
              </div>
              <input
                type="range"
                min="16"
                max="70"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-[#D71920] bg-[#1C1F22] h-2 rounded cursor-pointer"
              />
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-[#A7A9AC] uppercase">Height</span>
                <span className="text-[#F5F5F5] font-bold">
                  {heightCm} cm ({Math.floor(heightCm / 30.48)}'{Math.round((heightCm % 30.48) / 2.54)}")
                </span>
              </div>
              <input
                type="range"
                min="135"
                max="210"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-[#D71920] bg-[#1C1F22] h-2 rounded cursor-pointer"
              />
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-[#A7A9AC] uppercase">Weight</span>
                <span className="text-[#F5F5F5] font-bold">{weightKg} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="140"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#D71920] bg-[#1C1F22] h-2 rounded cursor-pointer"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A7A9AC] mb-2">
                Current Daily Activity
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'sedentary', label: 'Desk Job (Little exercise)' },
                  { id: 'light', label: 'Light (1-2 days/week)' },
                  { id: 'moderate', label: 'Moderate (3-4 days/week)' },
                  { id: 'very', label: 'Very Active (5+ days/week)' },
                ].map((act) => (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setActivity(act.id as any)}
                    className={`p-2.5 rounded text-left text-xs transition-all cursor-pointer border ${
                      activity === act.id
                        ? 'bg-[#1C1F22] border-[#D71920] text-[#F5F5F5]'
                        : 'bg-[#17191C] border-white/10 text-[#A7A9AC] hover:text-[#F5F5F5]'
                    }`}
                  >
                    <span className="font-semibold block">{act.id.toUpperCase()}</span>
                    <span className="text-[10px] text-[#777B80] leading-tight block">{act.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Goal */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A7A9AC] mb-2">
                Your Primary Fitness Goal
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'fat-loss', label: 'Fat Loss' },
                  { id: 'muscle-gain', label: 'Muscle Building' },
                  { id: 'maintain', label: 'Maintain Weight' },
                  { id: 'fitness', label: 'Improve Fitness' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id as any)}
                    className={`py-2 px-3 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                      goal === g.id
                        ? 'bg-[#D71920] text-white font-bold border-[#D71920] shadow-[0_0_12px_rgba(215,25,32,0.3)]'
                        : 'bg-[#1C1F22] text-[#A7A9AC] hover:text-[#F5F5F5] border-white/10'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Results & Blueprint */}
          <div className="lg:col-span-6 bg-[#1C1F22] rounded-xl border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A7A9AC]">
                ESTIMATED RESULTS
              </span>
              <span className="font-mono text-[10px] text-[#777B80]">AI ESTIMATE MODEL</span>
            </div>

            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* BMI Card */}
              <div className="p-4 rounded-xl bg-[#17191C] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-[#A7A9AC] uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#D71920]" />
                  Body Mass Index
                </span>
                <div className="font-headline text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] tabular-nums">
                  {calculations.bmi}
                </div>
                <div
                  className="text-xs font-bold font-mono"
                  style={{ color: calculations.categoryColor }}
                >
                  {calculations.category}
                </div>
              </div>

              {/* Target Calories Card */}
              <div className="p-4 rounded-xl bg-[#17191C] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-[#A7A9AC] uppercase flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#D71920]" />
                  Target Calories
                </span>
                <div className="font-headline text-3xl sm:text-4xl font-extrabold text-[#D71920] tabular-nums">
                  {calculations.targetCalories}
                </div>
                <div className="text-[11px] font-mono text-[#A7A9AC]">
                  kcal / day (TDEE: {calculations.tdee})
                </div>
              </div>
            </div>

            {/* Healthy Weight Benchmark */}
            <div className="p-4 rounded-xl bg-[#17191C] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Scale className="w-4 h-4 text-[#D71920]" />
                <div>
                  <div className="text-xs font-mono uppercase text-[#A7A9AC]">
                    HEALTHY WEIGHT RANGE
                  </div>
                  <div className="text-sm font-bold text-[#F5F5F5]">
                    {calculations.minHealthyKg} kg – {calculations.maxHealthyKg} kg
                  </div>
                </div>
              </div>
              <span className="font-mono text-[10px] text-[#777B80]">Standard WHO Reference</span>
            </div>

            {/* Next Step Recommendation */}
            <div className="p-5 rounded-xl bg-[#111315] border-l-2 border-[#D71920] space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A7A9AC]">
                YOUR RECOMMENDED NEXT STEP
              </span>
              <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed">
                {calculations.nextStepText}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                onAssessmentClick({
                  bmi: calculations.bmi.toString(),
                  goal: goal.replace('-', ' ').toUpperCase(),
                  calories: calculations.targetCalories,
                })
              }
              className="w-full py-4 px-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D71920] hover:bg-[#FF2525] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(215,25,32,0.35)] active:scale-[0.98]"
            >
              <span>GET A PERSONAL FITNESS ASSESSMENT →</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            {/* Medical Disclaimer */}
            <div className="flex items-start gap-2 text-[10px] font-mono text-[#777B80] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A7A9AC] shrink-0 mt-0.5" />
              <span>
                Calculations are mathematical estimates for general guidance. Consult with our certified trainers or a medical professional for personalized clinical recommendations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
