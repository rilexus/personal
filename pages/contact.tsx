import * as React from "react";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Align from "../components/align/align";
import PageTitle from "../components/page-title/page-title";
import SEO from "../components/seo";
import { motion, AnimatePresence } from "framer-motion";
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

const growVariants = {
  init: {
    opacity: 0,
    scale: 0.8
  },
  enter: (duration: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: duration / 1000 }
  })
};

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
          <AnimatePresence initial>
            <motion.div
              key={"grow-animation-button"}
              variants={growVariants}
              custom={700}
              initial="init"
              animate="enter"
              exit="enter"
            >
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
            </motion.div>
          </AnimatePresence>
        </Align>
      </Layout>
    </div>
  );
};

export default Contact;
