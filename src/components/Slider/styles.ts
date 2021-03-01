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

export const sliderThumb = (isCurrentValueMaxValue: boolean): string => `
{
    -webkit-appearance: none;
    background-image: url(${isCurrentValueMaxValue ? bunnyHeadMax : bunnyHead});
    width: 24px;
    height: 32px;
    cursor: pointer;
    margin-left: -2px;
    margin-top: -4px;
    transition: 0.1s all;

    :hover {
        transform: scale(1.1);
    }
    
}`;

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isCurrentValueMaxValue: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
    height: 32px;
    position: relative;
    cursor: pointer;

    ::-webkit-slider-thumb ${({ isCurrentValueMaxValue }) => sliderThumb(isCurrentValueMaxValue)} 
    ::-moz-range-thumb ${({ isCurrentValueMaxValue }) => sliderThumb(isCurrentValueMaxValue)}  
    ::-ms-thumb ${({ isCurrentValueMaxValue }) => sliderThumb(isCurrentValueMaxValue)} 
`;

export const BarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  top: 18px;
  background-color: ${({ theme }) => theme.colors.inputSecondary};
`;

export const BarProgress = styled.div<{ progress: number; currentValueIsMaxValue: boolean }>`
  position: absolute;
  width: ${({ progress, currentValueIsMaxValue }) => (currentValueIsMaxValue ? "calc(100% - 16px)" : `${progress}%`)};
  height: 10px;
  top: 18px;

  background: ${({ theme }) => theme.colors.primary};
`;
