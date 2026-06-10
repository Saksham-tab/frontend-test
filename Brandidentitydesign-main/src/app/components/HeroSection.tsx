import React from 'react';
import { motion } from 'motion/react';

export function HeroSection() {
  const headlineWords = "Wear What Was Almost Forgotten.".split(" ");

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] bg-archive-black overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1595065666634-4725aa7e8379?q=80&w=2000" 
          alt="Model in structured western blazer with embroidery"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-archive-black via-archive-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-archive-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-20 pb-16 lg:pb-24 flex justify-between items-end">
        <div className="max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-label text-[11px] text-thread-gold tracking-[4px]">
              PHULKARI · PUNJAB · EST. 17TH CENTURY
            </span>
          </motion.div>
          
          <div className="h-4"></div>
          
          <h1 className="font-display italic text-[52px] lg:text-[96px] text-dust-ivory leading-[1.1] tracking-tight flex flex-wrap gap-x-4">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: [0.2, 0.65, 0.3, 0.9] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <div className="h-8"></div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="group relative border border-dust-ivory bg-transparent px-8 py-4 overflow-hidden"
          >
            <span className="relative z-10 font-ui text-[12px] text-dust-ivory group-hover:text-archive-black tracking-[3px] uppercase transition-colors duration-300">
              EXPLORE THE ARCHIVE →
            </span>
            <div className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </motion.button>
        </div>
      </div>

      {/* Right Edge Text */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="font-ui text-[11px] text-aged-parchment tracking-[4px] uppercase whitespace-nowrap">
          CHAPTER IV — THE REVIVAL
        </span>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        <div className="w-1.5 h-1.5 rounded-full bg-thread-gold"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-thread-gold/30"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-thread-gold/30"></div>
      </div>
    </section>
  );
}
