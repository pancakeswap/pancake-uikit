import styled from "styled-components";

interface BarProps {
  primary: boolean;
};

export const Bar = styled.div<BarProps>`
  background-color: ${({ theme }) => props => props.primary ? theme.colors.secondary : theme.colors.secondary + `80` };
  border-radius: 32px;
  height: 16px;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: true
}

const StyledProgress = styled.div`
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  height: 16px;
`;

export default StyledProgress;
