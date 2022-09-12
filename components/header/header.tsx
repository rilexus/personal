import * as React from "react";
import { HeaderContent, HeaderWrapper, NavStyled } from "./header.style";
import HeaderLogo from "./header-logo/header-logo";
import styled from "styled-components";
import Link from "next/link";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

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
  display: flex;
  & > * {
    margin-right: 20px;
  }
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
      <div
        style={{
          position: "absolute",
          width: "270px",
          padding: "1rem",
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
      </div>
    </div>
  );
};

interface HeaderPropsI {}
const Header = ({}: HeaderPropsI) => {
  return (
    <NavStyled key={"header"}>
      <HeaderWrapper>
        <HeaderContent>
          <Flex>
            <div>
              <HeaderLogo />
            </div>
            <LinksWrapper>
              <nav>
                <Spacer>
                  <Link href={"/demos"}>Demos</Link>
                  <Publications />
                  <Link href={"/collaborations"}>Collaborations</Link>
                  <Link href={"/contact"}>Contact</Link>
                </Spacer>
              </nav>
            </LinksWrapper>
          </Flex>
        </HeaderContent>
      </HeaderWrapper>
    </NavStyled>
  );
};

export default Header;
