import { categories } from "@/api/categories";
import CategoryCard from "@/components/cards/CategoryCard";
import React from "react";

const Category = () => {
  return (
    <div className="py-20 site-container">
      <div className="flex flex-col items-center justify-center">
       
        <p className="mb-4 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Shop your way
        </p>

        <h1 className="font-heading md:text-5xl text-4xl font-bold text-center">
          A bag for every rhythm.
        </h1>
        <p className="mt-6 text-base font-medium text-[#262626]/60 text-center">
          Polished pieces for work, study, everyday movement and special plans.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-10">
        {
            categories.slice(0,3).map(category => <CategoryCard key={category.id} category={category}/>)
        }
      </div>
    </div>
  );
};

export default Category;
