'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function ParallaxQuote() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={sectionRef} className="min-h-[70vh] lg:h-[80vh] relative overflow-hidden flex items-center justify-center py-24 lg:py-0" id="we-help">
      <motion.div style={{ y }} className="absolute inset-[-28%] will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1800&q=85"
          alt="Fresh Donuts"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.80) 100%)' }} />

      <div className="relative z-10 text-center text-white px-6 md:px-10 max-w-[700px] mx-auto">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#C8973A]" />
            <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">We're Here To Help!</span>
            <div className="w-8 h-[1px] bg-[#C8973A]" />
          </div>
          <h2 className="font-serif text-[clamp(42px,7vw,80px)] font-black text-white leading-[1.0]">
            Catering{' '}
            <span style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Needed?
            </span>
          </h2>
        </motion.div>

        <div className="flex justify-center my-5">
          <svg viewBox="0 0 500 14" width="300" className="w-full max-w-[300px]">
            <motion.path
              d="M0 7 Q125 2 250 7 Q375 12 500 7"
              stroke="#C8973A"
              strokeWidth="1.2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.4 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-[15px] md:text-[17px] font-light text-white/65 leading-[1.8] mb-10">
            From intimate gatherings to massive festivals, we offer on-site catering with fresh donuts made right before your guests. Get in touch and let us make your event unforgettable.
          </p>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-block font-sans text-[11px] font-bold tracking-[0.26em] uppercase text-black no-underline px-12 py-4 rounded-full transition-all duration-400 hover:-translate-y-1"
          style={{
            background: 'linear-gradient(135deg, #E4B863, #C8973A)',
            boxShadow: '0 10px 40px rgba(200,151,58,0.5)',
          }}
        >
          Get A Catering Quote →
        </motion.a>
      </div>
    </section>
  );
}
