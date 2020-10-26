import React, { useState } from "react";
import Toggle from "./index";

export default {
  title: "Toggle",
  component: Toggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return <Toggle checked={isChecked} onChange={toggle} />;
};
