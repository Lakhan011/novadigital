import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";

const Facebook = (props: React.ComponentProps<"svg">) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Linkedin = (props: React.ComponentProps<"svg">) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Youtube = (props: React.ComponentProps<"svg">) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;
const Instagram = (props: React.ComponentProps<"svg">) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-[80px] pb-[40px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col">
            <a href="#home" className="flex items-center gap-2 text-[24px] font-bold text-navy mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full gradient-bg text-white">
                <Globe size={24} strokeWidth={2.5} />
              </div>
              <span className="tracking-tight">{siteConfig.name}</span>
            </a>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 pr-4">
              Empowering brands with innovative marketing and tech solutions for lasting growth.
            </p>
            <div className="flex items-center gap-3 mb-10">
              {[
                { icon: Facebook, link: siteConfig.social.facebook },
                { icon: Linkedin, link: siteConfig.social.linkedin },
                { icon: Youtube, link: siteConfig.social.youtube },
                { icon: Instagram, link: siteConfig.social.instagram },
              ].map((Social, i) => (
                <a 
                  key={i} 
                  href={Social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F8F5FF] text-gray-500 hover:bg-[#315CF5] hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Social.icon width={16} height={16} />
                </a>
              ))}
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#071B3A] font-bold text-[14px] px-6 py-3 rounded-full border-2 border-[#A855F7]/30 hover:border-[#315CF5] transition-all"
              >
                Request For Information <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold text-navy mb-6">Useful Links</h4>
            <ul className="flex flex-col gap-4">
              {[
                "Terms and Conditions",
                "Privacy Policy",
                "Refund Policy",
                "Payment method"
              ].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-500 text-[15px] hover:text-[#315CF5] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold text-navy mb-6">Important Services</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Digital Marketing", href: "/digital-marketing/" },
                { label: "Web Solution", href: "/web-solutions/" },
                { label: "App Development", href: "/app-development/" },
                { label: "Graphic Designing", href: "/graphic-designing/" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-500 text-[15px] hover:text-[#315CF5] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold text-navy mb-6">Get Contact</h4>
            <ul className="flex flex-col gap-4 mb-6">
              <li className="text-gray-500 text-[15px]">
                <span className="font-semibold text-gray-700">Phone:</span> +91 82870 80162
              </li>
              <li className="text-gray-500 text-[15px]">
                <span className="font-semibold text-gray-700">E-mail:</span> sales@novadigital.com
              </li>
              <li className="text-gray-500 text-[15px]">
                Office address - DIP2 , Dubai UAE
              </li>
            </ul>
            <div className="flex items-center gap-4 text-gray-500">
              {[
                { icon: Facebook, link: siteConfig.social.facebook },
                { icon: Linkedin, link: siteConfig.social.linkedin },
                { icon: Youtube, link: siteConfig.social.youtube },
                { icon: Instagram, link: siteConfig.social.instagram },
              ].map((Social, i) => (
                <a 
                  key={i} 
                  href={Social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#315CF5] transition-all duration-300"
                >
                  <Social.icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[14px]">
            {siteConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
