import * as React from "react";
import styled from "styled-components";
import SlideUpTransition from "../../../../transitions/SlideUp.transition";
import FadeinAnimation from "../../../../transitions/FadeIn.transition";
import useScrollPosition from "../../../../hooks/useScrollPosition";
import Layout from "../../../layout/layout";
import Align from "../../../align/align";
import { IntroText } from "../../../intro-text/intro-text.styled";
import { FC } from "react";

const Padding = styled.div`
  padding-top: 150px;
`;
const TextWrapper = styled.div`
  line-height: 1;
  letter-spacing: -0.12em;
`;
const TitleFontStyle = styled.div`
  font-size: 4rem;
  font-weight: 900;
`;
const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const Title: FC<{ animate: boolean }> = ({ animate, children }) => {
  return (
    <FadeinAnimation animate={animate} duration={1000} delay={0}>
      <SlideUpTransition duration={1000} animate={animate} delay={0}>
        <TitleFontStyle>{children}</TitleFontStyle>
      </SlideUpTransition>
    </FadeinAnimation>
  );
};
const SubtitleFont = styled.div`
  font-size: 3rem;
  font-weight: 600;
`;
const Subtitle: FC<{ animate: boolean }> = ({ animate, children }) => {
  return (
    <FadeinAnimation animate={animate} duration={1000} delay={800}>
      <SlideUpTransition duration={1000} animate={animate} delay={800}>
        <SubtitleFont>{children}</SubtitleFont>
      </SlideUpTransition>
    </FadeinAnimation>
  );
};

const Para: FC<{ animate: boolean }> = ({ animate }) => {
  return (
    <FadeinAnimation animate={animate} duration={1000} delay={1200}>
      <SlideUpTransition duration={1000} animate={animate} delay={1200}>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <IntroText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </IntroText>
        </div>
      </SlideUpTransition>
    </FadeinAnimation>
  );
};

const PortfolioPageHeroTitle = () => {
  const scroll = useScrollPosition();
  console.log(scroll);
  const animate = scroll > 500;
  return (
    <TitleWrapper>
      <Layout>
        <Padding>
          <Align position={"center"}>
            <TextWrapper>
              <Title animate={animate}>Title</Title>
              <Subtitle animate={animate}>Subtitle</Subtitle>
            </TextWrapper>
            <Para animate={animate} />
          </Align>
        </Padding>
      </Layout>
    </TitleWrapper>
  );
};

export default PortfolioPageHeroTitle;
