import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const COLLECTIONS = [
  {
    id: 1,
    title: "The Indigo Drop",
    image: "https://images.unsplash.com/photo-1639470552436-27aa138a3902?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Raw Linen & Kantha",
    image: "https://images.unsplash.com/photo-1634133118553-1e6e18299886?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "The Winter Coats",
    image: "https://images.unsplash.com/photo-1731589802956-b4693dae884b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Zardozi Evening",
    image: "https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Nomadic Denim",
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=800"
  }
];

export function CollectionsCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420 + 24; // card width + gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="bg-archive-black py-20 lg:py-[120px] pl-6 lg:pl-[80px] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-end justify-between mb-12 pr-6 lg:pr-[80px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[36px] lg:text-[44px] text-dust-ivory"
        >
          Collections from the Archive
        </motion.h2>

        {/* Custom Nav Arrows */}
        <div className={`hidden lg:flex space-x-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={() => scroll('left')} className="p-3 border border-indigo-deep text-dust-ivory hover:border-thread-gold hover:text-thread-gold transition-colors">
            <ArrowLeft size={20} strokeWidth={1} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 border border-indigo-deep text-dust-ivory hover:border-thread-gold hover:text-thread-gold transition-colors">
            <ArrowRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pr-6 lg:pr-[80px] pb-8"
      >
        {COLLECTIONS.map((collection, i) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="relative min-w-[320px] lg:min-w-[420px] h-[480px] lg:h-[580px] snap-start flex-shrink-0 cursor-pointer overflow-hidden group/card"
          >
            <img 
              src={collection.image} 
              alt={collection.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black via-archive-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col">
              <h3 className="font-serif italic text-[28px] text-dust-ivory mb-2 group-hover/card:-translate-y-2 transition-transform duration-300">
                {collection.title}
              </h3>
              <div className="overflow-hidden">
                <span className="block font-condensed text-[12px] uppercase tracking-[3px] text-thread-gold translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                  EXPLORE →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
