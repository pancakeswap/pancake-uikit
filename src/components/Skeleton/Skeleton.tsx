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
  min-height: 20px;
  display: block;
  background-color: rgba(0, 0, 0, 0.11);
  border-radius: 4px;
`;



const Pulse = styled(Root) <{ width: number | undefined; height: number | undefined, variant: string }>`
  animation: ${pulse} 2s infinite ease-out;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  ${({ variant }) => variant == 'circle' && `
      border-radius: 50%
  `}
`;

const Skeleton: React.FC<SkeletonProps> = ({ width, height, variant = "rect", animation }) => {
  return (
    <>
      <Pulse variant={variant} width={width} height={height} />
    </>
  );
};

export default Skeleton;
