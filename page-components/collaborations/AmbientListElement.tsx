import React from "react";
import ElemHeader from "./ElementHeader";
import ElemContentWrapper from "./ElementContentWrapper";
import ContentH3 from "./ContentH3";
import { ParagraphStyled } from "../../components/pragraph";
import { ExternalLink } from "../../components/external-link/ExternalLink";
import DropdownListElement from "../../components/dropdown-list/dropdown-list-element/DropdownListElement";

const AmbientListElement = ({ imgSrc }: any) => {
  return (
    <DropdownListElement
      name={"Ambient_Inovation"}
      renderHeader={() => (
        <ElemHeader>
          <img
            style={{
              marginLeft: "10px"
            }}
            height={60}
            width={140}
            src={imgSrc}
            alt="Ambient Innovation brand logo."
          />
        </ElemHeader>
      )}
    >
      <ElemContentWrapper>
        <ContentH3>Ambient Inovation</ContentH3>
        <ParagraphStyled>
          Sie sind technologische Experten mit einer Vorliebe für: Lösungen
          komplexer Probleme, nutzungsfreundliche Anwendungen und enge
          Zusammenarbeit.
        </ParagraphStyled>
        <ParagraphStyled>
          Als Digitalagentur für IT, App- und Webentwicklung entwickeln sie für
          Sie effiziente Software: Frontends, Backends und Apps. Die Kombination
          aus Expertenwissen mit einem tiefen Verständnis für Prozessabläufe
          schafft nachhaltige Webanwendungen. Ihr Kölner Team besteht aus
          Software-Spezialisten durch und durch. Sie kombinieren modernste
          Technologien, agile Entwicklungsmethoden, Strategie und Design für ein
          klares Ziel: Der Entwicklung von Lösungen, die begeistern.
        </ParagraphStyled>
        <ExternalLink href="https://ambient-innovation.com/">
          Website
        </ExternalLink>
      </ElemContentWrapper>
    </DropdownListElement>
  );
};

export default AmbientListElement;
