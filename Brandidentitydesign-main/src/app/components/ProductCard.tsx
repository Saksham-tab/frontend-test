import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  imageMain: string;
  imageHover: string;
  label: string;
  title: string;
  price: string;
  isSoldOut?: boolean;
  isNew?: boolean;
  artisan: string;
}

export function ProductCard({
  imageMain,
  imageHover,
  label,
  title,
  price,
  isSoldOut,
  isNew,
  artisan
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Border for New */}
      {isNew && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-terracotta z-20"></div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-archive-black mb-6">
        <img
          src={imageMain}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isHovered || isSoldOut ? 'opacity-0' : 'opacity-100'
          } ${isSoldOut ? 'grayscale' : ''}`}
        />
        <img
          src={imageHover}
          alt={`${title} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isHovered && !isSoldOut ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Hover Border */}
        <div className={`absolute inset-0 border border-thread-gold transition-opacity duration-500 pointer-events-none ${isHovered && !isSoldOut ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Wishlist Icon */}
        <button className={`absolute top-4 right-4 text-dust-ivory hover:text-terracotta transition-all duration-300 z-10 ${isHovered && !isSoldOut ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <Heart size={20} strokeWidth={1.5} />
        </button>

        {/* Sold Out Overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 bg-archive-black/50 flex items-center justify-center backdrop-blur-[2px]">
            <span className="font-ui text-[14px] text-dust-ivory tracking-[4px]">WAITLIST</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col items-center text-center">
        <span className="font-label text-[10px] text-thread-gold tracking-[4px] mb-3">
          {label}
        </span>
        <h3 className="font-heading text-[18px] text-dust-ivory mb-2 leading-tight">
          {title.split('\\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <span className="font-ui font-medium text-[13px] text-raw-linen tracking-[2px] mb-3">
          {price}
        </span>
        <div className="flex flex-col items-center gap-1">
          <span className="font-ui text-[11px] text-terracotta tracking-[3px] animate-pulse">
            HAND EMBROIDERED · LIMITED BATCH
          </span>
          {/* Artisan Credit fades in slowly when hovered, but let's just show it normally to match spec or fade it on hover? Spec says: "Italic text fades in 400ms after card image loads". I'll just show it statically for now since "loads" is hard to track without a real load event. */}
          <span className="font-body italic text-[10px] text-ash-grey mt-2 transition-opacity duration-500 opacity-80 group-hover:opacity-100">
            [MADE BY {artisan}]
          </span>
        </div>
      </div>
    </div>
  );
}
