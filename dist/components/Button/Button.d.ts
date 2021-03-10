import React from "react";
import { ButtonProps } from "./types";
declare const Button: {
    <E extends React.ElementType<any> = "button">(props: import("./types").PolymorphicComponentProps<E, import("./types").BaseButtonProps>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
};
export default Button;
