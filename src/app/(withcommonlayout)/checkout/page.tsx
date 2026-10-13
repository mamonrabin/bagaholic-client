"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import p1 from "@/assets/products/p1.jpeg";
import p2 from "@/assets/products/p2.jpeg";
import headbg from "@/assets/category/cat1.webp";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  CreditCard,
  MapPin,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Truck,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";

type Product = {
  id: number;
  name: string;
  image: typeof p1;
  price: number;
  quantity: number;
  color: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Platinum Style Solid Color Shoulder Fashion Handbag",
    image: p1,
    price: 1100,
    quantity: 1,
    color: "Brown",
  },
  {
    id: 2,
    name: "Elegant Retro Box Handbag for Women",
    image: p2,
    price: 2000,
    quantity: 1,
    color: "Coffee",
  },
];

const formatPrice = (price: number) => `৳${price.toLocaleString("en-BD")}`;

export default function CheckoutPage() {
  const [shipping, setShipping] = useState("inside");
  const [payment, setPayment] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Example delivery charges - adjust for your store.
  const deliveryCharge = shipping === "inside" ? 80 : 150;
  const total = subtotal + deliveryCharge;

 
const handleOrder = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  setTimeout(() => {
    toast.success("Order placed successfully!", {
      description: "Thank you for shopping with Bagaholic!",
      duration: 4000,
    });

    setLoading(false);
     router.push("/shop");
  }, 800);
};


  const inputClass =
    "w-full rounded-md border border-primary/15 bg-white px-4 py-3.5 text-sm text-[#2A171B] outline-none transition placeholder:text-gray-400 focus:border-primary";

  return (
    <main className="min-h-screen bg-[#FCF8F7]">
      {/* Page Header */}
      <section className="relative site-container flex h-[240px] items-center overflow-hidden sm:h-[300px] md:h-[360px]">
        {/* Background Image */}
        <Image
          src={headbg}
          alt="Bagaholic luxury handbag collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* White Gradient Overlay: Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/0" />

        {/* Header Content */}
        <div className="Container relative z-10 w-full">
          <div className="max-w-xl">
            <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-7 bg-primary" />
              Secure checkout
            </p>

            <h1 className="font-serif text-3xl font-medium text-[#780019] sm:text-4xl md:text-5xl">
              Complete your order.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              Nationwide delivery · Cash on Delivery available
            </p>
          </div>
        </div>
      </section>

      <div className="site-container py-10 md:py-14">
        <Link
          href="/cart"
          className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
        >
          <ArrowLeft size={15} />
          Back to Shopping Bag
        </Link>

        <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_390px] xl:gap-12"
        >
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Contact Information */}
            <section className="rounded-lg border border-primary/10 bg-white p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <span className="text-sm font-semibold">01</span>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Contact Information
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    How can we reach you?
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="customer-name"
                    className="mb-2 block text-xs font-medium text-[#2A171B]"
                  >
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="customer-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer-phone"
                    className="mb-2 block text-xs font-medium text-[#2A171B]"
                  >
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    name="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    pattern="01[0-9]{9}"
                    maxLength={11}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer-email"
                    className="mb-2 block text-xs font-medium text-[#2A171B]"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="customer-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
            </section>

            {/* Delivery Address */}
            <section className="rounded-lg border border-primary/10 bg-white p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <span className="text-sm font-semibold">02</span>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Delivery Address
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="district"
                    className="mb-2 block text-xs font-medium"
                  >
                    District <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="district"
                      name="district"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>
                        Select District
                      </option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Gazipur">Gazipur</option>
                      <option value="Narayanganj">Narayanganj</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Mymensingh">Mymensingh</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="area"
                    className="mb-2 block text-xs font-medium"
                  >
                    Area / Thana <span className="text-primary">*</span>
                  </label>
                  <input
                    id="area"
                    name="area"
                    type="text"
                    placeholder="e.g. Mirpur-1"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-xs font-medium"
                  >
                    Full Address <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    placeholder="House number, road, block, landmark..."
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            </section>

            {/* Shipping Method */}
            <section className="rounded-lg border border-primary/10 bg-white p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <span className="text-sm font-semibold">03</span>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Shipping Method
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Choose your delivery location.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: "inside",
                    title: "Inside Dhaka",
                    subtitle: "Delivery within Dhaka city",
                    price: 80,
                  },
                  {
                    id: "outside",
                    title: "Outside Dhaka",
                    subtitle: "Delivery anywhere in Bangladesh",
                    price: 150,
                  },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-md border p-4 transition ${
                      shipping === option.id
                        ? "border-primary bg-primary/5"
                        : "border-primary/10 hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value={option.id}
                        checked={shipping === option.id}
                        onChange={() => setShipping(option.id)}
                        className="accent-primary"
                      />

                      <div>
                        <p className="text-sm font-semibold text-[#2A171B]">
                          {option.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 text-sm font-semibold text-primary">
                      {formatPrice(option.price)}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* Payment Method */}
            <section className="rounded-lg border border-primary/10 bg-white p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <span className="text-sm font-semibold">04</span>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                    Payment Method
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Choose how you would like to pay.
                  </p>
                </div>
              </div>

              <label
                className={`flex cursor-pointer items-center gap-4 rounded-md border p-4 ${
                  payment === "cod"
                    ? "border-primary bg-primary/5"
                    : "border-primary/10"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                  className="accent-primary"
                />

                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-primary">
                  <Wallet size={22} strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#2A171B]">
                    Cash on Delivery
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Pay when your order arrives
                  </p>
                </div>

                <Check size={17} className="text-primary" />
              </label>

              <div className="mt-4 flex items-start gap-3 rounded-md bg-[#F8F0EF] p-4">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <p className="text-xs leading-6 text-gray-600">
                  Your order is safe with Bagaholic. Enjoy a simple and
                  convenient Cash on Delivery experience.
                </p>
              </div>
            </section>

            {/* Order Notes */}
            <section className="rounded-lg border border-primary/10 bg-white p-5 sm:p-7">
              <h2 className="font-serif text-xl font-semibold text-[#2A171B]">
                Order Notes
                <span className="ml-2 font-sans text-xs font-normal text-gray-400">
                  (Optional)
                </span>
              </h2>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Any special instructions for your order..."
                className={`${inputClass} mt-4 resize-none`}
              />
            </section>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-lg border border-primary/10 bg-white p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-primary/10 pb-5">
                <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                  Your Order
                </h2>

                <ShoppingBag
                  size={21}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>

              {/* Products */}
              <div className="space-y-5">
                {products.map((product) => (
                  <div key={product.id} className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[#F8F0EF]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />

                      <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-bl-md bg-primary px-1 text-[10px] text-white">
                        {product.quantity}
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <h3 className="line-clamp-2 text-xs font-semibold leading-5 text-[#2A171B]">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-[11px] text-gray-500">
                          Color: {product.color}
                        </p>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-primary">
                        {formatPrice(product.price * product.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="mt-7 border-t border-primary/10 pt-6">
                <div className="mb-3 flex items-center gap-2">
                  <Tag size={15} className="text-primary" />
                  <p className="text-xs font-semibold">Discount Code</p>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="min-w-0 flex-1 rounded-md border border-primary/15 px-3 py-3 text-xs outline-none focus:border-primary"
                  />

                  <button
                    type="button"
                    className="cursor-pointer rounded-md bg-[#2A171B] px-4 text-xs font-medium text-white transition hover:bg-primary"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Pricing */}
              <div className="mt-6 space-y-4 border-t border-primary/10 pt-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#2A171B]">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Delivery Charge</span>
                  <span className="font-medium text-[#2A171B]">
                    {formatPrice(deliveryCharge)}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Discount</span>
                  <span>{formatPrice(0)}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-6">
                <span className="font-semibold text-[#2A171B]">
                  Total Amount
                </span>

                <span className="font-serif text-2xl font-bold text-primary">
                  {formatPrice(total)}
                </span>
              </div>

              {/* Place Order */}
              <button
                type="submit"
                disabled={loading}
                className="mt-7 flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-primary px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Processing..." : "Place Your Order"}
                {!loading && <ArrowRight size={16} />}
              </button>

              <p className="mt-4 text-center text-[11px] text-gray-500">
                By placing your order, you agree to our terms and conditions.
              </p>

              {/* Trust Features */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-primary/10 pt-6">
                <div className="text-center">
                  <Truck
                    size={22}
                    strokeWidth={1.4}
                    className="mx-auto mb-2 text-primary"
                  />
                  <p className="text-[11px] font-medium text-[#2A171B]">
                    Nationwide Delivery
                  </p>
                </div>

                <div className="text-center">
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.4}
                    className="mx-auto mb-2 text-primary"
                  />
                  <p className="text-[11px] font-medium text-[#2A171B]">
                    Secure Checkout
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}
