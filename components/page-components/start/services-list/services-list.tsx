import * as React from "react";
import { ListTitleStyled } from "../../../list/list-title/list-title";
import { ListSubtitleStyled } from "../../../list/list-subtitle/list-subtitle";
import { ParagraphStyled } from "../../../pragraph";
import { useRef } from "react";
import posed from "react-pose";
import { LiElemStyled } from "../../../list/li-elem/li-elem";
import { UlList } from "../../../list/ul-list/ul-list.styled";
import Viewport from "../../../viewport/viewport";
import { useAppearFromBottom } from "../../../../hooks/useAppearFromBottom";

import { Service, Offers as ServiceOffer } from "@react-microdata/service";
import { Offer, ItemOffered, Description, Name } from "@react-microdata/offer";
import styled from "styled-components";

const H3 = styled.h3`
  margin-bottom: 1rem;
`;

const LiAnimated = posed(LiElemStyled)({
  visible: {
    y: 0,
    opacity: 1,
    transition: ({ duration }: any) => ({
      opacity: { ease: "easeOut", duration: duration },
      y: { ease: "easeOut", duration: duration }
    })
  },
  hidden: {
    y: 75,
    opacity: 0,
    transition: ({ duration }: any) => ({
      opacity: { ease: "easeOut", duration: duration },
      y: { ease: "easeOut", duration: duration }
    })
  }
});
const UlAnimated = posed(UlList)({
  visible: {
    staggerChildren: ({ staggerChildren }: any) => staggerChildren
  },
  hidden: {
    // time children
    staggerChildren: ({ staggerChildren }: any) => staggerChildren
  }
});

const ServicesList = () => {
  const listAnimationRef = useRef(null);
  const listAppeared = useAppearFromBottom(listAnimationRef);
  return (
    <Viewport height={"100vh"}>
      <Service
        id={"service-list"}
        as={"section"}
        style={{
          padding: "0 5vw 0 5vw"
        }}
      >
        <ServiceOffer>
          <ListTitleStyled>I work as</ListTitleStyled>
          <ListSubtitleStyled>Fullstack Developer</ListSubtitleStyled>
          <UlAnimated
            ref={listAnimationRef}
            staggerChildren={200}
            pose={listAppeared ? "visible" : "hidden"}
          >
            <LiAnimated key={"Practice"} duration={700}>
              <Offer>
                <ItemOffered>
                  <Name>
                    <H3>Frontend Development</H3>
                  </Name>
                  <Description>
                    <ParagraphStyled>
                      Development of complex frontend systems with React or
                      plain JavaScript. I’m a programmer with good understanding
                      of UX and user needs. I know best practices from
                      programmer and designer point of view and I combine them
                      in my development process.
                    </ParagraphStyled>
                  </Description>
                </ItemOffered>
              </Offer>
            </LiAnimated>
            <LiAnimated key={"Full Stack"} duration={700}>
              <Offer>
                <ItemOffered>
                  <Name>
                    <H3>Backend Development</H3>
                  </Name>
                  <Description>
                    <ParagraphStyled>
                      development of single REST endpoint or micro services,
                      mainly with NodeJS.
                    </ParagraphStyled>
                  </Description>
                </ItemOffered>
              </Offer>
            </LiAnimated>
            <LiAnimated key={"Process"} duration={700}>
              <Offer>
                <ItemOffered>
                  <Name>
                    <H3>UI/UX</H3>
                  </Name>
                  <Description>
                    <ParagraphStyled>
                      UI design and UX planing. Its crucial to communicate with
                      stack holders and future users. Only this way its possible
                      to develop a valuable solution!
                    </ParagraphStyled>
                  </Description>
                </ItemOffered>
              </Offer>
            </LiAnimated>
            <LiAnimated key={"Prototyping"} duration={700}>
              <Offer>
                <ItemOffered>
                  <Name>
                    <H3>Design</H3>
                  </Name>
                  <Description>
                    <ParagraphStyled>
                      Design is a repetitive process. To adjust the products
                      functionality to the users core needs, it necessary to
                      create prototypes and to iterate through design sketches.
                      I’m convinced that a quick prototype and a rough sketch
                      always saves a lot of development hours.
                    </ParagraphStyled>
                  </Description>
                </ItemOffered>
              </Offer>
            </LiAnimated>
          </UlAnimated>
        </ServiceOffer>
      </Service>
    </Viewport>
  );
};
export default ServicesList;
