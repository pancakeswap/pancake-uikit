import { ButtonHTMLAttributes } from "react";
import styled, { DefaultTheme } from "styled-components";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "sm";
}

interface ThemedProps extends Props {
  theme: DefaultTheme;
}

const getBackground = ({ variant, disabled, theme }: ThemedProps) => {
  if (disabled) {
    return "#ddd";
  }

  switch (variant) {
    case "outline":
      return "transparent";
    case "secondary":
      return theme.colors.tertiary;
    case "primary":
    default:
      return theme.colors.primary;
  }
};

const getBorder = ({ variant, disabled, theme }: ThemedProps) => {
  if (disabled) {
    return 0;
  }

  switch (variant) {
    case "outline":
      return `2px solid ${theme.colors.primary}`;
    case "primary":
    case "secondary":
    default:
      return 0;
  }
};

const getColor = ({ variant, disabled, theme }: ThemedProps) => {
  if (disabled) {
    return "#acaaaf";
  }

  switch (variant) {
    case "primary":
      return "#FFFFFF";
    case "outline":
    case "secondary":
    default:
      return theme.colors.primary;
  }
};

const Button = styled.button<Props>`
  align-items: center;
  background-color: ${getBackground};
  border: ${getBorder};
  border-radius: 16px;
  color: ${getColor};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  height: ${({ size }) => (size === "sm" ? "32px" : "48px")};
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === "sm" ? "0 16px" : "0 24px")};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  variant: "primary",
  size: "md",
};

export default Button;
