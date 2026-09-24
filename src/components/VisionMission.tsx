"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const words = ["Vision.", "Planning.", "Mission.", "Strategy."];

export default function VisionMission() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsFading(false);
      }, 500); // half second fade
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="vision-mission" 
      className="relative pt-[180px] pb-[100px] md:pt-[220px] md:pb-[120px] overflow-hidden bg-gradient-to-br from-white via-[#F8F5FF] to-[#F0F5FF]"
    >
      <div className="container-main relative z-10">
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
          
          {/* Ribbon Badge */}
          <div className="bg-white px-6 py-3 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-10 flex items-center gap-2 relative">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-white skew-x-12 rounded-sm hidden sm:block"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-white -skew-x-12 rounded-sm hidden sm:block"></div>
            <span className="text-xl">🏆</span>
            <span className="text-[#071B3A] font-bold text-[14px] md:text-[16px]">
              Empowering businesses to thrive in the digital age.
            </span>
          </div>

          {/* Animated Heading */}
          <h2 className="text-[42px] md:text-[60px] lg:text-[72px] font-extrabold text-[#071B3A] leading-[1.1] tracking-tight mb-8">
            Read About Our{" "}
            <span 
              className={`gradient-text inline-block transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {words[currentWord]}
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-[18px] md:text-[22px] leading-[1.6] max-w-[700px] mx-auto mb-12">
            Dive in and master digital marketing with NovaDigital—learn SEO, ads, content, and more to drive real business results!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 gradient-bg text-white font-bold text-[16px] px-8 py-4 rounded-lg hover:opacity-90 hover:shadow-xl hover:shadow-[#315CF5]/20 transition-all w-full sm:w-auto"
            >
              Log in to Start <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white text-[#071B3A] font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all w-full sm:w-auto"
            >
              Contact US <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
