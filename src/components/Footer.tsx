import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'Aerodynamics', href: '#about' },
    { label: 'Engineering', href: '#features' },
    { label: 'Telemetry', href: '#specs' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 py-10 sm:py-14 px-4 sm:px-6 md:px-8 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Main responsive row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 sm:gap-8">
          {/* Brand Wordmark & Description */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 text-center sm:text-left">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="font-display font-extrabold text-xl sm:text-2xl tracking-widest text-white hover:text-amber-400 transition-colors uppercase"
            >
              ITZFIZZ
            </a>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span className="text-xs text-neutral-400 font-sans-body">
              Kinetic Motion & Aerodynamic Studio
            </span>
          </div>

          {/* Navigation Links: wraps cleanly on small phones, inline on tablets & laptops */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-xs uppercase tracking-wider font-medium text-neutral-400"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-amber-400 transition-colors py-2 px-1 text-center whitespace-nowrap min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top button: accessible touch target (min 44px) */}
          <div className="flex items-center justify-center">
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top of page"
              className="flex items-center gap-2 text-xs font-mono-num text-neutral-400 hover:text-amber-400 hover:border-amber-400/40 transition-colors px-4 py-2.5 min-h-[44px] rounded-xl border border-neutral-800 bg-neutral-900/50 cursor-pointer shadow-sm"
            >
              <span className="tracking-widest uppercase">BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom hairline & copyright */}
        <div className="pt-6 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] sm:text-xs text-neutral-500 font-mono-num">
          <span>
            © {new Date().getFullYear()} ITZFIZZ. All rights reserved.
          </span>
          <span className="text-neutral-600">
            Engineered with GSAP & ScrollTrigger
          </span>
        </div>
      </div>
    </footer>
  );
};
