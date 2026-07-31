import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
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
    { id: 1, label: "Typography", liquidColor: "#7B61FF", tagColor: "#7B61FF", textColor: "text-white" },
    { id: 2, label: "Branding", liquidColor: "#FF7640", tagColor: "#FF7640", textColor: "text-white" },
    { id: 3, label: "Illustration", liquidColor: "#E84393", tagColor: "#E84393", textColor: "text-white" },
    { id: 4, label: "3D Motion", liquidColor: "#FFE600", tagColor: "#FFE600", textColor: "text-zinc-950" },
    { id: 5, label: "UI / Craft", liquidColor: "#3B82F6", tagColor: "#3B82F6", textColor: "text-white" }
  ];

  return (
    <section id="speakers" className="relative w-full bg-[#F5EBE6] text-[#1A191B] pt-8 pb-20 px-4 overflow-hidden">
      
      {/* Title & Header */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10 relative">
        <h2 className="font-shrikhand text-5xl sm:text-6xl md:text-7xl text-[#1A191B] tracking-tight mb-2">
          Speakers <br className="sm:hidden" /> &amp; Workshops
        </h2>
        <p className="font-fredoka text-zinc-700 text-sm md:text-base italic max-w-xl mb-6">
          we are the music makers and we are the dreamers of dreams.
        </p>

        <button
          onClick={() => { sounds.playPop(); onBecomeSpeaker(); }}
          className="group px-7 py-2.5 rounded-full border-3 border-[#1A191B] bg-white text-[#1A191B] font-fredoka font-bold text-sm shadow-[4px_4px_0px_0px_#1A191B] hover:shadow-[1px_1px_0px_0px_#1A191B] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 flex items-center gap-2 cursor-pointer mb-10"
        >
          <Mic className="w-4 h-4 text-[#1A191B]" />
          <span>Become a speaker</span>
        </button>
      </div>

      {/* Interactive Laboratory Apparatus & Mascot Container */}
      <div className="relative max-w-6xl mx-auto my-4">
        
        {/* Steam Animation Overlay */}
        {steamActive && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 0.8, y: -40, scale: 1.4 }}
            exit={{ opacity: 0 }}
            className="absolute top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full bg-zinc-400/40 blur-md animate-ping"></span>
              <span className="w-12 h-12 rounded-full bg-zinc-400/30 blur-md animate-ping"></span>
            </div>
          </motion.div>
        )}

        {/* SVG Pipe Apparatus & Left Mascot Character */}
        <div className="relative w-full overflow-x-auto pb-4">
          
          <svg className="w-full min-w-[850px] h-[360px]" viewBox="0 0 1000 360" fill="none">
            
            {/* Left Blue-Hair Orange Mascot Character */}
            <g transform="translate(100, 100)">
              {/* Blue Hair */}
              <path d="M10 20 Q0 -10 30 -20 Q50 -40 70 -20 Q100 -10 90 20 Z" fill="#00D09C" stroke="#1A191B" strokeWidth="3" />
              {/* Orange Body */}
              <circle cx="50" cy="50" r="35" fill="#FF7640" stroke="#1A191B" strokeWidth="3.5" />
              {/* Eyes & Smile */}
              <circle cx="38" cy="45" r="4" fill="#1A191B" />
              <circle cx="62" cy="45" r="4" fill="#1A191B" />
              <path d="M40 60 Q50 68 60 60" stroke="#1A1A1D" strokeWidth="3" strokeLinecap="round" fill="none" />
              {/* Legs */}
              <path d="M35 83 L35 110 M65 83 L65 110" stroke="#1A191B" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Pipe Pressure Gauge Box with Rainbow Dial (Interactive) */}
            <g transform="translate(240, 130)" className="cursor-pointer" onClick={handleValveClick}>
              <rect x="0" y="0" width="70" height="55" rx="8" fill="#F5EBE6" stroke="#1A191B" strokeWidth="3.5" />
              {/* Rainbow Dial Arches */}
              <path d="M15 35 A 20 20 0 0 1 55 35" stroke="#7B61FF" strokeWidth="5" fill="none" />
              <path d="M20 35 A 15 15 0 0 1 50 35" stroke="#FFE600" strokeWidth="5" fill="none" />
              <path d="M25 35 A 10 10 0 0 1 45 35" stroke="#FF7640" strokeWidth="5" fill="none" />
              {/* Needle */}
              <line x1="35" y1="35" x2="35" y2="15" stroke="#1A191B" strokeWidth="3" strokeLinecap="round" />
              <circle cx="35" cy="35" r="4" fill="#1A191B" />
            </g>

            {/* White Connected Pipe Line with Black Borders */}
            {/* Horizontal pipe from mascot box rightward */}
            <path d="M 50 250 L 240 250 L 240 190 M 310 160 L 520 160 L 520 250 L 850 250 L 850 160" stroke="#1A191B" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 50 250 L 240 250 L 240 190 M 310 160 L 520 160 L 520 250 L 850 250 L 850 160" stroke="#F5EBE6" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Steam Pipe Vent */}
            <g transform="translate(520, 160)">
              <rect x="-12" y="-40" width="24" height="40" fill="#F5EBE6" stroke="#1A191B" strokeWidth="3" />
              {/* Steam cloud */}
              <path d="M-20 -40 Q-30 -60 -10 -70 Q0 -85 20 -70 Q30 -50 10 -40 Z" fill="#FFFFFF" stroke="#1A191B" strokeWidth="2.5" />
            </g>

            {/* Valve Handle (Clickable) */}
            <g transform="translate(680, 250)" className="cursor-pointer group" onClick={handleValveClick}>
              <circle cx="0" cy="0" r="18" fill="#FFE600" stroke="#1A191B" strokeWidth="3" className="group-hover:rotate-90 transition-transform duration-300" />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#1A191B" strokeWidth="3" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#1A1A1D" strokeWidth="3" />
            </g>

            {/* Funnel & Distillation Apparatus (Right) */}
            <g transform="translate(850, 120)">
              {/* Distillation Flask */}
              <ellipse cx="0" cy="60" rx="30" ry="40" fill="#F5EBE6" stroke="#1A191B" strokeWidth="3.5" />
              <rect x="-12" y="0" width="24" height="25" fill="#F5EBE6" stroke="#1A191B" strokeWidth="3" />
              {/* Liquid inside flask */}
              <path d="M-26 70 C-15 95 15 95 26 70 Z" fill="#3B82F6" opacity="0.85" />
              {/* Blue Drips */}
              <circle cx="0" cy="115" r="5" fill="#3B82F6" className="animate-ping" />
            </g>

            {/* Dripping line to conveyor belt */}
            <path d="M 850 200 L 850 280" stroke="#3B82F6" strokeWidth="4" strokeDasharray="6 6" className="animate-liquid" />

            {/* Conveyor Belt Platform */}
            <rect x="50" y="295" width="900" height="20" rx="10" fill="#E5E4E7" stroke="#1A191B" strokeWidth="3.5" />
            {/* Belt Wheels */}
            <circle cx="80" cy="305" r="7" fill="#1A191B" />
            <circle cx="920" cy="305" r="7" fill="#1A191B" />
            <circle cx="500" cy="305" r="7" fill="#1A191B" />
          </svg>

          {/* Conveyor Belt Glass Jars Overlay */}
          <div className="absolute bottom-3 space-x-4 flex justify-between items-end px-12 w-full max-w-5xl left-1/2 -translate-x-1/2">
            {jars.map((jar) => (
              <motion.div
                key={jar.id}
                whileHover={{ y: -8, scale: 1.05 }}
                onClick={() => { sounds.playPop(); setActiveJar(jar.id === activeJar ? null : jar.id); }}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Jar Tag */}
                <div 
                  className={`px-2.5 py-0.5 rounded text-[11px] font-fredoka font-bold ${jar.textColor} shadow border border-black/20 mb-1 transition-transform group-hover:scale-110`}
                  style={{ backgroundColor: jar.tagColor }}
                >
                  {jar.label}
                </div>

                {/* Glass Jar */}
                <div className="relative w-14 h-22 bg-white/90 border-3 border-[#1A191B] rounded-t-lg rounded-b-2xl overflow-hidden flex flex-col justify-end p-1 shadow-md">
                  {/* Lid */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-zinc-700 rounded-sm"></div>
                  
                  {/* Colored Liquid */}
                  <div 
                    className="w-full rounded-b-xl transition-all duration-300 relative overflow-hidden"
                    style={{ 
                      backgroundColor: jar.liquidColor, 
                      height: activeJar === jar.id ? '85%' : '65%',
                      opacity: 0.9
                    }}
                  >
                    <div className="w-full h-1 bg-white/50 animate-pulse"></div>
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
