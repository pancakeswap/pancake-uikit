import React from "react";
import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkLabelMemo: React.MemoExoticComponent<import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>>;
export { MenuEntry, LinkLabelMemo as LinkLabel };
