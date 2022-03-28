import * as React from "react"
import {
  HeaderContent,
  HeaderWrapper,
  NavStyled,
} from "./header.style"
import HeaderLogo from "./header-logo/header-logo"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  position: relative;
  align-items: center;
`

const LinksWrapper = styled.div`
  a {
    text-decoration: none;
    color: #2b2b2b;
    margin-right: 20px;
  }
`
export enum HeaderType {
  black = "black",
  white = "white",
}
interface HeaderPropsI {}
const Header = ({  }: HeaderPropsI) => {
  return (
    <NavStyled key={"header"}>
      <HeaderWrapper>
        <HeaderContent>
          <Flex>
            <div>
              <HeaderLogo />
            </div>
            <LinksWrapper>
              <a href={"/collaborations"}>Collaborations</a>
              <a href={"/contact"}>Contact</a>
            </LinksWrapper>
          </Flex>
        </HeaderContent>
      </HeaderWrapper>
    </NavStyled>
  )
}

export default Header
