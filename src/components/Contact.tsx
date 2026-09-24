"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simulate submission
    alert("Message sent successfully!");
    setFormData({ firstName: "", lastName: "", mobile: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full">
      {/* Top Part: Contact Info & Form */}
      <div className="bg-gradient-to-b from-[#F9F7FF] to-[#F3F0FF] pt-[80px] pb-[80px] md:pt-[120px] md:pb-[100px]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-start">
            
            {/* Left Column: Info */}
            <div>
              <div className="inline-block bg-[#E9E4FF] text-[#315CF5] font-bold text-[12px] px-4 py-2 rounded-full mb-6">
                CONNECT WITH US
              </div>
              
              <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#071B3A] leading-[1.2] tracking-tight mb-10">
                Ready to grow online?<br />
                <span className="text-[#A855F7]">Connect with NovaDigital</span> your partner in digital success!
              </h2>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#A855F7] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-navy mb-1">Address</h4>
                    <p className="text-gray-500 leading-relaxed max-w-[300px]">
                      70, Sector 63 Rd, G Block, Sector 63, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#315CF5] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-navy mb-1">Phone Number</h4>
                    <p className="text-gray-500 leading-relaxed">
                      +91 82870 80162<br />
                      +91 99291 20236<br />
                      +97 1527295912
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#A855F7] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold text-navy mb-1">E-mail Address</h4>
                    <p className="text-gray-500 leading-relaxed">
                      sales@novadigital.com<br />
                      support@novadigital.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-[24px] p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-[#071B3A] font-bold text-[15px] mb-3">Name <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#071B3A] focus:outline-none focus:border-[#315CF5] transition-colors" 
                      />
                      <span className="text-gray-400 text-xs mt-1 block">First</span>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#071B3A] focus:outline-none focus:border-[#315CF5] transition-colors" 
                      />
                      <span className="text-gray-400 text-xs mt-1 block">Last</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[#071B3A] font-bold text-[15px] mb-2">Mobile Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#071B3A] focus:outline-none focus:border-[#315CF5] transition-colors" 
                  />
                </div>

                <div>
                  <label className="block text-[#071B3A] font-bold text-[15px] mb-2">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#071B3A] focus:outline-none focus:border-[#315CF5] transition-colors" 
                  />
                </div>

                <div>
                  <label className="block text-[#071B3A] font-bold text-[15px] mb-2">Comment or Message</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#071B3A] focus:outline-none focus:border-[#315CF5] transition-colors resize-y" 
                  />
                </div>

                <div>
                  <button 
                    type="submit"
                    className="bg-[#0066CC] hover:bg-[#0052a3] text-white font-bold py-3 px-8 rounded transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Part: Map */}
      <div className="w-full h-[400px] md:h-[500px] bg-gray-100">
        <iframe 
          src="https://maps.google.com/maps?q=70,+Sector+63+Rd,+G+Block,+Sector+63,+Noida,+Uttar+Pradesh+201301&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="NovaDigital Location"
        ></iframe>
      </div>
    </section>
  );
}
