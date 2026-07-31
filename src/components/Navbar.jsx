import React from 'react';
import { sounds } from '../utils/sound';

export default function Navbar({ onOpenTickets, onOpenJam, onOpenShop }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c1c1e]/95 backdrop-blur-md border-b border-zinc-800/60 px-4 md:px-10 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Nav Links */}
        <nav className="flex items-center gap-6 font-fredoka font-semibold text-sm md:text-base text-zinc-300">
          <a 
            href="#agenda" 
            onClick={() => sounds.playClick()}
            className="hover:text-[#FFE600] transition-colors"
          >
            Agenda
          </a>
          <a 
            href="#speakers" 
            onClick={() => sounds.playClick()}
            className="hover:text-[#FFE600] transition-colors"
          >
            Speakers
          </a>
          <button 
            onClick={() => { sounds.playPop(); onOpenShop(); }}
            className="hover:text-[#FFE600] transition-colors cursor-pointer"
          >
            Drip
          </button>
        </nav>

        {/* Center Vintage Creative South Logo */}
        <a 
          href="#" 
          onClick={() => sounds.playPop()}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            {/* Cloud badge background */}
            <div className="bg-[#FAF6EE] text-[#1c1c1e] px-4 py-1 rounded-2xl border-2 border-[#1c1c1e] shadow-md group-hover:scale-105 transition-transform flex flex-col items-center">
              <span className="font-shrikhand text-lg md:text-xl leading-none text-[#1c1c1e]">
                Creative
              </span>
              <span className="font-righteous text-[11px] md:text-xs text-[#FF8552] tracking-widest uppercase -mt-0.5 font-black">
                South
              </span>
            </div>
          </div>
        </a>

        {/* Right CTAs */}
        <div className="flex items-center gap-3 font-fredoka">
          <button
            onClick={() => { sounds.playPop(); onOpenTickets(); }}
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full border-2 border-[#FAF6EE] text-[#FAF6EE] hover:bg-[#FAF6EE] hover:text-[#1c1c1e] font-bold text-xs md:text-sm transition-all duration-200 cursor-pointer shadow-sm"
          >
            Register
          </button>

          <button
            onClick={() => { sounds.playFanfare(); onOpenJam(); }}
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#FAF6EE] text-[#1c1c1e] hover:bg-[#FFE600] font-bold text-xs md:text-sm transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer border-2 border-[#1c1c1e]"
          >
            <span>The Jam</span>
            {/* Discord icon inside */}
            <svg className="w-3.5 h-3.5 fill-current text-[#7B61FF]" viewBox="0 0 127.14 96.36">
              <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.68 1.76 1.36 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.91-72.14zM42.45 65.69c-6.32 0-11.52-5.81-11.52-12.92s5.1-12.92 11.52-12.92c6.47 0 11.62 5.86 11.52 12.92 0 7.11-5.05 12.92-11.52 12.92zm42.24 0c-6.32 0-11.52-5.81-11.52-12.92s5.1-12.92 11.52-12.92c6.47 0 11.62 5.86 11.52 12.92 0 7.11-5.05 12.92-11.52 12.92z"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
