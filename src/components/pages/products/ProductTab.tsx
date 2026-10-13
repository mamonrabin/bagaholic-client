"use client";
import { Star } from "lucide-react";
import React, { useState } from "react";

const colors = [
  { name: "Burgundy", value: "#7B1730" },
  { name: "Black", value: "#292929" },
  { name: "Taupe", value: "#A99B88" },
];

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <section className="border-y border-neutral-200 bg-[#fcf8f6]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap justify-center gap-7 border-b border-neutral-200">
          {[
            { label: "Description", value: "description" },
            { label: "Additional Information", value: "information" },
            { label: "Reviews (24)", value: "reviews" },
          ].map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`border-b-2 pb-4 text-xs font-medium transition ${
                activeTab === tab.value
                  ? "border-[#850020] text-[#850020]"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl py-8">
          {activeTab === "description" && (
            <div>
              <h2 className="font-serif text-2xl">
                Made for your everyday elegance.
              </h2>
              <p className="mt-4 text-sm leading-8 text-neutral-600">
                Designed to bring timeless style to your everyday wardrobe, this
                structured handbag combines a refined silhouette with versatile
                styling. Pair it with workwear, casual outfits, or an evening
                look.
              </p>
            </div>
          )}

          {activeTab === "information" && (
            <div className="space-y-4 text-sm">
              {[
                ["Product type", "Top Handle Bag"],
                ["Color", selectedColor.name],
                ["Style", "Modern Classic"],
                ["Availability", "In stock"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-5 border-b border-neutral-200 pb-3"
                >
                  <span className="text-neutral-500">{label}</span>
                  <span className="text-right font-medium">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h2 className="font-serif text-2xl">Customer Reviews</h2>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex gap-1 text-[#a66b28]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">
                  4.9 out of 5 · 24 reviews
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-500">
                Customer reviews will appear here when connected to your product
                review system.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductTab;
