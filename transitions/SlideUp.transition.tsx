import { ReactNode, useEffect, useState } from "react"
import posed from "react-pose"
import * as React from "react"
import styled from "styled-components"

interface SlideUpAnimationPropsI {
  children: ReactNode | ReactNode[]
  duration: number
  animate: boolean
  delay?: number
}
function SlideUpTransition({
  animate,
  duration,
  children,
  delay,
}: SlideUpAnimationPropsI) {
  return (
    <div
      style={{
        transitionDelay: `${delay}ms`,
        transition: `transform ${duration}ms`,
        transform: `translateY(${animate ? "0%" : "30%"})`,
      }}
    >
      {children}
    </div>
  )
}

export default SlideUpTransition
