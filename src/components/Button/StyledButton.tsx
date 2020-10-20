import styled, { DefaultTheme } from "styled-components";
import { ButtonProps, variants } from "./types";

interface ThemedProps extends ButtonProps {
  theme: DefaultTheme;
}

const { PRIMARY, SECONDARY, TERTIARY, TEXT } = variants;

const getVariantStyles = ({ variant, theme }: ThemedProps) => {
  switch (variant) {
    case TEXT:
      return {
        backgroundColor: "transparent",
        color: theme.colors.primary,
        ":hover:not(:disabled):not(:active)": {
          backgroundColor: theme.colors.tertiary,
        },
      };
    case TERTIARY:
      return {
        backgroundColor: theme.colors.tertiary,
        color: theme.colors.primary,
      };
    case SECONDARY:
      return {
        backgroundColor: "transparent",
        border: `2px solid ${theme.colors.primary}`,
        color: theme.colors.primary,
        ":hover:not(:disabled):not(:active)": {
          borderColor: theme.colors.primaryBright,
        },
        ":active:not(:disabled)": {
          borderColor: theme.colors.primaryDark,
        },
      };
    case PRIMARY:
    default:
      return {
        backgroundColor: theme.colors.primary,
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
        ":hover:not(:disabled):not(:active)": {
          backgroundColor: theme.colors.primaryBright,
        },
        ":active:not(:disabled)": {
          backgroundColor: theme.colors.primaryDark,
          boxShadow: "inset 0px 2px 2px -4px rgba(74, 74, 104, 0.6)",
        },
      };
  }
};

export const StartIcon = styled.span`
  margin-right: 0.5em;
`;

export const EndIcon = styled.span`
  margin-left: 0.5em;
`;

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 16px;
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

  ${getVariantStyles}

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    border-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }
`;

export default StyledButton;
