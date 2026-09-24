import React from 'react';
import Link from 'next/link';
import { CheckCircle2, TrendingUp, ShieldCheck, Smartphone, Headset, Search, PenTool, Code, Wrench, Users, ArrowRight } from 'lucide-react';

export default function ECommerceSolution() {
  const services = [
    { num: "01", title: "CUSTOM STORE DESIGN", desc: "Tailored, engaging design reflecting your brand." },
    { num: "02", title: "PLATFORM INTEGRATION", desc: "Integration with Shopify, WooCommerce, Magento, etc." },
    { num: "03", title: "SHOPPING CART DEVELOPMENT", desc: "Smooth, user-friendly cart functionality." },
    { num: "04", title: "PAYMENT GATEWAY INTEGRATION", desc: "Secure and convenient payment options." },
    { num: "05", title: "PRODUCT MANAGEMENT SYSTEM", desc: "Easy inventory and pricing management." },
    { num: "06", title: "MOBILE FRIENDLY DESIGN", desc: "Seamless experience across devices." },
    { num: "07", title: "SEO OPTIMIZATION", desc: "High search engine rankings for visibility." },
    { num: "08", title: "MULTI-VENDOR FUNCTIONALITY", desc: "Enable multiple sellers and stores." },
    { num: "09", title: "ADVANCED SECURITY FEATURES", desc: "SSL and secure transactions." },
    { num: "10", title: "CUSTOM FEATURE DEVELOPMENT", desc: "Unique features like reviews and filters." },
    { num: "11", title: "ANALYTICS & REPORTING", desc: "Track and optimize sales and performance." }
  ];

  const benefits = [
    "Proven Experience and Expertise",
    "Reliable Data Integrity and Accuracy",
    "Comprehensive Risk Mitigation Strategies",
    "Enhanced Efficiency and Time Savings",
    "Reduced Downtime for Seamless Operations",
    "Dedicated Post-Migration Support"
  ];

  return (
    <div className="pt-24 min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="bg-[#f8f9ff] py-20 lg:py-32 relative overflow-hidden">
        <div className="container-main flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-[40px] md:text-[50px] font-bold text-navy mb-6 leading-[1.2]">
              E-Commerce Development Solutions
            </h1>
            <p className="text-[#334155] text-[18px] leading-[1.6] mb-10">
              We offer tailored solutions for Shopify, WooCommerce, and BigCommerce and more that are designed to fit your unique business needs.
            </p>
            <button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-8 py-3.5 rounded-md font-medium hover:shadow-lg hover:opacity-90 transition-all text-lg">
              Let's Chat
            </button>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img 
              src="/ecommarce_web_solution.webp" 
              alt="E-Commerce Development" 
              className="w-full max-w-[600px] object-contain mix-blend-multiply [clip-path:inset(0_0_8%_0)] -mb-8 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="container-main py-20 lg:py-24 text-center max-w-5xl mx-auto">
        <h2 className="text-[32px] md:text-[36px] font-bold text-navy mb-10">
          Empowering Businesses to Thrive in the Digital Marketplace
        </h2>
        <div className="space-y-6 text-[#64748b] text-[16px] md:text-[17px] leading-[1.8]">
          <p>
            E-Commerce opens up endless possibilities for businesses by enabling global reach, 24/7 availability, and cost efficiency. It allows you to understand your customers better through data insights, providing personalized shopping experiences that foster loyalty.
          </p>
          <p>
            With lower operational costs than traditional stores, eCommerce ensures scalability as your business grows, giving you the tools to expand product offerings and tap into new markets. It also offers unparalleled convenience for customers with seamless checkout processes, multiple payment options, and doorstep delivery.
          </p>
          <p>
            By embracing eCommerce, businesses can gain a competitive edge, improve inventory management, and leverage innovative marketing opportunities to drive success.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container-main py-12 mb-24 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="lg:w-[300px] shrink-0 pt-8">
          <div className="sticky top-32 h-full flex flex-col items-center">
            <img 
              src="/eccomarse_images.jpg" 
              alt="Our E-Commerce Development Services" 
              className="w-full object-contain rounded-2xl shadow-sm"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <div key={i} className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow bg-gray-50/50 group flex flex-col h-full border border-gray-100 relative">
                <div className="h-16 flex items-center relative z-10">
                  <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-6 h-full flex items-center justify-center text-2xl font-semibold shadow-md rounded-br-3xl">
                    {item.num}
                  </div>
                  <h3 className="text-[13px] font-bold text-navy pl-4 uppercase leading-tight max-w-[120px]">
                    {item.title}
                  </h3>
                </div>
                <div className="p-5 pt-6 bg-gray-100 flex-1 mt-2">
                  <p className="text-[13px] text-gray-600 leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Online Store Tabs */}
      <section className="bg-[#f8f9ff] py-24 mb-16">
        <div className="container-main max-w-6xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-16">
            <button className="flex-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white py-4 px-4 font-bold text-sm md:text-base text-center hover:opacity-90 transition-opacity whitespace-nowrap shadow-md">
              Start Your Online Store
            </button>
            <button className="flex-1 bg-[#c026d3] text-white py-4 px-4 font-bold text-sm md:text-base text-center hover:opacity-90 transition-opacity whitespace-nowrap shadow-md">
              Mobile Application Development
            </button>
            <button className="flex-1 bg-[#c026d3] text-white py-4 px-4 font-bold text-sm md:text-base text-center hover:opacity-90 transition-opacity whitespace-nowrap shadow-md">
              Store Migration Services
            </button>
            <button className="flex-1 bg-[#c026d3] text-white py-4 px-4 font-bold text-sm md:text-base text-center hover:opacity-90 transition-opacity whitespace-nowrap shadow-md">
              Audit Your Online Store
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="flex-1">
              <h2 className="text-[32px] md:text-[40px] font-bold text-navy mb-8">
                Start Your Online Store
              </h2>
              <p className="text-[#334155] text-[17px] leading-[1.8] mb-10">
                Create an eCommerce site powered by cutting-edge technologies that enhance customer satisfaction, boost sales, and streamline your daily operations-all within a unified platform. We specialize in quickly delivering tailored solutions to help you start selling, shipping, and managing payments effortlessly.
              </p>
              <button className="bg-[#e0e7ff] text-[#4338ca] px-8 py-3.5 rounded-md font-bold text-sm hover:bg-[#c7d2fe] transition-colors">
                Connect with us
              </button>
            </div>
            <div className="flex-1">
              <ul className="space-y-6">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-navy shrink-0" />
                    <span className="text-navy font-bold text-[16px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our E-Commerce Solutions? */}
      <section className="container-main py-24 text-center">
        <h2 className="text-[32px] md:text-[36px] font-bold text-[#6366f1] mb-24 relative inline-block">
          Why Choose Our E-Commerce Solutions?
        </h2>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 lg:gap-8 items-start relative mt-16">
          {/* Simulated arc with negative margins */}
          <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-[200px] border-t-2 border-dashed border-gray-300 rounded-[100%] -z-10" />

          {/* Node 1 */}
          <div className="flex flex-col items-center max-w-[180px] md:mt-24">
            <div className="w-24 h-24 rounded-full bg-[#6366f1] text-white flex items-center justify-center border-[8px] border-[#e0e7ff] shadow-lg mb-6 hover:scale-110 transition-transform relative bg-clip-padding">
              <Smartphone className="w-8 h-8" />
            </div>
            <h4 className="text-[#6366f1] font-bold text-[13px] uppercase mb-2">User-Centered Design</h4>
            <p className="text-[#475569] text-[12px] leading-[1.6]">Intuitive, easy-to-navigate interfaces.</p>
          </div>

          {/* Node 2 */}
          <div className="flex flex-col items-center max-w-[180px] md:mt-8">
            <div className="w-24 h-24 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center border-[8px] border-[#ede9fe] shadow-lg mb-6 hover:scale-110 transition-transform bg-clip-padding">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h4 className="text-[#8b5cf6] font-bold text-[13px] uppercase mb-2">Scalability</h4>
            <p className="text-[#475569] text-[12px] leading-[1.6]">Grows with your business.</p>
          </div>

          {/* Node 3 */}
          <div className="flex flex-col items-center max-w-[180px] md:-mt-8">
            <div className="w-24 h-24 rounded-full bg-[#3b82f6] text-white flex items-center justify-center border-[8px] border-[#dbeafe] shadow-lg mb-6 hover:scale-110 transition-transform bg-clip-padding">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-[#3b82f6] font-bold text-[13px] uppercase mb-2">Conversion Optimization</h4>
            <p className="text-[#475569] text-[12px] leading-[1.6]">Boost sales and engagement.</p>
          </div>

          {/* Node 4 */}
          <div className="flex flex-col items-center max-w-[180px] md:mt-8">
            <div className="w-24 h-24 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center border-[8px] border-[#ede9fe] shadow-lg mb-6 hover:scale-110 transition-transform bg-clip-padding">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-[#8b5cf6] font-bold text-[13px] uppercase mb-2">Security & Reliability</h4>
            <p className="text-[#475569] text-[12px] leading-[1.6]">Safe, fast, and dependable.</p>
          </div>

          {/* Node 5 */}
          <div className="flex flex-col items-center max-w-[180px] md:mt-24">
            <div className="w-24 h-24 rounded-full bg-[#6366f1] text-white flex items-center justify-center border-[8px] border-[#e0e7ff] shadow-lg mb-6 hover:scale-110 transition-transform bg-clip-padding">
              <Headset className="w-8 h-8" />
            </div>
            <h4 className="text-[#6366f1] font-bold text-[13px] uppercase mb-2">End-to-End Support</h4>
            <p className="text-[#475569] text-[12px] leading-[1.6]">Ongoing development and maintenance.</p>
          </div>
        </div>
      </section>

      {/* Our eCommerce Development Approach */}
      <section className="container-main py-24 mb-16 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 max-w-lg">
            <h2 className="text-[32px] md:text-[38px] font-bold text-navy mb-6 leading-tight">
              Our eCommerce Development Approach
            </h2>
            <p className="text-[#64748b] text-[16px] leading-[1.8] mb-10">
              We manage your projects with trusted agile methodologies crafted to align all stakeholders, including non-technical participants. Our process enhances teamwork and accelerates delivery timelines to accomplish even the most challenging objectives.
            </p>
            <button className="bg-[#e0e7ff] text-[#4338ca] px-8 py-3.5 rounded-md font-bold text-[13px] hover:bg-[#c7d2fe] transition-colors flex items-center gap-2 uppercase tracking-wide">
              See How We Work <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 flex justify-center relative w-full max-w-[500px] aspect-square">
            <div className="absolute inset-0 rounded-full border border-gray-200 m-8 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-gray-100 m-8 animate-[spin_40s_linear_infinite_reverse]" />
            
            {/* Steps in Circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center -mt-4">
              <span className="text-[13px] font-bold text-navy mb-2">Workshops</span>
              <div className="w-14 h-14 bg-[#074770] text-white rounded-lg flex items-center justify-center shadow-lg"><Users className="w-6 h-6" /></div>
            </div>
            <div className="absolute right-0 top-[30%] translate-x-4 flex flex-col items-center">
              <span className="text-[13px] font-bold text-navy mb-2">Kick-off</span>
              <div className="w-14 h-14 bg-[#074770] text-white rounded-lg flex items-center justify-center shadow-lg"><Search className="w-6 h-6" /></div>
            </div>
            <div className="absolute right-12 bottom-8 translate-x-4 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#074770] text-white rounded-lg flex items-center justify-center shadow-lg mb-2"><PenTool className="w-6 h-6" /></div>
              <span className="text-[13px] font-bold text-navy">UX/UI Design</span>
            </div>
            <div className="absolute left-12 bottom-8 -translate-x-4 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#074770] text-white rounded-lg flex items-center justify-center shadow-lg mb-2"><Code className="w-6 h-6" /></div>
              <span className="text-[13px] font-bold text-navy">Development</span>
            </div>
            <div className="absolute left-0 top-[30%] -translate-x-4 flex flex-col items-center">
              <span className="text-[13px] font-bold text-navy mb-2">Delivery & Support</span>
              <div className="w-14 h-14 bg-[#074770] text-white rounded-lg flex items-center justify-center shadow-lg"><Wrench className="w-6 h-6" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container-main py-16 mb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 w-full relative">
            {/* Placeholder for Team Image */}
            <div className="w-full aspect-[16/10] bg-gray-200 rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
               <img src="/team.jpg" alt="Meet Our Team" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <h2 className="text-[32px] md:text-[38px] font-bold text-navy mb-6">
              Meet Our Team
            </h2>
            <p className="text-[#64748b] text-[16px] leading-[1.8] mb-10">
              At DigiSankalp, we foster an open and boundless mindset, enabling our team to imagine and create extraordinary ideas that resonate with your clients. We deeply value the trust you place in us and consistently strive to exceed expectations, ensuring your confidence in Kushel Digi is well-placed.
            </p>
            <button className="bg-[#e0e7ff] text-[#4338ca] px-8 py-3.5 rounded-md font-bold text-[13px] hover:bg-[#c7d2fe] transition-colors flex items-center gap-2 uppercase tracking-wide">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Ready to Discuss */}
      <section className="bg-[#e0f2fe] mt-24">
        <div className="container-main flex flex-col lg:flex-row p-0 overflow-hidden">
          <div className="flex-1 py-20 pr-12 pl-4 lg:pl-0">
            <h2 className="text-[36px] md:text-[44px] font-bold text-navy mb-12 leading-[1.15]">
              Ready to Discuss Your eCommerce Project?
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#c026d3] shrink-0" strokeWidth={2.5} />
                <div>
                  <h4 className="text-[20px] font-bold text-navy mb-3">Tell us more</h4>
                  <p className="text-[#64748b] text-[15px] leading-[1.6]">
                    Fill out a quick form describing your needs. You can always add details later on and we'll reply within a day!
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#c026d3] shrink-0" strokeWidth={2.5} />
                <div>
                  <h4 className="text-[20px] font-bold text-navy mb-3">Provide Insights</h4>
                  <p className="text-[#64748b] text-[15px] leading-[1.6]">
                    Let us know your goals and expectations by filling out a short form. Feel free to elaborate later, and we'll respond promptly!
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#c026d3] shrink-0" strokeWidth={2.5} />
                <div>
                  <h4 className="text-[20px] font-bold text-navy mb-3">Kickstart the Conversation</h4>
                  <p className="text-[#64748b] text-[15px] leading-[1.6]">
                    Tell us about your project by submitting a quick form. Additional details can be shared later, and we'll reach out within a day!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative hidden lg:block">
            {/* Using a placeholder photo for the contact section */}
            <img src="/contact_team.jpg" alt="Contact Team" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Start Selling Online CTA */}
      <section className="container-main py-12 mb-16">
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 rounded-xl p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="flex-1">
            <h2 className="text-[32px] md:text-[38px] font-bold text-navy mb-4 leading-tight">
              Start Selling Online &ndash; Build Your E-Commerce Store Now!
            </h2>
            <p className="text-[#64748b] text-[18px]">
              Build, Scale, and Succeed with a Tailored Online Store!
            </p>
          </div>
          <div className="shrink-0">
            <button className="bg-[#315CF5] text-white px-10 py-4 rounded-md font-bold text-[14px] hover:bg-blue-700 transition-colors uppercase tracking-wider shadow-lg shadow-blue-500/30">
              Free Consulting!
            </button>
          </div>
        </div>
      </section>

      {/* Our E-Commerce Website (Portfolio) */}
      <section className="bg-[#f8f9ff] py-24 mb-16">
        <div className="container-main max-w-6xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-navy text-center mb-16">
            Our E- Commerce Website
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer border border-gray-100">
              <div className="bg-[#ff6b00] rounded-xl p-8 mb-6 h-[300px] flex items-center justify-center overflow-hidden relative">
                <img src="/project_muval.jpg" alt="Muval Project" className="w-[90%] rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-between px-2">
                <h3 className="text-[22px] font-bold text-navy">Muval</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-navy transition-colors" />
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer border border-gray-100">
              <div className="bg-[#8b8b8b] rounded-xl p-8 mb-6 h-[300px] flex items-center justify-center overflow-hidden relative">
                <img src="/project_resonate.jpg" alt="Resonate Health Project" className="w-[90%] rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-between px-2">
                <h3 className="text-[22px] font-bold text-navy">Resonate Health</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-navy transition-colors" />
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer border border-gray-100">
              <div className="bg-[#65a30d] rounded-xl p-8 mb-6 h-[300px] flex items-center justify-center overflow-hidden relative">
                <img src="/project_renascent.jpg" alt="Renascent Project" className="w-[90%] rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-between px-2">
                <h3 className="text-[22px] font-bold text-navy">Renascent</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-navy transition-colors" />
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer border border-gray-100">
              <div className="bg-[#e2e8f0] rounded-xl p-8 mb-6 h-[300px] flex items-center justify-center overflow-hidden relative">
                <img src="/project_incquery.jpg" alt="Incquery Project" className="w-[90%] rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-between px-2">
                <h3 className="text-[22px] font-bold text-navy">Incquery</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-navy transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA Section */}
      <section className="container-main py-24 mb-16 text-center max-w-4xl mx-auto">
        <div className="inline-block bg-[#e0e7ff] text-[#4338ca] px-6 py-2 rounded-full font-bold text-[13px] uppercase tracking-wide mb-8">
          Blog Post
        </div>
        <h2 className="text-[32px] md:text-[42px] font-bold text-navy mb-8 leading-tight">
          Check Out Our Latest Blog on<br />E-Commerce Website Development
        </h2>
        <p className="text-[#64748b] text-[18px] leading-[1.8] mb-12 max-w-3xl mx-auto">
          With Google Maps ads, you can position your business as a go-to solution in your local community, turning online searches into foot traffic and loyal customers.
        </p>
        <button className="bg-[#315CF5] text-white px-10 py-4 rounded-md font-bold text-[14px] hover:bg-blue-700 transition-colors uppercase tracking-wider shadow-lg shadow-blue-500/30">
          Read Now
        </button>
      </section>

    </div>
  );
}
