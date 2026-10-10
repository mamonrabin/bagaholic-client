import { productes } from "@/api/products";
import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const NewProducts = () => {
  return (
    <div className="bg-[#FBF1F2] md:py-28 py-10 site-container">
      <div className="flex flex-col md:items-center md:justify-center">
        <p className="md:mb-4 mb-2 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Just arrived
        </p>

        <h1 className="font-heading md:text-5xl text-3xl font-bold md:text-center">
          The newest additions.
        </h1>
        <p className="md:mt-6 mt-3 text-base font-medium text-[#262626]/60 md:text-center">
          Fresh silhouettes and polished details, selected for the season ahead.
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

export default NewProducts;
