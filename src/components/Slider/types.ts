export default interface SliderProps {
    min: number;
    max: number;
    value: number;
    onValueChanged: (newValue: number) => void;
}