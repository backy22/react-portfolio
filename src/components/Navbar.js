import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import resume from '../img/Resume_AyaTsubakino.pdf';
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

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
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
  render() {
    return (
      <header>
        <div className="resume">
          <a href={resume} target="blank">Resume</a>
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
