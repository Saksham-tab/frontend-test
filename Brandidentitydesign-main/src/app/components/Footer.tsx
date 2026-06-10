import React from 'react';

export function Footer() {
  return (
    <footer className="bg-archive-black pt-20 pb-10 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="flex flex-col">
          <span className="font-heading italic text-[24px] text-dust-ivory mb-4">KĀLA</span>
          <p className="font-body italic text-[13px] text-ash-grey leading-relaxed max-w-[200px]">
            Rescuing dying Indian embroidery. Stitched onto Western silhouettes.
          </p>
        </div>

        {/* Shop */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-label text-[11px] text-thread-gold tracking-[4px] uppercase mb-2">Shop</h4>
          {['Women', 'Men', 'Limited Drops', 'Gift Cards', 'The Archive'].map(link => (
            <a key={link} href="#" className="font-ui text-[13px] text-dust-ivory uppercase tracking-wider hover:text-terracotta transition-colors">{link}</a>
          ))}
        </div>

        {/* Discover */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-label text-[11px] text-thread-gold tracking-[4px] uppercase mb-2">Discover</h4>
          {['Craft Stories', 'Our Artisans', 'Sustainability', 'Press'].map(link => (
            <a key={link} href="#" className="font-ui text-[13px] text-dust-ivory uppercase tracking-wider hover:text-terracotta transition-colors">{link}</a>
          ))}
        </div>

        {/* Support */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-label text-[11px] text-thread-gold tracking-[4px] uppercase mb-2">Support</h4>
          {['FAQ', 'Shipping & Returns', 'Contact', 'Book Styling Call'].map(link => (
            <a key={link} href="#" className="font-ui text-[13px] text-dust-ivory uppercase tracking-wider hover:text-terracotta transition-colors">{link}</a>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-indigo-deep mb-8"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <span className="font-body text-[12px] text-ash-grey">
          © 2026 KĀLA. Every stitch tells a story.
        </span>
        
        <span className="font-label text-[10px] text-thread-gold tracking-[4px] uppercase order-first lg:order-none">
          MADE IN INDIA · WORN BY THE WORLD
        </span>

        <div className="flex space-x-6">
          <a href="#" className="text-ash-grey hover:text-thread-gold transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="text-ash-grey hover:text-thread-gold transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </a>
          <a href="#" className="text-ash-grey hover:text-thread-gold transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
