'use client';

import { motion } from 'motion/react';

const features = [
  { icon: '🌙', label: 'Halal', desc: '100% Halal certified' },
  { icon: '🌿', label: 'Fresh', desc: 'Made fresh to order' },
  { icon: '🥚', label: 'Egg Free', desc: 'No eggs, no worries' },
];

const stats = [
  { value: '100K+', label: 'Happy Customers' },
  { value: '20+', label: 'Flavour Options' },
  { value: '4.9', label: 'Star Rating ★' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-20 overflow-hidden"
      style={{ background: 'rgba(0,0,0,0.80)' }}
    >
      {/* Gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(200,151,58,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — content */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-6 h-[1px] bg-[#C8973A]" />
              <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(30px,6vw,58px)] font-bold text-white mb-3 leading-tight"
            >
              Mini Donuts Made
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #E4B863 0%, #C8973A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Fresh To Order
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="font-sans text-[14px] md:text-[15px] font-light text-white/65 max-w-[500px] leading-[1.85] mb-8"
            >
              At 6ix Donutz, we believe freshness is everything. Each mini donut is made to order right in front of you — golden, warm, and absolutely delicious. From classic glazed to unique custom toppings, there's a perfect donut for everyone.
            </motion.p>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[rgba(200,151,58,0.35)] bg-[rgba(200,151,58,0.05)]"
                >
                  <span className="text-lg">{f.icon}</span>
                  <div>
                    <span className="font-sans text-[11px] font-bold text-white">{f.label}</span>
                    <span className="block font-sans text-[9px] text-white/50">{f.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#order"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-black no-underline px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #E4B863, #C8973A)',
                boxShadow: '0 8px 30px rgba(200,151,58,0.45)',
              }}
            >
              Order Now
              <svg viewBox="0 0 24 24" width="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 rounded-xl border border-[rgba(200,151,58,0.20)] bg-[rgba(0,0,0,0.60)] backdrop-blur-sm"
              >
                <span
                  className="font-serif text-[42px] md:text-[52px] font-black leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #E4B863 0%, #C8973A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </span>
                <span className="font-sans text-[13px] font-semibold text-white/60 uppercase tracking-[0.14em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
