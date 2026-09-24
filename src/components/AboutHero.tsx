"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  const fullText = "NovaDigital";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      setDisplayText((current) => {
        if (!isDeleting) {
          // Typing
          if (current.length < fullText.length) {
            setTypingSpeed(150);
            return fullText.slice(0, current.length + 1);
          } else {
            // Finished typing, pause before deleting
            setTypingSpeed(3000);
            setIsDeleting(true);
            return current;
          }
        } else {
          // Deleting
          if (current.length > 0) {
            setTypingSpeed(100);
            return fullText.slice(0, current.length - 1);
          } else {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(500); // pause before starting to type again
            return "";
          }
        }
      });
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section 
      id="about" 
      className="relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] overflow-hidden bg-gradient-to-br from-white via-[#F0F5FF] to-[#F8F5FF]"
    >
      <div className="container-main relative z-10">
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
          
          {/* Ribbon Badge */}
          <div className="bg-white px-6 py-3 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-10 flex items-center gap-2 relative">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-white skew-x-12 rounded-sm hidden sm:block"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-white -skew-x-12 rounded-sm hidden sm:block"></div>
            <span className="text-xl">🏆</span>
            <span className="text-[#071B3A] font-bold text-[14px] md:text-[16px]">
              The Future of Digital Growth
            </span>
          </div>

          {/* Animated Heading */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-extrabold text-[#071B3A] leading-[1.2] tracking-tight mb-8 flex flex-wrap justify-center items-center">
            <span className="mr-3 sm:mr-4">Think Digital, Think</span>
            <span className="gradient-text flex items-center min-h-[1.2em]">
              {displayText}
              <span className="text-[#315CF5] animate-[pulse_1s_infinite] font-light ml-1 sm:ml-2">|</span>
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-[18px] md:text-[22px] leading-[1.6] max-w-[700px] mx-auto mb-12">
            Helping businesses adapt, grow, and lead in an ever-evolving digital marketplace.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
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
