"use client";

import { Target, BarChart2, TrendingUp, Search, Crosshair, DollarSign } from "lucide-react";

export default function GoogleAdsSolutions() {
  return (
    <section id="google-ads-solutions" className="w-full flex flex-col pt-24 lg:pt-32 pb-20">
      {/* 1. HERO SECTION */}
      <div className="relative w-full bg-[#FFF0F0] py-20 lg:py-32 overflow-hidden">
        <div className="container-main relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-[#FFD6D6] text-red-600 font-bold text-sm px-4 py-2 rounded-full mb-6">
            Google Ads Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#071B3A] leading-[1.15] tracking-tight mb-6">
            Drive Instant Traffic & Maximize ROI
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
            Reach your ideal customers at the exact moment they’re searching for your products or services. Our expertly managed Google Ads campaigns deliver measurable results and high-quality leads.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#EF4444] hover:bg-red-700 transition-colors text-white font-bold py-4 px-10 rounded-lg text-lg"
          >
            Start Your Campaign
          </a>
        </div>
      </div>

      {/* 2. BENEFITS GRID */}
      <div className="container-main py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071B3A] mb-4">Why Invest in Google Ads?</h2>
          <p className="text-gray-500">Stop waiting for traffic. Instantly place your business at the top of Google search results and capture high-intent buyers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, imgSrc: "/targetting_images.png", title: "Targeted Audience", desc: "Show your ads only to people searching for what you offer, ensuring high relevance and better conversion rates." },
            { icon: BarChart2, imgSrc: "/measurable_image.jpg", title: "Measurable Results", desc: "Track every click, impression, and conversion. Know exactly where your budget is going and the ROI it produces." },
            { icon: DollarSign, imgSrc: "/cost_controll_image.png", title: "Cost Control", desc: "Set your own budget and only pay when someone actually clicks on your ad (PPC). No wasted ad spend." },
            { icon: Search, imgSrc: "/instance_images.jpg", title: "Instant Visibility", desc: "Unlike SEO which takes time, Google Ads places you at the top of search results immediately upon launch." },
            { icon: Crosshair, imgSrc: "/gobal_reach.jpg", title: "Local & Global Reach", desc: "Whether you want to target a 5-mile radius or a global market, we can pinpoint your ideal demographics." },
            { icon: TrendingUp, imgSrc: "/scable_groth.jpg", title: "Scalable Growth", desc: "Once we find a winning campaign formula, we scale it up to continuously drive more leads and sales." },
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-300 group flex flex-col items-start">
              <div className={`mb-8 group-hover:scale-105 transition-transform duration-300 origin-left ${benefit.imgSrc ? 'w-full' : 'w-20 h-20 rounded-xl flex items-center justify-center bg-[#FFF0F0] text-red-500'}`}>
                {benefit.imgSrc ? (
                  <img src={benefit.imgSrc} alt={benefit.title} className="w-full h-auto object-contain rounded-xl transition-all duration-300 group-hover:drop-shadow-[0_10px_15px_rgba(49,92,245,0.2)]" />
                ) : (
                  <benefit.icon size={36} />
                )}
              </div>
              <h3 className="text-xl font-bold text-[#315CF5] mb-3">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* 3. CTA SECTION */}
      <div className="bg-[#EF4444] py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to dominate Google search results?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">Let our certified Google Ads experts build a customized strategy that turns clicks into paying customers.</p>
          <a href="#contact" className="inline-block bg-white text-[#EF4444] font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
            Get a Free Ads Audit
          </a>
        </div>
      </div>
    </section>
  );
}
