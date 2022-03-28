import * as React from "react";
import styled from "styled-components";
import { FC } from "react";

const Style = styled.div`
  position: relative;
  height: 1.3rem;
  width: 1.3rem;

  svg {
    fill: #c1c1c1;
    &:hover {
      fill: #4e4e4e;
    }
  }
`;
export const IconLink: FC<{ url: string }> = ({ url, children }) => {
  return (
    <a href={url}>
      <Style>{children}</Style>
    </a>
  );
};
