import React, { FC, useEffect } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  EasingFunctionNames,
  useMapScrollToValue
} from "../../hooks/useMapedValue";
import Header from "../../components/header/header";
import PageTitle from "../../components/page-title/page-title";
import Opacity from "../../components/opacity/opacity";
import HeroBackground from "../../components/page-components/start/hero-background/hero-background";
import Layout from "../../components/layout/layout";
import Viewport from "../../components/viewport/viewport";
import Sticky from "../../components/sticky/sticky";
import Align from "../../components/align/align";
import AppearTransition from "../../transitions/Appear.transition";
import PageHeroTitle from "../../components/page-hero-title/page-hero-title";
import { HeroHeadline } from "../../components/hero-headline/hero-headline";
import { HeroSubtitle } from "../../components/hero-subtitle/hero-subtitle.styled";
import { CenterMargin } from "../../components/center-margin/center-margin.styled";
import { IntroText } from "../../components/intro-text/intro-text.styled";
import ScrollDownIcon from "../../components/ScrollDownIcon/scroll-down-icon";
import ServicesList from "../../components/page-components/start/services-list/services-list";
import TechList from "../../components/page-components/start/tech-list/tech-list";
import LetsChatSection from "../../components/page-components/start/lets-chat/lets-chat";
import StartPageFooter from "../../components/page-components/start/footer/start-page-footer";
import { printFace } from "./utils/print-face";
import { Section } from "../../components/section/Section";
import { HomeHead } from "../../components/page-components/start/HomeHead";
import elasticFontSize from "../../utils/elasticFontSize";
import useStyle from "../../hooks/useStyle";

const Wrapper = styled.div`
  position: absolute;
  display: block;
  height: 60px;
  width: 35px;
  left: 50%;
  top: 70vh;
  opacity: 1;
  transition: all 0.4s;
  transform: translate(-50%, 100%);
`;

const GradientWrapper = styled.span`
  background-color: transparent;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  display: inline-block;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const ClipGradient = styled.h1`
  ${elasticFontSize(60, 130, 500, 1000)};
  margin: 0;
  margin-bottom: -0.5rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.005em;
`;

const Gradient: FC = ({ children }) => {
  const { height = 1 } = useWindowDimensions();
  const mappedGradientPosition = useMapScrollToValue(
    -100,
    100,
    0,
    height * 2 - 200,
    EasingFunctionNames.expoIn
  );

  const mappedOpacityPosition = useMapScrollToValue(
    0,
    1,
    0,
    height * 2 - 300,
    EasingFunctionNames.expoIn
  );

  const s = useStyle(
    {
      padding: "0.5rem 0",
      background: `linear-gradient(119deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) ${mappedGradientPosition}%, rgba(0, 0, 0, 0) 100%)`,
      opacity: mappedOpacityPosition
    },
    [mappedOpacityPosition, mappedGradientPosition]
  );
  return <GradientWrapper style={s}>{children}</GradientWrapper>;
};
const GradientTitle: FC = ({ children }) => {
  return (
    <Gradient>
      <ClipGradient>{children}</ClipGradient>
    </Gradient>
  );
};

const Title = () => {
  const { height = 1 } = useWindowDimensions();
  const mappedOpacityValue = useMapScrollToValue(
    1,
    0,
    0,
    height * 2,
    EasingFunctionNames.expoIn
  );

  return (
    <Opacity opacity={mappedOpacityValue}>
      <AppearTransition duration={1000} delay={700}>
        <PageHeroTitle
          // Text background animation
          url={"https://media.giphy.com/media/3o6ZtrcBDLanIMbdRe/source.gif"}
        >
          <HeroHeadline>Stanislav Panchenko</HeroHeadline>
          <span
            style={{
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              position: "absolute"
            }}
          >
            <GradientTitle
            // Text gradient scroll animation
            >
              Stanislav Panchenko
            </GradientTitle>
          </span>
        </PageHeroTitle>
      </AppearTransition>
      <AppearTransition duration={1000} delay={1400}>
        <HeroSubtitle>
          web developer · react expert · fullstack developer
        </HeroSubtitle>
      </AppearTransition>
      <AppearTransition duration={1000} delay={1800}>
        <CenterMargin>
          <IntroText>
            Do you have a project in mind and you&lsquo;re looking for a web
            developer? Get in touch with me and we will look over the project
            requirements together.
          </IntroText>
        </CenterMargin>
      </AppearTransition>
    </Opacity>
  );
};

const Home = () => {
  const { height = 1 } = useWindowDimensions();
  const mappedOpacityValue = useMapScrollToValue(
    1,
    0,
    0,
    height * 2,
    EasingFunctionNames.expoIn
  );
  useEffect(() => {
    printFace();
  }, []);

  return (
    <div>
      <HomeHead />
      <Header />
      <PageTitle title={"Home"} />
      <Opacity opacity={mappedOpacityValue}>
        <HeroBackground />
      </Opacity>
      <main>
        <Layout>
          <Section>
            <Viewport height={"300vh"}>
              <Sticky top={"200px"}>
                <Align position={"center"}>
                  <Title />
                </Align>
              </Sticky>
              <Wrapper>
                <AppearTransition duration={1000} delay={2200}>
                  <ScrollDownIcon />
                </AppearTransition>
              </Wrapper>
            </Viewport>
          </Section>
          <ServicesList />
        </Layout>
        <TechList />
        <LetsChatSection />
        <StartPageFooter />
      </main>
    </div>
  );
};

export default Home;
