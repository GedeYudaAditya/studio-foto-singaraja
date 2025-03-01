'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    "/img/banner/banner.png",
    "/img/banner/banner.png",
    "/img/banner/banner.png",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-screen"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index} className="relative">
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-screen object-cover"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0  flex items-center justify-center">
            {/* <h1 className="text-white text-4xl md:text-6xl font-bold">
              Studio Foto Singaraja
            </h1> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
