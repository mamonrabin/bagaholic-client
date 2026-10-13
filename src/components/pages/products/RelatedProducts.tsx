import { productes } from "@/api/products";
import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const RelatedProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-8 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#850020]">
          Complete Your Look
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          You may also love
        </h2>
        <p className="mt-3 text-sm text-neutral-500">
          Discover more timeless pieces from our collection.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {productes.slice(0,4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
