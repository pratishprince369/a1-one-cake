'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Catering', href: '#catering' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-6 lg:px-12 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'bg-black/30 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      {/* Logo */}
      <div
        className="flex flex-col cursor-pointer z-[110]"
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
      >
        <div className="relative w-[100px] h-[56px] md:w-[130px] md:h-[72px] lg:w-[150px] lg:h-[84px]">
          <Image
            src="https://6ix-donutz.com/wp-content/uploads/2024/12/removebg-logo-e1735322689341.png"
            alt="6ix Donutz Logo"
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 hover:text-[#C8973A] transition-colors drop-shadow-sm"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#order"
          id="nav-order-btn"
          className="px-5 py-2.5 bg-[#C8973A] text-black font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#E4B863] transition-all drop-shadow-sm rounded-full"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-[110] p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        id="nav-mobile-menu-btn"
      >
        <span className={`w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black/97 backdrop-blur-xl flex flex-col items-center justify-center gap-6 z-[105]"
          >
            {/* Gold glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(200,151,58,0.12)_0%,transparent_70%)] pointer-events-none" />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="font-serif text-4xl font-bold text-white hover:text-[#C8973A] transition-colors text-center"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.5 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <a
                href="#order"
                onClick={() => setIsMenuOpen(false)}
                className="px-12 py-4 bg-[#C8973A] text-black font-sans text-xs font-bold tracking-[0.22em] uppercase rounded-full hover:bg-[#E4B863] transition-all duration-300 shadow-[0_0_30px_rgba(200,151,58,0.5)]"
              >
                Order Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
