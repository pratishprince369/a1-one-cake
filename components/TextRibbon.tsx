'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function TextRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div ref={containerRef} className="relative z-10 py-16 lg:py-20 overflow-hidden" style={{ background: 'rgba(0,0,0,0.80)' }}>
      <motion.div style={{ y: y1 }} className="overflow-hidden leading-none will-change-transform">
        <span className="font-serif italic font-black whitespace-nowrap block text-[clamp(90px,15vw,190px)] ml-0" style={{ color: 'rgba(200,151,58,0.07)' }}>
          Fresh.
        </span>
      </motion.div>
      <motion.div style={{ y: y2 }} className="overflow-hidden leading-none will-change-transform">
        <span className="font-serif italic font-black whitespace-nowrap block text-[clamp(90px,15vw,190px)] ml-[10%]" style={{ color: 'rgba(200,151,58,0.10)' }}>
          Golden.
        </span>
      </motion.div>
      <motion.div style={{ y: y3 }} className="overflow-hidden leading-none will-change-transform">
        <span className="font-serif italic font-black whitespace-nowrap block text-[clamp(90px,15vw,190px)] ml-[22%]" style={{ color: 'rgba(200,151,58,0.07)' }}>
          Delicious.
        </span>
      </motion.div>
    </div>
  );
}
