import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      highlight: string;
      headerBg: string;
      headerBgAlt: string;
    };
    shadows: {
      default: string;
    };
  }
} 