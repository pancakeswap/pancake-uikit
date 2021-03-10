import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly SUCCESS: "success";
    readonly TEXTDISABLED: "textDisabled";
    readonly TEXTSUBTLE: "textSubtle";
    readonly BINANCE: "binance";
    readonly FAILURE: "failure";
};
export declare const scales: {
    readonly MD: "md";
    readonly SM: "sm";
};
export declare type Scale = typeof scales[keyof typeof scales];
export declare type Variant = typeof variants[keyof typeof variants];
export interface TagProps extends SpaceProps {
    variant?: Variant;
    scale?: Scale;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    outline?: boolean;
}
