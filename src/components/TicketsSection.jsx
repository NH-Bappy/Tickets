import React from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function TicketsSection({ onOpenTickets }) {
  const footerStars = [
    { top: '15%', left: '10%', size: 'text-sm', color: 'text-white/50', icon: '✦' },
    { top: '25%', left: '25%', size: 'text-xs', color: 'text-[#FFE600]/60', icon: '✧' },
    { top: '20%', right: '15%', size: 'text-base', color: 'text-[#FF7640]/70', icon: '✦' },
    { top: '35%', right: '8%', size: 'text-xs', color: 'text-white/40', icon: '✦' },
    { top: '55%', left: '15%', size: 'text-xs', color: 'text-white/60', icon: '★' },
    { top: '65%', left: '30%', size: 'text-sm', color: 'text-[#FFE600]/70', icon: '✦' },
    { top: '60%', right: '22%', size: 'text-xs', color: 'text-white/50', icon: '✧' },
    { top: '75%', right: '12%', size: 'text-sm', color: 'text-[#FF7640]/80', icon: '✦' },
  ];

  const riverColors = ['#8E7CC3', '#6BB2D5', '#76B894', '#F2C94C', '#E6914D', '#DE5B5B', '#D9829C'];

  return (
    <section className="relative w-full bg-[#18181b] pt-16 pb-24 px-4 overflow-hidden border-t border-zinc-800">
      
      {/* Dense Star Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {footerStars.map((star, i) => (
          <span 
            key={i}
            className={`absolute ${star.size} ${star.color} animate-pulse`}
            style={{ top: star.top, left: star.left, right: star.right }}
          >
            {star.icon}
          </span>
        ))}
      </div>

      {/* MULTI-BRANCH RIVER RAINBOW STREAMS AT TOP (Flowing in from multiple places: top-left & top-right) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="w-full h-28 md:h-36" viewBox="0 0 1400 150" preserveAspectRatio="none">
          {/* Branch A: Flowing from Top Left across center */}
          {riverColors.map((color, i) => (
            <path
              key={`top-a-${i}`}
              d={`M -200 ${10 + i * 10} C 200 ${100 + i * 8}, 500 ${-20 + i * 8}, 850 ${70 + i * 8} C 1100 ${120 + i * 8}, 1300 ${20 + i * 8}, 1600 ${60 + i * 8}`}
              stroke={color}
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
          ))}

          {/* Branch B: Second River Branch flowing from Top Right looping back across */}
          {riverColors.map((color, i) => (
            <path
              key={`top-b-${i}`}
              d={`M 1600 ${-40 + i * 9} C 1300 ${80 + i * 8}, 900 ${-10 + i * 8}, 550 ${90 + i * 8} C 300 ${140 + i * 8}, 100 ${30 + i * 8}, -200 ${70 + i * 8}`}
              stroke={color}
              strokeWidth="8"
              opacity="0.85"
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </svg>
      </div>

      {/* Main Ticket Banner Container */}
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center z-10 my-8">
        
        {/* Retro Multi-Color 3D Heading */}
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-shrikhand text-5xl sm:text-7xl md:text-8xl text-[#F5EBE6] tracking-tight leading-tight retro-ticket-shadow mb-6 select-none"
        >
          Tickets <br className="sm:hidden" />
          Available Now
        </motion.h2>

        <p className="font-fredoka text-zinc-300 text-sm sm:text-base md:text-xl max-w-lg mb-8 leading-relaxed">
          Join us for a weekend of collaboration, exploration, and lots of spectacular nonsense.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => { sounds.playFanfare(); onOpenTickets(); }}
          className="group relative inline-flex items-center gap-3 bg-[#F5EBE6] text-[#18181b] font-fredoka font-bold text-lg md:text-xl px-9 py-4 rounded-full border-4 border-[#18181b] shadow-[6px_6px_0px_0px_#6C5CE7] hover:shadow-[2px_2px_0px_0px_#6C5CE7] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 cursor-pointer"
        >
          <Ticket className="w-6 h-6 text-[#FF7640] group-hover:rotate-12 transition-transform" />
          <span>Get your tickets</span>
        </motion.button>

      </div>

      {/* Animated Cartoon Mascot */}
      <div className="relative max-w-5xl mx-auto flex justify-center md:justify-end mt-12 z-20">
        <motion.div 
          animate={{ y: [0, -8, 0], rotate: [-2, 3, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <svg width="120" height="130" viewBox="0 0 120 130" fill="none">
            <path d="M20 50 Q60 10 100 50 C110 80 105 110 90 120 C70 125 40 125 25 115 C10 100 10 70 20 50 Z" fill="#FF7640" stroke="#18181b" strokeWidth="3" />
            <circle cx="45" cy="55" r="7" fill="#18181b" />
            <circle cx="75" cy="55" r="7" fill="#18181b" />
            <circle cx="47" cy="53" r="2.5" fill="#F5EBE6" />
            <circle cx="77" cy="53" r="2.5" fill="#F5EBE6" />
            <path d="M45 75 Q60 90 75 75" stroke="#18181b" strokeWidth="4" strokeLinecap="round" fill="none" />
            <motion.g
              animate={{ rotate: [0, 20, 0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: '95px 75px' }}
            >
              <path d="M95 75 C115 65 120 55 115 45" stroke="#FF7640" strokeWidth="10" strokeLinecap="round" />
              <circle cx="115" cy="45" r="7" fill="#FF7640" />
            </motion.g>
          </svg>
        </motion.div>
      </div>

      {/* MULTI-BRANCH RIVER RAINBOW STREAMS AT BOTTOM (Flowing in & out from multiple places) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1400 120" preserveAspectRatio="none">
          {riverColors.map((color, i) => (
            <path
              key={`bot-a-${i}`}
              d={`M -200 ${90 - i * 8} C 200 ${20 - i * 8}, 500 ${90 - i * 8}, 850 ${30 - i * 8} C 1100 ${10 - i * 8}, 1300 ${70 - i * 8}, 1600 ${20 - i * 8}`}
              stroke={color}
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
          ))}

          {riverColors.map((color, i) => (
            <path
              key={`bot-b-${i}`}
              d={`M 1600 ${110 - i * 8} C 1300 ${30 - i * 8}, 900 ${100 - i * 8}, 550 ${20 - i * 8} C 300 ${70 - i * 8}, 100 ${10 - i * 8}, -200 ${50 - i * 8}`}
              stroke={color}
              strokeWidth="8"
              opacity="0.85"
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </svg>
      </div>

    </section>
  );
}
