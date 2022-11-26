import * as React from "react";
import styled from "styled-components";
import Layout from "../../../layout/layout";
import { ParagraphStyled } from "../../../pragraph";
import { CenterMargin } from "../../../center-margin/center-margin.styled";
import { Icons } from "../../../../icons";
import { IconLink } from "../../../icon-link";
import { Signature } from "../../../Signature";
import { useRef } from "react";
import { useIsInView } from "../../../../hooks/useIsinView";
import {
  Person,
  Name,
  SameAs,
  Image,
  FamilyName,
  HomeLocation,
  Address
} from "@react-microdata/person";
import { sm } from "../../../../css/media-queries";
import {
  AddressCountry,
  AddressLocality,
  PostalAddress
} from "@react-microdata/postal-address";

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

const ImgWrapper = styled.div`
  overflow: hidden;
  margin-left: -5rem;
  margin-right: -5rem;
  ${sm`
    margin-left: 0;
    margin-right: 0;
    border-radius: 500px;

    width: 300px;
    height: 300px;
  `}
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
            <Person
              ref={ref}
              style={{
                margin: "0 35px",
                textAlign: "center"
              }}
            >
              <div
                style={{
                  marginBottom: "3rem",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <ImgWrapper>
                  <Image
                    as={"img"}
                    src="https://avatars.githubusercontent.com/u/28537457?v=4"
                    alt=""
                  />
                </ImgWrapper>
              </div>
              <Greeting>
                Hi! I’m <Name as={"span"}>Stanislav</Name>{" "}
                <FamilyName as={"span"}>Panchenko</FamilyName>
              </Greeting>
              <Exlpination>
                <span>freelance, fullstack web developer located in</span>
                <HomeLocation.Place as={"span"}>
                  <Address.PostalAddress>
                    <AddressCountry as={"span"}>Germany</AddressCountry>,{" "}
                    <AddressLocality as={"span"}>Passau</AddressLocality>
                  </Address.PostalAddress>
                </HomeLocation.Place>
              </Exlpination>
              <ParagraphStyled>
                <span>If you have a project in mind, drop me a message.</span>
              </ParagraphStyled>
              <CenterIcon>
                <SameAs as={"meta"} content={"https://github.com/rilexus"} />
                <IconLink url={"https://github.com/rilexus"}>
                  {Icons.github}
                </IconLink>
                <SameAs
                  as={"meta"}
                  content={"https://www.linkedin.com/in/stanislav-p-98b254192/"}
                />
                <IconLink
                  url={"https://www.linkedin.com/in/stanislav-p-98b254192/"}
                >
                  {Icons.linkedin}
                </IconLink>
              </CenterIcon>
            </Person>
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
