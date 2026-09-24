"use client";

import { useEffect, useRef, useState } from "react";
import LeadForm from "./LeadForm";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number;
          const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative w-full py-[100px] md:py-[140px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[#071B3A] overflow-hidden">
        {/* Simulating dark image background */}
        <div className="absolute inset-0 bg-[url('/images/why-us-bg-placeholder.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A] via-[#071B3A]/95 to-[#071B3A]/80"></div>
        
        {/* Decorative blur */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#315CF5] opacity-20 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[55%]">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 text-white font-bold text-[12px] px-4 py-1.5 rounded-full mb-6">
              WHY CHOOSE US
            </div>
            
            <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Empowering Businesses<br />
              With <span className="gradient-text bg-clip-text text-transparent">Digital Excellence</span>
            </h2>
            
            <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-[600px]">
              Unlock the potential of your brand with our expert digital marketing and technology solutions. We deliver results that matter.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-8">
              {[
                { end: 3, label: "Years Experience" },
                { end: 50, label: "Projects Completed" },
                { end: 40, label: "Happy Clients" },
                { end: 10, label: "Services" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-[40px] md:text-[48px] font-bold text-white mb-1">
                    <AnimatedCounter end={stat.end} suffix="+" duration={2000} />
                  </div>
                  <div className="text-gray-400 font-medium text-[15px] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - FORM */}
          <div className="w-full lg:w-[45%] max-w-[480px] mx-auto lg:ml-auto">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
