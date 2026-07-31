import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function ScheduleSection({ onSelectSlot }) {
  const days = [
    {
      key: 'thursday',
      dayNum: '30',
      dayName: 'Thursday',
      dateFull: 'March 30, 2026',
      color: '#7B61FF',
      slots: [
        { time: '9:00 AM', title: 'Opening Keynote: Pure Imagination', speaker: 'Aaron Draplin' },
        { time: '9:30 AM', title: 'Crafting Brand Identities That Spark Joy', speaker: 'Tad Carpenter' },
        { time: '10:00 AM', title: 'Unlocking 3D & Motion Graphics Magic', speaker: 'Meg Lewis' },
        { time: '11:00 AM', title: 'Retro Typography & Layout Systems', speaker: 'Jessica Hische' },
        { time: '11:30 AM', title: 'Panel: Creative Energy & Play', speaker: 'Creative South Panel' },
      ],
      afternoonSlots: [
        { time: '12:00 PM', title: 'Lunch Break & Food Trucks', speaker: 'Community Gathering' },
        { time: '1:30 PM', title: 'Illustration Workshop: Sketch to Screen', speaker: 'Brad Woodard' },
        { time: '2:30 PM', title: 'Interactive Web Experiences', speaker: 'Sarah Drasner' },
        { time: '3:30 PM', title: 'Building a Sustainable Independent Studio', speaker: 'James White' },
        { time: '4:30 PM', title: 'Day 1 Welcome Mixer', speaker: 'Creative South Team' },
      ]
    },
    {
      key: 'friday',
      dayNum: '31',
      dayName: 'Friday',
      dateFull: 'March 31, 2026',
      color: '#F368E0',
      slots: [
        { time: '9:00 AM', title: 'Keynote: Storytelling in Visual Arts', speaker: 'Debbie Millman' },
        { time: '9:30 AM', title: 'Vector Masterclass: Precision & Expression', speaker: 'Orlando Arocena' },
        { time: '10:00 AM', title: 'Designing for Humans in a Tech World', speaker: 'Dan Cederholm' },
        { time: '11:00 AM', title: 'Color Theory & Nostalgia in Design', speaker: 'Gemma O\'Brien' },
        { time: '11:30 AM', title: 'Live Screen Printing Demo', speaker: 'Real Thread Team' },
      ],
      afternoonSlots: [
        { time: '12:00 PM', title: 'BBQ Feast & Live Music Jam', speaker: 'Southside Cookout' },
        { time: '1:30 PM', title: 'Character Design: Personality in Pixels', speaker: 'Jeff Gershoni' },
        { time: '2:30 PM', title: 'The Power of Side Projects & Play', speaker: 'Mina Markham' },
        { time: '3:30 PM', title: 'Client Communication & Price Confidence', speaker: 'Mike Janda' },
        { time: '4:30 PM', title: 'INK WARS Live Battle!', speaker: '8 Contenders' },
      ]
    },
    {
      key: 'saturday',
      dayNum: '01',
      dayName: 'Saturday',
      dateFull: 'April 01, 2026',
      color: '#FF7675',
      slots: [
        { time: '9:00 AM', title: 'Morning Awakening: Finding Your Voice', speaker: 'Timothy Goodman' },
        { time: '9:30 AM', title: 'Packaging Design with Personality', speaker: 'Helen Li' },
        { time: '10:00 AM', title: 'UX for Delightful Products', speaker: 'Jon Yablonski' },
        { time: '11:00 AM', title: 'Animation Masterclass: Bouncy Motion', speaker: 'Rachel Reid' },
        { time: '11:30 AM', title: 'Portfolio Feedback Lounge', speaker: 'Mentors Panel' },
      ],
      afternoonSlots: [
        { time: '12:00 PM', title: 'Networking Lunch & Group Photo', speaker: 'All Attendees' },
        { time: '1:30 PM', title: 'Signpainting & Lettering Techniques', speaker: 'Kenji Nakagawa' },
        { time: '2:30 PM', title: 'Closing Keynote: Dreaming Big', speaker: 'Wade & Leta' },
        { time: '3:30 PM', title: 'Creative South Awards Ceremony', speaker: 'Host Hugs Team' },
        { time: '4:30 PM', title: 'Official After Party & Karaoke Bash!', speaker: 'DJ Funk & Friends' },
      ]
    }
  ];

  return (
    <section id="agenda" className="w-full relative overflow-hidden">
      
      {days.map((day) => (
        <div key={day.key} className="relative w-full">
          
          {/* Wavy Top SVG Transition */}
          <div className="w-full overflow-hidden leading-none z-10 relative">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20" fill={day.color}>
              <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z" />
            </svg>
          </div>

          {/* Section Main Background */}
          <div 
            className="w-full py-10 md:py-16 px-4 md:px-12 text-white relative"
            style={{ backgroundColor: day.color }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Date & Mascot Art */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[280px]">
                
                <div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start"
                  >
                    {/* Big Bold Day Number & Day Name */}
                    <div className="flex items-baseline gap-4">
                      <span className="font-shrikhand text-8xl md:text-[130px] leading-none text-white drop-shadow-md select-none">
                        {day.dayNum}
                      </span>
                      <span className="font-shrikhand text-3xl md:text-5xl text-white tracking-wide">
                        {day.dayName}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Day-Specific Cartoon Mascot */}
                <div className="mt-6 relative hidden md:block">
                  {day.key === 'thursday' && (
                    <motion.div 
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Tube Robot Mascot Pouring Hose */}
                      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
                        <rect x="20" y="25" width="55" height="45" rx="8" fill="#F5EBE6" stroke="#1A191B" strokeWidth="3" />
                        <circle cx="38" cy="42" r="6" fill="#7B61FF" />
                        <circle cx="58" cy="42" r="6" fill="#7B61FF" />
                        {/* Flexible Hose Arms */}
                        <path d="M75 45 C100 45 110 70 135 65" stroke="#F5EBE6" strokeWidth="8" strokeLinecap="round" />
                        <circle cx="137" cy="65" r="7" fill="#F368E0" />
                      </svg>
                    </motion.div>
                  )}

                  {day.key === 'friday' && (
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Exhaust Box Mascot Venting Clouds */}
                      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
                        <rect x="30" y="35" width="70" height="45" rx="8" fill="#FFE600" stroke="#1A191B" strokeWidth="3.5" />
                        <circle cx="50" cy="57" r="7" fill="#1A191B" />
                        <circle cx="70" cy="57" r="7" fill="#1A191B" />
                        {/* Exhaust pipe */}
                        <rect x="10" y="45" width="20" height="18" rx="4" fill="#1A191B" />
                        <path d="M-10 35 Q5 20 20 30 Z" fill="#F5EBE6" />
                      </svg>
                    </motion.div>
                  )}

                  {day.key === 'saturday' && (
                    <motion.div 
                      animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Astronaut Mascot in Bubble Saucer */}
                      <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
                        <ellipse cx="70" cy="75" rx="45" ry="18" fill="#1A191B" />
                        <circle cx="70" cy="45" r="30" fill="#00D09C" stroke="#1A191B" strokeWidth="3" />
                        <circle cx="60" cy="40" r="4" fill="#1A191B" />
                        <circle cx="80" cy="40" r="4" fill="#1A191B" />
                      </svg>
                    </motion.div>
                  )}
                </div>

              </div>

              {/* Right Column: Morning & Afternoon Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Morning Column */}
                <div className="bg-black/15 backdrop-blur-sm border border-white/25 p-5 rounded-3xl shadow-lg">
                  <h3 className="font-shrikhand text-2xl text-white mb-4 flex items-center justify-between pb-2 border-b border-white/20">
                    <span>Morning</span>
                    <Sparkles className="w-5 h-5 text-white/80" />
                  </h3>

                  <div className="space-y-3">
                    {day.slots.map((slot, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, x: 3 }}
                        onClick={() => { sounds.playPop(); onSelectSlot(slot); }}
                        className="bg-white/10 hover:bg-white/20 border border-white/15 p-3 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-fredoka text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-lg shrink-0">
                            {slot.time}
                          </span>
                          <div className="text-left">
                            <h4 className="font-fredoka text-sm font-semibold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                              {slot.title}
                            </h4>
                            <p className="font-fredoka text-[11px] text-white/70">
                              To be announced
                            </p>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Afternoon Column */}
                <div className="bg-black/15 backdrop-blur-sm border border-white/25 p-5 rounded-3xl shadow-lg">
                  <h3 className="font-shrikhand text-2xl text-white mb-4 flex items-center justify-between pb-2 border-b border-white/20">
                    <span>Afternoon</span>
                    <Clock className="w-5 h-5 text-white/80" />
                  </h3>

                  <div className="space-y-3">
                    {day.afternoonSlots.map((slot, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, x: 3 }}
                        onClick={() => { sounds.playPop(); onSelectSlot(slot); }}
                        className="bg-white/10 hover:bg-white/20 border border-white/15 p-3 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-fredoka text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-lg shrink-0">
                            {slot.time}
                          </span>
                          <div className="text-left">
                            <h4 className="font-fredoka text-sm font-semibold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                              {slot.title}
                            </h4>
                            <p className="font-fredoka text-[11px] text-white/70">
                              To be announced
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

          {/* Bottom SVG Transition */}
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
