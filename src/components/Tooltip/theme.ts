import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: darkColors.card,
  text: darkColors.text
};

export const dark: CardTheme = {
  background: lightColors.card,
  text: lightColors.text
};
