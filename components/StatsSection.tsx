'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50k+', label: 'Happy Customers' },
  { value: '100%', label: 'Satisfaction' },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative z-10 py-24 md:py-32 px-4 md:px-8 lg:px-20 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Dark overlay to make text pop against video */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(200,151,58,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(40px,7vw,70px)] font-bold mb-6 leading-tight text-white block">
            Crafting <br />
            <span style={{
              background: 'linear-gradient(135deg, #E4B863 0%, #C8973A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
              fontWeight: 'normal'
            }}>Memories</span>
          </h2>

          <p className="font-sans text-[14px] md:text-[18px] font-light text-white/80 max-w-[700px] mx-auto leading-[1.8] italic uppercase tracking-widest">
            Quality Ingredients • Artisanal Process • Attention to Detail • Customized Flavors • Fast Delivery • Elegant Presentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 md:before:w-full md:before:h-[1px] md:before:bg-gradient-to-r md:before:from-transparent md:before:via-[#C8973A]/30 md:before:to-transparent">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="px-6 py-10 flex flex-col items-center justify-center relative"
            >
              <div className="text-[#E4B863] font-serif text-5xl md:text-7xl font-light mb-4">
                {stat.value}
              </div>
              <div className="w-10 h-[2px] bg-[#C8973A] mb-4"></div>
              <div className="font-sans text-[11px] md:text-[13px] font-bold text-white uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
