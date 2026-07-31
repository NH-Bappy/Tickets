import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function ShopModal({ isOpen, onClose }) {
  const [cartCount, setCartCount] = useState(0);

  const items = [
    { id: 1, name: 'Pure Imagination 70s Tee', price: '$35', tag: 'Best Seller', bg: 'bg-[#6C5CE7]' },
    { id: 2, name: 'Enamel Mascot Pin Set', price: '$18', tag: 'Limited', bg: 'bg-[#FF7640]' },
    { id: 3, name: 'Screenprinted Screen Poster', price: '$40', tag: 'Signed', bg: 'bg-[#E84393]' },
    { id: 4, name: 'Retro Holographic Sticker Pack', price: '$12', tag: 'Pack of 8', bg: 'bg-[#00D09C]' },
  ];

  const handleAddToCart = () => {
    sounds.playPop();
    setCartCount(prev => prev + 1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-[#1e1e24] border-2 border-zinc-700 rounded-3xl p-6 md:p-8 shadow-2xl text-white overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={() => { sounds.playClick(); onClose(); }}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFE600] flex items-center justify-center text-zinc-950 font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-shrikhand text-2xl text-[#F5EBE6]">
                  Official Merch Shop
                </h3>
                <p className="font-fredoka text-xs text-zinc-400">
                  Creative South 2026 Exclusive Items
                </p>
              </div>
            </div>

            {cartCount > 0 && (
              <span className="bg-[#FF7640] text-white font-fredoka font-bold text-xs px-3 py-1 rounded-full animate-bounce">
                {cartCount} Items Added!
              </span>
            )}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {items.map((item) => (
              <div 
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex flex-col justify-between hover:border-zinc-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-fredoka font-bold text-zinc-950 ${item.bg}`}>
                    {item.tag}
                  </span>
                  <span className="font-shrikhand text-lg text-[#FFE600]">
                    {item.price}
                  </span>
                </div>

                <h4 className="font-fredoka font-bold text-sm text-white mb-4">
                  {item.name}
                </h4>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-2 bg-zinc-800 hover:bg-[#FFE600] hover:text-zinc-950 text-white font-fredoka font-semibold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
            <span className="font-fredoka text-xs text-zinc-400">Pick up orders at the venue Merch Booth</span>
            <button
              onClick={() => { sounds.playPop(); onClose(); }}
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-fredoka text-xs font-semibold rounded-full cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
