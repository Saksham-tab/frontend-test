import React from "react";
import { Link } from "react-router";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import styles from "./Cart.module.css";

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, addToCart } = useAppContext();

  // Subtotal Calculation
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Free shipping above ₹3,000
  const shippingThreshold = 3000;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 150;

  // GST 12%
  const gstTax = Math.round(subtotal * 0.12);

  // Order Total
  const total = subtotal + shippingCost + gstTax;

  // Handler to swap size in cart
  const handleSizeChange = (productId: string, oldSize: string, newSize: string) => {
    const cartItem = cart.find((item) => item.product.id === productId && item.size === oldSize);
    if (!cartItem) return;

    // Remove item with old size
    removeFromCart(productId, oldSize);
    // Add item with new size and preserve quantity
    addToCart(cartItem.product, newSize, cartItem.quantity);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Shopping Cart</h1>

      {cart.length > 0 ? (
        <div className={styles.cartContent}>
          {/* Item List */}
          <div className={styles.itemList}>
            {cart.map((item, index) => {
              const lineTotal = item.product.price * item.quantity;
              
              return (
                <div key={`${item.product.id}-${item.size}-${index}`} className={styles.cartItem}>
                  {/* Thumbnail */}
                  <div className={styles.thumbnail}>
                    <img src={item.product.images[0]} alt={item.product.name} />
                  </div>

                  {/* Details */}
                  <div className={styles.itemDetails}>
                    <div className={styles.itemHeader}>
                      <div>
                        <span className={styles.craftType}>{item.product.craftType}</span>
                        <h3 className="font-serif">
                          <Link to={`/product/${item.product.id}`} className={styles.itemName}>
                            {item.product.name}
                          </Link>
                        </h3>
                      </div>
                      <div className={styles.price}>
                        ₹{item.product.price.toLocaleString("en-IN")}
                      </div>
                    </div>

                    <div className={styles.itemMeta}>
                      {/* Size Selector */}
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider mr-2">Size</span>
                        <select
                          className={styles.sizeSelect}
                          value={item.size}
                          onChange={(e) => handleSizeChange(item.product.id, item.size, e.target.value)}
                        >
                          {item.product.sizes.map((s) => (
                            <option key={s.label} value={s.label} disabled={!s.inStock}>
                              {s.label} {!s.inStock ? "(Out of stock)" : ""}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Quantity Stepper */}
                      <div className={styles.stepper}>
                        <button
                          className={styles.stepperBtn}
                          onClick={() => updateCartQuantity(item.product.id, item.size, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <div className={styles.stepperVal}>{item.quantity}</div>
                        <button
                          className={styles.stepperBtn}
                          onClick={() => updateCartQuantity(item.product.id, item.size, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className={styles.lineTotal}>
                    ₹{lineTotal.toLocaleString("en-IN")}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className={styles.summaryCard}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>
                {shippingCost === 0 ? "Free" : `₹${shippingCost.toLocaleString("en-IN")}`}
              </span>
            </div>

            <div className={styles.summaryRow}>
              <span>Estimated Taxes (GST 12%)</span>
              <span>₹{gstTax.toLocaleString("en-IN")}</span>
            </div>

            {shippingCost > 0 && (
              <p className="text-[10px] italic text-terracotta mb-4">
                Add ₹{(shippingThreshold - subtotal).toLocaleString("en-IN")} more to qualify for Free Shipping.
              </p>
            )}

            <div className={styles.totalRow}>
              <span>Order Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>

            <button
              className={styles.checkoutBtn}
              onClick={() => alert("Proceeding to payment gateway...")}
            >
              Proceed to Checkout
            </button>

            <Link to="/women" className={styles.continueLink}>
              Continue Shopping &rarr;
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <ShoppingBag size={64} strokeWidth={1} />
          </div>
          <h2 className={styles.emptyTitle}>Your cart is empty</h2>
          <p className={styles.emptyText}>
            You haven't added any premium artisan items to your cart yet. Explore our latest drops.
          </p>
          <Link to="/women" className={styles.ctaBtn}>
            Explore Collections
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
