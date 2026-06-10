import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'THE ARCHIVE', hasDropdown: true },
  { label: 'WOMEN' },
  { label: 'MEN' },
  { label: 'CRAFT STORIES' },
  { label: 'ATELIER' },
  { label: 'LIMITED', isLimited: true },
];

export function NavigationHeader() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-archive-black border-b border-indigo-deep h-[72px] flex items-center justify-between px-6 lg:px-20">
      {/* Left: Brand */}
      <div className="flex-1">
        <a href="/" className="inline-flex flex-col relative group">
          <span className="font-heading italic text-[22px] text-dust-ivory tracking-wide relative z-10">
            KĀLA
          </span>
          <span className="absolute bottom-1 left-0 w-full h-[1px] bg-dust-ivory/50"></span>
        </a>
      </div>

      {/* Center: Nav */}
      <nav className="hidden lg:flex flex-1 justify-center items-center space-x-10 h-full">
        {NAV_LINKS.map((link) => (
          <div
            key={link.label}
            className="h-full flex items-center relative group cursor-pointer"
            onMouseEnter={() => setHoveredLink(link.label)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span
              className={`font-ui text-[12px] uppercase tracking-[4px] transition-colors duration-300 ${
                link.isLimited ? 'text-terracotta' : 'text-raw-linen group-hover:text-thread-gold'
              }`}
            >
              {link.label}
            </span>
            {/* Hover underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredLink === link.label ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-thread-gold origin-left"
            />
            
            {/* Mega Menu Dropdown */}
            {link.hasDropdown && (
              <AnimatePresence>
                {hoveredLink === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[72px] left-1/2 -translate-x-1/2 w-screen max-w-[1440px] bg-archive-black border-b border-indigo-deep shadow-2xl h-[480px] flex flex-col z-50 cursor-default"
                  >
                    <div className="flex flex-1 px-20 pt-16 pb-12">
                      <div className="w-[30%] pr-12">
                        <h2 className="font-heading italic text-[48px] text-dust-ivory mb-6">Women</h2>
                        <p className="font-body text-[16px] text-ash-grey leading-relaxed">
                          Western silhouettes carrying the weight of a thousand stitches.
                        </p>
                      </div>
                      <div className="w-[40%] flex flex-col space-y-4">
                        {['Blazers & Jackets', 'Trench Coats', 'Dresses', 'Shirts & Blouses', 'Trousers', 'Denim'].map(sub => (
                          <a key={sub} href="#" className="font-ui text-[13px] text-raw-linen hover:text-thread-gold tracking-wider uppercase transition-colors">
                            {sub}
                          </a>
                        ))}
                      </div>
                      <div className="w-[30%] flex justify-end">
                        <img 
                          src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=600" 
                          alt="Editorial Preview"
                          className="w-[200px] h-[280px] object-cover bg-indigo-deep"
                        />
                      </div>
                    </div>
                    {/* Bottom strip filters */}
                    <div className="h-16 border-t border-indigo-deep flex items-center px-20 space-x-4">
                      {['ALL CRAFTS', 'PHULKARI', 'KANTHA', 'ZARDOZI', 'TODA', 'KASHIDA', 'BANJARA'].map((craft, i) => (
                        <button key={craft} className={`font-ui text-[11px] px-4 py-1.5 rounded-full border ${i===0 ? 'border-terracotta text-terracotta' : 'border-thread-gold/40 text-thread-gold hover:border-thread-gold'} tracking-wider uppercase transition-colors`}>
                          {craft}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </nav>

      {/* Right: Icons */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        <button className="text-dust-ivory hover:text-thread-gold transition-colors lg:hidden"><Menu size={20} strokeWidth={1.5} /></button>
        <button className="hidden lg:block text-dust-ivory hover:text-thread-gold transition-colors"><Search size={20} strokeWidth={1.5} /></button>
        <button className="hidden lg:block text-dust-ivory hover:text-thread-gold transition-colors"><Heart size={20} strokeWidth={1.5} /></button>
        <button className="text-dust-ivory hover:text-thread-gold transition-colors flex items-center space-x-1">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="font-ui text-[12px] tracking-wider relative -top-[2px]">[0]</span>
        </button>
      </div>
    </header>
  );
}
