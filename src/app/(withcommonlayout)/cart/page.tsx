
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import p1 from "@/assets/products/p1.jpeg"
import p2 from "@/assets/products/p2.jpeg"
import headbg from "@/assets/category/cat1.webp"


import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Tag,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: typeof p1;
  color: string;
  quantity: number;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Platinum Style Solid Color Shoulder Fashion Handbag",
    price: 1100,
    image: p1,
    color: "Brown",
    quantity: 1,
  },
  {
    id: 2,
    name: "Elegant Retro Box Handbag for Women",
    price: 2000,
    image: p2,
    color: "Coffee",
    quantity: 1,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState("");

  const updateQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) =>
    `৳${price.toLocaleString("en-BD")}`;

  return (
    <main className="min-h-screen bg-[#FCF8F7]">
      {/* Page Heading */}
      
{/* Cart Page Header */}
 <section className="relative flex h-[240px] items-center overflow-hidden sm:h-[300px] md:h-[360px]">
      {/* Background Image */}
      <Image
        src={headbg}
        alt="Bagaholic luxury handbag collection"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* White Gradient Overlay - Left to Right */}
      <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/65 via-45% to-transparent" />

      {/* Header Content */}
      <div className="site-container relative z-10 w-full">
        <div className="max-w-lg">
          {/* Small Label */}
          <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-7 bg-primary" />
            Your Bagaholic Selection
          </p>

          {/* Heading */}
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#2A171B] sm:text-5xl md:text-6xl">
            Your{" "}
            <span className="text-primary">
              Bag.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm text-[#66565A]">
            Beautiful choices, just for you.
          </p>

          {/* Breadcrumb */}
          <div className="mt-5 flex items-center gap-2 text-xs text-[#66565A]">
            <Link
              href="/"
              className="transition-colors hover:text-primary"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-primary">
              Shopping Cart
            </span>
          </div>
        </div>
      </div>
    </section>


      <div className="site-container py-10 md:py-16">
        {cart.length === 0 ? (
          <div className="mx-auto max-w-md py-20 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/5">
              <ShoppingBag
                size={34}
                strokeWidth={1.3}
                className="text-primary"
              />
            </div>

            <h2 className="font-serif text-3xl text-[#2A171B]">
              Your bag is empty
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Your next favorite handbag is waiting to be discovered.
            </p>

            <Link
              href="/shop"
              className="mt-7 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-primary/90"
            >
              Explore Collection
              <ArrowRight size={15} />
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-7 flex items-center justify-between border-b border-primary/10 pb-4">
              <h2 className="font-serif text-2xl text-[#2A171B]">
                Shopping Cart
                <span className="ml-2 font-sans text-sm text-gray-400">
                  ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
                </span>
              </h2>

              <Link
                href="/shop"
                className="hidden items-center gap-2 text-xs font-medium text-primary hover:underline sm:flex"
              >
                <ArrowLeft size={15} />
                Continue Shopping
              </Link>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 xl:gap-12">
              {/* Cart Items */}
              <div className="space-y-4 lg:col-span-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-lg border border-primary/10 bg-white p-4 sm:gap-6 sm:p-5"
                  >
                    {/* Image */}
                    <div className="relative h-32 w-27 shrink-0 overflow-hidden rounded-md bg-[#F8F0EF] sm:h-40 sm:w-36">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 108px, 144px"
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="mb-1 text-[10px] uppercase tracking-widest text-primary/70">
                              Bagaholic Collection
                            </p>

                            <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[#2A171B] sm:text-base">
                              {item.name}
                            </h3>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="shrink-0 cursor-pointer text-gray-400 transition hover:text-primary"
                          >
                            <Trash2 size={17} strokeWidth={1.6} />
                          </button>
                        </div>

                        <p className="mt-2 text-xs text-gray-500">
                          Color: {item.color}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-primary">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                        {/* Quantity */}
                        <div className="flex h-9 items-center rounded border border-primary/15">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="flex h-full w-9 cursor-pointer items-center justify-center text-gray-600 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Minus size={13} />
                          </button>

                          <span className="w-8 text-center text-xs font-medium">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                            className="flex h-full w-9 cursor-pointer items-center justify-center text-gray-600 hover:text-primary"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <p className="text-sm font-bold text-[#2A171B]">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Coupon */}
                <div className="rounded-lg border border-primary/10 bg-white p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Tag size={16} className="text-primary" />
                    <h3 className="text-sm font-semibold">
                      Have a coupon?
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="min-w-0 flex-1 rounded border border-primary/15 bg-white px-4 py-3 text-xs outline-none focus:border-primary"
                    />

                    <button
                      type="button"
                      className="cursor-pointer rounded bg-primary px-5 py-3 text-xs font-medium text-white transition hover:bg-primary/90"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 py-3 text-xs font-medium text-primary hover:underline sm:hidden"
                >
                  <ArrowLeft size={15} />
                  Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <aside className="lg:sticky lg:top-24">
                <div className="rounded-lg border border-primary/10 bg-white p-6 sm:p-7">
                  <h2 className="border-b border-primary/10 pb-5 font-serif text-2xl font-semibold text-[#2A171B]">
                    Order Summary
                  </h2>

                  <div className="space-y-4 py-6 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-[#2A171B]">
                        {formatPrice(subtotal)}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-xs text-gray-500">
                        Calculated at checkout
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Discount</span>
                      <span>{formatPrice(0)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-primary/10 pt-5">
                    <span className="font-semibold text-[#2A171B]">
                      Total
                    </span>

                    <span className="font-serif text-2xl font-bold text-primary">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <p className="mt-2 text-right text-[11px] text-gray-400">
                    Excluding delivery charges
                  </p>

                  <Link
                    href="/checkout"
                    className="mt-7 flex w-full items-center justify-center gap-3 rounded bg-primary px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-primary/90"
                  >
                    Proceed to Checkout
                    <ArrowRight size={16} />
                  </Link>

                  <p className="mt-4 text-center text-[11px] text-gray-500">
                    Secure & easy checkout
                  </p>

                  <div className="mt-6 space-y-4 border-t border-primary/10 pt-6">
                    <div className="flex items-center gap-3">
                      <Truck
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary"
                      />
                      <div>
                        <p className="text-xs font-semibold">
                          Nationwide Delivery
                        </p>
                        <p className="mt-1 text-[11px] text-gray-500">
                          Delivered across Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <ShieldCheck
                        size={20}
                        strokeWidth={1.5}
                        className="text-primary"
                      />
                      <div>
                        <p className="text-xs font-semibold">
                          Cash on Delivery
                        </p>
                        <p className="mt-1 text-[11px] text-gray-500">
                          Pay when your order arrives
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
