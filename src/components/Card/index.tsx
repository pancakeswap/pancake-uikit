import styled, { DefaultTheme } from "styled-components";

interface CardProps {
  theme: DefaultTheme;
}

const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => (theme.isDark ? "#2B223E" : "#FFFFFF")};
  border: 1px solid rgba(14, 14, 44, 0.05);
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadows.level1};
  color: ${({ theme }) => theme.colors.text};
  padding: 24px;
`;

export default Card;
