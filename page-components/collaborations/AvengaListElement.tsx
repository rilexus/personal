import * as React from "react";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components/pragraph";
import { ExternalLink } from "../../components/external-link/ExternalLink";

const AvengaListElement = ({ imgSrc }: any) => {
  console.log(imgSrc);
  return (
    <DropdownListElement
      name={"avenga"}
      renderHeader={() => (
        <ElemHeader>
          <img src={imgSrc} alt="Avenga brand logo" height={60} width={175} />
        </ElemHeader>
      )}
    >
      <ElemContentWrapper>
        <ContentH3>Avenga</ContentH3>
        <ParagraphStyled>
          They are a global IT and digital transformation champion that supports
          their customers in realizing technology’s huge potential for a smarter
          and more sustainable world.
        </ParagraphStyled>
        <ParagraphStyled>
          They have united creativity and innovation with the instant impact and
          execution power of a large IT solution provider.
        </ParagraphStyled>
        <ParagraphStyled>
          Customer experience is the new battleground and Avenga is your partner
          to master the challenge.
        </ParagraphStyled>
        <ExternalLink href={"https://www.avenga.com/"}>Website</ExternalLink>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default AvengaListElement;
