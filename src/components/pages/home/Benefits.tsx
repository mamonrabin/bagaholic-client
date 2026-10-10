import Image from "next/image";
import { Headphones, SearchCheck, WalletCards } from "lucide-react";

import firstIcon from "@/assets/icons/bangladesh-map-public-domain.png";

const benefits = [
  {
    title: "Nationwide Delivery",
    description: "Delivered across Bangladesh",
    icon: (
      <Image
        src={firstIcon}
        alt="Bangladesh"
        width={42}
        height={42}
        className="h-[22px] w-[22px] object-contain"
        style={{
          filter:
            "invert(16%) sepia(96%) saturate(4368%) hue-rotate(347deg) brightness(88%) contrast(103%)",
        }}
      />
    ),
  },
  {
    title: "Cash on Delivery",
    description: "Pay when your order arrives",
    icon: <WalletCards size={18} strokeWidth={1.4} />,
  },
  {
    title: "Quality Selected",
    description: "Thoughtfully curated handbags",
    icon: <SearchCheck size={18} strokeWidth={1.4} />,
  },
  {
    title: "Friendly Support",
    description: "Helpful service before and after purchase",
    icon: <Headphones size={18} strokeWidth={1.4} />,
  },
];

export default function Benefits() {
  return (
    <section
      className="bg-[#FFF9F6] py-7 sm:py-8 md:py-10 border-b border-primary/10"
      aria-label="Shopping benefits"
    >
      <div className="site-container">
        <div className="grid grid-cols-2 divide-x divide-y divide-primary/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center justify-center text-center gap-4 px-4 py-5 sm:px-6 lg:px-7 lg:py-2"
            >
              {/* Icon */}
              <span className="flex h-10 w-10 bg-white border border-primary/20 rounded-full shrink-0 items-center justify-center text-primary">
                {benefit.icon}
              </span>

              {/* Content */}
              <div className="min-w-0">
                <h2 className="block font-heading text-xl font-extrabold tracking-wider leading-5 text-primary">
                  {benefit.title}
                </h2>

                <span className="mt-1 block font-sans text-[12px] mt-2 leading-[18px] text-[#777]">
                  {benefit.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
