import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import realCarImage from '../assets/images/hero_hypercar_visual_1791310349344.jpg';
import { ChevronDown, TrendingUp, PhoneCall, PackageCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onScrollProgress?: (progress: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollProgress }) => {
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const trackContainerRef = useRef<HTMLDivElement | null>(null);
  const roadTrackRef = useRef<HTMLDivElement | null>(null);
  const trailFillRef = useRef<HTMLDivElement | null>(null);
  const carWrapperRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  // Floating Stat Card references (matching the video positions, styled to site palette)
  const card1Ref = useRef<HTMLDivElement | null>(null); // 58%
  const card2Ref = useRef<HTMLDivElement | null>(null); // 23%
  const card3Ref = useRef<HTMLDivElement | null>(null); // 27%
  const card4Ref = useRef<HTMLDivElement | null>(null); // 40%

  const bottomStatsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // -----------------------------------------------------------------
      // INITIAL LOAD ANIMATION:
      // Entrance sequence for road track, real car, and cards
      // -----------------------------------------------------------------
      const loadTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.1 },
      });

      if (!prefersReducedMotion) {
        // Track appearance
        loadTl.fromTo(
          roadTrackRef.current,
          { opacity: 0, scaleY: 0.9 },
          { opacity: 1, scaleY: 1, duration: 1.0 },
          0.1
        );

        // Real car entrance
        loadTl.fromTo(
          carWrapperRef.current,
          { opacity: 0, x: -70 },
          { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' },
          0.3
        );

        // Initial road is blank before the car drives: 0% trail, all letters hidden
        gsap.set(trailFillRef.current, { width: '0%' });
        const allChars = headlineRef.current?.querySelectorAll('[data-track-char]');
        if (allChars && allChars.length > 0) {
          gsap.set(allChars, { opacity: 0, scale: 0.65, y: 12 });
        }

        // Set initial state of cards: scaled down & hidden
        gsap.set([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
          opacity: 0,
          scale: 0.65,
          transformOrigin: 'center center',
        });
      } else {
        const allChars = headlineRef.current?.querySelectorAll('[data-track-char]');
        if (allChars && allChars.length > 0) {
          gsap.set(allChars, { opacity: 1, scale: 1, y: 0 });
        }
        gsap.set([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
          opacity: 1,
          scale: 1,
        });
      }

      // -----------------------------------------------------------------
      // SCROLL-DRIVEN ANIMATION:
      // Real car travels smoothly horizontally along the track on scroll.
      // Amber kinetic trail expands behind the car.
      // Floating stat cards pop in sequentially as the car drives past.
      // -----------------------------------------------------------------
      if (!prefersReducedMotion && heroSectionRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: 1.0,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              onScrollProgress?.(self.progress);
            },
          },
        });

        // 1. REAL CAR HORIZONTAL DRIVE:
        // Translates across the road from left to right, leaving a little bit of the car
        // (approx 22% of the rear tail) visible at the right edge, without obstructing WELCOME ITZFIZZ
        scrollTl.to(
          carWrapperRef.current,
          {
            x: () => {
              const trackWidth = roadTrackRef.current ? roadTrackRef.current.clientWidth : (window.innerWidth - 32);
              const carWidth = carWrapperRef.current ? carWrapperRef.current.clientWidth : 260;
              return Math.max(0, trackWidth - (carWidth * 0.22));
            },
            ease: 'none',
          },
          0
        );

        // 2. AMBER KINETIC TRAIL EXPANDS IN SYNC
        scrollTl.to(
          trailFillRef.current,
          {
            width: '100%',
            ease: 'none',
          },
          0
        );

        // 3. LETTER-BY-LETTER REVEAL:
        // As the car drives across the road, letters pop up one by one in sync with the car passing
        const allChars = headlineRef.current?.querySelectorAll('[data-track-char]');
        if (allChars && allChars.length > 0) {
          scrollTl.fromTo(
            allChars,
            { opacity: 0, scale: 0.65, y: 12 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.08,
              stagger: 0.044, // Sequential letter-by-letter reveal
              ease: 'back.out(1.6)',
            },
            0.08
          );
        }

        // 5. STAT CARD 1: 58% (Top Left)
        scrollTl.fromTo(
          card1Ref.current,
          { opacity: 0, scale: 0.65, y: -20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.22,
            ease: 'back.out(1.8)',
          },
          0.16
        );

        // 6. STAT CARD 2: 23% (Bottom Left)
        scrollTl.fromTo(
          card2Ref.current,
          { opacity: 0, scale: 0.65, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.22,
            ease: 'back.out(1.8)',
          },
          0.26
        );

        // 5. STAT CARD 3: 27% (Top Right)
        scrollTl.fromTo(
          card3Ref.current,
          { opacity: 0, scale: 0.65, y: -20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.22,
            ease: 'back.out(1.8)',
          },
          0.50
        );

        // 6. STAT CARD 4: 40% (Bottom Right)
        scrollTl.fromTo(
          card4Ref.current,
          { opacity: 0, scale: 0.65, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.22,
            ease: 'back.out(1.8)',
          },
          0.60
        );

        // 7. Parallax settling
        if (bottomStatsRef.current) {
          scrollTl.to(
            bottomStatsRef.current,
            {
              y: -8,
              opacity: 0.95,
              ease: 'none',
            },
            0.75
          );
        }
      }
    }, heroSectionRef);

    return () => {
      ctx.revert();
    };
  }, [onScrollProgress]);

  return (
    <section
      id="hero"
      ref={heroSectionRef}
      className="relative w-full h-screen min-h-[760px] flex flex-col justify-between overflow-hidden bg-neutral-950 px-3 sm:px-6 md:px-8 py-16 select-none"
    >
      {/* Background road texture & subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-hero-glow rounded-full blur-3xl pointer-events-none opacity-40" />

      {/* Top Header / Kicker */}
      <div className="relative z-20 w-full max-w-6xl mx-auto pt-4 sm:pt-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono-num text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>SCROLL-DRIVEN KINETIC ROAD // PROTOCOL A-01</span>
        </div>
      </div>

      {/* =========================================================================
          MAIN HORIZONTAL CAR TRACK & FLOATING STAT CARDS
         ========================================================================= */}
      <div
        ref={trackContainerRef}
        className="relative z-30 w-full max-w-7xl mx-auto my-auto flex flex-col items-center justify-center min-h-[380px]"
      >
        {/* -------------------------------------------------------------
            TOP FLOATING STAT CARDS (Styled to website color palette)
           ------------------------------------------------------------- */}
        <div className="w-full relative h-24 sm:h-28 md:h-32 pointer-events-none">
          {/* Card 1: 58% (Top-Left) */}
          <div
            ref={card1Ref}
            className="absolute left-[4%] sm:left-[12%] md:left-[18%] bottom-2 sm:bottom-3 pointer-events-auto shadow-2xl shadow-black/80 rounded-2xl p-3 sm:p-4 md:p-5 w-40 sm:w-52 md:w-56 bg-neutral-900/95 backdrop-blur-md border border-amber-400/40 text-white transform transition-transform hover:scale-105"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-amber-400 font-mono-num">
                58%
              </span>
              <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400/80" />
            </div>
            <p className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-200 leading-snug">
              Increase in pick up point use
            </p>
          </div>

          {/* Card 3: 27% (Top-Right) */}
          <div
            ref={card3Ref}
            className="absolute right-[4%] sm:right-[12%] md:right-[18%] bottom-2 sm:bottom-3 pointer-events-auto shadow-2xl shadow-black/80 rounded-2xl p-3 sm:p-4 md:p-5 w-40 sm:w-52 md:w-56 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 hover:border-amber-400/40 text-white transform transition-transform hover:scale-105"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-white font-mono-num">
                27%
              </span>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
            </div>
            <p className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-300 leading-snug">
              Increase in pick up point use
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------------
            THE HORIZONTAL ROAD TRACK
           ------------------------------------------------------------- */}
        <div
          ref={roadTrackRef}
          className="relative w-full h-32 sm:h-40 md:h-48 bg-[#15171B] rounded-2xl overflow-hidden shadow-2xl border-y border-neutral-800 flex items-center"
        >
          {/* Road center lane markings */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="w-full h-[2px] bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_28px,transparent_28px,transparent_56px)]" />
          </div>

          {/* AMBER KINETIC TRAIL (Behind the car, matching website color palette) */}
          <div
            ref={trailFillRef}
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-amber-500/20 via-amber-400/35 to-amber-400/70 border-r-2 border-amber-300 transition-none pointer-events-none z-10 overflow-hidden flex items-center"
            style={{ width: '12%', willChange: 'width' }}
          >
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-r from-transparent to-amber-200/50 pointer-events-none" />
          </div>

          {/* WHOLE HEADLINE: "WELCOME ITZFIZZ"
              Initially blank on page load. Revealed letter-by-letter as the car drives past */}
          <div className="absolute inset-0 flex items-center justify-center z-25 pointer-events-none px-4 pr-14 sm:pr-20 md:pr-28 lg:pr-32 w-full">
            <h1
              ref={headlineRef}
              className="font-display font-black text-[clamp(1.1rem,3.4vw,3.75rem)] tracking-wider sm:tracking-widest uppercase select-none whitespace-nowrap text-center max-w-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            >
              <span className="inline-block mr-3 sm:mr-5">
                {'WELCOME'.split('').map((char, index) => (
                  <span
                    key={`w-${index}`}
                    data-track-char
                    className="inline-block will-change-transform text-neutral-100"
                    style={{ opacity: 0 }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className="inline-block text-amber-400">
                {'ITZFIZZ'.split('').map((char, index) => (
                  <span
                    key={`i-${index}`}
                    data-track-char
                    className="inline-block will-change-transform text-amber-400"
                    style={{ opacity: 0 }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* -------------------------------------------------------------
              REAL CAR (Exact same luxury hypercar image used before)
             ------------------------------------------------------------- */}
          <div
            ref={carWrapperRef}
            className="absolute left-2 sm:left-4 z-20 flex items-center justify-center pointer-events-none w-44 sm:w-56 md:w-68 lg:w-80 select-none"
            style={{ willChange: 'transform' }}
          >
            <div className="relative w-full">
              {/* Realistic ground underbody shadow */}
              <div className="absolute -bottom-2 left-4 right-4 h-7 bg-black/95 blur-md rounded-full pointer-events-none" />
              
              {/* Forward glowing amber headlight beam shining onto road */}
              <div
                className="absolute top-1/2 -right-20 -translate-y-1/2 w-36 h-24 pointer-events-none opacity-45 blur-lg"
                style={{
                  background:
                    'radial-gradient(ellipse at left, rgba(251, 191, 36, 0.7) 0%, rgba(245, 158, 11, 0.25) 45%, transparent 80%)',
                }}
              />

              {/* Exact real car image */}
              <img
                src={realCarImage}
                alt="ITZFIZZ Kinetic Hypercar"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] filter contrast-[1.06] brightness-[1.02]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            BOTTOM FLOATING STAT CARDS (Styled to website color palette)
           ------------------------------------------------------------- */}
        <div className="w-full relative h-24 sm:h-28 md:h-32 pointer-events-none">
          {/* Card 2: 23% (Bottom-Left) */}
          <div
            ref={card2Ref}
            className="absolute left-[8%] sm:left-[16%] md:left-[22%] top-2 sm:top-3 pointer-events-auto shadow-2xl shadow-black/80 rounded-2xl p-3 sm:p-4 md:p-5 w-40 sm:w-52 md:w-56 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 hover:border-amber-400/40 text-white transform transition-transform hover:scale-105"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-amber-300 font-mono-num">
                23%
              </span>
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300/80" />
            </div>
            <p className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-200 leading-snug">
              Decreased in customer phone calls
            </p>
          </div>

          {/* Card 4: 40% (Bottom-Right) */}
          <div
            ref={card4Ref}
            className="absolute right-[8%] sm:right-[16%] md:right-[22%] top-2 sm:top-3 pointer-events-auto shadow-2xl shadow-black/80 rounded-2xl p-3 sm:p-4 md:p-5 w-40 sm:w-52 md:w-56 bg-neutral-900/95 backdrop-blur-md border border-amber-400/40 text-white transform transition-transform hover:scale-105"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-amber-400 font-mono-num">
                40%
              </span>
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400/80" />
            </div>
            <p className="text-[11px] sm:text-xs md:text-[13px] font-semibold text-neutral-200 leading-snug">
              Decreased in customer phone calls
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM SECTION: Just Scroll Down
         ========================================================================= */}
      <div ref={bottomStatsRef} className="relative z-20 w-full max-w-xs mx-auto pb-4 flex justify-center">
        <div
          className="flex items-center gap-2 text-xs text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer group select-none py-2 px-4 rounded-full bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm"
          onClick={() => {
            const aboutEl = document.getElementById('about');
            aboutEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs font-mono-num uppercase tracking-widest text-neutral-400 group-hover:text-amber-400 transition-colors">
            Scroll down
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </div>
      </div>
    </section>
  );
};
