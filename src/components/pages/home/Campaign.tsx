import Image from "next/image";
import campaing from "@/assets/products/campaing.avif";
import Link from "next/link";

const Campaign = () => {
  return (
    <div>
      <div>
        <Image
          src={campaing}
          alt="image"
          width={1600}
          height={1600}
          className="w-full h-fit"
        />
      </div>

      <div className="bg-primary site-container md:py-20 py-12 md:-mt-30 z-50 relative">
        <div className="flex md:flex-row flex-col gap-4 md:items-center md:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-px w-8 bg-white" />
            Easy shopping across Bangladesh
          </p>
          <h1 className="font-heading md:text-[45px] text-[30px] text-white font-bold  tracking-tight">
            Find Your Next Everyday Favorite
          </h1>

          <p className="text-white/80 font-medium text-base">
            Premium style, nationwide delivery and Cash on Delivery.
          </p>
          </div>

          <Link
            href="/new-arrivals"
            className="group mt-4 md:w-auto w-[240px] relative inline-flex items-center justify-center overflow-hidden border border-white rounded bg-white/10 px-7 py-4 font-sans text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-500"
          >
            {/* Primary background */}
            <span className="absolute inset-0 origin-right scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-0" />

            <span className="relative z-10 transition-colors duration-500 text-primary group-hover:text-white">
              Shop all handbags
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
