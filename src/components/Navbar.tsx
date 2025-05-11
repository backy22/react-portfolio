import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { pc, sp, pcLink, pcLinkBlueHeader, headerLeft, burgerBtn, burgerDiv, burgerDivOpen, mobileMenu, mobileMenuOpen, mobileMenuUl, mobileMenuLink, toggleBtn, toggleBtnDarkMode, toggleIcon } from './Navbar.css';

interface MenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<{ isDarkMode: boolean; toggleTheme: () => void }> = ({ isDarkMode, toggleTheme }) => (
  <button onClick={toggleTheme} className={`${toggleBtn} ${isDarkMode ? toggleBtnDarkMode : ''}`} aria-label="Toggle theme">
    <span className={`${toggleIcon} sun`}>☀️</span>
    <span className={`${toggleIcon} moon`}>🌙</span>
  </button>
);

const Menu = ({ open, setOpen, isDarkMode, toggleTheme }: MenuProps) => {
  return (
    <nav className={mobileMenu + ' ' + (open ? mobileMenuOpen : '')} onClick={() => setOpen(!open)}>
      <ul className={mobileMenuUl}>
        <li><Link to="/#homemain" className={mobileMenuLink} >Home</Link></li>
        <li><Link smooth to="/#skills" className={mobileMenuLink}>Skills</Link></li>
        <li><Link smooth to="/#projects" className={mobileMenuLink}>Projects</Link></li>
        <li><Link smooth to="/#about" className={mobileMenuLink}>About</Link></li>
      </ul>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </nav>
  );
};

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <button className={burgerBtn} onClick={() => setOpen(!open)}>
      <div className={burgerDiv + ' ' + (open ? burgerDivOpen : '')}/>
      <div className={burgerDiv + ' ' + (open ? burgerDivOpen : '')}/>
      <div className={burgerDiv + ' ' + (open ? burgerDivOpen : '')}/>
    </button>
  );
};

const BurgerMenu = ({ isDarkMode, toggleTheme }: { isDarkMode: boolean; toggleTheme: () => void }) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={node} className={sp}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
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
    <header className={isTop ? 'white-header' : 'blue-header'}>
      <div className={headerLeft}>
        <div className="logo"><Link to='/#homemain' className='logo-link'>#AyaTsubakino</Link></div>
      </div>
      <BurgerMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <nav className={pc}>
        <ul>
          <li><Link className={pcLink + ' ' + (isTop ? '' : pcLinkBlueHeader)} to="/#homemain">Home</Link></li>
          <li><Link className={pcLink + ' ' + (isTop ? '' : pcLinkBlueHeader)} smooth to="/#skills">Skills</Link></li>
          <li><Link className={pcLink + ' ' + (isTop ? '' : pcLinkBlueHeader)} smooth to="/#projects">Projects</Link></li>
          <li><Link className={pcLink + ' ' + (isTop ? '' : pcLinkBlueHeader)} smooth to="/#about">About</Link></li>
          <li><Link className={pcLink + ' ' + (isTop ? '' : pcLinkBlueHeader)} smooth to="/blogs">Blog</Link></li>
          <li><ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 