import React, { ElementType } from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";

type DisabledStateType = {
  isDisabled: boolean;
  isLoading?: boolean;
};

const getDisabledState = ({ isDisabled, isLoading }: DisabledStateType) => {
  if (isLoading) {
    return true;
  }

  return isDisabled;
};

function Button<T extends ElementType = "button">({
  startIcon,
  endIcon,
  children,
  external,
  isLoading,
  isDisabled = false,
  ...props
}: ButtonProps<T>): JSX.Element {
  const disabledState = getDisabledState({ isDisabled, isLoading });
  const internalProps = external ? getExternalLinkProps() : {};
  const elementProps = {
    isDisabled: disabledState,
    className: disabledState ? "button--disabled" : undefined,
    disabled: disabledState,
    isLoading,
  };

  return (
    <StyledButton {...internalProps} {...elementProps} {...props}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledButton>
  );
}

Button.defaultProps = {
  as: "button",
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  isDisabled: false,
};

export default Button;
