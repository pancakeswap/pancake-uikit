import React, { useState } from "react";
import Toggle from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div>
        <Toggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <Toggle checked={isChecked} onChange={toggle} small />
      </div>
    </>
  );
};
