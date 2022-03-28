import * as React from "react";
import styled from "styled-components";
import BlurBackground from "../blur-background/blur-background";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useMapScrollToValue } from "../../hooks/useMapedValue";

interface PageTitlePropsI {
  title: string;
}
const Style = styled.div`
  font-size: 1.3rem;
  font-weight: 900;
  height: 55px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 0 25px 0 25px;
  border-bottom: 1px solid #d8d8d8;
`;
const TitleStyled = styled.div`
  font-size: 21px;
  line-height: 1.14286;
  font-weight: 600;
  padding: 15px 0 0 25px;
  letter-spacing: 0.011em;
`;
const PageTitle = ({ title }: PageTitlePropsI) => {
  const windowDimension = useWindowDimensions();
  const mappedOPacity = useMapScrollToValue(
    0,
    1,
    windowDimension?.height || 1,
    //@ts-ignore
    windowDimension?.height * 2
  );
  return (
    <Style
      key={"page-title"}
      style={{
        opacity: mappedOPacity || 0,
        textAlign: "left"
      }}
    >
      <BlurBackground blur={20} backgroundColor={"#ffffffb3"}>
        <TitleStyled>{title}</TitleStyled>
      </BlurBackground>
    </Style>
  );
};

export default PageTitle;
