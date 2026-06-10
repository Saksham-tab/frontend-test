import { motion } from "motion/react";

export function AnnouncementStrip() {
  const text = "FREE SHIPPING ON ORDERS OVER ₹8000 · HAND-EMBROIDERED · ETHICALLY MADE · EVERY STITCH HAS A NAME · ";
  
  return (
    <div className="h-[44px] bg-archive-black border-b border-thread-gold/30 flex items-center overflow-hidden whitespace-nowrap z-50 relative">
      <motion.div
        className="flex space-x-4 text-thread-gold font-condensed tracking-[2px] uppercase text-[11px] font-medium"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        <span>{text}{text}{text}{text}</span>
      </motion.div>
    </div>
  );
}
