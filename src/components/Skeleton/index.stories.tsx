import React from "react";
import Skeleton from "./Skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {},
};

export const Default: React.FC = () => {
  return <Skeleton />;
};

export const DefinedSize: React.FC = () => {
  return (
    <>
      <Skeleton width={300} height={200} />
    </>
  );
};
