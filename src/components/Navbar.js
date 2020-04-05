import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const StyledMenu = styled.nav`
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
`

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li>
          <Link to="/#homemain">Home</Link>
        </li>
        <li>
          <Link smooth to="/#skills">Skills</Link>
        </li>
        <li>
          <Link smooth to="/#projects">Projects</Link>
        </li>
        <li>
          <Link smooth to="/#about">About</Link>
        </li>
      </ul>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
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
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div ref={node} className="sp">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )  
}

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < window.innerHeight - 120;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      <header className={this.state.isTop ? 'white-header' : 'blue-header'}>
        <div className="header-left">
          <div className="logo"><Link to='/#homemain'>#AyaTsubakino</Link></div>
        </div>
        <BurgerMenu />
        <nav className="pc">
          <ul>
            <li>
              <Link to="/#homemain">Home</Link>
            </li>
            <li>
              <Link smooth to="/#skills">Skills</Link>
            </li>
            <li>
              <Link smooth to="/#projects">Projects</Link>
            </li>
            <li>
              <Link smooth to="/#about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
