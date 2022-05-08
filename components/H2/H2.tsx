import React, { CSSProperties, FC, HTMLAttributes } from "react";
import StyledH2 from "./StyledH2";

const H2: FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return <StyledH2 {...props} />;
};

export default H2;
