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
      <section
        style={{
          padding: "0 5vw 0 5vw"
        }}
      >
        <ListTitleStyled>I work as</ListTitleStyled>
        <ListSubtitleStyled>Fullstack Developer</ListSubtitleStyled>
        <UlAnimated
          ref={listAnimationRef}
          staggerChildren={200}
          pose={listAppeared ? "visible" : "hidden"}
        >
          <LiAnimated key={"Practice"} duration={700}>
            <h3>Frontend</h3>
            <ParagraphStyled>
              I’m a programmer with good understanding of UX and user needs. I
              know best practices from programmer and designer point of view and
              I combine them in my development process.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Full Stack"} duration={700}>
            <h3>Backend</h3>
            <ParagraphStyled>
              I am competent in backend technologies as well as frontend and I
              work equally well with people from both sides.
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Process"} duration={700}>
            <h3>UI/UX</h3>
            <ParagraphStyled>
              Before starting to develop it is essential to understand the needs
              and requirements for the project. Therefore its crucial to
              communicate with stack holders and future users. Only this way its
              possible to develop a valuable solution!
            </ParagraphStyled>
          </LiAnimated>
          <LiAnimated key={"Prototyping"} duration={700}>
            <h3>Design</h3>
            <ParagraphStyled>
              Design is a repetitive process. To adjust the products
              functionality to the users core needs, it necessary to create
              prototypes and to iterate through design sketches. I’m convinced
              that a quick prototype and a rough sketch always saves a lot of
              development hours.
            </ParagraphStyled>
          </LiAnimated>
        </UlAnimated>
      </section>
    </Viewport>
  );
};
export default ServicesList;
