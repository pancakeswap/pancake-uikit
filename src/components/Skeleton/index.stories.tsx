import React, { useState, useEffect } from "react";
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

export const Avatar: React.FC = () => {
  return (
    <>
      <Skeleton variant="circle" width={40} height={40} />
    </>
  );
};

export const Text: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 style={{ width: 200 }}>
      {loading ? <Skeleton /> : 'H1'}
    </h1>
  );
};
