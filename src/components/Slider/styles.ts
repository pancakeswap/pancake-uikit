import { InputHTMLAttributes } from "react";
import styled from "styled-components";

// Using require instead of import to avoid trouble with TS bunding and SVG types
/* eslint-disable @typescript-eslint/no-var-requires */
const bunnyHead = require("./svg/bunnyhead-main.svg");
const bunnyHeadMax = require("./svg/bunnyhead-max.svg");
/* eslint-enable @typescript-eslint/no-var-requires */

export const SliderContainer = styled.div`
  position: relative;
  height: 48px;
`;

export const SliderLabel = styled.label<{ progress: number }>`
  position: absolute;
  bottom: 0;
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

export const sliderThumb = (max: boolean): string => `
{
    -webkit-appearance: none;
    background-image: url(${max ? bunnyHeadMax : bunnyHead});
    width: 28px;
    height: 35px;
    cursor: pointer;
    margin-left: -7px;
    margin-top: -36px;

    :hover {
        transform: scale(1.1);
    }
    
}`;

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    currentValueIsMaxValue: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
    height: 34px;
    position: relative;
    cursor: pointer;
    margin-top: 16px; // needed to limit the height on the bar

    ::-webkit-slider-thumb ${({ currentValueIsMaxValue }) => sliderThumb(currentValueIsMaxValue)} 
    ::-moz-range-thumb ${({ currentValueIsMaxValue }) => sliderThumb(currentValueIsMaxValue)}  
    ::-ms-thumb ${({ currentValueIsMaxValue }) => sliderThumb(currentValueIsMaxValue)} 
`;

export const BarBackground = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  height: 2px;
  top: 18px;
  background-color: ${({ theme }) => theme.colors.inputSecondary};
`;

export const BarProgress = styled.div<{ progress: number; currentValueIsMaxValue: boolean }>`
  position: absolute;
  width: calc(
    ${({ progress }) => progress}% - ${({ currentValueIsMaxValue }) => (currentValueIsMaxValue ? "30px" : "6px")}
  );
  height: 10px;
  top: 18px;

  background: #1fc7d4;
`;
