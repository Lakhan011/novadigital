"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(0, testimonials.length - cardsToShow + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchStartX.current - touchEndX.current < -50) prevSlide();
  };

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[60px]">
          <div className="inline-block bg-[#F7F5FF] text-[#A855F7] font-bold text-sm px-4 py-1.5 rounded-full mb-6">
            GROW WITH US
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-bold text-navy leading-[1.1] tracking-tight">
            People Love Our Digital Solutions.<br />
            Here&apos;s the Proof!
          </h2>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Controls */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-[-20px] right-[-20px] z-10 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="w-[50px] h-[50px] rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-navy hover:text-[#315CF5] transition-colors pointer-events-auto z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-[50px] h-[50px] rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-navy hover:text-[#315CF5] transition-colors pointer-events-auto z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Track */}
          <div className="overflow-hidden mx-[-15px] px-[15px] py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
              }}
            >
              {testimonials.map((t) => (
                <div 
                  key={t.id} 
                  className="flex-shrink-0 px-[15px]"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div 
                    className={`h-[260px] md:h-[280px] p-[30px] rounded-[16px] flex flex-col shadow-lg border transition-all ${
                      t.gradient 
                        ? "gradient-bg border-transparent text-white" 
                        : "bg-white border-gray-100 text-navy"
                    }`}
                  >
                    <Quote 
                      size={40} 
                      className={`mb-4 opacity-50 ${t.gradient ? "text-white" : "text-[#315CF5]"}`} 
                    />
                    
                    <p className={`text-[15px] leading-[1.6] mb-6 flex-grow italic ${
                      t.gradient ? "text-white/95" : "text-gray-600"
                    }`}>
                      &quot;{t.quote}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-[50px] h-[50px] rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border-2 border-white/20 relative">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover opacity-50" unoptimized />
                      </div>
                      <div>
                        <h4 className="font-bold text-[16px]">{t.name}</h4>
                        <p className={`text-[13px] ${t.gradient ? "text-white/80" : "text-[#315CF5] font-medium"}`}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? "w-8 h-2.5 bg-[#315CF5]" 
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
