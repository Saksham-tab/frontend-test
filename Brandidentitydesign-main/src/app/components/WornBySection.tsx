import React from 'react';

const WORN_BY_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=400",
    name: "Midnight Kantha Blazer",
    celeb: "As seen on Florence Pugh"
  },
  {
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=400",
    name: "Nomadic Denim",
    celeb: "As seen on Zoë Kravitz"
  },
  {
    image: "https://images.unsplash.com/photo-1595065666634-4725aa7e8379?q=80&w=400",
    name: "Zari Trench",
    celeb: "As seen on Zendaya"
  },
  {
    image: "https://images.unsplash.com/photo-1664076458686-3449062080ac?q=80&w=400",
    name: "Bagh Shift Dress",
    celeb: "As seen on Deepika Padukone"
  }
];

export function WornBySection() {
  return (
    <section className="bg-archive-black py-20 px-6 lg:px-20 border-b border-indigo-deep">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-label text-[16px] text-dust-ivory tracking-[4px] uppercase">
          WORN BY
        </h2>
        <a href="#" className="font-ui text-[12px] text-thread-gold tracking-[3px] uppercase hover:text-dust-ivory transition-colors">
          VIEW ALL →
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {WORN_BY_ITEMS.map((item, i) => (
          <div key={i} className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[3/4] bg-indigo-deep mb-4 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="font-heading text-[18px] text-dust-ivory mb-1">{item.name}</h3>
            <span className="font-body italic text-[13px] text-ash-grey group-hover:text-thread-gold transition-colors">
              {item.celeb}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
