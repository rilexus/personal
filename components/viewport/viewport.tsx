import * as React from "react"
import styled from "styled-components"
import { CSSProperties, ReactNode } from "react"

const Styled = styled.div<{ height: string }>`
  min-height: ${({ height }) => height};
  position: relative;
`
interface ViewportPropsI {
  height: string
  style?: CSSProperties
  children?: ReactNode | ReactNode[]
}
const Viewport = ({ height, children, style }: ViewportPropsI) => {
  return (
    <Styled style={{ ...style }} height={height}>
      {children}
    </Styled>
  )
}
export default Viewport
