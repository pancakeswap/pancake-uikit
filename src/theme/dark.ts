import { DefaultTheme } from "styled-components";
import mediaQueries, { breakpoints } from "./mediaQueries";
import { dark as darkCard } from "../components/Card/theme";
import colors from "./colors";

const darkTheme: DefaultTheme = {
  isDark: true,
  colors: {
    ...colors,
    primaryDark: "#0098A1",
    tertiary: "#293450",
    contrast: "#FFFFFF",
    input: "#151021",
    background: "#191326",
    backgroundDisabled: "#524B63",
    text: "#ED4B9E",
    textSubtle: "#A28BD4",
    textDisabled: "#302B38",
  },
  card: darkCard,
  scales: {
    breakpoints,
    mediaQueries,
  },
  shadows: {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  },
};

export default darkTheme;
