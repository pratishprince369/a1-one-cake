'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
  progress: number;
  onComplete: () => void;
}

export default function LoadingScreen({ progress, onComplete }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center text-white"
      style={{ background: '#000000' }}
    >
      {/* Gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,151,58,0.10)_0%,transparent_60%)] pointer-events-none" />

      <div className="flex flex-col items-center mb-10 relative z-10">
        <div className="relative w-[150px] h-[90px] md:w-[200px] md:h-[120px] mb-8">
          <Image
            src="https://6ix-donutz.com/wp-content/uploads/2024/12/removebg-logo-e1735322689341.png"
            alt="6ix Donutz Logo"
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <p
          className="font-sans text-[11px] font-semibold tracking-[0.4em] uppercase mb-2"
          style={{ color: 'rgba(200,151,58,0.60)' }}
        >
          Loading Experience
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-56 h-[2px] rounded-full overflow-hidden relative z-10" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #E4B863, #C8973A)',
          }}
        />
      </div>
      <div
        className="mt-4 text-[10px] font-sans uppercase tracking-[0.2em]"
        style={{ color: 'rgba(200,151,58,0.45)' }}
      >
        {progress}%
      </div>
    </div>
  );
}
