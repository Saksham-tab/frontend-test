import React from 'react';
import { motion } from 'motion/react';

export function ArtFormEducationTicker() {
  const content = "PHULKARI — PUNJAB — 17TH CENTURY · · · KANTHA — WEST BENGAL — 15TH CENTURY · · · ZARDOZI — MUGHAL COURT — 16TH CENTURY · · · TODA — NILGIRIS — ANCIENT · · · KASHIDA — KASHMIR — MEDIEVAL · · · BANJARA — DECCAN — NOMADIC · · · ";

  return (
    <div className="h-[60px] bg-terracotta overflow-hidden flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-white font-ui text-[14px] lg:text-[16px] tracking-[4px] uppercase mx-4 shrink-0">
            {content}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
