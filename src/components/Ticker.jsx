import React from 'react';
import { Sparkles, Ticket, Flame, Heart } from 'lucide-react';

export default function Ticker() {
  const tickerItems = [
    "EARLY BIRD TICKETS ON SALE NOW!",
    "MARCH 30 - APRIL 1, 2026",
    "COLUMBUS, GA",
    "PURE IMAGINATION",
    "SPEAKERS & WORKSHOPS",
    "HUG IN PERSON",
  ];

  return (
    <div className="w-full bg-[#1e1e24] border-b border-zinc-800 text-[#FFE600] font-fredoka font-semibold text-xs md:text-sm tracking-wider uppercase overflow-hidden py-2.5 shadow-inner select-none relative z-50">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="inline-flex items-center gap-3">
            <span className="hover:text-white transition-colors duration-200">{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF7640] animate-pulse" />
          </span>
        ))}
      </div>
    </div>
  );
}
