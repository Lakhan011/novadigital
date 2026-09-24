export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  gradient: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Your digital strategy helped us improve our online presence and connect with a much larger audience.",
    name: "Rahul Sharma",
    role: "Business Owner",
    avatar: "/images/testimonials/avatar-1.jpg",
    gradient: false,
  },
  {
    id: 2,
    quote:
      "The website they built exceeded our expectations. Our online conversions doubled within three months.",
    name: "Priya Mehta",
    role: "E-commerce Director",
    avatar: "/images/testimonials/avatar-2.jpg",
    gradient: true,
  },
  {
    id: 3,
    quote:
      "Their digital marketing campaigns delivered incredible ROI. We saw a 3x increase in qualified leads.",
    name: "Amit Patel",
    role: "Marketing Head",
    avatar: "/images/testimonials/avatar-3.jpg",
    gradient: false,
  },
  {
    id: 4,
    quote:
      "Outstanding mobile app development. They understood our vision perfectly and delivered a product our users love.",
    name: "Sneha Kapoor",
    role: "Startup Founder",
    avatar: "/images/testimonials/avatar-4.jpg",
    gradient: true,
  },
  {
    id: 5,
    quote:
      "Professional, creative and results-driven. They redesigned our brand identity and it transformed our business.",
    name: "Vikram Singh",
    role: "CEO, TechVentures",
    avatar: "/images/testimonials/avatar-5.jpg",
    gradient: false,
  },
  {
    id: 6,
    quote:
      "From SEO to social media management, their comprehensive approach helped us dominate our market online.",
    name: "Ananya Desai",
    role: "Operations Manager",
    avatar: "/images/testimonials/avatar-6.jpg",
    gradient: true,
  },
  {
    id: 7,
    quote:
      "The team is incredibly responsive and knowledgeable. They navigated the complex digital landscape for us.",
    name: "Karthik Nair",
    role: "Product Manager",
    avatar: "/images/testimonials/avatar-7.jpg",
    gradient: false,
  },
  {
    id: 8,
    quote:
      "Their graphic design work is exceptional. Every piece of creative is on-brand and drives engagement.",
    name: "Meera Joshi",
    role: "Brand Manager",
    avatar: "/images/testimonials/avatar-8.jpg",
    gradient: true,
  },
  {
    id: 9,
    quote:
      "We trusted them with our entire digital strategy and the results have been consistently impressive.",
    name: "Rohan Gupta",
    role: "Managing Director",
    avatar: "/images/testimonials/avatar-9.jpg",
    gradient: false,
  },
  {
    id: 10,
    quote:
      "Their PPC campaigns and analytics approach helped us reduce cost-per-lead by 45% in just two months.",
    name: "Deepa Iyer",
    role: "Growth Lead",
    avatar: "/images/testimonials/avatar-10.jpg",
    gradient: true,
  },
];
