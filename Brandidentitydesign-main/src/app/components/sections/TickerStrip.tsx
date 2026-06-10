import { motion } from "motion/react";

export function TickerStrip() {
  const text = "PHULKARI — PUNJAB — 17TH CENTURY · · · KANTHA — WEST BENGAL — 15TH CENTURY · · · ZARDOZI — MUGHAL COURT — 16TH CENTURY · · · TODA — NILGIRIS — ANCIENT · · · KASHIDA — KASHMIR — MEDIEVAL · · · BANJARA — DECCAN — NOMADIC · · · ";
  
  return (
    <div className="h-[60px] bg-terracotta flex items-center overflow-hidden whitespace-nowrap z-10 relative">
      <motion.div
        className="flex space-x-4 text-dust-ivory font-condensed text-[16px] uppercase tracking-[4px] font-medium"
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        <span>{text}{text}{text}</span>
      </motion.div>
    </div>
  );
}
