"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Award, MonitorSmartphone, LayoutTemplate, ArrowRight } from 'lucide-react';

const bgImages = [
  '/wave_solution_background_image.webp',
  '/wabe_solution_background_image2.avif',
  '/wabe_solution_background_image3.jpg',
  '/wave_solution_background_image4.webp',
];

export default function WebSolutions() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 mb-16 relative overflow-hidden bg-black">
        {/* Background Images Slider */}
        {bgImages.map((src, index) => (
          <div 
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container-main relative z-10 flex justify-end">
          <div className="text-center md:pr-12 lg:pr-24">
            <h1 className="text-[40px] md:text-[50px] font-bold text-white mb-4 drop-shadow-lg">
              Web Solution
            </h1>
            <div className="text-gray-200 text-[15px] font-medium flex items-center justify-center gap-2 drop-shadow-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-white">Web Solution</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-main mb-24 px-4 md:px-0">
        <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-bold text-navy text-center mb-16 max-w-4xl mx-auto leading-[1.4]">
          Create an online presence that impresses and converts with comprehensive web solutions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          
          {/* Card 1: E-Commerce */}
          <Link href="/e-commerce-web-solution" className="group rounded-[24px] p-8 md:p-10 bg-[#fffce8] hover:bg-gradient-to-b hover:from-[#c265ff] hover:to-[#916bff] transition-all duration-300 flex flex-col h-[380px] shadow-sm hover:shadow-xl cursor-pointer">
            <div className="group-hover:hidden transition-all duration-300">
              <div className="mb-8">
                <Award className="w-12 h-12 text-[#ffb020]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold text-navy mb-4">
                E-Commerce Web Solution
              </h3>
              <p className="text-[#475569] text-[16px] leading-[1.6]">
                Launch your online store with secure, scalable, and user-friendly e-commerce solutions.
              </p>
            </div>
            
            <div className="hidden group-hover:flex flex-col h-full text-white transition-all duration-300 animate-in fade-in zoom-in-95">
              <p className="text-[18px] leading-[1.6] font-medium mt-4">
                Launch your online store with secure, scalable, and user-friendly e-commerce solutions.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex items-center gap-2 group-hover:hidden">
                <span className="text-navy font-bold text-[15px]">Learn More</span>
                <ArrowRight className="w-4 h-4 text-navy" />
              </div>
              <div className="hidden group-hover:block">
                <button className="bg-white text-[#916bff] px-6 py-3 rounded-lg font-bold text-[15px] hover:shadow-lg transition-all w-fit">
                  Learn More
                </button>
              </div>
            </div>
          </Link>

          {/* Card 2: Responsive */}
          <div className="group rounded-[24px] p-8 md:p-10 bg-[#f4f7ff] hover:bg-gradient-to-b hover:from-[#c265ff] hover:to-[#916bff] transition-all duration-300 flex flex-col h-[380px] shadow-sm hover:shadow-xl cursor-pointer">
            <div className="group-hover:hidden transition-all duration-300">
              <div className="mb-8">
                <MonitorSmartphone className="w-12 h-12 text-[#315CF5]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold text-navy mb-4">
                Responsive Web Design
              </h3>
              <p className="text-[#475569] text-[16px] leading-[1.6]">
                Ensure seamless browsing across devices with websites designed for all screen sizes.
              </p>
            </div>

            <div className="hidden group-hover:flex flex-col h-full text-white transition-all duration-300 animate-in fade-in zoom-in-95">
              <p className="text-[18px] leading-[1.6] font-medium mt-4">
                Ensure seamless browsing across devices with websites designed for all screen sizes.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex items-center gap-2 group-hover:hidden">
                <span className="text-navy font-bold text-[15px]">Learn More</span>
                <ArrowRight className="w-4 h-4 text-navy" />
              </div>
              <div className="hidden group-hover:block">
                <button className="bg-white text-[#916bff] px-6 py-3 rounded-lg font-bold text-[15px] hover:shadow-lg transition-all w-fit">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Website Design */}
          <div className="group rounded-[24px] p-8 md:p-10 bg-[#fff5f5] hover:bg-gradient-to-b hover:from-[#c265ff] hover:to-[#916bff] transition-all duration-300 flex flex-col h-[380px] shadow-sm hover:shadow-xl cursor-pointer">
            <div className="group-hover:hidden transition-all duration-300">
              <div className="mb-8">
                <LayoutTemplate className="w-12 h-12 text-[#ff4d8d]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold text-navy mb-4">
                Custom Website Design
              </h3>
              <p className="text-[#475569] text-[16px] leading-[1.6]">
                Tailored web designs that showcase your brand and captivate your audience.
              </p>
            </div>

            <div className="hidden group-hover:flex flex-col h-full text-white transition-all duration-300 animate-in fade-in zoom-in-95">
              <p className="text-[18px] leading-[1.6] font-medium mt-4">
                Tailored web designs that showcase your brand and captivate your audience.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex items-center gap-2 group-hover:hidden">
                <span className="text-navy font-bold text-[15px]">Learn More</span>
                <ArrowRight className="w-4 h-4 text-navy" />
              </div>
              <div className="hidden group-hover:block">
                <button className="bg-white text-[#916bff] px-6 py-3 rounded-lg font-bold text-[15px] hover:shadow-lg transition-all w-fit">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
