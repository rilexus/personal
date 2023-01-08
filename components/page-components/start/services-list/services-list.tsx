import * as React from "react";
import { ListTitleStyled } from "../../../list/list-title/list-title";
import { ListSubtitleStyled } from "../../../list/list-subtitle/list-subtitle";
import { useRef } from "react";
import posed from "react-pose";
import { LiElemStyled } from "../../../list/li-elem/li-elem";
import { UlList } from "../../../list/ul-list/ul-list.styled";
import Viewport from "../../../viewport/viewport";
import { useAppearFromBottom } from "../../../../hooks/useAppearFromBottom";

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

import ListItemOffer, { MediaTextAlign } from "./ListItemOffer/ListItemOffer";

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
          <BusinessImage
            as={"meta"}
            content={"https://avatars.githubusercontent.com/u/28537457?v=4"}
          />

          <Funder.Person>
            <Name as={"meta"} content={"Stanislav Panchenko"} />
            <Email as={"meta"} content={"email@stanislavpanchenko.de"} />
            <meta
              itemProp={"sameAs"}
              content={"https://www.linkedin.com/in/stanislav-p-98b254192/"}
            />
            <meta itemProp={"sameAs"} content={"https://github.com/rilexus"} />
            <PersonImage
              as={"meta"}
              content={"https://avatars.githubusercontent.com/u/28537457?v=4"}
            />
          </Funder.Person>
          <MediaTextAlign>
            <ListTitleStyled>Services</ListTitleStyled>
            <ListSubtitleStyled>Fullstack Development</ListSubtitleStyled>
          </MediaTextAlign>
          <HasOfferCatalog.OfferCatalog>
            <UlAnimated
              ref={listAnimationRef}
              staggerChildren={200}
              pose={listAppeared ? "visible" : "hidden"}
            >
              <LiAnimated key={"Practice"} duration={700}>
                <ListItemOffer
                  title={"Frontend Development"}
                  description={
                    "Development of complex frontend systems with React and plain JavaScript. Familiar with CSS/SCSS/Styled-Components and the common styling solutions. I’m a programmer with good understanding of UX&UI. I know the best practices from programmer&apos;s and designer&apos;s point of view."
                  }
                />
              </LiAnimated>
              <LiAnimated key={"Full Stack"} duration={700}>
                <ListItemOffer
                  title={"Backend Development"}
                  description={
                    "Implementation of interfaces to connect the external web services. Development of REST endpoints or micro services, mainly with node and nestjs."
                  }
                />
              </LiAnimated>
            </UlAnimated>
          </HasOfferCatalog.OfferCatalog>
        </LocalBusiness>
      </Viewport>
    </Section>
  );
};
export default ServicesList;
