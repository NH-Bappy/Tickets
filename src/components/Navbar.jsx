import React from 'react';
import { Sparkles, ShoppingBag, Calendar, Users, Ticket, Disc } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Navbar({ onOpenTickets, onOpenJam, onOpenShop }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#18181b]/90 backdrop-blur-md border-b border-zinc-800/80 px-4 md:px-12 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Nav Links */}
        <nav className="flex items-center gap-4 md:gap-8 font-fredoka font-medium text-sm md:text-base text-zinc-300">
          <a 
            href="#agenda" 
            onClick={() => sounds.playClick()}
            className="hover:text-[#FFE600] transition-colors flex items-center gap-1.5"
          >
            Agenda
          </a>
          <a 
            href="#speakers" 
            onClick={() => sounds.playClick()}
            className="hover:text-[#FFE600] transition-colors flex items-center gap-1.5"
          >
            Speakers
          </a>
          <button 
            onClick={() => { sounds.playPop(); onOpenShop(); }}
            className="hover:text-[#FFE600] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            Shop
          </button>
        </nav>

        {/* Center Logo */}
        <a 
          href="#" 
          onClick={() => sounds.playPop()}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            {/* Retro Starburst backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF7640] via-[#FFE600] to-[#6C5CE7] rounded-full blur-sm opacity-40 group-hover:opacity-80 transition duration-300"></div>
            
            <div className="relative flex flex-col items-center">
              <span className="font-shrikhand text-xl md:text-2xl text-[#F5EBE6] tracking-wide group-hover:scale-105 transition-transform">
                Creative
              </span>
              <span className="font-righteous text-xs md:text-sm text-[#FF7640] tracking-widest uppercase -mt-1 group-hover:text-[#FFE600] transition-colors">
                South
              </span>
            </div>
          </div>
        </a>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2 md:gap-4 font-fredoka">
          <button
            onClick={() => { sounds.playPop(); onOpenTickets(); }}
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full border-2 border-[#F5EBE6] text-[#F5EBE6] hover:bg-[#F5EBE6] hover:text-[#18181b] font-semibold text-xs md:text-sm transition-all duration-200 shadow-sm cursor-pointer"
          >
            Register
          </button>

          <button
            onClick={() => { sounds.playFanfare(); onOpenJam(); }}
            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#FFE600] text-[#18181b] hover:bg-[#ffd500] font-bold text-xs md:text-sm transition-all duration-200 shadow-md flex items-center gap-1.5 hover:scale-105 cursor-pointer"
          >
            <span>The Jam</span>
            <span className="bg-[#18181b] text-[#FFE600] text-[10px] px-1.5 py-0.5 rounded-full font-sans">
              ★
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}
