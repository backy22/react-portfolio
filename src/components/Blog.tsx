import { Link } from 'react-router';
import { headerLeft } from './Navbar.css';

const Blog = () => {
  return (
    <header>
      <div className={headerLeft}>
        <div className="logo"><Link to='/#homemain' className='logo-link'>#AyaTsubakino</Link></div>
      </div>
      <section>
        <h1>Blog</h1>
        <div>Under Construction</div>
      </section>
    </header>
  );
};

export default Blog;