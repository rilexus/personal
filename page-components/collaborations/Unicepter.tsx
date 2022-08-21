import React from "react";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";
import VerticalSpacer from "../../ui/VerticalSpacer/VerticalSpacer";
import H4 from "../../ui/H4/H4";

const Unicepta = ({ imgSrc }: any) => {
  return (
    <DropdownListElement
      name={"unicepta"}
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
        <VerticalSpacer value={"2rem"} />
        <H4>Contribution</H4>
        <ParagraphStyled>
          I had the pleasure to work on the flag ship product of the company:{" "}
          <ExternalLink
            animate={false}
            href={
              "https://www.ubermetrics-technologies.com/social-media-monitoring-pr/"
            }
          >
            Ubermetrics Delta
          </ExternalLink>{" "}
          a socia media monitoring white label software.
        </ParagraphStyled>
        <VerticalSpacer value={"1rem"} />
        <b>Tech:</b>
        <VerticalSpacer value={"1rem"} />
        <ul>
          <li>React</li>
          <li>Backbone</li>
          <li>Docker</li>
          <li>Styled-Component</li>
          <li>Redux</li>
        </ul>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default Unicepta;
