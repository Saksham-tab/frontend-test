import React from "react";
import { Link } from "react-router";
import styles from "./CraftSpotlightSection.module.css";

export const CraftSpotlightSection: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* Section A — Phulkari Craft Spotlight */}
      <section className={`${styles.section} ${styles.sectionA}`}>
        {/* Text Area */}
        <div className={styles.contentPanel}>
          <span className={styles.label}>CRAFT SPOTLIGHT</span>
          <h2 className={styles.headline}>Phulkari — The Art of Flower Work</h2>
          <p className={styles.bodyText}>
            Originating in the 17th century Punjab, Phulkari was never woven for commercial sale. 
            It was stitched by women, for women, to mark the seasons of life. Today, fewer than 200 authentic practitioners remain.
          </p>
          <Link to="/craft-stories" className={styles.editorialBtn}>
            Discover The Craft &rarr;
          </Link>
        </div>

        {/* Image Area */}
        <div className={styles.imagePanel}>
          <img
            src="https://images.unsplash.com/photo-1579564523433-436738cbd43c?auto=format&fit=crop&q=80&w=1200"
            alt="Phulkari Craft Spotlight"
            loading="lazy"
          />
        </div>
      </section>

      {/* Section B — Craft Stories teaser */}
      <section className={`${styles.section} ${styles.sectionB}`}>
        {/* Image Area (First on desktop, so alternating layout) */}
        <div className={`${styles.imagePanel} ${styles.orderFirst}`}>
          <img
            src="https://images.unsplash.com/photo-1634133118553-1e6e18299886?auto=format&fit=crop&q=80&w=1200"
            alt="Craft Stories Teaser"
            loading="lazy"
          />
        </div>

        {/* Text Area */}
        <div className={styles.contentPanel}>
          <span className={styles.label}>CRAFT STORIES</span>
          <h2 className={styles.headline}>The hands behind every thread.</h2>
          <p className={styles.bodyText}>
            Every piece carries a name, a village, and generations of ancestral knowledge. 
            By bringing these stories into your wardrobe, we help preserve them.
          </p>
          <Link to="/craft-stories" className={styles.editorialBtn}>
            Read The Stories &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};
export default CraftSpotlightSection;
