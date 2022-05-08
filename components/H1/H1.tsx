import * as React from "react";
import { CSSProperties, FC, HTMLAttributes } from "react";
import StyledH1 from "./StyledH1";

const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <StyledH1 {...props}>{children}</StyledH1>;
};

export default H1;
