import { useState } from "react";
import { motion } from "motion/react";
import { X, Plus } from "lucide-react";
import { PRODUCTS } from "../data/products";

type Category = "upper" | "lower" | "footwear" | "accessory" | "outerwear";

interface SelectedItem {
  productId: string;
  category: Category;
}

interface BuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (productIds: string[]) => void;
}

const CATEGORIES: { id: Category; label: string; placeholder: string }[] = [
  { id: "upper", label: "Upper Body", placeholder: "Select a top or shirt" },
  { id: "lower", label: "Lower Body", placeholder: "Select pants or skirt" },
  { id: "footwear", label: "Footwear", placeholder: "Select shoes" },
  { id: "accessory", label: "Accessories", placeholder: "Add an accessory (optional)" },
  { id: "outerwear", label: "Outerwear", placeholder: "Add a jacket (optional)" },
];

export function StudioOutfitBuilder({ isOpen, onClose, onAddToCart }: BuilderModalProps) {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category>("upper");

  const totalPrice = selectedItems.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return sum + (product?.price || 0);
  }, 0);

  const bundleDiscount = selectedItems.length >= 5 ? 0.05 : 0;
  const finalPrice = totalPrice * (1 - bundleDiscount);

  const selectProduct = (productId: string, category: Category) => {
    const existing = selectedItems.find(item => item.category === category);
    if (existing) {
      setSelectedItems(selectedItems.map(item =>
        item.category === category ? { ...item, productId } : item
      ));
    } else {
      setSelectedItems([...selectedItems, { productId, category }]);
    }
  };

  const removeProduct = (category: Category) => {
    setSelectedItems(selectedItems.filter(item => item.category !== category));
  };

  const handleAddToCart = () => {
    const productIds = selectedItems.map(item => item.productId);
    onAddToCart(productIds);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-archive-black border-2 border-indigo-deep w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 bg-archive-black border-b border-indigo-deep flex items-center justify-between p-6 z-10">
          <h2 className="font-serif italic text-[28px] text-dust-ivory">
            Outfit Builder
          </h2>
          <button
            onClick={onClose}
            className="text-dust-ivory hover:text-thread-gold transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Selection */}
            <div className="lg:col-span-2 space-y-8">
              {CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <h3 className="font-serif italic text-[20px] text-dust-ivory mb-4">
                    {cat.label}
                  </h3>

                  {/* Selected Item Display */}
                  {selectedItems.some(item => item.category === cat.id) ? (
                    <div className="bg-indigo-deep/20 border border-thread-gold/50 p-4 mb-4 flex items-center justify-between">
                      <div>
                        <p className="font-condensed text-[12px] uppercase tracking-[1px] text-thread-gold mb-1">
                          Selected
                        </p>
                        <p className="font-body text-dust-ivory">
                          {PRODUCTS.find(
                            p => p.id === selectedItems.find(item => item.category === cat.id)?.productId
                          )?.name}
                        </p>
                      </div>
                      <button
                        onClick={() => removeProduct(cat.id)}
                        className="text-ash-grey hover:text-thread-gold transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <p className="text-ash-grey text-[13px] mb-4">{cat.placeholder}</p>
                  )}

                  {/* Product Grid for this Category */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {PRODUCTS.filter(p => {
                      if (cat.id === "upper") return ["Kurta", "Shirt"].includes(p.type);
                      if (cat.id === "lower") return p.type === "Coord" || p.type === "Dupatta";
                      if (cat.id === "footwear") return p.type === "Accessory";
                      if (cat.id === "outerwear") return p.type === "Jacket";
                      return true;
                    }).slice(0, 6).map(product => (
                      <button
                        key={product.id}
                        onClick={() => selectProduct(product.id, cat.id)}
                        className="group text-left"
                      >
                        <div className="aspect-square bg-indigo-deep/20 border border-indigo-deep/50 group-hover:border-thread-gold overflow-hidden mb-2 relative">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <p className="font-body text-[12px] text-dust-ivory truncate">
                          {product.name}
                        </p>
                        <p className="font-condensed text-[11px] text-thread-gold">
                          ₹{product.price}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Sidebar */}
            <div className="sticky top-32">
              <div className="border border-indigo-deep p-6 space-y-6">
                <h3 className="font-serif italic text-[20px] text-dust-ivory">
                  Outfit Summary
                </h3>

                {/* Selected Items List */}
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {selectedItems.length === 0 ? (
                    <p className="text-ash-grey text-[13px]">
                      No items selected yet
                    </p>
                  ) : (
                    selectedItems.map((item) => {
                      const product = PRODUCTS.find(p => p.id === item.productId);
                      return (
                        <div
                          key={item.productId}
                          className="flex justify-between items-start text-[13px] pb-3 border-b border-indigo-deep/30"
                        >
                          <span className="text-dust-ivory">{product?.name}</span>
                          <span className="text-thread-gold font-condensed">
                            ₹{product?.price}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Pricing */}
                <div className="border-t border-indigo-deep pt-4 space-y-2">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-raw-linen">Subtotal</span>
                    <span className="text-dust-ivory font-condensed">₹{totalPrice}</span>
                  </div>
                  {bundleDiscount > 0 && (
                    <div className="flex justify-between text-[14px]">
                      <span className="text-thread-gold">Bundle Discount (5%)</span>
                      <span className="text-thread-gold font-condensed">
                        -₹{(totalPrice * bundleDiscount).toFixed(0)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-[16px] font-condensed pt-2 border-t border-indigo-deep">
                    <span className="text-dust-ivory">Total</span>
                    <span className="text-terracotta">₹{finalPrice.toFixed(0)}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={handleAddToCart}
                  disabled={selectedItems.length === 0}
                  className="w-full px-4 py-3 bg-terracotta text-archive-black font-condensed text-[13px] uppercase tracking-[2px] hover:bg-terracotta/80 disabled:bg-ash-grey disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={16} />
                  Add Entire Outfit to Cart
                </button>

                <button className="w-full px-4 py-3 border border-thread-gold text-thread-gold font-condensed text-[13px] uppercase tracking-[2px] hover:bg-thread-gold hover:text-archive-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={selectedItems.length === 0}
                >
                  Save Outfit
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
