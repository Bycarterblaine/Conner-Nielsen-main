import { useParams } from "react-router-dom";
import { blogs } from "@/data/blogs";

function BlogPost() {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">
        {blog.date} • {blog.readTime}
      </p>

      <div className="whitespace-pre-line text-gray-800 leading-relaxed">
        {blog.content}
      </div>
    </div>
  );
}

export default BlogPost;
