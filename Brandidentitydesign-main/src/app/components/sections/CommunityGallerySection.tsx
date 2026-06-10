import { useState } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import Masonry from "react-responsive-masonry";

interface CommunityImage {
  id: string;
  url: string;
  authorName: string;
  likes: number;
  aspectRatio: number;
}

const COMMUNITY_IMAGES: CommunityImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1594929382589-26d3fb3d9d65?auto=format&fit=crop&q=80&w=500&h=600",
    authorName: "Ananya",
    likes: 234,
    aspectRatio: 0.8,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500&h=500",
    authorName: "Priya",
    likes: 189,
    aspectRatio: 1,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1515914417332-8c212efd27e9?auto=format&fit=crop&q=80&w=500&h=650",
    authorName: "Riya",
    likes: 342,
    aspectRatio: 0.77,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500&h=600",
    authorName: "Meera",
    likes: 156,
    aspectRatio: 0.83,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=500&h=500",
    authorName: "Sneha",
    likes: 267,
    aspectRatio: 1,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500&h=700",
    authorName: "Divya",
    likes: 298,
    aspectRatio: 0.71,
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1609765242543-0a5c3db74b93?auto=format&fit=crop&q=80&w=500&h=550",
    authorName: "Isha",
    likes: 201,
    aspectRatio: 0.91,
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1595603827273-4f1c1835e38b?auto=format&fit=crop&q=80&w=500&h=600",
    authorName: "Neha",
    likes: 178,
    aspectRatio: 0.83,
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1487574886715-7dd765a60038?auto=format&fit=crop&q=80&w=500&h=500",
    authorName: "Pooja",
    likes: 312,
    aspectRatio: 1,
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1552062407-c551eeda4bbb?auto=format&fit=crop&q=80&w=500&h=650",
    authorName: "Kavya",
    likes: 245,
    aspectRatio: 0.77,
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1545886657-c54cc452ce1d?auto=format&fit=crop&q=80&w=500&h=600",
    authorName: "Simran",
    likes: 289,
    aspectRatio: 0.83,
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1515957537790-b0eda7b93196?auto=format&fit=crop&q=80&w=500&h=500",
    authorName: "Anjali",
    likes: 203,
    aspectRatio: 1,
  },
];

export function CommunityGallerySection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-[120px] px-6 lg:px-[80px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif italic text-[40px] lg:text-[52px] text-dust-ivory mb-2">
            Styled By The Community
          </h2>
          <p className="font-body text-raw-linen text-[15px]">
            Real outfits from real people wearing WEAVR
          </p>
        </div>

        {/* Masonry Grid */}
        <Masonry
          columnsCount={1}
          columnsCountTablet={2}
          columnsCountDesktop={4}
          gapX={24}
          gapY={24}
        >
          {COMMUNITY_IMAGES.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ y: -4 }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative overflow-hidden bg-indigo-deep/10 border border-indigo-deep/30 group cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={`Outfit by ${image.authorName}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-t from-archive-black/80 via-archive-black/30 to-transparent flex flex-col items-end justify-between p-4"
              >
                {/* Like Button */}
                <button className="text-thread-gold hover:text-terracotta transition-colors">
                  <Heart size={24} className="hover:fill-current" strokeWidth={1.5} />
                </button>

                {/* Author Info */}
                <div className="text-left w-full">
                  <p className="font-condensed text-[12px] uppercase tracking-[1px] text-dust-ivory">
                    {image.authorName}
                  </p>
                  <p className="font-body text-[13px] text-raw-linen mt-1 flex items-center gap-1">
                    <Heart size={12} className="fill-thread-gold text-thread-gold" />
                    {image.likes}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Masonry>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="font-body text-raw-linen text-[15px] mb-6">
            Share your WEAVR look and get featured in our community gallery
          </p>
          <button className="px-8 py-3 border-2 border-thread-gold text-thread-gold font-condensed text-[13px] uppercase tracking-[2px] hover:bg-thread-gold hover:text-archive-black transition-all duration-300">
            Share Your Look
          </button>
        </div>
      </motion.div>
    </section>
  );
}
