import * as React from "react"
import styled from "styled-components"
import { ReactNode } from "react"

const Styled = styled.div<{ scale: number }>`
  transform: scale(${({ scale }) => scale});
`

interface ScalePropsI {
  scale: number
  children: ReactNode | ReactNode[]
}
const Scale = ({ scale, children }: ScalePropsI) => {
  return <Styled scale={scale}>{children}</Styled>
}

export default Scale
