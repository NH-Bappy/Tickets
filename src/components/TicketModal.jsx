import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Ticket, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/sound';

export default function TicketModal({ isOpen, onClose }) {
  const [selectedTier, setSelectedTier] = useState('ga');
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [purchased, setPurchased] = useState(false);

  const tiers = [
    {
      id: 'early',
      name: 'Early Bird Pass',
      price: 299,
      tag: 'Best Value',
      color: '#00D09C',
      features: ['Access to all 3 Days Keynotes', 'Official Merch Swag Bag', 'After Party Access', 'Coffee & Lunch Included']
    },
    {
      id: 'ga',
      name: 'General Admission',
      price: 349,
      tag: 'Popular',
      color: '#FF7640',
      features: ['Access to all 3 Days Keynotes', 'Workshop Access', 'Official Merch Swag Bag', 'After Party & Karaoke Access']
    },
    {
      id: 'vip',
      name: 'VIP Imagination Pass',
      price: 499,
      tag: 'All Access',
      color: '#6C5CE7',
      features: ['Priority Front Row Seating', 'Exclusive VIP Speaker Dinner', 'All Hands-on Workshops', 'Deluxe Vintage Leather Swag Kit']
    }
  ];

  const currentTierObj = tiers.find(t => t.id === selectedTier);
  const subtotal = currentTierObj ? currentTierObj.price * quantity : 0;
  const total = Math.max(0, subtotal - discount);

  const handleApplyPromo = () => {
    sounds.playPop();
    if (promoCode.toLowerCase() === 'pure' || promoCode.toLowerCase() === 'creativesouth') {
      setDiscount(50);
    } else {
      setDiscount(0);
      alert('Try promo code: PURE for $50 off!');
    }
  };

  const handleCheckout = () => {
    sounds.playFanfare();
    setPurchased(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleClose = () => {
    setPurchased(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-[#1e1e24] border-2 border-zinc-700 rounded-3xl p-6 md:p-8 shadow-2xl text-white overflow-hidden my-8"
        >
          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!purchased ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-[#FF7640] flex items-center justify-center text-zinc-900 font-bold">
                  <Ticket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-shrikhand text-2xl md:text-3xl text-[#F5EBE6]">
                    Select Your Tickets
                  </h3>
                  <p className="font-fredoka text-xs md:text-sm text-zinc-400">
                    Creative South 2026 — March 30 to April 1, Columbus GA
                  </p>
                </div>
              </div>

              {/* Ticket Tiers Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => { sounds.playClick(); setSelectedTier(tier.id); }}
                    className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      selectedTier === tier.id 
                        ? 'border-[#FFE600] bg-zinc-800/90 shadow-lg scale-[1.02]' 
                        : 'border-zinc-700/80 bg-zinc-900/60 hover:border-zinc-500'
                    }`}
                  >
                    {/* Badge Tag */}
                    <span 
                      className="self-start px-2 py-0.5 rounded text-[10px] font-fredoka font-bold text-zinc-950 uppercase mb-2"
                      style={{ backgroundColor: tier.color }}
                    >
                      {tier.tag}
                    </span>

                    <div>
                      <h4 className="font-fredoka font-bold text-base text-white">
                        {tier.name}
                      </h4>
                      <p className="font-shrikhand text-2xl text-[#FFE600] mt-1">
                        ${tier.price}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-zinc-700/60 space-y-1">
                      {tier.features.slice(0, 2).map((feat, i) => (
                        <p key={i} className="font-fredoka text-[11px] text-zinc-300 flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#00D09C] shrink-0" />
                          <span>{feat}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quantity & Promo Code */}
              <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                
                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <span className="font-fredoka text-sm text-zinc-300 font-medium">Quantity:</span>
                  <div className="flex items-center border border-zinc-700 bg-zinc-800 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => { sounds.playClick(); setQuantity(Math.max(1, quantity - 1)); }}
                      className="px-3 py-1 text-lg font-bold text-zinc-300 hover:bg-zinc-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 font-fredoka font-bold text-sm text-white">{quantity}</span>
                    <button 
                      onClick={() => { sounds.playClick(); setQuantity(quantity + 1); }}
                      className="px-3 py-1 text-lg font-bold text-zinc-300 hover:bg-zinc-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Promo Code (PURE)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 text-white font-fredoka text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-[#FFE600] w-full sm:w-36"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-3 py-2 bg-zinc-700 hover:bg-zinc-600 font-fredoka font-semibold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
                  >
                    Apply
                  </button>
                </div>

              </div>

              {/* Total & Checkout */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div>
                  <p className="font-fredoka text-xs text-zinc-400">Total Amount:</p>
                  <p className="font-shrikhand text-3xl text-[#FFE600]">
                    ${total}
                    {discount > 0 && <span className="text-xs font-fredoka text-[#00D09C] ml-2">(${discount} Off applied!)</span>}
                  </p>
                </div>

                <button
                  onClick={handleCheckout}
                  className="px-7 py-3 bg-[#FFE600] hover:bg-[#ffd500] text-zinc-950 font-fredoka font-bold text-base rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Checkout Now</span>
                </button>
              </div>
            </div>
          ) : (
            /* Confirmation State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00D09C]/20 border-2 border-[#00D09C] text-[#00D09C] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-shrikhand text-3xl text-[#F5EBE6]">
                Woohoo! You're Registered!
              </h3>
              <p className="font-fredoka text-sm text-zinc-300 max-w-md mx-auto">
                Your ticket order for <span className="text-[#FFE600] font-bold">{quantity}x {currentTierObj?.name}</span> is confirmed. Check your email inbox for your badge QR code!
              </p>
              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2.5 bg-[#FF7640] hover:bg-[#ff6224] text-white font-fredoka font-bold text-sm rounded-full transition-colors cursor-pointer"
              >
                Back to Conference
              </button>
            </div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
