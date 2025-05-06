import { globalStyle, globalFontFace, style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

globalStyle('header', {
  padding: '10px 10vw',
  width: '100%',
  boxSizing: 'border-box',
  background: '#ffffff',
  position: 'fixed',
  zIndex: 10,
  top: 0,

  '@media': {
    'screen and (max-width: 640px)': {
      height: '4rem',
    },
  },
});

globalStyle('.blue-header', {
  transition: 'background 3s',
  background: '#5ecbf5',
});

globalStyle('header button', {
  padding: '5px 10px',
  fontSize: '1em',
});

globalStyle('.logo-link', {
  textDecoration: 'none',
  color: '#5ecbf5',
});

globalStyle('.blue-header .logo-link', {
  color: '#ffffff',
});

globalStyle('.blue-header .logo-link:hover', {
  color: '#222250',
  transition: '0.3s',
});

globalStyle('.white-header', {
  backgroundColor: vars.headerBg,
})

globalStyle('.blue-header', {
  backgroundColor: vars.headerBgAlt,
})

globalStyle('.blue-header li a', {
  color: '#ffffff',
});

export const headerLeft = style({
  float: 'left',

  '@media': {
    'screen and (max-width: 640px)': {
      marginLeft: '10px',
    },
  },
});

globalStyle('nav', {
  float: 'right',

  '@media': {
    'screen and (max-width: 640px)': {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#5ecbf5',
      textAlign: 'center',
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: '5',
      fontSize: '1.5em',
    },
  },
});

globalStyle('nav ul', {
  listStyle: 'none',
  margin: '0',
  marginTop: '5px',
  display: 'flex',
  justifyContent: 'space-around',

  '@media': {
    'screen and (max-width: 640px)': {
      display: 'block',
      margin: '0',
      padding: '0',
      zIndex: '10',
    },
  },
});

globalStyle('nav li', {
  width: '100px',
  textAlign: 'center',
  fontSize: '0.8em',

  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '2em',
      margin: '0 auto',
      width: 'auto',
    },
  },
});

export const pc = style({
  '@media': {
    'screen and (max-width: 640px)': {
      display: 'none',
    },
  },
});

export const pcLink = style({
  ':active': {
    color: '#5ecbf5',
    transition: '0.3s',
  },
  ':hover': {
    color: '#5ecbf5',
    transition: '0.3s',
  },
});

export const pcLinkBlueHeader = style({
  ':active': {
    color: '#222250',
    transition: '0.3s',
  },
  ':hover': {
    color: '#222250',
    transition: '0.3s',
  },
});

export const sp = style({
  display: 'none',

  '@media': {
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
});

export const burgerBtn = style({
  position: 'absolute',
  top: '1rem',
  right: '3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '2rem',
  height: '2rem',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
  zIndex: '10',
  margin: '0 15px',
  ':focus': {
    outline: 'none',
    background: 'transparent',
  },
  ':hover': {
    outline: 'none',
    background: 'transparent',
  },
});

export const burgerDiv = style({
  width: '2rem',
  height: '0.25rem',
  background: '#222250',
  borderRadius: '10px',
  transition: 'all 0.3s linear',
  position: 'relative',
  transformOrigin: '1px',
  selectors: {
    '&:first-child': {
      transform: 'rotate(0)',
    },
    '&:nth-child(2)': {
      opacity: '1',
      transform: 'translateX(0)',
    },
    '&:nth-child(3)': {
      transform: 'rotate(0)',
    },
  },
});

export const burgerDivOpen = style({
  background: '#ffffff',
  selectors: {
    '&:first-child': {
      transform: 'rotate(45deg)',
    },
    '&:nth-child(2)': {
      opacity: '0',
      transform: 'translateX(20px)',
    },
    '&:nth-child(3)': {
      transform: 'rotate(-45deg)',
    },
  },
});

export const mobileMenu = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transform: 'translateX(-100%)',
  position: 'absolute',
  top: '0',
  right: '0',
  transition: 'transform 0.3s ease-in-out',
  width: '100%',
  height: '100vh',
  '@media': {
    '(max-width: 576px)': {
      width: '100%',
    },
  },
});

export const mobileMenuOpen = style({
  transform: 'translateX(0)',
});

export const mobileMenuUl = style({
  padding: '0',
  margin: '0',
  listStyle: 'none',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
});

export const mobileMenuLink = style({
  fontSize: '2rem',
  textTransform: 'uppercase',
  padding: '2rem 0',
  fontWeight: 'bold',
  letterSpacing: '0.5rem',
  color: 'black',
  textDecoration: 'none',
  transition: 'color 0.3s linear',
  ':hover': {
    color: '#343078',
  },
  '@media': {
    '(max-width: 576px)': {
      fontSize: '1.5rem',
      textAlign: 'center',
      color: '#ffffff',
    },
  },
});

export const toggleBtn = style({
  background: 'transparent',
  border: '2px solid #343078',
  borderRadius: '30px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '4px',
  position: 'relative',
  width: '50px',
  height: '24px',
  marginLeft: '20px',
  marginTop: '0px',
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px #222250',
  },
  selectors: {
    '&::after': {
      content: '',
      background: '#343078',
      borderRadius: '50%',
      position: 'absolute',
      left: '26px',
      height: '20px',
      width: '20px',
      transition: 'all 0.3s linear',
    },
  },
  '@media': {
    '(max-width: 576px)': {
      margin: '20px auto',
      position: 'relative',
      top: 'auto',
      right: 'auto',
    },
  },
});

export const toggleBtnDarkMode = style({
  selectors: {
    '&::after': {
      left: '4px',
    },
  },
});

export const toggleIcon = style({
  color: '#343078',
  fontSize: '14px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  selectors: {
    '&.sun': {
      left: '6px',
    },
    '&.moon': {
      right: '6px',
    },
  },
});





