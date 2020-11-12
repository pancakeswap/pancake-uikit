export type CardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
};

export interface CardProps {
  isActive?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  ribbon?: React.ReactNode;
}
