export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-[40px] md:p-[60px] border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-[700px]">
              <h2 className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.2] mb-4">
                Ready to Transform Your Business Online?
              </h2>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                Boost traffic, generate leads, and grow your business with expert digital marketing solutions.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center gradient-bg text-white font-bold text-[16px] px-10 py-4 rounded-xl hover:scale-[1.02] hover:shadow-xl hover:shadow-[#315CF5]/20 transition-all w-full lg:w-auto"
              >
                FREE CONSULTING!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
