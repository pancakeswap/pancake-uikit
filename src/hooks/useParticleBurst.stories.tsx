import React from "react";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import useParticleBurst from "./useParticleBurst";
import bunnySantaPath from "./bunny-santa.svg";

export default {
  title: "Hooks/useParticleBurst",
  argTypes: {},
};

export const WithSelector: React.FC = () => {
  useParticleBurst({ imgSrc: bunnySantaPath, selector: "button" });

  return (
    <div style={{ padding: "32px" }}>
      <Button type="button" mr="16px">
        Click Me
      </Button>
      <Button type="button" variant="secondary" mr="16px">
        Or Me
      </Button>
      <Button type="button" variant="tertiary">
        Or Me
      </Button>
    </div>
  );
};

export const Document: React.FC = () => {
  useParticleBurst({ imgSrc: bunnySantaPath });

  return (
    <div style={{ padding: "32px" }}>
      <Text>Any click (not recommended)</Text>
    </div>
  );
};

export const AdjustDistance: React.FC = () => {
  useParticleBurst({ imgSrc: bunnySantaPath, particleOptions: { distance: 800 } });

  return (
    <div style={{ padding: "32px" }}>
      <Text>Adjust distance</Text>
    </div>
  );
};

export const AdjustSize: React.FC = () => {
  useParticleBurst({ imgSrc: bunnySantaPath, particleOptions: { size: 80 } });

  return (
    <div style={{ padding: "32px" }}>
      <Text>Adjust size</Text>
    </div>
  );
};

export const AdjustNumberOfParticles: React.FC = () => {
  useParticleBurst({ imgSrc: bunnySantaPath, numberOfParticles: 100 });

  return (
    <div style={{ padding: "32px" }}>
      <Text>100 particles (beware of performance)</Text>
    </div>
  );
};
