import { Description, ItemOffered } from "@react-microdata/offer";
import { ServiceType } from "@react-microdata/service";
import { ParagraphStyled } from "../../../../pragraph";
import * as React from "react";
import { ItemListElement } from "@react-microdata/offer-catalog";
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
    <ItemListElement itemScope itemType="https://schema.org/Offer">
      <ItemOffered.Service>
        <MediaTextAlign>
          <ServiceType>
            <H3>{title}</H3>
          </ServiceType>
          <Description>
            <ParagraphStyled>{description}</ParagraphStyled>
          </Description>
        </MediaTextAlign>
      </ItemOffered.Service>
    </ItemListElement>
  );
};
export { MediaTextAlign };
export default ListItemOffer;
