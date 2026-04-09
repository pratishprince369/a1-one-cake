'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function CustomCakeSection() {
  return (
    <section
      id="custom-cake"
      className="relative z-10 py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-20 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-[#C8973A]/10 rounded-3xl transform -translate-x-4 translate-y-4" />
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop"
                alt="Custom Cake Design"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2
              className="font-serif text-[clamp(40px,6vw,65px)] font-bold mb-6 leading-tight"
              style={{
                color: '#FFFFFF',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.8))'
              }}
            >
              Design Your<br />
              <span style={{
                background: 'linear-gradient(135deg, #E4B863 0%, #C8973A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Dream Cake</span>
            </h2>

            <p className="font-sans text-[15px] md:text-[17px] font-light text-white/80 max-w-[500px] leading-[1.8] mb-10">
              Every great celebration deserves a cake as unique as you are. Craft a custom masterpiece tailored to your theme, flavors, and preferences with ease.
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-sans text-[12px] font-bold tracking-[0.2em] uppercase text-black no-underline px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #E4B863, #C8973A)',
                  boxShadow: '0 8px 30px rgba(200,151,58,0.45)',
                }}
              >
                Book Your Cake
                <svg viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
