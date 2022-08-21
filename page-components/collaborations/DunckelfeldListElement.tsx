import * as React from "react";
import { ParagraphStyled } from "../../components/pragraph";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";
import ContentH3 from "./ContentH3";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import VerticalSpacer from "../../ui/VerticalSpacer/VerticalSpacer";

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
        <VerticalSpacer value={"2rem"}></VerticalSpacer>
        <div>
          <h4>Contribution</h4>
          <ParagraphStyled>
            The primary project I have dedicated my attention to was the:
            <ExternalLink animate={false} href="https://evofitness.de/">
              {" "}
              EVO Fitness
            </ExternalLink>
            website. Together with{" "}
            <ExternalLink
              animate={false}
              href={
                "https://www.linkedin.com/in/pandelis-kyropoulos-b6110b164/"
              }
            >
              Pandelis Kyropoulosdesigner
            </ExternalLink>{" "}
            as the designer and{" "}
            <ExternalLink animate={false} href={"https://wandelmood.io/about"}>
              Tom Kirchhartz
            </ExternalLink>{" "}
            as a developer we managed to deliver great experience to the user
            and the business.
          </ParagraphStyled>
          <b>The technology of choice for this project was:</b>
          <VerticalSpacer value={"1rem"} />
          <ul>
            <li>GatsbyJS</li>
            <li>Styled-Components</li>
            <li>JavaScript</li>
            <li>Craft CMS</li>
            <li>Docker</li>
          </ul>
        </div>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default DunckelfeldListElement;
