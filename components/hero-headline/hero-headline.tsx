import styled from "styled-components";
import * as React from "react";
import { CSSProperties, FC } from "react";
import elasticFontSize from "../../utils/elasticFontSize";

const StyledHeroHeadline = styled.h1`
  ${elasticFontSize(60, 130, 500, 1000)};
  margin: 0;
  margin-bottom: -0.5rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.005em;
`;

const HeroHeadline: FC<{ style?: CSSProperties }> = ({ children, style }) => {
  return <StyledHeroHeadline style={style}>{children}</StyledHeroHeadline>;
};
export { HeroHeadline };
