import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface GymImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  overlayGradient?: boolean;
  priority?: boolean;
  dataCursor?: string;
}

export const GymImage: React.FC<GymImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  overlayGradient = true,
  priority = false,
  dataCursor = 'explore',
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden group/img ${containerClassName}`}
      data-cursor={dataCursor}
    >
      {!hasError ? (
        <>
          <img
            src={currentSrc}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            className={`w-full h-full object-cover grayscale contrast-[1.08] brightness-85 transition-all duration-700 ease-out group-hover/img:grayscale-0 group-hover:grayscale-0 group-hover/img:contrast-100 group-hover:contrast-100 group-hover/img:brightness-105 group-hover:brightness-105 group-hover/img:scale-[1.04] group-hover:scale-[1.04] ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
          />

          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#17191C] animate-pulse flex items-center justify-center">
              <Dumbbell className="w-8 h-8 text-white/10" />
            </div>
          )}
        </>
      ) : (
        /* Styled Procedural Fallback if image fails */
        <div className="w-full h-full bg-gradient-to-br from-[#1C1F22] via-[#17191C] to-[#111315] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
            <Dumbbell className="w-6 h-6 text-[#D71920]" />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#A7A9AC]">{alt}</span>
          <span className="font-mono text-[10px] text-[#777B80] mt-1">NOIR.FIT RANCHI</span>
        </div>
      )}

      {/* Dark Scrim Vignette Overlay (Guarantees Text Readability) */}
      {overlayGradient && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#111315] via-[#111315]/50 to-transparent transition-opacity duration-500 group-hover/img:opacity-80" />
      )}

      {/* Subtle Athletic Red Sheen on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/img:opacity-100 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_40px_rgba(215,25,32,0.12)]" />
    </div>
  );
};
