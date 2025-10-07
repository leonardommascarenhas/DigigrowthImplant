"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Curve from "../components/Curve";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/BackStageSlider/IMG_5183.jpg",
  "/images/BackStageSlider/IMG_7978.jpg",
  "/images/BackStageSlider/IMG_9011.jpg",
  "/images/BackStageSlider/IMG_9052.jpg",
  "/images/BackStageSlider/IMG_9157.jpg",
  "/images/BackStageSlider/IMG_9563.jpg",
  "/images/BackStageSlider/IMG_9603.jpg",
];

export default function BackstageSection() {
  return (
    <section className="relative bg-[#00134d] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <Curve type="convex" position="top" fill="#d5ecfb" height="30px" />

      <div className="max-w-7xl mx-auto relative">
        {/* Título */}
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-10 text-center">
          Bastidores
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-8">
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-80 md:h-[28rem] lg:h-[36rem] overflow-hidden shadow-md rounded-lg">
                <Image
                  src={src}
                  alt={`Backstage ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
