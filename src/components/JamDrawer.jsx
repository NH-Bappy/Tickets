import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Disc, Utensils, MapPin, Sparkles } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function JamDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
        
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-[#18181b] border-l-2 border-zinc-700 h-full p-6 md:p-8 shadow-2xl text-white overflow-y-auto flex flex-col justify-between"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#FFE600] text-zinc-950 flex items-center justify-center font-bold">
                  ★
                </span>
                <h3 className="font-shrikhand text-2xl text-[#FFE600]">
                  The Jam 2023
                </h3>
              </div>
              <button 
                onClick={() => { sounds.playClick(); onClose(); }}
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-fredoka text-sm text-zinc-300 leading-relaxed mb-6">
              The Jam is Creative South's signature evening social gathering! Unwind after daytime keynotes with live DJ sets, delicious local food trucks, retro arcade machines, and genuine Hug In Person connections.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-start gap-3">
                <Music className="w-5 h-5 text-[#E84393] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-fredoka font-bold text-sm text-white">Live Synthwave DJ Set</h4>
                  <p className="font-fredoka text-xs text-zinc-400">Featuring DJ Funk &amp; Retro Beats in the Courtyard</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-start gap-3">
                <Utensils className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-fredoka font-bold text-sm text-white">Southern BBQ &amp; Vegan Trucks</h4>
                  <p className="font-fredoka text-xs text-zinc-400">Craft beverages, tacos &amp; local Columbus delicacies</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00D09C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-fredoka font-bold text-sm text-white">Location &amp; Time</h4>
                  <p className="font-fredoka text-xs text-zinc-400">Friday April 31 @ 7:00 PM • Columbus Riverwalk Plaza</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 mt-8">
            <button
              onClick={() => { sounds.playFanfare(); onClose(); }}
              className="w-full py-3 bg-[#FFE600] text-zinc-950 font-fredoka font-bold text-sm rounded-full shadow-lg hover:bg-[#ffd500] transition-colors cursor-pointer text-center"
            >
              Included Free with All Passes!
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
