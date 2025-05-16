import { Link, useParams } from 'react-router';
import BlogHeader from './BlogHeader';
import { blogContainer, blogContent } from './Blog.css';
import YoutubeMcpServer from '../blogs/youtube-mcp-server';
import { BlogPosts } from '../blogs/BlogPosts';

const Blog = () => {
  const { slug } = useParams();

  const post = BlogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="blog-container">
        <h1>Blog Not Found</h1>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className="back-link">← Back to Blog List</Link>
      </div>
    );
  }

  return (
    <div className={blogContainer}>
      <BlogHeader />
      <main className={blogContent}>
        <Link to="/blogs" className="back-link">← Back to Blog List</Link>
        <article className="blog-post">
          <h1>{post.title}</h1>
          <p className="blog-date">{post.date}</p>
          <div className="blog-content">
            <YoutubeMcpServer />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog;