import * as React from "react";
import styled from "styled-components";
import { sm } from "../../css/media-queries";

const Wrapper = styled.div`
  padding-left: 0;
  ${sm`
    padding-left: 6rem;
  `}

  padding-bottom: 10vh;
  max-width: 700px;
`;

const ElemContentWrapper = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};
export default ElemContentWrapper;
