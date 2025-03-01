import React, { useState, useRef, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

interface StyledMenuProps {
  open: boolean;
}

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

const StyledThemeToggle = styled.button<{ isDarkMode: boolean }>`
  background: transparent;
  border: 2px solid #343078;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  position: relative;
  width: 50px;
  height: 24px;
  margin-left: 20px;
  margin-top: 0px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #222250;
  }

  &::after {
    content: '';
    background: #343078;
    border-radius: 50%;
    position: absolute;
    left: ${({ isDarkMode }) => isDarkMode ? '26px' : '4px'};
    height: 20px;
    width: 20px;
    transition: all 0.3s linear;
  }

  .icon {
    color: #343078;
    font-size: 14px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    &.sun {
      left: 6px;
    }
    
    &.moon {
      right: 6px;
    }
  }

  @media (max-width: 576px) {
    margin: 20px auto;
    position: relative;
    top: auto;
    right: auto;
  }
`;

const ThemeToggle: React.FC<{ isDarkMode: boolean; toggleTheme: () => void }> = ({ isDarkMode, toggleTheme }) => (
  <StyledThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode} aria-label="Toggle theme">
    <span className="icon sun">☀️</span>
    <span className="icon moon">🌙</span>
  </StyledThemeToggle>
);

const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
      color: #ffffff;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open, setOpen, isDarkMode, toggleTheme }: MenuProps) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li><Link to="/#homemain">Home</Link></li>
        <li><Link smooth to="/#skills">Skills</Link></li>
        <li><Link smooth to="/#projects">Projects</Link></li>
        <li><Link smooth to="/#about">About</Link></li>
      </ul>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </StyledMenu>
  );
};

const StyledBurger = styled.button<StyledMenuProps>`
  position: absolute;
  top: 1rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 0 15px;

  &:focus, &:hover {
    outline: none;
    background: transparent;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#ffffff' : '#222250'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const BurgerMenu = ({ isDarkMode, toggleTheme }: { isDarkMode: boolean; toggleTheme: () => void }) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={node} className="sp">
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
      <div className="header-left">
        <div className="logo"><Link to='/#homemain'>#AyaTsubakino</Link></div>
      </div>
      <BurgerMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <nav className="pc">
        <ul>
          <li><Link to="/#homemain">Home</Link></li>
          <li><Link smooth to="/#skills">Skills</Link></li>
          <li><Link smooth to="/#projects">Projects</Link></li>
          <li><Link smooth to="/#about">About</Link></li>
          <li><ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 