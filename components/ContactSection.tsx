'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', pack: '', date: '', notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10" id="contact">
      {/* LEFT PANEL */}
      <div
        className="flex items-center relative overflow-hidden p-8 md:p-12 lg:p-18"
        style={{ background: 'linear-gradient(135deg, rgba(200,151,58,0.15) 0%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.98) 100%)' }}
      >
        {/* Animated gold particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${[12, 78, 42, 88, 22, 62, 35, 92][i]}%`,
                top: `${[18, 30, 58, 72, 78, 12, 42, 50][i]}%`,
                width: `${[4, 3, 5, 3, 4, 3, 2, 4][i]}px`,
                height: `${[4, 3, 5, 3, 4, 3, 2, 4][i]}px`,
                background: '#C8973A',
              }}
              animate={{ y: [0, -20], scale: [1, 1.6], opacity: [0.4, 1] }}
              transition={{ duration: [2.2, 3.0, 1.9, 2.7, 3.5, 2.3, 4.0, 1.7][i], repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-[#C8973A]" />
            <span className="font-sans text-[10px] font-bold tracking-[0.38em] uppercase text-[#C8973A]">Get In Touch</span>
          </div>
          <h2 className="font-serif text-[clamp(28px,5vw,52px)] font-black text-white leading-[1.15] mb-6 md:mb-8">
            Order or{' '}
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Get A Quote
            </span>
          </h2>

          <div className="flex flex-col gap-5 md:gap-7 mb-8 md:mb-10">
            {[
              {
                icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>,
                label: 'Call or Text', value: '+1 (647) 123-4567', href: 'tel:+16471234567'
              },
              {
                icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>,
                label: 'Service Area', value: 'Greater Toronto & Surrounding Areas', href: undefined
              },
              {
                icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></>,
                label: 'Hours', value: 'Mon–Sat: 10am–10pm  |  Sun: 12pm–8pm', href: undefined
              }
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(200,151,58,0.12)', border: '1px solid rgba(200,151,58,0.25)', color: '#C8973A' }}
                >
                  <svg viewBox="0 0 24 24" width="18" fill="currentColor">{item.icon}</svg>
                </div>
                <div>
                  <strong className="block font-sans text-[9px] md:text-xs font-semibold tracking-[0.12em] uppercase text-[#C8973A] mb-1">{item.label}</strong>
                  {item.href
                    ? <a href={item.href} className="font-sans text-[13px] md:text-base font-light text-white/70 no-underline hover:text-white transition-colors">{item.value}</a>
                    : <span className="font-sans text-[13px] md:text-base font-light text-white/70">{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-2.5 flex-wrap">
            {['Instagram', 'Facebook', 'TikTok', 'WhatsApp'].map((label) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center text-white/50 no-underline transition-all duration-300 hover:text-black"
                style={{ borderColor: 'rgba(200,151,58,0.25)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #E4B863, #C8973A)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C8973A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,151,58,0.25)';
                }}
                aria-label={label}
              >
                <svg viewBox="0 0 24 24" width="16" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — Form */}
      <div className="flex items-center justify-center p-4 md:p-12 lg:p-16 py-10 md:py-12" style={{ background: 'rgba(0,0,0,0.90)' }}>
        <form onSubmit={handleSubmit} className="w-full max-w-[530px] p-6 md:p-10 rounded-xl border-t-4 shadow-[0_32px_80px_rgba(0,0,0,0.60)]" style={{ background: 'rgba(10,10,10,0.95)', borderTopColor: '#C8973A', border: '1px solid rgba(200,151,58,0.15)', borderTop: '4px solid #C8973A' }}>
          <div className="mb-6 md:mb-8">
            <h3 className="font-serif text-[22px] md:text-[26px] font-black text-white mb-1">Place Your Order</h3>
            <p className="font-sans text-[12px] md:text-[13px] text-white/40">We respond within 24 hours — guaranteed</p>
          </div>

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { id: 'fname', label: 'Your Name', type: 'text', key: 'name' },
              { id: 'fphone', label: 'Phone Number', type: 'tel', key: 'phone' },
            ].map((f) => (
              <div key={f.id} className="relative">
                <input type={f.type} id={f.id} placeholder=" " required
                  className="w-full pt-6 pb-2 px-3 rounded-md font-sans text-sm text-white bg-[#111] outline-none transition-colors duration-300 focus:border-[#C8973A] peer"
                  style={{ border: '1px solid rgba(200,151,58,0.15)' }}
                  onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#C8973A'}
                  onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(200,151,58,0.15)'}
                  onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                />
                <label htmlFor={f.id} className="absolute left-3 top-4 font-sans text-sm text-white/35 transition-all duration-250 pointer-events-none peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:tracking-[0.1em] peer-focus:uppercase peer-focus:text-[#C8973A] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:tracking-[0.1em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C8973A]">{f.label}</label>
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <input type="email" id="femail" placeholder=" "
              className="w-full pt-6 pb-2 px-3 rounded-md font-sans text-sm text-white bg-[#111] outline-none peer"
              style={{ border: '1px solid rgba(200,151,58,0.15)' }}
              onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#C8973A'}
              onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(200,151,58,0.15)'}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label htmlFor="femail" className="absolute left-3 top-4 font-sans text-sm text-white/35 transition-all duration-250 pointer-events-none peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:tracking-[0.1em] peer-focus:uppercase peer-focus:text-[#C8973A] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:tracking-[0.1em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C8973A]">Email Address</label>
          </div>

          {/* Pack + Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <select id="fpack" required defaultValue=""
                className="w-full pt-6 pb-2 px-3 rounded-md font-sans text-sm text-white bg-[#111] outline-none peer appearance-none"
                style={{ border: '1px solid rgba(200,151,58,0.15)' }}
                onChange={(e) => setFormData({ ...formData, pack: e.target.value })}
              >
                <option value="" disabled></option>
                <option>Lil Pack (6 donuts)</option>
                <option>Petite Pack (12 donuts)</option>
                <option>Jumbo Pack (24 donuts)</option>
                <option>Catering / Event</option>
                <option>Custom Order</option>
              </select>
              <label htmlFor="fpack" className="absolute left-3 top-1.5 font-sans text-[9px] tracking-[0.1em] uppercase text-[#C8973A] pointer-events-none">Pack / Order</label>
            </div>
            <div className="relative">
              <input type="date" id="fdate" required
                className="w-full pt-6 pb-2 px-3 rounded-md font-sans text-sm text-white/60 bg-[#111] outline-none"
                style={{ border: '1px solid rgba(200,151,58,0.15)' }}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
              <label htmlFor="fdate" className="absolute left-3 top-1.5 font-sans text-[9px] tracking-[0.1em] uppercase text-[#C8973A] pointer-events-none">Preferred Date</label>
            </div>
          </div>

          {/* Notes */}
          <div className="relative mb-6 md:mb-8">
            <textarea id="fnotes" rows={3} placeholder=" "
              className="w-full pt-6 pb-2 px-3 rounded-md font-sans text-sm text-white bg-[#111] outline-none peer resize-none"
              style={{ border: '1px solid rgba(200,151,58,0.15)' }}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
            <label htmlFor="fnotes" className="absolute left-3 top-4 font-sans text-sm text-white/35 transition-all duration-250 pointer-events-none peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:tracking-[0.1em] peer-focus:uppercase peer-focus:text-[#C8973A] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:tracking-[0.1em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C8973A]">Flavours & Special Requests</label>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 md:py-4 text-black border-none rounded-full font-sans text-[10px] md:text-[11px] font-bold tracking-[0.24em] uppercase cursor-pointer transition-all duration-250 hover:-translate-y-0.75"
            style={{
              background: 'linear-gradient(135deg, #E4B863, #C8973A)',
              boxShadow: '0 8px 30px rgba(200,151,58,0.45)',
            }}
          >
            Submit Order Request
          </button>
        </form>
      </div>
    </section>
  );
}
