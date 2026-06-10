import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function BrandVideoSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate video load time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-0 px-0 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
      >
        {/* Aspect Ratio Container */}
        <div className="w-full aspect-video bg-archive-black overflow-hidden">
          {isLoading ? (
            // Skeleton Loader
            <div className="w-full h-full bg-gradient-to-r from-indigo-deep via-archive-black to-indigo-deep animate-pulse" />
          ) : (
            // Video Container
            <div className="w-full h-full bg-black relative">
              {/* Fallback Image while video isn't available */}
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1600"
                alt="Brand showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Video Overlay for future implementation */}
              {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                loading="lazy"
              >
                <source src="your-video-url.mp4" type="video/mp4" />
              </video> */}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-archive-black/30" />

              {/* Center CTA (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 border-2 border-dust-ivory text-dust-ivory font-condensed text-[12px] uppercase tracking-[2px] hover:bg-dust-ivory hover:text-archive-black transition-all duration-300"
                  onClick={() => {
                    // Play video or navigate
                  }}
                >
                  Watch Our Story
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
