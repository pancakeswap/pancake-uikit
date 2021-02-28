import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Flex from "../Box/Flex";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
};

const Col = styled(Flex)`
  flex-direction: column;
  width: 300px;
`;

export const Default: React.FC = () => {
  const [value, setValue] = useState<number>(5);

  return (
    <Col>
      <Slider min={0} max={10} value={value} onValueChanged={setValue} />
    </Col>
  );
};

const SliderVariant = ({ initialValue }: { initialValue: number }) => {
  const [value, setValue] = useState(initialValue);

  return <Slider min={0} max={10} value={value} onValueChanged={setValue} />;
};

export const Variants: React.FC = () => {
  return (
    <Col>
      <SliderVariant initialValue={0} />
      <SliderVariant initialValue={5} />
      <SliderVariant initialValue={10} />
    </Col>
  );
};

