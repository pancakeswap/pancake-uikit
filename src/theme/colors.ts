import { Colors } from "../styled.d";

export const lightColors: Colors = {
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
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
};

export const darkColors: Colors = {
  ...lightColors,
  primaryDark: "#0098A1",
  tertiary: "#293450",
  contrast: "#FFFFFF",
  input: "#151021",
  background: "#191326",
  backgroundDisabled: "#524B63",
  text: "#ED4B9E",
  textSubtle: "#A28BD4",
  textDisabled: "#302B38",
};
