import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalFontFace('Dosis', {
  src: 'url("../fonts/Dosis-VariableFont.ttf") format("truetype")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});

// Global styles
globalStyle('.root', {
  margin: 0,
  fontWeight: 300,
  fontStyle: 'normal',
  fontSize: 'calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)))',
  lineHeight: 1.8,
  scrollBehavior: 'smooth',
  padding: '0',
  background: vars.background,
  color: vars.text,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  transition: 'all 0.25s linear',
});

globalStyle('h1, h2, h3', {
  fontFamily: 'Dosis, sans-serif',
});

globalStyle('h1', {
  marginBottom: '40px',
});

globalStyle('img', {
  width: '100%',
  height: 'auto',
  verticalAlign: 'bottom',
});

globalStyle('section', {
  width: '80vw',
  margin: '0 auto',
  paddingTop: '80px',
});

globalStyle('section h1', {
  '@media': {
    'screen and (max-width: 640px)': {
      textAlign: 'center',
    },
  },
});

globalStyle('button', {
  border: '1px solid',
  padding: '15px 27px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '1.2em',
  fontFamily: 'Dosis, sans-serif',
  margin: '15px',
  background: 'transparent',
});

globalStyle('button:hover', {
  background: '#222250',
  color: '#ffffff',
});

globalStyle('video', {
  maxHeight: '90vh',
});

globalStyle('.video', {
  position: 'relative',
  height: '0',
  paddingTop: '56.25%',
  marginBottom: '20px',
});

globalStyle('.video iframe', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
});

globalStyle('a', {
  color: vars.primary,
  textDecoration: 'none',
});

// global class styles
globalStyle('.highlight', {
  color: vars.highlight,
  borderBottom: `2px solid #5ecbf5`,
});

// header
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

// home main
globalStyle('.homemain', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '85vh',
  width: '60vw',
  position: 'relative',
});

globalStyle('.logo', {
  color: '#5ecbf5',
});

globalStyle('.Typist', {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle('.typing', {
  fontSize: '1.8em',
  letterSpacing: '.10em',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
});

globalStyle('.Cursor--blinking', {
  display: 'none',
});

globalStyle('.hand', {
  margin: '0',
  display: 'inline',
});

// skills
globalStyle('#skills img', {
  height: '30px',
});

globalStyle('.skills-wrapper', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  textAlign: 'center',
  gridRowGap: '75px',

  '@media': {
    'screen and (max-width: 640px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

globalStyle('.skill-name', {
  marginTop: '15px',
});

// projects
globalStyle('.projects-wrapper', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '60px',

  '@media': {
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
});

globalStyle('.project', {
  '@media': {
    'screen and (max-width: 640px)': {
      marginBottom: '30px',
    },
  },
});

globalStyle('.project-thumbnail', {
  color: vars.text,
  boxShadow: vars.boxShadow,
});

globalStyle('.thumbnail', {
  overflow: 'hidden',
});

globalStyle('.project-thumbnail img', {
  transition: '.3s ease-in-out',
});

globalStyle('.skills', {
  padding: '7px 15px',
  fontSize: '0.9em',
});

globalStyle('.projects-wrapper h3', {
  padding: '0',
  marginBottom: '5px',
  marginTop: '18px',
});

globalStyle('.project-title', {
  display: 'flex',
});

globalStyle('.project-title div:first-child', {
  marginRight: 'auto',
});

globalStyle('.project-title a', {
  display: 'inline-block',
});

globalStyle('.linkicon', {
  height: '1.2em',
  marginLeft: '10px',
  verticalAlign: 'middle',
  width: '20px',
});

globalStyle('.linkicon:hover > .cls-1', {
  fill: '#5ecbf5',
  transform: 'translateY(-2px)',
  transition: '0.3s',
});

globalStyle('.projects-wrapper p', {
  margin: '0',
});

// about
globalStyle('.profile-image', {
  float: 'left',
  width: '25%',

  '@media': {
    'screen and (max-width: 640px)': {
      width: '100%',
      textAlign: 'center',
    },
  },
});

globalStyle('.profile-image img', {
  '@media': {
    'screen and (max-width: 640px)': {
      width: '80%',
    },
  },
});

globalStyle('.profile-text', {
  float: 'right',
  width: '70%',

  '@media': {
    'screen and (max-width: 640px)': {  
      width: '100%',
    },
  },
});

globalStyle('.profile-text p', {
  padding: '0',
  margin: '0',

  '@media': {
    'screen and (max-width: 640px)': {
      paddingTop: '20px',
    },
  },
});

globalStyle('.profile-wrapper', {
  overflow: 'hidden',
});

globalStyle('.email', {
  fontSize: '1.3em',
  fontWeight: 700,
});

globalStyle('.resume-button', {
  textAlign: 'left',

  '@media': {
    'screen and (max-width: 640px)': {
      textAlign: 'center',
    },
  },
});

globalStyle('.resume-button button', {
  marginLeft: '0',
  border: `1px solid ${vars.text}`,
  color: vars.text,

  '@media': {
    'screen and (max-width: 640px)': {
      margin: '15px'
    },
  },
});

// footer
globalStyle('footer section', {
  paddingTop: '10px',
  textAlign: 'center',
});

globalStyle('footer h1', {
  marginBottom: '10px',
});

globalStyle('footer', {
  backgroundColor: '#5ecbf5',
  color: '#ffffff',
});

globalStyle('.snslink', {
  '@media': {
    'screen and (max-width: 640px)': {
      textAlign: 'center',
    },
  },
});

globalStyle('.snslink a', {
  '@media': {
    'screen and (max-width: 640px)': {
      margin: '0 5%',
    },
  },
});

globalStyle('.snsicon', {
  margin: '10px 5%',
  width: '30px',

  '@media': {
    'screen and (max-width: 640px)': {
      margin: '0 auto',
    },
  },
});

globalStyle('.snsicon > .cls-1', {
  fill: '#ffffff',
});

globalStyle('.snsicon:hover > .cls-1', {
  fill: '#222250',
  transition: '0.3s',
});

globalStyle('.copyright', {
  textAlign: 'center',
  marginTop: '10px',
});

// detail main
globalStyle('.detailmain', {
  height: '85vh',
});

globalStyle('.detailmain h1', {
  fontSize: '2.5em',
});

globalStyle('.detailmain-flexbox', {
  position: 'absolute',
  top: '7vh',
  bottom: '0',
  right: '0',
  left: '0',
  margin: 'auto',
  display: 'flex',
  width: '100%',
  textAlign: 'center',
  verticalAlign: 'middle',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 640px)': {
      display: 'block',
    },
  },
});

globalStyle('.detailmain-box', {
  width: '50%',
  marginTop: '-50px',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 640px)': {
      width: '100%',
      height: '50vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

globalStyle('.detailmain-box-text', {
  '@media': {
    'screen and (max-width: 640px)': {
      marginBottom: '-50px',
    },
  },
});

globalStyle('.detailmain-box-image', {
  '@media': {
    'screen and (max-width: 640px)': {
      marginTop: '-50px',
    },
  },
});

globalStyle('.detailmain-box img', {
  marginTop: '50px',
  width: '70vw',

  '@media': {
    'screen and (max-width: 640px)': {
      width: '80%',
    },
  },
});

// overview
globalStyle('#overview img', {
  marginTop: '30px',
});

// branding package
globalStyle('.branding-package img', {
  width: '50%',
});

// moodboard
globalStyle('.moodboard img', {
  width: '50%',
  verticalAlign: 'top',
});

// mockup
globalStyle('.mockup-button', {
  textAlign: 'center',
});

globalStyle('.mockup img', {
  margin: '20px 0',
});

// product
globalStyle('.product-buttons', {
  textAlign: 'center',
});

// project nav
globalStyle('.project-nav', {
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '12px',
    },
  },
});

globalStyle('.project-nav .fas', {
  margin: '10px 20px',
});

globalStyle('.project-nav a', {
  textDecoration: 'none',
  color: '#000',
});

globalStyle('.project-nav a i', {
  verticalAlign: 'middle',
});

globalStyle('.left-arrow', {
  float: 'left',
  width: '50%',
  display: 'inline-block',
  textAlign: 'right',
});

globalStyle('.right-arrow', {
  float: 'right',
  width: '50%',
});

globalStyle('.project-nav a:hover', {
  color: '#5ecbf5',
  transition: '0.3s',
});

globalStyle('.project-nav a.disabled', {
  pointerEvents: 'none',
  color: '#9e9e9ed1',
});








































