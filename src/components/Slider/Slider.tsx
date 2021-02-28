import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import bunnyHead from './svg/bunnyhead-main.svg';
import bunnyButt from './svg/bunnybutt.svg';
import bunnyBody from './svg/bunnybody.svg';


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
    }

    const name = "asd";

    const progressPercentage = value / max * 100;

    return (
        <div style={{ position: "relative" }}>
            <BunnyButt src={bunnyButt} />
            <BunnySlider>
                <BarBackground />
                <BarProgress progress={progressPercentage} />
                <StyledInput name={name} type="range" min={min} max={max} value={value} onChange={handleChange} />


            </BunnySlider>
        </div>
    )
}






const height = "32px";
const buttWidth = "15px";

const BunnyButt = styled.img`
    position: absolute;
`

const BunnySlider = styled.div`
    position: absolute;
    left: ${buttWidth};
    width: 100%;
`;

const sliderThumb = `
{
    -webkit-appearance: none;
    background-image: url(${bunnyHead});
    width: 28px;
    height: 35px;
    cursor: pointer;
    margin-left: -7px;
    margin-top: -34px;

    :hover {
        transform: scale(1.1);
    }
    
}`

const StyledInput = styled.input`
    height: ${height};
    position: relative;
    cursor: pointer;
    margin-top: 16px; // needed to limit the height on the bar

    ::-webkit-slider-thumb ${sliderThumb} 
    ::-moz-range-thumb ${sliderThumb} 
    ::-ms-thumb ${sliderThumb}
`

const BarBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 2px;
    top: 18px;
    background-color: #D7CAEC;
`

const BarProgress = styled.div<{ progress: number }>`
    position: absolute;
    width: calc(${({ progress }) => progress}% - 6px);
    height: 10px;
    top: 18px;

    background: #1FC7D4;
`