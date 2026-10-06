import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cockpitImage from '../assets/images/feature_cockpit_interior_1791310372053.jpg';
import { Cpu, Gauge, Compass, Zap, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('[data-feature-card]');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.16,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative w-full py-28 sm:py-36 bg-neutral-950 border-t border-neutral-900/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono-num uppercase tracking-widest text-amber-400 mb-3">
              <span>02</span>
              <span className="w-8 h-[1px] bg-amber-400/50" />
              <span>CORE SPECIFICATIONS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-100 tracking-tight">
              Calibrated for Extreme Equilibrium.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans-body leading-relaxed">
            Every subsystem is engineered to deliver instantaneous physical response. Four synchronized electric power-plants coordinate through a continuous kinetic bus.
          </p>
        </div>

        {/* Asymmetric Bento-style Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: Large Featured Cockpit (Spans 7 cols) */}
          <div
            data-feature-card
            className="md:col-span-7 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-neutral-800/90 p-6 sm:p-8 flex flex-col justify-between group hover:border-neutral-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-num text-amber-400 tracking-wider">
                  SYSTEM // HUD-INTERIOR
                </span>
                <span className="text-xs font-mono-num text-neutral-400">
                  REFLEX LATENCY: &lt;1.8MS
                </span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-white">
                Tactile Cockpit & Neural HUD
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed max-w-xl">
                Minimalist curved glass instrumentation and haptic drive telemetry immerse the operator directly in the kinetic flow with zero digital interference.
              </p>
            </div>

            {/* Embedded Cockpit Feature Image */}
            <div className="mt-6 rounded-xl overflow-hidden border border-neutral-800 relative aspect-[16/9]">
              <img
                src={cockpitImage}
                alt="ITZFIZZ Minimalist luxury hypercar cockpit interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-xs font-mono-num text-neutral-300">
                Carbon-Yoke Steering Assembly
              </div>
            </div>
          </div>

          {/* Card 2: Kinetic Regenerative Core (Spans 5 cols) */}
          <div
            data-feature-card
            className="md:col-span-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono-num text-amber-400 uppercase tracking-wider">
                POWERTRAIN
              </span>
              <h3 className="font-display font-semibold text-2xl text-white mt-1">
                900V Kinetic Energy Core
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Silicon carbide inverters with 98.2% peak efficiency generate immediate rotational torque without thermal degradation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Peak System Output</span>
                <span className="font-mono-num font-semibold text-white">1,420 HP (1,044 kW)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">0 - 100 km/h Launch</span>
                <span className="font-mono-num font-semibold text-amber-400">1.84 Seconds</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Thermal Tolerance</span>
                <span className="font-mono-num font-semibold text-white">-30°C to +65°C</span>
              </div>
            </div>
          </div>

          {/* Card 3: Active Torque Vectoring (Spans 6 cols) */}
          <div
            data-feature-card
            className="md:col-span-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 p-6 sm:p-8 hover:border-neutral-700 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono-num text-amber-400 uppercase tracking-wider">
              DYNAMICS
            </span>
            <h3 className="font-display font-semibold text-xl text-white mt-1">
              Micro-Second Torque Vectoring
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Autonomous individual wheel torque calculation executes 1,000 times per second, guaranteeing razor-sharp apex carving in high-G corners.
            </p>
            <div className="mt-6 flex items-center gap-6 pt-4 border-t border-neutral-800 text-xs">
              <div>
                <span className="block font-mono-num font-bold text-lg text-white">2.1G</span>
                <span className="text-neutral-500">Lateral Cornering</span>
              </div>
              <div className="h-8 w-[1px] bg-neutral-800" />
              <div>
                <span className="block font-mono-num font-bold text-lg text-amber-400">0.001s</span>
                <span className="text-neutral-500">Yaw Sampling</span>
              </div>
            </div>
          </div>

          {/* Card 4: Autonomous Reflex Telemetry (Spans 6 cols) */}
          <div
            data-feature-card
            className="md:col-span-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 p-6 sm:p-8 hover:border-neutral-700 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono-num text-amber-400 uppercase tracking-wider">
              COMPUTE
            </span>
            <h3 className="font-display font-semibold text-xl text-white mt-1">
              Predictive Telemetry Array
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Optical surface preview sensors scan road irregularities 15 meters ahead, pre-adjusting active magnetic dampers before tire contact.
            </p>
            <div className="mt-6 flex items-center gap-6 pt-4 border-t border-neutral-800 text-xs">
              <div>
                <span className="block font-mono-num font-bold text-lg text-white">48,000</span>
                <span className="text-neutral-500">Nm/° Monocoque Rigidity</span>
              </div>
              <div className="h-8 w-[1px] bg-neutral-800" />
              <div>
                <span className="block font-mono-num font-bold text-lg text-amber-400">99.8%</span>
                <span className="text-neutral-500">Chassis Damping Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
