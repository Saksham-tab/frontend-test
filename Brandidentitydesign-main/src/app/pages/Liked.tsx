import React from "react";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/shared/ProductCard";
import styles from "./Liked.module.css";

export const Liked: React.FC = () => {
  const { wishlist } = useAppContext();

  // Filter products that exist in wishlist
  const likedProducts = PRODUCTS.filter((product) => wishlist.includes(product.id));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Wishlist</h1>

      {likedProducts.length > 0 ? (
        <div className={styles.grid}>
          {likedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <Heart size={64} strokeWidth={1} />
          </div>
          <h2 className={styles.emptyTitle}>Your wishlist is empty</h2>
          <p className={styles.emptyText}>
            Save items you love to your wishlist, so they are ready to be added to your wardrobe.
          </p>
          <Link to="/women" className={styles.ctaBtn}>
            Explore Collections
          </Link>
        </div>
      )}
    </div>
  );
};
export default Liked;
