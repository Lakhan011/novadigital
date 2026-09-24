"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Subscribed successfully!");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-[80px] md:py-[100px] bg-gradient-to-r from-[#F7F5FF] via-white to-[#EEF6FF]">
      <div className="container-main">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] font-bold text-navy leading-[1.2] mb-6 tracking-tight">
            Subscribe <br />
            Our Newsletter
          </h2>
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-10">
            Get useful digital marketing insights, technology updates and business growth tips directly in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-[550px] mx-auto">
            <div className="relative flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                className="w-full flex-grow bg-white border-2 border-gray-100 rounded-xl px-6 py-4 md:py-5 text-[#071B3A] focus:outline-none focus:border-[#315CF5] transition-colors shadow-sm"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="sm:absolute sm:right-2 sm:top-2 sm:bottom-2 gradient-bg text-white font-bold px-8 py-4 sm:py-0 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70"
              >
                {status === "loading" ? "Subscribing..." : (
                  <>Subscribe <ArrowRight size={18} /></>
                )}
              </button>
            </div>
            
            {status === "error" && (
              <p className="text-red-500 text-sm mt-3 text-left font-medium ml-4">{message}</p>
            )}
            
            {status === "success" && (
              <div className="flex items-center justify-center gap-2 text-green-600 text-sm mt-4 font-bold bg-green-50 py-2 px-4 rounded-lg">
                <CheckCircle size={18} />
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
