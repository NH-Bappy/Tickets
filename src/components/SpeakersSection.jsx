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
    { id: 1, label: "Typography", liquidColor: "#7B61FF", tagColor: "#7B61FF" },
    { id: 2, label: "Branding", liquidColor: "#FF8552", tagColor: "#FF8552" },
    { id: 3, label: "Illustration", liquidColor: "#EE7DA5", tagColor: "#EE7DA5" },
    { id: 4, label: "3D Motion", liquidColor: "#FFE600", tagColor: "#FFE600" },
    { id: 5, label: "UI / Craft", liquidColor: "#3B82F6", tagColor: "#3B82F6" }
  ];

  return (
    <section id="speakers" className="relative w-full bg-[#F5F0E6] text-[#1c1c1e] pt-8 pb-20 px-4 overflow-hidden">
      
      {/* Connected Pipe System across Cream Canvas */}
      <div className="relative max-w-6xl mx-auto mb-12">
        
        {/* Steam overlay when valve is turned */}
        {steamActive && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: -40 }}
            className="absolute top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full bg-zinc-400/40 blur-md animate-ping"></span>
              <span className="w-12 h-12 rounded-full bg-zinc-400/30 blur-md animate-ping"></span>
            </div>
          </motion.div>
        )}

        {/* White Pipes & Distillation SVG */}
        <div className="relative w-full overflow-x-auto pb-4">
          <svg className="w-full min-w-[750px] h-[320px]" viewBox="0 0 1000 320" fill="none">
            
            {/* White Laboratory Pipes with Dark Stroke */}
            <path 
              d="M 20 100 L 450 100 L 450 200 L 820 200 L 820 100 L 950 100" 
              stroke="#1c1c1e" 
              strokeWidth="14" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
            <path 
              d="M 20 100 L 450 100 L 450 200 L 820 200 L 820 100 L 950 100" 
              stroke="#FAF6EE" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />

            {/* Glowing Liquid Flow Inside Pipe */}
            <path 
              d="M 20 100 L 450 100 L 450 200 L 820 200 L 820 100 L 950 100" 
              stroke="#FF8552" 
              strokeWidth="3" 
              className="animate-liquid" 
              fill="none" 
            />

            {/* Pipe Pressure Gauge */}
            <g transform="translate(450, 100)" className="cursor-pointer" onClick={handleValveClick}>
              <circle cx="0" cy="-30" r="20" fill="#FAF6EE" stroke="#1c1c1e" strokeWidth="3" />
              <circle cx="0" cy="-30" r="16" fill="#FAF6EE" />
              <line 
                x1="0" y1="-30" 
                x2={12 * Math.cos((gaugeAngle * Math.PI) / 180)} 
                y2={-30 + 12 * Math.sin((gaugeAngle * Math.PI) / 180)} 
                stroke="#FF8552" 
                strokeWidth="3" 
                strokeLinecap="round" 
              />
              <circle cx="0" cy="-30" r="3" fill="#1c1c1e" />
            </g>

            {/* Valve Wheel */}
            <g transform="translate(250, 100)" className="cursor-pointer group" onClick={handleValveClick}>
              <circle cx="0" cy="0" r="16" fill="#FFE600" stroke="#1c1c1e" strokeWidth="3" className="group-hover:rotate-45 transition-transform" />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#1c1c1e" strokeWidth="3" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#1c1c1e" strokeWidth="3" />
            </g>

            {/* Distillation Apparatus Vessel (Right Side) */}
            <g transform="translate(820, 120)">
              <path d="M-22 0 L22 0 L32 60 L-32 60 Z" fill="#FAF6EE" stroke="#1c1c1e" strokeWidth="3" />
              <rect x="-8" y="-25" width="16" height="25" fill="#EE7DA5" stroke="#1c1c1e" strokeWidth="2" />
              <circle cx="-8" cy="35" r="4" fill="#3B82F6" className="animate-bubble-1" />
              <circle cx="8" cy="45" r="4" fill="#FFE600" className="animate-bubble-2" />
            </g>

            {/* Dripping Liquid to Conveyor Belt */}
            <path d="M 820 180 L 820 240" stroke="#3B82F6" strokeWidth="4" strokeDasharray="6 6" className="animate-liquid" />

            {/* Conveyor Belt Platform */}
            <rect x="50" y="250" width="900" height="16" rx="8" fill="#1c1c1e" />
            <circle cx="70" cy="258" r="5" fill="#FAF6EE" />
            <circle cx="930" cy="258" r="5" fill="#FAF6EE" />
            <circle cx="500" cy="258" r="5" fill="#FAF6EE" />
          </svg>

          {/* Conveyor Belt Jars */}
          <div className="absolute bottom-1 space-x-4 flex justify-between items-end px-12 w-full max-w-5xl left-1/2 -translate-x-1/2">
            {jars.map((jar) => (
              <motion.div
                key={jar.id}
                whileHover={{ y: -8, scale: 1.05 }}
                onClick={() => { sounds.playPop(); setActiveJar(jar.id === activeJar ? null : jar.id); }}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Tag */}
                <div 
                  className="px-2 py-0.5 rounded text-[11px] font-fredoka font-bold text-white shadow mb-1 uppercase"
                  style={{ backgroundColor: jar.tagColor }}
                >
                  {jar.label}
                </div>

                {/* Glass Jar Body */}
                <div className="relative w-14 h-20 bg-white/90 border-3 border-[#1c1c1e] rounded-t-lg rounded-b-2xl overflow-hidden flex flex-col justify-end p-1 shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-zinc-700 rounded-sm"></div>
                  
                  {/* Liquid */}
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

      {/* Section Title & Subheading */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10 relative mt-4">
        <h2 className="font-shrikhand text-5xl sm:text-6xl md:text-7xl text-[#1c1c1e] tracking-tight mb-2">
          Speakers <br />
          &amp; Workshops
        </h2>
        <p className="font-fredoka text-zinc-700 text-sm md:text-base font-semibold max-w-md mb-6">
          We are the music makers and we are the dreamers of dreams.
        </p>

        <button
          onClick={() => { sounds.playPop(); onBecomeSpeaker(); }}
          className="px-7 py-3 rounded-full border-3 border-[#1c1c1e] bg-[#FAF6EE] text-[#1c1c1e] font-fredoka font-bold text-sm hover:bg-[#FFE600] transition-all shadow-[4px_4px_0px_0px_#1c1c1e] cursor-pointer"
        >
          Become a speaker
        </button>
      </div>

    </section>
  );
}
