import React from 'react';

export function LimitedBatchDropBlock() {
  const thumbs = [
    "https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=200",
    "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=200",
    "https://images.unsplash.com/photo-1595065666634-4725aa7e8379?q=80&w=200",
    "https://images.unsplash.com/photo-1664076458686-3449062080ac?q=80&w=200"
  ];

  return (
    <section className="w-full bg-indigo-deep h-auto min-h-[400px] py-20 px-6 flex flex-col items-center justify-center text-center">
      <span className="font-label text-[11px] text-thread-gold tracking-[4px] uppercase mb-6">
        LIMITED RELEASE
      </span>
      
      <h2 className="font-heading italic text-[40px] lg:text-[60px] text-dust-ivory leading-tight max-w-[800px] mb-12">
        Only 40 Pieces. Stitched by Hand. Gone When Gone.
      </h2>
      
      <div className="flex space-x-4 mb-12">
        {thumbs.map((img, i) => (
          <div key={i} className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-archive-black">
            <img src={img} alt="Thumbnail" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
      
      <button className="bg-terracotta text-white font-ui text-[13px] tracking-[3px] uppercase px-10 py-4 hover:bg-archive-black hover:text-dust-ivory transition-colors duration-300">
        SHOP THE DROP →
      </button>
    </section>
  );
}
