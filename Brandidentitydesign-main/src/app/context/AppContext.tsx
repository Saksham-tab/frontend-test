import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductType, PRODUCTS } from "../data/products";

export interface CartItem {
  product: ProductType;
  size: string;
  quantity: number;
}

export interface ReviewType {
  id: string;
  reviewerName: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  body: string;
  helpfulVotes: number;
}

export interface CurrentUser {
  name: string;
  mobile: string;
}

interface AppContextType {
  cart: CartItem[];
  wishlist: string[];
  reviews: Record<string, ReviewType[]>;
  cartCount: number;
  currentUser: CurrentUser | null;
  isAuthenticated: boolean;
  likedProducts: string[];
  addToCart: (product: ProductType, size: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateCartQuantity: (productId: string, size: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isLiked: (productId: string) => boolean;
  addReview: (productId: string, review: Omit<ReviewType, "id" | "date" | "helpfulVotes" | "verified">) => void;
  incrementHelpful: (productId: string, reviewId: string) => void;
  login: (user: CurrentUser) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Generate default reviews to populate reviews system
const generateDefaultReviews = (): Record<string, ReviewType[]> => {
  const defaultReviews: Record<string, ReviewType[]> = {};

  PRODUCTS.forEach((product) => {
    defaultReviews[product.id] = [
      {
        id: `${product.id}-rev1`,
        reviewerName: "Aarav S.",
        rating: Math.floor(product.rating),
        date: "2026-05-12",
        verified: true,
        title: "Exceptional Craftsmanship",
        body: `The handwork on this ${product.name} is incredibly detailed. The threads are vibrant and the fabric is extremely comfortable. Worth every rupee!`,
        helpfulVotes: 14,
      },
      {
        id: `${product.id}-rev2`,
        reviewerName: "Priya M.",
        rating: Math.ceil(product.rating),
        date: "2026-04-28",
        verified: true,
        title: "Stunning Design & Fit",
        body: `Beautifully styled. The fusion of ${product.craftType} with modern Western cuts is perfect. I received so many compliments when I wore it.`,
        helpfulVotes: 8,
      }
    ];
  });

  return defaultReviews;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Auth state
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(() => {
    const saved = localStorage.getItem("weavr_user");
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!currentUser;

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem("weavr_wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("weavr_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Reviews state
  const [reviews, setReviews] = useState<Record<string, ReviewType[]>>(() => {
    const saved = localStorage.getItem("weavr_reviews");
    return saved ? JSON.parse(saved) : generateDefaultReviews();
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem("weavr_user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("weavr_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("weavr_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("weavr_reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Computed cart item count
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: ProductType, size: string, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      }

      return [...prevCart, { product, size, quantity }];
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const updateCartQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      }
      return [...prevWishlist, productId];
    });
  };

  const isLiked = (productId: string) => {
    return wishlist.includes(productId);
  };

  const addReview = (
    productId: string,
    newReview: Omit<ReviewType, "id" | "date" | "helpfulVotes" | "verified">
  ) => {
    const reviewWithMeta: ReviewType = {
      ...newReview,
      id: `${productId}-rev-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      verified: true,
      helpfulVotes: 0,
    };

    setReviews((prevReviews) => {
      const productReviews = prevReviews[productId] || [];
      return {
        ...prevReviews,
        [productId]: [reviewWithMeta, ...productReviews],
      };
    });
  };

  const incrementHelpful = (productId: string, reviewId: string) => {
    setReviews((prevReviews) => {
      const productReviews = prevReviews[productId] || [];
      const updatedReviews = productReviews.map((rev) =>
        rev.id === reviewId ? { ...rev, helpfulVotes: rev.helpfulVotes + 1 } : rev
      );
      return {
        ...prevReviews,
        [productId]: updatedReviews,
      };
    });
  };

  const login = (user: CurrentUser) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        reviews,
        cartCount,
        currentUser,
        isAuthenticated,
        likedProducts: wishlist,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        isLiked,
        addReview,
        incrementHelpful,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
