import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const rainbowBands = [
    { color: '#8E7CC3', offset: 0 },   // Muted Purple
    { color: '#6BB2D5', offset: 7 },   // Muted Sky Blue
    { color: '#76B894', offset: 14 },  // Muted Sage Green
    { color: '#F2C94C', offset: 21 },  // Muted Vintage Yellow
    { color: '#E6914D', offset: 28 },  // Muted Soft Orange
    { color: '#DE5B5B', offset: 35 },  // Muted Coral Red
    { color: '#D9829C', offset: 42 }   // Muted Soft Pink
  ];

  const jars = [
    { id: 1, label: "Typography", liquidColor: "#8E7CC3", tagColor: "#8E7CC3" },
    { id: 2, label: "Branding", liquidColor: "#E6914D", tagColor: "#E6914D" },
    { id: 3, label: "Illustration", liquidColor: "#D9829C", tagColor: "#D9829C" },
    { id: 4, label: "3D Motion", liquidColor: "#F2C94C", tagColor: "#F2C94C" },
    { id: 5, label: "UI / Craft", liquidColor: "#6BB2D5", tagColor: "#6BB2D5" }
  ];

  return (
    <section id="speakers" className="relative w-full bg-[#F5F0E6] text-[#1e1e21] pt-0 pb-20 px-4 overflow-hidden select-none">
      
      {/* Connected Pipe Apparatus & Rainbow Stream System */}
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

        {/* SVG Connected Pipes and Exact Horn Funnel Connection */}
        <div className="relative w-full overflow-x-auto pb-4">
          <svg className="w-full min-w-[850px] h-[380px]" viewBox="0 0 1200 380" fill="none">
            
            {/* White Cloudpuff where Rainbow enters from the top dark section */}
            <g transform="translate(230, -10)">
              <path d="M10 25 Q30 5 50 18 Q70 5 90 20 Q110 10 115 35 Z" fill="#FAF6EE" stroke="#1e1e21" strokeWidth="2.5" />
              <circle cx="35" cy="30" r="14" fill="#FAF6EE" />
              <circle cx="65" cy="30" r="18" fill="#FAF6EE" />
              <circle cx="95" cy="32" r="12" fill="#FAF6EE" />
            </g>

            {/* CONTINUOUS 7-STRIP RAINBOW STREAM: 
                Enters from top (X = 300), passes through Cloudpuff, 
                curves horizontally right under top pipe loop, 
                and streams straight into the Left Mouth of the Horizontal Horn Funnel! */}
            <g className="z-10">
              {rainbowBands.map((band, i) => (
                <path
                  key={i}
                  d={`
                    M ${280 + band.offset} -30 
                    C ${295 + band.offset} 50, ${360 + band.offset} 100, ${520 + band.offset} 140 
                    C ${640 + band.offset} 170, ${760 + band.offset * 0.4} 190, ${820} ${195 + band.offset * 0.5}
                  `}
                  stroke={band.color}
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
              ))}
            </g>

            {/* HORIZONTAL GOLDEN HORN FUNNEL: Pointing Left with open mouth on the left side! */}
            <g transform="translate(820, 160)" className="z-20">
              {/* Golden Cone Mouth pointing Left */}
              <polygon points="0,0 80,35 80,65 0,100" fill="#F2C94C" stroke="#1e1e21" strokeWidth="3" />
              {/* Horn Rim Outline */}
              <line x1="0" y1="0" x2="0" y2="100" stroke="#1e1e21" strokeWidth="4" />
              {/* Back Ring connectors */}
              <rect x="80" y="38" width="12" height="24" rx="2" fill="#E6914D" stroke="#1e1e21" strokeWidth="2" />
              {/* Pipe connection leaving right side of Horn */}
              <path d="M 92 50 L 1100 50" stroke="#1e1e21" strokeWidth="12" strokeLinecap="round" />
              <path d="M 92 50 L 1100 50" stroke="#FAF6EE" strokeWidth="6" strokeLinecap="round" />
            </g>

            {/* WHITE LABORATORY PIPES matching user's reference snippet layout */}
            {/* Top Loop Pipe above Rainbow */}
            <path 
              d="M 850 -20 L 850 50 C 850 90, 920 90, 920 40 C 920 0, 800 -10, 780 40 L 780 120" 
              stroke="#1e1e21" 
              strokeWidth="12" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
            <path 
              d="M 850 -20 L 850 50 C 850 90, 920 90, 920 40 C 920 0, 800 -10, 780 40 L 780 120" 
              stroke="#FAF6EE" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />

            {/* Leaves on Top Right Pipe */}
            <path d="M 845 20 C 830 10, 825 25, 845 30 Z" fill="#76B894" stroke="#1e1e21" strokeWidth="2" />

            {/* Main Connecting Pipe under Rainbow */}
            <path 
              d="M 50 180 L 480 180 L 480 260 L 980 260 L 980 180" 
              stroke="#1e1e21" 
              strokeWidth="14" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
            <path 
              d="M 50 180 L 480 180 L 480 260 L 980 260 L 980 180" 
              stroke="#FAF6EE" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />

            {/* Glowing Liquid Stream Inside Main Pipe */}
            <path 
              d="M 50 180 L 480 180 L 480 260 L 980 260 L 980 180" 
              stroke="#E6914D" 
              strokeWidth="3" 
              className="animate-liquid" 
              fill="none" 
            />

            {/* Pressure Gauge */}
            <g transform="translate(480, 180)" className="cursor-pointer" onClick={handleValveClick}>
              <circle cx="0" cy="-30" r="20" fill="#FAF6EE" stroke="#1e1e21" strokeWidth="3" />
              <circle cx="0" cy="-30" r="16" fill="#FAF6EE" />
              <line 
                x1="0" y1="-30" 
                x2={12 * Math.cos((gaugeAngle * Math.PI) / 180)} 
                y2={-30 + 12 * Math.sin((gaugeAngle * Math.PI) / 180)} 
                stroke="#DE5B5B" 
                strokeWidth="3" 
                strokeLinecap="round" 
              />
              <circle cx="0" cy="-30" r="3" fill="#1e1e21" />
            </g>

            {/* Valve Wheel */}
            <g transform="translate(250, 180)" className="cursor-pointer group" onClick={handleValveClick}>
              <circle cx="0" cy="0" r="16" fill="#F2C94C" stroke="#1e1e21" strokeWidth="3" className="group-hover:rotate-45 transition-transform" />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#1e1e21" strokeWidth="3" />
              <line x1="0" y1="-14" x2="0" y2="14" stroke="#1e1e21" strokeWidth="3" />
              <circle cx="0" cy="24" r="3" fill="#D9829C" />
            </g>

            {/* Distillation Beaker Vessel */}
            <g transform="translate(980, 200)">
              <path d="M-22 0 L22 0 L32 60 L-32 60 Z" fill="#FAF6EE" stroke="#1e1e21" strokeWidth="3" />
              <rect x="-8" y="-25" width="16" height="25" fill="#D9829C" stroke="#1e1e21" strokeWidth="2" />
              <circle cx="-8" cy="35" r="4" fill="#6BB2D5" className="animate-bubble-1" />
              <circle cx="8" cy="45" r="4" fill="#F2C94C" className="animate-bubble-2" />
            </g>

            {/* Dripping Liquid to Conveyor Belt */}
            <path d="M 980 260 L 980 310" stroke="#6BB2D5" strokeWidth="4" strokeDasharray="6 6" className="animate-liquid" />

            {/* Conveyor Belt Platform */}
            <rect x="50" y="320" width="1080" height="16" rx="8" fill="#1e1e21" />
            <circle cx="70" cy="328" r="5" fill="#FAF6EE" />
            <circle cx="1110" cy="328" r="5" fill="#FAF6EE" />
            <circle cx="590" cy="328" r="5" fill="#FAF6EE" />
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
                <div 
                  className="px-2 py-0.5 rounded text-[11px] font-fredoka font-bold text-white shadow mb-1 uppercase"
                  style={{ backgroundColor: jar.tagColor }}
                >
                  {jar.label}
                </div>

                <div className="relative w-14 h-20 bg-white/90 border-3 border-[#1e1e21] rounded-t-lg rounded-b-2xl overflow-hidden flex flex-col justify-end p-1 shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-zinc-700 rounded-sm"></div>
                  
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
        <h2 className="font-shrikhand text-5xl sm:text-6xl md:text-7xl text-[#1e1e21] tracking-tight mb-2">
          Speakers <br />
          &amp; Workshops
        </h2>
        <p className="font-fredoka text-zinc-700 text-sm md:text-base font-semibold max-w-md mb-6">
          We are the music makers and we are the dreamers of dreams.
        </p>

        <button
          onClick={() => { sounds.playPop(); onBecomeSpeaker(); }}
          className="px-7 py-3 rounded-full border-3 border-[#1e1e21] bg-[#FAF6EE] text-[#1e1e21] font-fredoka font-bold text-sm hover:bg-[#F2C94C] transition-all shadow-[4px_4px_0px_0px_#1e1e21] cursor-pointer"
        >
          Become a speaker
        </button>
      </div>

    </section>
  );
}
