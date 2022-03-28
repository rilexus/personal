import * as React from "react";
import useHover from "../../../../../../hooks/useHover";
import Tooltip from "../../../../../Tooltip/Tooltip";
import posed from "react-pose";
import styled from "styled-components";
import { forwardRef } from "react";

const IconWrapper = styled.div<any>`
  margin: 5px;
`;
const Img = styled.img`
  transition: transform 120ms;
  cursor: pointer;
  margin: 0;
  &:hover {
    transform: scale(1.1);
  }
`;
const TooltipName = styled.div`
  font-size: 14px;
  margin: 0;
  font-weight: 500;
`;
const TooltipUrl = styled.div`
  font-size: 12px;
  margin: 0;
  opacity: 0.5;
  font-weight: 400;
`;

const Icon = forwardRef(function Icon({ icon }: any, ref: any) {
  // forwardRef for AnimationIcons component
  const { src, width, height, url, name } = icon;
  const { event, bind } = useHover();
  //@ts-ignore
  const pos = event.target?.getBoundingClientRect();
  return (
    <IconWrapper {...bind} ref={ref}>
      <Tooltip
        visible={event.hovered}
        left={pos && pos.left + pos.width / 2}
        top={pos && pos.top}
      >
        <TooltipName>{name}</TooltipName>
        <TooltipUrl>{url}</TooltipUrl>
      </Tooltip>
      <a href={url}>
        <Img width={`${width}px`} height={`${height}px`} src={src} alt="" />
      </a>
    </IconWrapper>
  );
});
export const TechIconAnimated = posed(Icon)({
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 250
    }
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: {
      duration: 10
    }
  }
});
