import React, { useState } from 'react';

// Default visual asset can be cleanly swapped here
import defaultCarImage from '../assets/images/hero_hypercar_visual_1791310349344.jpg';

interface HeroVisualProps {
  customImageSrc?: string;
  className?: string;
  lightingMode?: 'amber' | 'cyan' | 'monochrome';
  isHovered?: boolean;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({
  customImageSrc,
  className = '',
  lightingMode = 'amber',
}) => {
  const [imageError, setImageError] = useState(false);
  const imageSrc = customImageSrc || defaultCarImage;

  // Glow color scheme mapped to theme
  const glowColors = {
    amber: 'rgba(245, 158, 11, 0.28)',
    cyan: 'rgba(6, 182, 212, 0.28)',
    monochrome: 'rgba(255, 255, 255, 0.2)',
  };

  return (
    <div className={`relative w-full max-w-4xl mx-auto select-none pointer-events-auto ${className}`}>
      {/* Ground reflection & shadow matrix */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[88%] h-24 rounded-[100%] blur-3xl pointer-events-none transition-all duration-700 opacity-80"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColors[lightingMode]} 0%, rgba(0,0,0,0.85) 60%, transparent 80%)`,
        }}
      />
      
      {/* Subtle underbody ground shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[76%] h-10 bg-black/90 rounded-[100%] blur-md pointer-events-none" />

      {/* Main visual wrapper */}
      <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 bg-gradient-to-b from-neutral-900/60 via-neutral-950/80 to-black/90 p-2 sm:p-3 shadow-2xl shadow-black/80 backdrop-blur-sm group">
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-10" />

        {/* Aerodynamic trace line accents */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none z-10" />

        {!imageError ? (
          <img
            src={imageSrc}
            alt="ITZFIZZ Kinetic Hypercar Prototype"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-auto object-contain rounded-xl transform transition-transform duration-500 will-change-transform filter contrast-[1.05] brightness-[1.02]"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          /* High-fidelity CSS/SVG Fallback if image asset fails to load */
          <div className="w-full aspect-[16/9] bg-neutral-900 flex flex-col items-center justify-center rounded-xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <svg
              className="w-48 h-28 text-amber-400/80 mb-4"
              viewBox="0 0 240 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Sleek aerodynamic concept vehicle silhouette */}
              <path d="M 15 85 L 45 85 Q 55 55 90 48 L 160 48 Q 195 55 225 85 L 235 85" />
              <path d="M 60 48 Q 90 20 140 20 Q 180 20 195 48" strokeWidth="1.5" />
              <circle cx="55" cy="85" r="14" fill="#171717" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="185" cy="85" r="14" fill="#171717" stroke="currentColor" strokeWidth="2.5" />
              <path d="M 95 48 L 115 25" strokeDasharray="3 3" opacity="0.5" />
              <path d="M 145 25 L 155 48" strokeDasharray="3 3" opacity="0.5" />
            </svg>
            <span className="font-display text-sm tracking-widest text-neutral-300 uppercase">
              ITZFIZZ KINETIC SPECIMEN A-01
            </span>
            <span className="text-xs text-neutral-500 mt-1">
              Aerodynamic Carbon Silhouette
            </span>
          </div>
        )}

        {/* Corner alignment markers for precision engineering aesthetic */}
        <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-neutral-600/60 pointer-events-none" />
        <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-neutral-600/60 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-neutral-600/60 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-neutral-600/60 pointer-events-none" />
      </div>
    </div>
  );
};
