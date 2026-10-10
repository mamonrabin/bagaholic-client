import { productes } from "@/api/products";
import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const BestSelles = () => {
  return (
    <div className="bg-[#FFF9F6] py-20 site-container">
      <p className="flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
        <span className="h-px w-8 bg-primary" />
        Curated favourites
      </p>

      <div className="flex md:flex-row flex-col justify-between md:items-end">
        <h1 className="font-heading md:text-[40px] text-3xl font-bold">
          Bestsellers, beautifully chosen.
        </h1>
        <p className="text-primary/80 hover:text-primary md:flex hidden duration-300 cursor-pointer font-bold text-sm">
          View best sellers <span className="ml-1">→</span>
        </p>
      </div>

      <div className="md:mt-10 mt-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {
          productes.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default BestSelles;
