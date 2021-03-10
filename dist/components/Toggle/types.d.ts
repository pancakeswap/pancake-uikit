import { InputHTMLAttributes } from "react";
export declare type ToggleTheme = {
    handleBackground: string;
};
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: Scales;
    checked?: boolean;
}
export interface HandleProps {
    scale: Scales;
}
export interface InputProps {
    scale: Scales;
}
export declare const scaleKeys: {
    readonly handleHeight: "handleHeight";
    readonly handleWidth: "handleWidth";
    readonly handleLeft: "handleLeft";
    readonly handleTop: "handleTop";
    readonly checkedLeft: "checkedLeft";
    readonly toggleHeight: "toggleHeight";
    readonly toggleWidth: "toggleWidth";
};
export declare type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
