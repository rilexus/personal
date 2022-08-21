import React from "react";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";

const OneAndOne = ({ imgSrc }: any) => {
  return (
    <DropdownListElement
      name={"1&1"}
      renderHeader={() => (
        <ElemHeader>
          <img src={imgSrc} alt="1&1 brand logo" height={105} width={105} />
        </ElemHeader>
      )}
    >
      <ElemContentWrapper>
        <ContentH3>1&1</ContentH3>
        <ParagraphStyled>
          Ionos is a web hosting company. It was founded in Germany in 1988 and
          is currently owned by United Internet. In addition to web hosting, it
          also provides domain registration, SSL certificates, email services,
          website builder packages and cloud hosting, as well as virtual private
          servers and dedicated servers.
        </ParagraphStyled>
        <ExternalLink href={"https://www.1und1.de/"}>Website</ExternalLink>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default OneAndOne;
