import { productes } from "@/api/products";
import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const page = () => {
  return (
    <div className="site-container py-20">
      <div>
        <p className="mb-5 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          <span className="h-px w-8 bg-primary" />
          The latest edit
        </p>

        {/* Heading */}
        <h1 className="font-heading md:text-[60px] text-[40px] font-bold leading-[0.95] tracking-tight text-foreground">
          New to Bagaholic.
        </h1>

        {/* Description */}
        <p className="mt-9 max-w-xl font-sans text-sm leading-7 md:text-muted-foreground text-neutral-600 sm:text-base">
          Customer favourites selected for their polished look, practical
          details and everyday versatility
        </p>
      </div>

      <div className="md:mt-10 mt-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {productes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
