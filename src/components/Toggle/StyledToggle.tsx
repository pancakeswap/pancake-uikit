import styled from "styled-components";

export const Handle = styled.div<{ small: boolean }>`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${({ small }) => (small ? "16px" : "32px")};
  left: ${({ small }) => (small ? "2px" : "4px")};
  position: absolute;
  top: ${({ small }) => (small ? "2px" : "4px")};
  transition: left 200ms ease-in;
  width: ${({ small }) => (small ? "16px" : "32px")};
  z-index: 1;
`;

export const Input = styled.input<{ small: boolean }>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${({ small }) => (small ? "calc(100% - 18px)" : "calc(100% - 36px)")};
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<{ checked: boolean, small: boolean }>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "secondary" : "input"]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${({ small }) => (small ? "20px" : "40px")};
  position: relative;
  transition: background-color 200ms;
  width: ${({ small }) => (small ? "36px" : "72px")};
`;

export default StyledToggle;
