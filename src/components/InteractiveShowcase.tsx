import React, { useState } from 'react';
import { HeroVisual } from './HeroVisual';
import { Sliders, CheckCircle2, Send, RotateCw, Sparkles } from 'lucide-react';

export const InteractiveShowcase: React.FC = () => {
  const [scaleVal, setScaleVal] = useState(1.0);
  const [rotationVal, setRotationVal] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [lighting, setLighting] = useState<'amber' | 'cyan' | 'monochrome'>('amber');
  
  // Lead capture state
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleReset = () => {
    setScaleVal(1.0);
    setRotationVal(0);
    setYOffset(0);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }
    if (!name.trim()) {
      setErrorMsg('Please provide your name or organization.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="specs" className="relative w-full py-28 bg-neutral-950 border-t border-neutral-900/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 text-xs font-mono-num uppercase tracking-widest text-amber-400 mb-3">
          <span>03</span>
          <span className="w-8 h-[1px] bg-amber-400/50" />
          <span>KINETIC BENCHMARK STUDIO</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Interactive Motion & Telemetry Rig
        </h2>
        <p className="mt-3 text-sm text-neutral-400 max-w-xl font-sans-body leading-relaxed">
          Manipulate the physical transform coordinates manually to examine the exact scale, rotation, and lighting properties driven by the scroll engine.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Visual Canvas */}
          <div className="lg:col-span-7 bg-neutral-900/30 rounded-2xl border border-neutral-800/80 p-6 sm:p-10 relative overflow-hidden flex flex-col items-center justify-center min-h-[420px]">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            
            {/* Live readout telemetry chip */}
            <div className="absolute top-4 left-4 flex items-center gap-3 text-[11px] font-mono-num text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE KINETICS
              </span>
              <span>·</span>
              <span>SCALE: {scaleVal.toFixed(2)}x</span>
              <span>·</span>
              <span>ROT: {rotationVal}°</span>
              <span>·</span>
              <span>Y: {yOffset}px</span>
            </div>

            {/* Transformable Visual Object */}
            <div
              className="w-full transition-transform duration-150 ease-out will-change-transform"
              style={{
                transform: `translateY(${yOffset}px) scale(${scaleVal}) rotate(${rotationVal}deg)`,
              }}
            >
              <HeroVisual lightingMode={lighting} />
            </div>
          </div>

          {/* Interactive Controls & Lead Capture */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono-num uppercase tracking-wider text-neutral-200">
                    Transform Coordinates
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-[11px] font-mono-num text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Slider 1: Scale */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-xs font-mono-num">
                  <span className="text-neutral-400">Scale Factor</span>
                  <span className="text-amber-400">{scaleVal.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="0.85"
                  max="1.30"
                  step="0.01"
                  value={scaleVal}
                  onChange={(e) => setScaleVal(parseFloat(e.target.value))}
                  className="w-full accent-amber-400 bg-neutral-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Rotation */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-xs font-mono-num">
                  <span className="text-neutral-400">Angular Yaw Rotation</span>
                  <span className="text-amber-400">{rotationVal}°</span>
                </div>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  step="0.5"
                  value={rotationVal}
                  onChange={(e) => setRotationVal(parseFloat(e.target.value))}
                  className="w-full accent-amber-400 bg-neutral-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 3: Vertical Position */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-xs font-mono-num">
                  <span className="text-neutral-400">Vertical Offset</span>
                  <span className="text-amber-400">{yOffset}px</span>
                </div>
                <input
                  type="range"
                  min="-60"
                  max="60"
                  step="1"
                  value={yOffset}
                  onChange={(e) => setYOffset(parseInt(e.target.value))}
                  className="w-full accent-amber-400 bg-neutral-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Lighting Mood selector */}
              <div className="mt-6 pt-5 border-t border-neutral-800">
                <span className="block text-xs font-mono-num text-neutral-400 mb-2 uppercase">
                  Studio Lighting Spectrum
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setLighting('amber')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                      lighting === 'amber'
                        ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Amber Beam
                  </button>
                  <button
                    type="button"
                    onClick={() => setLighting('cyan')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                      lighting === 'cyan'
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Cyan Aero
                  </button>
                  <button
                    type="button"
                    onClick={() => setLighting('monochrome')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                      lighting === 'monochrome'
                        ? 'border-neutral-400 bg-neutral-800 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Monochrome
                  </button>
                </div>
              </div>
            </div>

            {/* Lead capture / Private Discovery Call */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
              <span className="text-xs font-mono-num text-amber-400 uppercase tracking-wider block mb-1">
                PRIVATE PREVIEW
              </span>
              <h3 className="font-display font-semibold text-lg text-white">
                Request Engineering Spec Sheet
              </h3>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                Receive the confidential CAD geometry dossier and kinetic wind tunnel logbook.
              </p>

              {submitted ? (
                <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-emerald-300">
                      Dossier Dispatched
                    </span>
                    <span className="text-[11px] text-neutral-300">
                      The engineering telemetry package has been forwarded to {email}.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name or Org"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Business Email (e.g. name@studio.com)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  {errorMsg && (
                    <p className="text-[11px] text-rose-400">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-amber-400/20"
                  >
                    <span>Request Technical Dossier</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
