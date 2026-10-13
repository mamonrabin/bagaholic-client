"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
  Star,
} from "lucide-react";
import Link from "next/link";

import p1 from "@/assets/products/p1.jpeg";
import p2 from "@/assets/products/p2.jpeg";
import p3 from "@/assets/products/p3.jpeg";
import p4 from "@/assets/products/p4.jpeg";
import ProductGallery from "@/components/pages/products/ProductGallery";
import ProductTab from "@/components/pages/products/ProductTab";
import RelatedProducts from "@/components/pages/products/RelatedProducts";
import { toast } from "sonner";

const productImages = [p1, p2, p3, p4];

const colors = [
  { name: "Burgundy", value: "#7B1730" },
  { name: "Black", value: "#292929" },
  { name: "Taupe", value: "#A99B88" },
];

const relatedProducts = [
  {
    name: "Elegant Retro Shoulder Bag",
    price: 3200,
    image: p1,
  },
  {
    name: "Classic Structured Handbag",
    price: 2800,
    image: p2,
  },
  {
    name: "Premium Everyday Tote",
    price: 3500,
    image: p3,
  },
  {
    name: "Minimalist Top Handle Bag",
    price: 2600,
    image: p4,
  },
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => `৳${price.toLocaleString("en-BD")}`;

  const handleAddToCart = () => {
    toast.success("Added to cart successfully!", {
      description: `${quantity} × Premium Structured Top Handle Bag (${selectedColor.name})`,
      duration: 3000,
      position: "top-right",
    });
  };

  return (
    <main className="min-h-screen bg-white text-[#29201f]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="hover:text-[#850020]">
            Home
          </Link>
          <ChevronRight size={13} />
          <a href="/shop/" className="hover:text-[#850020]">
            Shop
          </a>
          <ChevronRight size={13} />
          <span className="text-[#850020]">Top Handle Bags</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid gap-9 lg:grid-cols-2 lg:gap-14">
          {/* Product Gallery */}
          <ProductGallery
            productImages={productImages.map((image) => image.src)}
          />

          {/* Product Information */}
          <div className="flex flex-col pt-1 lg:pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#850020]">
              Bagaholic Collection
            </p>

            <h1 className="mt-4 font-serif text-3xl leading-tight text-[#211817] sm:text-4xl lg:text-[42px]">
              Premium Structured Top Handle Bag
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[#a66b28]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={1} />
                ))}
              </div>
              <span className="text-xs text-neutral-500">4.9 (24 reviews)</span>
              <span className="h-4 w-px bg-neutral-300" />
              <span className="text-xs text-green-700">In stock</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl font-semibold text-[#850020]">
                {formatPrice(2850)}
              </span>
              <span className="text-sm text-neutral-400 line-through">
                {formatPrice(3500)}
              </span>
              <span className="bg-[#850020]/[0.07] px-2.5 py-1 text-[10px] font-semibold text-[#850020]">
                SAVE 19%
              </span>
            </div>

            <div className="my-6 border-t border-neutral-200" />

            <p className="text-sm leading-7 text-neutral-600">
              A timeless handbag designed for everyday elegance. Featuring a
              structured silhouette, refined detailing, and a versatile design
              that effortlessly complements your wardrobe.
            </p>

            {/* Color Selector */}
            <div className="mt-7">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Color:</span>
                <span className="text-neutral-500">{selectedColor.name}</span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-label={color.name}
                    aria-pressed={selectedColor.name === color.name}
                    className={`flex size-9 items-center justify-center rounded-full border transition ${
                      selectedColor.name === color.name
                        ? "border-[#850020] ring-2 ring-[#850020]/20 ring-offset-2"
                        : "border-neutral-200"
                    }`}
                  >
                    <span
                      className="size-7 rounded-full border border-black/5"
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold">Quantity</p>

              <div className="flex h-12 w-32 items-center justify-between border border-neutral-300">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="flex size-10 items-center justify-center text-neutral-600 transition hover:text-[#850020] disabled:opacity-30"
                >
                  <Minus size={15} />
                </button>

                <span className="text-sm">{quantity}</span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() =>
                    setQuantity((current) => Math.min(10, current + 1))
                  }
                  disabled={quantity >= 10}
                  className="flex size-10 items-center justify-center text-neutral-600 transition hover:text-[#850020] disabled:opacity-30"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="group relative flex min-h-12 cursor-pointer items-center justify-center overflow-hidden border border-primary bg-primary/10 px-5 font-sans text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-500"
              >
                <span className="absolute inset-0 origin-right scale-x-100 bg-primary transition-transform duration-500 ease-in-out group-hover:scale-x-0" />

                <span className="relative z-10 flex items-center gap-2 text-white transition-colors duration-500 group-hover:text-primary">
                  <ShoppingBag size={16} />
                  Add to Cart
                </span>
              </button>

              <Link
                href="/checkout"
                className="group relative inline-flex items-center justify-center overflow-hidden border border-primary  bg-transparent px-7 min-h-12 font-sans text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-500"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Buy Now
                </span>
              </Link>
            </div>

            <p className="mt-4 text-center text-xs text-neutral-500">
              Secure checkout · Cash on Delivery available
            </p>

            <div className="my-7 border-t border-neutral-200" />

            {/* Service Benefits */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Truck
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#850020]"
                />
                <div>
                  <p className="text-sm font-medium">Nationwide Delivery</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Delivery available across Bangladesh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#850020]"
                />
                <div>
                  <p className="text-sm font-medium">Quality Assured</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Thoughtful details and quality craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <RotateCcw
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#850020]"
                />
                <div>
                  <p className="text-sm font-medium">Customer Support</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Contact us for return and exchange assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-neutral-200 pt-5 text-xs text-neutral-500">
              <p>SKU: BH-THB-001</p>
              <p className="mt-2">
                Category:{" "}
                <Link href="/shop" className="text-[#850020]">
                  Top Handle Bags
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Tabs */}
      <ProductTab />

      {/* Related Products */}
      <RelatedProducts />
    </main>
  );
}
