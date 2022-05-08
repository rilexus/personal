import React from "react";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components/pragraph";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";

const SnapbusListElement = ({ imgSrc }: any) => {
  return (
    <DropdownListElement
      name={"snapbus"}
      renderHeader={() => (
        <ElemHeader>
          <img src={imgSrc} alt="Snapbus brand logo" height={80} width={200} />
        </ElemHeader>
      )}
    >
      <ElemContentWrapper>
        <ContentH3>Snapbus</ContentH3>
        <ParagraphStyled>
          Snapbus is a company based in Cologne which providers a easy way to
          book transportation vehicles.
        </ParagraphStyled>
        <ExternalLink href={"https://www.snapbus.de/"}>Website</ExternalLink>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default SnapbusListElement;
