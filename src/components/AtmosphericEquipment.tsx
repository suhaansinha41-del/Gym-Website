import React from 'react';

interface AtmosphericEquipmentProps {
  type:
    | 'barbell-plate'
    | 'treadmill-wheel'
    | 'kettlebell-wave'
    | 'coaching-silhouette'
    | 'breathing-pulse'
    | 'progress-pulse';
  className?: string;
  position?: 'center' | 'right' | 'left';
}

export const AtmosphericEquipment: React.FC<AtmosphericEquipmentProps> = ({
  type,
  className = '',
  position = 'right',
}) => {
  const posClasses = {
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    right: 'right-[-5%] top-1/2 -translate-y-1/2',
    left: 'left-[-5%] top-1/2 -translate-y-1/2',
  }[position];

  return (
    <div
      className={`absolute pointer-events-none select-none overflow-hidden opacity-[0.14] ${posClasses} ${className}`}
      aria-hidden="true"
    >
      {type === 'barbell-plate' && (
        /* Slow rotating Olympic competition plate with calibrated rim marks */
        <svg
          viewBox="0 0 500 500"
          className="w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] animate-[spin_60s_linear_infinite]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="230" stroke="#F5F5F5" strokeWidth="3" />
          <circle cx="250" cy="250" r="215" stroke="#D71920" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="250" cy="250" r="160" stroke="#F5F5F5" strokeWidth="2" />
          <circle cx="250" cy="250" r="60" stroke="#D71920" strokeWidth="2" />
          <circle cx="250" cy="250" r="30" fill="#D71920" opacity="0.3" />
          <line x1="250" y1="20" x2="250" y2="480" stroke="#F5F5F5" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="20" y1="250" x2="480" y2="250" stroke="#F5F5F5" strokeWidth="1" strokeDasharray="4 8" />
          <text
            x="250"
            y="110"
            fill="#D71920"
            fontSize="22"
            fontFamily="monospace"
            textAnchor="middle"
            letterSpacing="8"
          >
            NOIR · 25KG · OLYMPIC
          </text>
        </svg>
      )}

      {type === 'treadmill-wheel' && (
        /* Rotating cardio drive wheel with rhythmic cadence pulses */
        <svg
          viewBox="0 0 500 500"
          className="w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] animate-[spin_20s_linear_infinite]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="220" stroke="#D71920" strokeWidth="2" strokeDasharray="12 12" />
          <circle cx="250" cy="250" r="180" stroke="#F5F5F5" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="140" stroke="#D71920" strokeWidth="1" strokeDasharray="4 4" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="250"
              y1="250"
              x2={250 + 170 * Math.cos((deg * Math.PI) / 180)}
              y2={250 + 170 * Math.sin((deg * Math.PI) / 180)}
              stroke="#F5F5F5"
              strokeWidth="1.5"
            />
          ))}
          <circle cx="250" cy="250" r="45" fill="#D71920" opacity="0.4" />
        </svg>
      )}

      {type === 'kettlebell-wave' && (
        /* Dynamic kettlebell and undulating battle-rope rhythm curves */
        <svg
          viewBox="0 0 500 500"
          className="w-[450px] h-[450px] sm:w-[620px] sm:h-[620px] animate-pulse [animation-duration:8s]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="290" r="140" stroke="#D71920" strokeWidth="2.5" />
          <path
            d="M170 200 C170 110, 330 110, 330 200"
            stroke="#F5F5F5"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M50 250 Q 150 160, 250 250 T 450 250"
            stroke="#D71920"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <path
            d="M50 290 Q 150 380, 250 290 T 450 290"
            stroke="#F5F5F5"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      )}

      {type === 'coaching-silhouette' && (
        /* Stylized concentric coaching radar & focus target */
        <svg
          viewBox="0 0 500 500"
          className="w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] animate-[spin_40s_linear_infinite]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="230" stroke="#D71920" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="250" cy="250" r="180" stroke="#F5F5F5" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="110" stroke="#D71920" strokeWidth="2" strokeDasharray="16 8" />
          <circle cx="250" cy="250" r="40" stroke="#F5F5F5" strokeWidth="2" />
          <line x1="250" y1="10" x2="250" y2="490" stroke="#D71920" strokeWidth="1" />
          <line x1="10" y1="250" x2="490" y2="250" stroke="#D71920" strokeWidth="1" />
        </svg>
      )}

      {type === 'breathing-pulse' && (
        /* Gentle expansive breathing ring for recovery */
        <svg
          viewBox="0 0 500 500"
          className="w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] animate-ping [animation-duration:6s]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="160" stroke="#D71920" strokeWidth="1" />
          <circle cx="250" cy="250" r="110" stroke="#F5F5F5" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="250" cy="250" r="60" stroke="#D71920" strokeWidth="2" />
        </svg>
      )}

      {type === 'progress-pulse' && (
        /* Dynamic metric chevron grid for results */
        <svg
          viewBox="0 0 500 500"
          className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 350 L180 260 L280 300 L450 150" stroke="#D71920" strokeWidth="3" />
          <circle cx="450" cy="150" r="8" fill="#D71920" />
          <circle cx="280" cy="300" r="6" fill="#F5F5F5" />
          <circle cx="180" cy="260" r="6" fill="#F5F5F5" />
          <line x1="50" y1="350" x2="450" y2="350" stroke="#F5F5F5" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      )}
    </div>
  );
};
