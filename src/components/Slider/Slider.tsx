import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";

// Using require instead of import to avoid trouble with TS bunding and SVG types
const bunnyButt = require('./svg/bunnybutt.svg');
const bunnyHead = require('./svg/bunnyhead-main.svg');
const bunnyHeadMax = require('./svg/bunnyhead-max.svg');

interface Props {
  min: number;
  max: number;
  value: number;
  onValueChanged: (newValue: number) => void;
}

export const Slider = ({ min, max, value, onValueChanged }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    onValueChanged(parseInt(newValue));
  };

  const name = "asd";

  const progressPercentage = (value / max) * 100;
  const currentValueIsMaxValue = value === max;

  // We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 8 is arbitrary, but seems to work...
  const labelOffset = progressPercentage - progressPercentage / 8;

  return (
    <SliderContainer>
      <BunnyButt src={bunnyButt} />
      <BunnySlider>
        <BarBackground />
        <BarProgress currentValueIsMaxValue={currentValueIsMaxValue} progress={progressPercentage} />
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          currentValueIsMaxValue={currentValueIsMaxValue}
        />
        <SliderLabel progress={labelOffset}>{currentValueIsMaxValue ? "MAX" : `${progressPercentage}%`}</SliderLabel>
      </BunnySlider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  height: 48px;
`;

const SliderLabel = styled.label<{ progress: number }>`
  position: absolute;
  bottom: 0;
  left: calc(${({ progress }) => progress}%);
`;

const BunnyButt = styled.img`
  position: absolute;
`;

const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: 100%;
`;

const sliderThumb = (max: boolean) => `
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

export interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  currentValueIsMaxValue: boolean;
}
const StyledInput = styled.input<StyledInputProps>`
    height: 34px;
    position: relative;
    cursor: pointer;
    margin-top: 16px; // needed to limit the height on the bar

    ::-webkit-slider-thumb ${({ currentValueIsMaxValue }) => sliderThumb(currentValueIsMaxValue)} 
    ::-moz-range-thumb ${({ currentValueIsMaxValue }) => sliderThumb(currentValueIsMaxValue)}  
    ::-ms-thumb ${({ currentValueIsMaxValue }) => sliderThumb(currentValueIsMaxValue)} 
`;

const BarBackground = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  height: 2px;
  top: 18px;
  background-color: ${({ theme }) => theme.colors.inputSecondary};
`;

const BarProgress = styled.div<{ progress: number; currentValueIsMaxValue: boolean }>`
  position: absolute;
  width: calc(
    ${({ progress }) => progress}% - ${({ currentValueIsMaxValue }) => (currentValueIsMaxValue ? "30px" : "6px")}
  );
  height: 10px;
  top: 18px;

  background: #1fc7d4;
`;
