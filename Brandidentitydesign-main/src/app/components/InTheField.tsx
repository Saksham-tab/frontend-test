import React from 'react';

const STORIES = [
  {
    label: "PHULKARI ARTISAN · AMRITSAR",
    title: "Gurpreet Kaur has been threading Phulkari since she was nine.",
    body: "Her grandmother taught her the untaught geometry of the Bagh. Today, her hands move entirely by memory."
  },
  {
    label: "KANTHA WEAVER · BOLPUR",
    title: "For Malati, every stitch is a ledger of the changing seasons.",
    body: "The rhythmic running stitches of Kantha were born from necessity—layering old saris into warm quilts."
  },
  {
    label: "ZARDOZI MASTER · LUCKNOW",
    title: "Mohammed Arif still uses the wooden frame his father built in 1962.",
    body: "Gold and silver threads require not just skill, but patience. A single jacket lapel can take forty hours."
  }
];

export function InTheField() {
  return (
    <section className="bg-aged-parchment py-20 px-6 lg:px-20 border-b border-thread-gold/30">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px] bg-archive-black relative">
          <img 
            src="https://images.unsplash.com/photo-1773847099204-238d283b2845?q=80&w=800" 
            alt="Artisan weaving" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
          />
        </div>

        {/* Right: Articles */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between py-4">
          {STORIES.map((story, i) => (
            <React.Fragment key={i}>
              <article className="flex flex-col group">
                <span className="font-label text-[10px] text-archive-black tracking-[4px] uppercase mb-4">
                  {story.label}
                </span>
                <h3 className="font-heading text-[22px] text-archive-black leading-snug mb-3">
                  {story.title}
                </h3>
                <p className="font-body text-[14px] text-ash-grey leading-relaxed mb-4 max-w-[400px]">
                  {story.body}
                </p>
                <a href="#" className="font-ui text-[12px] text-terracotta tracking-[3px] uppercase hover:text-archive-black transition-colors">
                  READ THE STORY →
                </a>
              </article>
              {i < STORIES.length - 1 && (
                <div className="w-full h-[1px] bg-raw-linen my-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
