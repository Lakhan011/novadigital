import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about-content" className="py-24 bg-white overflow-hidden relative">
      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* LEFT: Image Wrapper */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative background blobs */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-[#F8FAFC] border-[6px] border-white group-hover:shadow-blue-500/10 transition-shadow duration-500">
              <img 
                src="/corporate_image.jpg" 
                alt="Corporate Team" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071B3A]/10 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#EEF2FF] rounded-full flex items-center justify-center text-[#315CF5] font-black text-2xl shadow-inner">
                10+
              </div>
              <div>
                <p className="text-[13px] text-gray-500 font-bold uppercase tracking-wider">Years of</p>
                <p className="text-[#071B3A] font-black text-xl">Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="bg-[#EEF2FF] border border-[#315CF5]/10 text-[#315CF5] text-xs font-black px-4 py-2 rounded-full uppercase tracking-[0.15em] mb-8">
              Who We Are
            </div>
            
            <h2 className="text-[38px] md:text-5xl lg:text-[56px] font-extrabold text-[#071B3A] leading-[1.05] tracking-tight mb-8">
              Strategic Digital<br />
              Solutions For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CF5] to-[#A855F7]">Modern Businesses</span>
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#315CF5] to-[#A855F7] rounded-full mb-8"></div>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
              We combine strategy, technology, creativity and data-driven marketing to help businesses build a stronger, more resilient digital presence.
            </p>
            
            <p className="text-gray-500 text-[17px] leading-relaxed mb-10">
              Our goal is to create meaningful digital experiences that improve visibility, engagement and long-term business growth for our partners.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12 w-full">
              {[
                "Data-driven strategies",
                "Modern technology",
                "Creative execution",
                "Long-term support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                    <CheckCircle2 className="text-[#315CF5] w-4 h-4" strokeWidth={3.5} />
                  </div>
                  <span className="font-bold text-[#071B3A] text-[15px]">{text}</span>
                </div>
              ))}
            </div>
            
            <a
              href="#services"
              className="group inline-flex items-center justify-center bg-[#071B3A] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#315CF5] shadow-[0_10px_20px_rgba(7,27,58,0.15)] hover:shadow-[0_10px_25px_rgba(49,92,245,0.3)] transition-all duration-300"
            >
              Discover More 
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
