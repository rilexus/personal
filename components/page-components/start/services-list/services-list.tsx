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

import { ServiceType } from "@react-microdata/service";
import { ItemOffered, Description } from "@react-microdata/offer";
import styled from "styled-components";
import {
  LocalBusiness,
  Name as BusinessName,
  PriceRange,
  Funder,
  Telephone,
  Image as BusinessImage,
  Address,
  HasOfferCatalog
} from "@react-microdata/local-business";
import { Section } from "../../../section/Section";
import { Name, Image as PersonImage, Email } from "@react-microdata/person";
import {
  AddressCountry,
  AddressLocality,
  AddressRegion
} from "@react-microdata/postal-address";
import { ItemListElement } from "@react-microdata/offer-catalog";

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
    <Section>
      <Viewport height={"100vh"}>
        <LocalBusiness>
          <PriceRange as={"meta"} content={"100€ - 150€ a hour"} />
          <BusinessName as={"meta"} content={"Stanislav Panchenko"} />
          <Telephone as={"meta"} content={"+4917645840631"} />
          <Email as={"meta"} content={"email@stanislavpanchenko.de"} />
          <Address.PostalAddress
            style={{
              display: "none"
            }}
          >
            <AddressCountry>Germany</AddressCountry>
            <AddressLocality>Passau</AddressLocality>
            <AddressRegion>Bavaria</AddressRegion>
          </Address.PostalAddress>
          <BusinessImage.URL
            style={{
              display: "none"
            }}
          >
            <div itemProp={"url"}>
              https://avatars.githubusercontent.com/u/28537457?v=4
            </div>
          </BusinessImage.URL>
          <Funder.Person>
            <Name as={"meta"} content={"Stanislav Panchenko"} />
            <Email as={"meta"} content={"email@stanislavpanchenko.de"} />
            <meta
              itemProp={"sameAs"}
              content={"https://www.linkedin.com/in/stanislav-p-98b254192/"}
            />
            <meta itemProp={"sameAs"} content={"https://github.com/rilexus"} />
            <PersonImage.URL
              style={{
                display: "none"
              }}
            >
              <div itemProp={"url"}>
                https://avatars.githubusercontent.com/u/28537457?v=4
              </div>
            </PersonImage.URL>
          </Funder.Person>
          <ListTitleStyled>Services</ListTitleStyled>
          <ListSubtitleStyled>Fullstack Development</ListSubtitleStyled>
          <HasOfferCatalog.OfferCatalog>
            <UlAnimated
              ref={listAnimationRef}
              staggerChildren={200}
              pose={listAppeared ? "visible" : "hidden"}
            >
              <LiAnimated key={"Practice"} duration={700}>
                <ItemListElement>
                  <ItemOffered.Service>
                    <ServiceType>
                      <H3>Frontend Development</H3>
                    </ServiceType>
                    <Description>
                      <ParagraphStyled>
                        Development of complex frontend systems with React and
                        plain JavaScript. Familiar with
                        CSS/SCSS/Styled-Components and the common styling
                        solutions. I’m a programmer with good understanding of
                        UX&UI. I know the best practices from programmer and
                        designer point of view.
                      </ParagraphStyled>
                    </Description>
                  </ItemOffered.Service>
                </ItemListElement>
              </LiAnimated>
              <LiAnimated key={"Full Stack"} duration={700}>
                <ItemListElement>
                  <ItemOffered.Service>
                    <ServiceType>
                      <H3>Backend Development</H3>
                    </ServiceType>
                    <Description>
                      <ParagraphStyled>
                        Implementation of interfaces to connect the external web
                        services. Development of REST endpoints or micro
                        services, mainly with node and nestjs.
                      </ParagraphStyled>
                    </Description>
                  </ItemOffered.Service>
                </ItemListElement>
              </LiAnimated>
              <LiAnimated key={"Process"} duration={700}>
                <ItemListElement>
                  <ItemOffered.Service>
                    <ServiceType>
                      <H3>UX Analysis</H3>
                    </ServiceType>
                    <Description>
                      <ParagraphStyled>
                        UI design and UX planing. Its crucial to communicate
                        with stack holders and future users. Only this way its
                        possible to develop a valuable solution!
                      </ParagraphStyled>
                    </Description>
                  </ItemOffered.Service>
                </ItemListElement>
              </LiAnimated>
              <LiAnimated key={"Prototyping"} duration={700}>
                <ItemListElement>
                  <ItemOffered.Service>
                    <ServiceType>
                      <H3>UI Design</H3>
                    </ServiceType>
                    <Description>
                      <ParagraphStyled>
                        Design is a repetitive process. To adjust the product to
                        the users core needs, it is necessary to iterate through
                        the design. A quick prototype and a rough design sketch
                        always saves a lot of development hours.
                      </ParagraphStyled>
                    </Description>
                  </ItemOffered.Service>
                </ItemListElement>
              </LiAnimated>
            </UlAnimated>
          </HasOfferCatalog.OfferCatalog>
        </LocalBusiness>
      </Viewport>
    </Section>
  );
};
export default ServicesList;
