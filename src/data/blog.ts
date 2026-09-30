export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How SEO Helps Businesses Grow",
    description:
      "Discover how search engine optimization can increase your website traffic, improve visibility and generate quality leads for your business.",
    category: "SEO",
    image: "/seo_growth_images.jpg",
    slug: "how-seo-helps-businesses-grow",
  },
  {
    id: 2,
    title: "Why Every Business Needs a Modern Website",
    description:
      "Learn why having a professionally designed, responsive and fast website is critical for business credibility and customer acquisition.",
    category: "Web Development",
    image: "/needs_websites_images.jpg",
    slug: "why-every-business-needs-modern-website",
  },
  {
    id: 3,
    title: "How Social Media Builds Brand Visibility",
    description:
      "Explore how strategic social media marketing can help brands build awareness, engage communities and drive measurable growth.",
    category: "Social Media",
    image: "/online_visilibility.jpg",
    slug: "how-social-media-builds-brand-visibility",
    content: `
## The Power of Social Media in 2026

In today's hyper-connected world, social media is no longer just an option—it is a critical pillar of brand visibility. Billions of users scroll through platforms like Instagram, LinkedIn, and Facebook every single day. For businesses, this presents an unprecedented opportunity to engage directly with their target audience.

### 1. Building Authentic Connections
Unlike traditional advertising, social media allows you to build a community. By sharing behind-the-scenes content, responding to comments, and showing the human side of your business, you foster trust and brand loyalty that money can't buy.

### 2. Algorithmic Reach and Virality
Modern social media algorithms favor high-engagement content. A single creative reel or thought-provoking post can be shared thousands of times, generating massive organic visibility and driving high-quality traffic directly to your website.

### 3. Targeted Advertising
Beyond organic reach, social platforms offer some of the most sophisticated targeting tools available. You can ensure your brand is seen exclusively by the demographics most likely to convert into paying customers.

**Ready to grow your brand?** A strategic, consistent social media presence is the key to dominating your market online.
    `
  },
];
