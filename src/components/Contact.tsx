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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const { submitToGoogleSheets } = await import('@/app/actions');
      
      const response = await submitToGoogleSheets(formData);

      if (response.success) {
        setStatusMessage({ type: 'success', text: "Thank you! Your message has been sent successfully." });
        setFormData({ firstName: "", lastName: "", mobile: "", email: "", message: "" });
      } else {
        setStatusMessage({ type: 'error', text: "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage({ type: 'error', text: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full">
      {/* Top Part: Contact Info & Form */}
      <div className="bg-gradient-to-b from-[#F9F7FF] to-[#F3F0FF] py-[20px] md:py-[40px]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[40px] items-start">
            
            {/* Left Column: Info */}
            <div>
              <div className="inline-block bg-[#E9E4FF] text-[#315CF5] font-bold text-[11px] px-3 py-1.5 rounded-full mb-4">
                CONNECT WITH US
              </div>
              
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#071B3A] leading-[1.2] tracking-tight mb-6">
                Ready to grow online?<br />
                <span className="text-[#A855F7]">Connect with NovaDigital</span> your partner in digital success!
              </h2>

              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-navy mb-0.5">Address</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed max-w-[350px]">
                      Knowledge Park III, Greater Noida, UP
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#315CF5] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-navy mb-0.5">Phone Number</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed flex items-center gap-2">
                      <span>+91 81718 36488</span>
                      <span className="text-gray-300">|</span>
                      <span>8081796708</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-navy mb-0.5">E-mail Address</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed flex items-center gap-2 flex-wrap">
                      <a href="mailto:mdrizwansaifi@gmail.com" className="hover:text-[#315CF5] transition-colors">
                        mdrizwansaifi@gmail.com
                      </a>
                      <span className="text-gray-300">|</span>
                      <a href="mailto:lakhan.gupta@shardatech.com" className="hover:text-[#315CF5] transition-colors">
                        lakhan.gupta@shardatech.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[#071B3A] font-bold text-[14px] mb-2">Name <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-[#071B3A] focus:outline-none focus:ring-2 focus:ring-[#315CF5]/20 focus:border-[#315CF5] transition-all duration-200" 
                      />
                      <span className="text-gray-400 text-[11px] mt-1 block">First</span>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-[#071B3A] focus:outline-none focus:ring-2 focus:ring-[#315CF5]/20 focus:border-[#315CF5] transition-all duration-200" 
                      />
                      <span className="text-gray-400 text-[11px] mt-1 block">Last</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[#071B3A] font-bold text-[14px] mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-[#071B3A] focus:outline-none focus:ring-2 focus:ring-[#315CF5]/20 focus:border-[#315CF5] transition-all duration-200" 
                  />
                </div>

                <div>
                  <label className="block text-[#071B3A] font-bold text-[14px] mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-[#071B3A] focus:outline-none focus:ring-2 focus:ring-[#315CF5]/20 focus:border-[#315CF5] transition-all duration-200" 
                  />
                </div>

                <div>
                  <label className="block text-[#071B3A] font-bold text-[14px] mb-1.5">Comment or Message</label>
                  <textarea 
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[14px] text-[#071B3A] focus:outline-none focus:ring-2 focus:ring-[#315CF5]/20 focus:border-[#315CF5] transition-all duration-200 resize-y" 
                  />
                </div>

                <div>
                  {statusMessage && (
                    <div className={`mb-4 p-3 rounded-xl text-[14px] font-medium ${statusMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                      {statusMessage.text}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0066CC] hover:bg-[#0052a3] text-white font-bold py-3 px-8 rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Part: Map */}
      <div className="w-full h-[300px] md:h-[400px] bg-gray-100 relative group cursor-pointer overflow-hidden" onClick={() => window.open('https://maps.app.goo.gl/vaUCHvUugE9q8KVw9', '_blank')}>
        {/* Static Map Image */}
        <img 
          src="/images/map-placeholder.jpg" 
          alt="NovaDigital Location Map" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </section>
  );
}
