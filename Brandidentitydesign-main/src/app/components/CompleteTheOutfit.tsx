import React from "react";
import { Link } from "react-router";
import { PRODUCTS } from "../data/products";

interface Props {
  productId: string;
}

const CompleteTheOutfit: React.FC<Props> = ({ productId }) => {
  const recs = PRODUCTS.filter((p) => p.id !== productId).slice(0, 6);

  return (
    <div className="mt-8 px-4 lg:px-0">
      <h3 className="font-serif italic text-[20px] mb-4">Complete the outfit</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {recs.map((r) => (
          <Link key={r.id} to={`/product/${r.id}`} className="block text-center bg-indigo-deep/5 p-2">
            <img src={r.images[0]} alt={r.name} className="w-full h-24 object-cover mb-2" />
            <div className="text-sm text-raw-linen">{r.name}</div>
            <div className="text-condensed text-[13px] text-thread-gold">₹{r.price.toLocaleString("en-IN")}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompleteTheOutfit;