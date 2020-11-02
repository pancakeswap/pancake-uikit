import styled from "styled-components";
import { OverlayProps } from "./types";

const Overlay = styled.div.attrs({ role: "presentation" })<OverlayProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #452a7a;
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? 0.6 : 0)};
  z-index: 11;
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
`;

export default Overlay;
