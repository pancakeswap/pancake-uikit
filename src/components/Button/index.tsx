import React from "react";
import StyledButton from "./StyledButton";
import { Props } from "./types.d";

const Button: React.FC = (props: Props) => <StyledButton {...props} />;

Button.defaultProps = {
  variant: "primary",
  size: "md",
};

export default Button;
