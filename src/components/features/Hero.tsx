"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HeroBanner } from "@/src/types/home";
import { heroBanners } from "@/src/mock/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onCategoryClick?: (category: string) => void;
}

export function Hero({ onCategoryClick }: HeroProps) {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // SLIDE HORIZONTAL
  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(-${active * 100}%)`;
  }, [active]);

  const prevSlide = () => setActive(prev => (prev === 0 ? heroBanners.length - 1 : prev - 1));
  const nextSlide = () => setActive(prev => (prev === heroBanners.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[360px] md:h-[520px] overflow-hidden">
      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex h-full transition-transform duration-700 ease-out"
      >
        {heroBanners.map((banner) => (
          <div key={banner.id} className="relative min-w-full h-full">
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              priority
              unoptimized
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 md:px-6 text-center text-white">
              {/* TITULO Y SUBTITULO */}
              <h1 className="text-3xl md:text-6xl font-semibold leading-tight mb-4">
                {banner.title}
              </h1>
              <p className="hidden md:block text-lg mb-8 text-white/90">
                {banner.subtitle}
              </p>

              {/* BOTONES */}
              <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
                <button
                  onClick={() => onCategoryClick?.(banner.action)}
                  className="bg-white text-black px-7 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium hover:bg-gray-100 transition"
                >
                  Comprar ahora
                </button>

                <button
                  onClick={() => onCategoryClick?.("ofertas")}
                  className="border border-white  text-white px-8 py-4 text-lg hover:bg-white hover:text-black transition"
                >
                  Ver ofertas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FLECHAS (DESKTOP) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition hover:cursor-pointer"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition hover:cursor-pointer"
      >
        <ChevronRight size={28} />
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full transition-all",
              i === active ? "bg-white w-6 h-2" : "bg-white/50 w-2 h-2  hover:cursor-pointer"
            )}
          />
        ))}
      </div>
    </section>
  );
}
