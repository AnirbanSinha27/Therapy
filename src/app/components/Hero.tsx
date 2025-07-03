// components/hero.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100); // Small delay to allow menu to close before scrolling
  };

  return (
    <section className="relative w-full bg-[#f3f0e8]">
      {/* Header with logo and mobile menu */}
      <header className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Dr. Serena Blake Logo" 
            className="h-12 w-12 mr-3" 
          />
          <div className="font-display text-sm leading-tight text-[#333]">
            <p className="font-bold">Serena Blake Ph.D.</p>
            <p>Psychological Services PLLC</p>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="z-40 flex flex-col space-y-1.5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-[#333] transition ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#333] transition ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#333] transition ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-30 bg-[#f3f0e8] flex flex-col items-center justify-center space-y-8 text-xl">
            <button 
              onClick={() => handleMenuClick('about')}
              className="font-display hover:text-[#94b0b0] text-[#57574D]"
            >
              About
            </button>
            <button 
              onClick={() => handleMenuClick('services')}
              className="font-display hover:text-[#94b0b0] text-[#57574D]"
            >
              Services
            </button>
            <button 
              onClick={() => handleMenuClick('faq')}
              className="font-display hover:text-[#94b0b0] text-[#57574D]"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleMenuClick('contact')}
              className="font-display hover:text-[#94b0b0] text-[#57574D]"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      {/* Rest of your Hero component remains the same */}
      {/* Video container */}
      <div className="relative mx-auto px-6 md:px-10">
        <div className="relative h-[85vh] min-h-[500px] w-full overflow-hidden rounded-sm">
          {/* Video background with overlay */}
          <div className="absolute inset-0 z-10 h-full w-full bg-black/40" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Hero content */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-3xl px-4"
            >
              <h1 className="mb-6 font-display text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
                <span className="block">Psychological Care for</span>
                <span className="block">Change, Insight, and Well-Being</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg">
                Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
              </p>
              <Link
                href="#contact"
                className="mx-auto inline-flex h-14 items-center justify-center rounded-full bg-[#94b0b0] px-10 py-4 font-sans text-sm font-medium text-white transition-colors hover:bg-[#7a9a9a] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#94b0b0]"
                style={{ borderRadius: '9999px' }}
              >
                SCHEDULE A CONSULTATION
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}