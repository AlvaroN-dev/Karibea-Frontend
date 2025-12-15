"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HeroBanner } from "@/src/types/home";
import { heroBanners } from "@/src/mock/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
  onCategoryClick?: (category: string) => void;
}

export function Hero({ onCategoryClick }: HeroProps) {
  const [active, setActive] = useState(1); // Empieza en 1 por el clon
  const [isTransition, setIsTransition] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Clonar primera y última imagen para slider infinito
  const slides = [
    heroBanners[heroBanners.length - 1], // último al principio (clon)
    ...heroBanners, // todas las originales
    heroBanners[0], // primero al final (clon)
  ];

  // AUTOPLAY
  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  // SLIDE HORIZONTAL
  useEffect(() => {
    if (!sliderRef.current) return;
    
    sliderRef.current.style.transition = isTransition 
      ? 'transform 700ms ease-out' 
      : 'none';
    
    sliderRef.current.style.transform = `translateX(-${active * 100}%)`;
    
    // Reset al llegar a los clones
    if (active === 0) {
      // Al llegar al primer clon (última imagen real)
      setTimeout(() => {
        setIsTransition(false);
        setActive(heroBanners.length);
        setTimeout(() => setIsTransition(true), 50);
      }, 700);
    } else if (active === slides.length - 1) {
      // Al llegar al último clon (primera imagen real)
      setTimeout(() => {
        setIsTransition(false);
        setActive(1);
        setTimeout(() => setIsTransition(true), 50);
      }, 700);
    }
  }, [active, isTransition, slides.length]);

  const prevSlide = () => {
    setIsTransition(true);
    setActive(prev => prev - 1);
    startAutoplay();
  };

  const nextSlide = () => {
    setIsTransition(true);
    setActive(prev => prev + 1);
    startAutoplay();
  };

  const goToSlide = (index: number) => {
    setIsTransition(true);
    setActive(index + 1); // +1 por el clon inicial
    startAutoplay();
  };

  return (
    <section className="relative w-full h-[360px] md:h-[520px] overflow-hidden">
      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex h-full"
      >
        {slides.map((banner, index) => (
          <div key={`${banner.id}-${index}`} className="relative min-w-full h-full">
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              priority={index === 1} // Prioriza la primera imagen real
              unoptimized
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* CONTENT - Solo mostrar contenido en slides reales */}
            {(index > 0 && index < slides.length - 1) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 md:px-6 text-center text-white">
                <h1 className="text-3xl md:text-6xl font-semibold leading-tight mb-4">
                  {banner.title}
                </h1>
                <p className="hidden md:block text-lg mb-8 text-white/90">
                  {banner.subtitle}
                </p>

                <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
                  <Link href={'/productos'}>
                    <button
                      onClick={() => onCategoryClick?.(banner.action)}
                      className="bg-white text-black px-7 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium hover:bg-gray-100 transition"
                    >
                      Comprar ahora
                    </button>
                  </Link>
                  <Link href={'/ofertas'}>    
                    <button
                      onClick={() => onCategoryClick?.("ofertas")}
                      className="border border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-black transition"
                    >
                      Ver ofertas
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FLECHAS */}
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
            onClick={() => goToSlide(i)}
            className={cn(
              "rounded-full transition-all",
              i === active - 1 // Ajustar índice por el clon
                ? "bg-white w-6 h-2" 
                : "bg-white/50 w-2 h-2 hover:cursor-pointer"
            )}
          />
        ))}
      </div>
    </section>
  );
}