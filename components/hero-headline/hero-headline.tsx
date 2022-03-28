import styled from "styled-components";
import * as React from "react";
import { CSSProperties, FC } from "react";

const StyledHeroHeadline = styled.h1<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize || "9rem"};
  margin: 0;
  margin-bottom: -0.5rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.005em;
`;

const HeroHeadline: FC<{ fontSize: string; style?: CSSProperties }> = ({
  children,
  fontSize,
  style
}) => {
  return (
    <StyledHeroHeadline style={style} fontSize={fontSize}>
      {children}
    </StyledHeroHeadline>
  );
};
export { HeroHeadline };
