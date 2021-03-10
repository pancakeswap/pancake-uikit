import { DefaultTheme } from "styled-components";
declare const getThemeValue: (path: string, fallback?: string | number | undefined) => (theme: DefaultTheme) => string;
export default getThemeValue;
