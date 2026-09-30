
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-to-JSX parser for better styling
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, index) => {
      block = block.trim();
      if (!block) return null;

      if (block.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-[#071B3A] mt-10 mb-6 pb-2 border-b border-gray-100">
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-bold text-[#315CF5] mt-8 mb-4">
            {block.replace('### ', '')}
          </h3>
        );
      }
      
      // Parse bold text
      const parts = block.split(/(\*\*.*?\*\*)/g);
      
      return (
        <p key={index} className="text-gray-600 text-lg leading-relaxed mb-6">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="font-bold text-[#071B3A]">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen font-sans">
      <Navbar />
      
      <main className="container-main py-32 md:py-40">
        <div className="max-w-5xl mx-auto mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#315CF5] font-bold hover:gap-3 transition-all bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 hover:shadow-md">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 max-w-5xl mx-auto">
          
          {/* Top Section: Image (Left) and Title (Right) */}
          <div className="flex flex-col lg:flex-row border-b border-gray-100">
            
            {/* Image Section - Left */}
            <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative bg-[#f8f9ff] flex items-center justify-center p-4 border-r border-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-contain rounded-xl" 
              />
            </div>
            
            {/* Title Section - Right */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
              <div className="inline-block bg-[#EEF2FF] text-[#315CF5] font-bold px-4 py-1.5 rounded-full text-sm mb-6 w-max">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#071B3A] leading-tight tracking-tight">
                {post.title}
              </h1>
            </div>
            
          </div>
          
          {/* Content Section below */}
          <div className="p-8 md:p-12 lg:p-16 bg-white">
            <div className="max-w-none text-gray-800">
              {post.content ? (
                <div>
                  {renderContent(post.content)}
                </div>
              ) : (
                <p className="text-xl leading-relaxed text-gray-600">
                  {post.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

