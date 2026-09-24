import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-padding bg-white border-t border-gray-100">
      <div className="container-main">
        
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[60px]">
          <h2 className="text-[36px] md:text-[48px] font-bold text-navy leading-[1.1] tracking-tight mb-6">
            Let&apos;s Grow Your Business Together
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
            Have a project, idea or business challenge? Let&apos;s discuss how technology and digital marketing can help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[60px]">
          {[
            { icon: Phone, title: "Phone", desc: siteConfig.phone, action: `tel:${siteConfig.phone.replace(/\s+/g, '')}` },
            { icon: Mail, title: "Email", desc: siteConfig.email, action: `mailto:${siteConfig.email}` },
            { icon: MapPin, title: "Location", desc: siteConfig.address, action: "#" },
          ].map((item, i) => (
            <a 
              key={i}
              href={item.action}
              className="group flex flex-col items-center text-center p-[40px] rounded-[16px] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-[70px] h-[70px] rounded-full bg-[#F7F5FF] text-[#315CF5] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#315CF5] group-hover:text-white transition-all duration-300">
                <item.icon size={30} />
              </div>
              <h3 className="text-[20px] font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 font-medium text-[15px]">{item.desc}</p>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 gradient-bg text-white font-bold text-[16px] px-8 py-4 rounded-xl hover:opacity-90 hover:shadow-xl hover:shadow-[#315CF5]/20 transition-all w-full sm:w-auto"
          >
            Contact Us <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-[#F8F8FF] text-[#071B3A] font-bold text-[16px] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all w-full sm:w-auto border border-gray-200"
          >
            Book Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
