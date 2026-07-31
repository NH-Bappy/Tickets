import React, { useState } from 'react';
import { Volume2, VolumeX, Disc, Globe, MessageSquare, Share2, Heart } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Footer() {
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    sounds.enabled = muted;
    setMuted(!muted);
    if (muted) sounds.playPop();
  };

  return (
    <footer className="w-full bg-[#121215] border-t border-zinc-800/80 py-6 px-4 md:px-12 text-zinc-400 font-fredoka text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="flex items-center gap-2">
          <span>© 2023 Creative South</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#FF7640]">
            Made with <Heart className="w-3.5 h-3.5 fill-current text-[#FF7640]" /> for Creators
          </span>
        </div>

        {/* Audio Toggle & Social Links */}
        <div className="flex items-center gap-6">
          
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#00D09C]" />}
            <span>{muted ? "Muted" : "Sound On"}</span>
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-zinc-400">
            {/* Discord */}
            <a href="#" className="hover:text-[#FFE600] transition-colors" title="Discord">
              <Disc className="w-4 h-4" />
            </a>
            {/* Twitter / X */}
            <a href="#" className="hover:text-[#FFE600] transition-colors" title="Twitter / X">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-[#FFE600] transition-colors" title="Instagram">
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="hover:text-[#FFE600] transition-colors" title="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
