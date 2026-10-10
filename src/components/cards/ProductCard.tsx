/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: any) => {
  return (
    <div className="group">
      <div
        className="border border-primary/18 bg-white cursor-pointer rounded-sm p-4 group-hover:-translate-y-2  group-hover:shadow-[0_6px_20px_-16px_var(--color-primary)]
                transition-all duration-300"
      >
        <div>
          <Image
            src={product.image}
            alt="image"
            width={300}
            height={300}
            className="rounded-sm group-hover:scale-105 duration-300"
          />
        </div>

        <div className="pt-4">
          <p className="text-sm font-bold line-clamp-2">{product.title}</p>

          <p className="flex items-center gap-2 mt-2">
            <span className="md:text-base text-sm font-bold text-primary">
              ৳{product.price}.00
            </span>{" "}
            <span className="md:text-sm text-xs line-through font-medium text-neutral-500">
              ৳{product.mrp}.00
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
