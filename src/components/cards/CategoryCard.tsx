/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }: any) => {
  return (
    
      <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
        <Link href="/shop">
      <Image
        src={category.image}
        alt={category.title}
        width={1000}
        height={1000}
        className="h-full w-full rounded-2xl object-cover"
      />
</Link>
      <div className="z-50 absolute bottom-6 group-hover:bottom-8 duration-300 left-8 text-white">
         <p className="text-[10px] font-sans font-medium tracking-widest uppercase">{category.subTitle}</p>
         <h2 className="font-heading text-3xl font-bold py-1">{category.category}</h2>
         <p className="text-sm text-neutral-300">{category.title}</p>
      </div>

      {/* Bottom → Top Overlay */}
      <Link href="/shop">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </Link>
    </div>
  
  );
};

export default CategoryCard;
