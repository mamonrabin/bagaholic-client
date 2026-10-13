
import Image from "next/image";
import logo from "@/assets/logo/logo.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-dvh w-full items-center justify-center bg-[#fffaf9]">
      <div className="flex flex-col items-center justify-center">
        {/* Animated Logo */}
        <div className="relative flex h-[170px] w-[170px] items-center justify-center sm:h-[190px] sm:w-[190px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-[spin_5s_linear_infinite] rounded-full border border-primary/15 border-t-primary/70" />

          {/* Inner Ring */}
          <div className="absolute inset-3 animate-[spin_3s_linear_infinite_reverse] rounded-full border border-primary/10 border-b-primary/50" />

          {/* Soft Glow */}
          <div className="absolute inset-7 animate-pulse rounded-full bg-primary/5 blur-xl" />

          {/* Brand Logo */}
          <div className="relative z-10 flex items-center justify-center">
            <Image
              src={logo}
              alt="Bagaholic"
              width={125}
              height={125}
              priority
              className="h-auto w-[115px] object-contain sm:w-[125px]"
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="mt-7 text-center">
          <h2 className="font-serif text-xl font-medium italic tracking-wide text-primary sm:text-2xl">
            Carry Your Essence
          </h2>

          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
            Affordable Luxury
          </p>
        </div>

        {/* Loading Indicator */}
        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary"
              style={{
                animationDelay: `${item * 150}ms`,
              }}
            />
          ))}
        </div>

        <p className="mt-3 text-xs tracking-wide text-neutral-400">
          Please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
