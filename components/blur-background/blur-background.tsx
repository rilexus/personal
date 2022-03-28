import * as React from "react"
import styled from "styled-components"
import { HeaderType } from "../header/header"
import { ReactNode } from "react"
//#ffffffb3
const BlurBackgroundStyled = styled.div<{
  blur: number
  backgroundColor: string
}>`
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  backdrop-filter: saturate(180%) blur(${({ blur }) => blur}px);
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition-property: background-color, backdrop-filter,
    -webkit-backdrop-filter;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`

interface BlurBackgroundPropsI {
  children: ReactNode | ReactNode[]
  blur: number
  backgroundColor: string
}

const Styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const BlurBackground = ({
  children,
  blur,
  backgroundColor,
}: BlurBackgroundPropsI) => {
  return (
    <Styled>
      <BlurBackgroundStyled blur={blur} backgroundColor={backgroundColor}>
        <ContentWrapper>{children}</ContentWrapper>
      </BlurBackgroundStyled>
    </Styled>
  )
}

export default BlurBackground
