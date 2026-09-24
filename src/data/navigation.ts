export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropdownColumn[];
}

export interface NavDropdownColumn {
  groups: {
    heading?: string;
    items: { 
      label: string; 
      href: string;
      badge?: string;
      badgeColor?: string;
    }[];
  }[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  {
    label: "Company",
    href: "#about",
    dropdown: [
      {
        groups: [
          {
            items: [
              { label: "About Us", href: "#about" },
              { label: "Vision & Mission", href: "#vision-mission" },
              { label: "Team", href: "#about" },
              { label: "Career", href: "#contact" },
              { label: "Portfolio", href: "#services" },
              { label: "Why Choose Us", href: "#why-us" },
              { label: "Our Story", href: "#about" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      {
        groups: [
          {
            heading: "Digital Marketing",
            items: [
              { label: "SEO Services", href: "#services" },
              { label: "Social Media Marketing", href: "#social-media-marketing" },
              { label: "Google Ads Solutions", href: "#services" },
              { label: "Meta Ads Solution", href: "#services" },
              { label: "Google Map Promotion", href: "#services" },
              { label: "Content Writing Services", href: "#services" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            heading: "Web Solution",
            items: [
              { label: "E-Commerce Web Solution", href: "#services" },
              { label: "Responsive Websites", href: "#services" },
              { label: "Custom Website Design", href: "#services" },
            ],
          },
          {
            heading: "Portal Development",
            items: [
              { label: "CRM Development", href: "#services" },
              { label: "Web Development", href: "#services" },
              { label: "B2B/B2C Portal Development", href: "#services" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            heading: "App Development",
            items: [
              { label: "Mobile UI/UX Designing Services", href: "#services" },
              { label: "Services App (Android/IOS)", href: "#services" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            heading: "Graphic Designing",
            items: [
              { label: "Logo", href: "#services" },
              { label: "Brochure/Flyers", href: "#services", badge: "New", badgeColor: "bg-[#C4B5FD]" },
              { label: "Business Card", href: "#services", badge: "New", badgeColor: "bg-[#C4B5FD]" },
              { label: "Post Graphics/Banners", href: "#services", badge: "New", badgeColor: "bg-[#C4B5FD]" },
              { label: "Image Editing", href: "#services", badge: "New", badgeColor: "bg-[#C4B5FD]" },
              { label: "Video Editing", href: "#services", badge: "Coming", badgeColor: "bg-[#C4B5FD]" },
            ],
          },
        ],
      },
    ],
  },
  { label: "Contact", href: "#contact" },
  { label: "Pricing", href: "#contact" },
];
