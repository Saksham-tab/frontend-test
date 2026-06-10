import { Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const shopLinks = [
    { label: "Women", to: "/women" },
    { label: "Men", to: "/men" },
    { label: "Limited Drops", to: "/men" },
    { label: "Gift Cards", to: "#" },
    { label: "The Archive", to: "/" },
  ];

  const discoverLinks = [
    { label: "Craft Stories", to: "/craft-stories" },
    { label: "Our Artisans", to: "#" },
    { label: "Sustainability", to: "#" },
    { label: "Press", to: "#" },
  ];

  const supportLinks = [
    { label: "FAQ", to: "#" },
    { label: "Shipping & Returns", to: "#" },
    { label: "Contact", to: "#" },
    { label: "Book Styling Call", to: "#" },
  ];

  return (
    <footer className="bg-[#0E0D0B] border-t border-indigo-deep pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 text-dust-ivory">
          
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-serif italic text-[24px] hover:text-thread-gold transition-colors">
              WEAVR
            </Link>
            <p className="font-body italic text-[13px] leading-relaxed max-w-[200px] text-raw-linen">
              Rescuing forgotten Indian embroidery and bringing it to the modern Western wardrobe.
            </p>
          </div>

          {/* Shop */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-condensed text-[13px] tracking-[2px] uppercase text-thread-gold mb-2">Shop</h4>
            {shopLinks.map(link => (
              <Link key={link.label} to={link.to} className="font-body text-[15px] text-raw-linen hover:text-dust-ivory transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Discover */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-condensed text-[13px] tracking-[2px] uppercase text-thread-gold mb-2">Discover</h4>
            {discoverLinks.map(link => (
              <Link key={link.label} to={link.to} className="font-body text-[15px] text-raw-linen hover:text-dust-ivory transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-condensed text-[13px] tracking-[2px] uppercase text-thread-gold mb-2">Support</h4>
            {supportLinks.map(link => (
              <Link key={link.label} to={link.to} className="font-body text-[15px] text-raw-linen hover:text-dust-ivory transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-indigo-deep mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 text-ash-grey">
          <p className="font-body text-[13px]">
            © 2026 WEAVR. Every stitch tells a story.
          </p>
          
          <div className="font-cinzel text-[10px] tracking-[4px] text-thread-gold uppercase text-center">
            MADE IN INDIA · WORN BY THE WORLD
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-thread-gold transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-thread-gold transition-colors">
              <Youtube size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-thread-gold transition-colors">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
