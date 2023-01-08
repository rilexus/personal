import * as React from "react";
import { HeaderContent, HeaderWrapper, NavStyled } from "./header.style";
import HeaderLogo from "./header-logo/header-logo";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { xsm } from "../../css/media-queries";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  position: relative;
  align-items: center;
`;

const LinksWrapper = styled.div`
  a {
    text-decoration: none;
    color: #2b2b2b;
    &:hover {
      color: blue;
    }
  }
`;

export enum HeaderType {
  black = "black",
  white = "white"
}

const StyledSpacer = styled.div`
  ${xsm`
    display: flex;
    & > * {
      margin-right: 20px;
    }
  `}
  display: block;
`;
const Spacer = ({ children }: any) => {
  return <StyledSpacer>{children}</StyledSpacer>;
};

const ListTitle = ({ children }: any) => {
  return (
    <div
      style={{
        fontSize: "0.8rem",
        color: "#5d5d5d",
        marginBottom: "0.5rem"
      }}
    >
      {children}
    </div>
  );
};

const Ul = styled.ul`
  margin-bottom: 0.5rem;
  list-style: none;
  ${xsm`
    list-style: inherit;
  
  `}
`;

const Wrapper = styled.div`
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.59);
  z-index: 999;
  position: absolute;
  padding: 1rem;
  width: 100%;
  ${xsm`
    width: 270px;
  `}
`;

const Publications = ({ children }: any) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  const ref = useClickOutside(close);

  return (
    <div
      style={{
        position: "relative"
      }}
      ref={ref}
    >
      <div
        style={{
          cursor: "pointer"
        }}
        onClick={open}
        onTouchStart={open}
      >
        Publications
      </div>
      <Wrapper
        style={{
          display: isOpen ? "inherit" : "none"
        }}
      >
        <ListTitle>Articles</ListTitle>
        <Ul>
          <li>
            <Link href={"https://rilexus.github.io/advanced-react-pattern/"}>
              Advanced React Pattern
            </Link>
          </li>
        </Ul>
        <ListTitle>Packages</ListTitle>
        <Ul>
          <li>
            <Link href={"https://rilexus.github.io/react-transitions-library/"}>
              react-transitions-library
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/rilexus/react-microdata"}>
              react-microdata
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/rilexus/nightfall-ui"}>
              Nightfall UI
            </Link>
          </li>
        </Ul>
      </Wrapper>
    </div>
  );
};

const MediaFlex = styled.div`
  ${xsm`
    justify-content: space-between;
    display: flex;
  `}
`;

const MediaCenter = styled.nav`
  text-align: center;
  a {
    padding-bottom: 0.5rem;
  }
  ${xsm`
    text-align: left;
  `}
`;

const MediaPadding = styled.div`
  margin-bottom: 1rem;
  ${xsm`
    margin-bottom: 0;
  `}
`;

interface HeaderPropsI {}
const Header = ({}: HeaderPropsI) => {
  return (
    <NavStyled key={"header"}>
      <HeaderWrapper>
        <HeaderContent>
          <MediaFlex>
            <div>
              <HeaderLogo />
            </div>
            <LinksWrapper>
              <MediaCenter>
                <Spacer>
                  <MediaPadding>
                    <Link href={"/examples"}>Examples</Link>
                  </MediaPadding>
                  <MediaPadding>
                    <Publications />
                  </MediaPadding>
                  <MediaPadding>
                    <Link href={"/collaborations"}>Collaborations</Link>
                  </MediaPadding>
                  <MediaPadding>
                    <Link href={"/contact"}>Contact</Link>
                  </MediaPadding>
                </Spacer>
              </MediaCenter>
            </LinksWrapper>
          </MediaFlex>
        </HeaderContent>
      </HeaderWrapper>
    </NavStyled>
  );
};

export default Header;
