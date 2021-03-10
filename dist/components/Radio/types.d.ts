import { SpaceProps } from "styled-system";
export declare type RadioTheme = {
    handleBackground: string;
};
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface RadioProps extends SpaceProps {
    scale?: Scales;
}
