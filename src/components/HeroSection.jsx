import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Star, Calendar, MapPin } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function HeroSection({ onOpenTickets }) {
  const [isPlayingQuote, setIsPlayingQuote] = useState(false);

  const handlePlayQuote = () => {
    sounds.playPop();
    setIsPlayingQuote(true);
    setTimeout(() => setIsPlayingQuote(false), 3000);
  };

  return (
    <section className="relative w-full bg-[#18181b] overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 px-4">
      
      {/* Dynamic Background Grid & Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      {/* Floating Retro Moon & Cloud (Top Left) */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-6 md:left-16 z-10 pointer-events-none hidden md:block"
      >
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="32" fill="#FFE600" />
          <path d="M60 25 C45 35 45 65 60 75 C30 70 30 30 60 25 Z" fill="#FFAA00" opacity="0.3" />
          {/* Moon face */}
          <circle cx="42" cy="45" r="3" fill="#18181b" />
          <circle cx="58" cy="45" r="3" fill="#18181b" />
          <path d="M44 58 Q50 64 56 58" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Cloud overlap */}
          <path d="M20 70 Q30 55 45 60 Q55 48 70 55 Q85 58 85 70 Z" fill="#F5EBE6" opacity="0.9" />
        </svg>
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-20">
        
        {/* Date & Location Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 text-[#F5EBE6] font-fredoka px-5 py-2 rounded-full text-sm md:text-base font-medium shadow-lg mb-6 hover:border-[#FFE600] transition-colors"
        >
          <Calendar className="w-4 h-4 text-[#FFE600]" />
          <span>March 30 - April 1, 2023</span>
          <span className="text-zinc-500">•</span>
          <MapPin className="w-4 h-4 text-[#FF7640]" />
          <span>Columbus, GA</span>
        </motion.div>

        {/* Main Title Wrapper with Flowing Rainbow SVG Stream */}
        <div className="relative w-full max-w-4xl flex flex-col items-center justify-center my-4">
          
          {/* Background Flowing Rainbow Arch SVG */}
          <svg className="absolute -top-12 md:-top-20 w-full max-w-3xl h-64 md:h-96 z-0 pointer-events-none opacity-90" viewBox="0 0 800 400" fill="none">
            {/* Multi-strip Rainbow streams */}
            <path d="M -50 350 Q 200 50 400 120 T 850 50" stroke="#FF5964" strokeWidth="24" strokeLinecap="round" fill="none" />
            <path d="M -50 374 Q 200 74 400 144 T 850 74" stroke="#FFAA00" strokeWidth="24" strokeLinecap="round" fill="none" />
            <path d="M -50 398 Q 200 98 400 168 T 850 98" stroke="#FFE600" strokeWidth="24" strokeLinecap="round" fill="none" />
            <path d="M -50 422 Q 200 122 400 192 T 850 122" stroke="#00D09C" strokeWidth="24" strokeLinecap="round" fill="none" />
            <path d="M -50 446 Q 200 146 400 216 T 850 146" stroke="#3B82F6" strokeWidth="24" strokeLinecap="round" fill="none" />
            <path d="M -50 470 Q 200 170 400 240 T 850 170" stroke="#6C5CE7" strokeWidth="24" strokeLinecap="round" fill="none" />
          </svg>

          {/* Huge 70s Typography Heading */}
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="font-shrikhand text-6xl sm:text-7xl md:text-9xl text-[#F5EBE6] tracking-normal leading-tight md:leading-none retro-text-shadow relative z-10 select-none py-2"
          >
            Pure <br className="sm:hidden" />
            Imagination
          </motion.h1>

        </div>

        {/* CTA Button: "Get your tickets" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 z-20"
        >
          <button
            onClick={() => { sounds.playFanfare(); onOpenTickets(); }}
            className="group relative inline-flex items-center gap-3 bg-[#F5EBE6] text-[#18181b] font-fredoka font-bold text-lg md:text-xl px-8 py-3.5 rounded-full border-4 border-[#18181b] shadow-[6px_6px_0px_0px_#FF7640] hover:shadow-[2px_2px_0px_0px_#FF7640] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 cursor-pointer"
          >
            <span>Get your tickets</span>
            <span className="w-7 h-7 rounded-full bg-[#18181b] text-[#F5EBE6] flex items-center justify-center text-xs group-hover:rotate-45 transition-transform">
              ★
            </span>
          </button>
        </motion.div>

        {/* Retro Illustrations Floating Grid */}
        <div className="relative w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center z-20">
          
          {/* Left Block: Tape Cassette, Floating Pencil & Quote Badge */}
          <div className="flex flex-col items-center md:items-start gap-4">
            
            {/* Tape Cassette & Pencil */}
            <motion.div 
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-zinc-800/90 border-2 border-zinc-700 p-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              {/* SVG Cassette */}
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <rect width="60" height="40" rx="6" fill="#FF5964" />
                <rect x="6" y="6" width="48" height="20" rx="3" fill="#F5EBE6" />
                <circle cx="20" cy="16" r="6" fill="#18181b" />
                <circle cx="40" cy="16" r="6" fill="#18181b" />
                <rect x="12" y="30" width="36" height="6" fill="#18181b" rx="2" />
              </svg>

              {/* Yellow Pencil */}
              <svg width="50" height="18" viewBox="0 0 50 18" fill="none" className="rotate-12">
                <path d="M0 4 L35 4 L45 9 L35 14 L0 14 Z" fill="#FFE600" />
                <path d="M35 4 L45 9 L35 14 Z" fill="#FF7640" />
                <rect x="0" y="4" width="8" height="10" fill="#E84393" />
              </svg>
            </motion.div>

            {/* Play Button Badge & Quote */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900/90 border-2 border-zinc-700/80 p-4 rounded-2xl shadow-2xl max-w-xs text-left relative overflow-hidden group"
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={handlePlayQuote}
                  className={`w-10 h-10 rounded-full bg-[#E84393] text-white flex items-center justify-center shrink-0 hover:scale-110 transition-transform shadow-md cursor-pointer ${isPlayingQuote ? 'animate-bounce' : ''}`}
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
                <p className="font-fredoka text-xs md:text-sm text-zinc-300 leading-snug">
                  "Come with me to a land of creative thinking, collaboration, and plenty of spectacular nonsense."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center Block: Blue Hair Mascot Character */}
          <div className="flex justify-center my-4 md:my-0">
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Mascot SVG */}
              <svg width="180" height="220" viewBox="0 0 180 220" fill="none">
                {/* Body / Head */}
                <path d="M40 90 Q90 30 140 90 C160 140 150 190 130 200 C100 210 50 210 30 190 C10 160 20 120 40 90 Z" fill="#6C5CE7" />
                {/* Wavy Hair */}
                <path d="M30 85 Q20 50 50 40 Q70 20 90 35 Q110 15 130 40 Q160 50 150 85 Z" fill="#00D09C" />
                {/* Retro Glasses */}
                <rect x="50" y="95" width="32" height="26" rx="6" fill="#FFE600" stroke="#18181b" strokeWidth="3" />
                <rect x="98" y="95" width="32" height="26" rx="6" fill="#FFE600" stroke="#18181b" strokeWidth="3" />
                <line x1="82" y1="108" x2="98" y2="108" stroke="#18181b" strokeWidth="3" />
                {/* Eyes */}
                <circle cx="66" cy="108" r="5" fill="#18181b" />
                <circle cx="114" cy="108" r="5" fill="#18181b" />
                {/* Smile */}
                <path d="M72 135 Q90 150 108 135" stroke="#18181b" strokeWidth="4" strokeLinecap="round" fill="none" />
                {/* Cute cheeks */}
                <circle cx="56" cy="132" r="6" fill="#FF5964" opacity="0.6" />
                <circle cx="124" cy="132" r="6" fill="#FF5964" opacity="0.6" />
                {/* Arms holding rainbow device */}
                <path d="M25 150 Q10 170 30 180" stroke="#6C5CE7" strokeWidth="10" strokeLinecap="round" />
                <path d="M155 150 Q170 170 150 180" stroke="#6C5CE7" strokeWidth="10" strokeLinecap="round" />
                {/* Rainbow gadget */}
                <rect x="65" y="165" width="50" height="35" rx="8" fill="#F5EBE6" stroke="#18181b" strokeWidth="3" />
                <circle cx="90" cy="182.5" r="10" fill="#FF7640" />
              </svg>
            </motion.div>
          </div>

          {/* Right Block: Smiling Daisy Flower Character */}
          <div className="flex justify-center md:justify-end">
            <motion.div 
              animate={{ rotate: [-3, 3, -3], y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              {/* Daisy Flower SVG */}
              <svg width="150" height="200" viewBox="0 0 150 200" fill="none">
                {/* Petals */}
                <g fill="#F5EBE6" stroke="#18181b" strokeWidth="2.5">
                  <ellipse cx="75" cy="30" rx="14" ry="24" />
                  <ellipse cx="75" cy="110" rx="14" ry="24" />
                  <ellipse cx="35" cy="70" rx="24" ry="14" />
                  <ellipse cx="115" cy="70" rx="24" ry="14" />
                  <ellipse cx="46" cy="41" rx="20" ry="16" transform="rotate(-45 46 41)" />
                  <ellipse cx="104" cy="99" rx="20" ry="16" transform="rotate(-45 104 99)" />
                  <ellipse cx="104" cy="41" rx="20" ry="16" transform="rotate(45 104 41)" />
                  <ellipse cx="46" cy="99" rx="20" ry="16" transform="rotate(45 46 99)" />
                </g>
                {/* Center Yellow Face */}
                <circle cx="75" cy="70" r="28" fill="#FFE600" stroke="#18181b" strokeWidth="3" />
                <circle cx="65" cy="65" r="3.5" fill="#18181b" />
                <circle cx="85" cy="65" r="3.5" fill="#18181b" />
                <path d="M66 78 Q75 86 84 78" stroke="#18181b" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Stem */}
                <path d="M75 98 L75 180" stroke="#00D09C" strokeWidth="8" strokeLinecap="round" />
                {/* Leaves */}
                <path d="M75 130 C50 120 40 140 75 150 Z" fill="#00D09C" stroke="#18181b" strokeWidth="2" />
                <path d="M75 145 C100 135 110 155 75 165 Z" fill="#00D09C" stroke="#18181b" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
