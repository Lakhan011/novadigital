"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(1); // 1st open by default

  return (
    <section id="faq" className="section-padding bg-[#F8F8FF]">
      <div className="container-main">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[60px] md:mb-[80px]">
          <div className="inline-block bg-white text-[#315CF5] font-bold text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
            FAQ
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-bold text-navy leading-[1.1] tracking-tight">
            Got Questions?<br />
            We&apos;ve Got Answers!
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[60px]">
          
          {/* LEFT: Accordion */}
          <div className="w-full lg:w-[55%] flex flex-col gap-4">
            {faqData.map((item) => {
              const isActive = activeId === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-[16px] overflow-hidden transition-all duration-300 border ${
                    isActive ? "border-[#315CF5]/20 shadow-[0_10px_30px_rgba(49,92,245,0.08)]" : "border-gray-100 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setActiveId(isActive ? null : item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <span className={`font-bold text-[16px] md:text-[18px] pr-4 transition-colors ${
                      isActive ? "text-[#315CF5]" : "text-navy"
                    }`}>
                      {item.question}
                    </span>
                    
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? "bg-[#315CF5] text-white" : "bg-[#F8F8FF] text-[#071B3A]"
                    }`}>
                      {isActive ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  {/* Answer Panel */}
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                      isActive ? "max-h-[300px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Image Composition */}
          <div className="hidden lg:block w-full lg:w-[45%] relative">
            <div className="relative w-full h-[600px]">
              
              {/* Main Background Blob */}
              <div className="absolute top-[10%] right-[10%] w-[80%] h-[80%] bg-[#315CF5]/5 rounded-full blur-[60px]"></div>

              {/* Image 1 (Main) */}
              <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  Main Image
                </div>
              </div>
              
              {/* Image 2 (Overlapping Secondary) */}
              <div className="absolute bottom-[5%] left-0 w-[60%] h-[55%] rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-[12px] border-[#F8F8FF] bg-gradient-to-br from-purple-100 to-pink-100 z-10">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                  Secondary Image
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute top-[20%] -left-[10%] w-[120px] h-[120px] bg-white rounded-full shadow-2xl flex items-center justify-center z-20 animate-[float_4s_ease-in-out_infinite]">
                <div className="w-[80px] h-[80px] rounded-full gradient-bg flex items-center justify-center text-white font-bold text-2xl">
                  FAQ
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
