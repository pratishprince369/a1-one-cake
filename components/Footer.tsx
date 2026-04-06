'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10" style={{ background: 'rgba(0,0,0,0.95)' }}>
      {/* Wave divider */}
      <div style={{ background: 'rgba(0,0,0,0.85)' }} className="-mb-[2px]">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full">
          <path d="M0 20 Q180 0 360 20 Q540 40 720 20 Q900 0 1080 20 Q1260 40 1440 20 L1440 40 L0 40Z" fill="rgba(0,0,0,0.95)"/>
        </svg>
      </div>

      <div className="py-14 md:py-20 px-5 md:px-10 lg:px-20 relative overflow-hidden">
        {/* Giant watermark text */}
        <div
          className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 font-serif text-[clamp(40px,8vw,140px)] font-black whitespace-nowrap pointer-events-none select-none tracking-[0.08em] hidden md:block"
          style={{ color: 'rgba(200,151,58,0.04)' }}
          aria-hidden="true"
        >
          6IX DONUTZ
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 md:gap-14 lg:gap-20 max-w-[1320px] mx-auto relative z-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 relative w-[120px] h-[70px] md:w-[140px] md:h-[80px]">
              <Image
                src="https://6ix-donutz.com/wp-content/uploads/2024/12/removebg-logo-e1735322689341.png"
                alt="6ix Donutz Logo"
                fill
                className="object-contain object-left"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-serif text-[15px] md:text-[17px] italic text-white/30 leading-[1.75] mb-5">
              &quot;Hot. Fresh. Made to Order.<br />Every donut, every time.&quot;
            </p>
            <div className="flex gap-2 flex-wrap mb-5">
              {['🍩 Fresh Daily', '🌙 Halal Certified', '🚫🥚 Egg Free'].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[8px] md:text-[9px] font-semibold tracking-[0.12em] uppercase rounded-full px-3 py-1"
                  style={{ border: '1px solid rgba(200,151,58,0.30)', color: 'rgba(200,151,58,0.80)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="tel:+16471234567"
              className="font-serif text-[20px] md:text-[22px] font-bold no-underline hover:text-white transition-colors"
              style={{ color: '#C8973A' }}
            >
              +1 (647) 123-4567
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-sans text-[10px] font-bold tracking-[0.28em] uppercase mb-4 md:mb-5"
              style={{ color: '#C8973A' }}
            >
              Quick Links
            </h4>
            <ul className="list-none flex flex-col gap-2.5 p-0">
              {['About', 'Menu', 'Catering', 'How It Works', 'Reviews', 'Order Now'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    className="font-sans text-[13px] text-white/35 no-underline hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4
              className="font-sans text-[10px] font-bold tracking-[0.28em] uppercase mb-4 md:mb-5"
              style={{ color: '#C8973A' }}
            >
              Our Menu
            </h4>
            <ul className="list-none flex flex-col gap-2.5 p-0">
              {['Lil Pack', 'Petite Pack', 'Jumbo Pack', 'Classic Glazed', 'Cinnamon Sugar', 'Custom Flavours'].map((link) => (
                <li key={link}>
                  <a
                    href="#menu"
                    className="font-sans text-[13px] text-white/35 no-underline hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4
              className="font-sans text-[10px] font-bold tracking-[0.28em] uppercase mb-4 md:mb-5"
              style={{ color: '#C8973A' }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3 mb-4">
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label: 'TikTok', path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(200,151,58,0.08)',
                    border: '1px solid rgba(200,151,58,0.22)',
                    color: 'rgba(200,151,58,0.70)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #E4B863, #C8973A)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#000';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,151,58,0.08)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(200,151,58,0.70)';
                  }}
                  aria-label={social.label}
                >
                  <svg viewBox="0 0 24 24" width="16" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="font-sans text-[12px] text-white/30 leading-relaxed">
              Follow us for the latest flavours, events, and special offers. Tag us in your donut photos! 🍩
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="py-3 px-4 md:px-10 flex items-center justify-center gap-3 flex-wrap font-sans text-[9px] md:text-[10px] font-medium tracking-[0.12em] text-black text-center"
        style={{ background: 'linear-gradient(135deg, #E4B863, #C8973A)' }}
      >
        <span>© 2025 6ix Donutz. All Rights Reserved.</span>
        <span className="hidden md:inline text-black/50">✦</span>
        <span>Hot & Fresh Mini Donuts · Halal Certified</span>
      </div>
    </footer>
  );
}
