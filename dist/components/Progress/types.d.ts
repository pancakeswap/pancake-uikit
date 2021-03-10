export declare const variants: {
    readonly ROUND: "round";
    readonly FLAT: "flat";
};
export declare type Variant = typeof variants[keyof typeof variants];
export interface ProgressProps {
    variant?: Variant;
    primaryStep?: number;
    secondaryStep?: number;
    showProgressBunny?: boolean;
}
