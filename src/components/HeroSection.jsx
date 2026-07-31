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
    <section className="relative w-full bg-[#1A191B] overflow-hidden pt-6">
      
      {/* Background Star Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"></div>

      {/* Floating Retro Moon Character (Top Left) */}
      <motion.div 
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-6 md:left-20 z-10 hidden md:block"
      >
        <svg width="85" height="85" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="34" fill="#FFE600" stroke="#18181b" strokeWidth="3" />
          {/* Moon eyes & smile */}
          <ellipse cx="40" cy="45" rx="3" ry="5" fill="#18181b" />
          <ellipse cx="60" cy="45" rx="3" ry="5" fill="#18181b" />
          <path d="M42 58 Q50 66 58 58" stroke="#18181b" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="34" cy="52" r="4" fill="#FF7640" opacity="0.6" />
          <circle cx="66" cy="52" r="4" fill="#FF7640" opacity="0.6" />
          {/* Cloud cap */}
          <path d="M15 72 Q25 58 40 62 Q55 48 70 58 Q85 62 85 75 Z" fill="#F5EBE6" stroke="#18181b" strokeWidth="2.5" />
        </svg>
      </motion.div>

      {/* Hero Content Center */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-20 px-4">
        
        {/* Date & Location Text */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-3 font-fredoka"
        >
          <span className="text-[#F5EBE6] text-base md:text-xl font-bold tracking-wide">
            March 30 - April 1, 2026
          </span>
          <span className="text-zinc-400 text-xs md:text-sm font-medium mt-0.5">
            Columbus, GA
          </span>
        </motion.div>

        {/* Main Title "PURE IMAGINATION" with Flowing S-Curve Rainbow */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center my-2">
          
          {/* Flowing S-Curve Rainbow SVG */}
          <svg className="absolute -top-16 md:-top-24 w-full h-[420px] md:h-[520px] z-0 pointer-events-none" viewBox="0 0 1000 600" fill="none">
            {/* Rainbow Ribbon Strips */}
            <path d="M 950 -50 C 700 80 150 50 100 220 C 50 350 700 320 850 480 C 950 580 600 600 450 650" stroke="#7B61FF" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M 950 -32 C 700 98 150 68 100 238 C 50 368 700 338 850 498 C 950 598 600 618 450 668" stroke="#3B82F6" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M 950 -14 C 700 116 150 86 100 256 C 50 386 700 356 850 516 C 950 616 600 636 450 686" stroke="#00D09C" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M 950 4 C 700 134 150 104 100 274 C 50 404 700 374 850 534 C 950 634 600 654 450 704" stroke="#FFE600" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M 950 22 C 700 152 150 122 100 292 C 50 422 700 392 850 552 C 950 652 600 672 450 722" stroke="#FFAA00" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M 950 40 C 700 170 150 140 100 310 C 50 440 700 410 850 570 C 950 670 600 690 450 740" stroke="#FF5964" strokeWidth="22" strokeLinecap="round" fill="none" />
          </svg>

          {/* Heading */}
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="font-shrikhand text-7xl sm:text-8xl md:text-[140px] text-[#F5EBE6] tracking-tight leading-none retro-text-shadow relative z-10 select-none py-2"
          >
            Pure <br />
            Imagination
          </motion.h1>

        </div>

        {/* CTA Button: "Get your tickets" */}
        <motion.div className="mt-4 md:mt-6 z-20">
          <button
            onClick={() => { sounds.playFanfare(); onOpenTickets(); }}
            className="group inline-flex items-center gap-3 bg-[#F5EBE6] text-[#18181b] font-fredoka font-bold text-base md:text-lg px-7 py-3 rounded-full border-3 border-[#18181b] shadow-[5px_5px_0px_0px_#FF7640] hover:shadow-[2px_2px_0px_0px_#FF7640] hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
          >
            <span>Get your tickets</span>
          </button>
        </motion.div>

        {/* Floating Decorative Elements Grid */}
        <div className="relative w-full max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center z-20">
          
          {/* Left Block: Tape Cassette, Pencil & Play Quote */}
          <div className="flex flex-col items-center md:items-start gap-4">
            
            {/* Cassette & Pencil */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <svg width="55" height="38" viewBox="0 0 55 38" fill="none">
                <rect width="55" height="38" rx="6" fill="#E84393" stroke="#18181b" strokeWidth="2.5" />
                <rect x="5" y="5" width="45" height="18" rx="3" fill="#F5EBE6" />
                <circle cx="18" cy="14" r="5" fill="#18181b" />
                <circle cx="37" cy="14" r="5" fill="#18181b" />
              </svg>

              <svg width="45" height="16" viewBox="0 0 45 16" fill="none" className="rotate-12">
                <path d="M0 3 L30 3 L40 8 L30 13 L0 13 Z" fill="#FFE600" stroke="#18181b" strokeWidth="2" />
                <path d="M30 3 L40 8 L30 13 Z" fill="#FF7640" />
              </svg>
            </motion.div>

            {/* Play Button & Quote */}
            <div className="flex items-start gap-3 max-w-xs text-left">
              <button
                onClick={handlePlayQuote}
                className={`w-10 h-10 rounded-full bg-[#E84393] border-2 border-white text-white flex items-center justify-center shrink-0 shadow-md cursor-pointer ${isPlayingQuote ? 'animate-bounce' : ''}`}
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
              <p className="font-fredoka text-xs text-zinc-300 leading-snug">
                Come with me to a land of creative thinking, collaboration, and plenty of spectacular nonsense.
              </p>
            </div>

          </div>

          {/* Center Space */}
          <div></div>

          {/* Right Block: Daisy Flower Character */}
          <div className="flex justify-center md:justify-end">
            <motion.div 
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="140" height="180" viewBox="0 0 140 180" fill="none">
                {/* Petals */}
                <g fill="#F5EBE6" stroke="#18181b" strokeWidth="2.5">
                  <circle cx="70" cy="25" r="14" />
                  <circle cx="70" cy="95" r="14" />
                  <circle cx="35" cy="60" r="14" />
                  <circle cx="105" cy="60" r="14" />
                  <circle cx="45" cy="35" r="14" />
                  <circle cx="95" cy="85" r="14" />
                  <circle cx="95" cy="35" r="14" />
                  <circle cx="45" cy="85" r="14" />
                </g>
                {/* Yellow Face */}
                <circle cx="70" cy="60" r="26" fill="#FFE600" stroke="#18181b" strokeWidth="3" />
                <circle cx="61" cy="55" r="3" fill="#18181b" />
                <circle cx="79" cy="55" r="3" fill="#18181b" />
                <path d="M62 68 Q70 75 78 68" stroke="#18181b" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Stem */}
                <path d="M70 86 L70 170" stroke="#00D09C" strokeWidth="7" strokeLinecap="round" />
                <path d="M70 120 C50 110 40 130 70 138 Z" fill="#00D09C" stroke="#18181b" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Horizon Wave Transition from Dark Hero to Cream Lab Section */}
      <div className="w-full overflow-hidden leading-none relative z-20 -mb-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24" fill="#F5EBE6">
          <path d="M0,40 C250,110 450,-10 750,70 C950,110 1100,20 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
}
