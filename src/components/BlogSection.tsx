"use client";

import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section className="section-padding bg-white pt-24 pb-16">
      <div className="container-main">
        {/* Header matching screenshot */}
        <div className="flex flex-col items-center text-center mx-auto mb-16">
          <div className="inline-block bg-[#EEF2FF] text-[#6366F1] font-bold text-[13px] uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            BLOG POST
          </div>
          
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#071B3A] leading-[1.1] tracking-tight mb-8">
            Post Popular Post.
          </h2>
          
          <a href="#blog" className="bg-[#315CF5] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg">
            See All Articles
          </a>
        </div>

        {/* Existing Blog Cards (Hidden/Optional in screenshot but keeping for logic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-24">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="group bg-white rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#315CF5]/10 to-[#A855F7]/10 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Blog Image</span>
                </div>
                <div className="absolute top-4 left-4 bg-white text-[#315CF5] text-[12px] font-bold px-3 py-1.5 rounded-full z-10">
                  {post.category}
                </div>
              </div>
              
              <div className="p-[30px]">
                <h3 className="text-[20px] font-bold text-[#071B3A] mb-4 group-hover:text-[#315CF5] transition-colors leading-[1.4]">
                  <a href={`#blog-${post.slug}`} className="focus:outline-none">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>
                <a 
                  href={`#blog-${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#315CF5] font-bold text-[15px] group-hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SUBSCRIBE NEWSLETTER SECTION */}
        <div className="w-full bg-[#FAFAFC] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 mt-12 shadow-sm border border-gray-100">
          <div className="flex flex-col">
            <h3 className="text-[28px] md:text-[32px] font-bold text-[#071B3A]">
              Subscribe
            </h3>
            <p className="text-[#315CF5] text-[24px] md:text-[28px]">
              Our Newsletter
            </p>
          </div>
          
          {/* Scroll to Top Button (from screenshot) */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-[#315CF5] flex items-center justify-center text-[#315CF5] hover:bg-[#315CF5] hover:text-white transition-all flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
