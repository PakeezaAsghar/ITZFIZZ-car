import React from 'react';

interface TopDownCarProps {
  className?: string;
  bodyColor?: string;
}

export const TopDownCar: React.FC<TopDownCarProps> = ({
  className = '',
  bodyColor = '#FF6B00', // Iconic Papaya Orange from reference video
}) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      {/* Front Headlight Light Beams shining forward on road */}
      <div
        className="absolute top-1/2 -right-32 -translate-y-1/2 w-44 h-32 pointer-events-none opacity-40 blur-xl"
        style={{
          background:
            'radial-gradient(ellipse at left, rgba(255, 255, 255, 0.7) 0%, rgba(255, 220, 150, 0.25) 40%, transparent 80%)',
          transform: 'translateX(20px)',
        }}
      />

      {/* Underbody Drop Shadow */}
      <div className="absolute inset-0 bg-black/80 blur-md rounded-[40px] transform scale-95 translate-y-1" />

      {/* High-Fidelity Vector Top-Down Hypercar (facing right) */}
      <svg
        viewBox="0 0 340 140"
        className="w-full h-auto drop-shadow-2xl relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Body Paint Gradient */}
          <linearGradient id="carBodyPaint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A1A" />
            <stop offset="45%" stopColor={bodyColor} />
            <stop offset="85%" stopColor="#D94E00" />
            <stop offset="100%" stopColor="#B33E00" />
          </linearGradient>

          {/* Roof & Cockpit Glass Gradient */}
          <linearGradient id="glassRoof" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#1C1F24" />
            <stop offset="30%" stopColor="#2D333B" />
            <stop offset="60%" stopColor="#121417" />
            <stop offset="100%" stopColor="#0B0D0F" />
          </linearGradient>

          {/* Carbon Fiber Accent */}
          <linearGradient id="carbonTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18181B" />
            <stop offset="50%" stopColor="#27272A" />
            <stop offset="100%" stopColor="#18181B" />
          </linearGradient>

          {/* Windshield Sheen Reflection */}
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* --- WHEELS (Nestled into arches) --- */}
        {/* Front Top Wheel */}
        <rect x="235" y="8" width="46" height="15" rx="5" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />
        <rect x="238" y="10" width="40" height="4" rx="2" fill="#3F3F46" />
        {/* Front Bottom Wheel */}
        <rect x="235" y="117" width="46" height="15" rx="5" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />
        <rect x="238" y="126" width="40" height="4" rx="2" fill="#3F3F46" />
        {/* Rear Top Wheel */}
        <rect x="68" y="6" width="50" height="17" rx="5" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />
        <rect x="71" y="8" width="44" height="4" rx="2" fill="#3F3F46" />
        {/* Rear Bottom Wheel */}
        <rect x="68" y="117" width="50" height="17" rx="5" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />
        <rect x="71" y="128" width="44" height="4" rx="2" fill="#3F3F46" />

        {/* --- REAR SPOILER / WING (Black Carbon) --- */}
        <path
          d="M 22 26 C 26 24 38 22 45 22 L 45 118 C 38 118 26 116 22 114 C 18 112 16 95 16 70 C 16 45 18 28 22 26 Z"
          fill="url(#carbonTrim)"
          stroke="#09090B"
          strokeWidth="1.5"
        />
        {/* Wing Endplates */}
        <rect x="18" y="20" width="22" height="6" rx="2" fill="#27272A" />
        <rect x="18" y="114" width="22" height="6" rx="2" fill="#27272A" />

        {/* --- MAIN CAR CHASSIS / BODYWORK --- */}
        <path
          d="
            M 325 70
            C 325 62, 312 42, 290 32
            C 275 25, 255 24, 230 24
            C 215 24, 200 28, 185 30
            C 165 32, 140 28, 115 25
            C 90 22, 65 24, 45 32
            C 36 36, 32 46, 32 70
            C 32 94, 36 104, 45 108
            C 65 116, 90 118, 115 115
            C 140 112, 165 108, 185 110
            C 200 112, 215 116, 230 116
            C 255 116, 275 115, 290 108
            C 312 98, 325 78, 325 70
            Z
          "
          fill="url(#carBodyPaint)"
          stroke="#993300"
          strokeWidth="1.5"
        />

        {/* Aerodynamic Side Air Intakes / Scallops */}
        <path
          d="M 125 32 C 145 36 170 38 185 34 C 185 38 165 44 140 43 Z"
          fill="#1C1F24"
        />
        <path
          d="M 125 108 C 145 104 170 102 185 106 C 185 102 165 96 140 97 Z"
          fill="#1C1F24"
        />

        {/* Front Hood Contours */}
        <path
          d="M 292 60 C 275 56 250 56 235 58 L 235 82 C 250 84 275 84 292 80 Z"
          fill="#E65100"
          opacity="0.5"
        />
        {/* Front Hood Center Carbon Vent */}
        <path
          d="M 270 66 L 252 66 C 248 66 245 68 245 70 C 245 72 248 74 252 74 L 270 74 Z"
          fill="#18181B"
        />

        {/* Front Headlights (Aggressive Angular LEDs) */}
        {/* Top Headlight */}
        <path
          d="M 298 42 L 314 54 C 310 56 300 55 292 50 C 288 47 292 43 298 42 Z"
          fill="#F8FAFC"
          stroke="#38BDF8"
          strokeWidth="1.2"
        />
        {/* Bottom Headlight */}
        <path
          d="M 298 98 L 314 86 C 310 84 300 85 292 90 C 288 93 292 97 298 98 Z"
          fill="#F8FAFC"
          stroke="#38BDF8"
          strokeWidth="1.2"
        />

        {/* --- COCKPIT CANOPY & GREENHOUSE --- */}
        <path
          d="
            M 230 70
            C 230 52, 215 42, 190 42
            C 165 42, 120 44, 98 48
            C 88 50, 84 58, 84 70
            C 84 82, 88 90, 98 92
            C 120 96, 165 98, 190 98
            C 215 98, 230 88, 230 70
            Z
          "
          fill="url(#glassRoof)"
          stroke="#18181B"
          strokeWidth="2"
        />

        {/* Windshield (Curved front section) */}
        <path
          d="
            M 228 70
            C 228 54, 216 46, 195 46
            L 190 94
            C 216 94, 228 86, 228 70
            Z
          "
          fill="url(#glassReflection)"
        />

        {/* Interior Steering Wheel & Dashboard Silhouette */}
        <ellipse cx="188" cy="70" rx="6" ry="12" fill="#3F3F46" opacity="0.6" />
        <rect x="184" y="66" width="3" height="8" rx="1.5" fill="#FAFAFA" opacity="0.8" />

        {/* Rear Engine Cover / Louvers */}
        <g stroke="#18181B" strokeWidth="1.8" opacity="0.85">
          <line x1="140" y1="52" x2="140" y2="88" />
          <line x1="124" y1="53" x2="124" y2="87" />
          <line x1="108" y1="55" x2="108" y2="85" />
        </g>

        {/* Center Exhaust Pipe / Diffuser Highlight */}
        <rect x="30" y="66" width="8" height="8" rx="2" fill="#27272A" stroke="#52525B" strokeWidth="1" />
        <circle cx="34" cy="70" r="2.5" fill="#09090B" />

        {/* Rear LED Light Blade Strips (McLaren P1 style red arcs) */}
        <path
          d="M 44 38 C 36 44 34 56 34 62"
          stroke="#EF4444"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 44 102 C 36 96 34 84 34 78"
          stroke="#EF4444"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Side Mirrors */}
        <path d="M 205 32 L 214 20 L 218 22 L 208 34 Z" fill="url(#carbonTrim)" />
        <path d="M 205 108 L 214 120 L 218 118 L 208 106 Z" fill="url(#carbonTrim)" />
      </svg>
    </div>
  );
};
