import styled from "styled-components";
import React from "react";
import Button from "../Button";
import { sizes } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

export const StyledButtonMenuItem = styled(Button)``;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({ isActive = false, size = sizes.MD, ...props }) => {
  return <StyledButtonMenuItem variant={isActive ? "primary" : "secondary"} size={size} {...props} />;
};

export default ButtonMenuItem;
