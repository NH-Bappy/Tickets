import React from 'react';
import { Cloud } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Navbar({ onOpenTickets, onOpenJam, onOpenShop }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#18181b]/95 backdrop-blur-md border-b border-zinc-800/60 px-4 md:px-12 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Nav Links */}
        <nav className="flex items-center gap-4 md:gap-8 font-fredoka font-medium text-xs md:text-sm text-zinc-300">
          <a 
            href="#agenda" 
            onClick={() => sounds.playClick()}
            className="hover:text-white transition-colors"
          >
            Agenda
          </a>
          <a 
            href="#speakers" 
            onClick={() => sounds.playClick()}
            className="hover:text-white transition-colors"
          >
            Speakers
          </a>
          <button 
            onClick={() => { sounds.playPop(); onOpenShop(); }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Drip
          </button>
        </nav>

        {/* Center Logo */}
        <a 
          href="#" 
          onClick={() => sounds.playPop()}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="relative flex flex-col items-center">
            <span className="font-shrikhand text-2xl md:text-3xl text-[#F5EBE6] tracking-wide group-hover:scale-105 transition-transform drop-shadow">
              Creative
            </span>
            <span className="font-shrikhand text-lg md:text-xl text-[#F5EBE6] tracking-wider -mt-2 group-hover:text-[#FFE600] transition-colors">
              South
            </span>
          </div>
        </a>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2 md:gap-3 font-fredoka">
          <button
            onClick={() => { sounds.playPop(); onOpenTickets(); }}
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#18181b] font-semibold text-xs md:text-sm transition-all duration-200 cursor-pointer"
          >
            Register
          </button>

          <button
            onClick={() => { sounds.playFanfare(); onOpenJam(); }}
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#F5EBE6] text-[#18181b] hover:bg-white font-bold text-xs md:text-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>The Jam</span>
            <Cloud className="w-3.5 h-3.5 fill-current text-[#18181b]" />
          </button>
        </div>

      </div>
    </header>
  );
}
