import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SeoServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-[160px] pb-[80px] mb-24 z-10 overflow-hidden bg-gradient-to-br from-[#f6f8ff] via-[#fffafd] to-[#fef2f7]">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="w-full lg:w-[45%] space-y-8 z-10 text-center lg:text-left">
              <h1 className="text-[42px] md:text-[54px] lg:text-[60px] font-extrabold text-navy leading-[1.15] tracking-tight">
                Expert SEO Services
              </h1>
              <p className="text-gray-600 text-[18px] leading-[1.8] max-w-[600px] mx-auto lg:mx-0">
                Boost your website's traffic, skyrocket your rankings, and turn
                clicks into customers with India's trusted SEO partner. Let's
                help your business shine on the digital stage!
              </p>
              <div className="pt-4">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#8358ff] to-[#be58ff] text-white font-semibold text-[16px] py-[15px] px-[36px] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Let's Chat
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative">
               <img 
                 src="/seo_images.png" 
                 alt="Expert SEO Services Illustration" 
                 className="w-full max-w-[350px] lg:max-w-[480px] object-contain mix-blend-multiply"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container-main mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          SEO Services in Noida That Help To Get <span className="text-[#315CF5]">Ranking, Traffic, And Sales</span>
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto mb-12">
          Start getting more qualified traffic, increased sales, and higher rankings on SERPs by requesting search engine optimization services for your business website type from Noida's leading SEO Company, DigiSankalp Technologies.
        </p>

        <h3 className="text-xl font-bold text-navy mb-8">
          What Do You Get When You Hire Us As Your SEO Company in Noida
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto text-left">
          {[
            "All-time access to premium SEO tools",
            "Affordable SEO Packages",
            "Dedicated and skilled project managers and SEO professionals",
            "Competitive pricing and timely reporting",
            "Practice White Hat SEO"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-[#a05cff] w-6 h-6 shrink-0" />
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How SEO Works */}
      <section className="container-main mb-24 bg-slate-50 p-12 rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              How SEO Works
            </h2>
            <p className="text-gray-600 leading-relaxed">
              SEO is essential in today's digital world as it directly impacts a website's visibility on search engines, which is crucial for attracting organic traffic. Studies show that 93% of online experiences begin with a search engine, and 75% of users never scroll past the first page of search results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Without proper SEO, businesses risk being invisible to potential customers. As search engines evolve with algorithm updates, businesses must stay updated with SEO best practices to ensure they rank well. We help by providing a comprehensive SEO strategy, optimizing your website's on-page and off-page elements, improving site speed, creating high-quality content, and building authoritative backlinks.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
             <img 
               src="/how_seo_work.png" 
               alt="How SEO Works Illustration" 
               className="w-full max-w-md object-contain drop-shadow-lg"
             />
          </div>
        </div>
      </section>

      {/* Our SEO Process */}
      <section className="container-main">
        <h2 className="text-[32px] md:text-[40px] font-bold text-navy text-center mb-14">
          Our SEO Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0">
          {[
            { step: "01", title: "Crawling & Indexing", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> },
            { step: "02", title: "Keyword Research", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
            { step: "03", title: "On-Page SEO Optimization", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
            { step: "04", title: "Technical SEO", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
            { step: "05", title: "Off-Page SEO", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
            { step: "06", title: "Content Creation & Optimization", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
            { step: "07", title: "User Experience (UX)", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg> },
            { step: "08", title: "Monitoring & Reporting", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
            { step: "09", title: "Search Engine Algorithms", icon: <svg className="w-8 h-8 text-gray-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg> },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] h-[110px] relative overflow-hidden flex items-center border border-gray-50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              {/* Background Shape */}
              <div className="absolute top-0 bottom-0 left-0 w-[42%] bg-gradient-to-br from-[#8063FF] to-[#A460FF] rounded-r-[50px] md:rounded-r-[60px]" />
              
              <div className="relative z-10 flex h-full w-full">
                <div className="w-[42%] flex items-center justify-center">
                  <span className="text-white text-[32px] md:text-[36px] font-bold opacity-90">{item.step}</span>
                </div>
                <div className="flex-1 flex flex-col justify-center pl-6 md:pl-8 pr-4">
                  {item.icon}
                  <span className="text-[#1e293b] font-medium text-[15px] leading-tight max-w-[150px]">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
        {/* Bottom text for SEO Process */}
      <section className="container-main mt-12 mb-24">
        <p className="text-gray-700 text-center leading-relaxed max-w-5xl mx-auto">
          SEO as a service helps businesses improve online visibility and drive organic traffic by optimizing their website. This includes keyword research, on-page optimization, technical SEO, content creation, and link building. By using tailored SEO strategies, businesses can boost search rankings, attract targeted traffic, and increase conversions, leading to sustainable growth in the digital space.
        </p>
      </section>

      {/* SEO Ranking Factors */}
      <section className="container-main mb-24 bg-gradient-to-b from-[#f8f9ff] to-white rounded-3xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          SEO Ranking Factors We Care For Are As Follows
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-3xl mx-auto">
          Several key factors influence a website's SEO ranking and our SEO services help you to improve your:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left Column */}
          <div className="space-y-12">
            {[
              { title: "Content Quality", desc: "We write high-quality, relevant, and engaging content that provides value to users is crucial." },
              { title: "Keywords", desc: "Properly researched and strategically placed keywords in titles and headings throughout the content help search engines understand the relevance of your pages." },
              { title: "Backlinks", desc: "We build high-quality backlinks from authoritative sites to improve credibility and ranking. The quantity and quality of these links matter." },
              { title: "On-Page SEO", desc: "We optimise meta titles, descriptions, and header tags, and ensure proper keyword usage." },
              { title: "Technical SEO", desc: "We optimize factors like site speed, mobile-friendliness, secure connections (HTTPS), and a well-structured URL hierarchy" },
              { title: "User Experience (UX)", desc: "A well-designed site that is easy to navigate, has a clear layout, and provides a good user experience can positively affect rankings. We optimize website architecture." },
              { title: "Mobile Optimization", desc: "With mobile-first indexing, your site must perform well on mobile devices. We optimize websites for mobiles." }
            ].map((item, i) => (
              <div key={i} className="text-right flex flex-col items-end">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-xl font-semibold text-[#315CF5]">{item.title}</h4>
                  <CheckCircle2 className="text-[#a05cff] w-6 h-6 shrink-0" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12 mt-12 md:mt-0">
            {[
              { title: "Page Speed", desc: "Fast-loading pages improve user experience. We speed up your website to pass Core Web Vitals." },
              { title: "Site Structure and Internal Linking", desc: "A clear and logical site structure helps search engines crawl and index your pages more efficiently. Effective internal linking also helps distribute page authority." },
              { title: "Social Signals", desc: "Engagement on social media platforms can indirectly influence SEO by driving traffic and increasing visibility. We build and manage social media profiles." },
              { title: "Local SEO", desc: "For local businesses, we build Google business profiles and optimize it for better local exposure. We also build local citations." },
              { title: "User Engagement Metrics", desc: "We optimize websites for higher engagement rates. It helps users to spend more time on pages and also improves website SEO." },
              { title: "Content Freshness", desc: "We optimize websites for higher engagement rates. It helps users to spend more time on pages and also improves website SEO." },
              { title: "Schema Markup", desc: "Implementing schema markup helps search engines understand the content and can enhance your listings in search results with rich snippets." }
            ].map((item, i) => (
              <div key={i} className="text-left flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-[#a05cff] w-6 h-6 shrink-0" />
                  <h4 className="text-xl font-semibold text-[#315CF5]">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things You Should Know */}
      <section className="container-main mb-24">
        <h2 className="text-[28px] md:text-[36px] font-bold text-navy text-center mb-4">
          Things You Should Know About SEO Services
        </h2>
        <p className="text-[#64748B] text-[16px] text-center mb-12 max-w-[1000px] mx-auto leading-relaxed">
          Like any Online marketing strategy, SEO also has advantages and disadvantages. But the only difference is the advantages are more and nullify the effect of disadvantages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 px-4 lg:px-0 max-w-6xl mx-auto">
          {/* Advantages */}
          <div className="bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-8 md:p-10 md:pr-12">
            <h3 className="text-[22px] font-bold text-navy mb-8">Advantages Of SEO</h3>
            <ul className="space-y-5">
              {[
                "Attract Free Traffic",
                "Boost Backlinks",
                "Increase Domain Authority",
                "Enhance Brand Visibility",
                "Deliver Long-Lasting Results"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-[#8b65ff] text-white w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#64748B] text-[16px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Disadvantages */}
          <div className="bg-white shadow-sm border border-gray-200 p-8 md:p-10 md:pr-12">
            <h3 className="text-[22px] font-bold text-navy mb-8">Disadvantages Of SEO</h3>
            <ul className="space-y-5">
              {[
                "SEO is Not a Guaranteed Service.",
                "Take Lots of Content Marketing.",
                "Tough to Get Natural Backlinks.",
                "If Done Wrong Then the Website May Get a Negative Result.",
                "Ranking Fluctuation is Normal."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-[#8b65ff] text-white w-[26px] h-[26px] mt-0.5 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#64748B] text-[16px] font-medium leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SEO Service Image */}
      <section className="container-main mb-24 flex justify-center">
        <img 
          src="/seo_service.png" 
          alt="SEO Service Overview" 
          className="w-full max-w-5xl object-contain"
        />
      </section>

      {/* Benefits of SEO Services */}
      <section className="bg-[#f0f4fc] py-20 mb-20">
        <div className="container-main text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-navy mb-16">
            Benefits of SEO Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 px-4 lg:px-0 max-w-6xl mx-auto">
            {/* Quality of Traffic */}
            <div className="flex flex-col items-center text-center group cursor-pointer bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/qualityOfSEO.jpg" 
                  alt="Quality of Traffic" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-[22px] lg:text-[24px] font-bold text-navy mb-4 group-hover:text-[#315CF5] transition-colors duration-300">Quality Of Traffic</h3>
              <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.6]">
                You can attract all the visitors in the world who are genuinely interested in the products that you offer.
              </p>
            </div>

            {/* Free Traffic */}
            <div className="flex flex-col items-center text-center group cursor-pointer bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3 delay-100">
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/organic lead.png" 
                  alt="Free Traffic" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-[22px] lg:text-[24px] font-bold text-navy mb-4 group-hover:text-[#315CF5] transition-colors duration-300">Free Traffic</h3>
              <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.6]">
                Ads make up a large share of SERPs. Organic traffic is any traffic that you don't have to pay for.
              </p>
            </div>

            {/* Conversion */}
            <div className="flex flex-col items-center text-center group cursor-pointer bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3 delay-200">
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/conversion.png" 
                  alt="Conversion" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.6]">
                If you get top search engine rankings then you will get more conversions.
              </p>
            </div>

            {/* Better Online Visibility */}
            <div className="flex flex-col items-center text-center group cursor-pointer bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/online_visilibility.jpg" 
                  alt="Better Online Visibility" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.6]">
                You get more brand exposure when you rank on top of the first-page search results.
              </p>
            </div>

            {/* Quantity Of Traffic */}
            <div className="flex flex-col items-center text-center group cursor-pointer bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3 delay-100">
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/qualityOfSEO.jpg" 
                  alt="Quantity Of Traffic" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.6]">
                Once you have the right people clicking through from those search engine results pages (SERPs), more traffic is better.
              </p>
            </div>

            {/* Higher Domain Authority */}
            <div className="flex flex-col items-center text-center group cursor-pointer bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3 delay-200">
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden mb-8">
                <img 
                  src="/heigher_domain_Authority.jpg" 
                  alt="Higher Domain Authority" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[#475569] text-[15px] lg:text-[16px] leading-[1.6]">
                A proper SEO strategy helps you to increase your website's domain authority and reputation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
