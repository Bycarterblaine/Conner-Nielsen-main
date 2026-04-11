import { useParams, Link } from "react-router-dom";
import { Calendar, Star, Facebook, Instagram } from "lucide-react";
import { blogs } from "@/data/blogs";

const BOOK_URL = "https://myworkspacebfb9d.myclickfunnels.com/schedule/ic-with-conner";

const RealtorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.975 0C5.362 0 0 5.362 0 11.975c0 6.612 5.362 11.975 11.975 11.975 6.612 0 11.975-5.363
      11.975-11.975C23.95 5.362 18.587 0 11.975 0zm2.99 18.406l-2.953-4.938h-1.08v4.938H8.268V5.594h4.183
      c2.386 0 3.996 1.61 3.996 3.996 0 1.847-1.003 3.136-2.493 3.694l3.255 5.122h-2.244zm-1.787-6.973
      c1.099 0 1.869-.718 1.869-1.843s-.77-1.843-1.869-1.843h-2.246v3.686h2.246z"
    />
  </svg>
);

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  lines.forEach((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<h3 key={i} className="text-xl font-bold mt-8 mb-2">{line.replace(/\*\*/g, '')}</h3>);
    } else if (line.trim() !== '') {
      elements.push(<p key={i} className="text-gray-700 leading-relaxed">{line}</p>);
    }
  });
  return elements;
}

function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);
  const otherBlogs = blogs.filter((b) => b.slug !== slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog post not found.
        <Link to="/" className="ml-2 text-[#A10D02] underline">Go home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center">
          <div className="flex items-center flex-1">
            <Link to="/" className="font-semibold text-lg hover:text-[#A10D02] transition-colors">
              Conner Nielsen
            </Link>
          </div>
          <div className="flex justify-end flex-1">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[#A10D02] hover:bg-[#8D0B01] text-white px-6 py-2.5 rounded-full font-medium transition-transform duration-150 transform hover:translate-y-1 inline-block whitespace-nowrap">
              Book a Call
            </a>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link to="/" className="text-sm text-[#A10D02] font-semibold mb-8 inline-block hover:underline">
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-10">{blog.date} · {blog.readTime}</p>
        <div className="space-y-4">
          {renderContent(blog.content)}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-50 border border-[#A10D02]/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to take the next step?</h3>
          <p className="text-gray-600 text-sm mb-6">Book a free 15-minute call — no pressure, just real answers.</p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
            className="bg-[#A10D02] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-[#8D0B01] transition-colors">
            <Calendar className="w-4 h-4" />
            Book Your Free Call
          </a>
        </div>
      </main>

      {/* Other Blog Posts */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherBlogs.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`}
                className="bg-white rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <p className="font-semibold text-lg text-gray-900 mb-3">{post.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-[#A10D02] text-sm font-semibold">Read More</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-bold text-xl">Conner Nielsen</span>
            <div className="text-center md:text-right">
              <p className="text-white">DFW Real Estate Expert</p>
              <div className="flex items-center justify-center md:justify-end gap-4 my-3">
                <a href="https://www.facebook.com/Close.Real.Estate.DFW" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-[#1877F2] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/connernielsendfwrealtor/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-[#E1306C] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.realtor.com/realestateagents/5cdc61989faa730012edb36e" target="_blank" rel="noopener noreferrer" aria-label="Realtor.com" className="text-white/60 hover:text-[#D92228] transition-colors">
                  <RealtorIcon />
                </a>
              </div>
              <a href="tel:8069288884" className="text-[#A10D02] font-mono hover:underline">806-928-8884</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            2026 © Conner Nielsen. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default BlogPost;
