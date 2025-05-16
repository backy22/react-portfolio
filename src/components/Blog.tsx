import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import BlogHeader from './BlogHeader';
import { blogContainer, blogContent } from './Blog.css';
import { BlogPost, getBlogPosts } from '../utils/api';

const Blog = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className={blogContainer}>
        <BlogHeader />
        <main className={blogContent}>
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className={blogContainer}>
        <BlogHeader />
        <main className={blogContent}>
          <p>Error: {error}</p>
        </main>
      </div>
    );
  }

  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="blog-container">
        <h1>Blog Not Found</h1>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className="back-link">← Back to Blog List</Link>
      </div>
    );
  }

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Handle headers
      if (line.startsWith('# ')) {
        return <h1 key={index}>{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index}>{line.slice(4)}</h3>;
      }
      // Handle bullet points
      if (line.startsWith('• ')) {
        return <li key={index}>{line.slice(2)}</li>;
      }
      // Handle numbered lists
      if (/^\d+\.\s/.test(line)) {
        return <li key={index}>{line.slice(line.indexOf(' ') + 1)}</li>;
      }
      // Handle code blocks
      if (line.startsWith('```')) {
        return <pre key={index}><code>{line.slice(3)}</code></pre>;
      }
      // Handle quotes
      if (line.startsWith('> ')) {
        return <blockquote key={index}>{line.slice(2)}</blockquote>;
      }
      // Regular paragraphs
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className={blogContainer}>
      <BlogHeader />
      <main className={blogContent}>
        <Link to="/blogs" className="back-link">← Back to Blog List</Link>
        <article className="blog-post">
          <h1>{post.title}</h1>
          <p className="blog-date">{post.date}</p>
          <div className="blog-content">
            {formatContent(post.content)}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog;