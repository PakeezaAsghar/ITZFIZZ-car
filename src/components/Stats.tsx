import React from 'react';

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

interface StatsProps {
  className?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export const defaultStats: StatItem[] = [
  {
    value: '98%',
    label: 'Customer Satisfaction',
    detail: 'Validated across global luxury client cohorts',
  },
  {
    value: '85%',
    label: 'Engagement Growth',
    detail: 'Kinetic interaction dwell-time increase',
  },
  {
    value: '72%',
    label: 'Faster Results',
    detail: 'Accelerated turn-around through precision tuning',
  },
];

export const Stats: React.FC<StatsProps> = ({ className = '', containerRef }) => {
  return (
    <div
      ref={containerRef}
      className={`w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 ${className}`}
    >
      {defaultStats.map((stat, idx) => (
        <div
          key={stat.label}
          data-stat-item
          className="relative flex flex-col items-center md:items-start text-center md:text-left pt-4 border-t border-neutral-800/80 group"
        >
          {/* Subtle accent hairline marker */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-[2px] bg-amber-400/80 group-hover:w-16 transition-all duration-300" />
          
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-4xl sm:text-5xl text-neutral-100 font-mono-num tracking-tight group-hover:text-amber-400 transition-colors">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-amber-400/80 font-mono-num">
              [0{idx + 1}]
            </span>
          </div>

          <h3 className="mt-1 text-sm font-semibold tracking-wide text-neutral-200">
            {stat.label}
          </h3>

          <p className="mt-1 text-xs text-neutral-400 leading-relaxed max-w-xs">
            {stat.detail}
          </p>
        </div>
      ))}
    </div>
  );
};
