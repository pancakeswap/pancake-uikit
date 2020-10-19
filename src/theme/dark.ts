import { DefaultTheme } from "styled-components";
import mediaQueries, { breakpoints } from "./mediaQueries";
import palette from "./palette";

const darkTheme: DefaultTheme = {
  colors: {
    ...palette,
    primary: palette.iris,
    secondary: palette.peach,
    tertiary: "#EFF4F5",
    background: palette.onyx,
    dark: palette.onyx,
    failure: palette.fuschia,
    success: palette.evergreen,
    text: palette.white,
    textSubtle: palette.lightSlate,
    accent: palette.dorian,
    light: palette.cloud,
  },
  scales: {
    breakpoints,
    mediaQueries,
  },
};

export default darkTheme;
