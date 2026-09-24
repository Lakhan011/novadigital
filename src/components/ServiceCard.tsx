"use client";

import Link from "next/link";
import { Megaphone, Monitor, Smartphone, Palette } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const icons = {
  Megaphone,
  Monitor,
  Smartphone,
  Palette,
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = icons[service.icon as keyof typeof icons] || Monitor;
  
  // Make the second card (index 1) featured
  const isFeatured = index === 1;

  return (
    <div
      className={`group relative flex flex-col p-[30px] rounded-[10px] min-h-[440px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-xl ${
        isFeatured 
          ? "gradient-bg shadow-lg shadow-[#315CF5]/20" 
          : "bg-white"
      }`}
      style={!isFeatured ? { backgroundColor: service.bgColor } : undefined}
    >
      <div 
        className={`w-[60px] h-[60px] rounded-[10px] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
          isFeatured ? "bg-white/20" : "bg-white"
        }`}
      >
        <IconComponent 
          size={30} 
          className={isFeatured ? "text-white" : "text-[#315CF5]"} 
          strokeWidth={1.5} 
        />
      </div>

      <h3 
        className={`text-[22px] font-bold mb-4 ${
          isFeatured ? "text-white" : "text-navy"
        }`}
      >
        {service.title}
      </h3>

      <p 
        className={`text-[15px] leading-[1.6] mb-8 flex-grow ${
          isFeatured ? "text-white/90" : "text-gray-600"
        }`}
      >
        {service.description}
      </p>

      <div className="mt-auto">
        <Link 
          href={`/${service.id}/`}
          className={`inline-flex items-center font-bold text-[15px] transition-all duration-300 ${
            isFeatured 
              ? "bg-white text-[#315CF5] px-5 py-2.5 rounded-lg hover:bg-gray-50" 
              : "text-[#315CF5] hover:gap-2"
          }`}
        >
          {service.cta}
        </Link>
      </div>
    </div>
  );
}
