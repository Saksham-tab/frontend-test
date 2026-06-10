import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { Heart, Star, X, ThumbsUp } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { useAppContext } from "../context/AppContext";
import styles from "./ProductDetail.module.css";
import { VirtualTryOnModal } from "../components/VirtualTryOnModal";


export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    cart,
    addToCart,
    toggleWishlist,
    isLiked,
    reviews,
    addReview,
    incrementHelpful,
  } = useAppContext();

  // Find product
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-40 bg-archive-black text-dust-ivory">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/women" className="text-terracotta border-b border-terracotta pb-1 font-condensed tracking-wider uppercase">
          Back to collections
        </Link>
      </div>
    );
  }

  // Sizing & cart states
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState<boolean>(false);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  // Review Form Modal states
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formName, setFormName] = useState<string>("");
  const [formRating, setFormRating] = useState<number>(5);
  const [formTitle, setFormTitle] = useState<string>("");
  const [formBody, setFormBody] = useState<string>("");

  // Review Tabs
  const [reviewTab, setReviewTab] = useState<'all' | 'photos' | 'videos'>('all');

  // Try-on modal
  const [isTryOnOpen, setIsTryOnOpen] = useState<boolean>(false);

  const liked = isLiked(product.id);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const productReviews = reviews[product.id] || [];
  const reviewCount = productReviews.length;
  
  // Calculate average rating
  const averageRating = reviewCount > 0 
    ? parseFloat((productReviews.reduce((acc, rev) => acc + rev.rating, 0) / reviewCount).toFixed(1))
    : product.rating;

  // Star breakdown calculation
  const starCounts = [0, 0, 0, 0, 0]; // Index 0 = 1 star, Index 4 = 5 star
  productReviews.forEach((rev) => {
    const starIdx = Math.max(1, Math.min(5, Math.round(rev.rating))) - 1;
    starCounts[starIdx]++;
  });

  const handleAddToCart = () => {
    let sizeToUse = selectedSize;
    if (!sizeToUse) {
      const firstInStock = product.sizes.find(s => s.inStock);
      if (firstInStock) {
        sizeToUse = firstInStock.label;
        setSelectedSize(firstInStock.label);
      } else {
        return;
      }
    }
    addToCart(product, sizeToUse, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formTitle || !formBody) {
      alert("Please fill out all fields.");
      return;
    }
    addReview(product.id, {
      reviewerName: formName,
      rating: formRating,
      title: formTitle,
      body: formBody,
    });
    // Reset Form
    setFormName("");
    setFormRating(5);
    setFormTitle("");
    setFormBody("");
    setIsFormOpen(false);
  };

  // Render gold stars
  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<Star key={i} size={16} className="fill-current text-[#C9A84C] stroke-[#C9A84C]" />);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <div key={i} className="relative inline-block w-4 h-4 text-[#C9A84C]">
            <Star size={16} className="absolute left-0 top-0 fill-current overflow-hidden w-2" />
            <Star size={16} className="absolute left-0 top-0 stroke-current fill-none" strokeWidth={1.5} />
          </div>
        );
      } else {
        stars.push(<Star key={i} size={16} className="text-zinc-600 fill-none stroke-current" strokeWidth={1.5} />);
      }
    }
    return stars;
  };

  return (
    <div className={styles.container}>
      {/* Product Details Section */}
      <section className={styles.productSection}>
        {/* Left Column: Image Gallery */}
        <div className={styles.galleryColumn}>
          <div className={styles.mainImage}>
            <img src={product.images[activeImageIdx]} alt={product.name} />
          </div>
          <div className={styles.thumbnailRow}>
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`${styles.thumbBtn} ${activeImageIdx === idx ? styles.thumbBtnActive : ""}`}
                onClick={() => setActiveImageIdx(idx)}
              >
                <img src={img} alt={`product-thumb-${idx}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Metadata & Purchase Panel */}
        <div className={styles.detailsColumn}>
          <div>
            <span className={styles.craftLabel}>
              {product.craftType} · {product.region}
            </span>
            <h1 className={styles.productName}>{product.name}</h1>
          </div>

          {/* Rating Summary */}
          <div className={styles.ratingSummary}>
            <div className={styles.stars}>{renderStars(averageRating)}</div>
            <span className={styles.reviewCountText}>
              {averageRating} out of 5 ({reviewCount} verified reviews)
            </span>
          </div>

          {/* Price */}
          <div className={styles.priceRow}>
            <span className={styles.price}>₹{product.price.toLocaleString("en-IN")}</span>
            {hasDiscount && (
              <>
                <span className={styles.originalPrice}>
                  ₹{product.originalPrice!.toLocaleString("en-IN")}
                </span>
                <span className={styles.discount}>{discountPercent}% OFF</span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="font-body text-raw-linen leading-relaxed text-[15px] max-w-lg">
            {product.description}
          </p>

          {/* Size swatches */}
          <div>
            <div className={styles.swatchHeader}>
              <span>Select Size</span>
              {selectedSize && <span>Selected: {selectedSize}</span>}
            </div>
            <div className={styles.swatches}>
              {product.sizes.map((s) => (
                <button
                  key={s.label}
                  disabled={!s.inStock}
                  onClick={() => setSelectedSize(s.label)}
                  className={`${styles.swatch} ${selectedSize === s.label ? styles.swatchSelected : ""} ${
                    !s.inStock ? styles.swatchDisabled : ""
                  }`}
                >
                  {s.label}
                  {!s.inStock && (
                    <svg className={styles.swatchDisabledLine}>
                      <line x1="0" y1="40" x2="40" y2="0" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Row (Cart + Wishlist) */}
          <div className={styles.actionRow}>
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`${styles.addToCartBtn} ${added ? styles.added : ""}`}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>

            <button
              onClick={() => toggleWishlist(product.id)}
              className={`${styles.wishlistBtn} ${liked ? styles.wishlistBtnActive : ""}`}
              aria-label="Toggle Wishlist"
            >
              <Heart size={20} className={liked ? "fill-current" : ""} />
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

          {/* Try It On (stacked below Add to Cart) */}
          <div className="mt-3">
            <button
              onClick={() => setIsTryOnOpen(true)}
              className={styles.tryOnBtn}
            >
              Try It On
            </button>
          </div>

          {/* Artisan details */}
          <div className={styles.artisanBox}>
            <h3 className={styles.artisanTitle}>Artisan Spotlight: {product.artisan}</h3>
            <p className={styles.artisanDesc}>
              Hand-embroidered with decades of skill in {product.region}. Handloom fabrics sourced ethically, sustaining local weavers and preserving a culture-rich heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <h2 className={styles.reviewsSectionTitle}>Customer Reviews</h2>

        {/* Tabs */}
        <div className="flex gap-2 mt-4 mb-6">
          <button onClick={() => setReviewTab('all')} className={`px-3 py-2 text-sm ${reviewTab === 'all' ? 'bg-thread-gold text-archive-black' : 'bg-transparent text-raw-linen border border-indigo-deep'}`}>
            All
          </button>
          <button onClick={() => setReviewTab('photos')} className={`px-3 py-2 text-sm ${reviewTab === 'photos' ? 'bg-thread-gold text-archive-black' : 'bg-transparent text-raw-linen border border-indigo-deep'}`}>
            Photos
          </button>
          <button onClick={() => setReviewTab('videos')} className={`px-3 py-2 text-sm ${reviewTab === 'videos' ? 'bg-thread-gold text-archive-black' : 'bg-transparent text-raw-linen border border-indigo-deep'}`}>
            Videos
          </button>
        </div>

        {/* Above the fold: breakdown summary */}
        <div className={styles.reviewsHeader}>
          {/* Large average score */}
          <div className={styles.scoreCol}>
            <span className={styles.averageScore}>{averageRating}</span>
            <div className={styles.stars} style={{ justifyContent: "center" }}>
              {renderStars(averageRating)}
            </div>
            <span className="text-[12px] uppercase text-zinc-500 tracking-wider mt-2 block">
              Average Rating
            </span>
          </div>

          {/* Star breakdown bar chart */}
          <div className={styles.chartCol}>
            {[5, 4, 3, 2, 1].map((star) => {
              const count = starCounts[star - 1];
              const percent = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
              return (
                <div key={star} className={styles.chartRow}>
                  <span className={styles.chartLabel}>{star}★</span>
                  <div className={styles.chartBarBg}>
                    <div className={styles.chartBarFill} style={{ width: `${percent}%` }} />
                  </div>
                  <span className={styles.chartCount}>{count}</span>
                </div>
              );
            })}
          </div>

          {/* Write a review CTA */}
          <div className={styles.writeCol}>
            <button className={styles.writeReviewBtn} onClick={() => setIsFormOpen(true)}>
              Write a Review
            </button>
          </div>
        </div>

        {/* Review list */}
        <div className={styles.reviewsList}>
          {productReviews
            .filter((rev) => {
              if (reviewTab === 'all') return true;
              if (reviewTab === 'photos') return (rev as any).mediaType === 'image';
              if (reviewTab === 'videos') return (rev as any).mediaType === 'video';
              return true;
            })
            .map((rev) => {
              const initials = rev.reviewerName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase();

              return (
                <div key={rev.id} className={styles.reviewCard}>
                  <div className={styles.avatarCol}>
                    <div className={styles.avatarCircle}>{initials || "U"}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <span className={styles.reviewerName}>{rev.reviewerName}</span>
                      <span className={styles.reviewDate}>{rev.date}</span>
                    </div>
                    <div className={styles.starsAndBadge}>
                      <div className={styles.stars}>{renderStars(rev.rating)}</div>
                      {rev.verified && <span className={styles.verifiedBadge}>Verified Purchase</span>}
                    </div>
                    <h4 className={styles.reviewTitle}>{rev.title}</h4>
                    <p className={styles.reviewBody}>{rev.body}</p>
                    
                    {/* Helpful votes */}
                    <div className={styles.helpfulSection}>
                      <button
                        className={styles.helpfulBtn}
                        onClick={() => incrementHelpful(product.id, rev.id)}
                      >
                        <ThumbsUp size={14} /> Helpful? ({rev.helpfulVotes})
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Write a Review Modal Form */}
      {isFormOpen && (
        <div className={styles.modalFormOverlay} onClick={() => setIsFormOpen(false)}>
          <div className={styles.modalFormContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeFormBtn} onClick={() => setIsFormOpen(false)} aria-label="Close form">
              <X size={24} />
            </button>

            <h3 className={styles.formTitle}>Write a Review</h3>

            <form onSubmit={handleReviewSubmit}>
              {/* Star Picker */}
              <div className={styles.formGroup}>
                <span className={styles.formLabel}>Rating</span>
                <div className={styles.starPicker}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`${styles.starPickerBtn} ${formRating >= star ? styles.starPickerBtnActive : ""}`}
                      onClick={() => setFormRating(star)}
                    >
                      <Star size={24} className={formRating >= star ? "fill-current text-[#C9A84C]" : ""} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="reviewName">
                  Reviewer Name
                </label>
                <input
                  id="reviewName"
                  className={styles.formInput}
                  type="text"
                  placeholder="e.g. Aditi Sharma"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                />
              </div>

              {/* Title */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="reviewTitle">
                  Review Title
                </label>
                <input
                  id="reviewTitle"
                  className={styles.formInput}
                  type="text"
                  placeholder="e.g. Stunning details!"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                />
              </div>

              {/* Review Text */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="reviewBody">
                  Review Details
                </label>
                <textarea
                  id="reviewBody"
                  className={styles.formTextarea}
                  placeholder="Tell us what you think of the embroidery, stitching, and style..."
                  value={formBody}
                  onChange={(e) => setFormBody(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
