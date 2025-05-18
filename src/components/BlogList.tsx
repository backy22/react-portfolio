import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BlogHeader from './BlogHeader';
import { blogContainer, blogContent, blogGrid, blogCard, blogCardTitle, blogDate } from './Blog.css';
import { BlogPost, getBlogPosts } from '../utils/api';

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('Fetching blog posts...');
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
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
        <div className={blogContent}>
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={blogContainer}>
        <BlogHeader />
        <div className={blogContent}>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={blogContainer}>
      <BlogHeader />
      <div className={blogContent}>
        <div className={blogGrid}>
          {posts.map((post) => (
            <Link 
              to={`/blogs/${post.slug}`} 
              key={post.id}
              className={blogCard}
            >
              <h2 className={blogCardTitle}>{post.title}</h2>
              <p className={blogDate}>{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;