/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  X,
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Truck,
  ShoppingCart,
} from "lucide-react";

import p1 from "@/assets/products/p1.jpeg";
import p2 from "@/assets/products/p2.jpeg";

type CartItem = {
  id: number;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string | StaticImageData;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Platinum Style Shoulder Bag",
    variant: "Burgundy · Premium Leather",
    price: 4100,
    quantity: 1,
    image: p1,
  },
  {
    id: 2,
    name: "Elegant Retro Handbag",
    variant: "Tan · Everyday Collection",
    price: 3200,
    quantity: 1,
    image: p2,
  },
];

const FREE_SHIPPING = 5000;

const formatPrice = (amount: number) => `৳${amount.toLocaleString("en-BD")}`;

export default function CartSidebar({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<CartItem[]>(initialItems);

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING ? 0 : 100;

  const total = subtotal + shipping;

  const shippingProgress = Math.min((subtotal / FREE_SHIPPING) * 100, 100);

  // Lock background scrolling and close with Escape
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const updateQuantity = (id: number, change: number) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Cart Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Open cart with ${totalItems} items`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="relative flex items-center justify-center p-2 text-primary transition-colors hover:opacity-75"
      >
        <ShoppingBag size={isScrolled ? 17 : 19} strokeWidth={1.6} />

        {totalItems > 0 && (
          <span
            className={`absolute   flex items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-white transition-all duration-300 ${
              isScrolled ? "h-[14px] min-w-[14px] top-0.5 right-0.5" : "h-[18px] min-w-[18px] -top-1 -right-1"
            }`}
          >
            {totalItems}
          </span>
        )}
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Full Website Black Overlay */}
            <div
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              className={`fixed inset-0 z-[9998] bg-black/60 transition-opacity duration-300 ease-in-out ${
                isOpen
                  ? "visible opacity-100"
                  : "invisible pointer-events-none opacity-0"
              }`}
            />

            {/* Cart Sidebar */}
            <aside
              role="dialog"
              aria-modal={isOpen}
              aria-label="Shopping cart"
              aria-hidden={!isOpen}
              inert={!isOpen}
              className={`fixed inset-y-0 right-0 z-[9999] flex h-dvh w-full flex-col overflow-hidden bg-[#FFFCFA] shadow-2xl transition-transform duration-300 ease-in-out sm:w-[400px] lg:w-[440px] ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-primary/10 bg-white px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShoppingBag size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h2 className="font-serif text-xl font-medium text-[#29201e]">
                      Your Shopping Bag
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      {totalItems} {totalItems === 1 ? "item" : "items"} in your
                      cart
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close cart"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Shipping Progress */}
              {items.length > 0 && (
                <div className="shrink-0 border-b border-primary/10 bg-[#FFF7F5] px-5 py-4 sm:px-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Truck size={17} className="shrink-0 text-primary" />

                    <p className="text-xs text-gray-700">
                      {subtotal >= FREE_SHIPPING ? (
                        <>
                          Congratulations! You ve unlocked{" "}
                          <span className="font-semibold text-primary">
                            FREE shipping!
                          </span>
                        </>
                      ) : (
                        <>
                          Add{" "}
                          <span className="font-semibold text-primary">
                            {formatPrice(FREE_SHIPPING - subtotal)}
                          </span>{" "}
                          more for free shipping.
                        </>
                      )}
                    </p>
                  </div>

                  <div
                    className="h-1.5 overflow-hidden rounded-full bg-primary/10"
                    role="progressbar"
                    aria-label="Free shipping progress"
                    aria-valuenow={Math.round(shippingProgress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${shippingProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Scrollable Cart Items */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                      <ShoppingBag
                        size={38}
                        strokeWidth={1.3}
                        className="text-primary"
                      />
                    </div>

                    <h3 className="font-serif text-2xl text-[#29201e]">
                      Your cart is empty
                    </h3>

                    <p className="mt-3 max-w-[260px] text-sm leading-6 text-gray-500">
                      Looks like you havent added anything to your bag yet.
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="mt-6 bg-primary px-8 py-3.5 text-xs font-medium uppercase tracking-wider text-white transition hover:opacity-90"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="divide-y divide-primary/10">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3 py-5 sm:gap-4">
                          {/* Product Image */}
                          <div className="relative h-[115px] w-[90px] shrink-0 overflow-hidden rounded-lg border border-primary/10 bg-[#F7F0EC] sm:h-[125px] sm:w-[105px]">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 640px) 90px, 105px"
                              className="object-cover"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex min-w-0 flex-1 flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <h3 className="line-clamp-2 font-serif text-[16px] font-medium leading-5 text-[#29201e]">
                                  {item.name}
                                </h3>

                                <button
                                  type="button"
                                  onClick={() => removeItem(item.id)}
                                  aria-label={`Remove ${item.name}`}
                                  className="shrink-0 rounded-full p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-primary"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>

                              <p className="mt-2 text-[11px] leading-4 text-gray-500">
                                {item.variant}
                              </p>

                              <p className="mt-2 text-sm font-semibold text-primary">
                                {formatPrice(item.price)}
                              </p>
                            </div>

                            {/* Quantity & Item Total */}
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                              <div className="flex h-9 items-center overflow-hidden rounded-md border border-primary/20 bg-white">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  disabled={item.quantity <= 1}
                                  aria-label={`Decrease ${item.name} quantity`}
                                  className="flex h-full w-8 items-center justify-center transition hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-30 sm:w-9"
                                >
                                  <Minus size={13} />
                                </button>

                                <span className="min-w-7 text-center text-xs font-medium">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  aria-label={`Increase ${item.name} quantity`}
                                  className="flex h-full w-8 items-center justify-center transition hover:bg-primary/5 sm:w-9"
                                >
                                  <Plus size={13} />
                                </button>
                              </div>

                              <p className="whitespace-nowrap text-sm font-semibold text-primary">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shopping Note */}
                    <div className="mb-5 mt-2 flex items-start gap-3 rounded-lg border border-primary/10 bg-[#FFF7F5] p-4">
                      <ShoppingBag
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />

                      <p className="text-xs leading-5 text-gray-600">
                        Thoughtfully chosen. Beautifully carried. Thank you for
                        shopping with Bagaholic.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Sticky Footer */}
              {items.length > 0 && (
                <div className="shrink-0 border-t border-primary/10 bg-white px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-5 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] sm:px-6">
                  {/* Order Summary */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>

                      <span className="font-medium text-[#29201e]">
                        {formatPrice(subtotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Shipping</span>

                      <span
                        className={
                          shipping === 0
                            ? "font-semibold text-primary"
                            : "font-medium text-[#29201e]"
                        }
                      >
                        {shipping === 0 ? "FREE" : formatPrice(shipping)}
                      </span>
                    </div>

                    <div className="border-t border-dashed border-primary/20 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-[#29201e]">
                          Total
                        </span>

                        <span className="font-serif text-2xl font-semibold text-primary">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="mt-5 flex w-full items-center justify-center gap-3 rounded-md bg-primary px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:opacity-90"
                  >
                    Proceed to Checkout
                    <ArrowRight size={17} />
                  </Link>

                  {/* Continue Shopping */}
                  <Link
                    href="/cart"
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 flex w-full items-center justify-center gap-2 py-1 text-sm font-bold text-gray-600 transition hover:text-primary"
                  >
                    <ShoppingCart size={16} />
                    view cart
                  </Link>
                </div>
              )}
            </aside>
          </>,
          document.body,
        )}
    </>
  );
}
