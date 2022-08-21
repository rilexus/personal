import React from "react";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";

const Unicepta = ({ imgSrc }: any) => {
  return (
    <DropdownListElement
      name={"1&1"}
      renderHeader={() => (
        <ElemHeader>
          <img
            src={imgSrc}
            alt="unicepta brand logo"
            height={105}
            width={200}
          />
        </ElemHeader>
      )}
    >
      <ElemContentWrapper>
        <ContentH3>Unicepta</ContentH3>
        <ParagraphStyled>
          We are the world’s leading provider of visionary AI-powered media and
          marketing intelligence solutions, delivered with a human factor of
          analytics, insights, and advisory services.
        </ParagraphStyled>
        <ExternalLink href={"https://www.unicepta.com/index.html"}>
          Website
        </ExternalLink>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default Unicepta;
