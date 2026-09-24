import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaDigital | Digital Marketing & Technology Solutions",
  description:
    "Grow your business with digital marketing, web development, mobile applications, branding and creative technology solutions.",
  keywords: [
    "digital marketing",
    "web development",
    "app development",
    "graphic design",
    "SEO",
    "social media marketing",
    "NovaDigital",
    "digital agency",
  ],
  authors: [{ name: "NovaDigital" }],
  openGraph: {
    title: "NovaDigital | Digital Marketing & Technology Solutions",
    description:
      "Grow your business with digital marketing, web development, mobile applications, branding and creative technology solutions.",
    url: "https://novadigital.com",
    siteName: "NovaDigital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaDigital | Digital Marketing & Technology Solutions",
    description:
      "Grow your business with digital marketing, web development, mobile applications, branding and creative technology solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
