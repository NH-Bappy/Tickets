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

  const rainbowBands = [
    { color: '#8E7CC3', offset: 0 },   // Muted Purple
    { color: '#6BB2D5', offset: 12 },  // Muted Sky Blue
    { color: '#76B894', offset: 24 },  // Muted Sage Green
    { color: '#F2C94C', offset: 36 },  // Muted Vintage Yellow
    { color: '#E6914D', offset: 48 },  // Muted Soft Orange
    { color: '#DE5B5B', offset: 60 },  // Muted Coral Red
    { color: '#D9829C', offset: 72 }   // Muted Soft Pink
  ];

  const heroStars = [
    { top: '6%', left: '8%', size: 'text-base', color: 'text-white/60', icon: '✦', delay: '0s' },
    { top: '10%', left: '22%', size: 'text-xs', color: 'text-[#F2C94C]/70', icon: '✦', delay: '1s' },
    { top: '14%', left: '38%', size: 'text-sm', color: 'text-white/50', icon: '✧', delay: '0.5s' },
    { top: '8%', right: '18%', size: 'text-lg', color: 'text-[#E6914D]/80', icon: '✦', delay: '1.2s' },
    { top: '18%', right: '8%', size: 'text-xs', color: 'text-white/60', icon: '✦', delay: '0.2s' },
    { top: '28%', left: '5%', size: 'text-sm', color: 'text-[#F2C94C]/80', icon: '★', delay: '1.5s' },
    { top: '32%', left: '16%', size: 'text-xs', color: 'text-white/40', icon: '✧', delay: '0.7s' },
    { top: '25%', right: '28%', size: 'text-xs', color: 'text-white/50', icon: '✦', delay: '0.4s' },
    { top: '35%', right: '12%', size: 'text-sm', color: 'text-[#F2C94C]/70', icon: '✦', delay: '1.1s' },
    { top: '45%', left: '12%', size: 'text-base', color: 'text-[#E6914D]/70', icon: '✦', delay: '0.8s' },
    { top: '50%', left: '28%', size: 'text-xs', color: 'text-white/40', icon: '✧', delay: '1.3s' },
    { top: '48%', right: '22%', size: 'text-xs', color: 'text-[#F2C94C]/80', icon: '✦', delay: '0.6s' },
    { top: '58%', right: '6%', size: 'text-sm', color: 'text-white/60', icon: '✦', delay: '1.4s' },
    { top: '65%', left: '18%', size: 'text-sm', color: 'text-white/50', icon: '✧', delay: '0.3s' },
    { top: '70%', left: '4%', size: 'text-xs', color: 'text-[#E6914D]/80', icon: '✦', delay: '1s' },
    { top: '68%', right: '15%', size: 'text-base', color: 'text-[#F2C94C]/70', icon: '★', delay: '0.9s' },
    { top: '78%', right: '32%', size: 'text-xs', color: 'text-white/40', icon: '✦', delay: '1.6s' },
  ];

  return (
    <section className="relative w-full bg-[#1e1e21] text-[#FAF6EE] pt-4 pb-0 overflow-hidden select-none">
      
      {/* Dense Star Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {heroStars.map((star, i) => (
          <span 
            key={i}
            className={`absolute ${star.size} ${star.color} animate-pulse`}
            style={{ top: star.top, left: star.left, right: star.right, animationDelay: star.delay }}
          >
            {star.icon}
          </span>
        ))}
      </div>

      {/* Sun / Planet Character */}
      <motion.div 
        animate={{ rotate: [-3, 3, -3], y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-24 md:left-40 z-10 hidden sm:block pointer-events-none"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="28" fill="#F2C94C" stroke="#1e1e21" strokeWidth="2.5" />
          <circle cx="28" cy="32" r="3" fill="#1e1e21" />
          <circle cx="42" cy="32" r="3" fill="#1e1e21" />
          <path d="M28 42 Q35 48 42 42" stroke="#1e1e21" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="22" cy="38" r="3.5" fill="#DE5B5B" opacity="0.5" />
          <circle cx="48" cy="38" r="3.5" fill="#DE5B5B" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Top Left Wavy Cloud & Flying Cassette */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-4 z-10 hidden md:block pointer-events-none"
      >
        <svg width="100" height="75" viewBox="0 0 100 75" fill="none">
          <path d="M5 40 Q20 15 40 25 Q60 10 75 25 Q95 15 100 40 Z" fill="#D9829C" opacity="0.85" />
          <path d="M0 50 Q15 25 35 35 Q55 20 70 30 Q90 20 95 50 Z" fill="#FAF6EE" />
          <g transform="translate(20, 40)">
            <rect x="0" y="0" width="36" height="22" rx="3" fill="#E6914D" stroke="#1e1e21" strokeWidth="2" />
            <circle cx="10" cy="8" r="3" fill="#1e1e21" />
            <circle cx="26" cy="8" r="3" fill="#1e1e21" />
          </g>
        </svg>
      </motion.div>

      {/* Top Right Cloud & Mountain */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-4 z-10 hidden md:block pointer-events-none"
      >
        <svg width="110" height="75" viewBox="0 0 110 75" fill="none">
          <path d="M10 45 Q30 15 55 30 Q80 10 100 45 Z" fill="#E6914D" opacity="0.8" />
          <path d="M0 55 Q20 30 45 40 Q70 25 95 55 Z" fill="#FAF6EE" />
          <polygon points="35,50 50,25 65,50" fill="#DE5B5B" stroke="#1e1e21" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Continuous Endless Flowing River Rainbow Stream (No cutoffs) */}
      <div className="absolute top-0 right-0 w-full h-[680px] pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="none">
          {rainbowBands.map((band, i) => {
            const yOff = band.offset;
            return (
              <path
                key={i}
                d={`
                  M ${1350 + yOff} ${-100 + yOff} 
                  C ${1080 + yOff} 110, ${780 + yOff} 30, ${500 + yOff} 75 
                  C ${260 + yOff} 115, ${80 + yOff} 210, ${210 + yOff} 285 
                  C ${340 + yOff} 355, ${790 + yOff} 235, ${930 + yOff} 325 
                  C ${1020 + yOff} 385, ${760 + yOff} 425, ${470 + yOff} 405 
                  C ${240 + yOff} 385, ${540 + yOff} 530, ${870 + yOff} 495 
                  C ${980 + yOff} 475, ${960 + yOff} 620, ${930 + yOff} 850
                `}
                stroke={band.color}
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
            );
          })}
        </svg>
      </div>

      {/* Main Centered Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10 px-4">
        
        {/* Date & Location Text */}
        <div className="font-fredoka text-[#FAF6EE] text-center mb-2">
          <p className="text-base md:text-lg font-bold tracking-wide">March 30 - April 1, 2026</p>
          <p className="text-xs text-zinc-400 font-medium">Columbus, GA</p>
        </div>

        {/* 70s Title */}
        <div className="relative my-2 select-none">
          <h1 className="font-shrikhand text-7xl sm:text-8xl md:text-[130px] leading-[0.88] text-[#FAF6EE] tracking-normal retro-text-shadow">
            Pure <br />
            Imagination
          </h1>
        </div>

        {/* Space Beetle Rocket */}
        <motion.div 
          animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-2 md:left-8 top-56 z-10 hidden md:block"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <path d="M35 10 C48 22 48 42 35 52 C22 42 22 22 35 10 Z" fill="#FAF6EE" stroke="#1e1e21" strokeWidth="2.5" />
            <circle cx="35" cy="30" r="7" fill="#F2C94C" stroke="#1e1e21" strokeWidth="2" />
            <circle cx="33" cy="29" r="1.5" fill="#1e1e21" />
            <circle cx="37" cy="29" r="1.5" fill="#1e1e21" />
            <path d="M22 55 Q10 65 35 68 Q60 65 48 55 Z" fill="#D9829C" stroke="#1e1e21" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Floating Peach Fruit */}
        <motion.div 
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-24 top-60 z-10 hidden md:block"
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="23" r="16" fill="#E6914D" stroke="#1e1e21" strokeWidth="2" />
            <path d="M21 7 Q27 1 33 5 Z" fill="#76B894" stroke="#1e1e21" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Floating Red Chili */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-44 top-96 z-10 hidden md:block"
        >
          <svg width="35" height="25" viewBox="0 0 35 25" fill="none">
            <path d="M5 12 C10 2 28 2 32 12 C28 22 10 22 5 12 Z" fill="#DE5B5B" stroke="#1e1e21" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* "Get your tickets" Button */}
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

        {/* Smiling Daisy Flower */}
        <motion.div 
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-4 md:right-16 bottom-16 z-20 hidden md:block"
        >
          <svg width="125" height="175" viewBox="0 0 125 175" fill="none">
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
            <circle cx="62.5" cy="62.5" r="24" fill="#F2C94C" stroke="#1e1e21" strokeWidth="3" />
            <circle cx="53" cy="58" r="3.5" fill="#1e1e21" />
            <circle cx="72" cy="58" r="3.5" fill="#1e1e21" />
            <path d="M54 70 Q62.5 78 71 70" stroke="#1e1e21" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M62.5 86 L62.5 165" stroke="#76B894" strokeWidth="7" strokeLinecap="round" />
            <path d="M62.5 115 C42.5 105 32.5 125 62.5 135 Z" fill="#76B894" stroke="#1e1e21" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Left Quote */}
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

      {/* Wavy Ground Transition into Cream Section */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 md:h-28" fill="#F5F0E6">
          <path d="M0,40 C250,110 550,-10 850,70 C1050,110 1150,50 1200,30 L1200,120 L0,120 Z" />
        </svg>

        {/* Blue Mascot */}
        <div className="absolute bottom-2 left-10 md:left-24 z-30 flex items-end">
          <svg width="110" height="115" viewBox="0 0 110 115" fill="none">
            <path d="M20 50 Q55 15 90 50 C100 80 90 100 55 105 C20 100 10 80 20 50 Z" fill="#8E7CC3" stroke="#1e1e21" strokeWidth="3" />
            <path d="M15 45 Q10 20 35 15 Q55 5 70 15 Q90 20 85 45 Z" fill="#6BB2D5" stroke="#1e1e21" strokeWidth="2" />
            <circle cx="42" cy="55" r="5" fill="#1e1e21" />
            <circle cx="68" cy="55" r="5" fill="#1e1e21" />
            <path d="M44 72 Q55 80 66 72" stroke="#1e1e21" strokeWidth="3" strokeLinecap="round" fill="none" />
            <rect x="70" y="65" width="32" height="24" rx="5" fill="#FAF6EE" stroke="#1e1e21" strokeWidth="2.5" />
            <path d="M76 80 A10 10 0 0 1 96 80" stroke="#DE5B5B" strokeWidth="4" fill="none" />
            <line x1="86" y1="80" x2="92" y2="72" stroke="#1e1e21" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

    </section>
  );
}
