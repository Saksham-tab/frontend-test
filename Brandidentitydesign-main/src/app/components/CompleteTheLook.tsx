import React from "react";
import { Link } from "react-router";
import { PRODUCTS } from "../data/products";

interface Props {
  productId: string;
}

const CompleteTheLook: React.FC<Props> = ({ productId }) => {
  // pick up to 4 complementary products (simple heuristic: first 4 different products)
  const comps = PRODUCTS.filter((p) => p.id !== productId).slice(0, 4);

  return (
    <div className="mt-6 px-4 lg:px-0">
      <h3 className="font-condensed text-[13px] tracking-[3px] text-thread-gold uppercase mb-3">Complete the look</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {comps.map((c) => (
          <Link key={c.id} to={`/product/${c.id}`} className="block bg-indigo-deep/5 p-2">
            <img src={c.images[0]} alt={c.name} className="w-full h-28 object-cover" />
            <div className="mt-2 text-sm text-raw-linen">{c.name}</div>
            <div className="text-condensed text-[13px] text-thread-gold">₹{c.price.toLocaleString("en-IN")}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompleteTheLook;