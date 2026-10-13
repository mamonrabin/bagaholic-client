import { categories } from "@/api/categories";
import { productes } from "@/api/products";
import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/cards/ProductCard";
import ShopSort from "@/components/pages/Shop/ShopSort";
import React from "react";

const page = () => {
  return (
    <div className=" py-20">
      <div className="site-container">
        <p className="md:mb-5 mb-2 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Shop your way
        </p>

        {/* Heading */}
        <h1 className="font-heading md:text-[60px] text-[32px] font-bold leading-[0.95] tracking-tight text-foreground">
          Begin with a silhouette.
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 mt-10 site-container">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="bg-[#FFF9F6] py-20 -mt-18 site-container">
        <div className="mt-12">
          <p className="md:mb-3 mb-2 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" />
            The complete collection
          </p>

          {/* Heading */}
          <h1 className="font-heading md:text-[60px] text-[28px] font-bold leading-[0.95] tracking-tight text-foreground">
            All handbags.
          </h1>
        </div>

        <div className="flex items-center md:justify-between justify-end mt-4">
            <p className="text-sm font-bold text-neutral-600 md:flex hidden">Showing all 9 results</p>
            <ShopSort/>
        </div>


        <div className="md:mt-10 mt-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                {productes.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
      </div>
    </div>
  );
};

export default page;
