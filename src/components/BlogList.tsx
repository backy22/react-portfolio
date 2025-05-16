import { Link } from 'react-router';
import BlogHeader from './BlogHeader';
import { blogContainer, blogContent, blogGrid, blogCard, blogCardTitle, blogDate } from './Blog.css';
import { BlogPosts } from '../blogs/BlogPosts';

const BlogList = () => {
  return (
    <div className={blogContainer}>
      <BlogHeader />
      <div className={blogContent}>
        <div className={blogGrid}>
          {BlogPosts.map((post) => (
            <Link 
              to={`/blogs/${post.slug}`} 
              key={post.slug}
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