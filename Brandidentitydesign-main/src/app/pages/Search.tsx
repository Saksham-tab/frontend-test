import React, { useState, useEffect, useRef } from "react";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/shared/ProductCard";
import styles from "./Search.module.css";

export const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  // Filters state
  const [category, setCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [craftType, setCraftType] = useState<string>("all");
  const [minRating, setMinRating] = useState<string>("all");

  // Auto-focus input on arrival
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Debounce search query (300ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Apply filters and search query
  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Text Search matching name, craftType, or description
    if (debouncedQuery.trim() !== "") {
      const query = debouncedQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(query);
      const matchCraft = product.craftType.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      
      if (!matchName && !matchCraft && !matchDesc) {
        return false;
      }
    }

    // 2. Category Filter
    if (category !== "all" && product.category !== category) {
      return false;
    }

    // 3. Price Filter
    if (priceRange !== "all") {
      if (priceRange === "under-3000" && product.price >= 3000) return false;
      if (priceRange === "3000-6000" && (product.price < 3000 || product.price > 6000)) return false;
      if (priceRange === "6000-10000" && (product.price < 6000 || product.price > 10000)) return false;
      if (priceRange === "over-10000" && product.price <= 10000) return false;
    }

    // 4. Craft Type Filter
    if (craftType !== "all") {
      const typeLower = product.craftType.toLowerCase();
      if (craftType === "phulkari" && !typeLower.includes("phulkari")) return false;
      if (craftType === "kantha" && !typeLower.includes("kantha")) return false;
      if (craftType === "chikankari" && !typeLower.includes("chikankari")) return false;
      if (craftType === "bandhani" && !typeLower.includes("bandhani")) return false;
      if (craftType === "sozni" && !typeLower.includes("sozni")) return false;
    }

    // 5. Rating Filter
    if (minRating !== "all") {
      const minVal = parseFloat(minRating);
      if (product.rating < minVal) return false;
    }

    return true;
  });

  return (
    <div className={styles.container}>
      {/* Auto-focused Search Input */}
      <div className={styles.searchHeader}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products, crafts, descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
          aria-label="Search items"
        />
      </div>

      <div className={styles.searchLayout}>
        {/* Sidebar Filters */}
        <aside className={styles.sidebar}>
          {/* Category */}
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>Category</h3>
            <div className={styles.filterOptionsList}>
              {[
                { label: "All Collections", value: "all" },
                { label: "Women", value: "women" },
                { label: "Men", value: "men" },
              ].map((opt) => (
                <label key={opt.value} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="category"
                    checked={category === opt.value}
                    onChange={() => setCategory(opt.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>Price Range</h3>
            <div className={styles.filterOptionsList}>
              {[
                { label: "All Prices", value: "all" },
                { label: "Under ₹3,000", value: "under-3000" },
                { label: "₹3,000 - ₹6,000", value: "3000-6000" },
                { label: "₹6,000 - ₹10,000", value: "6000-10000" },
                { label: "Over ₹10,000", value: "over-10000" },
              ].map((opt) => (
                <label key={opt.value} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="priceRange"
                    checked={priceRange === opt.value}
                    onChange={() => setPriceRange(opt.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Craft Type */}
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>Craft Type</h3>
            <div className={styles.filterOptionsList}>
              {[
                { label: "All Crafts", value: "all" },
                { label: "Phulkari", value: "phulkari" },
                { label: "Kantha", value: "kantha" },
                { label: "Chikankari", value: "chikankari" },
                { label: "Bandhani", value: "bandhani" },
                { label: "Kashmiri Sozni", value: "sozni" },
              ].map((opt) => (
                <label key={opt.value} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="craftType"
                    checked={craftType === opt.value}
                    onChange={() => setCraftType(opt.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>Rating</h3>
            <div className={styles.filterOptionsList}>
              {[
                { label: "All Ratings", value: "all" },
                { label: "4.5 Stars & Above", value: "4.5" },
                { label: "4.0 Stars & Above", value: "4.0" },
              ].map((opt) => (
                <label key={opt.value} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === opt.value}
                    onChange={() => setMinRating(opt.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Results Grid */}
        <main className={styles.resultsArea}>
          <div className={styles.resultsCount}>
            {filteredProducts.length} {filteredProducts.length === 1 ? "Result" : "Results"} found
          </div>

          {filteredProducts.length > 0 ? (
            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h2 className={styles.noResultsTitle}>No results found</h2>
              <p className={styles.noResultsText}>
                We couldn't find matches for your search query or active filters. Try adjusting your sidebar selections or keyword.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
export default Search;
