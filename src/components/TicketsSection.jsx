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

  return (
    <section className="relative w-full bg-[#18181b] pt-16 pb-24 px-4 overflow-hidden border-t border-zinc-800">
      
      {/* Dense Star Sparkles in Footer Hero */}
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

      {/* Top Rainbow Wave Stream */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M-100,20 C200,100 400,-20 700,60 C900,110 1100,10 1300,50" stroke="#FF5964" strokeWidth="12" fill="none" />
          <path d="M-100,32 C200,112 400,-8 700,72 C900,122 1100,22 1300,62" stroke="#FFAA00" strokeWidth="12" fill="none" />
          <path d="M-100,44 C200,124 400,4 700,84 C900,134 1100,34 1300,74" stroke="#FFE600" strokeWidth="12" fill="none" />
          <path d="M-100,56 C200,136 400,16 700,96 C900,146 1100,46 1300,86" stroke="#6C5CE7" strokeWidth="12" fill="none" />
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

      {/* Bottom Rainbow Stream */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="w-full h-16 md:h-20" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M-100,80 C200,20 400,90 700,30 C900,10 1100,70 1300,20" stroke="#FF5964" strokeWidth="10" fill="none" />
          <path d="M-100,68 C200,8 400,78 700,18 C900,-2 1100,58 1300,8" stroke="#00D09C" strokeWidth="10" fill="none" />
          <path d="M-100,56 C200,-4 400,66 700,6 C900,-14 1100,46 1300,-4" stroke="#6C5CE7" strokeWidth="10" fill="none" />
        </svg>
      </div>

    </section>
  );
}
