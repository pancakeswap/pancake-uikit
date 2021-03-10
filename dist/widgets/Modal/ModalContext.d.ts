import React from "react";
import { Handler } from "./types";
interface ModalsContext {
    onPresent: (node: React.ReactNode, key?: string) => void;
    onDismiss: Handler;
    setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const Context: React.Context<ModalsContext>;
declare const ModalProvider: React.FC;
export default ModalProvider;
