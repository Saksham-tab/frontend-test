import { motion } from "motion/react";

const THUMBNAILS = [
  "https://images.unsplash.com/photo-1740710370552-a49b5b01f80a?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1731589802956-b4693dae884b?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1623609163841-5e69d8c62cc7?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=200"
];

export function ScarcityBlock() {
  return (
    <section className="bg-indigo-deep w-full min-h-[400px] flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cinzel text-[11px] uppercase tracking-[4px] text-thread-gold mb-6 relative"
        >
          LIMITED RELEASE
          <motion.div 
            className="absolute -inset-2 rounded-full border border-terracotta/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif italic text-[40px] lg:text-[60px] text-dust-ivory leading-[1.1] mb-10 max-w-2xl"
        >
          Only 40 Pieces. Stitched by Hand. Gone When Gone.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex space-x-4 mb-10"
        >
          {THUMBNAILS.map((src, i) => (
            <div key={i} className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-archive-black relative overflow-hidden border border-indigo-deep/50 hover:border-thread-gold transition-colors">
              <img src={src} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-terracotta hover:bg-terracotta/90 text-archive-black font-condensed font-semibold text-[13px] uppercase tracking-[3px] px-10 py-4 transition-colors duration-300"
        >
          SHOP THE DROP →
        </motion.button>

      </div>
    </section>
  );
}
