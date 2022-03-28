import * as React from "react"
import styled from "styled-components"
import { ReactNode } from "react"

interface OpacityPropsI {
  opacity: number
  children: ReactNode | ReactNode[]
}
const Opacity = ({ children, opacity }: OpacityPropsI) => (
  <div
    style={{
      opacity,
    }}
  >
    {children}
  </div>
)
export default Opacity
