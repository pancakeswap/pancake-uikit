import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, small, ...props }) => {
  const isChecked = !!checked;
  const isSmall = !!small;

  return (
    <StyledToggle checked={isChecked} small={isSmall}>
      <Input checked={checked} small={isSmall} {...props} type="checkbox" />
      <Handle small={isSmall} />
    </StyledToggle>
  );
};

export default Toggle;
