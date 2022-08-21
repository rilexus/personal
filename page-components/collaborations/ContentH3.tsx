import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import elasticFontSize from "../../utils/elasticFontSize";

const Styled = styled.h3`
  margin-bottom: 1.5rem;
  ${elasticFontSize(20, 40, 1, 500)};
`;

const ContentH3: FC = ({ children }) => {
  return <Styled>{children}</Styled>;
};
export default ContentH3;
