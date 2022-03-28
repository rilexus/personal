import styled from "styled-components"
import { HeaderType } from "./header"

export const NavStyled = styled.nav`
  //position: sticky;
  //top: 0;
  //left: 0;
  position: relative;
  width: 100%;
  height: 55px;
  z-index: 9997;
  //&:after {
  //  content: " ";
  //  border-bottom: 1px solid #eaeaea;
  //  position: absolute;
  //  width: 100%;
  //  top: 55px;
  //}
`
export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  z-index: 1;
`

export const BlurBackground = styled.div<{type: HeaderType}>`
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: ${({type})=> type == HeaderType.black ? '#000000c9' : '#ffffffb3'};
  transition-property: background-color, backdrop-filter,
    -webkit-backdrop-filter;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
export const HeaderContent = styled.header`
  margin: 0 auto;
  max-width: 980px;
  padding: 0 10px;
  position: relative;
  z-index: 2;
  height: 55px;
`
