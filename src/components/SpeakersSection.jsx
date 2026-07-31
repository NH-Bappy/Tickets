import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Sparkles, Flame, Gauge, Sliders } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function SpeakersSection({ onBecomeSpeaker }) {
  const [steamActive, setSteamActive] = useState(false);
  const [gaugeAngle, setGaugeAngle] = useState(45);
  const [activeJar, setActiveJar] = useState(null);

  const handleValveClick = () => {
    sounds.playValve();
    setSteamActive(true);
    setGaugeAngle((prev) => (prev > 140 ? -45 : prev + 45));
    setTimeout(() => setSteamActive(false), 2000);
  };

  const jars = [
    { id: 1, label: "Typography", liquidColor: "#F5EBE6", tagColor: "#6C5CE7" },
    { id: 2, label: "Branding", liquidColor: "#FF7640", tagColor: "#FFAA00" },
    { id: 3, label: "Illustration", liquidColor: "#E84393", tagColor: "#E84393" },
    { id: 4, label: "3D Motion", liquidColor: "#FFE600", tagColor: "#FFE600" },
    { id: 5, label: "UI / Craft", liquidColor: "#6C5CE7", tagColor: "#00D09C" }
  ];

  return (
    <section id="speakers" className="relative w-full bg-[#18181b] pt-12 pb-20 px-4 overflow-hidden border-t border-zinc-800">
      
      {/* Title & Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10 relative">
        <h2 className="font-shrikhand text-4xl sm:text-5xl md:text-7xl text-[#F5EBE6] tracking-wide mb-3">
          Speakers &amp; Workshops
        </h2>
        <p className="font-fredoka text-zinc-400 text-sm md:text-lg italic max-w-xl mb-6">
          "we are the music makers and we are the dreamers of dreams."
        </p>

        <button
          onClick={() => { sounds.playPop(); onBecomeSpeaker(); }}
          className="group px-6 py-2.5 rounded-full border-2 border-zinc-500 hover:border-[#FFE600] text-[#F5EBE6] font-fredoka font-semibold text-sm transition-all duration-200 shadow-md hover:bg-[#FFE600] hover:text-[#18181b] flex items-center gap-2 cursor-pointer mb-12"
        >
          <Mic className="w-4 h-4 text-[#FFE600] group-hover:text-[#18181b] transition-colors" />
          <span>Become a speaker</span>
        </button>
      </div>

      {/* Interactive Laboratory Pipe Apparatus System */}
      <div className="relative max-w-6xl mx-auto my-6">
        
        {/* Steam Animation Overlay */}
        {steamActive && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 0.8, y: -40, scale: 1.4 }}
            exit={{ opacity: 0 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full bg-white/40 blur-md animate-ping"></span>
              <span className="w-12 h-12 rounded-full bg-white/30 blur-md animate-ping"></span>
              <span className="w-10 h-10 rounded-full bg-white/50 blur-md animate-ping"></span>
            </div>
          </motion.div>
        )}

        {/* SVG Pipe Apparatus */}
        <div className="relative w-full overflow-x-auto pb-4">
          <svg className="w-full min-w-[750px] h-[340px]" viewBox="0 0 1000 340" fill="none">
            
            {/* Main Connecting Pipes */}
            <path d="M 50 120 L 450 120 L 450 220 L 850 220 L 850 120" stroke="#52525b" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 50 120 L 450 120 L 450 220 L 850 220 L 850 120" stroke="#71717a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Glowing Liquid Stream Inside Pipe */}
            <path 
              d="M 50 120 L 450 120 L 450 220 L 850 220 L 850 120" 
              stroke="#00D09C" 
              strokeWidth="4" 
              className="animate-liquid" 
              fill="none" 
            />

            {/* Pipe Pressure Gauge (Interactive) */}
            <g transform="translate(450, 120)" className="cursor-pointer" onClick={handleValveClick}>
              <circle cx="0" cy="-35" r="22" fill="#27272a" stroke="#F5EBE6" strokeWidth="4" />
              <circle cx="0" cy="-35" r="18" fill="#18181b" />
              {/* Gauge Needle */}
              <line 
                x1="0" y1="-35" 
                x2={14 * Math.cos((gaugeAngle * Math.PI) / 180)} 
                y2={-35 + 14 * Math.sin((gaugeAngle * Math.PI) / 180)} 
                stroke="#FF7640" 
                strokeWidth="3" 
                strokeLinecap="round" 
              />
              <circle cx="0" cy="-35" r="3" fill="#FFE600" />
            </g>

            {/* Pipe Valve Wheel (Clickable) */}
            <g transform="translate(250, 120)" className="cursor-pointer group" onClick={handleValveClick}>
              <circle cx="0" cy="0" r="18" fill="#FF7640" stroke="#F5EBE6" strokeWidth="3" className="group-hover:rotate-45 transition-transform duration-300" />
              <line x1="-14" y1="0" x2="14" y2="0" stroke="#18181b" strokeWidth="3" />
              <line x1="0" y1="-14" x2="0" y2="14" stroke="#18181b" strokeWidth="3" />
            </g>

            {/* Funnel & Distillation Vessel (Right) */}
            <g transform="translate(850, 140)">
              {/* Glass Beaker Body */}
              <path d="M-25 0 L25 0 L35 70 L-35 70 Z" fill="url(#liquidGrad)" opacity="0.8" stroke="#F5EBE6" strokeWidth="3" />
              <rect x="-10" y="-30" width="20" height="30" fill="#3f3f46" stroke="#F5EBE6" strokeWidth="2" />
              {/* Bubbles */}
              <circle cx="-10" cy="40" r="4" fill="#00D09C" className="animate-bubble-1" />
              <circle cx="10" cy="50" r="5" fill="#FFE600" className="animate-bubble-2" />
              <circle cx="0" cy="30" r="3" fill="#E84393" className="animate-bubble-3" />
            </g>

            {/* Liquid Dripping into Conveyor Belt */}
            <path d="M 850 210 L 850 260" stroke="#00D09C" strokeWidth="4" strokeDasharray="6 6" className="animate-liquid" />

            {/* Conveyor Belt Base Platform */}
            <rect x="50" y="270" width="900" height="18" rx="9" fill="#27272a" stroke="#52525b" strokeWidth="3" />
            {/* Belt Wheels */}
            <circle cx="70" cy="279" r="6" fill="#71717a" />
            <circle cx="930" cy="279" r="6" fill="#71717a" />
            <circle cx="500" cy="279" r="6" fill="#71717a" />

            {/* SVG Gradient definitions */}
            <defs>
              <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00D09C" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>

          {/* Conveyor Belt Glass Jars Overlay */}
          <div className="absolute bottom-1 space-x-4 flex justify-between items-end px-12 w-full max-w-5xl left-1/2 -translate-x-1/2">
            {jars.map((jar) => (
              <motion.div
                key={jar.id}
                whileHover={{ y: -8, scale: 1.05 }}
                onClick={() => { sounds.playPop(); setActiveJar(jar.id === activeJar ? null : jar.id); }}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Jar Tag */}
                <div 
                  className="px-2 py-0.5 rounded text-[11px] font-fredoka font-bold text-zinc-900 shadow mb-1 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: jar.tagColor }}
                >
                  {jar.label}
                </div>

                {/* Glass Jar Body */}
                <div className="relative w-14 h-20 bg-zinc-800/80 border-2 border-zinc-400 rounded-t-lg rounded-b-2xl overflow-hidden flex flex-col justify-end p-1 shadow-xl">
                  {/* Jar Lid */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-zinc-500 rounded-sm"></div>
                  
                  {/* Colored Liquid inside */}
                  <div 
                    className="w-full rounded-b-xl transition-all duration-300 relative overflow-hidden"
                    style={{ 
                      backgroundColor: jar.liquidColor, 
                      height: activeJar === jar.id ? '85%' : '65%',
                      opacity: 0.85
                    }}
                  >
                    <div className="w-full h-1 bg-white/40 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
