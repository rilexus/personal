import * as React from "react";
import { ListTitleStyled } from "../../../list/list-title/list-title";
import { ListSubtitleStyled } from "../../../list/list-subtitle/list-subtitle";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { LiElemStyled } from "../../../list/li-elem/li-elem";
import { UlList } from "../../../list/ul-list/ul-list.styled";
import Viewport from "../../../viewport/viewport";
import { useAppearFromBottom } from "../../../../hooks/useAppearFromBottom";

import { Section } from "../../../section/Section";
import ListItemOffer, { MediaTextAlign } from "./ListItemOffer/ListItemOffer";

const LiAnimated = motion.create(LiElemStyled);
const liVariants: Variants = {
  visible: (duration: number) => ({
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: duration / 1000 }
  }),
  hidden: (duration: number) => ({
    y: 75,
    opacity: 0,
    transition: { ease: "easeOut", duration: duration / 1000 }
  })
};
const UlAnimated = motion.create(UlList);
const ulVariants = {
  visible: (staggerChildren: number) => ({
    transition: { staggerChildren: staggerChildren / 1000 }
  }),
  hidden: (staggerChildren: number) => ({
    transition: { staggerChildren: staggerChildren / 1000 }
  })
};

const ServicesList = () => {
  const listAnimationRef = useRef(null);
  const listAppeared = useAppearFromBottom(listAnimationRef);
  return (
    <Section>
      <Viewport height={"100vh"}>
        <MediaTextAlign>
          <ListTitleStyled>Services</ListTitleStyled>
          <ListSubtitleStyled>Fullstack Development</ListSubtitleStyled>
        </MediaTextAlign>
        <UlAnimated
          ref={listAnimationRef}
          variants={ulVariants}
          custom={200}
          initial="hidden"
          animate={listAppeared ? "visible" : "hidden"}
        >
          <LiAnimated key={"Practice"} variants={liVariants} custom={700}>
            <ListItemOffer
              title={"Frontend Development"}
              description={
                "Development of complex frontend systems with React and plain JavaScript. Familiar with CSS/SCSS/Styled-Components and the common styling solutions. I’m a programmer with good understanding of UX&UI. I know the best practices from programmer&apos;s and designer&apos;s point of view."
              }
            />
          </LiAnimated>
          <LiAnimated key={"Full Stack"} variants={liVariants} custom={700}>
            <ListItemOffer
              title={"Backend Development"}
              description={
                "Implementation of interfaces to connect the external web services. Development of REST endpoints or micro services, mainly with node and nestjs."
              }
            />
          </LiAnimated>
        </UlAnimated>
      </Viewport>
    </Section>
  );
};
export default ServicesList;
