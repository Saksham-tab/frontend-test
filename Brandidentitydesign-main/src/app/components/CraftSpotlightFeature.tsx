import React from 'react';
import { motion } from 'motion/react';

interface CraftSpotlightProps {
  image: string;
  label: string;
  title: string;
  description: string;
  flipped?: boolean;
}

export function CraftSpotlightFeature({ image, label, title, description, flipped }: CraftSpotlightProps) {
  return (
    <section className={`flex flex-col ${flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full border-b border-thread-gold/30`}>
      {/* Image (60%) */}
      <div className="w-full lg:w-[60%] h-[50vh] lg:h-[80vh] relative">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Content (40%) */}
      <div className="w-full lg:w-[40%] bg-indigo-deep flex flex-col justify-center px-8 py-16 lg:p-20">
        <span className="font-label text-[11px] text-thread-gold tracking-[4px] uppercase mb-6 block">
          {label}
        </span>
        
        <h2 className="font-heading italic text-[40px] lg:text-[48px] text-dust-ivory leading-tight mb-8">
          {title}
        </h2>
        
        <div className="w-10 h-[1px] bg-thread-gold mb-8"></div>
        
        <p className="font-body text-[15px] text-raw-linen leading-relaxed mb-10 max-w-[400px]">
          {description}
        </p>
        
        <button className="group self-start relative border border-dust-ivory bg-transparent px-8 py-4 overflow-hidden">
          <span className="relative z-10 font-ui text-[12px] text-dust-ivory group-hover:text-archive-black tracking-[3px] uppercase transition-colors duration-300">
            DISCOVER THE CRAFT →
          </span>
          <div className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </button>
      </div>
    </section>
  );
}
