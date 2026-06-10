import { useState } from "react";
import { ProductCard, ProductType } from "../shared/ProductCard";
import { motion } from "motion/react";

const FILTERS = ["ALL", "BLAZERS", "SHIRTS", "DRESSES", "COATS", "DENIM"];

const MOCK_PRODUCTS: ProductType[] = [
  {
    id: "cg1",
    name: "Handwoven Kantha Linen Blazer",
    craftType: "Kantha Running Stitch",
    price: 12500,
    originalPrice: 15200,
    images: [
      "https://images.unsplash.com/photo-1740710370552-a49b5b01f80a?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=600"
    ],
    badge: "NEW",
    rating: 4.8,
    reviewCount: 30,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A handwoven linen blazer displaying clean Kantha embroidery.",
    artisan: "Kavita Devi",
    region: "Bengal",
    category: "women",
    type: "Jacket"
  },
  {
    id: "cg2",
    name: "Midnight Archive Trench",
    craftType: "Phulkari Embroidery",
    price: 18000,
    images: [
      "https://images.unsplash.com/photo-1731589802956-b4693dae884b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1634133118553-1e6e18299886?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.6,
    reviewCount: 18,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "A gorgeous trench coat with premium Phulkari needlework.",
    artisan: "Gurpreet Kaur",
    region: "Punjab",
    category: "women",
    type: "Jacket"
  },
  {
    id: "cg3",
    name: "Structured Zardozi Shift Dress",
    craftType: "Zardozi Work",
    price: 15200,
    images: [
      "https://images.unsplash.com/photo-1623609163841-5e69d8c62cc7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.5,
    reviewCount: 22,
    sizes: [
      { label: "XS", inStock: false },
      { label: "S", inStock: false },
      { label: "M", inStock: false },
      { label: "L", inStock: false },
      { label: "XL", inStock: false }
    ],
    description: "Structured evening shift dress featuring detailed gold embroidery.",
    artisan: "Amina Begum",
    region: "Lucknow",
    category: "women",
    type: "Coord"
  },
  {
    id: "cg4",
    name: "Nomad Embroidered Denim Jacket",
    craftType: "Banjara Stitch",
    price: 9800,
    images: [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.3,
    reviewCount: 14,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "Everyday rugged denim jacket carrying Banjara stitches.",
    artisan: "Sita Bai",
    region: "Deccan",
    category: "women",
    type: "Jacket"
  }
];

export function CategoryGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  return (
    <section className="bg-archive-black py-20 lg:py-[120px] px-6 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[40px] lg:text-[52px] text-dust-ivory leading-tight max-w-lg"
          >
            A Silhouette For Every Stitch
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body italic text-[16px] text-ash-grey"
          >
            Filter by craft, occasion, or cut.
          </motion.span>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto pb-6 mb-8 scrollbar-hide space-x-3 -mx-6 px-6 lg:mx-0 lg:px-0">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2 font-condensed text-[12px] uppercase tracking-[2px] border transition-colors duration-300 ${
                activeFilter === filter 
                  ? "bg-terracotta border-terracotta text-archive-black font-semibold" 
                  : "bg-transparent border-raw-linen text-raw-linen hover:border-thread-gold hover:text-thread-gold"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {MOCK_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
