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
    <section className="relative w-full bg-[#1e1e21] text-[#FAF6EE] pt-6 pb-0 overflow-hidden select-none">
      
      {/* 4-Point Star Sparkles scattered in Dark Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* White Sparkles */}
        <span className="absolute top-12 left-10 text-white/40 text-sm">✦</span>
        <span className="absolute top-28 left-1/4 text-white/30 text-xs">✧</span>
        <span className="absolute top-16 right-20 text-white/40 text-base">✦</span>
        <span className="absolute top-48 right-12 text-white/30 text-sm">✧</span>
        <span className="absolute top-80 left-16 text-white/40 text-xs">✦</span>
        <span className="absolute top-96 right-1/4 text-white/30 text-sm">✦</span>

        {/* Muted Orange/Yellow Sparkles */}
        <span className="absolute top-20 left-1/3 text-[#E6914D]/60 text-xs">✦</span>
        <span className="absolute top-64 left-8 text-[#F2C94C]/70 text-sm">✦</span>
        <span className="absolute top-72 right-36 text-[#E6914D]/70 text-xs">✧</span>
        <span className="absolute top-36 right-1/3 text-[#F2C94C]/60 text-sm">✦</span>
      </div>

      {/* Sun / Planet Character (Top Left of Title) */}
      <motion.div 
        animate={{ rotate: [-3, 3, -3], y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-28 md:left-44 z-10 hidden sm:block pointer-events-none"
      >
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none">
          {/* Yellow Sun Disk */}
          <circle cx="37.5" cy="37.5" r="30" fill="#F2C94C" stroke="#1e1e21" strokeWidth="2.5" />
          {/* Cute Face: Eyes looking right */}
          <circle cx="30" cy="34" r="3.5" fill="#1e1e21" />
          <circle cx="45" cy="34" r="3.5" fill="#1e1e21" />
          <circle cx="31.5" cy="33" r="1.2" fill="#FAF6EE" />
          <circle cx="46.5" cy="33" r="1.2" fill="#FAF6EE" />
          {/* Smiling Mouth */}
          <path d="M30 44 Q37.5 50 45 44" stroke="#1e1e21" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Rosy Cheeks */}
          <circle cx="24" cy="40" r="4" fill="#DE5B5B" opacity="0.5" />
          <circle cx="51" cy="40" r="4" fill="#DE5B5B" opacity="0.5" />
          {/* Small Star Sparkle near Sun */}
          <path d="M62 15 L64 20 L69 22 L64 24 L62 29 L60 24 L55 22 L60 20 Z" fill="#F2C94C" />
        </svg>
      </motion.div>

      {/* Top Left Wavy Cloud & Flying Cassette Tape */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-4 z-10 hidden md:block pointer-events-none"
      >
        <svg width="110" height="80" viewBox="0 0 110 80" fill="none">
          <path d="M5 45 Q20 20 40 30 Q60 10 80 25 Q100 15 105 45 Z" fill="#D9829C" opacity="0.85" />
          <path d="M0 55 Q15 30 35 40 Q55 25 75 35 Q95 25 100 55 Z" fill="#FAF6EE" />
          {/* Cassette Tape */}
          <g transform="translate(25, 45)">
            <rect x="0" y="0" width="40" height="26" rx="4" fill="#E6914D" stroke="#1e1e21" strokeWidth="2" />
            <rect x="4" y="4" width="32" height="12" rx="2" fill="#FAF6EE" />
            <circle cx="12" cy="10" r="4" fill="#1e1e21" />
            <circle cx="28" cy="10" r="4" fill="#1e1e21" />
          </g>
        </svg>
      </motion.div>

      {/* Top Right Cloud & Mountain Sunset */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-6 z-10 hidden md:block pointer-events-none"
      >
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M10 50 Q30 20 60 35 Q90 15 110 50 Z" fill="#E6914D" opacity="0.8" />
          <path d="M0 60 Q20 35 50 45 Q80 30 105 60 Z" fill="#FAF6EE" />
          {/* Mountain Peak */}
          <polygon points="40,55 55,30 70,55" fill="#DE5B5B" stroke="#1e1e21" strokeWidth="2" />
          <polygon points="55,30 62,42 55,40" fill="#FAF6EE" />
        </svg>
      </motion.div>

      {/* 2D Flat Vintage Muted Rainbow Ribbon Stream SVG */}
      <div className="absolute top-0 right-0 w-full h-[580px] pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 620" fill="none" preserveAspectRatio="none">
          {/* 7 Muted Color Band Ribbons with Clean Outlines */}
          {/* Purple Band */}
          <path d="M 1120 -40 C 1120 200, 700 80, 500 160 C 250 240, 90 120, 200 320 C 300 480, 760 360, 860 480 C 930 560, 950 630, 950 720" stroke="#8E7CC3" strokeWidth="14" fill="none" />
          {/* Blue Band */}
          <path d="M 1120 -28 C 1120 212, 700 92, 500 172 C 250 252, 90 132, 200 332 C 300 492, 760 372, 860 492 C 930 572, 950 642, 950 732" stroke="#6BB2D5" strokeWidth="14" fill="none" />
          {/* Green Band */}
          <path d="M 1120 -16 C 1120 224, 700 104, 500 184 C 250 264, 90 144, 200 344 C 300 504, 760 384, 860 504 C 930 584, 950 654, 950 744" stroke="#76B894" strokeWidth="14" fill="none" />
          {/* Yellow Band */}
          <path d="M 1120 -4 C 1120 236, 700 116, 500 196 C 250 276, 90 156, 200 356 C 300 516, 760 396, 860 516 C 930 596, 950 666, 950 756" stroke="#F2C94C" strokeWidth="14" fill="none" />
          {/* Orange Band */}
          <path d="M 1120 8 C 1120 248, 700 128, 500 208 C 250 288, 90 168, 200 368 C 300 528, 760 408, 860 528 C 930 608, 950 678, 950 768" stroke="#E6914D" strokeWidth="14" fill="none" />
          {/* Red Band */}
          <path d="M 1120 20 C 1120 260, 700 140, 500 220 C 250 300, 90 180, 200 380 C 300 540, 760 420, 860 540 C 930 620, 950 690, 950 780" stroke="#DE5B5B" strokeWidth="14" fill="none" />
          {/* Pink Band */}
          <path d="M 1120 32 C 1120 272, 700 152, 500 232 C 250 312, 90 192, 200 392 C 300 552, 760 432, 860 552 C 930 632, 950 702, 950 792" stroke="#D9829C" strokeWidth="14" fill="none" />
        </svg>
      </div>

      {/* Main Centered Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10 px-4">
        
        {/* Date & Location Text */}
        <div className="font-fredoka text-[#FAF6EE] text-center mb-3">
          <p className="text-base md:text-lg font-bold tracking-wide">March 30 - April 1, 2026</p>
          <p className="text-xs text-zinc-400 font-medium">Columbus, GA</p>
        </div>

        {/* 70s Display Title: Pure (Line 1), Imagination (Line 2) */}
        <div className="relative my-2 select-none">
          <h1 className="font-shrikhand text-7xl sm:text-8xl md:text-[128px] leading-[0.9] text-[#FAF6EE] tracking-normal retro-text-shadow">
            Pure <br />
            Imagination
          </h1>
        </div>

        {/* Space Rocket Beetle Character (Left of Rainbow) */}
        <motion.div 
          animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-2 md:left-10 top-52 z-10 hidden md:block"
        >
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none">
            {/* White Rocket Shell */}
            <path d="M37.5 10 C50 25 50 45 37.5 55 C25 45 25 25 37.5 10 Z" fill="#FAF6EE" stroke="#1e1e21" strokeWidth="2.5" />
            {/* Porthole Window with face */}
            <circle cx="37.5" cy="32" r="8" fill="#F2C94C" stroke="#1e1e21" strokeWidth="2" />
            <circle cx="35" cy="31" r="1.5" fill="#1e1e21" />
            <circle cx="40" cy="31" r="1.5" fill="#1e1e21" />
            {/* Fins */}
            <path d="M25 45 L15 55 L26 52 Z" fill="#E6914D" stroke="#1e1e21" strokeWidth="2" />
            <path d="M50 45 L60 55 L49 52 Z" fill="#E6914D" stroke="#1e1e21" strokeWidth="2" />
            {/* Cloud Exhaust Trail */}
            <path d="M25 58 Q15 70 37.5 72 Q60 70 50 58 Z" fill="#D9829C" opacity="0.9" stroke="#1e1e21" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Floating Yellow Pencil & Peach Fruit */}
        <motion.div 
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-28 top-56 z-10 hidden md:block"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="22" r="16" fill="#E6914D" stroke="#1e1e21" strokeWidth="2" />
            <path d="M20 6 Q26 0 32 4 Z" fill="#76B894" stroke="#1e1e21" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Floating Red Chili / Capsule (Under Rainbow Bend on Right) */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-40 top-96 z-10 hidden md:block"
        >
          <svg width="35" height="25" viewBox="0 0 35 25" fill="none">
            <path d="M5 12 C10 2 28 2 32 12 C28 22 10 22 5 12 Z" fill="#DE5B5B" stroke="#1e1e21" strokeWidth="2" />
            <path d="M2 10 L6 12 L2 14" stroke="#76B894" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        {/* "Get your tickets" Pill Button */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="mt-6 mb-12 z-20"
        >
          <button
            onClick={() => { sounds.playFanfare(); onOpenTickets(); }}
            className="bg-[#FAF6EE] text-[#1e1e21] font-fredoka font-bold text-lg md:text-xl px-10 py-3.5 rounded-full border-3 border-[#1e1e21] shadow-[4px_4px_0px_0px_#1e1e21] hover:bg-[#F2C94C] transition-all cursor-pointer"
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
          <svg width="125" height="175" viewBox="0 0 125 175" fill="none">
            {/* White Petals */}
            <g fill="#FAF6EE" stroke="#1e1e21" strokeWidth="2.5">
              <ellipse cx="62.5" cy="30" rx="12" ry="22" />
              <ellipse cx="62.5" cy="95" rx="12" ry="22" />
              <ellipse cx="30" cy="62.5" rx="22" ry="12" />
              <ellipse cx="95" cy="62.5" rx="22" ry="12" />
              <ellipse cx="38" cy="38" rx="18" ry="14" transform="rotate(-45 38 38)" />
              <ellipse cx="87" cy="87" rx="18" ry="14" transform="rotate(-45 87 87)" />
              <ellipse cx="87" cy="38" rx="18" ry="14" transform="rotate(45 87 38)" />
              <ellipse cx="38" cy="87" rx="18" ry="14" transform="rotate(45 38 87)" />
            </g>
            {/* Center Yellow Smiling Face */}
            <circle cx="62.5" cy="62.5" r="24" fill="#F2C94C" stroke="#1e1e21" strokeWidth="3" />
            <circle cx="53" cy="58" r="3.5" fill="#1e1e21" />
            <circle cx="72" cy="58" r="3.5" fill="#1e1e21" />
            <path d="M54 70 Q62.5 78 71 70" stroke="#1e1e21" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Stem */}
            <path d="M62.5 86 L62.5 165" stroke="#76B894" strokeWidth="7" strokeLinecap="round" />
            <path d="M62.5 115 C42.5 105 32.5 125 62.5 135 Z" fill="#76B894" stroke="#1e1e21" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Left Quote & Pink Play Badge */}
        <div className="w-full flex items-center justify-between mt-4 pb-12 z-20 px-4">
          <div className="flex items-center gap-3 max-w-xs text-left">
            <button
              onClick={handlePlayQuote}
              className={`w-11 h-11 rounded-full bg-[#D9829C] border-2 border-[#FAF6EE] text-white flex items-center justify-center shrink-0 hover:scale-110 transition-transform shadow-lg cursor-pointer ${isPlayingQuote ? 'animate-bounce' : ''}`}
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
            <p className="font-fredoka text-xs md:text-sm text-zinc-300 leading-snug">
              Come with me to a land of creative thinking, collaboration, and plenty of spectacular nonsense.
            </p>
          </div>
        </div>

      </div>

      {/* Wavy Ground Transition into Cream Section (#F5F0E6) */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 md:h-28" fill="#F5F0E6">
          <path d="M0,40 C250,110 550,-10 850,70 C1050,110 1150,50 1200,30 L1200,120 L0,120 Z" />
        </svg>

        {/* Blue Mascot Character Standing at Wavy Edge operating Dial Gauge */}
        <div className="absolute bottom-2 left-10 md:left-24 z-30 flex items-end">
          <svg width="110" height="115" viewBox="0 0 110 115" fill="none">
            {/* Blue Head/Body */}
            <path d="M20 50 Q55 15 90 50 C100 80 90 100 55 105 C20 100 10 80 20 50 Z" fill="#8E7CC3" stroke="#1e1e21" strokeWidth="3" />
            {/* Hair */}
            <path d="M15 45 Q10 20 35 15 Q55 5 70 15 Q90 20 85 45 Z" fill="#6BB2D5" stroke="#1e1e21" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="42" cy="55" r="5" fill="#1e1e21" />
            <circle cx="68" cy="55" r="5" fill="#1e1e21" />
            {/* Mouth */}
            <path d="M44 72 Q55 80 66 72" stroke="#1e1e21" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Meter Box */}
            <rect x="70" y="65" width="32" height="24" rx="5" fill="#FAF6EE" stroke="#1e1e21" strokeWidth="2.5" />
            {/* Meter Rainbow Arc */}
            <path d="M76 80 A10 10 0 0 1 96 80" stroke="#DE5B5B" strokeWidth="4" fill="none" />
            <line x1="86" y1="80" x2="92" y2="72" stroke="#1e1e21" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

    </section>
  );
}
