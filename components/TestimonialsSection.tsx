'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    text: '"The custom cake was incredible, and the design couldn\'t have been better. We went with the Strawberry flavor and it was absolutely heavenly. Highly recommend!"',
    author: 'Amir B.',
    treatment: 'Custom Cake',
    initials: 'AB',
  },
  {
    text: '"Booked A-One Cake for our corporate event and our employees went CRAZY for the catering. The presentation was gorgeous and the freshness was unreal. Can\'t wait to book again."',
    author: 'Jessica M.',
    treatment: 'Event Catering',
    initials: 'JM',
  },
  {
    text: '"The best cake I\'ve ever had, no contest. The artisanal process is next level. We got the Choco Lava and it was gone in minutes. Bring more next time!"',
    author: 'Nora L.',
    treatment: 'Choco Lava',
    initials: 'NL',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const quoteY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-20 md:py-28 lg:py-40 px-4 md:px-10 lg:px-24 overflow-hidden" id="reviews" style={{ background: 'transparent' }}>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <motion.div
        style={{ y: quoteY, color: 'rgba(200,151,58,0.04)' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-[clamp(100px,25vw,420px)] font-black leading-none pointer-events-none select-none will-change-transform"
      >
        &quot;
      </motion.div>

      <div className="max-w-[820px] mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-[#C8973A]" />
          <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">Client Reviews</span>
          <div className="w-6 h-[1px] bg-[#C8973A]" />
        </div>
        <h2 className="font-serif text-[clamp(26px,5vw,54px)] font-black text-white text-center mb-10 md:mb-16">
          What Our{' '}
          <span style={{
            background: 'linear-gradient(135deg, #E4B863, #C8973A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Clients Say
          </span>
        </h2>

        <div className="relative min-h-[260px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="flex justify-center gap-1.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.1 * i }} className="text-xl md:text-2xl text-[#C8973A]">★</motion.span>
                ))}
              </div>
              <p className="font-serif text-[clamp(15px,2.5vw,22px)] italic font-light text-white/80 leading-[1.72] mb-7 md:mb-9 px-2">
                {testimonials[index].text}
              </p>
              <div className="flex items-center gap-4 justify-center">
                <div
                  className="w-11 h-11 md:w-13 md:h-13 rounded-full text-black font-sans text-sm font-bold flex items-center justify-center border-2 shadow-[0_0_0_4px_rgba(200,151,58,0.20)]"
                  style={{
                    background: 'linear-gradient(135deg, #E4B863, #C8973A)',
                    borderColor: 'rgba(200,151,58,0.5)',
                  }}
                >
                  {testimonials[index].initials}
                </div>
                <div className="text-left">
                  <strong className="block font-sans text-[14px] md:text-[15px] text-white font-semibold">{testimonials[index].author}</strong>
                  <span className="font-sans text-xs text-[#C8973A]/60">{testimonials[index].treatment}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-11">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300 p-0 border-none cursor-pointer"
              style={{
                width: i === index ? '28px' : '6px',
                background: i === index ? '#C8973A' : 'rgba(255,255,255,0.18)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
