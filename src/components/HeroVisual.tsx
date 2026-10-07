import React, { useState } from 'react';

// Use the seamless transparent cutout of the exact real car asset (zero card boundaries)
import seamlessCarImage from '../assets/images/hero_car_seamless.png';

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
  const imageSrc = customImageSrc || seamlessCarImage;

  // Glow color scheme mapped to theme
  const glowColors = {
    amber: 'rgba(245, 158, 11, 0.35)',
    cyan: 'rgba(6, 182, 212, 0.35)',
    monochrome: 'rgba(255, 255, 255, 0.25)',
  };

  return (
    /* Pure vehicle container - strictly NO card frame, NO borders, NO card background */
    <div className={`relative w-full max-w-4xl mx-auto select-none pointer-events-auto flex items-center justify-center ${className}`}>
      {/* Ground reflection & shadow matrix underneath vehicle */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-20 rounded-[100%] blur-3xl pointer-events-none transition-all duration-700 opacity-70"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColors[lightingMode]} 0%, rgba(0,0,0,0.9) 65%, transparent 80%)`,
        }}
      />
      
      {/* Precision underbody ground contact shadow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[72%] h-8 bg-black/95 rounded-[100%] blur-md pointer-events-none" />

      {/* The isolated real vehicle object (no card framing) */}
      <div className="relative w-full flex items-center justify-center">
        {!imageError ? (
          <img
            src={imageSrc}
            alt="ITZFIZZ Kinetic Hypercar Prototype"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-auto object-contain filter contrast-[1.08] brightness-[1.02] drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transform will-change-transform"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          /* High-fidelity CSS/SVG Fallback if image asset fails to load */
          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <svg
              className="w-64 h-36 text-amber-400 mb-2 drop-shadow-lg"
              viewBox="0 0 240 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 15 85 L 45 85 Q 55 55 90 48 L 160 48 Q 195 55 225 85 L 235 85" />
              <path d="M 60 48 Q 90 20 140 20 Q 180 20 195 48" strokeWidth="1.5" />
              <circle cx="55" cy="85" r="14" fill="#171717" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="185" cy="85" r="14" fill="#171717" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <span className="font-display text-xs tracking-widest text-neutral-300 uppercase">
              ITZFIZZ KINETIC PROTOTYPE
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
