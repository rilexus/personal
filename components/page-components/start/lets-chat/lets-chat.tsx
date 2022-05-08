import * as React from "react";
import { CenterMargin } from "../../../center-margin/center-margin.styled";
import { ParagraphStyled } from "../../../pragraph";
import MainButton from "../../../main-button/main-button";
import Align from "../../../align/align";
import { LetsChat } from "../../../../pages/contact";
import Viewport from "../../../viewport/viewport";
import styled from "styled-components";
import FadeinAnimation from "../../../../transitions/FadeIn.transition";
import { useRef } from "react";
import SlideUpTransition from "../../../../transitions/SlideUp.transition";
import { useAppearFromBottom } from "../../../../hooks/useAppearFromBottom";
import Email from "../../../email/email";
import { Section } from "../../../section/Section";

const Gradient = styled.div`
  position: relative;
  background: -webkit-linear-gradient(45deg, #f7f7fc, #e9f2f5);
  background: linear-gradient(45deg, #f7f7fc, #e9f2f5);
`;

const LetsChatSection = () => {
  const ref = useRef<any>();
  const inView = useAppearFromBottom(ref);
  return (
    <Section>
      <FadeinAnimation duration={900} animate={inView}>
        <Gradient>
          <Viewport height={"50vh"}>
            <Align position={"center"}>
              <div
                ref={ref}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                <FadeinAnimation duration={900} animate={inView}>
                  <SlideUpTransition
                    duration={700}
                    animate={inView}
                    delay={200}
                  >
                    <LetsChat>Lets Chat!</LetsChat>
                    <CenterMargin>
                      <ParagraphStyled>
                        If you have a project in mind let&lsquo;s chat about it.
                        I will be happy to hear your ideas and give you feedback
                        on best practices.
                      </ParagraphStyled>
                    </CenterMargin>
                    <MainButton>
                      <Email />
                    </MainButton>
                  </SlideUpTransition>
                </FadeinAnimation>
              </div>
            </Align>
          </Viewport>
        </Gradient>
      </FadeinAnimation>
    </Section>
  );
};

export default LetsChatSection;
