import React, { useState } from "react";
import { Link } from "react-router";
import { Heart, X } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import { ProductType } from "../../data/products";
export { type ProductType };
import styles from "./ProductCard.module.css";
import { VirtualTryOnModal } from "../VirtualTryOnModal";

interface ProductCardProps {
  product: ProductType;
  viewMode?: "grid" | "grid2" | "list";
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = "grid" }) => {
  const { addToCart, toggleWishlist, isLiked } = useAppContext();
  
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState<boolean>(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState<boolean>(false);
  const [isTryOnOpen, setIsTryOnOpen] = useState<boolean>(false);

  const liked = isLiked(product.id);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  // Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Auto-select size if none is selected
    let sizeToUse = selectedSize;
    if (!sizeToUse) {
      const firstInStock = product.sizes.find(s => s.inStock);
      if (firstInStock) {
        sizeToUse = firstInStock.label;
        setSelectedSize(firstInStock.label);
      } else {
        return; // No sizes in stock
      }
    }

    addToCart(product, sizeToUse, 1);
    setAdded(true);
    
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  // Render Gold Stars
  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    
    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        // Full Star
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i - 0.5 <= rating) {
        // Half Star
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
          </svg>
        );
      } else {
        // Empty Star
        stars.push(
          <svg key={i} className="w-4 h-4 text-zinc-600 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <>
      <div className={`${styles.cardContainer} ${viewMode === "list" ? styles.listLayout : ""} ${viewMode === "grid2" ? styles.grid2Layout : ""}`}>
        {/* Image Area */}
        <div className={styles.imageArea} onClick={() => setIsQuickViewOpen(true)}>
          {/* Badge (Top-Left) */}
          {product.badge && <div className={styles.badge}>{product.badge}</div>}

          {/* Images with transition */}
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className={`${styles.productImage} ${styles.imageDefault}`}
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate`}
              loading="lazy"
              className={`${styles.productImage} ${styles.imageHover}`}
            />
          )}

          {/* Wishlist Button (Top-Right) */}
          <button
            className={styles.wishlistBtn}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label="Add to Wishlist"
          >
            <Heart
              size={20}
              className={`${styles.wishlistHeart} ${liked ? styles.liked : ""}`}
            />
          </button>

          {/* Quick View Overlay (appears on hover) */}
          <div className={styles.quickViewOverlay}>
            <button
              className={styles.quickViewBtn}
              onClick={(e) => {
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
            >
              Quick View
            </button>
          </div>
        </div>

        {/* Info Details Area */}
        <div className={styles.infoArea}>
          <span className={styles.craftType}>{product.craftType}</span>
          
          <Link to={`/product/${product.id}`} className={styles.name}>
            {product.name}
          </Link>

          {/* Stars & Reviews */}
          <div className={styles.ratingArea}>
            <div className={styles.stars}>{renderStars(product.rating)}</div>
            <span className={styles.ratingValue}>{product.rating}</span>
            <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
          </div>

          {/* Price & Discounts */}
          <div className={styles.priceArea}>
            <span className={styles.price}>₹{product.price.toLocaleString("en-IN")}</span>
            {hasDiscount && (
              <>
                <span className={styles.originalPrice}>
                  ₹{product.originalPrice!.toLocaleString("en-IN")}
                </span>
                <span className={styles.discountBadge}>{discountPercent}% OFF</span>
              </>
            )}
          </div>

          {/* Size Swatches */}
          <div className={styles.swatches}>
            {product.sizes.map((s) => (
              <button
                key={s.label}
                disabled={!s.inStock}
                onClick={() => setSelectedSize(s.label)}
                className={`${styles.swatch} ${selectedSize === s.label ? styles.selected : ""} ${
                  !s.inStock ? styles.disabled : ""
                }`}
              >
                {s.label}
                {!s.inStock && (
                  <svg className={styles.disabledLine}>
                    <line x1="0" y1="32" x2="32" y2="0" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Add To Cart */}
          <button
            className={`${styles.addToCartBtn} ${added ? styles.added : ""}`}
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>

          {/* Try It On CTA */}
          <button
            onClick={(e) => { e.stopPropagation(); setIsTryOnOpen(true); }}
            className={styles.tryOnBtn}
            aria-label="Try it on"
          >
            Try It On
          </button>

          {isTryOnOpen && (
            <VirtualTryOnModal
              isOpen={isTryOnOpen}
              onClose={() => setIsTryOnOpen(false)}
              productName={product.name}
              productImage={product.images[0]}
            />
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsQuickViewOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsQuickViewOpen(false)} aria-label="Close modal">
              <X size={24} />
            </button>

            {/* Left Image Column */}
            <div className={styles.modalLeft}>
              <img src={product.images[0]} alt={product.name} />
            </div>

            {/* Right Details Column */}
            <div className={styles.modalRight}>
              <div>
                <span className={styles.craftType}>{product.craftType} · {product.region}</span>
                <h2 className="font-serif italic text-2xl text-dust-ivory mt-1 mb-2">
                  {product.name}
                </h2>
                
                {/* Rating */}
                <div className={styles.ratingArea}>
                  <div className={styles.stars}>{renderStars(product.rating)}</div>
                  <span className={styles.ratingValue}>{product.rating}</span>
                  <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className={styles.priceArea}>
                <span className="text-xl font-condensed text-dust-ivory font-bold">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {hasDiscount && (
                  <>
                    <span className={styles.originalPrice}>
                      ₹{product.originalPrice!.toLocaleString("en-IN")}
                    </span>
                    <span className={styles.discountBadge}>{discountPercent}% OFF</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className={styles.modalDesc}>{product.description}</p>

              {/* Size Swatches */}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ash-grey block mb-2">
                  Select Size
                </span>
                <div className={styles.swatches}>
                  {product.sizes.map((s) => (
                    <button
                      key={s.label}
                      disabled={!s.inStock}
                      onClick={() => setSelectedSize(s.label)}
                      className={`${styles.swatch} ${selectedSize === s.label ? styles.selected : ""} ${
                        !s.inStock ? styles.disabled : ""
                      }`}
                    >
                      {s.label}
                      {!s.inStock && (
                        <svg className={styles.disabledLine}>
                          <line x1="0" y1="32" x2="32" y2="0" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart in modal */}
              <button
                className={`${styles.addToCartBtn} ${added ? styles.added : ""}`}
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? "Added ✓" : "Add to Cart"}
              </button>

              {/* Try It On in modal */}
              <button
                onClick={(e) => { e.stopPropagation(); setIsTryOnOpen(true); }}
                className={`${styles.tryOnBtn ?? ""} mt-3`}
              >
                Try It On
              </button>

              <Link
                to={`/product/${product.id}`}
                className={styles.viewDetailsLink}
                onClick={() => setIsQuickViewOpen(false)}
              >
                View Full Product Details →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
