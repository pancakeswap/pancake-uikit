import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      success: string;
      failure: string;
      contrast: string;
      input: string;
      background: string;
      card: string;
      text: string;
      textSubtle: string;
    };
  }
}
