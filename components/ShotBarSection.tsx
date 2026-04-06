'use client';

import { motion } from 'motion/react';

const cateringFeatures = [
  { icon: '🎪', title: 'On-Site Experience', desc: 'We bring the donut station to your event' },
  { icon: '🎂', title: 'Weddings & Birthdays', desc: 'Perfect for any celebration' },
  { icon: '🏢', title: 'Corporate Events', desc: 'Impress your team and clients' },
  { icon: '🎡', title: 'Fairs & Festivals', desc: 'High-volume, high-quality service' },
  { icon: '🎓', title: 'School Events', desc: 'Safe, halal, and kid-approved' },
  { icon: '🛒', title: 'Custom Branding', desc: 'Branded boxes available for your event' },
];

export default function ShotBarSection() {
  return (
    <section className="relative z-10 overflow-hidden py-0" id="catering">
      <div className="relative" style={{ background: 'rgba(0,0,0,0.85)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_left,rgba(200,151,58,0.07)_0%,transparent_60%)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[auto] lg:min-h-[520px]">
          {/* Left: Catering heading */}
          <motion.div
            initial={{ x: -80, opacity: 0, scale: 0.96 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center p-8 md:p-12 lg:p-20 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-5 h-[1px] bg-[#C8973A]" />
              <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">
                Catering Available
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-sans text-[11px] md:text-[13px] font-light text-[#E4B863] mb-3 tracking-[0.12em] uppercase"
            >
              The Experience You Deserve
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(48px,10vw,100px)] font-black text-white leading-[0.9] mb-0"
              >
                6IXDONUTZ
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(36px,8vw,72px)] font-black leading-[0.9] mb-6"
              >
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: '2px #C8973A' }}
                >
                  CATERING
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              viewport={{ once: true }}
              className="font-sans text-[13px] md:text-[14px] font-light text-white/55 leading-[1.85] max-w-[380px] mb-8"
            >
              Bring the magic of fresh mini donuts to your event. We set up our donut station on-site and make dozens of fresh, hot donuts right before your guests' eyes.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-black no-underline px-7 py-3.5 rounded-full w-fit transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #E4B863, #C8973A)',
                boxShadow: '0 8px 30px rgba(200,151,58,0.4)',
              }}
            >
              Get A Quote →
            </motion.a>
          </motion.div>

          {/* Right: Catering features */}
          <motion.div
            initial={{ x: 80, opacity: 0, scale: 0.96 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center p-8 md:p-12 lg:p-20 pt-0 lg:pt-20 relative z-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {cateringFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[rgba(200,151,58,0.15)] bg-[rgba(200,151,58,0.03)] group hover:border-[rgba(200,151,58,0.35)] transition-all duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="block font-serif text-[15px] md:text-[16px] font-bold text-white group-hover:text-[#E4B863] transition-colors duration-300 mb-1">
                      {item.title}
                    </span>
                    <span className="font-sans text-[11px] text-white/45">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
