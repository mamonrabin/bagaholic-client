
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

import logo from "@/assets/logo/logo.png";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85dvh] items-center justify-center overflow-hidden bg-[#fffaf9] px-5 py-16">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Brand Logo */}
        <Link href="/" aria-label="Bagaholic home">
          <Image
            src={logo}
            alt="Bagaholic"
            width={150}
            height={80}
            priority
            className="h-auto w-32 object-contain sm:w-40"
          />
        </Link>

        {/* 404 Illustration */}
        <div className="relative mt-8 flex items-center justify-center">
          <h1 className="font-serif text-[110px] font-medium leading-none tracking-[-0.08em] text-primary sm:text-[160px] md:text-[190px]">
            404
          </h1>

          <div className="absolute -right-5 -top-3 flex h-12 w-12 rotate-12 items-center justify-center rounded-full border border-primary/15 bg-white shadow-sm sm:-right-8 sm:h-16 sm:w-16">
            <ShoppingBag
              size={28}
              strokeWidth={1.2}
              className="text-primary"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <span className="h-px w-10 bg-primary/30" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Lost in Style?
          </span>
          <span className="h-px w-10 bg-primary/30" />
        </div>

        {/* Text */}
        <h2 className="font-serif text-3xl font-medium leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
          This page is{" "}
          <span className="italic text-primary">
            out of style.
          </span>
        </h2>

        <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500 sm:text-base">
          Looks like this page has wandered off our collection.
          Don&lsquo;t worry, your next favorite handbag is just a click away.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-7 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#600014]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          <Link
            href="/shop"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-primary px-7 text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Explore Collection
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-[10px] font-medium uppercase tracking-[0.25em] text-primary/60">
          Bagaholic · Carry Your Essence
        </p>
      </div>
    </main>
  );
}
