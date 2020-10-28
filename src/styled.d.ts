import "styled-components";
import { PancakeTheme } from "./theme/types";

declare module "styled-components" {
  export interface DefaultTheme extends PancakeTheme {} // eslint-disable-line
}
