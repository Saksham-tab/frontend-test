import React from 'react';

export function BrandEthosStrip() {
  const items = [
    { label: "THE CRAFT", text: "Rescued from the margins of history." },
    { label: "THE CUT", text: "Entirely, unapologetically Western." },
    { label: "THE STORY", text: "Stitched by name. Worn with purpose." }
  ];

  return (
    <section className="w-full bg-aged-parchment border-b border-thread-gold py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-12">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex-1 flex flex-col items-center text-center px-4">
              <span className="font-label text-[11px] text-archive-black tracking-[4px] uppercase mb-4">
                {item.label}
              </span>
              <p className="font-body text-[17px] text-archive-black max-w-[280px]">
                {item.text}
              </p>
            </div>
            {index < items.length - 1 && (
              <div className="hidden lg:block w-[1px] h-20 bg-thread-gold/30"></div>
            )}
            {index < items.length - 1 && (
              <div className="lg:hidden w-16 h-[1px] bg-thread-gold/30 my-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
