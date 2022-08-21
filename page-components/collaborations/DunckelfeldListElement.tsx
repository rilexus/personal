import * as React from "react";
import { ParagraphStyled } from "../../components/pragraph";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";
import ContentH3 from "./ContentH3";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";

const DunckelfeldListElement = ({ imgSrc }: any) => {
  return (
    <DropdownListElement
      name={"Dunkelfeld"}
      renderHeader={() => (
        <ElemHeader>
          <img
            src={imgSrc}
            alt="Dunckelfeld brand logo"
            height={60}
            width={250}
          />
        </ElemHeader>
      )}
    >
      <ElemContentWrapper>
        <ContentH3>DUNCKELFELD</ContentH3>
        <ParagraphStyled>
          DUNCKELFELD is one of the leading independent full-service agencies
          for digital communication in Germany. They help brands and companies
          to solve the most diverse challenges of the digital age.
        </ParagraphStyled>
        <ExternalLink href={"https://dunckelfeld.de/"}>Website</ExternalLink>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default DunckelfeldListElement;
