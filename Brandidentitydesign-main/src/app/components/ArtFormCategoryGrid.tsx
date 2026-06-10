import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

const PRODUCTS = [
  {
    id: 1,
    imageMain: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=600",
    imageHover: "https://images.unsplash.com/photo-1776164893360-2e1f7e3fb18f?q=80&w=600",
    label: "KANTHA · BENGAL",
    title: "Handwoven Kantha\nLinen Blazer",
    price: "₹12,500",
    artisan: "KAVITA DEVI",
    isNew: true
  },
  {
    id: 2,
    imageMain: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=600",
    imageHover: "https://images.unsplash.com/photo-1776164893360-2e1f7e3fb18f?q=80&w=600",
    label: "BANJARA · DECCAN",
    title: "Nomadic Stitch\nDenim Jacket",
    price: "₹14,200",
    artisan: "LAKSHMI NAIK"
  },
  {
    id: 3,
    imageMain: "https://images.unsplash.com/photo-1595065666634-4725aa7e8379?q=80&w=600",
    imageHover: "https://images.unsplash.com/photo-1776164893360-2e1f7e3fb18f?q=80&w=600",
    label: "ZARDOZI · LUCKNOW",
    title: "Midnight Zari\nTrench Coat",
    price: "₹28,000",
    artisan: "MOHAMMED ARIF",
    isSoldOut: true
  },
  {
    id: 4,
    imageMain: "https://images.unsplash.com/photo-1664076458686-3449062080ac?q=80&w=600",
    imageHover: "https://images.unsplash.com/photo-1776164893360-2e1f7e3fb18f?q=80&w=600",
    label: "PHULKARI · PUNJAB",
    title: "Bagh Embroidered\nShift Dress",
    price: "₹11,800",
    artisan: "GURPREET KAUR"
  }
];

const FILTERS = ['ALL', 'BLAZERS', 'SHIRTS', 'DRESSES', 'COATS', 'DENIM'];

export function ArtFormCategoryGrid() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  return (
    <section className="bg-archive-black py-20 px-6 lg:px-20 border-b border-indigo-deep">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-y-6">
        <h2 className="font-heading text-[40px] lg:text-[52px] text-dust-ivory">
          A Silhouette For Every Stitch
        </h2>
        <span className="font-body italic text-[16px] text-ash-grey">
          Filter by craft, occasion, or cut.
        </span>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 mb-16 pb-4">
        {FILTERS.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 font-ui text-[12px] uppercase tracking-[3px] px-6 py-2 border transition-colors duration-300 ${
              activeFilter === filter
                ? 'border-terracotta bg-terracotta text-dust-ivory'
                : 'border-raw-linen text-raw-linen hover:border-terracotta hover:text-terracotta'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
