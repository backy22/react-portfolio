import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#343078',
    secondary: '#222250',
    background: '#ffffff',
    text: '#000000',
    highlight: '#343078',
    headerBg: 'rgba(255, 255, 255, 0.9)',
    headerBgAlt: '#5ecbf5',
  },
  shadows: {
    default: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#6661B7',
    secondary: '#8B89B5',
    background: '#1a1a1a',
    text: '#ffffff',
    highlight: '#6661B7',
    headerBg: 'rgba(26, 26, 26, 0.9)',
    headerBgAlt: '#5ecbf5',
  },
  shadows: {
    default: '0 2px 4px rgba(255, 255, 255, 0.1)',
  }
}; 