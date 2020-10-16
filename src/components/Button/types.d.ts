import { ButtonHTMLAttributes, ReactNode } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "md" | "sm";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
