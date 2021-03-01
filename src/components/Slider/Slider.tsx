import React, { ChangeEvent } from "react";
import { SliderContainer, BunnyButt, BunnySlider, BarBackground, BarProgress, StyledInput, SliderLabel } from "./styles";
import SliderProps from "./types";

// Using require instead of import to avoid trouble with TS bunding and SVG types
/* eslint-disable @typescript-eslint/no-var-requires */
const bunnyButt = require("./svg/bunnybutt.svg");
/* eslint-enable @typescript-eslint/no-var-requires */

// We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 8 is arbitrary, but seems to work...
const MOVING_SLIDER_LABEL_OFFSET_FACTOR = 8;

const Slider: React.FC<SliderProps> = ({ min, max, value, onValueChanged }) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onValueChanged(parseInt(target.value, 10));
  };

  const progressPercentage = (value / max) * 100;
  const currentValueIsMaxValue = value === max;

  const labelOffset = progressPercentage - progressPercentage / MOVING_SLIDER_LABEL_OFFSET_FACTOR;

  return (
    <SliderContainer>
      <BunnyButt src={bunnyButt} />
      <BunnySlider>
        <BarBackground />
        <BarProgress currentValueIsMaxValue={currentValueIsMaxValue} progress={progressPercentage} />
        <StyledInput
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

export default Slider;
