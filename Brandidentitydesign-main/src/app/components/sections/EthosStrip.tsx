import { motion } from "motion/react";

const ETHOS_ITEMS = [
  {
    label: "THE CRAFT",
    text: "Rescued from the margins of history."
  },
  {
    label: "THE CUT",
    text: "Entirely, unapologetically Western."
  },
  {
    label: "THE STORY",
    text: "Stitched by name. Worn with purpose."
  }
];

export function EthosStrip() {
  return (
    <section className="w-full bg-aged-parchment border-b border-thread-gold text-archive-black">
      <div className="max-w-[1440px] mx-auto min-h-[280px] grid grid-cols-1 md:grid-cols-3">
        {ETHOS_ITEMS.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`flex flex-col justify-center items-center text-center p-12 lg:p-[80px] ${
              index !== 0 ? "border-t md:border-t-0 md:border-l border-archive-black/10" : ""
            }`}
          >
            <h3 className="font-cinzel text-[11px] uppercase tracking-[4px] text-terracotta mb-6">
              {item.label}
            </h3>
            <p className="font-body text-[17px] leading-relaxed max-w-[280px]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
