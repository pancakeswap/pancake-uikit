import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorKey: "primary" | "textSubtle";
} & ButtonMenuItemProps;

const InactiveButton = styled(Button)<InactiveButtonProps>`
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isActive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        {...props}
        size={size}
        variant="tertiary"
        colorKey={variant === variants.PRIMARY ? "primary" : "textSubtle"}
      />
    );
  }

  return <Button size={size} variant={variant} {...props} />;
};

export default ButtonMenuItem;
