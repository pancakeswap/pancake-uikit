import { ElementType, ReactNode } from "react";
import { SpaceProps } from "styled-system";

export const sizes = {
  SM: "sm",
  MD: "md",
} as const;

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  TEXT: "text",
  DANGER: "danger",
  SUBTLE: "subtle",
  SUCCESS: "success",
} as const;

export type Sizes = typeof sizes[keyof typeof sizes];
export type Variants = typeof variants[keyof typeof variants];

/* eslint-disable @typescript-eslint/ban-types */
type MergeElementProps<T extends React.ElementType, P extends object = {}> = Omit<
  React.ComponentPropsWithRef<T>,
  keyof P
> &
  P;

export interface ButtonBaseProps extends SpaceProps {
  variant?: Variants;
  size?: Sizes;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export type ButtonProps<P extends ElementType = "button"> = {
  as?: P;
} & MergeElementProps<P, ButtonBaseProps>;

export type ButtonThemeVariant = {
  background: string;
  backgroundActive: string;
  backgroundHover: string;
  border: string | number;
  borderColorHover: string;
  boxShadow: string;
  boxShadowActive: string;
  color: string;
};

export type ButtonTheme = {
  [key in Variants]: ButtonThemeVariant;
};
