
"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";

interface ProductGalleryProps {
  productImages: string[];
}

const ProductGallery = ({ productImages }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  if (!productImages.length) return null;

  return (
    <div className="min-w-0">
      {/* Main Slider */}
      <div className="relative group">
        <Swiper
          modules={[Thumbs]}
          spaceBetween={10}
          loop={productImages.length > 1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed
                ? thumbsSwiper
                : null,
          }}
          onSlideChange={(swiper) => {
            setActiveImage(swiper.realIndex);
            setIsZooming(false);
          }}
          className="rounded-sm"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative overflow-hidden bg-[#f8f1ed] cursor-zoom-in"
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

                  setZoomPosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                  });
                }}
              >
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                 
                  priority={index === 0}
                width={800}
                height={800}
                  className="object-cover transition-transform duration-200"
                  style={{
                    transform: isZooming ? "scale(2)" : "scale(1)",
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bestseller */}
        <span className="pointer-events-none absolute z-10 left-4 top-4 bg-[#850020] px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-white">
          Bestseller
        </span>

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          aria-pressed={wishlist}
          onClick={() => setWishlist(!wishlist)}
          className="absolute z-10 right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white text-[#850020] shadow-sm transition hover:bg-[#850020] hover:text-white"
        >
          <Heart
            size={18}
            fill={wishlist ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Thumbnail Slider */}
      <div className="mt-4">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          watchSlidesProgress
          className="product-thumbs"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative aspect-square cursor-pointer overflow-hidden rounded-sm border transition ${
                  activeImage === index
                    ? "border-[#850020] ring-1 ring-[#850020]"
                    : "border-neutral-200 hover:border-[#850020]/50"
                }`}
              >
                <Image
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                 
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
