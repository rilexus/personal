import * as React from "react";
import styled from "styled-components";
import Layout from "../../../layout/layout";
import { ParagraphStyled } from "../../../pragraph";
import { CenterMargin } from "../../../center-margin/center-margin.styled";
import { Icons } from "../../../../icons";
import { IconLink } from "../../../icon-link";
import Align from "../../../align/align";
import { Section } from "../../../section/Section";
import { Signature } from "../../../Signature";
import { useEffect, useRef, useState } from "react";
import { useIsInView } from "../../../../hooks/useIsinView";

const Background = styled.div<{ opacity?: number }>`
  background-color: #fbfcfd;
  opacity: ${({ opacity }) => opacity || 1};
  padding-top: 20vh;
  padding-bottom: 20vh;
`;
const Greeting = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0 0 5px;
`;
const Exlpination = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
`;
const CenterIcon = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #c9c9c9;
  padding-top: 1rem;
  margin-top: 3rem;
  & a {
    margin: 0 1rem 0 1rem;
  }
`;

interface StartPageFooterPropsI {}
const StartPageFooter = ({}: StartPageFooterPropsI) => {
  const ref = useRef(null);

  const animate = useIsInView(ref);

  return (
    <section>
      <Background>
        <Layout>
          <CenterMargin>
            <div
              ref={ref}
              style={{
                margin: "0 35px"
              }}
            >
              <Greeting>Hi! I’m Stanislav,</Greeting>
              <Exlpination>
                freelance, fullstack web developer located in germany.
              </Exlpination>
              <ParagraphStyled>
                <span>
                  always on the lookout for new, interesting web projects! If
                  you have a project in mind, drop me a message.
                </span>
              </ParagraphStyled>
              <CenterIcon>
                <IconLink url={"https://github.com/rilexus"}>
                  {Icons.github}
                </IconLink>
                <IconLink
                  url={"https://www.linkedin.com/in/stanislav-p-98b254192/"}
                >
                  {Icons.linkedin}
                </IconLink>
              </CenterIcon>
            </div>
            <div
              style={{
                display: "inline-block",
                transform: "rotate(-8deg) translate(18px, 25px)",
                transformOrigin: "50% 50%"
              }}
            >
              <Signature
                animate={animate}
                stroke={"black"}
                width={"300"}
                height={"100"}
                strokeWidth={7}
              />
            </div>
          </CenterMargin>
        </Layout>
      </Background>
    </section>
  );
};

export default StartPageFooter;
