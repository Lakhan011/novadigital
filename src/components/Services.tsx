import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#F8F8FF]">
      <div className="container-main">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[60px]">
          <div className="inline-block bg-white text-[#315CF5] font-bold text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
            TRANSFORMING IDEAS INTO DIGITAL SUCCESS
          </div>
          
          <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-bold text-navy leading-[1.1] tracking-tight mb-6">
            Our Digital Marketing Services
          </h2>
          
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
            From strategy to design, development, and marketing, we help your business make a big impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[32px]">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
