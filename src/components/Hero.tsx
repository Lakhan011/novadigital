import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center pt-[100px] pb-10 overflow-hidden" 
    >
      {/* Background Image - Full Visibility */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[#071B3A]"
        style={{ backgroundImage: "url('/hero_bg_new.jpg')" }}
      ></div>
      
      {/* Sleek left-to-right gradient to make text readable on the left, but leave right completely clear */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030A1A]/90 via-[#071B3A]/50 to-transparent w-full lg:w-[75%]"></div>

      {/* Content Container */}
      <div className="container-main relative z-20 flex flex-col justify-center h-full">
        <div className="w-full max-w-[850px] flex flex-col items-start text-left">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {[
              "Clients First",
              "Premium Work",
              "Result Driven"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-white font-medium text-[15px] md:text-[16px] drop-shadow-md">
                <CheckCircle className="text-[#315CF5] fill-white" size={20} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-white text-[40px] sm:text-[50px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100 drop-shadow-xl whitespace-nowrap">
            Empowering Businesses <br />
            With <span className="gradient-text bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(49,92,245,0.6)]">Digital Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-100 text-[16px] md:text-[18px] max-w-[750px] leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 drop-shadow-xl font-medium">
            Transform your business with innovative digital marketing, technology and creative solutions designed to build visibility, engagement and sustainable growth.
          </p>

          {/* Button */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gradient-bg text-white font-bold text-[16px] px-8 py-4 rounded-xl hover:scale-[1.05] hover:shadow-xl hover:shadow-[#315CF5]/20 transition-all duration-300"
            >
              Get Started Today <span className="ml-2 font-normal">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
