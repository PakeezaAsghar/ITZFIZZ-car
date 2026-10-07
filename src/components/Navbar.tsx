import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Kinetic Hero', href: '#hero' },
    { label: 'Aerodynamics', href: '#about' },
    { label: 'Engineering', href: '#features' },
    { label: 'Performance', href: '#specs' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Official Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center transition-transform hover:scale-105 select-none"
          aria-label="iTZFiZZ Home"
        >
          <BrandLogo variant="light" height={30} />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary functional actions */}
        <div className="flex items-center gap-3">
          <a
            href="#specs"
            onClick={(e) => handleNavClick(e, '#specs')}
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap shadow-sm shadow-amber-400/20"
          >
            <span>Telemetry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-5 bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-xl">
          <div className="flex flex-col gap-4 text-sm font-medium tracking-wider uppercase text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#specs"
              onClick={(e) => handleNavClick(e, '#specs')}
              className="mt-2 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-semibold uppercase bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors"
            >
              <span>Explore Telemetry Specs</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
