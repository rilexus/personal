import * as React from "react";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components/pragraph";
import { ExternalLink } from "../../components/external-link/ExternalLink";

const PrymListElement = ({ imgSrc }: any) => {
  return (
    <DropdownListElement
      name={"Prym Consumer"}
      renderHeader={() => (
        <ElemHeader>
          <img
            src={imgSrc}
            alt="Prym Consumer brand logo"
            height={60}
            width={105}
          />
        </ElemHeader>
      )}
    >
      <ElemContentWrapper>
        <ContentH3>Prym Consumer</ContentH3>
        <ParagraphStyled>
          From elastic braids to pins, from zip fasteners to the revolution of
          the knitting pin: Prym Consumer is an indispensable part of the
          international world of needlework and Home Decor - and has been so for
          more than 130 years. Closely associated with Prym: the press fastener
          - an accessory that has changed people’s lives, unobtrusively but
          lastingly - today supplemented by everything you need for needlework
          and dressmaking.
        </ParagraphStyled>
        <ExternalLink href={"https://www.prym.de/"}>Website</ExternalLink>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default PrymListElement;
