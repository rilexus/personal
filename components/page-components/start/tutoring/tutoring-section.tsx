import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Section } from "../../../section/Section";
import Viewport from "../../../viewport/viewport";
import Align from "../../../align/align";
import { ParagraphStyled } from "../../../pragraph";
import { CenterMargin } from "../../../center-margin/center-margin.styled";
import { ListTitleStyled } from "../../../list/list-title/list-title";
import { ListSubtitleStyled } from "../../../list/list-subtitle/list-subtitle";
import MainButton from "../../../main-button/main-button";
import Email from "../../../email/email";
import { Flex } from "../../../flex/Flex";
import { useAppearFromBottom } from "../../../../hooks/useAppearFromBottom";
import FadeinAnimation from "../../../../transitions/FadeIn.transition";
import SlideUpTransition from "../../../../transitions/SlideUp.transition";

const HighlightsList = styled.ul`
  margin: 2rem auto 2.5rem;
  padding: 0;
  list-style: none;
  max-width: 420px;
  text-align: center;
`;

const HighlightItem = styled(ParagraphStyled).attrs({ as: "li" })`
  position: relative;
  padding-left: 1.3rem;
  margin-bottom: 0.6rem;

  &:before {
    content: "\2013";
    position: absolute;
    left: 0;
  }
`;

const TutoringSection = () => {
  const ref = useRef<any>();
  const inView = useAppearFromBottom(ref);

  return (
    <Section>
      <Viewport height={"60vh"}>
        <Align position={"center"}>
          <div ref={ref}>
            <FadeinAnimation duration={900} animate={inView}>
              <SlideUpTransition duration={700} animate={inView} delay={200}>
                <ListTitleStyled>Tutoring</ListTitleStyled>
                <ListSubtitleStyled>
                  Private JavaScript lessons
                </ListSubtitleStyled>
                <CenterMargin>
                  <ParagraphStyled>
                    Want to learn JavaScript or get better at building real
                    applications? I give private, one-on-one tutoring lessons
                    tailored to your level and goals, from the fundamentals to
                    working with React and Node.js.
                  </ParagraphStyled>
                  <HighlightsList>
                    <HighlightItem>
                      One-on-one sessions tailored to your level
                    </HighlightItem>
                    <HighlightItem>
                      Flexible scheduling over video call
                    </HighlightItem>
                    <HighlightItem>
                      From JavaScript fundamentals to React and Node.js
                    </HighlightItem>
                    <HighlightItem>
                      Hands-on: you work on real code, not toy exercises
                    </HighlightItem>
                  </HighlightsList>
                </CenterMargin>
                <Flex justify={"center"} align={"center"}>
                  <MainButton>
                    <Email />
                  </MainButton>
                </Flex>
              </SlideUpTransition>
            </FadeinAnimation>
          </div>
        </Align>
      </Viewport>
    </Section>
  );
};

export default TutoringSection;
