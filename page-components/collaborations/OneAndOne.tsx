import React from "react";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";
import VerticalSpacer from "../../ui/VerticalSpacer/VerticalSpacer";
import H4 from "../../ui/H4/H4";

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
        <VerticalSpacer value={"2rem"} />
        <H4>Contribution</H4>
        <ParagraphStyled>
          Together with a great team from rumania I worked on one of the main
          products provided by 1&1 IONOS: the{" "}
          <ExternalLink
            animate={false}
            href={"https://www.ionos.com/websites/website-builder"}
          >
            WYSIWYG Website builder.
          </ExternalLink>{" "}
          Because of the size, the complexity and constant user load of the
          project, this was by far one of the exciting projects I had the
          opportunity to work on.
        </ParagraphStyled>
        <VerticalSpacer value={"1rem"} />
        <div>
          <b>Tech:</b>
          <VerticalSpacer value={".5rem"} />
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>CSS in JS</li>
            <li>Redux</li>
            <li>Redux-Saga</li>
          </ul>
        </div>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default OneAndOne;
