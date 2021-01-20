import { HTMLAttributes, DetailedHTMLProps } from "react";
import { SpaceProps } from "styled-system";
import { Colors } from "../../theme/types";

export interface CardRibbonProps {
  variantColor?: keyof Colors;
  text: string;
}

export type CardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
};

export interface CardProps extends SpaceProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isActive?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
  ribbon?: React.ReactNode;
}
