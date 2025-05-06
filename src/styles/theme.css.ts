import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: null,
  highlight: null,
  headerBg: null,
  headerBgAlt: null,
  boxShadow: null,
});

export const lightTheme = createTheme(vars, {
  primary: '#343078',
  secondary: '#222250',
  background: '#ffffff',
  text: '#000000',
  highlight: '#343078',
  headerBg: 'rgba(255, 255, 255, 0.9)',
  headerBgAlt: '#5ecbf5',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
});

export const darkTheme = createTheme(vars, {
  primary: '#6661B7',
  secondary: '#8B89B5',
  background: '#1a1a1a',
  text: '#ffffff',
  highlight: '#6661B7',
  headerBg: 'rgba(26, 26, 26, 0.9)',
  headerBgAlt: '#5ecbf5',
  boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)',
});