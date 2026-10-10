import sideImage from "@/assets/category/cat2.avif";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-[#FFF9F6]">
      <div className="grid lg:grid-cols-2 gap-4 bg-[#FBF1F2]">
        <div>
          <Image src={sideImage} alt="image" width={800} height={800} className="h-full w-full" />
        </div>
        <div className="md:py-20 py-12 md:px-20 px-4">
          <p className="mb-5 flex items-center gap-3 font-sans md:text-xs text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" />
            The Bagaholic point of view
          </p>
          <h1 className="font-heading md:text-[50px] text-[40px] text-[#251A1D] font-bold md:leading-14 leading-10 tracking-tight text-foreground">
            Affordable luxury, thoughtfully <br/>carried.
          </h1>
          <p className="mt-6 md:text-base text-sm text-neutral-500 leading-6">
            We look for graceful structure, practical compartments, comfortable
            handles and finishes that elevate the everyday.
          </p>
           <p className="mt-6 md:text-base text-sm text-neutral-500 leading-6">
            The result is a focused collection made for women moving between
            work, study, family and celebration without leaving personal style
            behind.
          </p>

           <Link
                href="/new-arrivals"
                className="group md:mt-6 mt-10 relative inline-flex items-center justify-center overflow-hidden border border-primary rounded bg-primary/10 px-7 py-4 font-sans text-xs font-bold uppercase tracking-widest text-primary transition-colors duration-500"
              >
                {/* Primary background */}
                <span className="absolute inset-0 origin-right scale-x-100 bg-primary transition-transform duration-500 ease-in-out group-hover:scale-x-0" />

                <span className="relative z-10 transition-colors duration-500 text-white group-hover:text-primary">
                 Discover our story
                </span>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
