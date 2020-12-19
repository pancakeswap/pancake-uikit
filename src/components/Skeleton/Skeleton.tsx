import React from "react";
import styled, { keyframes } from "styled-components";
import { SkeletonProps } from "./types";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Root = styled.div`
  height: 1.2em;
  display: block;
  background-color: rgba(0, 0, 0, 0.11);
`;

const Pulse = styled(Root)<{ width: number | undefined, height: number | undefined }>`
  animation: ${pulse} 2s infinite ease-out;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  height: ${props => (props.height ? `${props.height}px` : '1.2em')};
`;

const Skeleton: React.FC<SkeletonProps> = ({ width, height, variant, animation }) => {
  return (
    <>
      <Pulse width={width} height={height}/>
    </>
  );
};

export default Skeleton;
