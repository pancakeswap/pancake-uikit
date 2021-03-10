import React from "react";
import { ToastAction as Action } from "./types";
interface ToastActionProps {
    action: Action;
}
declare const ToastAction: React.FC<ToastActionProps>;
export default ToastAction;
