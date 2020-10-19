import { DefaultTheme } from "styled-components";
import mediaQueries, { breakpoints } from "./mediaQueries";
import palette from "./palette";

const lightTheme: DefaultTheme = {
  colors: {
    ...palette,
    primary: palette.iris,
    secondary: palette.peach,
    tertiary: "#EFF4F5",
    background: palette.white,
    dark: palette.onyx,
    failure: palette.fuschia,
    success: palette.evergreen,
    text: palette.onyx,
    textSubtle: palette.lightSlate,
    accent: palette.dorian,
    light: palette.cloud,
  },
  scales: {
    breakpoints,
    mediaQueries,
  },
};

export default lightTheme;
