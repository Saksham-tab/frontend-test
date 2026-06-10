import React from 'react';

const COLLECTIONS = [
  { id: 1, name: "The Monsoon Edit", image: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=600" },
  { id: 2, name: "Indigo & Ink", image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=600" },
  { id: 3, name: "Midnight Zardozi", image: "https://images.unsplash.com/photo-1595065666634-4725aa7e8379?q=80&w=600" },
  { id: 4, name: "Nomadic Textures", image: "https://images.unsplash.com/photo-1664076458686-3449062080ac?q=80&w=600" },
  { id: 5, name: "The Linen Archive", image: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=600" }
];

export function CollectionsCarousel() {
  return (
    <section className="bg-archive-black py-20 px-6 lg:pl-20 overflow-hidden group">
      <div className="flex justify-between items-end pr-6 lg:pr-20 mb-12">
        <h2 className="font-heading text-[32px] lg:text-[44px] text-dust-ivory">
          Collections from the Archive
        </h2>
        {/* Navigation arrows could go here, but let's just keep it simple with native scroll */}
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-6 pb-8 snap-x snap-mandatory">
        {COLLECTIONS.map((col) => (
          <div key={col.id} className="relative shrink-0 w-[300px] lg:w-[420px] aspect-[420/580] bg-indigo-deep snap-start group/card cursor-pointer">
            <img src={col.image} alt={col.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-archive-black/90 via-archive-black/20 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <h3 className="font-heading italic text-[24px] text-dust-ivory">{col.name}</h3>
              <span className="font-ui text-[12px] text-thread-gold tracking-[3px] uppercase opacity-0 -translate-x-4 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0">
                EXPLORE →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
