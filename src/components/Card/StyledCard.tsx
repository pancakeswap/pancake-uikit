import styled, { DefaultTheme } from "styled-components";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme }) => theme.card.background};
  border: ${({ theme }) => theme.card.boxShadow};
  border-radius: 32px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  overflow: hidden;
  position: relative;
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
