import "styled-components";

export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;
    colors: {
      primary: string;
      primaryBright: string;
      primaryDark: string;
      primaryWeak: string;
      secondary: string;
      tertiary: string;
      success: string;
      failure: string;
      contrast: string;
      input: string;
      background: string;
      backgroundDisabled: string;
      text: string;
      textDisabled: string;
      textSubtle: string;
    };
    scales: {
      breakpoints: Breakpoints;
      mediaQueries: MediaQueries;
    };
    shadows: {
      level1: string;
    };
  }
}
