import { Calendar } from 'lucide-react';
import { blogs } from '@/data/blogs';

const BOOK_URL =
  'https://myworkspacebfb9d.myclickfunnels.com/schedule/ic-with-conner';

function App() {
  const blog = blogs[0]; // 👈 pick first blog

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center">

          {/* Left */}
          <div className="flex items-center flex-1">
            <span className="font-semibold text-lg">Conner Nielsen</span>
          </div>

          {/* Center Nav */}
          <div className="hidden md:flex items-center justify-center gap-8 text-sm flex-1">
            <button onClick={() => scrollToSection('videos')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Videos
            </button>

            <button onClick={() => scrollToSection('blogs')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Blogs
            </button>

            <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Reviews
            </button>

            <button onClick={() => scrollToSection('proof')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Proof
            </button>
          </div>

          {/* Right CTA */}
          <div className="flex justify-end flex-1">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A10D02] hover:bg-[#8D0B01] text-white px-6 py-2.5 rounded-full font-medium transition-transform duration-150 transform hover:translate-y-1 inline-block whitespace-nowrap"
            >
              Book a Call
            </a>
          </div>

        </div>
      </header>

      {/* ── Blog Content ── */}
      <main className="max-w-3xl mx-auto px-6 py-24">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        {/* Meta */}
        <p className="text-gray-600 text-sm mb-10">
          {blog.date} • {blog.readTime}
        </p>

        {/* Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed text-base whitespace-pre-line">
          {blog.content}
        </div>

      </main>

    </div>
  );
}

export default App;
