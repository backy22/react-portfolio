import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.highlight};
  }

  .white-header {
    background-color: ${({ theme }) => theme.colors.headerBg};
  }

  .blue-header {
    background-color: ${({ theme }) => theme.colors.headerBgAlt};
  }
`; 