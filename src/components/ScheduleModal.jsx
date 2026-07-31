import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, User, Sparkles, Calendar } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function ScheduleModal({ slot, onClose }) {
  if (!slot) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#1e1e24] border-2 border-zinc-700 rounded-3xl p-6 md:p-8 shadow-2xl text-white overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={() => { sounds.playClick(); onClose(); }}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Time & Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#FFE600] text-zinc-950 font-fredoka font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {slot.time}
            </span>
            <span className="bg-zinc-800 text-zinc-300 font-fredoka text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF7640]" />
              {slot.location || "Main Auditorium"}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-shrikhand text-2xl md:text-3xl text-[#F5EBE6] mb-4 leading-tight">
            {slot.title}
          </h3>

          {/* Speaker Avatar & Bio Card */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 my-4">
            <img 
              src={slot.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"} 
              alt={slot.speaker}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#FFE600] shadow-md"
            />
            <div>
              <h4 className="font-fredoka font-bold text-base text-white">
                {slot.speaker}
              </h4>
              <p className="font-fredoka text-xs text-[#FF7640] font-medium">
                {slot.role}
              </p>
            </div>
          </div>

          <p className="font-fredoka text-xs md:text-sm text-zinc-300 leading-relaxed my-4">
            Join this high-energy session packed with actionable creative insights, live demonstrations, and inspiring takeaways from top industry leaders at Creative South 2026!
          </p>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
            <button
              onClick={() => { sounds.playPop(); onClose(); }}
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-fredoka font-semibold text-xs rounded-full transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
