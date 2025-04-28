'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function HeroSlider() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const slides = [
    { desktop: "/img/banner/banner3.png", mobile: "/img/banner/banner3Hp.png" },
    { desktop: "/img/banner/banner4.png", mobile: "/img/banner/banner4Hp.png" },
    { desktop: "/img/banner/banner5.png", mobile: "/img/banner/banner5Hp.png" },
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
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <Image
            src={isMobile ? slide.mobile : slide.desktop}
            alt={`Slide ${index + 1}`}
            className="w-full h-screen object-cover"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Optional Text */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
