import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { scheduleData } from '../utils/scheduleData';
import { sounds } from '../utils/sound';

export default function ScheduleSection({ onSelectSlot }) {
  const days = [
    { key: 'thursday', ...scheduleData.thursday },
    { key: 'friday', ...scheduleData.friday },
    { key: 'saturday', ...scheduleData.saturday }
  ];

  return (
    <section id="agenda" className="w-full relative overflow-hidden">
      
      {days.map((day, idx) => (
        <div key={day.key} className="relative w-full">
          
          {/* Top Wavy SVG Divider */}
          <div className="w-full overflow-hidden leading-none z-10 relative">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20" fill={day.color}>
              <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z" />
            </svg>
          </div>

          {/* Section Main Container */}
          <div 
            className="w-full py-12 md:py-20 px-4 md:px-12 text-white relative"
            style={{ backgroundColor: day.color }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Huge Date Typography & Mascot Art */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[300px]">
                
                <div>
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start"
                  >
                    {/* Big Bold Day Number */}
                    <span className="font-shrikhand text-8xl md:text-[140px] leading-none text-white drop-shadow-lg select-none">
                      {day.dayNum}
                    </span>
                    {/* Day Name */}
                    <span className="font-shrikhand text-3xl md:text-5xl text-white/90 tracking-wide -mt-2 md:-mt-4">
                      {day.dayName}
                    </span>
                    <span className="font-fredoka text-sm md:text-base text-white/80 mt-1 font-medium bg-black/20 px-3 py-1 rounded-full">
                      {day.dateFull}
                    </span>
                  </motion.div>
                </div>

                {/* Day-Specific Retro Mascot Art */}
                <div className="mt-8 relative hidden md:block">
                  {day.key === 'thursday' && (
                    <motion.div 
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center gap-3"
                    >
                      {/* Robot Mascot Spraying Hose */}
                      <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
                        <rect x="20" y="30" width="60" height="50" rx="10" fill="#27272a" stroke="#F5EBE6" strokeWidth="3" />
                        <circle cx="40" cy="50" r="8" fill="#FFE600" />
                        <circle cx="60" cy="50" r="8" fill="#FFE600" />
                        <path d="M35 65 Q50 75 65 65" stroke="#F5EBE6" strokeWidth="3" fill="none" />
                        {/* Hose Pipe & Spray */}
                        <path d="M80 55 C100 55 110 80 130 75" stroke="#FFE600" strokeWidth="6" strokeLinecap="round" fill="none" />
                        <circle cx="132" cy="74" r="6" fill="#00D09C" className="animate-ping" />
                      </svg>
                    </motion.div>
                  )}

                  {day.key === 'friday' && (
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center gap-3"
                    >
                      {/* Retro Exhaust Machine */}
                      <svg width="140" height="110" viewBox="0 0 140 110" fill="none">
                        <rect x="30" y="40" width="70" height="45" rx="8" fill="#18181b" stroke="#F5EBE6" strokeWidth="3" />
                        <circle cx="50" cy="62" r="7" fill="#FF7640" />
                        <circle cx="70" cy="62" r="7" fill="#FFE600" />
                        {/* Smoke cloud */}
                        <path d="M10 40 Q25 20 40 30 Q55 10 70 30 Z" fill="#F5EBE6" opacity="0.8" />
                      </svg>
                    </motion.div>
                  )}

                  {day.key === 'saturday' && (
                    <motion.div 
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center gap-3"
                    >
                      {/* Astronaut Mascot in Bubble Helmet */}
                      <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
                        <circle cx="65" cy="65" r="45" fill="#6C5CE7" stroke="#F5EBE6" strokeWidth="3" />
                        <circle cx="65" cy="55" r="28" fill="#F5EBE6" opacity="0.3" stroke="#F5EBE6" strokeWidth="2" />
                        <circle cx="55" cy="55" r="4" fill="#18181b" />
                        <circle cx="75" cy="55" r="4" fill="#18181b" />
                        <path d="M58 68 Q65 74 72 68" stroke="#18181b" strokeWidth="3" fill="none" />
                      </svg>
                    </motion.div>
                  )}
                </div>

              </div>

              {/* Right Column: Morning & Afternoon Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Morning Column */}
                <div className="bg-black/15 backdrop-blur-sm border border-white/20 p-5 rounded-3xl shadow-xl">
                  <h3 className="font-shrikhand text-2xl text-white mb-4 flex items-center justify-between pb-2 border-b border-white/20">
                    <span>Morning</span>
                    <Sparkles className="w-5 h-5 text-white/80" />
                  </h3>

                  <div className="space-y-3">
                    {day.morning.map((slot, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, x: 4 }}
                        onClick={() => { sounds.playPop(); onSelectSlot(slot); }}
                        className="bg-white/10 hover:bg-white/20 border border-white/15 p-3.5 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-fredoka text-xs md:text-sm font-bold bg-white/20 text-white px-2.5 py-1 rounded-lg shrink-0">
                            {slot.time}
                          </span>
                          <div className="text-left">
                            <h4 className="font-fredoka text-sm md:text-base font-semibold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                              {slot.title}
                            </h4>
                            <p className="font-fredoka text-xs text-white/70">
                              {slot.speaker}
                            </p>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Afternoon Column */}
                <div className="bg-black/15 backdrop-blur-sm border border-white/20 p-5 rounded-3xl shadow-xl">
                  <h3 className="font-shrikhand text-2xl text-white mb-4 flex items-center justify-between pb-2 border-b border-white/20">
                    <span>Afternoon</span>
                    <Clock className="w-5 h-5 text-white/80" />
                  </h3>

                  <div className="space-y-3">
                    {day.afternoon.map((slot, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, x: 4 }}
                        onClick={() => { sounds.playPop(); onSelectSlot(slot); }}
                        className="bg-white/10 hover:bg-white/20 border border-white/15 p-3.5 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-fredoka text-xs md:text-sm font-bold bg-white/20 text-white px-2.5 py-1 rounded-lg shrink-0">
                            {slot.time}
                          </span>
                          <div className="text-left">
                            <h4 className="font-fredoka text-sm md:text-base font-semibold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                              {slot.title}
                            </h4>
                            <p className="font-fredoka text-xs text-white/70">
                              {slot.speaker}
                            </p>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom Wavy SVG Transition to next section */}
          <div className="w-full overflow-hidden leading-none z-10 relative -mt-1">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 md:h-16" fill={day.color}>
              <path d="M0,0 C300,90 600,-40 1200,40 L1200,0 L0,0 Z" />
            </svg>
          </div>

        </div>
      ))}

    </section>
  );
}
