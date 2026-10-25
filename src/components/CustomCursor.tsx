import React, { useEffect, useState, useRef } from 'react';

type CursorMode = 'default' | 'click' | 'explore' | 'drag' | 'select' | 'rotate' | 'hidden';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [isPointerDown, setIsPointerDown] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check target element for custom cursor actions
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr) {
        setMode(cursorAttr as CursorMode);
        return;
      }

      if (target.closest('button, a, [role="button"]')) {
        setMode('click');
      } else if (target.closest('.hero-3d-canvas, [data-cursor="rotate"]')) {
        setMode('rotate');
      } else if (target.closest('input[type="range"], .slider-handle, .drag-handle, [data-cursor="drag"]')) {
        setMode('drag');
      } else if (target.closest('svg path, svg rect, svg circle, .anatomy-node')) {
        setMode('select');
      } else if (target.closest('.group\\/img, img, .facility-card, [data-cursor="explore"]')) {
        setMode('explore');
      } else {
        setMode('default');
      }
    };

    const onMouseDown = () => setIsPointerDown(true);
    const onMouseUp = () => setIsPointerDown(false);

    const onMouseLeave = () => setMode('hidden');
    const onMouseEnter = () => setMode('default');

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth ring animation loop using lerp
    let animId: number;
    const animateRing = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.16;
      ringY.current += (mouseY.current - ringY.current) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }
      animId = requestAnimationFrame(animateRing);
    };
    animId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isEnabled || mode === 'hidden') return null;

  const modeLabels: Record<CursorMode, string> = {
    default: '',
    click: 'CLICK',
    explore: 'VIEW',
    drag: 'DRAG',
    select: 'SELECT',
    rotate: 'ROTATE',
    hidden: '',
  };

  const hasLabel = mode !== 'default';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Small center dot in athletic crimson */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#D71920] transition-opacity duration-200 ${
          hasLabel ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer interactive ring with red accent styling */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center transition-all duration-300 ease-out ${
          hasLabel
            ? 'w-16 h-16 -ml-8 -mt-8 rounded-full bg-[#17191C]/90 border border-[#D71920] backdrop-blur-sm shadow-[0_0_20px_rgba(215,25,32,0.35)]'
            : isPointerDown
            ? 'w-6 h-6 -ml-3 -mt-3 rounded-full border border-[#D71920] bg-[#D71920]/25'
            : 'w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/20'
        }`}
        style={{ willChange: 'transform' }}
      >
        {hasLabel && (
          <span
            ref={textRef}
            className="font-mono text-[9px] font-bold tracking-widest uppercase text-[#F5F5F5]"
          >
            {modeLabels[mode]}
          </span>
        )}
      </div>
    </div>
  );
};
