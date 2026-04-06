'use client';

import { motion } from 'motion/react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Made Fresh Every Batch',
    desc: 'Every order is made fresh right in front of you — no pre-made, no frozen, no shortcuts. Just warm golden donuts every time.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c0-1.2-.6-2.3-1.5-3 .2-.8.2-1.6-.1-2.3-.3-.8-.9-1.4-1.6-1.8-.4-.7-1-1.3-1.8-1.6C15.3 3.1 14.5 3 13.7 3.3c-.7-.9-1.8-1.3-3-.9-1.2.3-2 1.3-2 2.5-.8.4-1.4 1-1.8 1.8-.4.7-.4 1.5-.1 2.3C5.6 9.7 5 10.8 5 12s.6 2.3 1.5 3c-.2.8-.2 1.6.1 2.3.3.8.9 1.4 1.8 1.8.4.8 1 1.4 1.8 1.8.7.3 1.5.3 2.3.1.7.9 1.8 1.4 3 1 1.2-.4 2-1.4 2-2.5.8-.4 1.4-1 1.8-1.8.4-.7.4-1.5.1-2.3.9-.7 1.5-1.8 1.5-3z"/>
      </svg>
    ),
    title: 'Halal Certified',
    desc: '100% Halal certified ingredients. Everyone is welcome at our donut station — inclusive, safe, and delicious for the whole family.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Perfect For Any Event',
    desc: 'From birthday parties to corporate events, weddings to festivals — we bring the donut experience wherever you need us.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-10 lg:px-16 relative z-10 overflow-hidden" id="why-us" style={{ background: 'rgba(0,0,0,0.80)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,151,58,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-6 h-[1px] bg-[#C8973A]" />
            <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">Why Choose Us</span>
            <div className="w-6 h-[1px] bg-[#C8973A]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(28px,5vw,56px)] font-black text-white"
          >
            The{' '}
            <span style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              6ix Donutz
            </span>{' '}
            Difference
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ y: 70, opacity: 0, scale: 0.94 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.15 }}
              className="p-6 md:p-8 border rounded-xl group hover:border-[rgba(200,151,58,0.4)] transition-all duration-400 hover:-translate-y-1.5"
              style={{
                background: 'rgba(10,10,10,0.70)',
                border: '1px solid rgba(200,151,58,0.15)',
              }}
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center text-[#C8973A] mb-5 group-hover:shadow-[0_0_30px_rgba(200,151,58,0.3)] transition-all duration-400"
                style={{
                  background: 'rgba(200,151,58,0.08)',
                  border: '1px solid rgba(200,151,58,0.25)',
                }}
              >
                {feature.icon}
              </div>
              <h3 className="font-serif text-[18px] md:text-[20px] font-bold text-white mb-3 group-hover:text-[#E4B863] transition-colors duration-400">
                {feature.title}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] text-white/50 leading-[1.85] font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
