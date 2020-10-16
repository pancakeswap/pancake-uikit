import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";
import Button from "./index";

const Row = styled.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`;

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as Meta;

export const Default = () => {
  return (
    <>
      <Row>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button size="sm">Small</Button>
      </Row>
      <Row>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="secondary" size="sm">
          Small
        </Button>
      </Row>
      <Row>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </Row>
    </>
  );
};
