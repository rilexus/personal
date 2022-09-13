import React, { FC } from "react";
import { H1 } from "../components/H1";
import Header from "../components/header/header";
import { IntroText } from "../components/intro-text/intro-text.styled";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import Link from "next/link";

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;

const Grid: FC = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

const TitleWrapper = styled.div`
  transition: transform 200ms;
`;

const ImgWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  transform: scale(1);
  transition: transform 200ms;
  &:hover {
    transform: scale(1.03);
    ${TitleWrapper} {
      transform: translateY(-20px);
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
const Thumbnail = ({ src, title, subtitle }: any) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={src} alt="" />
      </ImgWrapper>

      <TitleWrapper>
        <div
          style={{
            marginBottom: ".5rem",
            fontSize: "1.5rem",
            fontWeight: 700
          }}
        >
          {title}
        </div>
        <div>{subtitle}</div>
      </TitleWrapper>
    </Wrapper>
  );
};

const Examples = () => {
  return (
    <div>
      <Header />
      <Layout>
        <div
          style={{
            paddingTop: "4rem"
          }}
        >
          <H1>Examples</H1>
          <IntroText
            style={{
              marginBottom: "3rem"
            }}
          >
            Look what I can do.
          </IntroText>
        </div>
        <Grid>
          <A href={"https://www.demo1.stanislavpanchenko.de"}>
            <Thumbnail
              src={"/analog_thumbnail.png"}
              title={"Analog"}
              subtitle={"Film camera shop"}
            />
          </A>
        </Grid>
      </Layout>
    </div>
  );
};

export default Examples;
