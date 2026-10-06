import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aeroImage from '../assets/images/feature_aero_chassis_1791310361849.jpg';
import { Wind, Gauge, ShieldCheck, Zap } from 'lucide-react';
import { Stats } from './Stats';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textContentRef = useRef<HTMLDivElement | null>(null);
  const mediaContentRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<'aero' | 'structure' | 'downforce'>('aero');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance animation triggered when scrolling into view
      gsap.fromTo(
        textContentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        mediaContentRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tabData = {
    aero: {
      title: '0.198 Drag Coefficient',
      desc: 'Active rear micro-vanes and laminar ducting streamline vortex shedding across high-velocity corridors.',
      stat: '0.198 Cd',
      statLabel: 'Laminar Airflow',
    },
    structure: {
      title: 'Dry Carbon Monocoque',
      desc: 'Molded under 12 bars of autoclave pressure, producing an ultra-rigid safety tub with 48,000 Nm/deg torsional resistance.',
      stat: '48k Nm/°',
      statLabel: 'Torsional Stiffness',
    },
    downforce: {
      title: '780 kg Dynamic Downforce',
      desc: 'Ground-effect venturi channels create negative pressure beneath the undercarriage without parasite drag.',
      stat: '780 kg',
      statLabel: 'At 240 km/h',
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 bg-neutral-950 border-t border-neutral-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Baseline Impact Statistics transition from Hero */}
        <div className="mb-20 pb-8 border-b border-neutral-900">
          <Stats />
        </div>

        {/* Section kicker */}
        <div className="flex items-center gap-3 text-xs font-mono-num uppercase tracking-widest text-amber-400 mb-4">
          <span>01</span>
          <span className="w-8 h-[1px] bg-amber-400/50" />
          <span>AERODYNAMIC ARCHITECTURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Paragraph, and Interactive Tabs */}
          <div ref={textContentRef} className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-100 tracking-tight leading-[1.15]">
              Engineered for Velocity. <br />
              <span className="text-amber-400">Sculpted by the Wind.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-neutral-400 font-sans-body leading-relaxed max-w-xl">
              Every contour of the ITZFIZZ prototype is a masterclass in aerodynamic discipline. Built with dry carbon weave and active ground-effect downforce, it achieves unyielding poise at extreme velocities without sacrificing sublime tactile control.
            </p>

            {/* Interactive feature selector tabs */}
            <div className="mt-8 flex flex-wrap gap-2 p-1 bg-neutral-900/80 rounded-xl border border-neutral-800 w-fit">
              <button
                type="button"
                onClick={() => setActiveTab('aero')}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'aero'
                    ? 'bg-amber-400 text-neutral-950 shadow-md font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Aerodynamics
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('structure')}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'structure'
                    ? 'bg-amber-400 text-neutral-950 shadow-md font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Carbon Structure
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('downforce')}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'downforce'
                    ? 'bg-amber-400 text-neutral-950 shadow-md font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Ground Downforce
              </button>
            </div>

            {/* Active Tab Explanatory Box */}
            <div className="mt-6 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-3">
                <span className="text-sm font-semibold text-white">
                  {tabData[activeTab].title}
                </span>
                <span className="text-sm font-mono-num text-amber-400 font-bold">
                  {tabData[activeTab].stat}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {tabData[activeTab].desc}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Media Asset Showcase */}
          <div ref={mediaContentRef} className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40 p-3 shadow-2xl shadow-black/60 group">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                <img
                  src={aeroImage}
                  alt="ITZFIZZ Wind tunnel aerodynamic airflow study"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />
                
                {/* Visual telemetry annotation badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-xs font-mono-num text-neutral-200">
                  <Wind className="w-3.5 h-3.5 text-amber-400" />
                  <span>WIND TUNNEL SIMULATION // FLOW-04</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-neutral-950/85 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono-num text-amber-400 border border-neutral-800">
                  VELOCITY: 320 KM/H
                </div>
              </div>

              {/* Technical indicators under image */}
              <div className="mt-3 grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800/80 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-neutral-500">Airflow Efficiency</span>
                  <span className="text-sm font-mono-num font-semibold text-neutral-200">99.4%</span>
                </div>
                <div className="flex flex-col items-center border-x border-neutral-800">
                  <span className="text-xs text-neutral-500">Boundary Layer</span>
                  <span className="text-sm font-mono-num font-semibold text-amber-400">0.42 mm</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-neutral-500">Stability Rating</span>
                  <span className="text-sm font-mono-num font-semibold text-neutral-200">Class AAA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
