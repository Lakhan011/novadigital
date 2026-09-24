import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import AboutHero from "@/components/AboutHero";
import About from "@/components/About";
import Services from "@/components/Services";
import SocialMediaMarketing from "@/components/SocialMediaMarketing";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionMission />
      <AboutHero />
      <About />
      <Services />
      <SocialMediaMarketing />
      <CTASection />
      <WhyChooseUs />
      <BlogSection />
      <FAQ />
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
}
