import { useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface CustomerReview {
  id: string;
  authorName: string;
  rating: number;
  reviewText: string;
  media?: { type: "image" | "video"; url: string };
  isVerifiedPurchase: boolean;
  date: string;
}

const PHOTO_REVIEWS: CustomerReview[] = [
  {
    id: "1",
    authorName: "Sarah M.",
    rating: 5,
    reviewText: "The quality is exceptional. Wore this to a wedding and received endless compliments!",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400",
    },
    isVerifiedPurchase: true,
    date: "2026-05-20",
  },
  {
    id: "2",
    authorName: "Priya K.",
    rating: 5,
    reviewText: "Beautiful embroidery work. The attention to detail is incredible.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400",
    },
    isVerifiedPurchase: true,
    date: "2026-05-18",
  },
  {
    id: "3",
    authorName: "Ananya D.",
    rating: 5,
    reviewText: "Absolutely in love with my purchase. The fit is perfect and the fabric is so comfortable.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1594929382589-26d3fb3d9d65?auto=format&fit=crop&q=80&w=400",
    },
    isVerifiedPurchase: true,
    date: "2026-05-16",
  },
  {
    id: "4",
    authorName: "Riya S.",
    rating: 4.5,
    reviewText: "Great quality and authentic craftsmanship. Would definitely recommend.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1515914417332-8c212efd27e9?auto=format&fit=crop&q=80&w=400",
    },
    isVerifiedPurchase: true,
    date: "2026-05-14",
  },
];

export function CustomerReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollLeft(emblaApi.canScrollPrev());
    setCanScrollPrev(emblaApi.canScrollNext());
  };

  const scroll = (direction: "prev" | "next") => {
    if (direction === "prev") emblaApi?.scrollPrev();
    else emblaApi?.scrollNext();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} size={14} className="fill-thread-gold text-thread-gold" />
      );
    }
    if (hasHalf) {
      stars.push(
        <div key="half-star" className="relative">
          <Star size={14} className="text-ash-grey" />
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <Star size={14} className="fill-thread-gold text-thread-gold" />
          </div>
        </div>
      );
    }
    while (stars.length < 5) {
      stars.push(
        <Star key={`empty-${stars.length}`} size={14} className="text-ash-grey" />
      );
    }
    return stars;
  };

  return (
    <section className="py-20 lg:py-[120px] px-6 lg:px-[80px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-serif italic text-[40px] lg:text-[52px] text-dust-ivory mb-2">
              Loved by Our Community
            </h2>
            <p className="font-body text-raw-linen text-[15px]">
              Real photos from real customers
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 lg:gap-8">
              {PHOTO_REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="border border-indigo-deep p-0 h-full flex flex-col"
                  >
                    {/* Media */}
                    {review.media && (
                      <div className="w-full aspect-square bg-indigo-deep/20 overflow-hidden mb-4">
                        <img
                          src={review.media.url}
                          alt={review.authorName}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 flex flex-col p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {renderStars(review.rating)}
                      </div>

                      {/* Review Text */}
                      <p className="font-body text-dust-ivory text-[14px] mb-4 flex-1">
                        "{review.reviewText}"
                      </p>

                      {/* Author & Date */}
                      <div className="flex items-center justify-between pt-4 border-t border-indigo-deep/30">
                        <div>
                          <p className="font-condensed text-[12px] uppercase tracking-[1px] text-dust-ivory">
                            {review.authorName}
                          </p>
                          {review.isVerifiedPurchase && (
                            <p className="font-condensed text-[10px] uppercase tracking-[0.5px] text-thread-gold mt-1">
                              ✓ Verified Purchase
                            </p>
                          )}
                        </div>
                        <p className="font-body text-ash-grey text-[12px]">{review.date}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("prev")}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-10 h-10 items-center justify-center border border-thread-gold text-thread-gold hover:bg-thread-gold hover:text-archive-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll("next")}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-10 h-10 items-center justify-center border border-thread-gold text-thread-gold hover:bg-thread-gold hover:text-archive-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={!canScrollPrev}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
