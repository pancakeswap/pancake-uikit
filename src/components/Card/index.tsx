import React, { HTMLAttributes } from "react";
import StyledCard from "./StyledCard";

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => <StyledCard {...props} />;

export default Card;
