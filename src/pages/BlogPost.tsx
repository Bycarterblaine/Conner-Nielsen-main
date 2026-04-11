import { useParams, Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { blogs } from "@/data/blogs";

const BOOK_URL = "https://myworkspacebfb9d.myclickfunnels.com/schedule/ic-with-conner";

function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog post not found.{" "}
        <Link to="/" className="ml-2 text-[#A10D02] underline">
          Go home
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-white text-gray-900">
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

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link to="/" className="text-sm text-[#A10D02] font-semibold mb-6 inline-block hover:underline">
          ← Back
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-10">
          {blog.date} · {blog.readTime}
        </p>
        <div className="space-y-6 text-gray-800 leading-relaxed text-base whitespace-pre-line">
          {blog.content}
        </div>

        <div className="mt-16 bg-gray-50 border border-[#A10D02]/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to take the next step?</h3>
          <p className="text-gray-600 text-sm mb-6">
            Book a free 15-minute call — no pressure, just real answers.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
            className="bg-[#A10D02] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-[#8D0B01] transition-colors">
            <Calendar className="w-4 h-4" />
            Book Your Free Call
          </a>
        </div>
      </main>
    </div>
  );
}

export default BlogPost;
