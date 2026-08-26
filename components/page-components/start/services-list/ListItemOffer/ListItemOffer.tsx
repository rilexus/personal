import { ParagraphStyled } from "../../../../pragraph";
import * as React from "react";
import styled from "styled-components";
import { sm } from "../../../../../css/media-queries";

const MediaTextAlign = styled.div`
  text-align: center;
  ${sm`
    text-align: left;
  `}
`;

const H3 = styled.h3`
  margin-bottom: 1rem;
`;

const ListItemOffer = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <MediaTextAlign>
      <H3>{title}</H3>
      <ParagraphStyled>{description}</ParagraphStyled>
    </MediaTextAlign>
  );
};
export { MediaTextAlign };
export default ListItemOffer;
