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

      {/* Endless Flowing River Rainbow Stream at Top (No cutoffs, extends far past screen edges) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="w-full h-20 md:h-28" viewBox="0 0 1400 120" preserveAspectRatio="none">
          <path d="M-200,20 C150,110 450,-30 750,70 C1050,120 1250,10 1600,60" stroke="#DE5B5B" strokeWidth="12" fill="none" />
          <path d="M-200,32 C150,122 450,-18 750,82 C1050,132 1250,22 1600,72" stroke="#E6914D" strokeWidth="12" fill="none" />
          <path d="M-200,44 C150,134 450,-6 750,94 C1050,144 1250,34 1600,84" stroke="#F2C94C" strokeWidth="12" fill="none" />
          <path d="M-200,56 C150,146 450,6 750,106 C1050,156 1250,46 1600,96" stroke="#76B894" strokeWidth="12" fill="none" />
          <path d="M-200,68 C150,158 450,18 750,118 C1050,168 1250,58 1600,108" stroke="#6BB2D5" strokeWidth="12" fill="none" />
          <path d="M-200,80 C150,170 450,30 750,130 C1050,180 1250,70 1600,120" stroke="#8E7CC3" strokeWidth="12" fill="none" />
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

      {/* Endless Flowing River Rainbow Stream at Bottom (No cutoffs, extends far past screen edges) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="w-full h-20 md:h-24" viewBox="0 0 1400 100" preserveAspectRatio="none">
          <path d="M-200,80 C200,20 500,90 850,30 C1100,10 1300,70 1600,20" stroke="#DE5B5B" strokeWidth="10" fill="none" />
          <path d="M-200,68 C200,8 500,78 850,18 C1100,-2 1300,58 1600,8" stroke="#E6914D" strokeWidth="10" fill="none" />
          <path d="M-200,56 C200,-4 500,66 850,6 C1100,-14 1300,46 1600,-4" stroke="#F2C94C" strokeWidth="10" fill="none" />
          <path d="M-200,44 C200,-16 500,54 850,-6 C1100,-26 1300,34 1600,-16" stroke="#76B894" strokeWidth="10" fill="none" />
          <path d="M-200,32 C200,-28 500,42 850,-18 C1100,-38 1300,22 1600,-28" stroke="#6BB2D5" strokeWidth="10" fill="none" />
          <path d="M-200,20 C200,-40 500,30 850,-30 C1100,-50 1300,10 1600,-40" stroke="#8E7CC3" strokeWidth="10" fill="none" />
        </svg>
      </div>

    </section>
  );
}
