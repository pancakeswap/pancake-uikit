import { DefaultTheme } from "styled-components";
import { dark as darkButton } from "../components/Button/theme";
import { dark as darkCard } from "../components/Card/theme";
import { dark as darkToggle } from "../components/Toggle/theme";
import { dark as darkNav } from "../widgets/Nav/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  button: darkButton,
  colors: darkColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
};

export default darkTheme;
