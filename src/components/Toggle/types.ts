import { InputHTMLAttributes } from "react";

export type ToggleTheme = {
  handleBackground: string;
};

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  small?: boolean;
}
