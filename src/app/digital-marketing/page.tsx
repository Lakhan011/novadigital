import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DigitalMarketingPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container-main text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Digital Marketing</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-16">
          <Link href="/" className="hover:text-[#315CF5] transition-colors">Home</Link>
          <span>&gt;</span>
          <span>Digital Marketing</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-navy max-w-4xl mx-auto mb-16">
          Boost your brand's reach with tailored digital marketing strategies designed to drive growth and engagement.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* SEO Card */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#E293FF] to-[#A05CFF] text-white min-h-[300px] flex flex-col hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-bold mb-4 mt-8">
              Drive organic growth with tailored SEO strategies that boost your visibility and rankings.
            </h3>
            <div className="mt-auto">
              <Link href="/seo-services/" className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-50 transition-colors inline-block">
                Learn More
              </Link>
            </div>
          </div>

          {/* Social Media Marketing */}
          <Link href="/social-media-marketing" className="p-8 rounded-xl bg-[#FFF5F8] min-h-[300px] flex flex-col hover:-translate-y-1 transition-transform border border-gray-100 group block">
            <div className="w-12 h-12 bg-[#F3D7FF] rounded-lg mb-6 flex items-center justify-center">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="3" width="14" height="18" rx="2" fill="#4B5563"/>
                <rect x="8" y="7" width="3" height="3" fill="#3B82F6"/>
                <rect x="13" y="7" width="3" height="3" fill="#EAB308"/>
                <rect x="8" y="11" width="3" height="3" fill="#EF4444"/>
                <rect x="13" y="11" width="3" height="3" fill="#3B82F6"/>
                <rect x="8" y="15" width="3" height="3" fill="#EAB308"/>
                <rect x="13" y="15" width="3" height="3" fill="#EF4444"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-[#315CF5] transition-colors">Social Media Marketing</h3>
            <p className="text-[#475569]">
              Build your brand and engage your audience on platforms they love with data-driven campaigns.
            </p>
            <div className="mt-auto pt-4">
              <span className="text-navy font-bold flex items-center gap-2 group-hover:text-[#315CF5] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Google Ads Solutions */}
          <Link href="/google-ads-solutions" className="block p-8 rounded-2xl bg-[#FFF0F0] min-h-[300px] flex flex-col hover:-translate-y-1 transition-transform border border-gray-100 group">
             <div className="w-12 h-12 bg-[#FFD6D6] rounded-xl mb-8 flex items-center justify-center">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#EF4444"/>
                 <path d="M2 17L12 22L22 17" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M2 12L12 17L22 12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-[#315CF5] transition-colors">Google Ads Solutions</h3>
            <p className="text-[#475569] leading-relaxed">
              Maximize ROI with expertly managed Google Ads that connect you with ready-to-convert customers.
            </p>
            <div className="mt-auto pt-6">
              <span className="text-navy font-bold flex items-center gap-2 group-hover:text-[#315CF5] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Meta */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#E293FF] to-[#A05CFF] text-white min-h-[300px] flex flex-col hover:-translate-y-1 transition-transform">
             <h3 className="text-xl font-bold mb-4 mt-8">
              Leverage the power of Meta platforms to create impactful ad campaigns that resonate.
            </h3>
            <div className="mt-auto pt-4">
              <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Google Map Promotion */}
          <div className="p-8 rounded-xl bg-[#FFFFE0] min-h-[300px] flex flex-col hover:-translate-y-1 transition-transform border border-gray-100 group cursor-pointer">
            <h3 className="text-xl font-bold text-navy mb-4 mt-8 group-hover:text-[#315CF5] transition-colors">Google Map Promotion</h3>
            <p className="text-[#475569]">
              Get discovered locally with strategic Google Map listings optimized for visibility.
            </p>
            <div className="mt-auto pt-4">
              <span className="text-navy font-bold flex items-center gap-2 group-hover:text-[#315CF5] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Content Writing Services */}
          <div className="p-8 rounded-xl bg-[#F0F8FF] min-h-[300px] flex flex-col hover:-translate-y-1 transition-transform border border-gray-100 group cursor-pointer">
            <h3 className="text-xl font-bold text-navy mb-4 mt-8 group-hover:text-[#315CF5] transition-colors">Content Writing Services</h3>
            <p className="text-[#475569]">
              Craft compelling, SEO-friendly content that engages, informs, and converts.
            </p>
            <div className="mt-auto pt-4">
              <span className="text-navy font-bold flex items-center gap-2 group-hover:text-[#315CF5] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
