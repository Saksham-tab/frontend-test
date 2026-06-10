import { motion } from "motion/react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1740710370552-a49b5b01f80a?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1623609163841-5e69d8c62cc7?auto=format&fit=crop&q=80&w=2000"
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const headlineWords = "Wear What Was Almost Forgotten.".split(" ");

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-archive-black">
      {/* Background Images */}
      {HERO_IMAGES.map((src, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={src} 
            alt={`Hero Editorial ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 lg:px-[80px] pb-[80px] lg:pb-[120px]">
        <div className="max-w-4xl flex flex-col items-center text-center lg:items-start lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-cinzel text-[11px] text-thread-gold tracking-[400px] uppercase tracking-widest mb-4"
          >
            PHULKARI · PUNJAB · EST. 17TH CENTURY
          </motion.div>

          <h1 className="font-serif-display italic font-light text-[52px] lg:text-[96px] text-dust-ivory leading-[1.1] tracking-[-0.02em] mb-8 flex flex-wrap justify-center lg:justify-start gap-x-4">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="group relative border border-dust-ivory px-8 py-4 overflow-hidden font-condensed text-[12px] uppercase tracking-[3px] text-dust-ivory hover:text-archive-black transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center">
              EXPLORE THE ARCHIVE <span className="ml-2">→</span>
            </span>
            <div className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
          </motion.button>

        </div>
      </div>

      {/* Right Edge Text */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-20 origin-center rotate-90 mix-blend-difference">
        <span className="font-body text-aged-parchment text-[11px] uppercase tracking-[4px] whitespace-nowrap">
          THE WINTER COLLECTION · 2026
        </span>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-thread-gold" : "w-4 bg-thread-gold/30 hover:bg-thread-gold/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
