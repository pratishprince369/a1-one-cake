'use client';

import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] relative z-10" id="contact" style={{ background: 'transparent' }}>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* LEFT PANEL */}
      <div className="flex flex-col justify-center relative p-8 md:p-12 lg:p-20 z-10">
        <div className="relative z-10 w-full max-w-lg mx-auto lg:mx-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-[11px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">Contact Details</span>
          </div>
          <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-black text-white leading-[1.1] mb-12">
            Where Art<br />
            <span style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Meets Taste
            </span>
          </h2>

          <div className="flex flex-col gap-8 mb-12">
            {[
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                label: 'Phone Number', value: '+1 (123) 456-7890'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                label: 'Email Address', value: 'hello@aonecake.com'
              }
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-white/5 border border-[#C8973A]/30 text-[#C8973A] backdrop-blur-sm"
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                    {item.icon}
                  </svg>
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <strong className="block font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8973A] mb-1">{item.label}</strong>
                  <span className="font-sans text-[15px] font-light text-white">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="px-10 py-4 text-black border-none rounded-full font-sans text-[11px] font-bold tracking-[0.24em] uppercase cursor-pointer transition-all duration-250 hover:-translate-y-1 inline-block"
            style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              boxShadow: '0 8px 30px rgba(200,151,58,0.45)',
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* RIGHT PANEL — Form / Map */}
      <div className="relative flex items-center justify-center p-4 min-h-[300px] lg:min-h-full">
        {/* Transparent overlay over the right side to balance visibility */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 w-full h-full max-h-[500px] lg:max-h-full p-6 lg:p-12">
            <div className="w-full h-full rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden relative">
              {/* Fake Map Grid */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute bg-[#C8973A]/20 w-32 h-32 rounded-full blur-3xl"></div>
              <div className="text-white/40 font-sans tracking-[0.2em] uppercase text-xs font-bold relative z-10">
                [ Map Integration Placeholder ]
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
