import styled from "styled-components";

const StyledComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border: 1px solid ${({ theme }) => theme.colors.card.borderColor};
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadows.level1};
  color: ${({ theme }) => theme.colors.text};
`;

export default StyledComponent;
