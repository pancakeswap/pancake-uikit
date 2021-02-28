import React, { useState } from "react";
import { Slider } from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  return <Slider min={0} max={10} value={value} onValueChanged={setValue} />;
};
