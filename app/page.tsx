'use client';

import { useState, useCallback, useRef } from 'react';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollCanvas from '@/components/ScrollCanvas';
import TextOverlay from '@/components/TextOverlay';
import TrustStrip from '@/components/TrustStrip';
import AboutSection from '@/components/AboutSection';
import DripsSection from '@/components/DripsSection';
import ShotBarSection from '@/components/ShotBarSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import ParallaxQuote from '@/components/ParallaxQuote';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Track overall page scroll progress for canvas
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
    // Start listening to scroll after load
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleProgress = useCallback((progress: number) => {
    setLoadProgress(progress);
  }, []);

  return (
    <>
      <LoadingScreen progress={loadProgress} onComplete={handleLoadComplete} />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.7s ease',
          minHeight: '100vh',
          pointerEvents: loaded ? 'auto' : 'none',
          backgroundColor: '#000000',
        }}
      >
        {/* ── Fixed scroll-animated canvas background ────────────── */}
        <ScrollCanvas progress={scrollProgress} onProgress={handleProgress} />

        {/* ── Fixed dark overlay over the canvas (subtle) ────────── */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.30) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Navbar ──────────────────────────────────────────────── */}
        <Navbar />

        {/* ── Hero section — tall, scroll-driven, frames show through ─ */}
        <div
          className="relative"
          style={{
            height: '500vh',
            zIndex: 2,
          }}
        >
          {/* Sticky hero overlay panel */}
          <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
            {/* Text overlay sits on top of the canvas */}
            <TextOverlay progress={scrollProgress} />
          </div>
        </div>

        {/* ── Trust strip — after hero ────────────────────────────── */}
        <div className="relative" style={{ zIndex: 10 }}>
          <ScrollReveal direction="up" distance={50}>
            <TrustStrip />
          </ScrollReveal>

          {/* About — slide up */}
          <ScrollReveal direction="up" distance={90} delay={0.05}>
            <AboutSection />
          </ScrollReveal>

          {/* Menu — dive up */}
          <ScrollReveal direction="up" distance={100} delay={0.08}>
            <DripsSection />
          </ScrollReveal>

          {/* Catering — slide from right */}
          <ScrollReveal direction="right" distance={80} delay={0.05}>
            <ShotBarSection />
          </ScrollReveal>

          {/* Features — dive up */}
          <ScrollReveal direction="up" distance={80}>
            <FeaturesSection />
          </ScrollReveal>

          {/* How It Works — slide up */}
          <ScrollReveal direction="up" distance={90} delay={0.05}>
            <ProcessSection />
          </ScrollReveal>

          {/* Parallax CTA — slide up */}
          <ScrollReveal direction="up" distance={60}>
            <ParallaxQuote />
          </ScrollReveal>

          {/* Reviews — dive up */}
          <ScrollReveal direction="up" distance={80} delay={0.05}>
            <TestimonialsSection />
          </ScrollReveal>

          {/* Contact — slide up */}
          <ScrollReveal direction="up" distance={70} delay={0.05}>
            <ContactSection />
          </ScrollReveal>

          {/* Footer — slide up */}
          <ScrollReveal direction="up" distance={50}>
            <Footer />
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
