import React from "react";
import styles from "./CraftStories.module.css";

interface StoryType {
  id: string;
  name: string;
  region: string;
  era: string;
  description: string;
}

const STORIES: StoryType[] = [
  {
    id: "chikankari",
    name: "Chikankari — The Shadow Work of Lucknow",
    region: "Lucknow",
    era: "17th Century",
    description: "A delicate hand-embroidery process utilizing fine white threads on light fabrics. Layered flat and raised stitches form ethereal shadow-like patterns representing flora and Mughal geometry.",
  },
  {
    id: "kantha",
    name: "Kantha — The Patched Soul of Bengal",
    region: "Bengal",
    era: "Ancient Era",
    description: "Born from sustainability, Kantha recycling quilted vintage sarees into layered apparel. The rhythmic running stitch creates waves, monsoons, and tales of Bengal landscapes.",
  },
  {
    id: "bandhani",
    name: "Bandhani — The Tied Dots of Rajasthan",
    region: "Rajasthan",
    era: "6th Century BC",
    description: "An ancient tie-dye technique where textiles are tightly bound with thread at thousands of microscopic points before dyeing, producing detailed patterns of dots and stars.",
  },
  {
    id: "sozni",
    name: "Kashmiri Sozni — The Fine Line",
    region: "Kashmir",
    era: "15th Century",
    description: "A highly sophisticated needlework style, using single-ply threads sewn with microscopic precision. The designs feature elaborate paisleys and floral vines native to Srinagar.",
  },
];

export const Journal: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.title}>The Hands Behind Every Thread</h1>
        <p className={styles.subtitle}>
          Every garment is a canvas carrying a name, a village, and a generation of ancestral knowledge. Explore the art forms of WEAVR.
        </p>
      </section>

      {/* Featured Story (Phulkari) */}
      <div className={styles.featuredCard}>
        <div className={styles.featuredImage}>
          <img
            src="https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=1200"
            alt="Phulkari hand embroidery detail"
            loading="lazy"
          />
        </div>
        <div className={styles.featuredContent}>
          <div className={styles.metaTags}>
            <span className={styles.tag}>Punjab</span>
            <span className={styles.tag}>17th Century</span>
          </div>
          <h2 className={styles.featuredHeadline}>Phulkari — The Art of Flower Work</h2>
          <p className={styles.featuredExcerpt}>
            Originating in Punjab, Phulkari was never woven for commercial sale. It was stitched by women, for women, to mark the seasons of life. Today, fewer than 200 authentic practitioners remain. Every geometrical stitch is done from the reverse side of coarse cotton cloth without drafting any template.
          </p>
          <a href="#" className={styles.readLink} onClick={(e) => e.preventDefault()}>
            Read Story &rarr;
          </a>
        </div>
      </div>

      {/* Story Grid */}
      <div className={styles.grid}>
        {STORIES.map((story) => (
          <div key={story.id} className={styles.storyCard}>
            <div>
              <div className={styles.cardMeta}>
                <span className={styles.smallTag}>{story.region}</span>
                <span className="text-zinc-600 font-condensed text-[9px] uppercase tracking-wider">•</span>
                <span className={styles.smallTag}>{story.era}</span>
              </div>
              <h3 className={styles.cardTitle}>{story.name}</h3>
              <p className={styles.cardExcerpt}>{story.description}</p>
            </div>
            <a href="#" className={styles.readLink} onClick={(e) => e.preventDefault()}>
              Read Story &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Journal;
