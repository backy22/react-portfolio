import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { blogHeader, headerLeft } from './Blog.css';
import { clsx } from 'clsx';

const BlogHeader: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentIsTop = window.scrollY < window.innerHeight - 120;
      if (currentIsTop !== isTop) {
        setIsTop(currentIsTop);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [isTop]);

  return (
    <header className={clsx(blogHeader, isTop ? 'white-header' : 'blue-header')}>
      <div className={headerLeft}>
        <div className='logo'>
          <Link 
            to='/#homemain' 
            className="logo-link"
          >
            #AyaTsubakino
          </Link>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader; 