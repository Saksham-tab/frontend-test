import { HeroSection } from "../components/sections/HeroSection";
import { EthosStrip } from "../components/sections/EthosStrip";
import { CategoryGrid } from "../components/sections/CategoryGrid";
import { BrandVideoSection } from "../components/sections/BrandVideoSection";
import { TickerStrip } from "../components/sections/TickerStrip";
import { ScarcityBlock } from "../components/sections/ScarcityBlock";
import { CelebritySection } from "../components/sections/CelebritySection";
import { CollectionsCarousel } from "../components/sections/CollectionsCarousel";
import { EmailCapture } from "../components/sections/EmailCapture";

export function Home() {
  return (
    <div className="flex flex-col w-full bg-archive-black">

      {/* 01 Hero */}
      <HeroSection />

      {/* 02 Brand Ethos */}
      <EthosStrip />

      {/* 03 Featured Collections */}
      <CategoryGrid />

      {/* 04 Brand Video */}
      <BrandVideoSection />

      {/* 05 Ticker */}
      <TickerStrip />

      {/* 06 Scarcity Block */}
      <ScarcityBlock />

      {/* 07 Celebrity Section */}
      <CelebritySection />

      {/* 08 Collections */}
      <CollectionsCarousel />

      {/* 11 Email Capture */}
      <EmailCapture />

    </div>
  );
}
