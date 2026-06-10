import { motion } from "motion/react";

interface SpotlightFeatureProps {
  imageSrc: string;
  craftLabel: string;
  headline: string;
  body: string;
  flipped?: boolean;
}

export function SpotlightFeature({ imageSrc, craftLabel, headline, body, flipped = false }: SpotlightFeatureProps) {
  return (
    <section className="w-full bg-indigo-deep flex flex-col lg:flex-row overflow-hidden">
      
      {/* Image (60%) */}
      <div className={`w-full lg:w-[60%] h-[50vh] lg:h-[800px] relative ${flipped ? "lg:order-2" : "lg:order-1"}`}>
        <img 
          src={imageSrc} 
          alt={craftLabel} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content (40%) */}
      <div className={`w-full lg:w-[40%] flex flex-col justify-center p-10 lg:p-[80px] ${flipped ? "lg:order-1" : "lg:order-2"}`}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-cinzel text-[11px] uppercase tracking-[4px] text-thread-gold mb-6 block">
            {craftLabel}
          </span>
          
          <h2 className="font-serif italic text-[40px] lg:text-[48px] text-dust-ivory leading-[1.1] mb-8">
            {headline}
          </h2>

          <div className="w-[40px] h-[1px] bg-thread-gold mb-8" />

          <p className="font-body text-[15px] text-raw-linen leading-relaxed mb-10 max-w-md">
            {body}
          </p>

          <button className="group relative border border-raw-linen px-8 py-4 overflow-hidden font-condensed text-[12px] uppercase tracking-[3px] text-dust-ivory hover:border-transparent transition-colors duration-300 inline-block">
            <span className="relative z-10 flex items-center group-hover:text-archive-black transition-colors duration-300">
              DISCOVER THE CRAFT <span className="ml-2">→</span>
            </span>
            <div className="absolute inset-0 bg-thread-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
          </button>
        </motion.div>

      </div>
      
    </section>
  );
}
