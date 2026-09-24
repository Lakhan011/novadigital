export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  cta: string;
}

export const services: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Propel your brand with tailored digital strategies that drive measurable results and lasting impact.",
    icon: "Megaphone",
    bgColor: "#FFFBD2",
    cta: "Learn More →",
  },
  {
    id: "web-solutions",
    title: "Web Solution",
    description:
      "Create stunning, user-friendly websites that deliver superior performance and an exceptional user experience.",
    icon: "Monitor",
    bgColor: "#FBEAFF",
    cta: "Learn More →",
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "Develop innovative, seamless mobile apps that engage users and elevate your business.",
    icon: "Smartphone",
    bgColor: "#FFE8EE",
    cta: "Learn More →",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    description:
      "Transform your brand's vision into stunning visuals with our creative graphic design solutions.",
    icon: "Palette",
    bgColor: "#E8F6FF",
    cta: "Learn More →",
  },
];
