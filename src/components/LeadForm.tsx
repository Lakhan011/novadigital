"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "" });
    }, 1500);
  };

  if (success) {
    return (
      <div className="bg-white rounded-[8px] p-[40px] md:p-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-4">Thank you!</h3>
        <p className="text-gray-600">We&apos;ll contact you shortly.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-8 text-[#315CF5] font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-transparent border-0 border-b border-gray-200 py-4 px-0 text-[#071B3A] focus:ring-0 focus:outline-none focus:border-[#315CF5] focus:border-b-2 transition-colors placeholder:text-gray-400";

  return (
    <div className="bg-white rounded-[8px] p-[40px] md:p-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
      <div className="inline-block bg-[#F7F5FF] text-[#A855F7] font-bold text-[12px] px-3 py-1.5 rounded-full mb-6">
        DIGITAL SOLUTIONS FOR EVERYONE
      </div>
      
      <h3 className="text-[28px] font-bold text-navy mb-8">
        Explore Our Services
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <input
            type="text"
            placeholder="Name *"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={inputClass}
          />
          {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={inputClass}
          />
          {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className={inputClass}
          />
          {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
        </div>

        <div>
          <select
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className={`${inputClass} appearance-none cursor-pointer ${!formData.service ? 'text-gray-400' : 'text-[#071B3A]'}`}
          >
            <option value="" disabled>Select Service (Optional)</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="seo">SEO</option>
            <option value="social-media">Social Media Marketing</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 flex items-center justify-center gap-2 gradient-bg text-white font-bold text-[16px] w-full py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-70"
        >
          {loading ? "Submitting..." : (
            <>GET IT NOW <ArrowRight size={20} /></>
          )}
        </button>
      </form>
    </div>
  );
}
