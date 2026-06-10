import React, { useState, useMemo } from "react";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/shared/ProductCard";
import { SortDropdown, SortOption } from "../components/SortDropdown";
import styles from "./Women.module.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Kurtas", value: "Kurta" },
  { label: "Jackets", value: "Jacket" },
  { label: "Dupattas", value: "Dupatta" },
  { label: "Coords", value: "Coord" },
  { label: "New Arrivals", value: "new-arrivals" },
];

type ViewMode = "grid" | "grid2" | "list";

// SVG Icons for the view toggle
const GridThreeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="1" y="1" width="4" height="4" rx="0.5" />
    <rect x="6" y="1" width="4" height="4" rx="0.5" />
    <rect x="11" y="1" width="4" height="4" rx="0.5" />
    <rect x="1" y="6" width="4" height="4" rx="0.5" />
    <rect x="6" y="6" width="4" height="4" rx="0.5" />
    <rect x="11" y="6" width="4" height="4" rx="0.5" />
    <rect x="1" y="11" width="4" height="4" rx="0.5" />
    <rect x="6" y="11" width="4" height="4" rx="0.5" />
    <rect x="11" y="11" width="4" height="4" rx="0.5" />
  </svg>
);

const GridTwoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="1" y="1" width="6.5" height="6.5" rx="0.5" />
    <rect x="8.5" y="1" width="6.5" height="6.5" rx="0.5" />
    <rect x="1" y="8.5" width="6.5" height="6.5" rx="0.5" />
    <rect x="8.5" y="8.5" width="6.5" height="6.5" rx="0.5" />
  </svg>
);

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
    <line x1="1" y1="3" x2="15" y2="3" />
    <line x1="1" y1="7" x2="15" y2="7" />
    <line x1="1" y1="11" x2="15" y2="11" />
  </svg>
);

export const Women: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortOption, setSortOption] = useState<SortOption>("featured");

  const womenProducts = PRODUCTS.filter((p) => p.category === "women");

  const filteredProducts = womenProducts.filter((product) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "new-arrivals") return product.badge === "NEW";
    return product.type === activeFilter;
  });

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortOption) {
      case "newest":
        return sorted.reverse();
      case "best-selling":
        return sorted.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
      case "popular":
        return sorted.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
      case "highest-rated":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "price-low-to-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-to-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "featured":
      default:
        return sorted;
    }
  }, [filteredProducts, sortOption]);

  const getGridClass = () => {
    if (viewMode === "list") return styles.listView;
    if (viewMode === "grid2") return styles.gridTwo;
    return styles.grid;
  };

  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Adorned in Ancestry</h1>
        <p className={styles.subtitle}>
          Contemporary Western silhouettes detailed with hand-embroidered Indian art forms,
          carrying generations of artisanal lineage.
        </p>
      </section>

      {/* Controls Row — Filters + Sorting + View Toggle */}
      <div className={styles.controlsRow}>
        {/* Filter Chips */}
        <div className={styles.filterBar}>
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`${styles.filterBtn} ${
                activeFilter === filter.value ? styles.filterBtnActive : ""
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Sorting + View Toggle */}
        <div className="flex items-center gap-4">
          <SortDropdown value={sortOption} onChange={setSortOption} />

          {/* View Toggle */}
          <div className={styles.viewToggle}>
            <span className={styles.viewLabel}>View</span>
            <button
              title="3-Column Grid"
              className={`${styles.viewBtn} ${viewMode === "grid" ? styles.viewBtnActive : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="3-column grid view"
            >
              <GridThreeIcon />
            </button>
            <button
              title="2-Column Grid"
              className={`${styles.viewBtn} ${viewMode === "grid2" ? styles.viewBtnActive : ""}`}
              onClick={() => setViewMode("grid2")}
              aria-label="2-column grid view"
            >
              <GridTwoIcon />
            </button>
            <button
              title="List View"
              className={`${styles.viewBtn} ${viewMode === "list" ? styles.viewBtnActive : ""}`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className={styles.resultsCount}>
        {sortedProducts.length} {sortedProducts.length === 1 ? "piece" : "pieces"}
      </p>

      {/* Product Display */}
      {sortedProducts.length > 0 ? (
        <div className={getGridClass()}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>No products found in this category.</div>
      )}
    </div>
  );
};

export default Women;
