import React from "react";
import styled, { keyframes } from "styled-components";
import { SkeletonProps } from "./types";

const waves = keyframes`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`;

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

const Root = styled.div<{ variant: string; width: number | undefined; height: number | undefined }>`
  min-height: 20px;
  display: block;
  background-color: #bdc2c4;
  border-radius: 4px;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  ${({ variant }) =>
    variant === "circle" &&
    `
      border-radius: 50%
  `}
`;

const Pulse = styled(Root)`
  animation: ${pulse} 2s infinite ease-out;
`;

const Waves = styled(Root)`
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const Skeleton: React.FC<SkeletonProps> = ({ width, height, variant = "rect", animation = "pulse" }) => {
  return (
    <>
      {animation === "pulse" && <Pulse variant={variant} width={width} height={height} />}
      {animation === "waves" && <Waves variant={variant} width={width} height={height} />}
    </>
  );
};

export default Skeleton;
