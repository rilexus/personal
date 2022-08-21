import * as React from "react";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components/pragraph";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import VerticalSpacer from "../../ui/VerticalSpacer/VerticalSpacer";
import H4 from "../../ui/H4/H4";

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
        <VerticalSpacer value={"2rem"} />
        <H4>Contribution</H4>
        <ParagraphStyled>
          Over a period of one and a half years I was the lead frontend engineer
          responsible for a distributed team of 6 frontend engineers. The main
          project was companies own online store:{" "}
          <ExternalLink animate={false} href={"https://www.prym.de/"}>
            prym.de
          </ExternalLink>{" "}
          with over 15000 products. By side the technical implementation of the
          store, my duties were: growing, onboarding and educating the current
          team.
        </ParagraphStyled>
        <VerticalSpacer value={"2rem"} />
        <b>Tech</b>
        <VerticalSpacer value={"1rem"} />
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Redux</li>
          <li>Jest</li>
          <li>SCSS</li>
          <li>CSS</li>
        </ul>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default PrymListElement;
