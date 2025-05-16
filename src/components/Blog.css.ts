import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const blogContainer = style({
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
  minHeight: '100vh',
  width: '100%',
  position: 'relative'
});

export const blogHeader = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '10px 10vw',
  width: '100%',
  boxSizing: 'border-box',
  zIndex: 1000,
  transition: 'background-color 0.3s ease',
  height: '64px'
});

globalStyle('.white-header', {
  backgroundColor: '#ffffff'
});

globalStyle('.blue-header', {
  backgroundColor: '#5ecbf5'
});

export const headerLeft = style({
  float: 'left',
  '@media': {
    'screen and (max-width: 640px)': {
      marginLeft: '10px',
    },
  }
});

export const logo = style({
  fontSize: '1.5rem',
});

globalStyle('.logo-link', {
  textDecoration: 'none',
  color: '#5ecbf5'
});

globalStyle('.blue-header .logo-link', {
  color: '#ffffff'
});

globalStyle('.blue-header .logo-link:hover', {
  color: '#222250',
  transition: '0.3s'
});

export const blogContent = style({
  width: '80vw',
  margin: '0 auto',
  paddingTop: '80px',
});

export const blogGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '2rem',
  padding: '2rem 0'
});

export const blogCard = style({
  background: 'white',
  borderRadius: '8px',
  padding: '1.5rem',
  textDecoration: 'none',
  color: 'inherit',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
  }
});

export const blogCardTitle = style({
  margin: '0 0 1rem 0',
  fontSize: '1.25rem'
});

export const blogDate = style({
  color: '#666',
  fontSize: '0.9rem',
  margin: 0
});

export const blogPost = style({
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '0 1rem'
});

export const backLink = style({
  display: 'inline-block',
  margin: '1rem 0',
  color: '#666',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  ':hover': {
    color: '#000'
  }
}); 