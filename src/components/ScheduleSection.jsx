import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { scheduleData } from '../utils/scheduleData';
import { sounds } from '../utils/sound';

export default function ScheduleSection({ onSelectSlot }) {
  const days = [
    { key: 'thursday', ...scheduleData.thursday, color: "#7B61FF" },
    { key: 'friday', ...scheduleData.friday, color: "#EE7DA5" },
    { key: 'saturday', ...scheduleData.saturday, color: "#FF8552" }
  ];

  return (
    <section id="agenda" className="w-full relative overflow-hidden">
      
      {days.map((day, idx) => (
        <div key={day.key} className="relative w-full">
          
          {/* Top Wavy SVG Transition */}
          <div className="w-full overflow-hidden leading-none z-10 relative -mb-1">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20" fill={day.color}>
              <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z" />
            </svg>
          </div>

          {/* Main Section Content */}
          <div 
            className="w-full py-12 md:py-16 px-4 md:px-12 text-white relative"
            style={{ backgroundColor: day.color }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Big Date Typography & Mascot Art */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[280px]">
                <div>
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start"
                  >
                    <span className="font-shrikhand text-8xl md:text-[140px] leading-none text-white drop-shadow-md select-none">
                      {day.dayNum}
                    </span>
                    <span className="font-shrikhand text-3xl md:text-5xl text-white/95 tracking-wide -mt-2 md:-mt-4">
                      {day.dayName}
                    </span>
                  </motion.div>
                </div>

                {/* Day Mascots matching screenshot */}
                <div className="mt-8 relative hidden md:block">
                  {day.key === 'thursday' && (
                    <motion.div 
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Robot Mascot with Flexible Arms Spraying Hose */}
                      <svg width="150" height="120" viewBox="0 0 150 120" fill="none">
                        <rect x="20" y="30" width="60" height="50" rx="10" fill="#1c1c1e" stroke="#FAF6EE" strokeWidth="3" />
                        <circle cx="40" cy="50" r="8" fill="#FFE600" />
                        <circle cx="60" cy="50" r="8" fill="#FFE600" />
                        <path d="M35 65 Q50 75 65 65" stroke="#FAF6EE" strokeWidth="3" fill="none" />
                        {/* Flexible Arms */}
                        <path d="M-10 60 Q10 40 20 60" stroke="#FAF6EE" strokeWidth="8" strokeLinecap="round" fill="none" />
                        <path d="M80 55 C100 55 110 80 140 75" stroke="#FFE600" strokeWidth="6" strokeLinecap="round" fill="none" />
                      </svg>
                    </motion.div>
                  )}

                  {day.key === 'friday' && (
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Exhaust Machine Venting Smoke */}
                      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
                        <rect x="30" y="40" width="70" height="45" rx="8" fill="#1c1c1e" stroke="#FAF6EE" strokeWidth="3" />
                        <circle cx="50" cy="62" r="7" fill="#FF8552" />
                        <circle cx="70" cy="62" r="7" fill="#FFE600" />
                        <path d="M0 40 Q15 20 30 30 Q45 10 60 30 Z" fill="#FAF6EE" opacity="0.9" />
                      </svg>
                    </motion.div>
                  )}

                  {day.key === 'saturday' && (
                    <motion.div 
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Astronaut Mascot in Bubble Pod */}
                      <svg width="140" height="130" viewBox="0 0 140 130" fill="none">
                        <circle cx="65" cy="65" r="45" fill="#7B61FF" stroke="#FAF6EE" strokeWidth="3" />
                        <circle cx="65" cy="55" r="28" fill="#FAF6EE" opacity="0.4" stroke="#FAF6EE" strokeWidth="2" />
                        <circle cx="55" cy="55" r="4" fill="#1c1c1e" />
                        <circle cx="75" cy="55" r="4" fill="#1c1c1e" />
                        <path d="M58 68 Q65 74 72 68" stroke="#1c1c1e" strokeWidth="3" fill="none" />
                      </svg>
                    </motion.div>
                  )}
                </div>

              </div>

              {/* Right Column: Morning & Afternoon Grid matching screenshot */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Morning Column */}
                <div className="bg-black/15 backdrop-blur-sm border border-white/20 p-5 rounded-3xl shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/20 mb-4">
                    <h3 className="font-shrikhand text-2xl text-white">Morning</h3>
                  </div>

                  <div className="space-y-2.5">
                    {day.morning.map((slot, idx) => (
                      <div
                        key={idx}
                        onClick={() => { sounds.playPop(); onSelectSlot(slot); }}
                        className="bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-fredoka text-xs md:text-sm font-bold text-white shrink-0">
                            {slot.time}
                          </span>
                          <span className="font-fredoka text-xs text-white/70 italic">
                            To be announced
                          </span>
                        </div>

                        <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Afternoon Column */}
                <div className="bg-black/15 backdrop-blur-sm border border-white/20 p-5 rounded-3xl shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/20 mb-4">
                    <h3 className="font-shrikhand text-2xl text-white">Afternoon</h3>
                  </div>

                  <div className="space-y-2.5">
                    {day.afternoon.map((slot, idx) => (
                      <div
                        key={idx}
                        onClick={() => { sounds.playPop(); onSelectSlot(slot); }}
                        className="bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-2.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-fredoka text-xs md:text-sm font-bold text-white shrink-0">
                            {slot.time}
                          </span>
                          <span className="font-fredoka text-xs text-white/70 italic">
                            To be announced
                          </span>
                        </div>

                        <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom Wavy SVG Divider */}
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
