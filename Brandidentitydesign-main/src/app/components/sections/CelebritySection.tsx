import { motion } from "motion/react";
import { ProductCard, ProductType } from "../shared/ProductCard";

const MOCK_CELEBRITY_PRODUCTS: (ProductType & { celebrity: string })[] = [
  {
    id: "c1",
    name: "Oversized Wool Coat",
    craftType: "Phulkari Embroidery",
    price: 24000,
    originalPrice: 28000,
    images: [
      "https://images.unsplash.com/photo-1639470552436-27aa138a3902?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.8,
    reviewCount: 30,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "An oversized luxury wool coat detailed with Phulkari.",
    artisan: "Mehar Singh",
    region: "Punjab",
    category: "women",
    type: "Jacket",
    celebrity: "Priyanka Chopra"
  },
  {
    id: "c2",
    name: "Pleated Trousers",
    craftType: "Toda Embroidery",
    price: 11500,
    images: [
      "https://images.unsplash.com/photo-1623609163841-5e69d8c62cc7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.5,
    reviewCount: 15,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "Pleated structured trousers carrying Nilgiris Toda craft.",
    artisan: "Bellan",
    region: "Nilgiris",
    category: "women",
    type: "Coord",
    celebrity: "Mindy Kaling"
  },
  {
    id: "c3",
    name: "Classic Silk Shirt",
    craftType: "Kashida Embroidery",
    price: 16000,
    images: [
      "https://images.unsplash.com/photo-1740710370552-a49b5b01f80a?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.6,
    reviewCount: 19,
    sizes: [
      { label: "XS", inStock: true },
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "XL", inStock: true }
    ],
    description: "Pure silk shirt detailed with Kashmiri Kashida needlework.",
    artisan: "Fayaz Ahmad",
    region: "Kashmir",
    category: "men",
    type: "Shirt",
    celebrity: "Freida Pinto"
  },
  {
    id: "c4",
    name: "Midnight Velvet Blazer",
    craftType: "Zardozi Work",
    price: 28500,
    originalPrice: 32000,
    images: [
      "https://images.unsplash.com/photo-1731589802956-b4693dae884b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1634133118553-1e6e18299886?auto=format&fit=crop&q=80&w=600"
    ],
    rating: 4.9,
    reviewCount: 42,
    sizes: [
      { label: "XS", inStock: false },
      { label: "S", inStock: false },
      { label: "M", inStock: false },
      { label: "L", inStock: false },
      { label: "XL", inStock: false }
    ],
    description: "Velvet blazer featuring Lucknawi gold zardozi embroidery.",
    artisan: "Rizwan",
    region: "Lucknow",
    category: "women",
    type: "Jacket",
    celebrity: "Zendaya"
  }
];

export function CelebritySection() {
  return (
    <section className="bg-archive-black py-20 lg:py-[120px] px-6 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12 border-b border-indigo-deep pb-4">
          <span className="font-cinzel text-[16px] uppercase tracking-[4px] text-dust-ivory">
            WORN BY
          </span>
          <a href="#" className="font-condensed text-[12px] uppercase tracking-[2px] text-terracotta hover:text-thread-gold transition-colors">
            VIEW ALL →
          </a>
        </div>

        {/* Grid (Mocking Carousel with simple grid for now) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {MOCK_CELEBRITY_PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] snap-center flex flex-col"
            >
              <ProductCard product={product} />
              <div className="text-center mt-2">
                <span className="font-body italic text-[14px] text-ash-grey">
                  As seen on {product.celebrity}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
