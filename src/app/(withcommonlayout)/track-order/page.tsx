
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  PackageSearch,
  Mail,
  Hash,
  Info,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // Demo only — connect tracking API later
    setTimeout(() => {
      setLoading(false);

      toast.info("Demo Tracking", {
        description:
          "Order tracking will be available once the system is connected.",
      });
    }, 800);
  };

  const inputClass =
    "w-full rounded-md border border-primary/15 bg-white px-4 py-3.5 text-sm text-[#2A171B] outline-none transition placeholder:text-gray-400 focus:border-primary";

  return (
    <main className="min-h-screen">
      <div className="site-container py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT CONTENT */}
            <div>
              <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Delivery updates
              </p>

              <h1 className="font-serif text-4xl font-medium leading-tight text-[#780019] sm:text-5xl">
                Track your
               
                Bagaholic order.
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                Enter the order ID and billing email used at checkout to see
                the latest status of your order.
              </p>

              {/* Help Information */}
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-primary/10 bg-white p-5">
                <Info
                  size={19}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <p className="text-xs leading-6 text-gray-600">
                  Use the order number from your confirmation email and the
                  exact billing email entered during checkout.
                </p>
              </div>

              {/* FEATURES */}
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                    <Truck size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#2A171B]">
                      Nationwide
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500">
                      Delivery Service
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                    <ShieldCheck size={21} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#2A171B]">
                      Secure
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500">
                      Order Tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {/* FORM HEADER */}
              <div className="mb-7 border-b border-primary/10 pb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <PackageSearch size={25} strokeWidth={1.5} />
                </div>

                <h2 className="font-serif text-2xl font-semibold text-[#2A171B]">
                  Find Your Order
                </h2>

                <p className="mt-3 text-xs leading-6 text-gray-500">
                  Enter your order details below and click the track button
                  to check your delivery status.
                </p>
              </div>

              <form onSubmit={handleTrack} className="space-y-6">
                {/* ORDER ID */}
                <div>
                  <label
                    htmlFor="orderId"
                    className="mb-2 block text-xs font-semibold text-[#2A171B]"
                  >
                    Order ID <span className="text-primary">*</span>
                  </label>

                  <div className="relative">
                    <Hash
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="orderId"
                      type="text"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      placeholder="Enter your order ID"
                      required
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>

                {/* BILLING EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-[#2A171B]"
                  >
                    Billing Email <span className="text-primary">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email used during checkout"
                      required
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-primary px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Tracking Order..." : "Track Your Order"}

                  {!loading && <ArrowRight size={17} />}
                </button>
              </form>

              {/* BOTTOM NOTE */}
              <div className="mt-7 flex items-start gap-2 border-t border-primary/10 pt-5">
                <Info
                  size={15}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <p className="text-[11px] leading-5 text-gray-500">
                  Your Order ID can be found in your order confirmation
                  email or receipt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
