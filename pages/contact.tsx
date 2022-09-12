import * as React from "react";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Align from "../components/align/align";
import PageTitle from "../components/page-title/page-title";
import SEO from "../components/seo";
import posed, { PoseGroup } from "react-pose";
import MainButton from "../components/main-button/main-button";
import styled from "styled-components";
import { ParagraphStyled } from "../components/pragraph";
import { CenterMargin } from "../components/center-margin/center-margin.styled";
import Email from "../components/email/email";
import {
  FamilyName,
  GivenName,
  MakesOffer,
  Person,
  SameAs
} from "@react-microdata/person";
import { Url } from "@react-microdata/offer";
import { Email as EmailItemProp } from "@react-microdata/person/dist/src/itemProps/Email";
import { Flex } from "../components/flex/Flex";

export const LetsChat = styled.div`
  font-size: 2.24rem;
  line-height: 0.9;
  margin: 0 0 3vh 0;
  font-weight: 900;
  color: #111;
`;

const GrowAnimation = posed.div({
  init: {
    opacity: 0,
    scale: 0.8
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: ({ duration }: any) => ({
      opacity: { duration },
      scale: { duration }
    })
  }
});

const Contact = () => {
  return (
    <div>
      <SEO title="Contact" />
      <Header />
      <PageTitle title={"Contact"} />
      <Layout>
        <Align position={"center"}>
          <div
            style={{
              marginTop: "30vh"
            }}
          ></div>
          <PoseGroup animateOnMount exitPose={"enter"}>
            <GrowAnimation key={"grow-animation-button"} duration={700}>
              <div
                style={{
                  marginTop: "10vh"
                }}
              >
                <LetsChat>Lets Chat!</LetsChat>
                <CenterMargin>
                  <ParagraphStyled>
                    You have a project in mind? Great! Let&lsquo;s chat about
                    it. <br />I will be happy to hear your ideas.
                  </ParagraphStyled>
                </CenterMargin>

                <Person>
                  <MakesOffer.Offer
                    style={{
                      display: "none"
                    }}
                  >
                    <Url>https://stanislavpanchenko.de#service-list</Url>
                  </MakesOffer.Offer>
                  <GivenName
                    style={{
                      display: "none"
                    }}
                  >
                    Stanislav
                  </GivenName>
                  <FamilyName
                    style={{
                      display: "none"
                    }}
                  >
                    Panchenko
                  </FamilyName>
                  <SameAs.URL
                    style={{
                      display: "none"
                    }}
                  >
                    https://www.linkedin.com/in/stanislav-p-98b254192/
                  </SameAs.URL>
                  <EmailItemProp>
                    <Flex justify={"center"} align={"center"}>
                      <MainButton>
                        <Email />
                      </MainButton>
                    </Flex>
                  </EmailItemProp>
                </Person>
              </div>
            </GrowAnimation>
          </PoseGroup>
        </Align>
      </Layout>
    </div>
  );
};

export default Contact;
