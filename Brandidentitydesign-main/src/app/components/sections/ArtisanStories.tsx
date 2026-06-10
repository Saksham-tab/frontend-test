import { motion } from "motion/react";

const STORIES = [
  {
    label: "PHULKARI ARTISAN · AMRITSAR",
    headline: "Gurpreet Kaur has been threading Phulkari since she was nine.",
    body: "In a quiet courtyard, generations of stitch-work are passed down not through books, but by watching hands move."
  },
  {
    label: "KANTHA ARTISAN · MURSHIDABAD",
    headline: "Running stitches that tell the story of the monsoon.",
    body: "Every ripple in the fabric maps a season. What was once utility is now preserved as a mastercraft."
  },
  {
    label: "ZARDOZI MASTER · LUCKNOW",
    headline: "Gold thread heavy enough to dress royalty.",
    body: "The Mughals wore it first. Today, it brings an unapologetic weight to the lapels of our wool blazers."
  }
];

export function ArtisanStories() {
  return (
    <section className="bg-aged-parchment py-20 lg:py-[120px] px-6 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[80px]">
        
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] h-[500px] lg:h-[700px] relative bg-archive-black"
        >
          <img 
            src="https://images.unsplash.com/photo-1640292343595-889db1c8262e?auto=format&fit=crop&q=80&w=1200" 
            alt="Artisan at work" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>

        {/* Right Articles */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <h2 className="font-serif text-[40px] text-archive-black mb-12 hidden">In The Field</h2>
          
          <div className="flex flex-col">
            {STORIES.map((story, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`py-8 flex flex-col ${i !== 0 ? "border-t border-raw-linen" : "pt-0"}`}
              >
                <span className="font-cinzel text-[10px] uppercase tracking-[4px] text-terracotta mb-4">
                  {story.label}
                </span>
                
                <h3 className="font-serif text-[22px] lg:text-[28px] text-archive-black leading-[1.3] mb-4">
                  {story.headline}
                </h3>
                
                <p className="font-body text-[15px] text-ash-grey leading-relaxed mb-4 max-w-lg">
                  {story.body}
                </p>
                
                <a href="#" className="font-condensed text-[12px] uppercase tracking-[2px] text-terracotta hover:text-thread-gold transition-colors w-max">
                  READ THE STORY →
                </a>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
