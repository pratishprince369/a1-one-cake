'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Choose Your Pack & Flavours',
    desc: 'Browse our menu and pick the pack size that suits you — Lil, Petite, or Jumbo. Then choose from our fresh flavour menu. There\'s always something new!',
  },
  {
    num: '02',
    title: 'Place Your Order',
    desc: 'Order online, through our app, or walk up to our station at events. We accept all major payment methods and catering inquiries are available by phone.',
  },
  {
    num: '03',
    title: 'Watch Them Being Made',
    desc: 'The fun part — watch as your mini donuts are fried, glazed, and topped fresh right in front of you. The smell alone is worth the wait!',
  },
  {
    num: '04',
    title: 'Enjoy!',
    desc: 'Dig in while they\'re warm. Share them, devour them solo, or save some for later (if you can). Golden, crispy, and absolutely unforgettable.',
  },
];

export default function ProcessSection() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-24 relative z-10 overflow-hidden" id="how" style={{ background: 'rgba(0,0,0,0.82)' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(200,151,58,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="text-center mb-14 md:mb-20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-[#C8973A]" />
          <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">How It Works</span>
          <div className="w-6 h-[1px] bg-[#C8973A]" />
        </div>
        <h2 className="font-serif text-[clamp(28px,6vw,58px)] font-black text-white mt-3">
          Simple.{' '}
          <span style={{
            background: 'linear-gradient(135deg, #E4B863, #C8973A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Delicious.
          </span>{' '}
          Fresh.
        </h2>
      </div>

      <div className="max-w-[760px] mx-auto flex flex-col gap-3 md:gap-4 relative z-10">
        {steps.map((step, i) => {
          const isOpen = openStep === i;
          return (
            <motion.div
              key={step.num}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenStep(isOpen ? null : i)}
                className="w-full flex items-center gap-3 md:gap-5 text-left p-4 md:p-6 rounded-xl hover:border-[rgba(200,151,58,0.4)] transition-all duration-300 group"
                style={{
                  background: isOpen ? 'rgba(200,151,58,0.07)' : 'rgba(10,10,10,0.70)',
                  border: `1px solid ${isOpen ? 'rgba(200,151,58,0.4)' : 'rgba(200,151,58,0.12)'}`,
                }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-serif text-xs md:text-sm font-bold border-2 transition-all duration-300"
                  style={{
                    background: isOpen ? 'linear-gradient(135deg, #E4B863, #C8973A)' : 'transparent',
                    borderColor: isOpen ? '#C8973A' : 'rgba(200,151,58,0.35)',
                    color: isOpen ? '#000' : '#C8973A',
                    boxShadow: isOpen ? '0 0 20px rgba(200,151,58,0.5)' : 'none',
                  }}
                >
                  {step.num}
                </div>
                <span
                  className="font-serif text-[15px] md:text-[18px] font-bold flex-1 transition-colors duration-300 text-left"
                  style={{ color: isOpen ? '#E4B863' : '#FFFFFF' }}
                >
                  {step.title}
                </span>
                <motion.svg
                  viewBox="0 0 24 24" width="18" fill="none"
                  stroke={isOpen ? '#C8973A' : 'rgba(255,255,255,0.3)'}
                  strokeWidth="2" strokeLinecap="round"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div
                  className="px-4 md:px-6 pt-3 pb-5 md:pb-6 border border-t-0 rounded-b-xl"
                  style={{ background: 'rgba(200,151,58,0.04)', border: '1px solid rgba(200,151,58,0.15)' }}
                >
                  <p className="font-sans text-[13px] md:text-[14px] font-light text-white/55 leading-[1.9] pl-12 md:pl-15">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12 md:mt-16">
        <a
          href="#order"
          className="inline-flex items-center gap-3 md:gap-4 font-sans text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase text-black no-underline px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #E4B863, #C8973A)',
            boxShadow: '0 8px 30px rgba(200,151,58,0.45)',
          }}
        >
          Order Now
          <svg viewBox="0 0 24 24" width="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
