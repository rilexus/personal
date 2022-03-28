import * as React from "react";
import styled from "styled-components";

const TooltipBG = styled.div<any>`
  position: fixed;
  display: inline-block;
  padding: 1px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  transition: top 70ms, left 70ms;
  transform: translate(-50%, -150%);
  will-change: top, left;
  background-color: black;
  border-radius: 7px;
  color: white;
  box-shadow: ${props => props.theme.shadow.prime};
`;
const TipBG = styled.div`
  box-shadow: ${props => props.theme.shadow.prime};
  height: 10px;
  width: 10px;
  transform: rotate(45deg);
  position: absolute;
  left: calc(50% - 5px);
  top: calc(100% - 5px);
  border-bottom: 1px solid black;
  border-bottom-right-radius: 3px;
  border-right: 1px solid black;
  background-color: black;
`;
const TipStyled = styled.div`
  border-bottom-right-radius: 3px;
  height: 10px;
  width: 10px;
  border-bottom: 1px solid #7b7b7b;
  border-right: 1px solid #7b7b7b;
  position: absolute;
  left: calc(50% - 6px);
  top: calc(100% - 10px);
  background-color: #343434;
`;

const Content = styled.div`
  background-color: #343434;
  border: 1px solid #7b7b7b;
  border-radius: 6px;
  padding-top: 5px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
`;
const Tip = () => (
  <TipBG>
    <TipStyled />
  </TipBG>
);

function Tooltip({ top, left, visible, children }: any) {
  return visible ? (
    <TooltipBG top={top} left={left}>
      <Content>{children}</Content>
      <Tip />
    </TooltipBG>
  ) : null;
}
export default Tooltip;
