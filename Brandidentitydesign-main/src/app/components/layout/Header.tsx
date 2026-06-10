import { useState } from "react";
import { Link } from "react-router";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../../context/AppContext";

const NAV_LINKS = [
  { label: "THE ARCHIVE", to: "/", hasMenu: true },
  { label: "WOMEN", to: "/women" },
  { label: "MEN", to: "/men" },
  { label: "STUDIO", to: "/studio" },
  { label: "LIMITED", to: "/women", highlight: true },
  { label: "JOURNAL", to: "/journal" },
];

export function Header() {
  const { cartCount } = useAppContext();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-archive-black border-b border-indigo-deep h-[72px] flex items-center px-6 lg:px-[80px]">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden mr-4 text-dust-ivory"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center justify-center relative w-max shrink-0">
          <span className="font-serif italic text-[22px] text-dust-ivory leading-none tracking-widest hover:text-thread-gold transition-colors">
            WEAVR
          </span>
          <div className="w-full h-[1px] bg-dust-ivory/50 mt-1" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-10 h-full">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.label}
              className="h-full flex flex-col justify-center relative group"
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link 
                to={link.to}
                className={`font-condensed text-[12px] uppercase tracking-[4px] transition-colors duration-300 ${
                  link.highlight ? "text-terracotta" : "text-raw-linen group-hover:text-thread-gold"
                }`}
              >
                {link.label}
              </Link>
              {/* Hover Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-thread-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </nav>

        {/* Desktop Mega Menu (Portal-like, absolute to screen) */}
        <AnimatePresence>
          {hoveredLink === "THE ARCHIVE" && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block absolute top-[72px] left-0 w-full h-[480px] bg-[#0E0D0B] border-b border-indigo-deep z-50 text-dust-ivory"
              onMouseEnter={() => setHoveredLink("THE ARCHIVE")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="flex h-[calc(100%-60px)] px-[80px] pt-12">
                {/* Left Col */}
                <div className="w-[30%] pr-12">
                  <h2 className="font-serif italic text-[48px] text-dust-ivory mb-4">Women</h2>
                  <p className="font-body text-raw-linen text-[15px] max-w-xs">
                    Western silhouettes carrying the weight of a thousand stitches.
                  </p>
                </div>
                {/* Middle Col */}
                <div className="w-[40%] flex flex-col space-y-4 pt-2">
                  {["Blazers & Jackets", "Trench Coats", "Dresses", "Shirts & Blouses", "Trousers", "Denim"].map(sub => (
                    <Link key={sub} to="/women" className="font-condensed text-[13px] text-dust-ivory tracking-[2px] uppercase hover:text-thread-gold transition-colors w-max">
                      {sub}
                    </Link>
                  ))}
                </div>
                {/* Right Col */}
                <div className="w-[30%] flex justify-end">
                  <div className="w-[200px] h-[280px] bg-indigo-deep relative">
                    <img 
                      src="https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?auto=format&fit=crop&q=80&w=400" 
                      alt="Editorial Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Bottom Strip */}
              <div className="h-[60px] border-t border-indigo-deep flex items-center px-[80px] space-x-6 overflow-x-auto">
                {["ALL CRAFTS", "PHULKARI", "KANTHA", "ZARDOZI", "TODA", "KASHIDA", "BANJARA"].map(craft => (
                  <Link key={craft} to="/women" className="px-4 py-1.5 border border-thread-gold text-thread-gold font-condensed text-[11px] uppercase tracking-[2px] hover:bg-thread-gold hover:text-archive-black transition-colors">
                    {craft}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icons Right */}
        <div className="flex items-center space-x-6 shrink-0 ml-auto lg:ml-0 text-dust-ivory">
          <Link to="/search" aria-label="Search" className="hover:text-thread-gold transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/liked" aria-label="Wishlist" className="hidden lg:block hover:text-thread-gold transition-colors">
            <Heart size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/profile" aria-label="Profile" className="hover:text-thread-gold transition-colors">
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" aria-label="Shopping Cart" className="flex items-center space-x-1 hover:text-thread-gold transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="font-condensed text-[13px] tracking-widest">[{cartCount}]</span>
          </Link>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0E0D0B] flex flex-col text-dust-ivory"
          >
            <div className="h-[72px] flex items-center justify-between px-6 border-b border-indigo-deep">
              <span className="font-serif italic text-[22px] text-dust-ivory border-b border-dust-ivory/50">
                WEAVR
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-dust-ivory" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 flex flex-col space-y-6 overflow-y-auto">
              {NAV_LINKS.map(link => (
                <div key={link.label} className="flex flex-col border-b border-indigo-deep/50 pb-4">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.to} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-condensed text-[16px] tracking-[4px] uppercase ${link.highlight ? "text-terracotta" : "text-dust-ivory"}`}
                    >
                      {link.label}
                    </Link>
                    {link.hasMenu && <span className="text-thread-gold text-xl">+</span>}
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-6 border-t border-indigo-deep/30">
                <Link to="/search" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 text-[14px] uppercase font-condensed tracking-wider">
                  <Search size={18} /> <span>Search</span>
                </Link>
                <Link to="/liked" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 text-[14px] uppercase font-condensed tracking-wider">
                  <Heart size={18} /> <span>Wishlist</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
