import { darkColors, lightColors } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: darkColors.card,
  text: darkColors.text
};

export const dark: TooltipTheme = {
  background: lightColors.card,
  text: lightColors.text
};
