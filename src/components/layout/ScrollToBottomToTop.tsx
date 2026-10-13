
"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToBottomToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollHeight > 0
          ? Math.min((scrollTop / scrollHeight) * 100, 100)
          : 0;

      setVisible(scrollTop > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (circumference * scrollProgress) / 100;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="
        group fixed right-4 bottom-[9rem] z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-[#780019]/10
        bg-white
        text-[#780019]
        shadow-[0_6px_20px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-[#780019]
        hover:text-white
        hover:shadow-[0_8px_24px_rgba(120,0,25,0.18)]
        active:scale-95
        md:right-6
        md:bottom-[5.75rem]
        md:h-12
        md:w-12
      "
    >
      {/* Progress Ring */}
      <svg
        className="
          pointer-events-none
          absolute inset-0
          h-full w-full
          -rotate-90
        "
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        {/* Background Ring */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          className="text-[#780019]/10"
        />

        {/* Progress Ring */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#780019"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-150 group-hover:stroke-white"
        />
      </svg>

      {/* Arrow */}
      <ChevronUp
        size={18}
        strokeWidth={1.8}
        className="
          relative z-10
          transition-transform duration-300
          group-hover:-translate-y-0.5
        "
      />
    </button>
  );
};

export default ScrollToBottomToTop;
