import React from "react";
import Children from "../Children/Children";
import styled from "styled-components";
import { ParagraphStyled } from "../../../../components/pragraph";

const StyledParagraph = styled.p`
  margin-bottom: 1.4211em;
`;

function Paragraph({ _children }: any) {
  return (
    <ParagraphStyled>
      <Children _children={_children} />
    </ParagraphStyled>
  );
}

export default Paragraph;
