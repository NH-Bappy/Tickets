import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Ticker() {
  const tickerItems = [
    "early bird tickets on sale now",
    "march 30 - april 1, 2026",
    "columbus, ga",
    "pure imagination",
    "speakers & workshops",
  ];

  return (
    <div className="w-full bg-[#141416] border-b border-zinc-800/60 text-zinc-300 font-fredoka text-xs tracking-wider lowercase overflow-hidden py-1.5 shadow-inner select-none relative z-50">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="inline-flex items-center gap-4">
            <span className="hover:text-white transition-colors duration-200">{item}</span>
            <span className="text-[#FF7640] text-[10px]">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
