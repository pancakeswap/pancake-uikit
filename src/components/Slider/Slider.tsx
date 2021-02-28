import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import bunnyHead from "./svg/bunnyhead-main.svg";
import bunnyHeadMax from "./svg/bunnyhead-max.svg";
import bunnyButt from "./svg/bunnybutt.svg";

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

    return (
        <div style={{ position: "relative", height: "32px" }}>
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
            </BunnySlider>
        </div>
    );
};

const height = "34px";

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
    height: ${height};
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

const BarProgress = styled.div<{ progress: number, currentValueIsMaxValue: boolean }>`
  position: absolute;
  width: calc(${({ progress }) => progress}% - ${({ currentValueIsMaxValue }) => currentValueIsMaxValue ? "30px" : "6px"});
  height: 10px;
  top: 18px;

  background: #1fc7d4;
`;
