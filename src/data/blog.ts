export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How SEO Helps Businesses Grow",
    description:
      "Discover how search engine optimization can increase your website traffic, improve visibility and generate quality leads for your business.",
    category: "SEO",
    image: "/images/blog-1.jpg",
    slug: "how-seo-helps-businesses-grow",
  },
  {
    id: 2,
    title: "Why Every Business Needs a Modern Website",
    description:
      "Learn why having a professionally designed, responsive and fast website is critical for business credibility and customer acquisition.",
    category: "Web Development",
    image: "/images/blog-2.jpg",
    slug: "why-every-business-needs-modern-website",
  },
  {
    id: 3,
    title: "How Social Media Builds Brand Visibility",
    description:
      "Explore how strategic social media marketing can help brands build awareness, engage communities and drive measurable growth.",
    category: "Social Media",
    image: "/images/blog-3.jpg",
    slug: "how-social-media-builds-brand-visibility",
  },
];
