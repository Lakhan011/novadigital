"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { Search, ShoppingCart, User, ChevronDown, Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${href}`);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] bg-white transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-gray-100" : "border-b border-transparent"
      }`}
    >
      {/* TOP BAR */}
      <div className="hidden lg:block bg-[#0F172A] text-white text-[13px] py-2 border-b border-white/10">
        <div className="container-main flex items-center justify-between">
          <div className="flex items-center gap-6 text-gray-300">
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
              <span className="font-bold">100k</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
              <span className="font-bold">500k</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <span>📞</span>
              <span className="font-medium">+91 9929120236 &nbsp;&nbsp; +971527295912</span>
            </div>
          </div>
          
          <div className="font-medium text-gray-200">
            Get Services at Up to 20% Off!
          </div>
          
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" className="hover:text-white transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" className="hover:text-white transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
              <a href="#" className="hover:text-white transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
            </div>
            
            {/* Language & Currency Dropdowns */}
            <div className="flex items-center gap-5 text-gray-300 relative z-[2000]">
              <div className="relative group cursor-pointer">
                <div className="flex items-center gap-1 hover:text-white transition-colors py-2">
                  🇺🇸 English <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:flex flex-col bg-white text-[#64748B] text-[14px] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] min-w-[130px] py-2">
                  <span className="px-5 py-2 hover:text-[#315CF5] transition-colors cursor-pointer flex items-center gap-2">🇫🇷 Français</span>
                  <span className="px-5 py-2 hover:text-[#315CF5] transition-colors cursor-pointer flex items-center gap-2">🇩🇪 Deutsch</span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="flex items-center gap-1 hover:text-white transition-colors py-2">
                  USD <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:flex flex-col bg-white text-[#64748B] text-[14px] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] min-w-[90px] py-2">
                  <span className="px-5 py-2 hover:text-[#315CF5] transition-colors cursor-pointer">EUR</span>
                  <span className="px-5 py-2 hover:text-[#315CF5] transition-colors cursor-pointer">GBP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main h-[80px] flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center gap-2 text-[22px] font-bold text-navy"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full gradient-bg text-white">
            <Globe size={24} strokeWidth={2.5} />
          </div>
          <span className="tracking-tight">NovaDigital</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative h-full flex items-center group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#") && !link.dropdown) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                className="flex items-center gap-1 font-medium text-[#071B3A] hover:text-[#315CF5] transition-colors"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={16} className="mt-0.5" />}
              </a>

              {/* DROPDOWN */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 p-8 min-w-[280px] animate-in fade-in slide-in-from-top-4 duration-200 z-[3000]">
                  <div className="flex gap-12">
                    {link.dropdown.map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-8 min-w-[180px]">
                        {column.groups.map((group, grpIdx) => (
                          <div key={grpIdx}>
                            {group.heading && (
                              <h4 className="text-[17px] font-bold text-navy mb-4">
                                {group.heading}
                              </h4>
                            )}
                            <ul className="flex flex-col gap-3.5">
                              {group.items.map((item) => (
                                <li key={item.label} className="flex items-center gap-2">
                                  <a
                                    href={item.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      scrollToSection(item.href);
                                    }}
                                    className="text-[#64748B] hover:text-[#315CF5] transition-colors font-medium text-[15px]"
                                  >
                                    {item.label}
                                  </a>
                                  {item.badge && (
                                    <span className={`${item.badgeColor || 'bg-blue-100'} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="text-[#071B3A] hover:text-[#315CF5] transition-colors">
            <Search size={22} />
          </button>
          <button className="relative text-[#071B3A] hover:text-[#315CF5] transition-colors">
            <ShoppingCart size={22} />
            <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          
          <div className="w-[1px] h-6 bg-gray-200 mx-1"></div>

          <button className="text-[#071B3A] hover:text-[#315CF5] transition-colors flex items-center gap-2 font-medium">
            <User size={22} />
            <span className="text-[15px]">Admin</span>
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="gradient-bg text-white font-semibold rounded-lg px-6 py-2.5 hover:opacity-90 transition-opacity ml-2"
          >
            Quick Payment
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[2000] bg-white flex flex-col overflow-y-auto">
          <div className="container-main h-[80px] flex items-center justify-between border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2 text-[22px] font-bold text-navy">
              <div className="flex items-center justify-center w-10 h-10 rounded-full gradient-bg text-white">
                <Globe size={24} />
              </div>
              <span>NovaDigital</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy p-2 bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div
                  className="flex items-center justify-between font-bold text-xl text-navy"
                  onClick={() => {
                    if (link.dropdown) {
                      setActiveDropdown(activeDropdown === link.label ? null : link.label);
                    } else {
                      scrollToSection(link.href);
                    }
                  }}
                >
                  <span>{link.label}</span>
                  {link.dropdown && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="flex flex-col gap-6 mt-4 pl-4 border-l-2 border-gray-100">
                    {link.dropdown.map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-6">
                        {column.groups.map((group, grpIdx) => (
                          <div key={grpIdx}>
                            {group.heading && (
                              <h4 className="text-[15px] font-bold text-gray-400 mb-3 uppercase tracking-wider">
                                {group.heading}
                              </h4>
                            )}
                            <ul className="flex flex-col gap-3">
                              {group.items.map((item) => (
                                <li key={item.label} className="flex items-center gap-2">
                                  <a
                                    href={item.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      scrollToSection(item.href);
                                    }}
                                    className="text-[#64748B] font-medium text-[16px]"
                                  >
                                    {item.label}
                                  </a>
                                  {item.badge && (
                                    <span className={`${item.badgeColor || 'bg-blue-100'} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="border-gray-100 my-2" />
            <button
              onClick={() => scrollToSection("#contact")}
              className="gradient-bg text-white font-bold rounded-xl px-6 py-4 mt-2 text-lg text-center"
            >
              Quick Payment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
