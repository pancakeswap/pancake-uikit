export interface ModalTheme {
    background: string;
}
export declare type Handler = () => void;
export interface InjectedProps {
    onDismiss?: Handler;
}
