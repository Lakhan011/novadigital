"use client";

import { CheckCircle2, MessageCircle, Heart, Share2, ThumbsUp, Smartphone, ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function SocialMediaMarketing() {
  return (
    <section id="social-media-marketing" className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <div className="relative w-full bg-[#F8F9FE] py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[140%] bg-gradient-to-b from-purple-100/50 to-blue-50/50 rounded-full blur-3xl opacity-70"></div>
        </div>
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#071B3A] leading-[1.15] tracking-tight">
                Social Media Marketing Services
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                We craft data-driven strategies that increase engagement, grow your following, and turn likes into loyal customers. From creative content creation to paid advertising, we help you build a strong online presence across all platforms.
              </p>
              <a
                href="#contact"
                className="mt-2 bg-gradient-to-r from-[#9060FF] to-[#606BFF] hover:opacity-90 transition-opacity text-white font-bold py-3 px-8 rounded-lg"
              >
                Let&apos;s Chat
              </a>
            </div>
            
            {/* Abstract Hero Illustration */}
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative w-[220px] h-[420px] bg-white border-[10px] border-[#1E293B] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden z-20">
                <div className="absolute top-0 w-full h-6 bg-[#1E293B] rounded-b-xl flex justify-center">
                  <div className="w-16 h-4 bg-[#0F172A] rounded-b-lg"></div>
                </div>
                <div className="flex-1 bg-gradient-to-b from-blue-50 to-purple-50 p-4 pt-10 flex flex-col gap-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#315CF5] to-[#A855F7] rounded-xl"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded-full"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded-full"></div>
                  <div className="w-full h-24 bg-white rounded-xl shadow-sm mt-4"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-bounce z-30" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500"></div>
              </div>
              <div className="absolute bottom-20 left-4 w-14 h-14 bg-[#1877F2] rounded-full shadow-xl flex items-center justify-center animate-bounce z-30" style={{ animationDuration: '4s' }}>
                <span className="text-white font-bold text-2xl">f</span>
              </div>
              <div className="absolute top-32 right-12 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12 z-10">
                <ArrowUpRight size={40} className="text-red-500" strokeWidth={3} />
              </div>
              <div className="absolute bottom-10 right-20 w-12 h-12 bg-black rounded-full shadow-xl flex items-center justify-center z-30">
                <span className="text-white font-bold">𝕏</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TEXT INTRO SECTION */}
      <div className="w-full bg-white py-20 lg:py-24">
        <div className="container-main flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#071B3A] leading-tight mb-8">
            Is Investing in <span className="text-[#315CF5]">Social Media Marketing</span> Services Worth It?
          </h2>
          <div className="flex flex-col gap-6 text-gray-700 text-lg md:text-[19px] leading-relaxed font-medium">
            <p>
              Absolutely! Did you know that about 54% of social media users browse platforms to research products? Even more impressive, 71% of consumers who have a positive interaction with a brand on social media are likely to recommend it to friends and family.
            </p>
            <p>
              Social media marketing is the key to tapping into this audience, helping you attract new customers and generate quick inquiries through targeted ads.
            </p>
            <p className="font-bold text-[#071B3A]">
              With over 70% of marketers recognizing social media as a top marketing destination, it&apos;s clear that these platforms are indispensable for business growth. Isn&apos;t it time to make the most of this opportunity?
            </p>
          </div>
        </div>
      </div>

      {/* 3. PLATFORM SERVICES (Dark Blue Container) */}
      <div className="w-full bg-gradient-to-b from-[#1C46A8] to-[#123282] py-20 lg:py-32 flex flex-col gap-32 overflow-hidden">
        
        {/* Facebook */}
        <div className="container-main relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-sm opacity-90 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            {/* Left: FB Illustration */}
            <div className="relative h-[450px] flex items-center justify-center perspective-[1000px]">
              <div className="w-[260px] h-[500px] bg-white rounded-[2rem] shadow-2xl p-4 transform rotate-y-12 rotate-z-[-5deg] rotate-x-12">
                <div className="w-full h-full border-2 border-gray-100 rounded-xl flex flex-col overflow-hidden">
                  <div className="h-12 bg-[#1877F2] flex items-center px-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#1877F2] font-bold text-xs">f</span>
                    </div>
                  </div>
                  <div className="p-3 flex gap-2 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/4"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-3 flex flex-col gap-3">
                    <div className="w-full h-32 bg-gray-200 rounded-lg"></div>
                    <div className="flex justify-between px-2 text-gray-400">
                      <ThumbsUp size={16} />
                      <MessageCircle size={16} />
                      <Share2 size={16} />
                    </div>
                    <div className="w-full h-24 bg-gray-200 rounded-lg mt-2"></div>
                  </div>
                </div>
              </div>
              {/* Floating emojis/icons */}
              <div className="absolute top-20 left-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce z-20">👍</div>
              <div className="absolute bottom-32 left-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce z-20" style={{ animationDelay: '1s' }}>❤️</div>
            </div>

            {/* Right: Text */}
            <div className="flex flex-col gap-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Facebook Marketing Services</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                Boost your brand&apos;s presence on Facebook through effective page management, daily posts, and targeted ads.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Facebook page setup and management",
                  "Social media graphic designs for daily posting",
                  "Facebook Ads management",
                  "Brand page management"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[17px] text-blue-50">
                    <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="container-main relative">
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-sm opacity-90 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            {/* Left: Text */}
            <div className="flex flex-col gap-6 text-white order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Instagram Marketing Services</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                Stand out on Instagram with engaging visuals, strategic campaigns, and impactful brand page management.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Instagram brand page management",
                  "Social media graphic designs for Instagram posts",
                  "Organic and paid Instagram campaigns",
                  "Engagement optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[17px] text-blue-50">
                    <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: IG Illustration */}
            <div className="relative h-[500px] flex items-center justify-center gap-4 order-1 lg:order-2">
              {/* Phone 1 */}
              <div className="w-[160px] h-[340px] bg-white rounded-3xl shadow-2xl p-2 z-10 transform -rotate-6 translate-y-4 border-4 border-[#1E293B]">
                <div className="w-full h-full rounded-xl overflow-hidden flex flex-col">
                  <div className="h-10 border-b border-gray-100 flex items-center px-3 gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 p-[2px]">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-pink-500 to-purple-600"></div>
                  <div className="h-10 bg-white flex items-center justify-between px-4 text-gray-400">
                    <Heart size={14} />
                    <MessageCircle size={14} />
                    <Share2 size={14} />
                  </div>
                </div>
              </div>
              {/* Phone 2 */}
              <div className="w-[180px] h-[380px] bg-white rounded-3xl shadow-2xl p-2 z-20 border-4 border-[#1E293B]">
                <div className="w-full h-full rounded-xl overflow-hidden flex flex-col">
                  <div className="h-10 border-b border-gray-100 flex items-center px-3 gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 p-[2px]">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div className="h-12 bg-white flex items-center justify-between px-5 text-gray-800">
                    <Heart size={18} className="text-red-500 fill-red-500" />
                    <MessageCircle size={18} />
                    <Share2 size={18} />
                  </div>
                </div>
              </div>
              {/* Phone 3 */}
              <div className="w-[160px] h-[340px] bg-white rounded-3xl shadow-2xl p-2 z-10 transform rotate-6 translate-y-4 border-4 border-[#1E293B] hidden sm:block">
                <div className="w-full h-full rounded-xl overflow-hidden flex flex-col">
                  <div className="h-10 border-b border-gray-100 flex items-center justify-center">
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="flex-1 bg-white p-2 flex flex-col gap-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-xs"><UserIcon /></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Twitter */}
        <div className="container-main relative pb-10">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-sm opacity-90 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            {/* Left: TW Illustration */}
            <div className="relative h-[450px] flex items-center justify-center gap-6">
              {/* Tweet Card */}
              <div className="w-[300px] md:w-[350px] bg-white rounded-2xl shadow-2xl p-6 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1DA1F2]"></div>
                  <div>
                    <div className="font-bold text-gray-800">James L.</div>
                    <div className="text-gray-400 text-sm">@jam_es123 • Aug 5, 2020</div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="w-full h-[150px] bg-gradient-to-br from-[#1DA1F2] to-blue-700 rounded-xl mb-4"></div>
                <div className="flex justify-between text-gray-400 px-2">
                  <MessageCircle size={18} />
                  <Share2 size={18} />
                  <Heart size={18} />
                </div>
              </div>
              
              {/* Mobile Phone */}
              <div className="hidden sm:block w-[180px] h-[360px] bg-white rounded-3xl shadow-xl p-2 z-10 border-4 border-[#1E293B]">
                <div className="w-full h-full rounded-xl overflow-hidden flex flex-col border border-gray-100">
                  <div className="h-32 bg-gray-50 border-b border-gray-100 p-3">
                    <div className="w-10 h-10 rounded-full bg-[#1DA1F2] mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-20 mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="flex-1 bg-white p-3 space-y-3">
                    <div className="h-16 bg-[#1DA1F2] rounded-lg opacity-80"></div>
                    <div className="h-16 bg-blue-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex flex-col gap-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Twitter Marketing Services</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                Trend and engage on Twitter with customized organic and paid marketing campaigns.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Organic and paid Twitter campaigns",
                  "Customized Twitter marketing strategies",
                  "Trend-focused campaigns",
                  "Twitter brand page management"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[17px] text-blue-50">
                    <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* 4. YOUTUBE MARKETING SECTION (Dark Gray Background) */}
      <div className="w-full bg-gradient-to-b from-[#4A4F5C] to-[#3B404E] py-20 lg:py-32 relative overflow-hidden">
        <div className="container-main relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFB800] via-[#FF3366] to-[#6600FF] rounded-full opacity-90 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            {/* Left: YouTube Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-[480px] bg-white p-3 rounded-lg shadow-2xl relative z-20">
                {/* Video Area */}
                <div className="w-full aspect-video bg-[#181818] relative group overflow-hidden">
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600">
                    <div className="h-full bg-red-600 w-1/3 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-8 h-3 bg-white/50 rounded-sm"></div>
                  </div>
                </div>
                {/* Meta Details */}
                <div className="mt-4 flex flex-col gap-3 pb-2">
                  <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <div className="w-1/4 h-2 bg-gray-200 rounded"></div>
                    <div className="flex gap-4 text-gray-400">
                      <ThumbsUp size={16} />
                      <Share2 size={16} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-500"></div>
                      <div className="flex flex-col gap-1">
                        <div className="w-24 h-2 bg-gray-200 rounded"></div>
                        <div className="w-16 h-2 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase">Subscribe 2.0M</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex flex-col gap-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">YouTube Marketing Services</h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Capture your audience with optimized videos, creative content, and strategic YouTube channel management.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "YouTube channel management",
                  "Video optimization for better reach",
                  "Creative content planning",
                  "Organic and paid YouTube campaigns"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[17px] text-gray-100">
                    <CheckCircle2 className="text-white mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ELEVATE YOUR BRAND (Dark Section) */}
      <div className="w-full bg-[#363636] py-20">
        <div className="container-main flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center max-w-4xl leading-snug mb-6">
            Elevate Your Brand and Connect with Customers Through Social Media Marketing
          </h2>
          <p className="text-gray-300 text-center max-w-5xl text-[17px] leading-relaxed mb-12">
            The key benefit of Social Media Marketing Services is that it allows you to connect with your online audience, promote your products or services, and generate thousands of leads through trusted platforms. If you're unsure whether to invest in social media marketing for your business in India, here are some advantages to consider:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 w-full max-w-6xl mb-12">
            {[
              "Boost Brand Awareness",
              "Increase Conversion Rates",
              "Build Strong Brand Loyalty",
              "Gain Valuable Market Insights",
              "Drive More Traffic",
              "Affordable Marketing Solutions",
              "Establish Brand Authority",
              "Detailed Reporting for Success"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#D946EF] font-bold mt-0.5">✓</span>
                <span className="text-white text-[16px]">{benefit}</span>
              </div>
            ))}
          </div>
          
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#DF508E] to-[#8C1A8C] hover:opacity-90 transition-opacity text-white font-bold py-3 px-8 rounded flex items-center justify-center shadow-lg"
          >
            Get in touch with us today
          </a>
        </div>
      </div>

      {/* 6. TAILORED STRATEGIES (Light Blue) */}
      <div className="w-full bg-[#F4F9FF] py-24">
        <div className="container-main flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071B3A] text-center mb-6">
            Tailored Social Media Strategies for Brand Success
          </h2>
          <p className="text-gray-500 text-center max-w-3xl text-lg mb-16">
            Our Social Media Marketing Strategy is all about making your brand shine online! Here's what we do to help you connect with your audience and achieve your goals:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl w-full">
            {[
              {
                title: "Social Media Strategy",
                desc: "We create a clear plan to reach your goals, define who your audience is, and decide what kind of content to post.",
                icon: "📈"
              },
              {
                title: "Profile Setup & Optimization",
                desc: "We make sure your social media profiles (like Facebook, Instagram, and LinkedIn) look great and include all the right information.",
                icon: "⚙️"
              },
              {
                title: "Content Calendar",
                desc: "We plan and schedule your posts ahead of time to make sure you stay consistent and active online.",
                icon: "📅"
              },
              {
                title: "Paid Advertising Campaigns",
                desc: "We run targeted ads on social media to help you reach more people and meet specific goals.",
                icon: "💵"
              },
              {
                title: "Performance Tracking & Insights",
                desc: "We regularly monitor and analyze your social media performance, providing reports that measure success and offer improvement suggestions.",
                icon: "📊"
              },
              {
                title: "Audience Engagement",
                desc: "We interact with your followers by responding to comments and messages, making sure they feel heard and valued.",
                icon: "❤️"
              },
              {
                title: "Content Creation & Curation",
                desc: "We create fun, engaging posts with images, videos, and text. We also share great content from other sources that your audience will love.",
                icon: "🎨"
              },
              {
                title: "Interactive Campaigns & Giveaways",
                desc: "We organize exciting contests, giveaways, and special campaigns to engage your followers and attract new ones.",
                icon: "🎁"
              },
              {
                title: "Building a Community",
                desc: "We help grow a loyal online community where people feel connected to your brand and actively engage with your content.",
                icon: "👥"
              },
              {
                title: "Trend Monitoring",
                desc: "We stay updated with what's trending in your industry, ensuring we respond to feedback and capitalize on relevant opportunities.",
                icon: "👁️"
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-12 h-12 flex-shrink-0 bg-[#1E2582] text-white rounded-full flex items-center justify-center text-xl shadow-lg">
                  {feature.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-[#071B3A]">{feature.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-[16px]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. PROCESS DIAGRAM (White Background) */}
      <div className="w-full bg-white py-24 overflow-hidden">
        <div className="container-main flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071B3A] text-center mb-4">
            Our Social Media Marketing Services Process
          </h2>
          <p className="text-gray-600 text-center text-xl mb-20 font-medium">
            An Innovative Method to Reach Your Social Media Goals
          </p>

          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative">
            
            {/* Left Column */}
            <div className="flex flex-col gap-12 w-full lg:w-[35%] relative z-10">
              {/* Item 1 */}
              <div className="flex items-center justify-end gap-6 text-right group">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#4B6BFB] leading-tight">Research and<br/>Analysis</h4>
                  <p className="text-gray-500 text-[13px] leading-snug">Use of atomated test tools<br/>to study about your brand,<br/>competitors, business and<br/>generate data for actionable<br/>strategies.</p>
                </div>
                <div className="w-[90px] h-[90px] rounded-full border border-dashed border-[#FCD34D] flex items-center justify-center flex-shrink-0 bg-white relative">
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 border-t-[12px] border-t-transparent border-l-[16px] border-l-[#8B5CF6] border-b-[12px] border-b-transparent hidden lg:block"></div>
                  <span className="text-3xl">🔍</span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-center justify-end gap-6 text-right group">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#4B6BFB] leading-tight">Channel Planning<br/>& Optimization</h4>
                  <p className="text-gray-500 text-[13px] leading-snug">After analyzing the data, we<br/>plan to promote your business<br/>on the right channel using the<br/>right strategy.</p>
                </div>
                <div className="w-[90px] h-[90px] rounded-full border border-dashed border-[#4B6BFB] flex items-center justify-center flex-shrink-0 bg-white relative">
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 border-t-[12px] border-t-transparent border-l-[16px] border-l-[#8B5CF6] border-b-[12px] border-b-transparent hidden lg:block"></div>
                  <span className="text-3xl">⚙️</span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-center justify-end gap-6 text-right group">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#4B6BFB] leading-tight">Content Creation</h4>
                  <p className="text-gray-500 text-[13px] leading-snug">We create engaging content<br/>tailored to your target<br/>audience to drive interaction.</p>
                </div>
                <div className="w-[90px] h-[90px] rounded-full border border-dashed border-[#FCD34D] flex items-center justify-center flex-shrink-0 bg-white relative">
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 border-t-[12px] border-t-transparent border-l-[16px] border-l-[#8B5CF6] border-b-[12px] border-b-transparent hidden lg:block"></div>
                  <span className="text-3xl">📝</span>
                </div>
              </div>
            </div>

            {/* Center Graphic */}
            <div className="relative w-[320px] h-[320px] flex-shrink-0 flex items-center justify-center z-0 my-10 lg:my-0">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] border border-gray-100"></div>
              {/* Inner White Circle */}
              <div className="absolute inset-4 rounded-full bg-white shadow-2xl flex items-center justify-center">
                {/* Yellow Ring */}
                <div className="w-[85%] h-[85%] rounded-full border-4 border-[#FCD34D] flex items-center justify-center relative bg-gray-50/50">
                  {/* Phone Graphic */}
                  <div className="relative w-20 h-36 bg-white border-4 border-[#1E293B] rounded-xl z-20 flex flex-col shadow-lg">
                    <div className="h-4 border-b border-gray-200 flex justify-center pt-1"><div className="w-6 h-1 bg-gray-300 rounded-full"></div></div>
                    <div className="flex-1"></div>
                    <div className="h-4 border-t border-gray-200 flex justify-center items-center"><div className="w-2 h-2 rounded-full border border-gray-400"></div></div>
                  </div>
                  {/* Surrounding Icons */}
                  <div className="absolute top-[10%] left-[10%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-xl z-30">📷</div>
                  <div className="absolute top-[10%] right-[10%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-xl z-30">f</div>
                  <div className="absolute bottom-[10%] left-[10%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-xl z-30">𝕏</div>
                  <div className="absolute bottom-[10%] right-[10%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-xl z-30">▶</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 w-full lg:w-[35%] relative z-10">
              {/* Item 4 */}
              <div className="flex items-center justify-start gap-6 text-left group">
                <div className="w-[90px] h-[90px] rounded-full border border-dashed border-[#FCD34D] flex items-center justify-center flex-shrink-0 bg-white relative">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6 border-t-[12px] border-t-transparent border-r-[16px] border-r-[#8B5CF6] border-b-[12px] border-b-transparent hidden lg:block"></div>
                  <span className="text-3xl">👥</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#6366F1] leading-tight">Establishing a<br/>Devoted Audience</h4>
                  <p className="text-gray-500 text-[13px] leading-snug">As a dedicated social media marketing<br/>agency in India, our team works to<br/>establish a devoted audience to<br/>increase your brand's following.</p>
                </div>
              </div>
              {/* Item 5 */}
              <div className="flex items-center justify-start gap-6 text-left group">
                <div className="w-[90px] h-[90px] rounded-full border border-dashed border-[#4B6BFB] flex items-center justify-center flex-shrink-0 bg-white relative">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6 border-t-[12px] border-t-transparent border-r-[16px] border-r-[#8B5CF6] border-b-[12px] border-b-transparent hidden lg:block"></div>
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#6366F1] leading-tight">Intensifying<br/>Strategic Impression</h4>
                  <p className="text-gray-500 text-[13px] leading-snug">When it's time to elevate your<br/>organic efforts, our remunerated<br/>media team takeoffs ads with<br/>specific audience targeting.</p>
                </div>
              </div>
              {/* Item 6 */}
              <div className="flex items-center justify-start gap-6 text-left group">
                <div className="w-[90px] h-[90px] rounded-full border border-dashed border-[#FCD34D] flex items-center justify-center flex-shrink-0 bg-white relative">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6 border-t-[12px] border-t-transparent border-r-[16px] border-r-[#8B5CF6] border-b-[12px] border-b-transparent hidden lg:block"></div>
                  <span className="text-3xl">📊</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] font-bold text-[#6366F1] leading-tight">Reporting</h4>
                  <p className="text-gray-500 text-[13px] leading-snug">We provide in-depth reports<br/>showing your ROI and key<br/>performance metrics clearly.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 8. FAQ SECTION */}
      <div className="w-full bg-[#FAFAFC] py-24">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: FAQ Content */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#EEF2FF] text-[#6366F1] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider w-max mb-2">
              Take a look at
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#071B3A] leading-tight mb-2">
              Frequently Asked<br/>Questions
            </h2>
            <p className="text-[#64748B] text-xl mb-6">
              About Social Media Marketing Services
            </p>
            
            <FAQAccordion />
          </div>

          {/* Right: Images */}
          <div className="relative h-[650px] hidden lg:block perspective-[1000px] pl-10">
            {/* Background Image Placeholder (Office light) */}
            <div className="absolute top-0 right-0 w-[85%] h-[450px] bg-gradient-to-br from-[#2D3344] to-[#1F232D] rounded-xl overflow-hidden shadow-xl z-0">
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-2 bg-white/90 rounded blur-[1px] rotate-12 shadow-[0_0_20px_white]"></div>
              <div className="absolute bottom-10 left-10 w-24 h-32 bg-yellow-100/10 rounded-t-full"></div>
            </div>

            {/* Foreground Image Placeholder (Woman with phone) */}
            <div className="absolute bottom-0 left-0 w-[90%] h-[400px] bg-gradient-to-tr from-[#DDBEA9] to-[#F1E0D6] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 flex items-end justify-center overflow-hidden">
              <div className="w-[120px] h-[220px] bg-gray-800 rounded-t-[3rem] mt-auto"></div>
              
              {/* Floating Emojis */}
              <div className="absolute inset-0">
                <FloatingEmoji icon="❤️" top="15%" left="40%" color="from-red-100 to-red-100 text-red-500" />
                <FloatingEmoji icon="@" top="25%" left="60%" color="from-yellow-400 to-orange-400 text-white" />
                <FloatingEmoji icon="💬" top="35%" left="25%" color="from-blue-500 to-purple-600 text-white" />
                <FloatingEmoji icon="💌" top="45%" left="50%" color="from-pink-500 to-rose-500 text-white" />
                <FloatingEmoji icon="👍" top="60%" left="30%" color="from-cyan-400 to-blue-500 text-white" />
                <FloatingEmoji icon="✨" top="75%" left="55%" color="from-purple-600 to-indigo-600 text-white" />
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}

const faqData = [
  {
    question: "What is Social Media Marketing?",
    answer: "Social Media Marketing refers to the use of social media platforms to promote your brand, engage with your audience, and drive traffic to your website or business."
  },
  {
    question: "What are the Advantages of Social Media Marketing Services?",
    answer: "It helps increase brand awareness, drive website traffic, generate leads, and foster a loyal community around your business through direct, authentic engagement."
  },
  {
    question: "Which Social Media Marketing Package Should I Select?",
    answer: "The right package depends entirely on your business goals, target audience, and budget. We recommend starting with a free consultation so we can tailor a custom strategy to your specific needs."
  },
  {
    question: "Are Social Media Marketing Services Effective?",
    answer: "Yes! When executed strategically, social media marketing offers one of the highest ROIs in digital marketing by allowing you to precisely target specific demographics and measure results in real-time."
  },
  {
    question: "Which digital marketing services are offered by NovaDigital?",
    answer: "We offer comprehensive digital solutions including SEO, Social Media Management, Pay-Per-Click (PPC) advertising, Content Marketing, and custom Web Development."
  },
  {
    question: "What courses are offered for students and startup owners?",
    answer: "We provide specialized training programs covering digital marketing fundamentals, advanced social media strategies, and scalable business growth tactics tailored specifically for startups."
  },
  {
    question: "How does NovaDigital help startups establish their online presence?",
    answer: "We create a solid foundation through optimized website design, targeted social media campaigns, and data-driven marketing strategies to ensure early visibility and rapid scaling."
  },
  {
    question: "Why should startups partner with NovaDigital?",
    answer: "We combine innovative technology with creative marketing to deliver cost-effective, scalable solutions that accelerate growth and establish market dominance for emerging businesses."
  },
  {
    question: "How does NovaDigital help generate passive income?",
    answer: "Through automated email marketing funnels, highly optimized digital assets, and evergreen content strategies, we help set up robust systems that drive consistent, hands-off revenue."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2">
      {faqData.map((faq, idx) => (
        <FAQItem 
          key={idx}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}

function FAQItem({ question, answer, isOpen = false, onClick }: { question: string, answer?: string, isOpen?: boolean, onClick?: () => void }) {
  return (
    <div className="border-b border-gray-200 py-4 transition-all duration-300">
      <button 
        onClick={onClick}
        className="flex items-start gap-4 w-full text-left"
      >
        <div className="mt-1 flex-shrink-0 text-[#6366F1]">
          {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h4 className={`text-[17px] font-bold transition-colors ${isOpen ? 'text-[#6366F1]' : 'text-[#071B3A]'}`}>
            {question}
          </h4>
          {isOpen && answer && (
            <p className="text-gray-500 leading-relaxed text-[15px] animate-in fade-in slide-in-from-top-2 duration-300">
              {answer}
            </p>
          )}
        </div>
      </button>
    </div>
  );
}

function FloatingEmoji({ icon, top, left, color }: { icon: string, top: string, left: string, color: string }) {
  return (
    <div 
      className={`absolute w-12 h-12 rounded-full shadow-xl bg-gradient-to-br ${color} flex items-center justify-center text-xl font-bold border border-white/20`}
      style={{ top, left }}
    >
      {icon}
    </div>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  );
}
