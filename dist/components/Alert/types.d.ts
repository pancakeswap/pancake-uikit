import { MouseEvent, ReactNode } from "react";
export declare type AlertTheme = {
    background: string;
};
export declare const variants: {
    readonly INFO: "info";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
};
export declare type Variants = typeof variants[keyof typeof variants];
export interface AlertProps {
    variant?: Variants;
    title: string;
    children?: ReactNode;
    onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
