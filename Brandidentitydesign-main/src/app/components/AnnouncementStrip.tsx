import React from "react";
import { motion } from "motion/react";

export function AnnouncementStrip() {
  return (
    <div className="h-[44px] bg-archive-black overflow-hidden flex items-center border-b border-thread-gold/30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-thread-gold font-ui text-[12px] tracking-[300px] uppercase mx-8 shrink-0"
          >
            FREE SHIPPING ON ORDERS OVER ₹8000 ·
            HAND-EMBROIDERED · ETHICALLY MADE · EVERY STITCH HAS
            A NAME
          </span>
        ))}
      </motion.div>
    </div>
  );
}