import Link from "next/link";

import backbg from "@/assets/banner/bagaholic-hero-v1.1.0.webp";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backbg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/30 via-50% to-transparent" />

      <div className="site-container md:py-30 py-20 relative">
        <div className="flex  items-center">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="mb-5 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Premium handbags for modern women
            </p>

            {/* Heading */}
            <h1 className="font-heading md:text-[80px] text-[60px] font-bold leading-[0.95] tracking-tight text-foreground">
              Carry your
              <br />
              <em className="font-medium  text-primary">essence.</em>
            </h1>

            {/* Description */}
            <p className="mt-9 max-w-xl font-sans text-base leading-7 md:text-muted-foreground text-neutral-600 sm:text-lg">
              Timeless silhouettes, considered details and everyday function,
              curated for the office, the campus and every occasion in between.
            </p>

            {/* Actions */}
            <div className="mt-12 flex flex-col gap-3 sm:flex-row md:w-full sm-full w-[280px]">
              {/* Primary Button */}
              <Link
                href="/new-arrivals"
                className="group relative inline-flex items-center justify-center overflow-hidden border border-primary rounded bg-primary/10 px-7 py-4 font-sans text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-500"
              >
                {/* Primary background */}
                <span className="absolute inset-0 origin-right scale-x-100 bg-primary transition-transform duration-500 ease-in-out group-hover:scale-x-0" />

                <span className="relative z-10 transition-colors duration-500 text-white group-hover:text-primary">
                  Shop new arrivals
                </span>
              </Link>

              {/* Outline Button */}
              <Link
                href="/shop"
                className="group relative inline-flex items-center justify-center overflow-hidden border border-primary rounded bg-transparent px-7 py-4 font-sans text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-500"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Explore all bags
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
