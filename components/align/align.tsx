import * as React from "react";
import styled from "styled-components";
import { FC, ReactNode } from "react";

const Styled = styled.div<{ position: "center" | "left" | "right" }>`
  text-align: ${({ position }) => position};
`;

interface AlignPropsI {
  position: "center" | "left" | "right";
  children: ReactNode | ReactNode[];
}
const Align: FC<AlignPropsI> = ({ children, position }) => (
  <Styled position={position}>{children}</Styled>
);
export default Align;
