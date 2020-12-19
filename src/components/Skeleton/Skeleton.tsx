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

const Pulse = styled(Root)`
  animation: ${pulse} 2s infinite ease-out;
`;

const Skeleton: React.FC<SkeletonProps> = ({ width = 100, height = 100, variant, animation }) => {
  return <Pulse style={{ width: width, height: height }} />;
};

export default Skeleton;
