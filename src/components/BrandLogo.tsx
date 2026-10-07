import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'amber' | 'original';
  height?: number | string;
}

/**
 * Precision vector SVG reproduction of the official iTZFiZZ brand logo.
 * Features the signature iconography:
 * - 'i': Signal/broadcast waves radiating from the dot
 * - 'T': Megaphone/horn acoustic speaker profile
 * - 'Z': Hydraulic/precision drips on the bottom corner
 * - 'F': Precision measurement ruler scale markings
 * - 'i': Magnifying glass with an ascending growth/analytics chart arrow
 * - 'Z': Code tags '</>' embedded in the diagonal crossbar
 * - 'Z': Kinetic terminal fin
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  height = 36,
}) => {
  // Color palette handling
  const getColors = () => {
    switch (variant) {
      case 'amber':
        return {
          bg: 'transparent',
          fill: '#FBBF24', // Amber 400
          accent: '#FFFFFF',
          chart: '#F59E0B',
          ruler: '#000000',
        };
      case 'original':
        return {
          bg: '#FDEEC8', // Warm vintage cream from original artwork
          fill: '#0A0A0A',
          accent: '#FDEEC8',
          chart: '#0A0A0A',
          ruler: '#FDEEC8',
        };
      case 'dark':
        return {
          bg: 'transparent',
          fill: '#18181B',
          accent: '#FFFFFF',
          chart: '#FBBF24',
          ruler: '#FFFFFF',
        };
      case 'light':
      default:
        return {
          bg: 'transparent',
          fill: '#FFFFFF',
          accent: '#0A0A0A',
          chart: '#FBBF24', // Amber highlight for the analytics arrow
          ruler: '#0A0A0A',
        };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      <svg
        viewBox="0 0 540 110"
        className="h-full w-auto max-h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="iTZFiZZ Brand Logo"
      >
        {/* Optional background for 'original' variant */}
        {variant === 'original' && (
          <rect width="540" height="110" rx="14" fill={colors.bg} />
        )}

        {/* =================================================================
            1. FIRST 'i': Lower stem + Dot with radiating broadcast waves
           ================================================================= */}
        {/* Lower stem of 'i' */}
        <rect
          x="12"
          y="48"
          width="26"
          height="54"
          rx="10"
          fill={colors.fill}
        />

        {/* Dot of 'i' */}
        <circle cx="28" cy="18" r="7.5" fill={colors.fill} />

        {/* Concentric broadcast/signal waves radiating to the left */}
        <path
          d="M 18 8 A 15 15 0 0 0 18 28"
          stroke={colors.fill}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 10 2 A 23 23 0 0 0 10 34"
          stroke={colors.fill}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* =================================================================
            2. 'T': Megaphone/horn flare on top-left bar + central stem
           ================================================================= */}
        {/* Horizontal bar with horn flare on the left */}
        <path
          d="
            M 48 8
            C 50 14, 52 18, 58 19
            L 190 19
            L 190 35
            L 122 35
            L 122 102
            L 96 102
            L 96 35
            L 58 35
            C 52 36, 50 40, 48 46
            Z
          "
          fill={colors.fill}
        />
        {/* Mouth/acoustic curve inside megaphone */}
        <path
          d="M 44 14 C 47 22, 47 32, 44 40"
          stroke={variant === 'original' ? '#FDEEC8' : colors.accent}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* =================================================================
            3. FIRST 'Z': Connected to 'T' with bottom hydraulic drips
           ================================================================= */}
        {/* 'Z' Body */}
        <path
          d="
            M 194 19
            L 242 19
            L 242 35
            L 182 86
            L 242 86
            L 242 102
            L 156 102
            L 156 86
            L 214 35
            L 194 35
            Z
          "
          fill={colors.fill}
        />
        {/* Dripping drops beneath the lower Z fold */}
        <rect x="166" y="94" width="5.5" height="12" rx="2.5" fill={colors.fill} />
        <rect x="175" y="94" width="5.5" height="16" rx="2.5" fill={colors.fill} />
        <rect x="184" y="94" width="5.5" height="9" rx="2.5" fill={colors.fill} />

        {/* =================================================================
            4. 'F': Ruler measurement markings on vertical stem
           ================================================================= */}
        {/* 'F' Solid outline */}
        <path
          d="
            M 252 19
            L 348 19
            L 348 35
            L 282 35
            L 282 52
            L 322 52
            L 322 68
            L 282 68
            L 282 102
            L 252 102
            Z
          "
          fill={colors.fill}
        />

        {/* Ruler Tick Marks carved into the vertical spine of 'F' */}
        <g stroke={variant === 'original' ? '#FDEEC8' : colors.accent} strokeWidth="3" strokeLinecap="round">
          {/* Major tick */}
          <line x1="256" y1="38" x2="268" y2="38" />
          {/* Minor tick */}
          <line x1="256" y1="46" x2="263" y2="46" />
          {/* Major tick */}
          <line x1="256" y1="54" x2="268" y2="54" />
          {/* Minor tick */}
          <line x1="256" y1="62" x2="263" y2="62" />
          {/* Major tick */}
          <line x1="256" y1="70" x2="268" y2="70" />
          {/* Minor tick */}
          <line x1="256" y1="78" x2="263" y2="78" />
          {/* Major tick */}
          <line x1="256" y1="86" x2="268" y2="86" />
        </g>
        {/* Precision Rivet/Hole at base of ruler */}
        <circle
          cx="267"
          cy="95"
          r="4.5"
          fill={variant === 'original' ? '#FDEEC8' : colors.accent}
        />

        {/* =================================================================
            5. SECOND 'i': Magnifying Glass Dot with Chart Arrow
           ================================================================= */}
        {/* Lower stem of second 'i' */}
        <rect
          x="350"
          y="48"
          width="24"
          height="54"
          rx="10"
          fill={colors.fill}
        />

        {/* Magnifying Glass Outer Rim */}
        <circle
          cx="362"
          cy="26"
          r="22"
          stroke={colors.fill}
          strokeWidth="6.5"
          fill="none"
        />

        {/* Inside Magnifying Glass: Ascending Stock/Analytics Line Chart */}
        <path
          d="M 346 32 L 354 36 L 366 22 L 378 14"
          stroke={colors.chart}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrowhead extending up-right */}
        <path
          d="M 370 14 L 380 14 L 380 24"
          stroke={colors.chart}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* =================================================================
            6. SECOND 'Z': With embedded code brackets '</>'
           ================================================================= */}
        {/* Body of second 'Z' */}
        <path
          d="
            M 398 19
            L 480 19
            L 480 35
            L 424 86
            L 484 86
            L 484 102
            L 398 102
            L 398 86
            L 454 35
            L 398 35
            Z
          "
          fill={colors.fill}
        />

        {/* Code Tag Brackets '</>' carved inside the diagonal bar */}
        <g stroke={variant === 'original' ? '#FDEEC8' : colors.accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          {/* '<' Left angle bracket */}
          <path d="M 444 54 L 436 60 L 444 66" />
          {/* '/' Slash */}
          <line x1="450" y1="52" x2="444" y2="68" />
          {/* '>' Right angle bracket */}
          <path d="M 452 54 L 460 60 L 452 66" />
        </g>

        {/* =================================================================
            7. FINAL 'Z': Connected Terminal Fin
           ================================================================= */}
        <path
          d="
            M 488 19
            L 532 19
            L 532 35
            L 484 86
            L 532 86
            L 532 102
            L 466 102
            L 466 86
            L 514 35
            L 488 35
            Z
          "
          fill={colors.fill}
        />
      </svg>
    </div>
  );
};
