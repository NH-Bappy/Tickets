import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function HeroSection({ onOpenTickets }) {
  const [isPlayingQuote, setIsPlayingQuote] = useState(false);

  const handlePlayQuote = () => {
    sounds.playPop();
    setIsPlayingQuote(true);
    setTimeout(() => setIsPlayingQuote(false), 3000);
  };

  return (
    <section className="relative w-full bg-[#1c1c1e] text-[#FAF6EE] pt-6 pb-0 overflow-hidden">
      
      {/* Background Star Dust */}
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      {/* Top Left Wavy Cloud & Hanging Key Badge */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-4 md:left-12 z-10 pointer-events-none hidden md:block"
      >
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
          <path d="M10 50 Q25 20 45 35 Q65 15 85 30 Q105 20 115 50 Z" fill="#EE7DA5" opacity="0.8" />
          <path d="M5 60 Q20 35 40 45 Q60 30 80 40 Q100 30 110 60 Z" fill="#FAF6EE" opacity="0.9" />
          {/* Hanging Key Badge */}
          <line x1="30" y1="50" x2="30" y2="80" stroke="#FAF6EE" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="20" y="75" width="20" height="15" rx="3" fill="#EE7DA5" stroke="#1c1c1e" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Top Moon with Cheerful Sleeping Eyes */}
      <motion.div 
        animate={{ rotate: [-4, 4, -4], y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-1/3 z-10 pointer-events-none hidden md:block"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="28" fill="#FFE600" />
          <path d="M25 35 Q30 42 35 35" stroke="#1c1c1e" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M38 35 Q43 42 48 35" stroke="#1c1c1e" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="23" cy="38" r="4" fill="#FF8552" opacity="0.6" />
          <circle cx="50" cy="38" r="4" fill="#FF8552" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Main Flowing Multi-Color Rainbow Ribbon SVG Path */}
      <div className="absolute top-0 right-0 w-full h-[550px] pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          {/* Wavy Rainbow Multi-ribbon Stream matching screenshot */}
          <path d="M 1100 -50 C 1100 200, 700 80, 500 160 C 250 240, 100 120, 200 320 C 300 480, 750 360, 850 480 C 920 560, 950 620, 980 700" stroke="#7B61FF" strokeWidth="18" fill="none" />
          <path d="M 1100 -36 C 1100 214, 700 94, 500 174 C 250 254, 100 134, 200 334 C 300 494, 750 374, 850 494 C 920 574, 950 634, 980 714" stroke="#EE7DA5" strokeWidth="18" fill="none" />
          <path d="M 1100 -22 C 1100 228, 700 108, 500 188 C 250 268, 100 148, 200 348 C 300 508, 750 388, 850 508 C 920 588, 950 648, 980 728" stroke="#FF8552" strokeWidth="18" fill="none" />
          <path d="M 1100 -8 C 1100 242, 700 122, 500 202 C 250 282, 100 162, 200 362 C 300 522, 750 402, 850 522 C 920 602, 950 662, 980 742" stroke="#FFE600" strokeWidth="18" fill="none" />
          <path d="M 1100 6 C 1100 256, 700 136, 500 216 C 250 296, 100 176, 200 376 C 300 536, 750 416, 850 536 C 920 616, 950 676, 980 756" stroke="#00D09C" strokeWidth="18" fill="none" />
          <path d="M 1100 20 C 1100 270, 700 150, 500 230 C 250 310, 100 190, 200 390 C 300 550, 750 430, 850 550 C 920 630, 950 690, 980 770" stroke="#FAF6EE" strokeWidth="18" fill="none" />
        </svg>
      </div>

      {/* Main Centered Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10 px-4">
        
        {/* Date & Location Stacked Text */}
        <div className="font-fredoka text-[#FAF6EE] text-center mb-4">
          <p className="text-base md:text-xl font-bold tracking-wide">March 30 - April 1, 2026</p>
          <p className="text-xs md:text-sm text-zinc-400 font-medium">Columbus, GA</p>
        </div>

        {/* 70s Psychedelic Heading: Pure (Line 1), Imagination (Line 2) */}
        <div className="relative my-2 select-none">
          <h1 className="font-shrikhand text-7xl sm:text-8xl md:text-[130px] leading-[0.9] text-[#FAF6EE] tracking-normal retro-text-shadow">
            Pure <br />
            Imagination
          </h1>
        </div>

        {/* Floating Rocket Character (Middle Left) */}
        <motion.div 
          animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-2 md:left-12 top-48 z-10 hidden md:block"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="22" fill="#FAF6EE" stroke="#1c1c1e" strokeWidth="3" />
            <circle cx="28" cy="30" r="4" fill="#1c1c1e" />
            <circle cx="42" cy="30" r="4" fill="#1c1c1e" />
            <path d="M28 40 Q35 46 42 40" stroke="#1c1c1e" strokeWidth="3" fill="none" />
            {/* Rocket Exhaust Cloud */}
            <path d="M10 50 Q-5 60 5 70 Q20 65 15 50 Z" fill="#EE7DA5" opacity="0.8" />
          </svg>
        </motion.div>

        {/* Floating Yellow Pencil & Peach Fruit */}
        <motion.div 
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-28 top-56 z-10 hidden md:block"
        >
          {/* Peach Fruit SVG */}
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
            <circle cx="22" cy="24" r="18" fill="#FF8552" stroke="#1c1c1e" strokeWidth="2" />
            <path d="M22 6 Q28 0 35 4 Z" fill="#00D09C" stroke="#1c1c1e" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* "Get your tickets" Pill Button */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="mt-6 mb-12 z-20"
        >
          <button
            onClick={() => { sounds.playFanfare(); onOpenTickets(); }}
            className="bg-[#FAF6EE] text-[#1c1c1e] font-fredoka font-bold text-lg md:text-xl px-10 py-3.5 rounded-full border-3 border-[#1c1c1e] shadow-[4px_4px_0px_0px_#1c1c1e] hover:bg-[#FFE600] transition-all cursor-pointer"
          >
            Get your tickets
          </button>
        </motion.div>

        {/* Smiling Daisy Flower (Right Edge) */}
        <motion.div 
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-4 md:right-16 bottom-16 z-20 hidden md:block"
        >
          <svg width="130" height="180" viewBox="0 0 130 180" fill="none">
            {/* White Petals */}
            <g fill="#FAF6EE" stroke="#1c1c1e" strokeWidth="2.5">
              <ellipse cx="65" cy="30" rx="12" ry="22" />
              <ellipse cx="65" cy="100" rx="12" ry="22" />
              <ellipse cx="30" cy="65" rx="22" ry="12" />
              <ellipse cx="100" cy="65" rx="22" ry="12" />
              <ellipse cx="40" cy="40" rx="18" ry="14" transform="rotate(-45 40 40)" />
              <ellipse cx="90" cy="90" rx="18" ry="14" transform="rotate(-45 90 90)" />
              <ellipse cx="90" cy="40" rx="18" ry="14" transform="rotate(45 90 40)" />
              <ellipse cx="40" cy="90" rx="18" ry="14" transform="rotate(45 40 90)" />
            </g>
            {/* Center Yellow Smiling Face */}
            <circle cx="65" cy="65" r="25" fill="#FFE600" stroke="#1c1c1e" strokeWidth="3" />
            <circle cx="56" cy="60" r="3.5" fill="#1c1c1e" />
            <circle cx="74" cy="60" r="3.5" fill="#1c1c1e" />
            <path d="M57 72 Q65 80 73 72" stroke="#1c1c1e" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Stem */}
            <path d="M65 90 L65 170" stroke="#00D09C" strokeWidth="7" strokeLinecap="round" />
            <path d="M65 120 C45 110 35 130 65 140 Z" fill="#00D09C" stroke="#1c1c1e" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Left Quote & Pink Play Badge */}
        <div className="w-full flex items-center justify-between mt-4 pb-12 z-20 px-4">
          <div className="flex items-center gap-3 max-w-xs text-left">
            <button
              onClick={handlePlayQuote}
              className={`w-11 h-11 rounded-full bg-[#EE7DA5] border-2 border-[#FAF6EE] text-white flex items-center justify-center shrink-0 hover:scale-110 transition-transform shadow-lg cursor-pointer ${isPlayingQuote ? 'animate-bounce' : ''}`}
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
            <p className="font-fredoka text-xs md:text-sm text-zinc-300 leading-snug">
              Come with me to a land of creative thinking, collaboration, and plenty of spectacular nonsense.
            </p>
          </div>
        </div>

      </div>

      {/* Wavy Ground Transition into Cream Speakers & Workshops Section (#F5F0E6) */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 md:h-28" fill="#F5F0E6">
          <path d="M0,40 C250,110 550,-10 850,70 C1050,110 1150,50 1200,30 L1200,120 L0,120 Z" />
        </svg>

        {/* Blue Mascot Character Standing on White Pipe right at the Wavy Ground Edge */}
        <div className="absolute bottom-2 left-12 md:left-24 z-30 flex items-end">
          <svg width="100" height="110" viewBox="0 0 100 110" fill="none">
            {/* Blue Head/Body */}
            <path d="M20 50 Q50 15 80 50 C90 80 80 100 50 105 C20 100 10 80 20 50 Z" fill="#7B61FF" stroke="#1c1c1e" strokeWidth="3" />
            {/* Blue Wavy Hair */}
            <path d="M15 45 Q10 20 35 15 Q50 5 65 15 Q85 20 80 45 Z" fill="#00D09C" stroke="#1c1c1e" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="38" cy="55" r="5" fill="#1c1c1e" />
            <circle cx="62" cy="55" r="5" fill="#1c1c1e" />
            {/* Mouth */}
            <path d="M40 72 Q50 80 60 72" stroke="#1c1c1e" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Hand on Dial */}
            <rect x="65" y="65" width="28" height="20" rx="5" fill="#FAF6EE" stroke="#1c1c1e" strokeWidth="2" />
            <path d="M72 75 L86 75" stroke="#EE7DA5" strokeWidth="4" />
          </svg>
        </div>
      </div>

    </section>
  );
}
