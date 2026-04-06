'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** How much the image moves relative to scroll (0.1 = subtle, 0.4 = strong) */
  strength?: number;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  strength = 0.20,
  className = '',
  objectPosition = 'center',
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Image moves SLOWER than scroll = classic parallax
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-strength * 100}%`, `${strength * 100}%`]
  );

  return (
    // Clip container — overflow hidden so image doesn't escape
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Image is slightly LARGER than container to allow parallax movement */}
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover object-[${objectPosition}]`}
          referrerPolicy="no-referrer"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
