import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Box } from "../Box";

// Using require instead of import to avoid trouble with TS bunding and SVG types
/* eslint-disable @typescript-eslint/no-var-requires */
const bunnyHead = require("./svg/bunnyhead-main.svg");
const bunnyHeadMax = require("./svg/bunnyhead-max.svg");
/* eslint-enable @typescript-eslint/no-var-requires */

export const SliderContainer = styled(Box)`
  position: relative;
  height: 48px;
`;

export const SliderLabel = styled.label<{ progress: number }>`
  position: absolute;
  bottom: 0;
  margin-left: 16px; // offset the bunny butt width
  left: calc(${({ progress }) => progress}%);
`;

export const BunnyButt = styled.img`
  position: absolute;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: 100%;
`;

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isCurrentValueMaxValue: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  height: 32px;
  position: relative;
  cursor: pointer;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-image: url(${({ isCurrentValueMaxValue }) => (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHead)});
    width: 24px;
    height: 32px;
    cursor: pointer;
    transform: translate(-2px, -2px);
    transition: 0.1s all;

    :hover {
      transform: scale(1.1) translate(-3px, -3px);
    }
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    background-image: url(${({ isCurrentValueMaxValue }) => (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHead)});
    width: 24px;
    height: 32px;
    cursor: pointer;
    transition: 0.1s all;
    transform: translate(-2px, -2px);

    :hover {
      transform: scale(1.1) translate(-3px, -3px);
    }
  }
  ::-ms-thumb {
    -webkit-appearance: none;
    background-image: url(${({ isCurrentValueMaxValue }) => (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHead)});
    width: 24px;
    height: 32px;
    cursor: pointer;
    transform: translate(-2px, -2px);
    transition: 0.1s all;

    :hover {
      transform: scale(1.1) translate(-3px, -3px);
    }
  }
`;

export const BarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  top: 18px;
  background-color: ${({ theme }) => theme.colors.inputSecondary};
`;

export const BarProgress = styled.div<{ progress: number; isCurrentValueMaxValue: boolean }>`
  position: absolute;
  width: ${({ progress, isCurrentValueMaxValue }) => (isCurrentValueMaxValue ? "calc(100% - 16px)" : `${progress}%`)};
  height: 10px;
  top: 18px;

  background: ${({ theme }) => theme.colors.primary};
`;
