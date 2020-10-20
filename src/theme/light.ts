import { DefaultTheme } from "styled-components";
import mediaQueries, { breakpoints } from "./mediaQueries";

const lightTheme: DefaultTheme = {
  isDark: false,
  colors: {
    primary: "#1FC7D4",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    primaryWeak: "#53DEE9",
    secondary: "#7645D9",
    tertiary: "#EFF4F5",
    success: "#31D0AA",
    failure: "#ED4B9E",
    contrast: "#191326",
    input: "#F4F2F7",
    background: "#FAF9FA",
    backgroundDisabled: "#E9EAEB",
    text: "#452A7A",
    textDisabled: "#BDC2C4",
    textSubtle: "#AEA0D6",
  },
  scales: {
    breakpoints,
    mediaQueries,
  },
  shadows: {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  },
};

export default lightTheme;
